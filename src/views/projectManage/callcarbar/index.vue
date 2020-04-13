<template>
  <div style="padding:30px;">
    <el-row v-if="showFunctionIcon">
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes" :key="i" :name="item.name" :path="'/callcarbar' + item.path" :icon="item.icon" />
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import ServiceIcon from '@/components/ServiceIcon'

export default {
  name: 'Callcarbar',
  components: { ServiceIcon },
  data() {
    return {
      routes: [
        {
          name: 'EDM 管理',
          path: '/edm',
          icon: 'el-icon-receiving'
        },
        {
          name: '推播管理',
          path: '/notification',
          icon: 'el-icon-news'
        },
        {
          name: '簡訊管理',
          path: '/SMS/list',
          icon: 'el-icon-s-promotion'
        },
        {
          name: '資料&統計',
          path: '/statistic',
          icon: 'chart'
        },
        {
          name: '設定',
          path: '/app_settings',
          icon: 'el-icon-setting'
        }
      ]
    }
  },
  computed: {
    fullPath() {
      return this.$route.fullPath
    },
    showFunctionIcon() {
      return this.$route.path === '/callcarbar'
    }
  }

}
</script>
