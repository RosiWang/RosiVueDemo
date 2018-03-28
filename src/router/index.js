import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import temp from '@/components/showone'
import temp_cont from '@/components/showtwo'
import temp_error from '@/components/error'

//安装插件
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
	routes:[
		{
			path:"/item/:list/:listNum",
			component:temp,
			children:[
				{
					path:"con",
					component:temp_cont
				}
			]
		},
		{
			path:"/item/error",
			component:temp_error
		}
	]
})
