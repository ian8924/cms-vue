<template>
  <el-dialog
    title="發送測試EDM"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-form-item v-if="isCustomize==='1'" label="收件人姓名">
        <el-input v-model="name" show-word-limit maxlength="50" />
      </el-form-item>
      <el-form-item label="收件人Email">
        <el-input v-model="email" show-word-limit />
      </el-form-item>
      <el-button @click="save">發送</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
import { ValidateEmail } from '@/utils/validate'
export default {
  name: 'DialogSendedm',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    projectID: {
      type: Number,
      default: 0
    },
    edmID: {
      type: Number,
      default: 0
    },
    isCustomize: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      name: '',
      email: ''
    }
  },

  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showSendDialog', false)
          done()
        })
        .catch(_ => {})
    },
    async save() {
      const isComplete = this.isCustomize === '1' ? this.name && ValidateEmail(this.email) : ValidateEmail(this.email)
      if (isComplete) {
        const required = {
          projectID: this.projectID,
          edmID: this.edmID,
          content: {
            mail: this.email,
            name: this.name
          }
        }
        await this.$store.dispatch('EDM_EDM/SEND_EDM', required)
        this.$emit('showSendDialog', false)
      } else {
        alert('資訊未填寫完整！')
      }
    }
  }
}
</script>
<style scoped>
.notice-grey{
  color: grey;
  font-size: 8px;
}
</style>
