import { createStore, createLogger } from 'vuex'
import registerPage from '@store/modules/registerPage'

const modules = {
  registerPage
}

export default createStore({
  modules,
  plugins: [createLogger()]
})