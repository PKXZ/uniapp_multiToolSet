<template>
	<view class='main'>
		<view class="myselTitle">
			<view class="myselfT">
				<i class="iconfont icon-kalendar"></i>
				<span>{{userName}}</span>
				<i class="iconfont icon-shezhi"></i>
			</view>
			<view class="myselfImg">
				<image :src="userImg"></image>
			</view>
			<view class="myselfMsg">
				<view>
					<p>0</p>
					<span>收藏</span>
				</view>
				<view>
					<p>0</p>
					<span>积分</span>
				</view>
				<view>
					<p>0</p>
					<span>优惠卷</span>
				</view>
			</view>
		</view>
		
		<view class="myselfCtx">
			<view class="uniRow" @click="goEvent('sqdl')">
				<view class="uniRowLeft">
					<i class="iconfont icon-suo"></i>
					<span>授权登陆</span>
				</view>
				<i class="iconfont icon-youjiantou"></i>
			</view>
			<view class="uniRow">
				<view class="uniRowLeft">
					<i class="iconfont icon-fenxiang"></i>
					<span>分享海报</span>
				</view>
				<i class="iconfont icon-youjiantou"></i>
			</view>
			<view class="uniRow">
				<view class="uniRowLeft">
					<i class="iconfont icon-shoucangs"></i>
					<span>我的收藏</span>
				</view>
				<i class="iconfont icon-youjiantou"></i>
			</view>
			<view class="uniRow">
				<view class="uniRowLeft">
					<i class="iconfont icon-yonghufankui"></i>
					<span>用户反馈</span>
				</view>
				<i class="iconfont icon-youjiantou"></i>
			</view>
			<view class="uniRow">
				<view class="uniRowLeft">
					<i class="iconfont icon-guanyuwomen"></i>
					<span>关于我们</span>
				</view>
				<i class="iconfont icon-youjiantou"></i>
			</view>
		</view>
		
		<!--仿模态框动效-->
		<view class="shareModel" v-if="shareModel"  @click="cancelShare"></view>
		<view class="shareBox" :class="shareModel ? '' : 'showShareBox'">
			<view class="sharePanel">
				<view @click="shareTo(item.scene,item.provider)" v-for="(item,index) in shareTemplate" :key="index">
					<view :class="item.bg"><i :class="[item.icon]"></i></view>
					<span>{{item.text}}</span>
				</view>
			</view>
			<view class="shareCancle" @click="cancelShare">取消</view>
		</view>
	</view>
</template>

<script>
	import '@/static/css/myself.css'
	export default {
		data() {
			return {
				userName: '暂无姓名',
				userImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564746132810&di=7ca991472e07650a38be405971451eae&imgtype=0&src=http%3A%2F%2Fstatic.tm51.com%2Favatar%2Fdefault%2Fheader%2F10012.jpg',
				shareModel: false,
				shareTemplate: [
					{
						text: '微信好友',
						icon: 'iconfont icon-weixin',
						bg: 'weixinBg',
						scene: 'WXSceneSession',
						provider: 'weixin'
					},{
						text: '微信朋友圈',
						icon: 'iconfont icon-weixinpengyouquan',
						bg: 'weixinBg',
						scene: 'WXSenceTimeline',
						provider: 'weixin'
					},{
						text: '微信收藏',
						icon: 'iconfont icon-favorite',
						bg: 'weixinBg',
						scene: 'WXSceneFavorite',
						provider: 'weixin'
					},{
						text: 'QQ好友',
						icon: 'iconfont icon-qq',
						bg: 'qqBg',
						scene: 'qq',
						provider: 'qq'
					},{
						text: '复制链接',
						icon: 'iconfont icon-lianjie',
						bg: 'linkBg',
						scene: '',
						provider: 'link'
					},
					// #ifdef APP-PLUS
					{
						text: '更多',
						icon: 'iconfont icon-gengduoMore',
						bg: 'moreBg',
						scene: '',
						provider: 'more'
					},
					// #endif
				],
			}
		},
		methods: {
			goEvent(type){
				if(type === 'sqdl'){
					//支付宝小程序不支持
					//#ifdef MP-ALIPAY
					//#endif
					uni.hideTabBar();
					this.shareModel = true;
				}
			},
			shareTos(scene,provider){
				
			},
			share(){
				uni.showTabBar();
				this.shareModel = true;
			},
			cancelShare(){
				uni.showTabBar();
				this.shareModel = false;
			},
		}
	}
</script>

<style>

</style>
