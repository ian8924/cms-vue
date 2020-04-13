<template>
  <div style="padding:30px;">
    <el-row v-if="showFunctionIcon">
      <h3>發行票卡</h3>
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes1" :key="i" :name="item.name" :path="'/ticket/dataList/allTickets' + item.path" :icon="item.icon" />
      </el-col>
      <h3>已兌換票卡</h3>
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes2" :key="i" :name="item.name" :path="'/ticket/dataList/WrittenOffTickets' + item.path" :icon="item.icon" />
      </el-col>
      <h3>漫遊吧票卡</h3>
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes3" :key="i" :name="item.name" :path="'/ticket/dataList' + item.path" :icon="item.icon" />
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import ServiceIcon from '@/components/ServiceIcon'

export default {
  name: 'DataList',
  components: { ServiceIcon },
  data() {
    return {
      routes1: [
        {
          name: '所有發行票卡',
          path: '/allTickets',
          icon: 'tickets2'
        },
        {
          name: '發行票卡總數',
          path: '/totalcount',
          icon: 'tickets2'
        },
        {
          name: '被開啟總數',
          path: '/openedTicketTotal',
          icon: 'tickets2'
        }, {
          name: '被下載總數',
          path: '/downloadTicketTotal',
          icon: 'tickets2'
        },
        {
          name: 'GooglePay下載總數',
          path: '/downloadGooglePayTotal',
          icon: 'tickets2'
        }
      ],
      routes2: [
        {
          name: '所有已核銷票卡',
          path: '/writtenOffTickets',
          icon: 'ticketused'
        },
        {
          name: '已兌換總數',
          path: '/writtenOffTicketsTotal',
          icon: 'ticketused'
        }
      ],
      routes3: [
        {
          name: '票卡狀態',
          path: '/roamingbarTicketState',
          icon: 'tickets'
        }
      ]
    }
  },
  computed: {
    fullPath() {
      return this.$route.fullPath
    },
    showFunctionIcon() {
      return this.$route.path === '/ticket/dataList'
    }
  }
}
</script>
