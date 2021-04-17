import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from '@views/App.vue'
import routes from '@routes/mainRoutes'
import { modules } from '@store/index'

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  modules
})

const router = new VueRouter({
  routes
})

const app = new Vue({
  store,
  router,
  render: h => h(App)
})

// app.use(store)
app.$mount('#root')