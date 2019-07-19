<template>
	<view class="main">
		<view class="content">
			<input v-if="contacts.length>0 || isSearch" class="search" type="text" placeholder="搜索联系人" @input="onSearchInput" />
			<view v-if="contacts.length>0">
				<scroll-view class="contact-scroll" scroll-y :scroll-into-view="scrollViewId">
					<view class="box" v-for="(item,key) in contacts" :key="key">
						<view class="divider" :id="item.letter">
							<text class="divider-text">{{item.letter}}</text>
						</view>
						<view class="item" hover-class="hover" hover-start-time="20" v-for="(contact,index) in item.contacts" :key="index" @click='onSelectClick(contact)'>
							<image class="portrait" src="https://download.cheshangji.cn/app/46aeda5af72f44ba818423c6cb54799a.png" mode="aspectFill"></image>
							<view class="name">{{contact.name}}</view>
						</view>
					</view>
				</scroll-view>
				<view class="indexBar-bg">
					<view class="indexBar" catchtouchmove>
						<view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove="tMove">
							<view class="indexBar-item" v-for="(item,index) in contacts" :key="index" :id="item.letter" @touchstart="getCur"
							 @touchend="setCur">
								{{item.letter}}
							</view>
						</view>
					</view>
				</view>
				<view v-show="!hidden" class="indexToast">{{letter}}</view>
			</view>
			<text v-else class="no-contact">通讯录暂无联系人</text>
		</view>
	</view>
</template>

<script>
	import '../static/css/callPhone.css';
	import pinyin from '@/utils/pinyin3.js'
	export default{
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
			
			const res = uni.getSystemInfoSync();
			this.barHeight = res.windowHeight / 27;
			//初始通讯录
			this.initContacts()
		},
		onReady() {
			const that = this
			uni.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(e) {
				if (e != null) {
					that.boxTop = e.top
				}
			}).exec()
		},
		data(){
			return{
				/* 侧边栏选择器 */
				scrollViewId: "wo",
				letter: "",
				boxTop: 0,
				barHeight: 0,
				minHeight: 0,
				hidden: true,
				/* 联系人 */
				contacts: [],
				contactItems: [],
				isSearch: false,
				isShow: false,
				platform: uni.getSystemInfoSync().platform
			}
		},
		methods: {
			/*
			 * 滑动的侧边选择器
			 */
			getCur(e) {
				this.hidden = false
				this.letter = e.target.id
			},
			setCur(e) {
				this.hidden = true;
				this.letter = e.target.id
			},
			tMove(e) {
				const y = e.touches[0].clientY
				const offsettop = this.boxTop
				//判断选择区域,只有在选择区才会生效
				if (y > offsettop) {
					const num = Math.floor((y - offsettop) / this.barHeight);
					if (num < this.contacts.length) {
						this.letter = this.contacts[num].letter
						this.scrollViewId = this.letter
					}
				}
			},
			tStart() {
				this.hidden = false
			},
			tEnd() {
				this.hidden = true;
			},
			/* 
			 * 初始化通讯录
			 */
			initContacts: function() {
				//获取手机通讯录
				// #ifdef APP-PLUS
				plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE, (addressbook) => {
					// 可通过addressbook进行通讯录操作
					addressbook.find(["displayName", "phoneNumbers"], (contacts) => {
						let items = [];
						for (let i = 0; i < contacts.length; i++) {
							if (contacts[i].phoneNumbers.length > 0) {
								let contact = {
									'name': contacts[i].displayName,
									'phone': contacts[i].phoneNumbers[0].value
								};
								items.push(contact);
							}
						}
						this.contacts = pinyin.paixu(items)
						this.contacts.sort(function(o1, o2) {
							return o1.letter.charCodeAt(0) - o2.letter.charCodeAt(0)
						})
						this.contactItems = JSON.parse(JSON.stringify(this.contacts))
					}, (e) => {
						this.onAddressBookSetting()
					});
				}, (e) => {
					this.onAddressBookSetting()
				});
				//#endif
				//#ifdef H5 || MP
				uni.showToast({
					title: '请于APP中打开'
				})
				//#endif
			},
			/*
			 * 权限设置
			 */
			onAddressBookSetting: function() {
				if (this.isShow) {
					return
				}
				this.isShow = true
				uni.showModal({
					title: '提示',
					content: 'APP通讯录权限没有开启，是否开启？',
					success(res) {
						if (res.confirm) {
							if (platform == 'ios') {
								let UIApplication = plus.ios.import("UIApplication");
								let NSURL2 = plus.ios.import("NSURL");
								let setting2 = NSURL2.URLWithString("app-settings:");
								let application2 = UIApplication.sharedApplication();
								application2.openURL(setting2);
								plus.ios.deleteObject(setting2);
								plus.ios.deleteObject(NSURL2);
								plus.ios.deleteObject(application2);
							} else {
								let main = plus.android.runtimeMainActivity();
								let bulid = plus.android.importClass("android.os.Build");
								let Intent = plus.android.importClass('android.content.Intent');
								if (bulid.VERSION.SDK_INT >= 9) {
									let intent = new Intent('android.settings.APPLICATION_DETAILS_SETTINGS');
									let Uri = plus.android.importClass('android.net.Uri');
									let uri = Uri.fromParts("package", main.getPackageName(), null)
									intent.setData(uri);
									intent.putExtra('android.content.Intent.setFlags', Intent.FLAG_ACTIVITY_NEW_TASK);
								} else if (bulid.VERSION.SDK_INT <= 8) {
									let intent = new Intent(Intent.ACTION_VIEW);
									intent.setClassName("com.android.settings", "com.android.settings.InstalledAppDetails");
									intent.putExtra("com.android.settings.ApplicationPkgName", main.getPackageName());
									intent.putExtra('android.content.Intent.setFlags', Intent.FLAG_ACTIVITY_NEW_TASK);
								}
								main.startActivity(intent);
								this.isShow = false
							}
						} else {
							uni.navigateBack({
								delta: 1
							})
						}
					}
				})
			},
			/* 
			 * 点击联系人
			 */
			onSelectClick: function(contact) {
				uni.showActionSheet({
					itemList: ['拨打电话'],
					success: (e) => {
						if (e.tapIndex == 0) {
							uni.makePhoneCall({
								phoneNumber: contact.phone
							});
						}
					}
				})
			},
			/* 
			 * 搜索
			 */
			onSearchInput: function(e) {
				let searchVal = e.detail.value
				this.isSearch = true
				if (searchVal == '') {
					this.contacts = JSON.parse(JSON.stringify(this.contactItems))
					this.isSearch = false
				} else {
					let showList = []
					let list = []
					list = JSON.parse(JSON.stringify(this.contactItems))
					list.forEach((item, index1) => {
						let contacts = []
						item.contacts.forEach((contact, index2) => {
							for (let i = 0; i < searchVal.length; i++) {
								if (contact.name.indexOf(searchVal[i]) != -1) {
									let contain = false;
									contacts.find(function(val) {
										if (val.phone == contact.phone) {
											contain = true;
										}
									});
									if (!contain) {
										contacts.push(contact);
									}
								}
							}
						})
						if (contacts.length > 0) {
							let contacts = {
								letter: item.letter,
								contacts: contacts
							}
							showList = showList.concat(contacts)
						}
					})
					setTimeout(() => {
						this.contacts = JSON.parse(JSON.stringify(showList))
					}, 200)
				}
			}
		}
	}
	
</script>

<style>
</style>
