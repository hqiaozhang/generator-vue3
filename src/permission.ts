import { RouteLocationNormalized } from 'vue-router'
import router from './router'
const whiteList : Array<string> = []
// import { useStore } from './store'
import { useStore } from './store'
router.beforeEach(async(to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  const store = useStore() 
  const token = store.state.user.token
  console.log('token', token)
  if (token) {
    if (to.path === '/login') {
      // 已经登录调整的首页
      next({ path: '/' }) 
    }else {
      next()
    } 
  } else { 
    if (whiteList.indexOf(to.path) !== -1) {
      next() 
    } else {
      // 未登录
      next(`/login?redirect=${to.path}`)
    }
  }
})