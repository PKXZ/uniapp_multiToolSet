(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-qrCode"],{"0999":function(t,e,n){"use strict";n.r(e);var o=n("9303"),i=n("3822");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("afb8");var s=n("2877"),a=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"2bf10088",null);e["default"]=a.exports},"1a24":function(t,e,n){"use strict";n.r(e);var o=n("e465"),i=n("6506");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("a88d");var s=n("2877"),a=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"63f5d5dc",null);e["default"]=a.exports},"1cf7":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".container[data-v-2bf10088]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}.qrimg[data-v-2bf10088]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.qrimg-i[data-v-2bf10088]{margin-right:10px}uni-slider[data-v-2bf10088]{width:100%}uni-input[data-v-2bf10088]{width:100%;margin-bottom:%?20?%}.btns[data-v-2bf10088]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%}uni-button[data-v-2bf10088]{width:100%;margin-top:%?10?%}",""])},"1d3d":function(t,e,n){var o=n("7952");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("669e09c8",o,!0,{sourceMap:!1,shadowMode:!1})},3822:function(t,e,n){"use strict";n.r(e);var o=n("f7cd"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"47c4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".tki-qrcode[data-v-63f5d5dc]{position:relative}.tki-qrcode-canvas[data-v-63f5d5dc]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""])},"4ecb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("66d7"));function i(t){return t&&t.__esModule?t:{default:t}}var r={name:"meQrcode",props:{cid:{type:String,default:"tki-qrcode-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{qrcode:{},result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):t.qrcode=new o.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),this.qrcode.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)?n=!0:"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout(function(){n._makeCode()},100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout(function(){n._makeCode()},0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout(function(){t._makeCode()},0))}};e.default=r},6506:function(t,e,n){"use strict";n.r(e);var o=n("4ecb"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},"66d7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={};(function(){function t(t){var e,n,o;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),o=128+(63&t),[e,n,o])}function e(e){for(var n=[],o=0;o<e.length;o++)for(var i=e.charCodeAt(o),r=t(i),s=0;s<r.length;s++)n.push(r[s]);return n}function n(t,n){this.typeNumber=-1,this.errorCorrectLevel=n,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}n.prototype={constructor:n,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+n][e+o]=0<=n&&n<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=o&&o<=4)},createQrcode:function(){for(var t=0,e=0,n=null,o=0;o<8;o++){this.makeImpl(o);var i=s.getLostPoint(this);(0==o||t>i)&&(t=i,e=o,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var o=t[e],i=t[n];if(null==this.modules[o][i])for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)this.modules[o+r][i+a]=-2==r||2==r||-2==a||2==a||0==r&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var o=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=o,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=o}},setupTypeInfo:function(t,e){for(var n=i[this.errorCorrectLevel]<<3|e,o=s.getBCHTypeInfo(n),r=0;r<15;r++){var a=!t&&1==(o>>r&1);r<6?this.modules[r][8]=a:r<8?this.modules[r+1][8]=a:this.modules[this.moduleCount-15+r][8]=a;a=!t&&1==(o>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=a:r<9?this.modules[8][15-r-1+1]=a:this.modules[8][15-r-1]=a}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new d,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var o=0,i=this.utf8bytes.length;o<i;o++)t.put(this.utf8bytes[o],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(n.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(n.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,o=0,i=this.rsBlock.length/3,r=new Array,a=0;a<i;a++)for(var u=this.rsBlock[3*a+0],c=this.rsBlock[3*a+1],d=this.rsBlock[3*a+2],f=0;f<u;f++)r.push([d,c]);for(var h=new Array(r.length),v=new Array(r.length),g=0;g<r.length;g++){var m=r[g][0],p=r[g][1]-m;n=Math.max(n,m),o=Math.max(o,p),h[g]=new Array(m);for(a=0;a<h[g].length;a++)h[g][a]=255&t.buffer[a+e];e+=m;var b=s.getErrorCorrectPolynomial(p),w=new l(h[g],b.getLength()-1),y=w.mod(b);v[g]=new Array(b.getLength()-1);for(a=0;a<v[g].length;a++){var C=a+y.getLength()-v[g].length;v[g][a]=C>=0?y.get(C):0}}var T=new Array(this.totalDataCount),x=0;for(a=0;a<n;a++)for(g=0;g<r.length;g++)a<h[g].length&&(T[x++]=h[g][a]);for(a=0;a<o;a++)for(g=0;g<r.length;g++)a<v[g].length&&(T[x++]=v[g][a]);return T},mapData:function(t,e){for(var n=-1,o=this.moduleCount-1,i=7,r=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[o][a-u]){var l=!1;r<t.length&&(l=1==(t[r]>>>i&1));var c=s.getMask(e,o,a-u);c&&(l=!l),this.modules[o][a-u]=l,i--,-1==i&&(r++,i=7)}if(o+=n,o<0||this.moduleCount<=o){o-=n,n=-n;break}}}}},n.PAD0=236,n.PAD1=17;for(var i=[1,0,3,2],r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case r.PATTERN000:return(e+n)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return n%3==0;case r.PATTERN011:return(e+n)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.PATTERN101:return e*n%2+e*n%3==0;case r.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new l([1],0),n=0;n<t;n++)e=e.multiply(new l([1,a.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,o=0,i=0;i<e;i++)for(var r=0,s=t.modules[i][0],a=0;a<e;a++){var u=t.modules[i][a];if(a<e-6&&u&&!t.modules[i][a+1]&&t.modules[i][a+2]&&t.modules[i][a+3]&&t.modules[i][a+4]&&!t.modules[i][a+5]&&t.modules[i][a+6]&&(a<e-10?t.modules[i][a+7]&&t.modules[i][a+8]&&t.modules[i][a+9]&&t.modules[i][a+10]&&(n+=40):a>3&&t.modules[i][a-1]&&t.modules[i][a-2]&&t.modules[i][a-3]&&t.modules[i][a-4]&&(n+=40)),i<e-1&&a<e-1){var l=0;u&&l++,t.modules[i+1][a]&&l++,t.modules[i][a+1]&&l++,t.modules[i+1][a+1]&&l++,0!=l&&4!=l||(n+=3)}s^u?r++:(s=u,r>=5&&(n+=3+r-5),r=1),u&&o++}for(a=0;a<e;a++)for(r=0,s=t.modules[0][a],i=0;i<e;i++){u=t.modules[i][a];i<e-6&&u&&!t.modules[i+1][a]&&t.modules[i+2][a]&&t.modules[i+3][a]&&t.modules[i+4][a]&&!t.modules[i+5][a]&&t.modules[i+6][a]&&(i<e-10?t.modules[i+7][a]&&t.modules[i+8][a]&&t.modules[i+9][a]&&t.modules[i+10][a]&&(n+=40):i>3&&t.modules[i-1][a]&&t.modules[i-2][a]&&t.modules[i-3][a]&&t.modules[i-4][a]&&(n+=40)),s^u?r++:(s=u,r>=5&&(n+=3+r-5),r=1)}var c=Math.abs(100*o/e/e-50)/5;return n+=10*c,n}},a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return a.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return a.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)a.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)a.EXP_TABLE[u]=a.EXP_TABLE[u-4]^a.EXP_TABLE[u-5]^a.EXP_TABLE[u-6]^a.EXP_TABLE[u-8];for(u=0;u<255;u++)a.LOG_TABLE[a.EXP_TABLE[u]]=u;function l(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var o=0;o<t.length-n;o++)this.num[o]=t[o+n]}l.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var o=0;o<t.getLength();o++)e[n+o]^=a.gexp(a.glog(this.get(n))+a.glog(t.get(o)));return new l(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var o=new Array(e),i=0;i<e;i++)o[i]=this.get(i);while(o.length>=n){var r=a.glog(o[0])-a.glog(t.get(0));for(i=0;i<t.getLength();i++)o[i]^=a.gexp(a.glog(t.get(i))+r);while(0==o[0])o.shift()}return new l(o,0)}};var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function d(){this.buffer=new Array,this.length=0}n.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=c[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,o=0,i=0;i<n;i++){var r=e[3*i+0],s=e[3*i+2];o+=s*r}var a=t>9?2:1;if(this.utf8bytes.length+a<o||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=o;break}}},d.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[];o=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var o=null,i=(e=0,f.length);e<i;e++)if(f[e].text==this.options.text&&f[e].text.correctLevel==this.options.correctLevel){o=f[e].obj;break}e==i&&(o=new n(this.options.text,this.options.correctLevel),f.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:o}));var r=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},s=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),n=o.getModuleCount(),i=t.size,s=t.imageSize,u=(i/n).toPrecision(4),l=(i/n).toPrecision(4),c=0;c<n;c++)for(var d=0;d<n;d++){var f=Math.ceil((d+1)*u)-Math.floor(d*u),h=Math.ceil((c+1)*u)-Math.floor(c*u),v=r({row:c,col:d,count:n,options:t});e.setFillStyle(o.modules[c][d]?v:t.background),e.fillRect(Math.round(d*u),Math.round(c*l),f,h)}if(t.image){var g=function(e,n,o,i,r,s,a,u,l){e.setLineWidth(a),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(n+s,o),e.arcTo(n+i,o,n+i,o+s,s),e.arcTo(n+i,o+r,n+i-s,o+r,s),e.arcTo(n,o+r,n,o+r-s,s),e.arcTo(n,o,n+s,o,s),e.closePath(),u&&e.fill(),l&&e.stroke()},m=Number(((i-s)/2).toFixed(2)),p=Number(((i-s)/2).toFixed(2));g(e,m,p,s,s,2,6,!0,!0),e.drawImage(t.image,m,p,s,s)}setTimeout(function(){e.draw(!0,function(){setTimeout(function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&(a(e.tempFilePath)?a(e.apFilePath)?t.cbResult(e.tempFilePath):t.cbResult(e.apFilePath):t.cbResult(e.tempFilePath))},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){uni.hideLoading()}},t.context)},t.text.length+100)})},t.usingComponents?0:150)};s(this.options);var a=function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)?n=!0:"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},o.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,function(){t&&t()})}})();var i=o;e.default=i},7952:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"",""])},9303:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"qrimg"},[n("v-uni-view",{staticClass:"qrimg-i"},[t.ifShow?n("meQrcode",{ref:"qrcode",attrs:{cid:"qrcode1",val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,lv:t.lv,onval:t.onval,loadMake:t.loadMake,usingComponents:!0},on:{result:function(e){e=t.$handleEvent(e),t.qrR(e)}}}):t._e()],1),n("v-uni-view",{staticClass:"qrimg-i"},[t.ifShow?n("meQrcode",{ref:"qrcode2",attrs:{cid:"qrcode2",val:"第二个二维码",size:t.size,onval:t.onval,loadMake:t.loadMake,usingComponents:!0},on:{result:function(e){e=t.$handleEvent(e),t.qrR(e)}}}):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title"},[t._v("请输入要生成的二维码内容")])],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入要生成的二维码内容"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[t._v("设置二维码大小")])],1),n("v-uni-view",{staticClass:"body-view"},[n("v-uni-slider",{attrs:{value:t.size,min:"50",max:"500","show-value":""},on:{change:function(e){e=t.$handleEvent(e),t.sliderchange(e)}}})],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"btns"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.selectIcon(e)}}},[t._v("选择二维码图标")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.creatQrcode(e)}}},[t._v("生成二维码")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.saveQrcode(e)}}},[t._v("保存到图库")]),n("v-uni-button",{attrs:{type:"warn"},on:{click:function(e){e=t.$handleEvent(e),t.clearQrcode(e)}}},[t._v("清除二维码")]),n("v-uni-button",{attrs:{type:"warn"},on:{click:function(e){e=t.$handleEvent(e),t.ifQrcode(e)}}},[t._v("显示隐藏二维码")])],1)],1)],1)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},a88d:function(t,e,n){"use strict";var o=n("d177"),i=n.n(o);i.a},afb8:function(t,e,n){"use strict";var o=n("d03c"),i=n.n(o);i.a},d03c:function(t,e,n){var o=n("1cf7");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("7a8936de",o,!0,{sourceMap:!1,shadowMode:!1})},d177:function(t,e,n){var o=n("47c4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("3d5a832a",o,!0,{sourceMap:!1,shadowMode:!1})},e465:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tki-qrcode"},[n("v-uni-canvas",{staticClass:"tki-qrcode-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},f7cd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("1d3d");var o=i(n("1a24"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{ifShow:!0,val:"二维码",size:200,unit:"upx",background:"#b4e9e2",foreground:"#309286",pdground:"#32dbc6",icon:"",iconsize:40,lv:3,onval:!1,loadMake:!0,src:""}},onLoad:function(t){t.label&&uni.setNavigationBarTitle({title:t.label}),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#208ffa",animation:{duration:400,timingFunc:"easeIn"}})},mounted:function(){},methods:{sliderchange:function(t){this.size=t.detail.value},creatQrcode:function(){this.$refs.qrcode._makeCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},qrR:function(t){this.src=t},clearQrcode:function(){this.$refs.qrcode._clearCode(),this.val=""},ifQrcode:function(){this.ifShow=!this.ifShow},selectIcon:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.icon=e.tempFilePaths[0],setTimeout(function(){t.creatQrcode()},100)}})}},components:{meQrcode:o.default}};e.default=r}}]);