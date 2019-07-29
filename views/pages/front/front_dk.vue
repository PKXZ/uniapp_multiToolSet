<template>
	<view class="main grayBg">
		<ul class="front_dk_ul">
			<li v-for="(item,index) in dataList" :key="index">
				<view class="frontdkLeft">
					<img :src="item.img">
				</view>
				<view class="frontdkCtx">
					<span class="frontdkCtxBt">{{item.bt}}</span>
					<span class="frontdkCtxPerson">今日<p>{{item.clockPerson}}</p>人已打卡</span>
				</view>
				<view class="frontdkRight">
					<span>加入</span>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
	import '@/static/css/front_dk.css'
	export default{
		data(){
			return{
				dataList: [
					{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://img.mp.itc.cn/upload/20170323/5f106bee35684572ab451fc154d66bd2_th.jpg'
					},{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://img.mp.sohu.com/q_mini,c_zoom,w_640/upload/20170731/2fc722dde82447b1b35eee04943ea658_th.jpg'
					},{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://s1.sinaimg.cn/mw690/006Qoucczy7f0l3AosE40&690'
					},{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://px.thea.cn/Public/Upload/Uploadfiles/image/20171222/20171222103652_40674.png'
					},{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://i0.hdslb.com/bfs/article/6fc1d96596fdfb4b2759e4de0e0e7b44105c8ff0.jpg'
					},{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://hf.web.tedu.cn/upload/20171228/20171228115519_88.png'
					},{
						bt: '2019《考研政治》快速提升营',
						clockPerson: 20,
						img: 'http://hbimg.b0.upaiyun.com/f6009ee7f61ee84f09e8ace389cbdeb74c4964e3580c7-AAwrJ2_fw658'
					}
				]
			}
		}
	}
</script>

<style>
</style>
