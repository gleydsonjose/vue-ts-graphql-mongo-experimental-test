import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@views/App.vue'
import routes from '@routes/mainRoutes'
import store from '@store/index'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#root')