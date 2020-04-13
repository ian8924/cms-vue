<template>
  <div style="padding:30px;">
    <el-row v-if="showFunctionIcon">
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes" :key="i" :name="item.name" :path="'/permission' + item.path" :icon="item.icon" />
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import ServiceIcon from '@/components/ServiceIcon'

export default {
  name: 'Permission',
  components: { ServiceIcon },
  data() {
    return {
      routes: [
        {
          path: '/account',
          name: '帳號權限管理',
          icon: 'star'

        },
        {
          path: '/role',
          name: '角色權限管理',
          icon: 'star'

        }
      ]
    }
  },
  computed: {
    fullPath() {
      return this.$route.fullPath
    },
    showFunctionIcon() {
      return this.$route.path === '/permission'
    }
  }

}
</script>
