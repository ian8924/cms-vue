<template>
  <el-table :data="hooks">
    <el-table-column
      v-for="(col, i) in cols"
      :key="i"
      :label="col.label"
      :sortable="col.sortable"
      :show-overflow-tooltip="true"
    >
      <template slot-scope="scope">
        <div v-if="col.scope === 'isEnable'">
          <i
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
          @click="editHook(scope.row)"
        >編輯</el-button>
        <el-button
          type="primary"
          style="padding:12px12px;"
          @click="testHook(scope.row)"
        >測試</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'StatusHooksTable',
  props: {
    cols: { type: Array, required: true },
    hooks: { type: Array, required: true }
  },
  methods: {
    editHook(hook) {
      this.$emit('editHook', hook)
    },
    enableHook(hook) {
      this.$emit('enableHook', hook)
    },
    testHook(hook) {
      this.$emit('testHook', hook)
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
