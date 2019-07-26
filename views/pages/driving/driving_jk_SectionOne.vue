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
		<view class="testModule">
			<view class="testModuleOne">
				<view class="testModuleIcon" v-for="(item, index) in moduleOneList" :key="index">
					<view :class="item.bgClass">
						<i class="iconfont" :class="item.icon"></i>
					</view>
					<p>{{item.name}}</p>
				</view>
			</view>
			<view class="testModuleTwo">
				<view class="orderTraining">
					<orderTraining></orderTraining>
				</view>
				<view>
					<simulationTest></simulationTest>
				</view>
			</view>
			<view class="testModuleThree">
				<view class="testModuleIcon" v-for="(item, index) in moduleThreeList" :key="index" @click="modelFun(item)">
					<view :class="item.bgClass">
						<i class="iconfont" :class="item.icon"></i>
					</view>
					<p>{{item.name}}</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import '@/static/css/driving_jk_one.css'
	import orderTraining from '@/components/general/orderTraining'
	import simulationTest from '@/components/general/simulationTest'
	export default{
		name: 'drivingJkSectionOne',
		data(){
			return{
				picList: [
					'http://i.dyt3.cc/07/50/4a/47/8a/cc/5a/a3/84/05/bb/f2/03/a1/dd/6d.jpg',
					'http://img1.gtimg.com/hn/pics/hv1/77/202/1234/80292437.jpg',
					'http://s15.sinaimg.cn/bmiddle/5bae69b9t57208494f90e'
				],
				indicatorColor: '#fff',
				indicatorActiveColor: '#7dd2fe',
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 1000,
				
				moduleOneList: [
					{
						name: '专项练习',
						icon: 'icon-shejian',
						bgClass: 'specialPractice',
						type: 'zxlx'
					},{
						name: 'VIP课程',
						icon: 'icon-huangguan',
						bgClass: 'VIPCourse',
						type: 'vip'
					},{
						name: '驾考讲堂',
						icon: 'icon-shipintiaodu',
						bgClass: 'drivingPlatform',
						type: 'jkjt'
					},{
						name: '难题攻克',
						icon: 'icon-script-language',
						bgClass: 'difficultiesOvercome',
						type: 'ntgk'
					}
				],
				moduleThreeList: [
					{
						name: '我的错题',
						icon: 'icon-bj',
						bgClass: 'wrongTopic',
						type: 'wdct'
					},{
						name: '随机练习',
						icon: 'icon-xunhuan',
						bgClass: 'randomPractice',
						type: 'sjxl'
					},{
						name: '图标技巧',
						icon: 'icon-caidan',
						bgClass: 'skillIcons',
						type: 'tbjq'
					},{
						name: '学员惠购',
						icon: 'icon-che',
						bgClass: 'studentsBuy',
						type: 'xyhg'
					}
				]
			}
		},
		methods: {
			modelFun(item) {
				console.log(item);
			}
		},
		components: {
			orderTraining,
			simulationTest
		},
	}
</script>

<style>
</style>
