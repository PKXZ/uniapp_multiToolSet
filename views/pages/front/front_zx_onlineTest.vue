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
			<pre class="line-numbers">
				<code class="language-js">
					require("lib/ace"); ##引入
					editor.setTheme("ace/theme/solarized_dark");##设置模theme-solarized_dark.js模板文件
					editor.getSession().setMode("ace/mode/javascript"); ##设置程序语言模式
					editor.setValue("the new text here");##设置内容
					editor.getValue(); ##取值
				</code>
			</pre>
			<pre>
				<code class="language-css">
					@font-face {
						src: url(http://www.baidu.com);
						font-family: 'LeaVerou';
					}
				</code>
			</pre>
			<pre>
				<code class="language-css">
					@media <mark>screen</mark> {
						div {
							<mark>text</mark>-decoration: <mark><mark>under</mark>line</mark>;
							back<mark>ground: url</mark>('foo.png');
						}
					}
				</code>
			</pre>
			<pre>
					
				<code class="language-javascript">




					var example = {
						foo: true,



						bar: false
					};


				</code>

			</pre>

		</scroll-view>
		<tabbar :tabbar="tabbar" :actived="actived" @emitActived="emitActived"></tabbar>
	</view>
</template>

<script>
	import '@/static/css/front_zx_onlineTest.css'
	import tabbar from '@/components/common/tabbar.vue'
	/* import hljs from 'highlight.js' //导入代码高亮文件
	import 'highlight.js/styles/atom-one-light.css' /*monokai-sublime tomorrow*/ //导入代码高亮样式 */
	import prism from 'prismjs'
	import 'prismjs/themes/prism-tomorrow.css'
	//行号
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
	//将代码中的URL和电子邮件转换为可单击的链接
	import 'prismjs/plugins/autolinker/prism-autolinker.css'
	import 'prismjs/plugins/autolinker/prism-autolinker.min.js'
	//支持多个操作来规范化代码块中的空白
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'
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
				]
			}
		},
		mounted(){
			prism.plugins.NormalizeWhitespace.setDefaults({
				'remove-trailing': true,
				'remove-indent': true,
				'left-trim': true,
				'right-trim': true,
				'break-lines': 0,
				'indent': 0,//断裂线
				'remove-initial-line-feed': true,//除去-初始换行
				'tabs-to-spaces': 0,//标签到空间
				'spaces-to-tabs': 0,//空间对标签
			});
			prism.highlightAll();
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
			},
			highlightCode(){
			  const preEl = document.querySelectorAll('pre code');
			  preEl.forEach((el) => {
				hljs.highlightBlock(el)
			  })
			}
		},
		components: {
			tabbar
		},
	}
</script>

<style>
	.token.keyword.keyword-return, .token.keyword.keyword-if{
		color: red;
	}
</style>
