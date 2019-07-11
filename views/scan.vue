<template>
	<view class="main">
		<!--  #ifndef  H5 -->
		<view>
			<label>条码内容：</label>
			<span>{{result}}</span>
		</view>
		<view>
			<label>条码类型：</label>
			<span>{{scanType}}</span>
		</view>
		<!--  #endif -->
		<!-- #ifdef H5 -->
		<view class="scan">
			<view id="bcid">
			  <view class="content"></view>
			  <p class="tip">...载入中...</p>
			</view>
			<footer>
			  <button @click="startScan" v-show="isShow">点击扫描</button>
			  <button @click="cancelScan">取消</button>
			</footer>
		  </view>
		<!--  #endif -->
	</view>
</template>

<script>
	 let scan = null;
  //点手机虚拟返回键
     document.addEventListener("plusready", function() {
        // 注册返回按键事件
        plus.key.addEventListener('backbutton', function() {
            // 事件处理
            scan.close();//关闭条码识别控件
            window.history.back();
        }, false);
    });
  export default {
    data() {
      return {
        result: '',
		scanType: '',
		
		 codeUrl: '',
          isShow:true
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
		  backgroundColor: '#208ffa',
		  animation: {
			duration: 400,
			timingFunc: 'easeIn'
		  }
		})
		
		const self = this;
		//uni.scanCodeAPI暂时不支持h5，所以用别的方式
		//#ifndef H5
			uni.scanCode({
				success: function (res) {
					self.result = res.result;
					self.scanType = res.scanType;
				},
				fail: function(res){
					console.log('接口调用失败的回调函数（识别失败、用户取消等情况下触发）')
					console.log(res)
				},
				complete: function(error){
					console.log('接口调用结束的回调函数（调用成功、失败都会执行）')
					console.log(error)
				}
			});
		//#endif
		//#ifdef H5
			// uni.showToast({
			// 	title: '该API扫一扫功能暂时不支持h5'
			// })
			self.startRecognize();
			self.startScan();
		//#endif
	},
    methods: {
     //创建扫描控件
      startRecognize() {
        let that = this;
        if (!window.plus) return;
        that.isShow=false;
        // 创建条码扫描识别控件
        scan = new plus.barcode.Barcode('bcid');
        // 条码识别成功
        scan.onmarked = onmarked;
      },
	  onmarked(type, result, file) {
		  alert(type);
		  alert(result);
		  alert(file);
	    switch (type) {
	      case plus.barcode.QR:
	        type = 'QR';
	        break;
	      case plus.barcode.EAN13:
	        type = 'EAN13';
	        break;
	      case plus.barcode.EAN8:
	        type = 'EAN8';
	        break;
	      default:
	        type = '其它' + type;
	        break;
	    }
	    result = result.replace(/\n/g, '');
	    that.codeUrl = result;//扫描后返回值
	    alert(result);
	    scan.cancel();//关闭扫描
	    scan.close();//关闭条码识别控件
	    if(that.codeUrl){
	      that.isShow=true
	    }
	  },
      //开始扫描
      startScan() {
        if (!window.plus) return;
        this.startRecognize()//创建控件
        scan.start();
      },

      cancelScan(){
        this.isShow=true;
        scan.cancel();//关闭扫描
        scan.close();//关闭条码识别控件
      }
    }
  }

</script>

<style>
	.scan {
    height: 100%;
}
.scan #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 50px;/*px*/
      bottom:3rem;
      text-align: center;
      color: #fff;
      background: #ccc;
}
.scan footer {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      bottom: 1rem;
      width: 100%;
      height: 1rem;
      /*line-height: 2rem;*/
      z-index: 2;
      display: flex;
      justify-content: center;
}
.scan footer button{
  width: 45%;
  font-size: 30px;/*px*/
}
.clickBtn,.cancelBtn{
  margin-top:20px;/*px*/
  width: 150px;/*px*/
  height: 60px;/*px*/
  text-align: center;;
}
.cancelBtn{
  margin-left: 20px;/*px*/
}
</style>
