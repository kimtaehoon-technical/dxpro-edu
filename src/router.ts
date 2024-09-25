import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import CourseDetailJava from './views/CourseDetail_java.vue'
import CourseDetailC from './views/CourseDetail_c.vue'
import CourseDetailCpp from './views/CourseDetail_cpp.vue'
import CourseDetailCsharp from './views/CourseDetail_csharp.vue'
import CourseDetailJs from './views/CourseDetail_js.vue'
import CourseDetailTs from './views/CourseDetail_ts.vue'
import CourseDetailHtml from './views/CourseDetail_html.vue'
import CourseDetailCss from './views/CourseDetail_css.vue'
import CourseDetailEtc from './views/CourseDetail_etc.vue'
import CourseDetailFramework from './views/CourseDetail_framework.vue'
import CourseDetailServer from './views/CourseDetail_server.vue'
import CourseDetailAndroid from './views/CourseDetail_android.vue'
import CourseDetailIos from './views/CourseDetail_ios.vue'
import CourseDetailTest from './views/CourseDetail_test.vue'
import Login from './components/Login.vue'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/course/1', component: CourseDetailJava },
  { path: '/course/2', component: CourseDetailJs },
  { path: '/course/3', component: CourseDetailTs },
  { path: '/course/4', component: CourseDetailCsharp },
  { path: '/course/5', component: CourseDetailCpp },
  { path: '/course/6', component: CourseDetailC },
  { path: '/course/7', component: CourseDetailHtml },
  { path: '/course/8', component: CourseDetailCss },
  { path: '/course/9', component: CourseDetailEtc },
  { path: '/course/10', component: CourseDetailFramework },
  { path: '/course/11', component: CourseDetailServer },
  { path: '/course/12', component: CourseDetailAndroid },
  { path: '/course/13', component: CourseDetailIos },
  { path: '/course/14', component: CourseDetailTest },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
