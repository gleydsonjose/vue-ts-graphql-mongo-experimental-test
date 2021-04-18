import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import App from '@views/App.vue'
import routes from '@routes/mainRoutes'
import { modules } from '@store/index'
import resolvers from '@graphql/resolvers'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueApollo)

const store = new Vuex.Store({
  modules
})

const router = new VueRouter({
  routes
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000'
  }),
  cache,
  resolvers
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const app = new Vue({
  apolloProvider,
  store,
  router,
  render: h => h(App)
})

app.$mount('#root')