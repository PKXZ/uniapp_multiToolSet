<template>
	<view class="main">
		
	</view>
</template>

<script>
	export default{
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>
