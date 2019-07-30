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
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565072336&di=7825dba9c7b273d6632b10de2d7564be&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.itcast.cn%2Ffiles%2Fimage%2F201904%2F20190415162740253.jpg'
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
