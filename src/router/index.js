import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpPage from "../views/SignUpPage.vue"
import LogInPage from "../views/LogInPage.vue"
import CreatePollPage from "../views/CreatePollPage.vue"
import EditPollPage from "../views/EditPollPage.vue"
import ViewPollPage from "../views/ViewPollPage.vue"
import TakePollPage from "../views/TakePollPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
  {
    path: '/login',
    name: 'login',
    component: LogInPage
  },
  {
    path: '/createPoll',
    name: 'createPoll',
    // component: () => import("../views/CreatePollPage.vue")
    component: CreatePollPage
  },
  {
    path: '/editPoll',
    name: 'editPoll',
    component: EditPollPage
  },
  {
    path: '/viewPoll',
    name: 'viewPoll',
    component: ViewPollPage
  },
  {
    path: '/takePoll',
    name: 'takePoll',
    component: TakePollPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
