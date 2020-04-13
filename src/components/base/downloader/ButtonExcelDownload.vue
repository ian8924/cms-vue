<template>
  <el-button :loading="downloadLoading" type="primary" icon="el-icon-document" @click="handleDownload">
    下載 Excel
  </el-button>
</template>

<script>
export default {
  name: 'ButtonExcelDownload',
  props: {
    filename: {
      type: String,
      default: 'default'
    },
    dataArray: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 寫入excel的 key
    keyArray: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 寫入excel的標頭
    tNameArray: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 下載 excel
      autoWidth: true,
      bookType: 'xlsx',
      downloadLoading: false
    }
  },
  mounted() {
  },
  methods: {
    // 下載excel
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = this.tNameArray
        const filterVal = this.keyArray
        // 當前table資料
        const list = this.dataArray
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    }
  }
}
</script>
