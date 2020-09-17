// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import 'bootstrap'
import api from './api/index.js'
import './assets/FontSize.js'
import 'vant/lib/index.css';
import '../src/assets/style.css'
import '../src/assets/Vant.css'
// import '../src/assets/bootstrap.min.css'
// import '../src/assets/js/jquery.min.js'
// import '../src/assets/js/bootstrap.min.js'
// import "../static/script/jquery.min.js";
// import "../static/script/bootstrap.min.js";
import VueAwesomeSwiper from 'vue-awesome-swiper'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;'
Vue.prototype.$http = axios
Vue.prototype.$api = api
import wx from 'weixin-js-sdk'
Vue.prototype.$wx = wx
// import style
// If you use Swiper 6.0.0 or higher
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
Vue.config.productionTip = false
Vue.use(Vant);


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
