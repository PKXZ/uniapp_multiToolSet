<template>
	<view class="main">
		<view class="frontWdInfo">
			<view class="fonrtInfoBg">
				<view>
					<img :src="info.img">
					<span>{{info.name}}</span>
				</view>
			</view>
		</view>
		<view class="frontWdTool">
			<view>
				<i class="iconfont icon-shoucang"></i>
				<span>收藏</span>
			</view>
			<view>
				<i class="iconfont icon-cuoti"></i>
				<span>错题练习</span>
			</view>
			<view>
				<i class="iconfont icon-lishijilu"></i>
				<span>练习历史</span>
			</view>
		</view>
		<view class="uniRow">
			<view class="uniRowLeft">
				<i class="iconfont icon-ziliaoxiang"></i>
				<span>资料包</span>
			</view>
			<i class="iconfont icon-youjiantou"></i>
		</view>
		<view class="uniRow">
			<view class="uniRowLeft">
				<i class="iconfont icon-yijianfankui"></i>
				<span>意见反馈</span>
			</view>
			<i class="iconfont icon-youjiantou"></i>
		</view>
		<view class="uniRow">
			<view class="uniRowLeft">
				<i class="iconfont icon-shezhi"></i>
				<span>设置</span>
			</view>
			<i class="iconfont icon-youjiantou"></i>
		</view>
	</view>
</template>

<script>
	import '@/static/css/front_wd.css'
	export default{
		data(){
			return{
				info:{
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3805275425,1545247126&fm=26&gp=0.jpg',
					name: '皮卡是嫡猫'
				}
			}
		}
	}
</script>

<style>
</style>
