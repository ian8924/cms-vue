import Layout from '@/layout'
import Account from '@/views/projectManage/permission/account'
import Role from '@/views/projectManage/permission/role'

export const permissionRoute = {
  path: '/permission',
  component: Layout,
  meta: {
    title: '權限管理',
    icon: 'lock',
    roles: [
      '角色編輯-編輯者',
      '角色編輯-查看者',
      '用戶編輯-編輯者',
      '用戶編輯-查看者'
    ]
  },
  children: [
    {
      path: '',
      component: () => import('@/views/projectManage/permission')
    },
    {
      path: 'account',
      component: Account,
      name: '用戶帳號管理',
      meta: {
        title: '用戶帳號管理',
        roles: ['用戶編輯-編輯者', '用戶編輯-查看者']
      }
    },
    {
      path: 'role',
      component: Role,
      name: '角色權限管理',
      meta: {
        title: '角色權限管理',
        roles: ['角色編輯-編輯者', '角色編輯-查看者']
      }
    }
  ]
}
