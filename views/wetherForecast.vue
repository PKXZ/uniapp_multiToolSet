<template>
	<view class="wetherContent">
	  <!--上半部分-->
	  <view class="wetherTop">
		  <!--更多按钮-->
		  <view class='wetherGengduo'>
				<i class="iconfont icon-dizhidingwei fl"></i>
				<span class="fl">{{currentCity}}</span>
				<!-- <i class='iconfont icon-gengduo fr'></i> -->
		  </view>
		  <view class="wetherInfo">
				<i class="iconfont currentIcon" :class="currentIcon"></i>
				<text class="currentType">{{currentType}}</text>
				<view class="tag">
					<view>
						<i class="iconfont icon-temp" />
						<view>
							<text>温度</text>
							<text>23℃</text>
						</view>
					</view>
					<view>
						<i class="iconfont icon-fengli" />
						<view>
							<text>风力</text>
							<text>3级</text>
						</view>
					</view>
					<view>
						<i class="iconfont icon-shidu" />
						<view>
							<text>湿度</text>
							<text>50%</text>
						</view>
					</view>
				</view>
			</view>
	  </view>
	  <!--下半部分-->
	  <view class="wetherBottom">
		  <ul>
			<li v-for="(item, index) in wetherList" :key="index">
			  <text class="wetherDate">{{item.date}}</text>
			  <text>{{item.xq}}</text>
			</li>
		  </ul>
		  <chart_WeatherLine></chart_WeatherLine>
		  <ul>
			<li v-for="(item, index) in wetherList" :key="index">
			  <text>{{item.wd}}</text>
			</li>
		  </ul>
	  </view>
	  
	  <!--抽屉-->
	  <uni-drawer :visible="showRigth" mode="right" @close="closeDrawer">
		  <view class="demo-container">
			  <view class="gengduoAdd">
					<i class="iconfont icon-zuojiantou iLeft" @click="hide"></i>
					<i class="iconfont icon-jia iRight" @click="citySelector"></i>
			  </view>
			  <view class="gengduoContent">
					<ul>
						<li v-for="(item,index) in cityList" :key="index">
							<i class="iconfont icon-dizhidingwei"></i>
							<span class="cityName">{{item.cityName}}</span>
							<span>{{item.wd}}</span>
						</li>
						<div style="clear:both;"></div>
					</ul>
			  </view>
		  </view>
	  </uni-drawer>
	</view>
</template>

<script>
	import '../static/css/wetherForecast.css';
	import uniDrawer from '@/components/common/uni-drawer';
	import chart_WeatherLine from '@/components/general/chart_WeatherLine.vue'
	export default {
		data() {
			return {
				gengduoCT: false,
				currentCity: '成都',
				currentType: '晴转多云',
				currentIcon: 'icon-duoyun',
				wetherList: [
					{
						date: '05-17',
						xq: '周五',
						icon: 'icon-xiaoxue',
						type: '晴',
						wd: '18~25℃',
					  }, {
						date: '今天',
						xq: '周六',
						icon: 'icon-xiaoxue',
						type: '晴',
						wd: '18~25℃'
					  }, {
						date: '05-19',
						xq: '周日',
						icon: 'icon-xiaoxue',
						type: '晴',
						wd: '18~25℃'
					  }, {
						date: '05-20',
						xq: '周天',
						icon: 'icon-xiaoxue',
						type: '晴',
						wd: '18~25℃'
					  }, {
						date: '05-21',
						xq: '周一',
						icon: 'icon-xiaoxue',
						type: '晴',
						wd: '18~25℃'
					  }
				],
				cityList: [
					{
						cityName: '成都',
						wd: '10~20℃'
					  }, {
						cityName: '成都',
						wd: '10~20℃'
					  }
				],
				showRigth: false
			}
		},
		onNavigationBarButtonTap(btn){
			console.log(JSON.stringify(btn))
			this.gengduoFun();
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
			  backgroundColor: '#48c6ef',
			  animation: {
				duration: 400,
				timingFunc: 'easeIn'
			  }
			})
			//获取当前位置
			uni.getLocation({
				type: 'wgs84',//默认为 wgs84 返回 gps 坐标，gcj02 返回国测局坐标
				success: function (res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				},
				fail: function (err) {
					console.log(err);
				}
			});
		},
		methods:{
			gengduoFun(){
				this.showRigth = true
			},
			closeDrawer() {
				this.showRigth = false
			},
			hide() {
				this.showRigth = false
			},
			citySelector(){
				uni.navigateTo({
					url: '/views/citySelector',
				})
			}
		},
		components:{
			uniDrawer,
			chart_WeatherLine
		}
	}
</script>

<style>
</style>
