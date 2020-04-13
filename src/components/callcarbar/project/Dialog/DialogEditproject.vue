<template>
  <el-dialog
    title="編輯專案"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'80%'"
  >
    <el-form ref="myEdit" :model="myEdit" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-form-item label="活動id">
        <el-input v-model="myEdit.id" :disabled="true" />
      </el-form-item>
      <el-form-item label="campaignID">
        <el-input v-model="myEdit.campaignID" placeholder="僅限輸入英文" />
      </el-form-item>
      <el-form-item label="活動名稱">
        <el-input v-model="myEdit.name" />
      </el-form-item>
      <el-form-item label="活動描述">
        <el-input
          v-model="myEdit.description"
          type="textarea"
          :rows="5"
        />
      </el-form-item>
      <el-button @click="save">儲存</el-button>
    </el-form>
  </el-dialog>
</template>

<script>

export default {
  name: 'DialogEditproject',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    crrentSlect: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myEdit: {}
    }
  },
  watch: {
    showDialog(val) {
      if (val === true) {
        this.myEdit = Object.assign({}, this.crrentSlect)
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showEditDialog', false)
          done()
        })
        .catch(_ => {})
    },
    async save() {
      // 有做更改才打API
      if (JSON.stringify(this.crrentSlect) !== JSON.stringify(this.myEdit)) {
        await this.$store.dispatch('EDM_project/EDIT_PROJECT_CONTENT', this.myEdit)
        await this.$store.dispatch('EDM_project/GET_PROJECT_LIST')
      }
      this.$emit('showEditDialog', false)
    }
  }
}
</script>

