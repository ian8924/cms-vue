<template>
  <div style="padding:30px;">
    <el-row v-if="showFunctionIcon">
      <h3>DEMO票卡</h3>
      <el-col class="icons-container">
        <ServiceIcon v-for="(item, i) in routes1" :key="i" :name="item.name" :path="'/ticket/demo' + item.path" :icon="item.icon" />
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import ServiceIcon from '@/components/ServiceIcon'

export default {
  name: 'Demo',
  components: { ServiceIcon },
  data() {
    return {
      routes1: [
        {
          name: '711現金',
          path: '/711cash',
          icon: '7-eleven'
        },
        {
          name: '711咖啡',
          path: '/711cafe',
          icon: '7-eleven'
        },
        {
          name: '萊爾富現金',
          path: '/hilife',
          icon: 'hilife'
        },
        {
          name: 'J&G',
          path: '/chicken',
          icon: 'chicken'
        },
        {
          name: '機場餐廳',
          path: '/airportRestaurant',
          icon: 'airport'
        },
        {
          name: '機場咖啡',
          path: '/airportCoffee',
          icon: 'airport'
        }
      ]
    }
  },
  computed: {
    fullPath() {
      return this.$route.fullPath
    },
    showFunctionIcon() {
      return this.$route.path === '/ticket/demo'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/ticket.scss";
</style>
