<template>
  <router-link :to="path">
    <div>
      <el-tooltip placement="top">
        <div slot="content">
          {{ name }}
        </div>
        <div class="icon-item">

          <i v-if="icon.startsWith('el-')" :class="icon" class-name="disabled" />
          <svg-icon v-else :icon-class="icon" class-name="disabled" />

          <span>{{ name }}</span>
        </div>
      </el-tooltip>
    </div>
  </router-link>

</template>

<script>
export default {
  name: 'ServiceIcon',
  props: {
    name: { type: String, required: true },
    path: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
