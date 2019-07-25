<template>
	<view class="container">
		<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
	</view>
</template>

<script>
	import * as echarts from '@/components/common/echart/echarts/echarts.simple.min.js'; 
	import mpvueEcharts from '@/components/common/echart/mpvue-echarts/src/echarts.vue';

	let lineOption = {
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ['07-22','07-23','07-24','07-25','07-26'],
			show: false,//去掉X轴
			splitLine:{//去掉网格线
				show: false
			}
		},
		yAxis: {
			type: 'value',
			show: false,//去掉X轴
			splitLine:{//网格线
				show: false
			}
		},
		series: [
			{
				name:'最高温度',
				type:'line',
				data:[32, 33, 29, 35, 30, 18, 22],
				symbol: 'circle',
				symbolSize: 8, //空心标记的大小
				smooth: true, //是否平滑曲线显示
				smoothMonotone: 'x',//指明是在 x 轴或者 y 轴上保持单调性
				label: {//图形上的文本标签
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}°C',
						textStyle: {
						  color: '#fcc370',
						  fontStyle: 'normal',
						  fontFamily: '微软雅黑',
						  fontSize: 16,
						}
					},
				},
				lineStyle: {//线条样式
					normal: {
						width: 2,
						color: '#fcc370',
						opacity:1,
					}
				},
				itemStyle: {//折线拐点标志的样式。
					normal: {
						color: '#fcc370',
						borderColor: '#fcc370',
						borderWidth: 2,
					}
				}
			},
			{
				name:'最低温度',
				type:'line',
				data:[30, 29, 20, 30, 18, 15, 18],
				symbol: 'circle',
				symbolSize: 8, //空心标记的大小
				smooth: true, //是否平滑曲线显示
				smoothMonotone: 'x',//指明是在 x 轴或者 y 轴上保持单调性
				label: {//图形上的文本标签
					normal: {
						show: true,
						position: 'bottom',
						formatter: '{c}°C',
						textStyle: {
						  color: '#94ccf9',
						  fontStyle: 'normal',
						  fontFamily: '微软雅黑',
						  fontSize: 16,
						}
					},
				},
				lineStyle: {//线条样式
					normal: {
						width: 2,
						color: '#94ccf9',
						opacity:1,
					}
				},
				itemStyle: {//折线拐点标志的样式。
					normal: {
						color: '#94ccf9',
						borderColor: '#94ccf9',
						borderWidth: 2,
					}
				}
			}
		]
	};

	export default {
		data() {
			return {
			}
		},
		methods: {
			lineInit(e) {
				let {width, height} = e ;
				let canvas = this.$refs.lineChart.canvas 
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				canvas.setChart(lineChart)
				lineChart.setOption(lineOption)
				this.$refs.lineChart.setChart(lineChart)
			}
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
	.container {
		height: 100%;
		width: 100%;
	}
	.ec-canvas {
		width: 100%;
		height: 100%;
	}
</style>
