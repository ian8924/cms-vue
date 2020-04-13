<template>
  <div class="dashboard-container">
    <el-row>
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes" :key="i" :name="item.name" :path="item.path" :icon="item.icon" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ServiceIcon from '@/components/ServiceIcon'

export default {
  name: 'Dashboard',
  components: { ServiceIcon },
  data() {
    return {
      routes: [
        {
          name: '權限管理',
          path: '/permission',
          icon: 'lock'
        },
        {
          name: '叫車吧',
          path: '/callcarbar',
          icon: 'guide'
        },
        {
          name: '肯驛隨行券',
          path: '/ticket',
          icon: 'ticket'
        }
      ]
    }
  }
}
</script>
