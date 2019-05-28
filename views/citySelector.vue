<!--城市选择器-->
<template>
	<view class="citySelector">
		<view class="citySearch" ref="citySearch">
			<input placeholder="搜索城市名称"/>
			<button class="primary">搜索</button>
		</view>
		<view class="dwCity" ref="dwCity">
			<text class="dw">定位城市</text>
			<text class="citys">
				<i class="iconfont icon-dizhidingwei"></i>
				成都
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
		components: {
			uniIndexedList
		},
		data() {
			return {
				list: airport.list
			}
		},
		mounted(){
			const self = this;
			self.$nextTick(function(){
				if(self.$refs.citySearch.$el.clientHeight && self.$refs.dwCity.$el.clientHeight){
					self.otherHeight = self.$refs.citySearch.$el.clientHeight + self.$refs.dwCity.$el.clientHeight;
				}
			})
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			}
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