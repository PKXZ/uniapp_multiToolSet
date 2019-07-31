<template>
	<view class="main">
		<scroll-view scroll-y="true" class="otScroll">
			<ul>
				<li v-for="(item,index) in topicList" :key="index">
					<view class="otBtView">
						<span>{{item.catgoryName}}</span>
						<span>
							<p class="otCurrentPage">{{currentPage}}</p>
							<p class="otLine">/</p>
							{{itemList.topic[1]}}
						</span>
					</view>
					<ul class="topicUl">
						<li v-for="(it,indexs) in item.data" :key="indexs">
							<span>{{it.bt}}</span>
							<view v-if="it.type === 'radio'">
								<radio-group class="choOptions" @change="radioboxChange">
									<label v-for="(chooseIt,ind) in it.chooseItem" :key="ind">
										<span>{{ind | formatOpt}}</span>
										<view>
											<radio :id="chooseIt.name" :value="chooseIt.name" :checked="chooseIt.checked"></radio>
										</view>
										<view>
											<label class="label-2-text" :for="chooseIt.name">
												<text>{{chooseIt.name}}</text>
											</label>
										</view>
									</label>
								</radio-group>
							</view>
							<view v-if="it.type === 'multiple'">
								<checkbox-group class="choOptions" @change="checkboxChange">
									<label v-for="(chooseIt,ind) in it.chooseItem" :key="ind">
										<view>
											<checkbox :value="chooseIt.name" :checked="chooseIt.checked"></checkbox>
										</view>
										<view>{{chooseIt.name}}</view>
									</label>
								</checkbox-group>
							</view>
							<view v-if="it.type === 'analysis'">
								<label class="labels" v-for="(chooseIt,ind) in it.chooseItem" :key="ind">{{chooseIt.name}}</label>
							</view>
						</li>
					</ul>
				</li>
			</ul>
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
				//题库
				topicList: [
					{
						catgoryName: '单项选择题',
						data: [{
								xh: 1,
								id: 1,
								isEnd: true,
								type: 'radio',
								bt: '哪个HTML标签用来包含外部的样式表？',
								chooseItem: [
									{
										name: '<css>',
										value: ''
									},{
										name: '<include>',
										value: ''
									},{
										name: '<link>',
										value: ''
									},{
										name: '<style>',
										value: ''
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
										name: 'get方法传递的数据对客户端是不可见的',
										value: ''
									},{
										name: 'post方法对发送数据的数量限制在255个字符之内',
										value: ''
									},{
										name: 'get请求信息以查询字符串的形式发送，查询字符串长度没有大小限制',
										value: ''
									},{
										name: 'post方法传递的数据对客户端是不可见的',
										value: ''
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
										name: 'style="display:none"',
										value: ''
									},{
										name: 'style="display:disvisible"',
										value: ''
									},{
										name: 'style="display:block"',
										value: ''
									},{
										name: 'style="display:visible"',
										value: ''
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
										name: '<list>',
										value: ''
									},{
										name: '<dl>',
										value: ''
									},{
										name: '<ol>',
										value: ''
									},{
										name: '<ul>',
										value: ''
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
										name: 'Random bars horizontal',
										value: ''
									},{
										name: 'Random',
										value: ''
									},{
										name: 'Random bars vertical',
										value: ''
									},{
										name: 'Strips right up',
										value: ''
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
										name: '<a href="#" onmouseover="this.style.fontsize=30px">注册</a>',
										value: ''
									},{
										name: '<a href="#" onmouseout="this.style.fontsize=30px">注册</a>',
										value: ''
									},{
										name: '<a href="#" onmouseover="this.style.font-size=30px">注册</a>',
										value: ''
									},{
										name: '<a href="#" onmouseout="this.style.font-size=30px">注册</a>',
										value: ''
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
										name: '绝对采用绝对定位，把浏览器左上角作为定位坐标的原点',
										value: ''
									},{
										name: '它是关键，它决定了层的基本属性设定',
										value: ''
									},{
										name: '静态不能被定位，但可以被用来作为别的元素定位的依据',
										value: ''
									},{
										name: '相对可以相对于网页中的元素进行定位',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: 'var Person john = new Person("John", "Doe", 50, "blue")',
										value: ''
									},{
										name: 'var john = new Person("John", "Doe", 50, "blue")',
										value: ''
									},{
										name: 'Person john = new Person("John", "Doe", 50, "blue")',
										value: ''
									},{
										name: 'new john = Person("John", "Doe", 50, "blue")',
										value: ''
									}
								]
							}
						]
					},{
						catgoryName: '多项选择题',
						data: [{
								xh: 10,
								id: 1,
								isEnd: false,
								type: 'multiple',
								bt: '<img alt=#>，表示',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
									}
								]
							},{
								xh: 11,
								id: 2,
								bt: '<img alt=#>，表示',
								type: 'multiple',
								chooseItem: [
									{
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
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
										name: '在浏览器尚未完全读入图象时，在图象位置显示的文字',
										value: ''
									},{
										name: '图像的地址',
										value: ''
									},{
										name: '图像的排列方式',
										value: ''
									}
								]
							}
						]
					},{
						catgoryName: '分析题',
						data: [{
								xh: 19,
								id: 1,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 20,
								id: 2,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 21,
								id: 3,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 22,
								id: 4,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 23,
								id: 5,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 24,
								id: 6,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 25,
								id: 7,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 26,
								id: 8,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							},{
								xh: 27,
								id: 9,
								type: 'analysis',
								isEnd: false,
								bt: '我是分析题的标题',
								chooseItem: [
									{
										name: 'style="display:none"'
									}
								]
							}
						]
					}
				] 
			}
		},
		filters: {
			formatOpt: function(value) {
				let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
				return arr[value];
			}
		},
		mounted(){
			
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
			radioboxChange(e){
				const checked = e.target.value
				console.log(checked)
			},
			checkboxChange(e){
				const checked = e.target.value
				console.log(checked)
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
