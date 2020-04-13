<template>
  <el-dialog
    title="新增專案"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <uploader
      ref="upload"
      :options="options"
      class="uploader-example"
      @complete="complete"
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
export default {
  name: 'DialogUploader',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      options: {
        target: '', // URL
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      }
    }
  },
  mounted() {
    this.options.target = this.url
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showUploadDialog', false)
          done()
        })
        .catch(_ => {})
    },
    complete() {
      // 關閉 Dialog & 刷新列表
      this.$emit('showUploadDialog', false)
      this.$message({
        message: '上傳成功',
        type: 'success'
      })
    }
  }
}
</script>
