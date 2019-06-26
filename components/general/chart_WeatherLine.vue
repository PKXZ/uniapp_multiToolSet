<template>
	<canvas class="canvas" canvas-id="weatherLineCanvas" ref="weatherLineCanvas" id="weatherLineCanvas"></canvas>
	<!-- <canvas canvas-id="Canva" style="width:100%;height:360px;"></canvas> -->
</template>

<script>
	export default {
		name: 'chart_WeatherLine',
		data() {
			return {
				 hightData: [25,24,23,26,39],//[55,53,51,57,92],//[25,24,23,26,42], //每天对应最高温
				 lowData: [13,10,11,16,18],//[27,-44,24,35,37],//[13,-20,11,16,18], //每天对应最低温
				 numData: 5, //几天的数据
				 maximum: 39, //最高温度
				 minimum: 10, //最低温度
				 distance: 0, //间隔
				 item_width: 0, //左右间隔
				 canvas: {},
				 context: {}
			}
		},
		mounted() {
			const self = this;
			self.$nextTick(function(){
				self.initLine();
			});
			uni.onWindowResize((res) => {
				//此接口不支持支付宝小程序、百度小程序以及头条小程序
				self.initLine();
				 uni.showToast({
					title: '此接口不支持支付宝小程序、百度小程序以及头条小程序',
					duration: 2000
				 })
			});
		 },
		 methods:{
			 initLine(){
				 const self = this;
				 // uni.createSelectorQuery().select('#weatherLineCanvas').fields({  
				 //    size: true,  
					// context: true
				 // }, (data) => {  
					//  debugger
				 // }).exec();
				 let view = uni.createSelectorQuery().select(".canvas");
					view.fields({
					  size: true,
					context: true
					}, data => {
						debugger
					}).exec();
				 
				 // uni.createSelectorQuery().select('#weatherLineCanvas').fields({  
     //                    size: true,  
					// 	dataset: true 
     //                }, (data) => {  
					// 	console.log(data)
					// 	 const dynamicWidth = data.width
					// 	 const dynamicHeight = data.height;
					// 	 
					// 	 //绘制画布
					// 	 self.canvas = self.$refs.weatherLineCanvas.$el;
					// 	 //uniapp这里不一样1：canvas.getContext("2d");
					// 	 self.context = uni.createCanvasContext('weatherLineCanvas',self);
					// 	 self.canvas.width = dynamicWidth;
					// 	 self.canvas.height = dynamicHeight;
					// 	 self.item_width = dynamicWidth / self.numData; //左右间距
					// 	 const temperDifference = self.maximum - self.minimum; //温差
					// 	 self.distance = dynamicHeight / 2 / temperDifference;
					// 	 /*
					// 	 * 画布的偏移量，item_width是画布x轴从左向右方向偏移。
					// 	 * 后面的值是y轴 按照高度的一半 + 最大数乘以间距 - 上下文字间隔数
					// 	 * */
					// 	 self.context.translate(self.item_width / 2, self.maximum * self.distance + 40);
					// 	 //this.context.translate(this.item_width / 2, dynamicHeight / 2 + this.maximum *  this.distance - 20 * 2);
					// 	 //触发函数
					// 	 self.drawLineFun(self.hightData,'#fcc370'); //高温线
					// 	 self.drawLineFun(self.lowData,'#94ccf9'); //低温线
					// 	
					// }).exec();  
				 // if(this.$refs.weatherLineCanvas){
					//  debugger
					//  const dynamicWidth = this.$refs.weatherLineCanvas.$el.clientWidth;
					//  const dynamicHeight = this.$refs.weatherLineCanvas.$el.clientHeight;
					//  
					//  //绘制画布
					//  this.canvas = this.$refs.weatherLineCanvas.$el;
					//  //uniapp这里不一样1：canvas.getContext("2d");
					//  this.context = uni.createCanvasContext('weatherLineCanvas',this);
					//  this.canvas.width = dynamicWidth;
					//  this.canvas.height = dynamicHeight;
					//  this.item_width = dynamicWidth / this.numData; //左右间距
					//  const temperDifference = this.maximum - this.minimum; //温差
					//  this.distance = dynamicHeight / 2 / temperDifference;
					//  /*
					//  * 画布的偏移量，item_width是画布x轴从左向右方向偏移。
					//  * 后面的值是y轴 按照高度的一半 + 最大数乘以间距 - 上下文字间隔数
					//  * */
					//  this.context.translate(this.item_width / 2, this.maximum * this.distance + 40);
					//  //this.context.translate(this.item_width / 2, dynamicHeight / 2 + this.maximum *  this.distance - 20 * 2);
					//  //触发函数
					//  this.drawLineFun(this.hightData,'#fcc370'); //高温线
					//  this.drawLineFun(this.lowData,'#94ccf9'); //低温线
				 // }else{
					//  uni.showToast({
					// 	title: '未获取到Canvas',
					// 	duration: 2000
					//  })
				 // }
				 const dynamicWidth = 300;
				 const dynamicHeight = 200;
				 
				 //绘制画布
				 //this.canvas = this.$refs.weatherLineCanvas.$el;
				 //uniapp这里不一样1：canvas.getContext("2d");
				 this.context = uni.createCanvasContext('weatherLineCanvas',this);
				 // this.canvas.width = dynamicWidth;
				 // this.canvas.height = dynamicHeight;
				 this.item_width = dynamicWidth / this.numData; //左右间距
				 const temperDifference = this.maximum - this.minimum; //温差
				 this.distance = dynamicHeight / 2 / temperDifference;
				 /*
				 * 画布的偏移量，item_width是画布x轴从左向右方向偏移。
				 * 后面的值是y轴 按照高度的一半 + 最大数乘以间距 - 上下文字间隔数
				 * */
				 this.context.translate(this.item_width / 2, this.maximum * this.distance + 40);
				 //this.context.translate(this.item_width / 2, dynamicHeight / 2 + this.maximum *  this.distance - 20 * 2);
				 //触发函数
				 this.drawLineFun(this.hightData,'#fcc370'); //高温线
				 this.drawLineFun(this.lowData,'#94ccf9'); //低温线
			},
			 drawLineFun(lineData,lineColor){
				const self = this;
				let new_high_x=[];
				let new_high_y=[];
				//循环画线和画点
				for(let i = 0; i < lineData.length; i++) {
					//画点
					const circleXCoordinate = i * self.item_width;//圆的中心的x坐标
					const circleYCoordinate = parseInt(Number(lineData[i]) * self.distance);//圆的中心的y坐标
					
					self.context.beginPath();//起始一条路径，或重置当前路径
					/*@arc() 方法创建弧/曲线（用于创建圆或部分圆）
					*提示：如需通过 arc() 来创建圆，请把起始角设置为 0，结束角设置为 2*Math.PI。
					* context.arc(
					*        圆的中心的x坐标,
					*        圆的中心的y坐标,
					*        圆的半径,
					*        起始角以弧度计;弧的圆形的三点钟位置是0度,
					*        结束角;以弧度计,
					*        可选;规定应该逆时针还是顺时针绘图;False=顺时针;true=逆时针
					* );
					* */
					 self.context.arc(circleXCoordinate, -circleYCoordinate, 3, 0, 2 * Math.PI, true);
					 self.context.strokeStyle = lineColor; //使用 strokeStyle 属性来绘制另一种颜色/渐变
					 self.context.stroke(); //stroke() 方法会实际地绘制出方法定义的路径
					 self.context.fillStyle = lineColor; //使用 fillStyle 属性来填充另一种颜色/渐变
					 self.context.fill(); //fill() 方法填充当前的图像（路径）。默认颜色是黑色
					 self.context.closePath(); //创建从当前点回到起始点的路径

					//保存线数据
					new_high_x.push(circleXCoordinate);
					new_high_y.push(-circleYCoordinate);
					//写文字
					if(lineData === self.hightData){
						self.context.beginPath();
						self.context.font = "18px 微软雅黑";
						self.context.fillStyle = "#333";
						self.context.fillText(lineData[i]+"°", circleXCoordinate - 10, -circleYCoordinate - 20, 50);//context.fillText(text,x,y,maxWidth);
						self.context.stroke();
						self.context.closePath();
					}else{
						self.context.beginPath();
						self.context.font = "18px 微软雅黑";
						self.context.fillStyle = "#333";
						self.context.fillText(lineData[i]+"°", circleXCoordinate - 10, -circleYCoordinate + 30, 50);//context.fillText(text,x,y,maxWidth);
						self.context.stroke();
						self.context.closePath();
					}
				}
				
				//画线
				for(let j = 0; j < self.numData - 1; j++){
					self.context.beginPath();
					//uniapp这里不一样2：Y轴写为负数了 -Math.abs()，demo中是正数 Math.abs()
					self.context.moveTo(Math.abs(new_high_x[j]), -Math.abs(new_high_y[j]));
					self.context.lineTo(Math.abs(new_high_x[j+1]), -Math.abs(new_high_y[j+1]));
					self.context.strokeStyle = lineColor;
					self.context.lineWidth = 3;
					self.context.stroke();
					self.context.closePath();
				}
				self.context.draw(true); //uniapp这里不一样2：参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
			 }
		 }
	};
</script>

<style>
	.canvas{
		width: 100%;
		height: 300upx;
		margin: 0;
		padding: 0;
		pointer-events: none;
	}
</style>
