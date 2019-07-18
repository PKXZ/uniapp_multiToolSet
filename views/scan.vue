<template>
	<view class="main">
		<!-- #ifndef H5 -->
		<view>
			<label>条码内容：</label>
			<span>{{result}}</span>
		</view>
		<view>
			<label>条码类型：</label>
			<span>{{scanType}}</span>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
  export default {
    data() {
      return {
        result: '',
		scanType: ''
      }
    },
	onLoad(options) {
		//动态设置标题
		if (options.label) {
		  uni.setNavigationBarTitle({
			title: options.label
		  })
		}
		
		const self = this;
		//uni.scanCodeAPI暂时不支持h5，所以用别的方式
		// #ifndef H5
			uni.scanCode({
				success: function (res) {
					self.result = res.result;
					self.scanType = res.scanType;
				},
				fail: function(res){
					console.log('接口调用失败的回调函数（识别失败、用户取消等情况下触发）')
					console.log(res)
				},
				complete: function(error){
					console.log('接口调用结束的回调函数（调用成功、失败都会执行）')
					console.log(error)
				}
			});
		// #endif
		//#ifdef H5
			uni.showToast({
				title: '暂不支持H5页面，请于APP或小程序中打开'
			})
		//#endif
	},
    methods: {
     }
  }

</script>

<style>

</style>
