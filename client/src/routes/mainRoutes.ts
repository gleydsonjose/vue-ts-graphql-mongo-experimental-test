import PhonesList from '@views/PhonesList.vue'
import RegisterPhone from '@views/RegisterPhone.vue'
import EditPhone from '@views/EditPhone.vue'

export default [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/phones-list'
  },
  {
    path: '/phones-list',
    name: 'PhonesList',
    component: PhonesList
  },
  {
    path: '/register-phone',
    name: 'RegisterPhone',
    component: RegisterPhone
  },
  {
    path: '/edit-phone/:_id',
    name: 'EditPhone',
    component: EditPhone
  },
]