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
				<p :style="{transform: 'translate('+transformStyle+', 0) translateZ(0)'}"></p>
			</view>
		</scroll-view>
		<swiper 
			class="jk_TabMain" 
			:indicator-dots="indicatorDots" 
			:current="current"
			:autoplay="autoplay" 
			:duration="duration"
			@change="tabContFun">
			<swiper-item
				v-for="(item,index) in tabTitle" 
				:key="index">
				<view class="swiper-item uni-bg-red">
					<frontZxSection :itemType='item.type'></frontZxSection>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import '@/static/css/front_zx.css'
	import frontZxSection from './front_zx_section'
	export default{
		data(){
			return{
				activedTab: -1,
				tabTitle: [{
					name: '基础',
					type: 'kOne'
				},{
					name: '中级',
					type: 'kTwo'
				},{
					name: '高级',
					type: 'kThree'
				},{
					name: '随机',
					type: 'kFour'
				},{
					name: '面试',
					type: 'take'
				}],
				activedItem: {},
				tabOpt: ['33rpx','189rpx','336rpx','493rpx','640rpx'],//15px  90px  160px  235px  305px
				transformStyle: '33rpx',
				//标题的切换
				 scrollTop: 0,
				//内容的切换
				current: 0,
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
				this.transformStyle = this.tabOpt[index];
				this.current = index;
			},
			tabContFun(obj){
				const index = obj.detail.current;
				const item = this.tabTitle[index];
				this.clickTab(item,index);
			}
		},
		components: {
			frontZxSection
		},
	}
</script>

<style>
</style>
