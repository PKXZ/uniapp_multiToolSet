<template>
	<view class="main grayBg">
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>分享文字</span>
					<input type="text" placeholder="请输入将要分享的文字" v-model="shareText"/>
				</view>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>分享链接</span>
					<input type="text" placeholder="请输入将要分享的链接" v-model="shareHref"/>
				</view>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span>分享图片</span>
					<view class="upView">
						<ul class="upImgView" v-if="picBase.length > 0">
							<li v-for="(item,index) in picBase" :key="index">
								<image :src="item"></image>
								<span @click="removeIcon"><i class="iconfont icon-jian"></i></span>
							</li>
						</ul>
						<view class="upIconView" @tap="selectIcon" v-else>
							<i class="iconfont icon-jia"></i>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
						<button
							 @click="share"
							 type="primary" 
							 class="primary">
							<span>分享</span>
						 </button>
				</view>
			</view>
		</view>
		
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span style="color: red;">该功能目前主要支持APP,不支持H5，并且小程序表现形式为‘转发’</span>
				</view>
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
	import '../static/css/share.css';
	export default{
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
		},
		data(){
			return{
				shareModel: false,
				shareText: '',
				picBase: [],
				shareHref: '',
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
						scene: '',
						provider: 'qq'
					},{
						text: 'QQ空间',
						icon: 'iconfont icon-qqkongjian',
						bg: 'qqBg',
						scene: '',
						provider: 'qq'
					},{
						text: '复制链接',
						icon: 'iconfont icon-lianjie',
						bg: 'linkBg',
						scene: '',
						provider: 'link'
					}
				]
			}
		},
		methods:{
			share(){
				this.shareModel = true;
			},
			cancelShare(){
				this.shareModel = false;
			},
			selectIcon() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						that.picBase.push(res.tempFilePaths[0]);
					}
				});
			},
			removeIcon(){
				this.picBase = [];
			},
			shareTo(scene,provider){
				const self = this;
				if(provider === 'link'){
					uni.showToast({
						title:'将要实现剪切板的功能'
					})
				}else{
					//该Api仅仅支持App平台
					// #ifdef APP-PLUS
					uni.share({
						provider: provider,//分享服务提供商
						scene: scene,//场景
						type: 0,//分享类型 0默认图文（微信，微博） 1纯文字 2纯图片 3音乐（微信，QQ） 4视频（微信，微博）5小程序（微信）
						href: self.shareHref,//跳转链接
						title: self.shareText,//标题
						summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",//摘要
						imageUrl:self.picBase[0],//图片地址 type为0时，图片大小于20KB
						success: function (res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function (err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
					//#endif
					
					//微信小程序 显示转发按钮
					//#ifdef MP-WEIXIN
					wx.showShareMenu({
					  withShareTicket: true,
					  success: function(res){
						  console.log(res)
					  },
					  fail: function(error){
						  console.log(error)
					  }
					})
					//#endif
					
					//H5暂不支持此功能
					//#ifdef H5
					uni.showToast({
						title:'H5暂不支持此功能'
					})
					//#endif
				}
			}
		}
	}
</script>

<style>
</style>
