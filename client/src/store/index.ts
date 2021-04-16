import { createStore, createLogger } from 'vuex'
import registerPage from '@store/modules/registerPage'
import phonesPage from '@store/modules/phonesPage'

const modules: any = {
  registerPage,
  phonesPage
}

export default createStore({
  modules,
  plugins: [createLogger()]
})