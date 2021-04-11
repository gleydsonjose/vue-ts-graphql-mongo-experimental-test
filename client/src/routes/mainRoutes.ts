import PhonesPage from '@views/PhonesPage.vue'
import RegisterPage from '@views/RegisterPage.vue'

export default [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/phones'
  },
  {
    path: '/phones',
    name: 'PhonesPage',
    component: PhonesPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  }
]