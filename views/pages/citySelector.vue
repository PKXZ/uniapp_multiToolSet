<!--城市选择器-->
<template>
	<view class="citySelector">
		<view class="citySearch" ref="citySearch">
			<input placeholder="搜索城市名称"/>
			<button class="primary" @click="searchFun">搜索</button>
		</view>
		<view class="dwCity" ref="dwCity">
			<text class="dw">定位城市</text>
			<text class="citys">
				<i class="iconfont icon-dizhidingwei"></i>
				{{currentCitys}}
			</text>
		</view>
		<uni-indexed-list 
			:otherHeight="140"
			:options="list" 
			:showSelect="false" 
			@click="bindClick" />
	</view>
</template>

<script>
	import airport from '@/utils/airport.js'
	import uniIndexedList from '@/components/common/uni-indexed-list.vue'
	export default {
		data() {
			return {
				list: airport.list,
				currentCitys: ''
			}
		},
		mounted(){
			const self = this;
			uni.showLoading({
				title: '加载中'
			});
			self.loadInfo();
			self.$nextTick(function(){
				if(self.$refs.citySearch && self.$refs.dwCity && self.$refs.citySearch.$el.clientHeight && self.$refs.dwCity.$el.clientHeight){
					self.otherHeight = self.$refs.citySearch.$el.clientHeight + self.$refs.dwCity.$el.clientHeight;
				}
			})
		},
		methods: {
			bindClick(e) {
				//传递参数且返回天气预报界面
                uni.navigateTo({
                    url:'/views/wetherForecast?label=天气预报&cityName=' + e.item.name
                });
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
						uni.showToast({
							title: '定位失败，默认查询成都'
						});
						self.currentCitys = '成都';
						self.loadCity(30.64242,104.04311);
					}
				})
			},
			loadCity(latitude, longitude) {
				//把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置
				const self = this;
				const amapFile = require('../../utils/amap-wx.js');
				const markersData = {
				  latitude: '',//纬度
				  longitude: '',//经度
				  key: "c0e9d71cc639c613da5e2c5804b99a9d"//申请的高德地图key
				};
				const myAmapFun = new amapFile.AMapWX({ key: markersData.key });
				myAmapFun.getRegeo({
					 success: function (data) {
						//获取当前城市
						self.currentCitys = data[0].regeocodeData.addressComponent.city;
						uni.hideLoading();
					},
				   fail: function (info) {
						console.log(info);
						uni.hideLoading();
				   }
				})
			},
			searchFun(){
				//搜索城市
				uni.showLoading({
					title: '暂未做'
				})
			}
		},
		components: {
			uniIndexedList
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}
	.citySearch{
		display: flex;
		flex-direction: row;
		padding: 30upx 30upx;
		background: #fff;
	}
	.citySearch input{
		width: 70%;
		background: #f2f4f7;
		padding: 10upx;
		margin-right: 28upx;
	}
	.dwCity{
		display: flex;
		flex-direction: column;
		height: 140upx;
	}
	.dw{
		padding: 10upx 30upx;
		line-height: 1.5;
		font-size: 24upx;
		background-color: #f7f7f7;
		border-bottom: 1upx solid #c8c7cc;
	}
	.citys{
		padding: 24upx 30upx 24upx 0;
		border-bottom: 1upx solid #c8c7cc;
		margin-left: 30upx;
	}
	.citys i{
		margin-right: 8upx;
	}
</style>