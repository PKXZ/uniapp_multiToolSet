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
			   <pre>
				   <code class="html">
					   <div>aaa</div>
					</code>
				</pre>
		</scroll-view>
		<tabbar :tabbar="tabbar" :actived="actived" @emitActived="emitActived"></tabbar>
	</view>
</template>

<script>
	import '@/static/css/front_zx_onlineTest.css'
	import tabbar from '@/components/common/tabbar.vue'
	import hljs from 'highlight.js' //导入代码高亮文件
	import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式
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
		mounted(){
			/* let blocks = el.querySelectorAll('pre code');
			blocks.forEach((block)=>{
				hljs.highlightBlock(block);
			}) */
			   initHighlightingOnLoad('html', 'css');
		},
		methods:{
			emitActived(item){
				this.actived = item.index;
				if(item.type === 'sc'){
					
				}else if(item.type === 'tk'){
					uni.navigateTo({
						url: '/views/pages/front/front_zx_topicTotal'
					});
				}else if(item.type === 'zf'){
					
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
