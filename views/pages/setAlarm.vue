<template>
	<!--设置闹钟-->
	<view class="main" style="background: #F4F5F6;">
		<view class="alarmView">
			<picker-view class="alarmView" v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in hours" :key="index">{{item}}时</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in minutes" :key="index">{{item}}分</view>
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
				<switch color="#20e6b8" @change="bellSwitchChange"></switch>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>震动</span>
				</view>
				<switch color="#20e6b8" @change="vibrationSwitchChange"></switch>
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
		data() {
			return {
				weekList: ['日','一','二','三','四','五','六'],
				selWeekList: [],
				bellStr: '无',
				vibrationStr: '无',
				bell: false,
				vibration: false,
				bellArry: [{name:'BixBy 闹钟(BixBy)'},{name: 'BixBy 闹钟(BixBy)2'}, {name:'BixBy 闹钟(BixBy)3'}],
				bellIndex: 0,
				echo: 'false',//默认不是回显
				
				hours: [],
				minutes: [],
				time: '',
                visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				value: []
			}
		},
		mounted(){
			//拼凑结构
			this.getTimeNumber(1,24,'hours');
			this.getTimeNumber(0,60,'minutes');
			//获取参数
			this.echo = location.href.split('echo=')[1];
			//是否回显
			if(this.echo === 'true'){	
				//回显数据
				uni.getStorage({
					key: 'echoSelAlarm',
					success: function (res) {
						debugger
						//写到了这里！！！！！！回显数据
						const echoSelAlarm = res.data;
						if(echoSelAlarm){
							let obj = JSON.parse(echoSelAlarm);
						}
					}
				});
			}else{
				//当前时间
				const nowHours = new Date().getHours();
				const nowMinutes = new Date().getMinutes();
				this.value.push(nowHours - 1);
				this.value.push(nowMinutes);
				this.time = (nowHours > 10 ? nowHours : '0' + nowHours) + ':' + (nowMinutes > 10 ? nowMinutes : '0' + nowMinutes);
			}
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
					this.hours = this.hours.concat(arr);
				}else if(type === 'minutes'){
					this.minutes = this.minutes.concat(arr);
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
					arr = arr.concat(selAlarm);
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
			}
		}
	}
</script>

<style>
</style>
