<template>
	<view class="main">
		<view class="topicTotal" v-for="(item,index) in topicList" :key="index">
			<span>
				<p></p>
				{{item.catgoryName}}
			</span>
			<ul>
				<li 
					v-for="(it,indexs) in item.data" 
					:key="indexs" 
					:class="currentTopic === it.xh ? 'currentTopic' : it.isEnd ? 'grayTopic' : ''"
					@click="chooseTopic(it)">
					<span>{{it.xh}}</span>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import '@/static/css/front_zx_topicTotal.css'
	export default{
		onLoad(options) {
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
				currentTopic: 3,
				topicList: [
					{
						catgoryName: '单项选择题',
						data: [
							{
								xh: 1,
								id: 1,
								bt: '我是单项选择题的标题',
								isEnd: true
							},{
								xh: 2,
								id: 2,
								bt: '我是单项选择题的标题',
								isEnd: true
							},{
								xh: 3,
								id: 3,
								bt: '我是单项选择题的标题',
								isEnd: false
							},{
								xh: 4,
								id: 4,
								bt: '我是单项选择题的标题',
								isEnd: false
							},{
								xh: 5,
								id: 5,
								bt: '我是单项选择题的标题',
								isEnd: false
							},{
								xh: 6,
								id: 6,
								bt: '我是单项选择题的标题',
								isEnd: false
							},{
								xh: 7,
								id: 7,
								bt: '我是单项选择题的标题',
								isEnd: false
							},{
								xh: 8,
								id: 8,
								bt: '我是单项选择题的标题',
								isEnd: false
							},{
								xh: 9,
								id: 9,
								bt: '我是单项选择题的标题',
								isEnd: false
							}
						]
					},{
						catgoryName: '多项选择题',
						data: [
							{
								xh: 10,
								id: 1,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 11,
								id: 2,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 12,
								id: 3,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 13,
								id: 4,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 14,
								id: 5,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 15,
								id: 6,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 16,
								id: 7,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 17,
								id: 8,
								bt: '我是多项选择题的标题',
								isEnd: false
							},{
								xh: 18,
								id: 9,
								bt: '我是单项选择题的标题',
								isEnd: false
							}
						]
					},{
						catgoryName: '分析题',
						data: [
							{
								xh: 19,
								id: 1,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 20,
								id: 2,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 21,
								id: 3,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 22,
								id: 4,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 23,
								id: 5,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 24,
								id: 6,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 25,
								id: 7,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 26,
								id: 8,
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 27,
								id: 9,
								bt: '我是分析题的标题',
								isEnd: false
							}
						]
					}
				] 
			}
		},
		methods: {
			chooseTopic(item) {
				this.currentTopic = item.xh;
				uni.navigateTo({
					url: '/views/pages/front/front_zx_onlineTest'
				});
			}
		},
	}
</script>

<style>
</style>
