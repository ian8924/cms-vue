<template>
  <el-table :data="hooks">
    <el-table-column
      v-for="(col, i) in cols_"
      :key="i"
      :label="col.label"
      :sortable="col.sortable"
      :show-overflow-tooltip="true"
    >
      <template slot-scope="scope">
        <a
          v-if="col.scope === 'templatePath'"
          :href="scope.row.templatePath ||`/#${$route.fullPath}`"
          @click.prevent="previewHook(scope.row)"
        >
          <i class="el-icon-download" />
          點我下載
        </a>
        <div v-else-if="col.scope === 'isEnable'">
          <i
            v-permission="['EDM-查看者']"
            style="cursor:pointer"
            :class="
              scope.row['isEnable'] === '1'
                ? 'el-icon-success'
                : 'el-icon-error'
            "
          />
          <i
            v-permission="['EDM-編輯者']"
            style="cursor:pointer"
            :class="
              scope.row['isEnable'] === '1'
                ? 'el-icon-success'
                : 'el-icon-error'
            "
            @click="enableHook(scope.row)"
          />
        </div>
        <h4 v-else style="color:gray;">
          {{ scope.row[col.scope] }}
        </h4>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          type="primary"
          style="padding:12px12px;"
          @click="edit(scope.row)"
        >更新</el-button>
        <el-button
          type="primary"
          style="padding:12px12px;"
          @click="upload(scope.row)"
        >上傳</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  name: 'EmailHooksTable',
  props: {
    hooks: { type: Array, required: true }
  },
  computed: {
    cols_() {
      return [
        { 'label': '類別', 'scope': 'title' },
        { 'label': '樣板下載', 'scope': 'templatePath' },
        { 'label': '評分返回連結', 'scope': 'redirectURL' },
        { 'label': '啟用', 'scope': 'isEnable' }
      ]
    }
  },
  methods: {
    upload(hook) {
      this.$emit('upload', hook)
    },
    enableHook(hook) {
      this.$emit('enable', hook)
    },
    edit(hook) {
      this.$emit('edit', hook)
    },
    previewHook(hook) {
      this.$emit('preview', hook)
    }
  }
}
</script>

<style scoped>
.el-icon-success {
  color: green;
  font-size: 25px;
}
.el-icon-error {
  color: rgb(206, 85, 85);
  font-size: 25px;
}
</style>
