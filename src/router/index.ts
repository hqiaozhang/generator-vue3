/*
* @Author: xiexiaoying
* @Date: 2021-12-16 09:12
* @Email: 634021337@qq.com
* @Description:
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2022-07-19 16:42:26
*/
 
// RouteRecordRaw 基础路由里面增加开发者自定义属性 router.ts的RouteRecordRaw类型校验
import { createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"; 
// 登录
const Login = () => import('@/views/login/index.vue')
// 首页
const Home = () => import('@/views/home/index.vue')
 
const routes: Array<RouteRecordRaw> = [
 
  {
    path:`/login`, // 登录
    name: '登录',
    component: Login,
  },
  {
    path:`/index`,  
    name: '首页',
    component: Home,  
  },  
]
  

const router = createRouter({
  history: createWebHashHistory('generator-vue3'), 
  routes
})

export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
 
