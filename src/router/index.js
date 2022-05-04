import {
  createRouter,
  createWebHistory
} from 'vue-router'
import StepOne from '../components/StepOne/StepOne.vue'
import StepTwo from '../components/StepTwo/StepTwo.vue'
import StepThree from '../components/StepThree/StepThree.vue'
import ErrorView from '../components/ErrorView/ErrorView.vue'

const routes = [{
    path: '/',
    name: 'StepOne',
    component: StepOne,
    meta: {
      title: "Welcome to Form Wizard"
    }
  },
  {
    path: '/step-two',
    name: 'StepTwo',
    component: StepTwo,
    meta: {
      title: "Tell us about yourself"
    }
  },
  {
    path: '/step-three',
    name: 'StepThree',
    component: StepThree,
    meta: {
      title: "Confirm Details"
    }
  },
  {
    path: '/error-found',
    name: 'ErrorView',
    component: ErrorView,
    meta: {
      title: "Error Found"
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router