<template>
	<mpvue-echarts
		:style="{zIndex: -99,height:canvasHeight,width:canvasWidth}"
		class="ec-canvas" 
		@onInit="lineInit" 
		canvasId="line" 
		ref="lineChart">
	</mpvue-echarts>
</template>

<script>
	import * as echarts from '@/components/common/echart/echarts/echarts.simple.min.js'; 
	import mpvueEcharts from '@/components/common/echart/mpvue-echarts/src/echarts.vue';

	export default {
		data() {
			return {
				canvasWidth: '100%',
				canvasHeight: '',
				lineOption: {
					grid: {
						left: '0%',
						right: '0%',
						bottom: '0%'
					},
					xAxis: {
						type: 'category',
						//data: ['07-22','07-23','07-24','07-25','07-26'],
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
							//data:[32, 33, 29, 35, 30, 18, 22],
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
							//data:[30, 29, 20, 30, 18, 15, 18],
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
				}
			}
		},
		props:{
			canvasHightData:{
				//每天对应最高温
				type: Array
			},
			canvasLowData: {
				//每天对应最低温
				type: Array
			},
			canvasNumData:{
				//几天的数据
				type: Number
			}
		},
		mounted() {
			const self = this;
			self.$nextTick(function(){
				//安卓、ios app和小程序因为canvas的高度不一样，因此单独处理,否则影响样式
				//#ifdef MP
					//所有的小程序
					self.canvasHeight = '100%';
				//#endif
				//#ifdef H5 || APP-PLUS || APP-PLUS-NVUE
					//app包括H5界面
					self.canvasHeight = 'calc(100% / 2)';
				//#endif
			});
		 },
		watch:{
			canvasLowData: {
				handler(newDate, oldDate) {
				  const self = this;
				  self.$nextTick(function(){
				  	self.lineOption.xAxis.data = self.canvasNumData;
				  	self.lineOption.series[0].data = self.canvasHightData;
				  	self.lineOption.series[1].data = self.canvasLowData;
					self.$refs.lineChart.init();
				  })
				},
				deep: true
			}
		},
		methods: {
			lineInit(e) {
				let {width, height} = e;
				let canvas = this.$refs.lineChart.canvas;
				echarts.setCanvasCreator(() => canvas);
				let lineChart = echarts.init(canvas, null, {
					width: width,
					height: height
				});
				canvas.setChart(lineChart);
				lineChart.setOption(this.lineOption);
				this.$refs.lineChart.setChart(lineChart);
			}
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
	.ec-canvas {
		width: 100%;
		height: 100%;
	}
</style>
