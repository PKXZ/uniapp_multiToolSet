<template>
	<view class="main">
		<view class="drivingMain">
			<view v-if="actived === 0">
				<dringJk></dringJk>
			</view>
			<view v-if="actived === 1">
				<dringFx></dringFx>
			</view>
			<view v-if="actived === 2">
				<dringMc></dringMc>
			</view>
			<view v-if="actived === 3">
				<dringWd></dringWd>
			</view>
		</view>
		<tabbar :tabbar="tabbar" :actived="actived" @emitActived="emitActived"></tabbar>
	</view>
</template>

<script>
	import '../static/css/drivingExamination.css'
	import tabbar from '@/components/common/tabbar.vue'
	import dringJk from './pages/driving/driving_jk'
	import dringFx from './pages/driving/driving_fx'
	import dringMc from './pages/driving/driving_mc'
	import dringWd from './pages/driving/driving_wd'
	export default{
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
			uni.setNavigationBarColor({
			  frontColor: '#000000',
			  backgroundColor: '#ffffff'
			});
		},
		data(){
			return{
				//自定义的tabbar
				actived: 0,
				tabbar: [
					{
						text: '驾考',
						icon: 'icon-xingzhuang',
						type: 'jk'
					},{
						text: '发现',
						icon: 'icon-faxianxianshimima',
						type: 'fx'
					},{
						text: '买车',
						icon: 'icon-che',
						type: 'mc'
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
			dringJk,
			dringFx,
			dringMc,
			dringWd
		}
	}
</script>

<style>
</style>
