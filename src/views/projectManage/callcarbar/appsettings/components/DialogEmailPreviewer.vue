<template>
  <el-dialog
    :title="title"
    :visible="true"
    :direction="'btt'"
    :before-close="handleClose"
    width="500px"
    height="800"
  >
    <iframe :src="iframeRawContent" frameborder="0" width="460" height="667" />
  </el-dialog>
</template>

<script>

const xhr = new XMLHttpRequest()

export default {
  name: 'DialogEmailPreviewer',
  props: {
    showDialog: { type: Boolean, required: true },
    previewHook: { type: Object, required: true }
  },
  data() {
    return { iframeRawContent: '' }
  },
  computed: {
    iframeSrc() {
      const { templatePath } = this.previewHook
      return templatePath
    },
    title() {
      const { title } = this.previewHook
      return `預覽 - ${title}`
    }
  },
  mounted() {
    xhr.addEventListener('load', this.xhrLoadHandler)
    xhr.addEventListener('error', this.xhrErrorHandler)
    this.getIframeContent()
  },
  beforeDestroy() {
    xhr.removeEventListener('load', this.xhrLoadHandler)
    xhr.removeEventListener('error', this.xhrErrorHandler)
  },
  methods: {
    handleClose() {
      this.$emit('update:showDialog', false)
    },
    getIframeContent() {
      if (!this.iframeSrc) {
        this.xhrErrorHandler()
        return
      }
      xhr.open('GET', this.iframeSrc)
      xhr.send()
    },
    xhrLoadHandler(e) {
      this.iframeRawContent = `data:text/html;charset=utf-8,${encodeURIComponent(
        e.target.response
      )}`
    },
    xhrErrorHandler() {
      this.iframeRawContent = 'data:text/html;charset=utf-8,No uploaded!'
    }
  }
}
</script>

<style>
iframe {
  overflow: hidden;
}
</style>
