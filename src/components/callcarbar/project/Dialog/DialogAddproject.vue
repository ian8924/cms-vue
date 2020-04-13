<template>
  <el-dialog
    title="新增專案"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'80%'"
  >
    <el-form ref="myEdit" :model="myEdit" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
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
  name: 'DialogAddproject',
  props: {
    showDialog: {
      type: Boolean,
      default: false
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
        this.myEdit = {}
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showAddDialog', false)
          done()
        })
        .catch(_ => {})
    },
    async save() {
      if (this.myEdit.name && this.myEdit.campaignID && this.myEdit.description) {
        try {
          await this.$store.dispatch('EDM_project/ADD_PROJECT', this.myEdit)
          this.$store.dispatch('EDM_project/GET_PROJECT_LIST')
          this.$emit('showAddDialog', false)
        } catch {
          alert('campaignID重複')
        }
      } else {
        alert('請填寫完整資訊')
      }
    }
  }
}
</script>

