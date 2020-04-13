<template>
  <router-view />
</template>

<script>
import settings from '@/store/modules/callcarbar/appsettings'

const MODULE_NAME = 'AppSettings'

export default {
  name: 'Settings',
  created() {
    if (this.$store._modules.root._children[MODULE_NAME] === undefined) {
      this.$store.registerModule(MODULE_NAME, settings())
    }
  },
  async beforeDestroy() {
    if (this.$store._modules.root._children[MODULE_NAME] !== undefined) {
      this.$store.unregisterModule(MODULE_NAME)
    }
  }
}
</script>

<style>

</style>

