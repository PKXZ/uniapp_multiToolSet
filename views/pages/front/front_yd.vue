<template>
	<view class="main">
		<ul class="fornt_ydUl">
			<li v-for="(item,index) in dataList" :key="index">
				<img :src="item.fmUrl">
				<span>{{item.name}}</span>
			</li>
		</ul>
	</view>
</template>

<script>
	import '@/static/css/fornt_yd.css'
	export default{
		data(){
			return{
				dataList: [
					{
						name: '深入React技术栈',
						fmUrl: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d0889e428e94a4c20a23e02d36cf7ce8/5ab5c9ea15ce36d3d339fc7d33f33a87e950b1b9.jpg'
					},{
						name: '前端架构设计',
						fmUrl: 'https://images-cn.ssl-images-amazon.com/images/I/512QGz+hq6L._SX377_BO1,204,203,200_.jpg'
					},{
						name: 'JavaScript高级程序',
						fmUrl: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=bc80e81411d5ad6eaaf963ecb9f05ee6/b7003af33a87e9505bb120bc1a385343faf2b4b8.jpg'
					},{
						name: '深入浅出ES6',
						fmUrl: 'https://static001.infoq.cn/resource/image/8d/67/8df5600c7b8d084aeffe3a7bc7aff367.jpg?x-oss-process=image/resize,h_496'
					},{
						name: 'JavaScript权威指南',
						fmUrl: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c4a0ece4bb3533faf5b6942890e89a22/3c6d55fbb2fb4316b05a1f902aa4462308f7d397.jpg'
					},{
						name: 'React Native应用开发实践解析',
						fmUrl: 'https://img1.doubanio.com/view/subject/l/public/s29533009.jpg'
					},{
						name: '深入React技术栈',
						fmUrl: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d0889e428e94a4c20a23e02d36cf7ce8/5ab5c9ea15ce36d3d339fc7d33f33a87e950b1b9.jpg'
					},{
						name: '前端架构设计',
						fmUrl: 'https://images-cn.ssl-images-amazon.com/images/I/512QGz+hq6L._SX377_BO1,204,203,200_.jpg'
					},{
						name: 'JavaScript高级程序',
						fmUrl: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=bc80e81411d5ad6eaaf963ecb9f05ee6/b7003af33a87e9505bb120bc1a385343faf2b4b8.jpg'
					},{
						name: '深入浅出ES6',
						fmUrl: 'https://static001.infoq.cn/resource/image/8d/67/8df5600c7b8d084aeffe3a7bc7aff367.jpg?x-oss-process=image/resize,h_496'
					},{
						name: 'JavaScript权威指南',
						fmUrl: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c4a0ece4bb3533faf5b6942890e89a22/3c6d55fbb2fb4316b05a1f902aa4462308f7d397.jpg'
					},{
						name: 'React Native应用开发实践解析',
						fmUrl: 'https://img1.doubanio.com/view/subject/l/public/s29533009.jpg'
					}
				]
			}
		}
	}
</script>

<style>
</style>
