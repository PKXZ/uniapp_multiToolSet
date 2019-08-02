import Vue from 'vue'
import App from './App'
import '@/static/css/common.css'
import '@/static/font/iconfont.css'
import api from '@/utils/api.js'
Vue.config.productionTip = false
Vue.prototype.api = api;
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
