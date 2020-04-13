<template>
  <div style="padding:30px;">
    <el-row v-if="showFunctionIcon">
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes" :key="i" :name="item.name" :path="'/ticket' + item.path" :icon="item.icon" />
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import ServiceIcon from '@/components/ServiceIcon'

export default {
  name: 'Ticket',
  components: { ServiceIcon },
  data() {
    return {
      routes: [
        {
          name: '隨行券資料統計',
          path: '/dataList',
          icon: 'tickets'
        },
        {
          name: 'DEMO',
          path: '/demo',
          icon: 'demo'
        }
      ]
    }
  },
  computed: {
    fullPath() {
      return this.$route.fullPath
    },
    showFunctionIcon() {
      return this.$route.path === '/ticket'
    }
  }

}
</script>
