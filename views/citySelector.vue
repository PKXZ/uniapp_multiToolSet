<!--城市选择器-->
<template>
	<view class="citySelector">
		<view>
			
		</view>
		<view>
			<text>定位城市：成都</text>
		</view>
		<uni-indexed-list :options="list" :showSelect="false" @click="bindClick" />
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
</style>