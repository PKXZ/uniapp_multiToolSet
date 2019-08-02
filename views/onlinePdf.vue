<template>
	<view class="main">
		<ul class="fornt_ydUl">
			<li v-for="(item,index) in dataList" :key="index" @click="ydBook(item)">
				<img :src="url + item.fmUrl">
				<span>{{item.name}}</span>
			</li>
		</ul>
	</view>
</template>

<script>
	import '@/static/css/onlinePdf.css'
	export default{
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
			this.getListData();
		},
		mounted(){
			this.getListData();
		},
		data(){
			return{
				url: this.api.onlineJsonApi,
				dataList: []
			}
		},
		methods:{
			getListData(){
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: this.url + '/pdf.json',
					method: 'GET',
					success: (res) => {
						this.dataList = res.data;
						uni.hideLoading();
					},
					fail: (error) => {
						uni.hideLoading();
						uni.showToast({
							title: error.errMsg,
							icon:'none'
						})
					}
				});
			},
			ydBook(item) {
				//#ifdef MP-ALIPAY
					uni.showToast({
						title: '暂不支持支付宝小程序',
						icon: 'none'
					})
					return;
				//#endif
				const self = this;
				uni.showLoading({
					title: '资源正在加载中'
				});
				uni.downloadFile({
				  url: self.url + item.url,
				  success: function (res) {
					const filePath = res.tempFilePath;
					uni.openDocument({
					  filePath: self.url + filePath,
					  fileType: item.type,
					  success: function (res) {
						uni.hideLoading();
						uni.showToast({
							title: '打开文档成功',
							icon: 'none'
						})
					  },
					  fail: function(error){
						uni.hideLoading();
						uni.showToast({
							title: error.errMsg,
							icon: 'none'
						})
					  }
					});
				  },
				  fail: function(error){
					uni.hideLoading();
				    uni.showToast({
					  title: error.errMsg
				    })
				  }
				});
			}
		}
	}
</script>

<style>
</style>
