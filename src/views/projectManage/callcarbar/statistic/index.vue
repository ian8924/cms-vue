<template>
  <div style="padding: 50px">
    <el-row v-if="showFunctionIcon" :gutter="40" class="panel-group">
      <el-col v-if="false" :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="peoples" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              會員資料
            </div>
          </div>
        </div>
      </el-col>
      <el-col
        v-for="(item, i) in routes"
        :key="i"
        :xs="12"
        :sm="12"
        :lg="6"
        class="card-panel-col"
      >
        <router-link class="card-panel" tag="div" :to="{name: item.path}">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon :icon-class="item.icon" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              {{ item.name }}
            </div>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <router-view />
  </div>
</template>

<script>
import statistic from '@/store/modules/callcarbar/statistic'

export default {
  name: 'Statistic',
  data() {
    return {
      routes: [
        {
          name: '會員資料',
          path: 'member',
          icon: 'peoples'
        }
      ]
    }
  },
  computed: {
    showFunctionIcon() {
      return this.$route.path === '/callcarbar/statistic'
    }
  },
  created() {
    if (this.$store._modules.root._children['statistic'] === undefined) {
      this.$store.registerModule('statistic', statistic())
    }
  },
  async beforeDestroy() {
    if (this.$store._modules.root._children['statistic'] !== undefined) {
      this.$store.unregisterModule('statistic')
    }
  },
  methods: {
    handleSetLineChartData() {}
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
    }
  }
  .icon-people {
    color: #40c9c6;
  }
  .card-panel-icon-wrapper {
    float: left;
    margin: 14px 0 0 14px;
    padding: 16px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }
  .card-panel-icon {
    float: left;
    font-size: 48px;
  }

  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px;
    margin-left: 0px;

    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .card-panel-num {
      font-size: 20px;
    }
  }
}
</style>
