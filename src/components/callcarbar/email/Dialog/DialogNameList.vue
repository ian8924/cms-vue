<template>
  <el-dialog
    title="查看名單"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'600px'"
  >
    <el-table
      :data="listDatas"
      style="width: 100%"
    >
      <el-table-column
        label="索引"
        width="100"
      >
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="名稱"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>

      <el-table-column
        label="Email"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.mail }}</span>
        </template>
      </el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>

export default {
  name: 'DialogNameList',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    emailNamelist: {
      type: Array,
      required: true
    }
  },
  computed: {
    // Email Namelist
    listDatas() {
      return this.emailNamelist ? this.emailNamelist : []
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showNamelistDialog', false)
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

