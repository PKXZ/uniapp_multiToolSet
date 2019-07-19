<template>
	<view class="main">
		<view class="jk_TabTitle">
			<view v-for="(item,index) in tabTitle" :key="item">
				<span>{{item}}</span>
				<p></p>
			</view>
		</view>
	</view>
</template>

<script>
	import '../../static/css/driving_jk.css'
	export default{
		data(){
			return{
				tabTitle: ['科一','科二','科三','科四','拿本']
			}
		},
		components:{
		}
	}
</script>

<style>
</style>
