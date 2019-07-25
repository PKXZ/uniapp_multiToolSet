<template>
	<view class="main">
		<swiper 
			class='jkSwiperView'
			:indicator-dots="indicatorDots"
			:indicator-active-color="indicatorActiveColor"
			:autoplay="autoplay"
			:interval="interval"
			:duration="duration"
			:indicator-color="indicatorColor">
			<block v-for="(list, index) in picList" :key="index">
				<swiper-item>
					<image :src="list" class="jkswiper_image"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	import '@/static/css/driving_jk_one.css'
	export default{
		name: 'drivingJkSectionOne',
		data(){
			return{
				picList: [
					'http://i.dyt3.cc/07/50/4a/47/8a/cc/5a/a3/84/05/bb/f2/03/a1/dd/6d.jpg',
					'http://img1.gtimg.com/hn/pics/hv1/77/202/1234/80292437.jpg',
					'http://s15.sinaimg.cn/bmiddle/5bae69b9t57208494f90e',
					'http://photo.sohu.com/20041129/Img223229940.jpg',
				],
				indicatorColor: '#fff',
				indicatorActiveColor: '#7dd2fe',
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 1000,
			}
		}
	}
</script>

<style>
</style>
