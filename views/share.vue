<template>
	<view class="main grayBg">
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span class="mandatory">分享文字</span>
					<input type="text" placeholder="请输入将要分享的文字" v-model="shareText"/>
				</view>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span class="mandatory">分享链接</span>
					<input type="text" placeholder="请输入将要分享的链接" v-model="shareHref"/>
				</view>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span class="mandatory">分享摘要</span>
					<input type="text" placeholder="请输入将要分享的摘要" v-model="shareSummary"/>
				</view>
			</view>
		</view>
		<view class="uniRowView">
			<view class="uniRowList">
				<view class="uniCloList">
					<span class="mandatory">分享图片</span>
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
			// #ifdef APP-PLUS
			//app实现分享方法二：plus方式
			const self = this;
			plus.share.getServices(function(s){ 
				self.shareObj = s;
			},function(e){
				alert( "获取分享服务列表失败："+e.message );
			});
			// #endif
		},
		data(){
			return{
				shareModel: false,
				shareText: '我是标题',
				picBase: [],
				shareHref: 'https://www.baidu.com', //注意这里！！！！必须是https:形式的，否则报错
				shareSummary: '我是摘要',
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
				shareObj: [] //plus的方式
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
			shareTos(scene,provider){
				//app实现分享方法二：plus方式
				/*
				@
				type: (String 类型 )分享消息的类型
					微信分享平台，可取值：
						"web"-分享网页类型，title（必填）、content（必填）、thumbs（必填）、href（网页url，必填）属性值有效；
						"text"-分享文字类型，content（必填）属性值有效；
						"image"-分享图片类型，pictures（必填）属性值有效；
						"music"-分享音乐类型，title（必填）、content（必填）、thumbs（必填）、media（音乐url，必填）属性值有效；
						"video"-分享视频类型，title（必填）、content（必填）、thumbs（必填）、media（视频url，必填）属性值有效；
						"miniProgram"-分享小程序类型（仅支持分享到好友），title（必填）、content（必填）、thumbs（图片小于128K，宽高比为5:4，必填）、miniProgram（小程序参数，必填）属性值有效；
						没有设置type时，如果href值有效则默认值为"web"，如果pictures有效则默认值为"image"，否则默认值为"text"。 
					
					新浪微博分享平台，可取值：
						"web"-分享网页类型，content、href（网页url，必填），分享链接添加到内容之后；
						"text"-分享文字类型，content（必填）属性有效，可在内容中直接插入链接地址；
						"image"-分享图片类型，content（可选）、thumbs（可选）、pictures（必填）属性有效；
						"video"-分享视频类型，content（可选）、thumbs（可选）、media（本地视频文件，必填）属性有效；
						没有设置type时，如果存在thumbs则默认值为"image"，如果存在href则默认值为"web"，否则默认为"text"。 
						
					QQ分享平台，可取值：
						"text"-分享文字类型，href（iOS可选，Android必填）、title（必填，最长30个字符）、content（可选，最长40个字符）、pictures或thumbs（可选，优先pictures，iOS不支持）属性有效；
						"image"-分享图片类型，pictures或thumbs（必填，优先pictures）属性有效；
						"music"-分享音乐类型，title（必填，最长30个字符）、content（可选，最长40个字符）、href（必填）、media（音乐url，必填）、pictures或thumbs（可选，优先pictures）属性值有效；
						没有设置type时，默认值"text"。
				*/
				const self = this;
				  if(self.shareObj == null){
					  plus.nativeUI.toast('分享组件加载中，请稍候！');
					  return false;
					}
				  //微信分享
				  //1、判断微信分享模块是否存在
				  let shareType;
				  for(var k in self.shareObj){
					  if(self.shareObj[k].id == provider){
						  shareType = self.shareObj[k];
					   }
				  }
				  if(shareType == null){
					  plus.nativeUI.toast('微信分享组件启动失败！'); 
					  return false;
				  }
				  
				  //2、分享
				  shareType.send(
					{
					  title: self.shareText,//分享消息的标题
					  content : self.shareSummary,//分享消息的文字内容,相当于uni.share的摘要
					  href  : self.shareHref,//分享独立的链接
					  thumbs  : [self.picBase[0]],//分享消息的缩略图
					  extra   : {scene : scene}//分享消息扩展参数
					},
					function(){
						plus.nativeUI.toast( "分享成功！"+ scene );
					},
					function(e){
						plus.nativeUI.toast( "分享失败："+e.message );
					}
				  );
			},
			shareTo(scene,provider){
				const self = this;
				if(self.shareText === ''){
					uni.showToast({
						title:"请输入分享文字",
						icon:"none",
					});
					return;
				}else if(self.shareHref === ''){
					uni.showToast({
						title:"请输入分享链接",
						icon:"none",
					});
					return;
				}else if(self.shareSummary === ''){
					uni.showToast({
						title:"请输入分享摘要",
						icon:"none",
					});
					return;
				}else if(self.picBase.length <= 0){
					uni.showToast({
						title:"请输入分享图片",
						icon:"none",
					});
					return;
				}
				if(provider === 'link'){
					uni.setClipboardData({
						data: self.shareHref,
						success: function () {
							console.log('success');
						}
					});
				}else if(provider === 'more'){
					//调用系统分享组件分享消息，通过msg参数设置分享内容。
					plus.share.sendWithSystem(
						{
							content:self.shareText,
							href: self.shareHref,
						},
						 function(){
								console.log('分享成功');
							}, function(e){
								console.log('分享失败：'+JSON.stringify(e));
							}
					);
				}else{
					//该Api仅仅支持App平台
					// #ifdef APP-PLUS
					//app实现分享方法一：uniapp.share方式
					if(provider === 'qq'){
						//QQ只能支持type为1,2,3类型的，因此得和微信的默认图文分享0区别开来
						uni.share({
							provider: provider,//分享服务提供商
							scene: scene,//场景
							type: 2,//分享类型 0默认图文（微信，微博） 1纯文字（公用） 2纯图片（公用） 3音乐（微信，QQ） 4视频（微信，微博）5小程序（微信）
							href: self.shareHref,//跳转链接
							title: self.shareText,//标题
							summary: self.shareSummary,//摘要
							imageUrl:self.picBase[0],//图片地址 type为0时，图片大小于20KB
							success: function (res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function (err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
					}else{
						uni.share({
							provider: provider,//分享服务提供商
							scene: scene,//场景
							type: 0,//分享类型 0默认图文（微信，微博） 1纯文字（公用） 2纯图片（公用） 3音乐（微信，QQ） 4视频（微信，微博）5小程序（微信）
							href: self.shareHref,//跳转链接
							title: self.shareText,//标题
							summary: self.shareSummary,//摘要
							imageUrl:self.picBase[0],//图片地址 type为0时，图片大小于20KB
							success: function (res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function (err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
					}
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
						title:'H5暂不支持此功能',
						icon: 'none'
					})
					//#endif
				}
			}
		}
	}
</script>

<style>
</style>
