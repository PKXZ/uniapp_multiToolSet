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
			<!-- <pre class="line-numbers">
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

			</pre> -->

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
				],
				//题库
				topicList: [
					{
						catgoryName: '单项选择题',
						data: [
							{
								xh: 1,
								id: 1,
								isEnd: true,
								type: 'radio',
								bt: '哪个HTML标签用来包含外部的样式表？',
								chooseItem: [
									{
										name: '<css>'
									},{
										name: '<include>'
									},{
										name: '<link>'
									},{
										name: '<style>'
									}
								]
							},{
								xh: 2,
								id: 2,
								isEnd: true,
								type: 'radio',
								bt: 'HMTL表单的首要标记是,标记的参数method表示表单发送的方法，可能为get或post，下列关于get和post的描述正确的是',
								chooseItem: [
									{
										name: 'get方法传递的数据对客户端是不可见的'
									},{
										name: 'post方法对发送数据的数量限制在255个字符之内'
									},{
										name: 'get请求信息以查询字符串的形式发送，查询字符串长度没有大小限制'
									},{
										name: 'post方法传递的数据对客户端是不可见的'
									}
								]
							},{
								xh: 3,
								id: 3,
								isEnd: false,
								type: 'radio',
								bt: '如果在HTML页面中包含如下图片标签，则在下划线处添加（）代码能够实现隐藏该图片的功能。<img id="pic" src="Sunset.jpg" width="400" height="300"  ____________ >',
								chooseItem: [
									{
										name: 'style="display:none"'
									},{
										name: 'style="display:disvisible"'
									},{
										name: 'style="display:block"'
									},{
										name: 'style="display:visible"'
									}
								]
							},{
								xh: 4,
								id: 4,
								isEnd: false,
								type: 'radio',
								bt: '如何产生带有圆点符号的列表？',
								chooseItem: [
									{
										name: '<list>'
									},{
										name: '<dl>'
									},{
										name: '<ol>'
									},{
										name: '<ul>'
									}
								]
							},{
								xh: 5,
								id: 5,
								isEnd: false,
								type: 'radio',
								bt: '动态HTML中随机水平线条的转换特效类型是？',
								chooseItem: [
									{
										name: 'Random bars horizontal'
									},{
										name: 'Random'
									},{
										name: 'Random bars vertical'
									},{
										name: 'Strips right up'
									}
								]
							},{
								xh: 6,
								id: 6,
								isEnd: false,
								type: 'radio',
								bt: '在HTML文档中包含如下超链接，要实现当鼠标移入该链接时，超链接文本大小变为30px，选项中的编码正确的是',
								chooseItem: [
									{
										name: '<a href="#" onmouseover="this.style.fontsize=30px">注册</a>'
									},{
										name: '<a href="#" onmouseout="this.style.fontsize=30px">注册</a>'
									},{
										name: '<a href="#" onmouseover="this.style.font-size=30px">注册</a>'
									},{
										name: '<a href="#" onmouseout="this.style.font-size=30px">注册</a>'
									}
								]
							},{
								xh: 7,
								id: 7,
								isEnd: false,
								type: 'radio',
								bt: '使用样式表建立新层，下面关于位置的参数的说法错误的是',
								chooseItem: [
									{
										name: '绝对采用绝对定位，把浏览器左上角作为定位坐标的原点'
									},{
										name: '它是关键，它决定了层的基本属性设定'
									},{
										name: '静态不能被定位，但可以被用来作为别的元素定位的依据'
									},{
										name: '相对可以相对于网页中的元素进行定位'
									}
								]
							},{
								xh: 8,
								id: 8,
								isEnd: false,
								type: 'radio',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 9,
								id: 9,
								type: 'radio',
								bt: '我是单项选择题的标题',
								isEnd: false,
								bt: '创建Person的一个实例，下面哪一个是正确的？',
								chooseItem: [
									{
										name: 'var Person john = new Person("John", "Doe", 50, "blue")'
									},{
										name: 'var john = new Person("John", "Doe", 50, "blue")'
									},{
										name: 'Person john = new Person("John", "Doe", 50, "blue")'
									},{
										name: 'new john = Person("John", "Doe", 50, "blue")'
									}
								]
							}
						]
					},{
						catgoryName: '多项选择题',
						data: [
							{
								xh: 10,
								id: 1,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 11,
								id: 2,
								bt: '<img alt=#>，表示',
								type: 'multiple',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 12,
								id: 3,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 13,
								id: 4,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 14,
								id: 5,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 15,
								id: 6,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 16,
								id: 7,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 17,
								id: 8,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							},{
								xh: 18,
								id: 9,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字'
									},{
										name: '图像的地址'
									},{
										name: '图像的排列方式'
									}
								]
							}
						]
					},{
						catgoryName: '分析题',
						data: [
							{
								xh: 19,
								id: 1,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 20,
								id: 2,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 21,
								id: 3,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 22,
								id: 4,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 23,
								id: 5,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 24,
								id: 6,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 25,
								id: 7,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 26,
								id: 8,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							},{
								xh: 27,
								id: 9,
								type: 'analysis',
								bt: '我是分析题的标题',
								isEnd: false
							}
						]
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
