// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import  VueResource  from 'vue-resource';
import iView from 'iview';//引入iveiwui框架
import 'iview/dist/styles/iview.css';//引入iveiwui框架
import './assets/common.css';//引入iveiwu css
import utils from "./utils/utils.js";

Vue.config.productionTip = false;
Vue.prototype.utils =utils;
Vue.use(iView);//注册iveiwui框架
Vue.use(VueResource);//注册VueResource组件
//设置本项目的上下文
//window.getHost="http://192.168.1.217:8088/datacenter-dataview-web/";
window.getHost="http://demo.zhunedu.com/dataview/"
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
