<template>
	<view class="main">
		<view class="otBtView">
			<span>单项选择</span>
			<span>
				<p class="otCurrentPage">{{currentPage}}</p>
				<p class="otLine">/</p>
				{{itemList.topic[1]}}
			</span>
		</view>
		<scroll-view scroll-y="true" class="otScroll">
			
		</scroll-view>
		<tabbar :tabbar="tabbar" :actived="actived" @emitActived="emitActived"></tabbar>
	</view>
</template>

<script>
	import '@/static/css/front_zx_onlineTest.css'
	import tabbar from '@/components/common/tabbar.vue'
	export default{
		onLoad(options) {
			//动态设置标题
			const self = this;
			uni.getStorage({
				key: 'zx_section',
				success: function (res) {
					self.itemList = JSON.parse(res.data);
					 uni.setNavigationBarTitle({
						title: self.itemList.bt
					})
				}
			});
		},
		data(){
			return{
				itemList: [],
				currentPage: 1,
				
				//自定义的tabbar
				actived: 0,
				tabbar: [
					{
						icon: 'icon-shoucangs',
						type: 'sc'
					},{
						icon: 'icon-quanbu',
						type: 'tk'
					},{
						icon: 'icon-zhuanfa',
						type: 'zf'
					}
				],
			}
		},
		methods:{
			emitActived(item){
				this.actived = item.index;
				if(this.actived.type === 'sc'){
					
				}else if(this.actived.type === 'tk'){
					
				}else if(this.actived.type === 'zf'){
					
				}
			}
		},
		components: {
			tabbar
		},
	}
</script>

<style>
</style>
