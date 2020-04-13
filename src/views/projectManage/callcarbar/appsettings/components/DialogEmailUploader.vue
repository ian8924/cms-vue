<template>
  <el-dialog
    :title="title"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <uploader
      ref="upload"
      :options="options"
      class="uploader-example"
      @complete="completeHandler"
    >
      <uploader-unsupport />
      <uploader-drop>
        <p>Drop files here to upload or</p>
        <uploader-btn :directory="true">選擇資料夾</uploader-btn>
      </uploader-drop>
      <uploader-list />
    </uploader>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DialogEmailUploader',
  props: {
    showDialog: { type: Boolean, default: false },
    currentHook: { type: Object, required: true }
  },
  data() {
    return {
      options: {
        target: '', // URL
        testChunks: false,
        headers: {}
      }
    }
  },
  computed: {
    title() {
      return `更新Email樣板 - ${this.currentHook.title}`
    },
    url() {
      return `${process.env.VUE_APP_BASE_API}/v1/settings/reservations/emails/${this.currentHook.id}/template`
    },
    ...mapGetters({
      token: 'token'
    })
  },
  mounted() {
    this.options.target = this.url
    this.options.headers.authorization = `Bearer ${this.token}`
  },
  methods: {
    handleClose() {
      this.$emit('update:showDialog', false)
    },
    completeHandler() {
      // 關閉 Dialog & 刷新列表
      this.$message.success({
        message: '上傳成功',
        type: 'success'
      })
      this.handleClose()
    }
  }

}
</script>

<style></style>
