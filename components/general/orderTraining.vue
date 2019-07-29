<template>
	<view class="container">
		<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
	</view>
</template>

<script>
	import * as echarts from '@/components/common/echart/echarts/echarts.simple.min.js'; 
	import mpvueEcharts from '@/components/common/echart/mpvue-echarts/src/echarts.vue';

	let lineOption = {
		title: {
			text: '顺序训练',
			subtext: '6/100',
			x: 'center',
			y: 'center',
			textStyle: {
				fontSize:50,
				fontWeight:'normal',
				color: ['#fff']
			},
			subtextStyle: {
				color: '#fff',
				fontSize: 50
			},
		},
		graphic:[
			{
				type:'circle',
				left:'center',
				top:'middle',
				shape:{r:190},
				style:{
					fill:'#00dee6',
				}
			}
		],
		series: [
			/*仪表盘图，做中间刻度线*/
			{
				type: 'gauge',
				name: '业务指标',
				radius:'60%',
				startAngle: 0,
				endAngle:-359.99,
				splitNumber:100,
				pointer:{show:false},//指针
				detail: {show:false},//数据
				title: {show: false},//标题
				data: [
					{value: 6, name: '完成率'}
				],
				axisLine:{
					lineStyle: {
						color: [[1, 'rgb(211, 253, 252)']],//仪表盘的轴线可以被分成不同颜色的多段
						width: 20,
					}
				},
				axisTick: {show: false},
				splitLine: {//刻度线
					show: true,
					length:15,
					lineStyle: {
						color: '#cdcccc',
						width: 2,
						type: 'solid',
					},
				},
				axisLabel: {
					show: false
				}
			},
			/*内心原型图，展示整体数据概览*/
			{
			name: '顺序练习',
			type: 'pie',
			clockWise: true,//饼图的扇区是否是顺时针排布。
			startAngle:-270,//起始角度，支持范围[0, 360]
			radius: ['61%', '59%'],
			hoverAnimation: false,
			center: ['50%', '50%'],
			data: [{
				value: 6,
				label: {
					normal: {
						formatter: '{a}:{d}%',
						position: 'center',
						show: false,
						textStyle: {
							fontSize: '50',
							fontWeight: 'normal',
							color: '#fff'
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#00a9f4'
					}
				}
			},{
				value: 94,
				name: '未完成',
				label: {
					normal: {
						position: 'center',
						show: false,
					}
				 },
				itemStyle: {
					normal: {
						color: 'rgb(211, 253, 252)', // 未完成的圆环的颜色
					}
				}
			}]
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
