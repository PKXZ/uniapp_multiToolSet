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
		
		<!--仿模态框动效-->
		<view class="shareModel" v-if="shareModel"  @click="cancelShare"></view>
		<view class="shareBox" :class="shareModel ? '' : 'showShareBox'">
			<view class="sharePanel">
				<view @click="shareTo(item.scene)" v-for="(item,index) in shareTemplate" :key="index">
					<i :class="[item.icon,item.bg]"></i>
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
						icon: 'iconfont icon-weixinpengyouquan',
						bg: 'weixinBg',
						scene: 'WXSceneFavorite',
						provider: 'weixin'
					},{
						text: '微信收藏',
						icon: 'iconfont icon-qq',
						bg: 'qqBg',
						scene: '',
						provider: 'qq'
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
			shareTo(scene){
				console.log(scene);
			}
		}
	}
</script>

<style>
</style>
