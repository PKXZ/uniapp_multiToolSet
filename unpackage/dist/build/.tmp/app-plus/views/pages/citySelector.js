(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["views/pages/citySelector"],{1361:function(t,e,n){"use strict";n.r(e);var i=n("b5d4"),c=n("f625");for(var o in c)"default"!==o&&function(t){n.d(e,t,function(){return c[t]})}(o);n("5540");var a=n("2877"),u=Object(a["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},5540:function(t,e,n){"use strict";var i=n("6f7d"),c=n.n(i);c.a},"6f7d":function(t,e,n){},a5cb:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n("01fc"));function c(t){return t&&t.__esModule?t:{default:t}}var o=function(){return n.e("components/common/uni-indexed-list").then(n.bind(null,"4c37"))},a={data:function(){return{list:i.default.list,currentCitys:""}},mounted:function(){var e=this;t.showLoading({title:"加载中"}),e.loadInfo(),e.$nextTick(function(){e.$refs.citySearch&&e.$refs.dwCity&&e.$refs.citySearch.$el.clientHeight&&e.$refs.dwCity.$el.clientHeight&&(e.otherHeight=e.$refs.citySearch.$el.clientHeight+e.$refs.dwCity.$el.clientHeight)})},methods:{bindClick:function(e){t.navigateTo({url:"/views/wetherForecast?label=天气预报&cityName="+e.item.name})},loadInfo:function(){var e=this;t.getLocation({type:"wgs84",success:function(t){var n=t.longitude,i=t.latitude;e.loadCity(i,n)},fail:function(n){t.showToast({title:"定位失败，默认查询成都"}),e.currentCitys="成都",e.loadCity(30.64242,104.04311)}})},loadCity:function(e,i){var c=this,o=n("0547"),a={latitude:"",longitude:"",key:"c0e9d71cc639c613da5e2c5804b99a9d"},u=new o.AMapWX({key:a.key});u.getRegeo({success:function(e){c.currentCitys=e[0].regeocodeData.addressComponent.city,t.hideLoading()},fail:function(e){console.log(e," at views\\pages\\citySelector.vue:88"),t.hideLoading()}})},searchFun:function(){t.showLoading({title:"暂未做"})}},components:{uniIndexedList:o}};e.default=a}).call(this,n("6e42")["default"])},b5d4:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},f625:function(t,e,n){"use strict";n.r(e);var i=n("a5cb"),c=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=c.a}},[["01a0","common/runtime","common/vendor"]]]);