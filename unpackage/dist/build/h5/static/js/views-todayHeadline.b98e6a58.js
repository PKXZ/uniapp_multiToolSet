(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-todayHeadline"],{"227e":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("cfdf");var n=o(e("8310"));function o(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{hours:(new Date).getHours()<10?"0"+(new Date).getHours():(new Date).getHours(),minutes:(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),weekList:["日","一","二","三","四","五","六"],ulList:[],opt:[{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}]}},onLoad:function(t){t.label&&uni.setNavigationBarTitle({title:t.label}),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#208ffa",animation:{duration:400,timingFunc:"easeIn"}})},mounted:function(){var t=this;uni.getStorage({key:"selAlarm",success:function(i){var e=i.data;e&&(t.ulList=JSON.parse(e))}})},watch:{ulList:function(t,i){uni.setStorage({key:"selAlarm",data:JSON.stringify(t)})}},methods:{addAlarm:function(){uni.navigateTo({url:"/views/pages/setAlarm"})},removeClick:function(t){this.ulList.splice(t.index,1)},alarmSwitch:function(t,i){var e=this.ulList[i];e["enable"]=t.target.value,this.$set(this.ulList,i,e)},goEcho:function(t,i){uni.navigateTo({url:"/views/pages/setAlarm?echo=true"});var e=i;e["echoIndex"]=t,uni.setStorage({key:"echoSelAlarm",data:JSON.stringify(e)})}},components:{uniSwipeAction:n.default}};i.default=a},"31cf":function(t,i,e){var n=e("df12");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("be12f42c",n,!0,{sourceMap:!1,shadowMode:!1})},"4e51":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-swipe-action"},[e("v-uni-view",{staticClass:"uni-swipe-action__container",class:{"uni-swipe-action--show":t.isShowBtn},style:{transform:t.transformX,"-webkit-transform":t.transformX},on:{touchstart:function(i){i=t.$handleEvent(i),t.touchStart(i)},touchmove:function(i){i=t.$handleEvent(i),t.touchMove(i)},touchend:function(i){i=t.$handleEvent(i),t.touchEnd(i)},touchcancel:function(i){i=t.$handleEvent(i),t.touchEnd(i)},click:function(i){i=t.$handleEvent(i),t.bindClickCont(i)}}},[e("v-uni-view",{staticClass:"uni-swipe-action__content"},[t._t("default")],2),e("v-uni-view",{staticClass:"uni-swipe-action__btn-group",attrs:{id:t.elId}},t._l(t.options,function(i,n){return e("div",{key:n,staticClass:"uni-swipe-action--btn",style:{backgroundColor:i.style&&i.style.backgroundColor?i.style.backgroundColor:"#C7C6CD",color:i.style&&i.style.color?i.style.color:"#FFFFFF",fontSize:i.style&&i.style.fontSize?i.style.fontSize:"28upx"},on:{click:function(e){e=t.$handleEvent(e),t.bindClickBtn(i,n)}}},[t._v(t._s(i.text))])}),0)],1),t.isShowBtn?e("v-uni-view",{staticClass:"uni-swipe-action__mask",on:{click:function(i){i=t.$handleEvent(i),t.close(i)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),i=t.$handleEvent(i),t.close(i)}}}):t._e()],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"630b":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"todayHeadlineContent"},[e("v-uni-view",{staticClass:"todayHeadlineTop"},[e("v-uni-view",{staticClass:"todayDiv"},[e("v-uni-view",{staticClass:"waves"},[e("span",{staticClass:"hours"},[t._v(t._s(t.hours))]),e("span",{staticClass:"mh"},[t._v(":")]),e("span",[t._v(t._s(t.minutes))])])],1),e("v-uni-view",{staticClass:"ellipseDiv"},[e("v-uni-view",{staticClass:"ellipse ellipseOne"}),e("v-uni-view",{staticClass:"ellipse ellipseTwo"}),e("v-uni-view",{staticClass:"ellipse ellipseThree"}),e("v-uni-view",{staticClass:"ellipse ellipseFour"}),e("v-uni-view",{staticClass:"ellipse ellipseFive"})],1)],1),e("v-uni-view",{staticClass:"todayHeadlineBottom"},[e("v-uni-scroll-view",{class:t.ulList.length>0?"todayScroll":"",attrs:{"scroll-y":"true"}},[e("ul",{staticClass:"todayListUl"},t._l(t.ulList,function(i,n){return e("li",{key:n},[e("uniSwipeAction",{attrs:{options:t.opt},on:{click:function(i){i=t.$handleEvent(i),t.removeClick(i)}}},[e("div",{staticClass:"clockDiv"},[e("div",{on:{click:function(e){e=t.$handleEvent(e),t.goEcho(n,i)}}},[e("span",[t._v(t._s(i.time))]),e("p",[t._v(t._s(i.pointTime))])]),e("v-uni-switch",{attrs:{color:"#20e6b8",checked:i.enable},on:{change:function(i){i=t.$handleEvent(i),t.alarmSwitch(i,n)}}})],1),e("div",{staticClass:"periodDiv",on:{click:function(e){e=t.$handleEvent(e),t.goEcho(n,i)}}},[e("ul",t._l(t.weekList,function(n,o){return e("li",{key:o,class:-1!=i.interval.indexOf(n)?"usedLi":""},[t._v(t._s(n))])}),0)])])],1)}),0)]),e("v-uni-view",{staticClass:"iconBottom",class:t.ulList.length>0?"fixedIcon":"iconBottomF"},[e("i",{staticClass:"iconfont icon-jia",on:{click:function(i){i=t.$handleEvent(i),t.addAlarm(i)}}})])],1)],1)},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},"69e8":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"UniSwipeAction",props:{isDrag:{type:Boolean,default:!1},isOpened:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},options:{type:Array,default:function(){return[]}}},data:function(){var t=this.__call_hook?"uni_swipe_action":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,isShowBtn:!1,transformX:"translateX(0px)",slipRightLoaded:!1}},watch:{isOpened:function(t,i){this.isShowBtn=!!t,this.endMove()}},created:function(){this.direction="",this.startX=0,this.startY=0,this.btnGroupWidth=0,this.isMoving=!1,this.startTime=0},mounted:function(){this.getSize()},methods:{getSize:function(){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(i){t.btnGroupWidth=i[0].width}),this.isOpened&&(this.isShowBtn=!0,this.endMove())},bindClickBtn:function(t,i){this.$emit("click",{text:t.text,style:t.style,index:i})},bindClickCont:function(t){this.isShowBtn&&this.autoClose&&(this.isShowBtn=!1,this.endMove())},touchStart:function(t){this.startTime=t.timeStamp,this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY},touchMove:function(t){if("Y"!==this.direction&&!this.disabled){var i=t.touches[0].pageY-this.startY,e=t.touches[0].pageX-this.startX;if(!this.isMoving&&Math.abs(i)>Math.abs(e))this.direction="Y";else if(this.direction=e>0?"right":"left",this.isMoving=!0,this.isDrag){var n=this.isShowBtn?-this.btnGroupWidth:0;if(n+e>=0)return void(this.transformX="translateX(0px)");if(-n-e>=this.btnGroupWidth)return void(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"));n-e>0?this.transformX="translateX(".concat(e,"px)"):e>=-this.btnGroupWidth&&(this.transformX="translateX(".concat(e-this.btnGroupWidth,"px)"))}}},touchEnd:function(t){if(this.isMoving=!1,"right"===this.direction||"left"===this.direction){if(this.isDrag){var i=Math.abs(Number(this.transformX.slice(11,-3))),e=t.timeStamp-this.startTime;this.isShowBtn=i>=this.btnGroupWidth/2,e>50&&e<300&&i>20&&("right"===this.direction?this.isShowBtn=!1:this.isShowBtn=!0)}else"right"===this.direction?this.isShowBtn=!1:this.isShowBtn=!0;this.endMove()}else this.direction=""},endMove:function(){"Y"===this.direction||this.disabled?this.direction="":(this.isShowBtn?(this.transformX="translateX(".concat(-this.btnGroupWidth,"px)"),this.$emit("opened")):(this.transformX="translateX(0px)",this.$emit("closed")),this.direction="")},close:function(){this.isShowBtn=!1,this.endMove()}}};i.default=n},8310:function(t,i,e){"use strict";e.r(i);var n=e("4e51"),o=e("83cf");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("b7c2");var s=e("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"3b984efc",null);i["default"]=r.exports},"83cf":function(t,i,e){"use strict";e.r(i);var n=e("69e8"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},"986c":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'.todayHeadlineContent{width:100%;height:100%;margin-top:%?70?%}.todayHeadlineTop{width:100%;height:%?500?%;background:-webkit-gradient(linear,left top,left bottom,from(#208ffa),to(rgba(40,157,224,.8)));background:-webkit-linear-gradient(top,#208ffa,rgba(40,157,224,.8));background:-o-linear-gradient(top,#208ffa,rgba(40,157,224,.8));background:linear-gradient(180deg,#208ffa,rgba(40,157,224,.8))}.todayDiv{width:100%;height:-webkit-calc(100% - %?90?%);height:calc(100% - %?90?%)}\r\n/*波浪*/.waves{position:relative;top:40%;left:50%;margin-left:%?-60?%;margin-top:%?-70?%;-webkit-border-radius:50%;border-radius:50%;-webkit-backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.waves:after,.waves:before{position:absolute;background:#fff;width:%?120?%;height:%?120?%;content:"";display:block;-webkit-border-radius:50%;border-radius:50%;-webkit-backface-visibility:hidden;border:none}.waves .hours{margin-left:%?-45?%}.waves .mh{margin:0 %?10?%;-webkit-animation:mhmove 1s ease infinite;animation:mhmove 1s ease infinite;font:700 %?80?% Arial,Helvetica,sans-serif}.waves span{font-size:%?80?%;color:#fff}.waves:before{-webkit-animation:wave-animate 14s infinite ease-out;animation:wave-animate 14s infinite ease-out}.waves:after{opacity:0;-webkit-animation:wave-animate 14s 8s infinite ease-out;animation:wave-animate 14s 8s infinite ease-out}@-webkit-keyframes mhmove{0%{opacity:1;text-shadow:0 0 %?40?% #00c6ff}50%{opacity:0;text-shadow:none}to{opacity:1;text-shadow:0 0 %?40?% #00c6ff}}@keyframes mhmove{0%{opacity:1;text-shadow:0 0 %?40?% #00c6ff}50%{opacity:0;text-shadow:none}to{opacity:1;text-shadow:0 0 %?40?% #00c6ff}}@-webkit-keyframes wave-animate{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}to{-webkit-transform:scale(3);transform:scale(3);opacity:0;-webkit-transform-origin:center;transform-origin:center}}@keyframes wave-animate{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}to{-webkit-transform:scale(3);transform:scale(3);opacity:0;-webkit-transform-origin:center;transform-origin:center}}\r\n/*水波纹*/.ellipseDiv{width:100%;height:%?90?%;position:relative;overflow:hidden}.ellipse{width:60%;height:250%;background:hsla(0,0%,100%,.8);-webkit-border-radius:55%;border-radius:55%}.ellipseOne{position:absolute;left:-40%;margin-top:%?30?%}.ellipseTwo{position:absolute;left:0}.ellipseThree{position:absolute;left:10%;margin-top:%?30?%}.ellipseFour{position:absolute;left:55%;margin-top:%?30?%}.ellipseFive{position:absolute;left:40%}\r\n/*下半部*/.todayHeadlineBottom{width:100%;height:-webkit-calc(100% - %?500?%);height:calc(100% - %?500?%)}.todayHeadlineBottom .iconBottom{text-align:center}.todayScroll{width:100%;height:-webkit-calc(100% - %?200?%);height:calc(100% - %?200?%);margin:%?20?% auto auto auto}.todayListUl{width:90%;height:100%;margin:0 auto}.todayListUl>li{padding:%?26?% %?26?%;border-bottom:%?1?% solid #eee}.fixedIcon{position:absolute;bottom:%?60?%;width:100%}.iconBottomF{margin-top:%?200?%}.iconBottom i{font-size:%?90?%;width:%?100?%;height:%?100?%;color:#fff;-webkit-border-radius:50%;border-radius:50%;background:#279ce2;margin:0 auto;text-align:center;-webkit-box-shadow:%?12?% %?12?% %?10?% #888;box-shadow:%?12?% %?12?% %?10?% #888}.clockDiv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.clockDiv div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.clockDiv div span{font-size:%?60?%;font-weight:700}.clockDiv div p{color:#999;font-size:%?34?%;margin-left:%?20?%;margin-top:%?20?%}.clockDiv uni-switch{float:right;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.periodDiv{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.periodDiv ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.periodDiv ul li{width:%?65?%;height:%?65?%;line-height:%?65?%;-webkit-border-radius:50%;border-radius:50%;background:#dedede;color:#fff;text-align:center;float:left;margin-right:%?20?%;margin-top:%?5?%;font-size:%?34?%}.usedLi{background:#31a2e0!important}',""])},a352:function(t,i,e){"use strict";e.r(i);var n=e("227e"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},b7c2:function(t,i,e){"use strict";var n=e("31cf"),o=e.n(n);o.a},cfdf:function(t,i,e){var n=e("986c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("0bddd7de",n,!0,{sourceMap:!1,shadowMode:!1})},df12:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".uni-swipe-action[data-v-3b984efc]{width:100%;overflow:hidden}.uni-swipe-action__container[data-v-3b984efc]{position:relative;background-color:#fff;width:200%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1);transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1);-o-transition:transform .35s cubic-bezier(.165,.84,.44,1);transition:transform .35s cubic-bezier(.165,.84,.44,1);transition:transform .35s cubic-bezier(.165,.84,.44,1),-webkit-transform .35s cubic-bezier(.165,.84,.44,1)}.uni-swipe-action__content[data-v-3b984efc]{width:50%}.uni-swipe-action__btn-group[data-v-3b984efc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-swipe-action--show[data-v-3b984efc]{position:relative;z-index:1000}.uni-swipe-action--btn[data-v-3b984efc]{padding:0 %?32?%;color:#fff;background-color:#c7c6cd;font-size:%?28?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;text-align:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-swipe-action__mask[data-v-3b984efc]{display:block;opacity:0;position:fixed;z-index:999;top:0;left:0;width:100%;height:100%}",""])},f215:function(t,i,e){"use strict";e.r(i);var n=e("630b"),o=e("a352");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);var s=e("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"31569308",null);i["default"]=r.exports}}]);