<template>
	<view class="content">
		<view class="box1">
			<!-- 引入的mpvue-echarts组件 -->
			<mpvue-echarts height="200px" width="200px" canvasId="chat1" :echarts="echarts" :onInit="fn1OnInit" />
		</view>
 
	</view>
</template>

<script>
	//导入库
	import * as echarts from 'echarts'
	import mpvueEcharts from 'mpvue-echarts'
 
	//命名一个方法名称，方便自己识别，也方便多个图表引用时易区别。
	//切记这方法不能写到export default中。
	function fn1(canvas, width, height) {
		const chart = echarts.init(canvas, null, {
			width: width,
			height: height
		})
		canvas.setChart(chart);
 
		let option = {
			title: { 
				text: '未来一周气温变化',
				subtext: '纯属虚构'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data: ['最高气温', '最低气温']
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			calculable: true,
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
			series: [{
					name: '最高气温',
					type: 'line',
					data: [11, 11, 15, 13, 12, 13, 10],
					markPoint: {
						data: [{
								type: 'max',
								name: '最大值'
							},
							{
								type: 'min',
								name: '最小值'
							}
						]
					},
					markLine: {
						data: [{
							type: 'average',
							name: '平均值'
						}]
					}
				},
				{
					name: '最低气温',
					type: 'line',
					data: [1, -2, 2, 5, 3, 2, 0],
					markPoint: {
						data: [{
							name: '周最低',
							value: -2,
							xAxis: 1,
							yAxis: -1.5
						}]
					},
					markLine: {
						data: [{
							type: 'average',
							name: '平均值'
						}]
					}
				}
			]
		};
		chart.setOption(option)
		return chart
	};
 
	export default {
		components: {
			mpvueEcharts
		},
		data() {
			return {
				title: 'Hello',
				//初始化图表
				echarts:{},
				//图表数据绑定（我们定义的两个方法绑定）
				fn1OnInit: fn1
			}
		},
		onLoad() {
 
		},
		methods: {
 
		}
	}
</script>
 
<style>
	.content {
		text-align: center;
		height: 400upx;
	}
 
	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}
 
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
 
	.box1 {
		width: 100%;
		height: 100%;
	}
</style>
