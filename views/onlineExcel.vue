<template>
	<view class="main">
		<view ref="input" class="input"></view>
		<view>
			{{outData}}
		</view>
	</view>
</template>

<script>
	//#ifdef H5
		import XLSX from 'xlsx'
	//#endif
	export default{
		onLoad(options) {
			//动态设置标题
			if (options.label) {
			  uni.setNavigationBarTitle({
				title: options.label
			  })
			}
			// #ifdef H5
			var input = document.createElement('input')  
            input.type = 'file';
			input.accept=".xlsl";
            input.onchange = (event) => {  
				self.exportData(event);
            }  
            const self = this;
			self.$nextTick(function(){
				self.$refs.input.$el.appendChild(input)
			})
			// #endif
		},
		data(){
			return{
				outData: []
			}
		},
		methods: {
			exportData(event) {
			  if(!event.currentTarget.files.length) { 
				return;
			  }
			  const that = this;
			  // 拿取文件对象
			  var f = event.currentTarget.files[0];
			  // 用FileReader来读取
			  var reader = new FileReader();
			  // 重写FileReader上的readAsBinaryString方法
			  FileReader.prototype.readAsBinaryString = function(f) {
				var binary = "";
				var wb; // 读取完成的数据
				var outdata; // 你需要的数据
				var reader = new FileReader();
				reader.onload = function(e) {
				// 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
				  var bytes = new Uint8Array(reader.result);
				  var length = bytes.byteLength;
				  for (var i = 0; i < length; i++) {
					binary += String.fromCharCode(bytes[i]);
				  }
				  // 接下来就是xlsx了，具体可看api
				  wb = XLSX.read(binary, {
					type: "binary"
				  });
				  outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
				  // 自定义方法向父组件传递数据
				  that.$emit("getResult", outdata);
				  that.outData = outdata;
				};
				reader.readAsArrayBuffer(f);
			  };
			  reader.readAsBinaryString(f);
			}
		},
	}
</script>

<style>
</style>
