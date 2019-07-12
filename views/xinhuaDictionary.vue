<template>
	<!-- <canvas canvas-id="Canvas" style="width:100%;height:360px;"></canvas> -->

		  <chart_WeatherLine class="chart_WeatherLine"></chart_WeatherLine>
</template>

<script>
	import chart_WeatherLine from '@/components/general/chart_WeatherLine.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
			  backgroundColor: '#48c6ef'
			})
		},
		mounted(){
			const context = wx.createCanvasContext('Canvas');
			context.beginPath();
			context.moveTo(0, 50);
			context.lineTo(50, 150);
			context.stroke();
			context.closePath();
			context.draw();
		  },
		components:{
			chart_WeatherLine
		}
	}
</script>

<style>

</style>
