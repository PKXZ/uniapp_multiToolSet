<template>
	<!--设置闹钟-->
	<view class="main" style="background: #F4F5F6;">
		<view class="alarmView">
			设置时间滚动
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
		<view class="uniRowView" @click="bellFun">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>铃声</span>
					<p>{{bell}}</p>
				</view>
				<switch color="#20e6b8"></switch>
			</view>
		</view>
		<view class="uniRowView" @click="vibrationFun">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>震动</span>
					<p>{{vibration}}</p>
				</view>
				<switch color="#20e6b8"></switch>
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
				bell: 'BixBy 闹钟(BixBy)',
				vibration: 'Basic call'
			}
		},
		methods:{
			repeatWeek(item){
				const num = this.selWeekList.indexOf(item);
				if(num === -1){
					this.selWeekList.push(item);
				}else{
					this.selWeekList.splice(num,1);
				}
			},
			bellFun(){
				//铃声设置
			},
			vibrationFun(){
				//震动设置
			}
		}
	}
</script>

<style>
</style>
