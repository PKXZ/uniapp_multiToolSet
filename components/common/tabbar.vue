<template>
	<!--自定义tabbar-->
	<view class="tabbarBox">
		<view 
		v-for="(item,index) in tabbar" 
		:key="index" 
		class="tabbarCol" 
		:class="actived === index ? 'tabbarColActived' : ''"
		@click="clickTabbar(item,index)">
			<i class="iconfont" :class="item.icon"></i>
			<span>{{item.text}}</span>
		</view>
	</view>
</template>

<script>
	import '../../static/css/tabbar.css'
	export default{
		props:{
			tabbar:{
				type: Array
			},
			actived:{
				type: Number,
				default: -1
			}
		},
		data(){
			return{
			}
		},
		methods:{
			clickTabbar(item,index){
				item['index'] = index;
				this.$emit('emitActived',item);
			}
		}
	}
</script>

<style>
</style>
