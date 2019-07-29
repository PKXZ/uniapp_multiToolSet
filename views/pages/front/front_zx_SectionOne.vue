<template>
	<view class="main">
		<ul class="front_ul">
			<li class="front_li">
				<view class="leftView">
					<i class="iconfont icon-js"></i>
				</view>
				<view class="cotView">
					<view class="cotBt">Html5的基础训练</view>
					<view class="cotStar">
						<uni-rate 
							:value="2" 
							:is-fill="false" 
							color="#bbb"
							:size="19"
							:margin="3"
							@change="onChangeStar">
						</uni-rate>
					</view>
					<view class="cotCtx">
						<span class="cotCtxToic">1<p>/</p>25题</span>
						<span>1000人交卷</span>
						<span>258人浏览</span>
					</view>
					<view class="cotProgress">
						<cmd-progress
							class="progress"
							:percent="30"
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
	</view>
</template>

<script>
	import '@/static/css/front_zx_one.css'
	import uniRate from '@/components/common/uni-rate.vue'
	import cmdProgress from '@/components/common/cmd-progress.vue'
	export default{
		name: 'frontZxSectionOne',
		data(){
			return{
			}	
		},
		methods: {
			onChangeStar(e) {
				console.log('rate发生改变:' + JSON.stringify(e))
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
