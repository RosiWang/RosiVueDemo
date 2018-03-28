// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './startApp'
import routerComp from './router'

//关闭了生产模式即部署到服务器后给出的提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#index',
	router: routerComp,
	template: '<App/>',
	components: { App }
})