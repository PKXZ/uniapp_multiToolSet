<template>
	<view class="main">
		<view class="jk_TabTitle">
			<view 
			v-for="(item,index) in tabTitle" 
			:key="index" 
			:class="index === activedTab ? 'jk_TabTitleActive' : ''"
			@click="clickTab(item,index)">
				<span>{{item.name}}</span>
				<p :class="index === activedTab ? 'jk_TabTitleActiveP' : ''"></p>
			</view>
		</view>
		<view class="jk_TabMain" v-show="activedTab === 0">
			科一
		</view>
		<view class="jk_TabMain" v-show="activedTab === 1">
			科二
		</view>
		<view class="jk_TabMain" v-show="activedTab === 2">
			科三
		</view>
		<view class="jk_TabMain" v-show="activedTab === 3">
			科四
		</view>
		<view class="jk_TabMain" v-show="activedTab === 4">
			拿本
		</view>
	</view>
</template>

<script>
	import '../../static/css/driving_jk.css'
	export default{
		data(){
			return{
				activedTab: -1,
				tabTitle: [{
					name: '科一',
					type: 'kOne'
				},{
					name: '科二',
					type: 'kTwo'
				},{
					name: '科三',
					type: 'kThree'
				},{
					name: '科四',
					type: 'kFour'
				},{
					name: '拿本',
					type: 'take'
				}],
				activedItem: {}
			}
		},
		watch:{
			activedItem:{
				handler(newData, oldData) {
					this.activedItem = newData;
				},
				deep: true
			}
		},
		methods:{
			clickTab(item,index){
				this.activedTab = index;
				this.activedItem = item;
			}
		}
	}
</script>

<style>
</style>
