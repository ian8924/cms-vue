import Layout from '@/layout'
export const ticketRoute = {
  path: '/ticket',
  component: Layout,
  meta: {
    title: '肯驛隨行券',
    icon: 'ticket',
    roles: ['票卡管理-編輯者', '票卡管理-查看者']
  },
  children: [
    {
      path: '',
      component: () => import('@/views/projectManage/ticket')
    },
    {
      path: 'dataList',
      component: () => import('@/views/projectManage/ticket/dataList'),
      name: 'dataList',
      meta: {
        title: '隨行券資料',
        icon: 'el-icon-receiving'
      },
      children: [
        {
          path: 'allTickets',
          name: '發行票卡',
          meta: { title: '發行票卡' },
          redirect: '/ticket/dataList/allTickets/allTickets',
          component: () =>
            import('@/views/projectManage/ticket/dataList'),
          children: [
            {
              path: 'allTickets',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/allTickets'
                ),
              name: '所有發行票卡',
              meta: { title: '所有發行票卡' }
            },
            {
              path: 'totalcount',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/allTicketsTotal'
                ),
              name: 'totalcount',
              meta: { title: '發行票卡總數' }
            },
            {
              path: 'openedTicketTotal',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/openedTicketTotal'
                ),
              name: 'openedTicketTotal',
              meta: { title: '被開啟總數' }
            },
            {
              path: 'downloadTicketTotal',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/downloadTicketTotal'
                ),
              name: 'downloadTicketTotal',
              meta: { title: '被下載總數' }
            },
            {
              path: 'downloadGooglePayTotal',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/downloadGooglePayTotal'
                ),
              name: 'downloadGooglePayTotal',
              meta: { title: 'GooglePay下載' }
            }
          ]
        },
        {
          path: 'WrittenOffTickets',
          redirect:
                   '/ticket/dataList/WrittenOffTickets/WrittenOffTickets',
          component: () =>
            import('@/views/projectManage/ticket/dataList'),
          name: '已兌換票卡',
          meta: { title: '已兌換票卡' },
          children: [
            {
              path: 'WrittenOffTickets',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/writtenOffTickets'
                ),
              name: '所有已核銷票卡',
              meta: { title: '所有已兌換票卡' }
            },
            {
              path: 'writtenOffTicketsTotal',
              component: () =>
                import(
                  '@/views/projectManage/ticket/dataList/writtenOffTicketsTotal'
                ),
              name: 'writtenOffTicketsTotal',
              meta: { title: '已兌換總數' }
            }
          ]
        },
        {
          path: 'roamingbarTicketState',
          component: () =>
            import(
              '@/views/projectManage/ticket/dataList/roamingbarTicketState'
            ),
          name: 'roamingbarTicketState',
          meta: { title: '漫遊吧票卡狀態' }
        }
      ]
    },
    {
      path: 'demo',
      component: () => import('@/views/projectManage/ticket/demo'),
      name: 'demo',
      meta: {
        title: 'DEMO票卡',
        icon: 'el-icon-receiving'
      },
      children: [
        {
          path: '711cash',
          name: '711cash',
          meta: { title: '711現金' },
          component: () =>
            import('@/views/projectManage/ticket/demo/ticketView')
        },
        {
          path: '711cafe',
          name: '711cafe',
          meta: { title: '711咖啡' },
          component: () =>
            import('@/views/projectManage/ticket/demo/ticketView')
        },
        {
          path: 'HiLife',
          name: 'HiLife',
          meta: { title: '萊爾富現金' },
          component: () =>
            import('@/views/projectManage/ticket/demo/ticketView')
        },
        {
          path: 'chicken',
          name: 'chicken',
          meta: { title: '繼光香香雞' },
          component: () =>
            import('@/views/projectManage/ticket/demo/ticketView')
        },
        {
          path: 'airportRestaurant',
          name: 'airportRestaurant',
          meta: { title: '機場餐廳' },
          component: () =>
            import('@/views/projectManage/ticket/demo/ticketView')
        },
        {
          path: 'airportCoffee',
          name: 'airportCoffee',
          meta: { title: '機場咖啡' },
          component: () =>
            import('@/views/projectManage/ticket/demo/ticketView')
        }
      ]
    }
  ]
}
