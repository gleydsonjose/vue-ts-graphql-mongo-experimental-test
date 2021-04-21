import Vue from 'vue'
import VueRouter from 'vue-router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import App from '@views/App.vue'
import routes from '@routes/mainRoutes'
import resolvers from '@graphql/resolvers'

Vue.use(VueRouter)
Vue.use(VueApollo)

const router = new VueRouter({
  routes
})

const cache = new InMemoryCache({
  addTypename: false
})

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.SERVER_HOST
  }),
  cache,
  resolvers
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const app = new Vue({
  apolloProvider,
  router,
  render: h => h(App)
})

app.$mount('#root')