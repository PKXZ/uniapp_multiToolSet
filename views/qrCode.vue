<template>
	<!--二维码识别-->
	<view class="main">
		<div id="qrcode"></div>
	</view>
</template>

<script>
	import '../static/css/qrCode.css';
	import QRCode from "qrcodejs2"
	export default {
		data() {
			return {
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
			this.qrcode();
		},
		methods:{
			qrcode() {
				 let qrcode = new QRCode('qrcode', {
					width: 100,
					height: 100, // 高度
					text: '56663159' // 二维码内容
					// render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
					// background: '#f0f'
					// foreground: '#ff0'
				})
				console.log(qrcode)
			},
		}
	}
</script>

<style>
</style>
