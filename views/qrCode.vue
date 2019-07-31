<template>
	<!--二维码识别-->
	<view class="main grayBg">
		<scroll-view  
			scroll-y="true" 
			class="mainScrool">
			<view class="uniRowView qrCodeView">
				<meQrcode 
					v-if="ifShow" 
					cid="qrcode1" 
					ref="qrcode" 
					:val="val" 
					:size="size" 
					:unit="unit" 
					:background="background" 
					:foreground="foreground" 
					:pdground="pdground" 
					:icon="icon" 
					:iconSize="iconsize" 
					:lv="lv" 
					:onval="onval" 
					:loadMake="loadMake" 
					:usingComponents="true"
					@result="qrR" />
			</view>
			<view class="uniRowView">
				<view class="uniRowList">
					<view class="uniCloList">
						<span>生成二维码内容</span>
						<input 
							placeholder="请输入将要生成的二维码内容" 
							type="text" 
							v-model="val"/>
					</view>
				</view>
			</view>
			<view class="uniRowView">
				<view class="uniRowList">
					<view class="uniCloList">
						<span>设置二维码大小</span>
						<slider 
							class="sliders"
							:value="size" 
							@change="sliderchange" 
							:min="sliderMin" 
							:max="sliderMax"
							show-value />
					</view>
				</view>
			</view>
			<view class="uniRowView">
				<view class="uniRowList">
					<view class="uniCloList">
						<span>二维码背景色</span>
						<input 
							placeholder="请输入二维码背景颜色" 
							type="text" 
							v-model="background"/>
					</view>
				</view>
			</view>
			<view class="uniRowView">
				<view class="uniRowList">
					<view class="uniCloList">
						<span>二维码前景色</span>
						<input 
							placeholder="请输入二维码前景色" 
							type="text" 
							v-model="foreground"/>
					</view>
				</view>
			</view>
			<view class="uniRowView">
				<view class="uniRowList">
					<view class="uniCloList">
						<span>二维码角标色</span>
						<input 
							placeholder="请输入二维码角标色" 
							type="text" 
							v-model="pdground"/>
					</view>
				</view>
			</view>
			<view class="uniRowView">
				<view class="uniRowList">
					<view class="uniCloList">
						<span>二维码图标</span>
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
			
			<!--目前H5和支付宝小程序不支持-->
			<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-TOUTIAO || MP-QQ || APP-PLUS || APP-PLUS-NVUE-->
			<view class="qrCodeBtn">
				<button type="primary" class="primary" size="small" @tap="saveQrcode">保存到图库</button>
			</view>
			<!--  #endif -->
		</scroll-view>
	</view>
</template>

<script>
	import '../static/css/qrCode.css';
	import meQrcode from "../components/common/meQrcode.vue";
	export default {
		data() {
			return {
				ifShow: true,
				val: 'www.baidu.com', // 要生成的二维码值
				size: 200, // 二维码大小
				unit: 'upx', // 单位
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '', // 二维码生成后的图片地址或base64
				sliderMin: 50,
				sliderMax: 500,
				picBase: []
			}
		},
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
		},
		mounted(){
			uni.showToast({
				title: '修改自动触发生成二维码',
				icon: 'none',
			})
		},
		watch:{
			val(newData,oldData){
				this.creatQrcode();
			},
			background(newData,oldData){
				const reg = "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$";
				if(newData.match(reg) === null){
					uni.showToast({
						title: '请正确输入十六进制颜色值',
						icon: 'none',
					});
					return;
				}else{
					this.creatQrcode();
				}
			},
			foreground(newData,oldData){
				const reg = "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$";
				if(newData.match(reg) === null){
					uni.showToast({
						title: '请正确输入十六进制颜色值'
					});
					return;
				}else{
					this.creatQrcode();
				}
			},
			pdground(newData,oldData){
				const reg = "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$";
				if(newData.match(reg) === null){
					uni.showToast({
						title: '请正确输入十六进制颜色值'
					});
					return;
				}else{
					this.creatQrcode();
				}
			}
		},
		methods:{
			sliderchange(e) {
				this.size = e.detail.value;
			},
			creatQrcode() {
				this.$refs.qrcode._makeCode();
			},
			saveQrcode() {
				this.$refs.qrcode._saveCode();
			},
			qrR(res) {
				this.src = res
			},
			clearQrcode() {
				this.$refs.qrcode._clearCode()
				this.val = ''
			},
			ifQrcode() {
				this.ifShow = !this.ifShow
			},
			selectIcon() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						that.icon = res.tempFilePaths[0];
						that.picBase.push(that.icon);
						setTimeout(() => {
							that.creatQrcode()
						}, 100);
					}
				});
			},
			removeIcon(){
				this.picBase = [];
				this.icon = '';
				const self = this;
				setTimeout(() => {
					self.creatQrcode()
				}, 100);
			}
		},
		components:{
			meQrcode
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	.qrimg {
		display: flex;
		justify-content: center;
	}
	.qrimg-i{
		margin-right: 10px;
	}
	
	slider {
		width: 100%;
	}
	
	input {
		width: 100%;
		margin-bottom: 20upx;
	}
	
	.btns {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	
	button {
		width: 100%;
		margin-top: 10upx;
	}
</style>
