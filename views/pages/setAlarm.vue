<template>
	<!--设置闹钟-->
	<view class="main" style="background: #F4F5F6;">
		<view class="alarmView">
			<!-- <ul class="hoursUl">
				<li v-for="(item,index) in hours" :key="index"><span>{{item}}</span></li>
			</ul>
			<span class="mh">:</span>
			<ul class="minutesUl">
				<li v-for="(item,index) in minutes" :key="index"><span>{{item}}</span></li>
			</ul> -->
			<picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange">
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in hours" :key="index">{{item}}年</view>
			    </picker-view-column>
			    <picker-view-column>
			        <view class="item" v-for="(item,index) in minutes" :key="index">{{item}}月</view>
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
					<picker @change="vibrationFunChange" :value="vibrationIndex" :range="vibrationArry" range-key="name">
						<span>震动</span>
						<p>{{vibrationStr}}</p>
					</picker>
				</view>
				<switch color="#20e6b8" @change="vibrationSwitchChange"></switch>
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
				vibrationArry: [{name: 'Basic call'},{name: 'Basic call2'},{name: 'Basic call3'}],
				vibrationIndex: 0,
				hours: [],
				minutes: [],
                visible: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`,
				value: [],
			}
		},
		mounted(){
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
			vibrationFunChange(e){
				//震动设置
				this.vibrationIndex = e.target.value;
				this.vibrationStr = this.vibrationArry[e.target.value].name;
			},
			bellSwitchChange(e){
				this.bell =  e.target.value;
			},
			vibrationSwitchChange(e){
				this.vibration =  e.target.value;
			},
			bindChange (e) {
				const val = e.detail.value;
				this.hours = this.hours[val[0]];
				this.minutes = this.minutes[val[1]];
			}
		}
	}
</script>

<style>
</style>
