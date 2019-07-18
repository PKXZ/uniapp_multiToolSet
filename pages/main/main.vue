<template>
	<view class="main">
		<!--轮播图-->
		<swiper 
			class='swiperView'
			:indicator-dots="indicatorDots"
			:indicator-active-color="indicatorActiveColor"
			:autoplay="autoplay"
			:interval="interval"
			:duration="duration"
			:indicator-color="indicatorColor">
			<block v-for="(list, index) in picList" :key="index">
				<swiper-item>
					<image :src="list" class="swiper_image"></image>
				</swiper-item>
			</block>
		</swiper>
		<!--工具栏-->
		<view class="toolsView">
			<ul class="toolsRows">
				<li class="toolsCols" v-for="(item,index) in toolData" :key="index">
					<view
						class="toolSingel"
						:style="'background: linear-gradient(to right,' + item.color[0] +','+ item.color[1] +')'"
						@click="toTool"
						:data-items="JSON.stringify(item)">
						<i class="iconfont" :class="item.icon"></i>
					</view>
					<text>{{item.label}}</text>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
import '../../static/css/main.css';
export default {
    data() {
        return {
			picList: [
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554565147883&di=94652bd7f8e89e9c512971544994cbc2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0192e658b8d8aea801219c77111f0a.png%40900w_1l_2o_100sh.jpg'
			],
			indicatorColor: '#fff',
			indicatorActiveColor: '#00a2e9',
			indicatorDots: true,
			autoplay: true,
			interval: 5000,
			duration: 1000,
			
			toolData: [
			  {
				label: '天气预报',
				type: 'wetherForecast',
				icon: 'icon-swticontianqi',
				color: [
				  "#2481b4", "#87c6ea"
				]
			  }, {
				label: '设置闹钟',
				type: 'todayHeadline',
				icon: 'icon-naozhong',
				color: [
				  "#49bff3", "#9df8f7"
				]
			  },  {
				label: '扫一扫',
				type: 'scan',
				icon: 'icon-saoyisao',
				color: [
				  "#f57936", "#ffdb35"
				]
			  },{
				label: '二维码生成',
				type: 'qrCode',
				icon: 'icon-erweima',
				color: [
				  "#5fd8c6", "#61e6e0"
				]
			  },  {
				label: '支付',
				type: 'pay',
				icon: 'icon-ic_paid',
				color: [
				  "#fd798d", "#ffb3a6"
				]
			  },{
				label: '推送',
				type: 'push',
				icon: 'icon-fasongxinxi',
				color: [
				  "#a294f7", "#9cb1f7"
				]
			  },{
				label: '分享',
				type: 'share',
				icon: 'icon-fenxiang',
				color: [
				  "#61c566", "#a9e28b"
				]
			  },  {
				label: '拨打电话',
				type: 'callPhone',
				icon: 'icon-shoujidadianhua',
				color: [
				  "#c477d2", "#dd87cd"
				]
			  },  {
				label: '地图定位',
				type: 'todayHeadline',
				icon: 'icon-dituguanli',
				color: [
				  "#5eb8f1", "#6fd1ef"
				]
			  }, {
				label: '新华字典',
				type: 'xinhuaDictionary',
				icon: 'icon-xinhuazidian',
				color: [
				  "#4facfe", "#00f2fe"
				]
			  }, {
				label: '成语字典',
				type: 'idiomsDictionary',
				icon: 'icon-chengyucidian',
				color: [
				  "#43e97b", "#38f9d7"
				]
			  }, {
				label: '驾照题库',
				type: 'driverTest',
				icon: 'icon-jiazhaodengji',
				color: [
				  "#00b9a3", "#00cc9a"
				]
			  }, {
				label: '历史今天',
				type: 'historyToday',
				icon: 'icon-lishi',
				color: [
				  "#4e95ff", "#54bdfa"
				]
			  }, {
				label: '文字转换',
				type: 'textConversion',
				icon: 'icon-zhuanhuan',
				color: [
				  "#87e3e4", "#59c4f1"
				]
			  }, {
				label: '星座运势',
				type: 'constellationChart',
				icon: 'icon-xingzuo',
				color: [
				  "#2af598", "#009efd"
				]
			  }, {
				label: '周公解梦',
				type: 'zgInterprets',
				icon: 'icon-zuomeng',
				color: [
				  "#18bcf4", "#ade4fd"
				]
			  }, {
				label: '今日头条',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#58a0fd", "#c8c6ff"
				]
			  },{
				label: '语音读报',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#577ff3", "#abb1f6"
				]
			  },{
				label: 'xxx',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#ef9a3c", "#f8c568"
				]
			  }, {
				label: 'xxx',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#e858a2", "#ec8fc3"
				]
			  }, {
				label: 'xxx',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#2f6af8", "#51c0fa"
				]
			  }, {
				label: 'xxx',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#eb5d43", "#ef9181"
				]
			  }, {
				label: 'xxx',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#ea4646", "#ef7873"
				]
			  }, {
				label: 'xxx',
				type: 'todayHeadline',
				icon: 'icon-xinwen',
				color: [
				  "#f09b3d", "#f9d267"
				]
			  }
			]
      }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        },
				toTool(event){
					const item = JSON.parse(event.currentTarget.dataset.items);
					const label = item.label;
					const type = item.type;
					uni.navigateTo({
						url: '/views/' + type + '?label=' + label,
					})
				}
    }
}
</script>

<style>

</style>