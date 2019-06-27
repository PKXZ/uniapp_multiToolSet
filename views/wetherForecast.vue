<template>
	<view class="wetherContent">
	  <!--上半部分-->
	  <view class="wetherTop">
		  <!--更多按钮-->
		  <view class='wetherGengduo'>
				<i class="iconfont icon-dizhidingwei fl"></i>
				<span class="fl">{{currentCity}}</span>
				<i class='iconfont icon-gengduo fr' v-if="programGengduoBtn" @click="gengduoFun"></i>
		  </view>
		  <view class="wetherInfo">
				<i class="currentIcon iconfont" :class="currentIcon"></i>
				<text class="currentType">{{currentType}}</text>
				<view class="tag">
					<view>
						<i class="iconfont icon-temp" />
						<view>
							<text>温度</text>
							<text>{{wd}}℃</text>
						</view>
					</view>
					<view>
						<i class="iconfont icon-fengli" />
						<view>
							<text>风力</text>
							<text>{{fl}}</text>
						</view>
					</view>
					<view>
						<i class="iconfont icon-shidu" />
						<view>
							<text>湿度</text>
							<text>{{sd}}%</text>
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
			  <i class="iconfont" :class="item.icon"></i>
			  <text>{{item.type}}</text>
			  <text class="wd">{{item.wd}}</text>
			</li>
		  </ul>
		  <chart_WeatherLine 
			class="chart_WeatherLine" 
			:canvasHightData="canvasHightData" 
			:canvasLowData="canvasLowData" 
			:canvasNumData="canvasNumData"
			:canvasMaximum="canvasMaximum"
			:canvasMinimum="canvasMinimum">
			</chart_WeatherLine>
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
				wd: 0,
				fl: 0,
				sd: 0,
				programGengduoBtn: true,
				currentCity: '',
				currentType: '',
				currentIcon: '',
				wetherList: [],
				/* {
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
				  } */
				cityList: [],
				/* {
					cityName: '成都',
					wd: '10~20℃'
				  }, {
					cityName: '成都',
					wd: '10~20℃'
				  } */
				showRigth: false,
				//canvas的数据
				canvasHightData: [],
				canvasLowData: [],
				canvasNumData: 0,
				canvasMaximum: 0,
				canvasMinimum: 0
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
			this.loadInfo();
			//安卓、ios app和小程序因为右侧模块分布不同，因此更多的图标展示位置不同
			//#ifdef MP
				//所有的小程序
				this.programGengduoBtn = true;
			//#endif
			//#ifdef H5 || APP-PLUS || APP-PLUS-NVUE
				//app包括H5界面
				this.programGengduoBtn = false;
			//#endif
		},
		watch:{
			currentCity(newData,oldData){
				this.getWether(newData);
			}
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
			},
		    loadInfo() {
				//获取当前位置的经纬度
				const self = this;
				uni.getLocation({
					type: 'wgs84',//默认为 wgs84 返回 gps 坐标，gcj02 返回国测局坐标
					success: function (res) {
						const longitude = res.longitude//经度
						const latitude = res.latitude//维度
						self.loadCity(latitude, longitude);
					},
					fail: function (err) {
						console.log('定位失败，默认查询成都');
						self.currentCity = '成都';
						self.loadCity(30.64242,104.04311);
					}
				})
			},
			loadCity(latitude, longitude) {
				//把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置
				const self = this;
				const amapFile = require('../utils/amap-wx.js');
				const markersData = {
				  latitude: '',//纬度
				  longitude: '',//经度
				  key: "c0e9d71cc639c613da5e2c5804b99a9d"//申请的高德地图key
				};
				const myAmapFun = new amapFile.AMapWX({ key: markersData.key });
				myAmapFun.getRegeo({
					 success: function (data) {
						//获取当前城市
						self.currentCity = data[0].regeocodeData.addressComponent.city;
					},
				   fail: function (info) {
					console.log(info);
				   }
				})
			},
			getWether(city){
				//获取天气情况
				const self = this;
				if(city.indexOf('市') > 0){
					city = city.split('市')[0];
				}
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: 'http://apis.juhe.cn/simpleWeather/query',
					method: 'GET',
					dataType: 'json',
					header: {
						'Content-type': 'application/json'
					},
					data: {
						city: city,
						key: 'c9635a6433c99e58484af6aaffbbbd59'
					},
					success: async (res) => {
						const data = res.data.result;
						self.wd =  data.realtime.temperature; //当前温度
						self.fl =  data.realtime.power; //当前风力
						self.sd =  data.realtime.humidity; //当前湿度
						self.currentType = data.realtime.info; //当前天气情况
						let returnWZ = await self.getWZ(data.realtime.info);
						self.currentIcon = 'icon-' + returnWZ;//当前天气状态
						let arr = [];//处理近五天的数据
						let currentWd = '';//当前温度
						let canvasHightData = [];//每天对应最高温度
						let canvasLowData = [];//每天对应最低温度
						self.canvasNumData = data.future.length;//有几天的天气数据
						for(let i = 0; i < data.future.length; i++){
							const dateS = data.future[i].date.split('-');
							let today = '';
							if(new Date(data.future[i].date).toDateString() === new Date().toDateString()){
								//判断是否为今天
								today = '今天';
								currentWd = data.future[i].temperature.replace('/','~');
							}else{
								today = dateS[1] + '-' + dateS[2];
							}
							
							let resultWZMore = await self.getWZ(data.future[i].weather);
							let obj = {
								date: today,
								xq: self.getWeek(data.future[i].date),
								icon: 'icon-' + resultWZMore,
								type: data.future[i].weather,
								wd: data.future[i].temperature.replace('/','~')
							};
							
							//判断哪个是一天中的低温和高温
							const wd = data.future[i].temperature.split('/');
							if(parseInt(wd[0]) > parseInt(wd[1])){
								canvasHightData.push(parseInt(wd[0]));
								canvasLowData.push(parseInt(wd[1]));
							}else{
								canvasHightData.push(parseInt(wd[1]));
								canvasLowData.push(parseInt(wd[0]));
							}
							arr.push(obj);
						}
						//一个数组赋值给另外一个数组
						self.wetherList = self.wetherList.concat(arr);
						self.canvasHightData = self.canvasHightData.concat(canvasHightData);
						self.canvasLowData = self.canvasLowData.concat(canvasLowData);
						//判断数组中最大的数字和最小的数字
						self.canvasMaximum = Math.max.apply(null, canvasHightData);
						self.canvasMinimum = Math.min.apply(null, canvasLowData);
						
						uni.hideLoading();//结束加载动画
					},
					fail: (error) => {
						uni.hideLoading();//结束加载动画
						console.log(error)
					}
				});
			},
			getWeek(dateString){
				//根据xxxx-xx-xx查询周几
				let date;
				if(dateString === ''){
					date = new Date();
				}else{
					const dateArray = dateString.split("-");
					date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
				}
				return "周" + "日一二三四五六".charAt(date.getDay());
			},
			getWZ(wz){
				return new Promise((resolve,reject) => {
					uni.request({
						url: 'https://helloacm.com/api/pinyin',
						method: 'GET',
						dataType: 'json',
						header: {
							'Content-type': 'application/json'
						},
						data: {
							s: wz
						},
						success: (res) => {
							//数组转字符串
							 const str = res.data.result.join('');
							 resolve(str);
						},
						fail: (error) => {
							console.log(error)
							reject(error)
						}
					})
				});
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
