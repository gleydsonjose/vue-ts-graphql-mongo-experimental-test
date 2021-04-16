import { createStore, createLogger } from 'vuex'
import registerPhone from '@store/modules/registerPhone'
import editPhone from '@store/modules/editPhone'
import phonesList from '@store/modules/phonesList'

const modules: any = {
  registerPhone,
  editPhone,
  phonesList
}

export default createStore({
  modules,
  plugins: [createLogger()]
})