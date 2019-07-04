<template>
	<view class="todayHeadlineContent">
		<!--上半部-->
		<view class="todayHeadlineTop">
			<view class="todayDiv">
				<view class="waves">
					<span class="hours">{{hours}}</span>
					<span class="mh">:</span>
					<span>{{minutes}}</span>
				</view>
			</view>
			<view class="ellipseDiv">
				<view class="ellipse ellipseOne"></view>
				<view class="ellipse ellipseTwo"></view>
				<view class="ellipse ellipseThree"></view>
				<view class="ellipse ellipseFour"></view>
				<view class="ellipse ellipseFive"></view>
			</view>
		</view>
		<!--下半部-->
		<view class="todayHeadlineBottom">
			<scroll-view scroll-y="true" :class="ulList.length > 0 ? 'todayScroll' : ''">
				<ul class="todayListUl">
					<li v-for="(item,index) in ulList" :key="index">
						<uniSwipeAction :options="opt" @click="bindClick">
							<div class="clockDiv">
								<div>
									<span>{{item.time}}</span>
									<p>{{item.pointTime}}</p>
								</div>
								<switch color="#20e6b8" @change="alarmSwitch($event,index)"></switch>
							</div>
							<div class="periodDiv">
								<ul>
									<li 
										v-for="(week,indx) in weekList" 
										:key="indx" 
										:class="item.interval.indexOf(week) != -1 ? 'usedLi' : ''">
										{{week}}
									</li>
								</ul>
							</div>
						</uniSwipeAction>
					</li>
				</ul>
			</scroll-view>
			<view class="iconBottom" :class="ulList.length > 0 ? 'fixedIcon' : 'iconBottomF'">
				<i class="iconfont icon-jia" @click="addAlarm"></i>
			</view>
		</view>
	</view>
</template>

<script>
	import '../static/css/todayHeadline.css';
	import uniSwipeAction from '@/components/common/uni-swipe-action';
	export default {
		data() {
			return {
				hours: new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours(),
				minutes: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
				weekList: ['日','一','二','三','四','五','六'],
				ulList: [
					{
						time: '09:00',
						pointTime: '上午',
						interval: ['一','二','三','四','五']
					},{
						time: '18:00',
						pointTime: '下午',
						interval: ['一','二','三','四','五']
					},{
						time: '07:00',
						pointTime: '上午',
						interval: ['一','二','三','四','五']
					},{
						time: '13:14',
						pointTime: '下午',
						interval: ['日','六']
					}
				],
				opt: [{
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}],
			}
		},
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
			uni.setNavigationBarColor({
			  frontColor: '#ffffff',
			  backgroundColor: '#208ffa',
			  animation: {
				duration: 400,
				timingFunc: 'easeIn'
			  }
			})
		},
		mounted(){
			
		},
		methods:{
			addAlarm(){
				//添加闹钟
				uni.navigateTo({
					url: '/views/pages/setAlarm',
				});
			},
			bindClick(value) {
				uni.showToast({
					title: `点击了${value.text}按钮`,
					icon: 'none'
				})
			},
			alarmSwitch(e,index){
				//闹钟开关
				console.log(e.target.value);
				console.log(index);
			}
		},
		components:{
			uniSwipeAction
		}
	}
</script>

<style>

</style>
