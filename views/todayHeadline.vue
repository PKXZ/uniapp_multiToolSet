<template>
	<view class="todayHeadlineContent">
		<!--上半部-->
		<view class="todayHeadlineTop">
			<view class="todayDiv">
				<view class="waves">
					<span>{{nowTime}}</span>
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
						{{item.name}}
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
	export default {
		data() {
			return {
				nowTime: (new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()) + ':' + (new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()),
				ulList: [
					{
						name: 'aaaa'
					},{
						name: 'aaaa'
					},{
						name: 'aaaa'
					},{
						name: 'aaaa'
					},{
						name: 'aaaa'
					},{
						name: 'aaaa'
					},{
						name: 'aaaa'
					},{
						name: 'aaaa'
					}
				]
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
				//this.ulList
			}
		}
	}
</script>

<style>

</style>
