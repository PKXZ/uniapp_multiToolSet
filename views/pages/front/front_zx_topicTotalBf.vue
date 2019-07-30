<template>
	<view class="main">
		
	</view>
</template>

<script>
	export default{
		onLoad(options) {
			const self = this;
			uni.getStorage({
				key: 'zx_section',
				success: function (res) {
					self.itemList = JSON.parse(res.data);
					 uni.setNavigationBarTitle({
						title: self.itemList.bt
					})
				}
			});
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>
