const PhonesList = () => import('@views/PhonesList.vue')
const RegisterPhone = () => import('@views/RegisterPhone.vue')
const EditPhone = () => import('@views/EditPhone.vue')

export default [
  {
    path: '*',
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