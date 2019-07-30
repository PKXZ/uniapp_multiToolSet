<template>
	<view class="main">
		<scroll-view  
			scroll-y="true" 
			class="frontScroll">
			<ul class="front_ul">
				<li class="front_li" v-for="(item,index) in dataList" :key="index" @click="onlineTest(item)">
					<view class="leftView">
						<i class="iconfont" :class="['icon-'+item.type,item.bg]"></i>
					</view>
					<view class="cotView">
						<view class="cotBt">{{item.bt}}</view>
						<view class="cotStar">
							<uni-rate 
								:value="item.star" 
								:is-fill="false" 
								color="#bbb"
								:size="19"
								:margin="3"
								:disabled="true">
							</uni-rate>
						</view>
						<view class="cotCtx">
							<span class="cotCtxToic">
								{{item.topic[0]}}
								<p>/</p>
								{{item.topic[1]}}题
							</span>
							<span>{{item.totalPerson}}人交卷</span>
							<span>{{item.browsePerson}}人浏览</span>
						</view>
						<view class="cotProgress">
							<cmd-progress
								class="progress"
								:percent="item.progress"
								:showInfo="true"
								status="active">
							</cmd-progress>
						</view>
					</view>
					<view class="rightView">
						<i class="iconfont icon-youjiantou"></i>
					</view>
				</li>
			</ul>
		</scroll-view>
	</view>
</template>

<script>
	import '@/static/css/front_zx_section.css'
	import uniRate from '@/components/common/uni-rate.vue'
	import cmdProgress from '@/components/common/cmd-progress.vue'
	export default{
		name: 'frontZxSection',
		data(){
			return{
				dataList:[
					{
						bt: 'Html5的基础训练',
						type: 'html5',
						bg: 'html5Bg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					},{
						bt: 'Js的基础训练',
						type: 'js',
						bg: 'jsBg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					},{
						bt: 'NodeJs的基础训练',
						type: 'nodejs',
						bg: 'nodejsBg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					},{
						bt: 'css3的基础训练',
						type: 'css3',
						bg: 'css3Bg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					},{
						bt: 'react的基础训练',
						type: 'react',
						bg: 'reactBg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					},{
						bt: 'angular的基础训练',
						type: 'angular',
						bg: 'angularBg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					},{
						bt: 'vuejs的基础训练',
						type: 'vuejs',
						bg: 'vuejsBg',
						star: 3,
						topic: [1,25],
						totalPerson: 1000,
						browsePerson: 258,
						progress: 30
					}
				]
			}	
		},
		props:{
			itemType: {
				type: String
			}
		},
		methods: {
			onlineTest(item){
				uni.navigateTo({
					url: '/views/pages/front/front_zx_onlineTest',
				});
				uni.setStorage({
					key: 'zx_section',
					data: JSON.stringify(item)
				});
			}
		},
		components: {
			uniRate,
			cmdProgress
		}
	}
</script>

<style>
</style>
