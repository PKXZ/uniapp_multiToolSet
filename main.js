import Vue from 'vue'
import App from './App'
import './static/css/common.css'
import './static/font/iconfont.css'
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
