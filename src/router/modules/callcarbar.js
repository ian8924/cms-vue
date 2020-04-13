import Layout from '@/layout'
export const callcarbarRoute = {
  path: '/callcarbar',
  component: Layout,
  meta: {
    title: '叫車吧',
    icon: 'guide',
    roles: ['EDM-編輯者', 'EDM-查看者']
  },
  children: [
    {
      path: '',
      component: () => import('@/views/projectManage/callcarbar')
    },
    {
      path: 'edm',
      component: () => import('@/views/projectManage/callcarbar'),
      name: 'EDM',
      redirect: '/callcarbar/edm/project',
      meta: {
        title: 'EDM 管理',
        icon: 'el-icon-receiving'
      },
      children: [
        {
          path: 'project',
          component: () =>
            import('@/views/projectManage/callcarbar/EDM/project'),
          name: '活動專案管理',
          meta: { title: '活動專案管理' }
        },
        {
          path: 'email',
          component: () =>
            import('@/views/projectManage/callcarbar/EDM/email'),
          name: 'EMAIL名單管理',
          meta: { title: 'EMAIL名單管理' }
        },
        {
          path: 'blacklist',
          component: () =>
            import('@/views/projectManage/callcarbar/EDM/blacklist'),
          name: '黑名單管理',
          meta: { title: '黑名單管理' }
        },
        {
          path: 'edm',
          component: () =>
            import('@/views/projectManage/callcarbar/EDM/edm'),
          name: 'EDM列表',
          meta: { title: 'EDM列表' },
          hidden: true
        }
      ]
    },
    {
      path: 'notification',
      component: () =>
        import('@/views/projectManage/callcarbar/notification'),
      name: 'notification',
      meta: {
        title: '推播管理',
        icon: 'el-icon-news'
      }
    },
    {
      path: 'SMS',
      redirect: '/callcarbar/SMS/list',
      component: () => import('@/views/projectManage/callcarbar'),
      name: '簡訊管理',
      meta: {
        title: '簡訊管理',
        icon: 'el-icon-s-promotion',
        roles: ['EDM-編輯者', 'EDM-查看者']
      },
      children: [
        {
          path: 'index',
          component: () =>
            import('@/views/projectManage/callcarbar/SMS'),
          name: '簡訊發送',
          meta: {
            title: '簡訊發送',
            roles: ['EDM-編輯者']
          }
        },
        {
          path: 'list',
          component: () =>
            import('@/views/projectManage/callcarbar/SMS/list'),
          name: '簡訊列表',
          meta: { title: '簡訊列表' }
        }
      ]
    },
    {
      path: 'statistic',
      component: () => import('@/views/projectManage/callcarbar/statistic'),
      name: 'statistic',
      meta: {
        title: '數據&資料',
        icon: 'chart'
      },
      children: [
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/projectManage/callcarbar/statistic/member'),
          meta: {
            title: '會員資料',
            roles: ['EDM-編輯者']
          }
        }
      ]
    },
    {
      path: 'app_settings',
      component: () => import ('@/views/projectManage/callcarbar/appsettings'),
      name: 'settings',
      meta: {
        title: '設定',
        icon: 'el-icon-setting',
        roles: ['EDM-編輯者']
      },
      children: [
        {
          path: '',
          component: () => import ('@/views/projectManage/callcarbar/appsettings/AppSettings.vue'),
          name: 'settings home',
          hidden: true
        },
        {
          path: 'app_version_control',
          component: () => import('@/views/projectManage/callcarbar/appsettings/AppVersionControl'),
          name: 'AppVersionControl',
          meta: {
            title: '手機版本管理'
          }
        },
        {
          path: 'reservation_status_hooks',
          component: () => import('@/views/projectManage/callcarbar/appsettings/ReservationStatusHooks'),
          name: 'ReservationStatusHooks',
          meta: {
            title: '行程狀態通知設定'
          }
        },
        {
          path: 'reservation_email_hooks',
          component: () => import('@/views/projectManage/callcarbar/appsettings/ReservationEmailHooks.vue'),
          name: 'ReservationEmailHooks',
          meta: {
            title: '服務信設定'
          }
        }
      ]
    }

  ]
}
