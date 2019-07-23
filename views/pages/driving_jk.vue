<template>
	<view class="main">
		<scroll-view 
			:scroll-top="scrollTop" 
			scroll-x="true" 
			class="jk_TabTitle">
			<view class="navTab">
				<view 
					v-for="(item,index) in tabTitle" 
					:key="index" 
					class="tabItem"
					:class="index === activedTab ? 'jk_TabTitleActive' : ''"
					@click="clickTab(item,index)">
					<span>{{item.name}}</span>
				</view>
				<p :style="transformStyle"></p>
			</view>
		</scroll-view>
		<swiper 
			class="jk_TabMain" 
			:indicator-dots="indicatorDots" 
			:autoplay="autoplay" 
			:duration="duration"
			@change="tabContFun">
			<swiper-item>
				<view class="swiper-item uni-bg-red">科一</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">科二</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">科三</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">科四</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">拿本</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import '../../static/css/driving_jk.css'
	export default{
		data(){
			return{
				activedTab: -1,
				tabTitle: [{
					name: '科一',
					type: 'kOne'
				},{
					name: '科二',
					type: 'kTwo'
				},{
					name: '科三',
					type: 'kThree'
				},{
					name: '科四',
					type: 'kFour'
				},{
					name: '拿本',
					type: 'take'
				}],
				activedItem: {},
				tabOpt: ['33upx','189upx','336upx','493upx','640upx'],//15px  90px  160px  235px  305px
				transformStyle: {
					transform: 'translate(30upx, 0) translateZ(0)',
				},
				//标题的切换
				 scrollTop: 0,
				//内容的切换
				indicatorDots: false,
				autoplay: false,
				duration: 500,
			}
		},
		watch:{
			activedItem:{
				handler(newData, oldData) {
					this.activedItem = newData;
				},
				deep: true
			},
			transformStyle:{
				handler(newData, oldData) {
					this.transformStyle = newData;
				},
				deep: true
			}
		},
		methods:{
			clickTab(item,index){
				this.activedTab = index;
				this.activedItem = item;
				let obj = {
					transform: 'translate('+this.tabOpt[index]+', 0) translateZ(0)',
				};
				this.transformStyle = obj;
			},
			tabContFun(obj){
				const index = obj.detail.current;
				const item = this.tabTitle[index];
				this.clickTab(item,index);
			}
		}
	}
</script>

<style>
</style>
