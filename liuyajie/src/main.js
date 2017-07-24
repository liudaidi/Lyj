import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import reset from './css/reset.css'

import animate from './css/animate.css'

import VueRouter from 'vue-router'
import first from './first.vue'
import two from './two.vue'
import three from './three.vue'
import four from './four.vue'
import last from './last.vue'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$http = axios;

const routes=[
	{
	 	path:"/",
	 	component:first
	},
	{
	 	path:"/two",
	 	component:two
	},
	{
	 	path:"/three",
	 	component:three
	},
	{
	 	path:"/four",
	 	component:four
	},
	{
	 	path:"/last",
	 	component:last
	}
	
	
		
]



let router=new VueRouter({
				routes:routes
		})


new Vue({	
  el: '#app',
  render: h => h(App),
  router
})


