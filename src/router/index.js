import Vue from 'vue'
import Router from 'vue-router'
import { callcarbarRoute } from './modules/callcarbar'
import { permissionRoute } from './modules/permission'
import { ticketRoute } from './modules/ticket'
Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '管理後台', icon: 'dashboard' }
      }
    ]
  }
]

// 動態路由設定
// role:["admin"] 放可查看之權限
// children 放子路由

// {
//     path: '/ufirst',
//     component: Layout,
//     meta: { title: '新機接', icon: 'guide', role: ['admin'] },
//     children: [
//       {
//         path: 'index',
//         name: 'Ufirst',
//         component: () => import('@/views/ufirst/index'),
//         meta: { title: '新機接表單', icon: 'star' }
//       },
//     ]
//   }
export const asyncRoutes = [
  permissionRoute,
  callcarbarRoute,
  ticketRoute,
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
