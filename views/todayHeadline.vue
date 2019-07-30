<template>
	<view class="main">
		<!--上半部-->
		<view class="todayHeadlineTop">
			<view class="todayDiv">
				<view class="waves">
					<span class="hours">{{hours}}</span>
					<span class="mh">:</span>
					<span>{{minutes}}</span>
				</view>
			</view>
			<view class="ellipseDiv">
				<view class="ellipse ellipseOne"></view>
				<view class="ellipse ellipseTwo"></view>
				<view class="ellipse ellipseThree"></view>
				<view class="ellipse ellipseFour"></view>
				<view class="ellipse ellipseFive"></view>
			</view>
		</view>
		<!--下半部-->
		<view class="todayHeadlineBottom">
			<scroll-view scroll-y="true" :class="scrollClass">
				<ul class="todayListUl">
					<li v-for="(item,index) in ulList" :key="index">
						<uniSwipeAction :options="opt" @click="removeClick">
							<div class="clockDiv">
								<div @click="goEcho(index,item)">
									<span>{{item.time}}</span>
									<p>{{item.pointTime}}</p>
								</div>
								<switch color="#20e6b8" :checked="item.enable" @change="alarmSwitch($event,index)"></switch>
							</div>
							<div class="periodDiv" @click="goEcho(index,item)">
								<ul>
									<li 
										v-for="(week,indx) in weekList" 
										:key="indx" 
										:class="item.interval.indexOf(week) != -1 ? 'usedLi' : ''">
										{{week}}
									</li>
								</ul>
							</div>
						</uniSwipeAction>
					</li>
				</ul>
			</scroll-view>
			<view class="iconBottom" :class="btnClass">
				<i class="iconfont icon-jia" @click="addAlarm"></i>
			</view>
		</view>
	</view>
</template>

<script>
	import '../static/css/todayHeadline.css';
	import uniSwipeAction from '@/components/common/uni-swipe-action';
	export default {
		data() {
			return {
				hours: new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours(),
				minutes: new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes(),
				weekList: ['日','一','二','三','四','五','六'],
				ulList: [],
				opt: [{
					text: '删除',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}],
				scrollClass: '',
				btnClass: 'iconBottomF',
			}
		},
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
			uni.setNavigationBarColor({
			  frontColor: '#ffffff',
			  backgroundColor: '#2995f7'
			})
		},
		mounted(){
			//回显数据
			const self = this;
			uni.getStorage({
				key: 'selAlarm',
				success: function (res) {
					const selAlarm = res.data;
					if(selAlarm){
						self.ulList = JSON.parse(selAlarm);
					}
				}
			});
		},
		watch:{
			ulList:{
				handler(newData,oldData){
					this.ulList = newData;
					uni.setStorage({
						key: 'selAlarm',
						data: JSON.stringify(newData)
					});
					if(this.ulList.length > 0){
						this.btnClass = 'fixedIcon';
						this.scrollClass = 'todayScroll';
					}else{
						this.btnClass = 'iconBottomF';
						this.scrollClass = '';
					}
				},
				deep: true
			}
		},
		methods:{
			addAlarm(){
				//添加闹钟
				uni.navigateTo({
					url: '/views/pages/setAlarm',
				});
			},
			removeClick(value) {
				this.ulList.splice(value.index,1);
				uni.setStorage({
					key: 'echoSelAlarm',
					data: JSON.stringify(this.ulList)
				});
			},
			alarmSwitch(e,index){
				//闹钟开关;
				let obj = this.ulList[index];
				obj['enable'] = e.target.value;
				this.$set(this.ulList,index, obj);
			},
			goEcho(index,item){
				//回显数据
				uni.navigateTo({
					url: '/views/pages/setAlarm?echo=true',
				});
				let obj = item;
				obj['echoIndex'] = index;
				uni.setStorage({
					key: 'echoSelAlarm',
					data: JSON.stringify(obj)
				});
			}
		},
		components:{
			uniSwipeAction
		}
	}
</script>

<style>

</style>
