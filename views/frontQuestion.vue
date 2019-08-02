<template>
	<view class="main">
		<view class="drivingMain grayBg">
			<view v-if="actived == 0">
				<frontZx></frontZx>
			</view>
			<view v-if="actived === 1">
				<frontDk></frontDk>
			</view>
			<view v-if="actived === 2">
				<onlinePdf></onlinePdf>
			</view>
			<view v-if="actived === 3">
				<frontWd></frontWd>
			</view>
		</view>
		<tabbar :tabbar="tabbar" :actived="actived" @emitActived="emitActived"></tabbar>
	</view>
</template>

<script>
	import '../static/css/frontQusetion.css'
	import tabbar from '@/components/common/tabbar.vue'
	import frontZx from './pages/front/front_zx'
	import frontDk from './pages/front/front_dk'
	import onlinePdf from './onlinePdf'
	import frontWd from './pages/front/front_wd'
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
				//自定义的tabbar
				actived: 0,
				tabbar: [
					{
						text: '自学',
						icon: 'icon-xuexi',
						type: 'zx'
					},{
						text: '打卡',
						icon: 'icon-yundanguiji',
						type: 'dk'
					},{
						text: '阅读',
						icon: 'icon-yuedu',
						type: 'yd'
					},{
						text: '我的',
						icon: 'icon-rengong',
						type: 'wd'
					}
				],
				activeItem: {}
			}
		},
		watch:{
			 activeItem: {
				handler(newData, oldData) {
					this.activeItem = newData;
				},
				deep: true
			}
		},
		methods:{
			emitActived(item){
				this.actived = item.index;
				this.activeItem = item;
			}
		},
		components:{
			tabbar,
			frontZx,
			frontDk,
			onlinePdf,
			frontWd
		}
	}
</script>

<style>
</style>
