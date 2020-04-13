<template>
  <div style="padding: 50px">
    <el-row :gutter="40" class="panel-group">
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
            <i v-if="item.icon.startsWith('el-')" class="card-panel-icon" :class="item.icon" />
            <svg-icon v-else :icon-class="item.icon" icon="el-icon-search" class-name="card-panel-icon" />
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
export default {
  name: 'Settings',
  data() {
    return {
      routes: [
        {
          name: '手機版本管理',
          path: 'AppVersionControl',
          icon: 'el-icon-mobile-phone'
        },
        {
          name: '行程狀態通知設定',
          path: 'ReservationStatusHooks',
          icon: 'el-icon-s-flag'
        },
        {
          name: '服務信設定',
          path: 'ReservationEmailHooks',
          icon: 'email'
        }
      ]
    }
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
