<template>
	<!--设置闹钟-->
	<view class="main grayBg">
		<view class="alarmView">
			<picker-view 
				class="alarmView" 
				v-if="visible" 
				:indicator-style="indicatorStyle" 
				:value="value" 
				@change="bindChange">
			    <picker-view-column>
			        <view 
						class="item" 
						v-for="(item,index) in hours" 
						:key="index">
						{{item}}时
					</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view 
						class="item" 
						v-for="(item,index) in minutes" 
						:key="index">
						{{item}}分
					</view>
			    </picker-view-column>
			</picker-view>
		</view>
		<view class="repeatView">
			<label>重复</label>
			<ul>
				<li 
					v-for="(item,inx) in weekList" 
					:key="inx" 
					@click="repeatWeek(item)"
					:class="selWeekList.indexOf(item) !== -1 ? 'usedLi' : ''">
					{{item}}
				</li>
			</ul>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<picker @change="bellFunChange" :value="bellIndex" :range="bellArry" range-key="name">
						<span>铃声</span>
						<p>{{bellStr}}</p>
					</picker>
				</view>
				<switch color="#20e6b8" :checked="bell" @change="bellSwitchChange"></switch>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>震动</span>
				</view>
				<switch color="#20e6b8" :checked="vibration"  @change="vibrationSwitchChange"></switch>
			</view>
		</view>
		<view class="footerBtn">
			<view class="btnVuewOne">
				<button class="default" size="small" @click="goPage">取消</button>
			</view>
			<view class="btnVuewTwo" v-if="echo === 'false'">
				<button class="primary" size="small" @click="setting">设置</button>
			</view>
			<view class="btnVuewTwo" v-else>
				<button class="primary" size="small" @click="editor">修改</button>
			</view>
		</view>
	</view>
</template>

<script>
	import '../../static/css/setAlarm.css';
	export default {
		onLoad: function (option) {
			//获取参数
			let echoVal;
			if(option.length > 0){
				echoVal = option.echo;
			}
			if(echoVal){
				this.echo = echoVal;
			}
			//是否回显
			if(this.echo === 'true'){	
				//回显数据
				const self = this;
				uni.getStorage({
					key: 'echoSelAlarm',
					success: function (res) {
						const echoSelAlarm = res.data;
						if(echoSelAlarm){
							let obj = JSON.parse(echoSelAlarm);
							self.selWeekList = obj.interval;
							self.bell = obj.bell;
							self.bellStr = obj.bellStr;
							self.vibration = obj.vibration;
							const time = obj.time.split(':');
							self.value.push(parseInt(time[0]) - 1);
							self.value.push(parseInt(time[1]) - 1);
							self.time = obj.time;
							self.echoIndex = obj.echoIndex;
							for(let i = 0; i < self.bellArry.length; i++){
								if(self.bellArry[i].name === self.bellStr){
									self.bellIndex = i;
									break;
								}
							}
						}
					}
				});
			}else{
				//当前时间
				const nowHours = new Date().getHours();
				const nowMinutes = new Date().getMinutes();
				this.value.push(nowHours - 1);
				this.value.push(nowMinutes);
				this.time = (nowHours >= 10 ? nowHours : '0' + nowHours) + ':' + (nowMinutes >= 10 ? nowMinutes : '0' + nowMinutes);
			}
		},
		data() {
			return {
				weekList: ['日','一','二','三','四','五','六'],
				selWeekList: [],
				bellStr: '无',
				bell: false,
				vibration: false,
				bellArry: [{name:'BixBy 闹钟(BixBy)'},{name: 'BixBy 闹钟(BixBy)2'}, {name:'BixBy 闹钟(BixBy)3'}],
				bellIndex: 0,
				
				echo: 'false',//默认不是回显
				echoIndex: -1,
				
				hours: [],
				minutes: [],
				time: '',
                visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				value: []
			}
		},
		created(){
			//拼凑结构
			this.getTimeNumber(1,24,'hours');
			this.getTimeNumber(0,60,'minutes');
		},
		methods:{
			getTimeNumber(minSize,maxSize,type){
				//获取小时数字
				let arr = [];
				for(let i = minSize; i < maxSize;i++){
					if(i < 10){
						arr.push('0' + i);
					}else{
						arr.push(i);
					}
				}
				if(type === 'hours'){
					this.hours = arr;
				}else if(type === 'minutes'){
					this.minutes = arr;
				}
			},
			repeatWeek(item){
				const num = this.selWeekList.indexOf(item);
				if(num === -1){
					this.selWeekList.push(item);
				}else{
					this.selWeekList.splice(num,1);
				}
			},
			bellFunChange(e) {
				//铃声设置
				this.bellIndex = e.target.value;
				this.bellStr = this.bellArry[e.target.value].name;
			},
			bellSwitchChange(e){
				this.bell =  e.target.value;
			},
			vibrationSwitchChange(e){
				this.vibration =  e.target.value;
			},
			bindChange (e) {
                const val = e.detail.value;
				this.time = this.hours[val[0]]  + ':' + this.minutes[val[1]];
			},
			goPage(){
				//返回上一页
				uni.navigateBack({
					delta: 1
				});
			},
			setting(){
				//设置
				let pointTime;
				if(parseInt(this.time.split(':')[0]) <= 12){
					pointTime = '上午';
				}else{
					pointTime = '下午';
				}
				let obj = {
					bell: this.bell,//是否响铃
					bellStr: this.bellStr,//响铃名称
					vibration: this.vibration,//是否震动
					interval: this.selWeekList,//重复日期
					time: this.time,//时间
					pointTime: pointTime, //上下午
					enable: true //是否启用
				};
				let arr = [];
				let selAlarm = uni.getStorageSync('selAlarm');
				if(selAlarm){
					selAlarm = JSON.parse(selAlarm);
					arr = selAlarm;
					arr.push(obj);
					uni.setStorage({
						key: 'selAlarm',
						data: JSON.stringify(arr)
					});
				}else{
					arr.push(obj);
					uni.setStorage({
						key: 'selAlarm',
						data: JSON.stringify(arr)
					});
				}
				uni.navigateTo({
				    url:'/views/todayHeadline?label=设置闹钟'
				});
			},
			editor(){
				//修改
				let pointTime;
				if(parseInt(this.time.split(':')[0]) <= 12){
					pointTime = '上午';
				}else{
					pointTime = '下午';
				}
				let obj = {
					bell: this.bell,//是否响铃
					bellStr: this.bellStr,//响铃名称
					vibration: this.vibration,//是否震动
					interval: this.selWeekList,//重复日期
					time: this.time,//时间
					pointTime: pointTime, //上下午
					enable: true //是否启用
				};
				let arr = [];
				let selAlarm = uni.getStorageSync('selAlarm');
				selAlarm = JSON.parse(selAlarm);
				selAlarm[this.echoIndex] = obj;
				uni.setStorage({
					key: 'selAlarm',
					data: JSON.stringify(selAlarm)
				});
				uni.navigateTo({
				    url:'/views/todayHeadline?label=设置闹钟'
				});
			}
		}
	}
</script>

<style>
</style>
