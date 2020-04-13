<template>
  <el-dialog
    title="新增Email群組"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form ref="myEdit" :model="myEdit" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-form-item label="群組名稱">
        <el-input v-model="myEdit.groupName" placeholder="群組名稱" show-word-limit maxlength="50" />
      </el-form-item>
      <el-form-item label="上傳群組名單">
        <el-upload
          class="upload-demo"
          action=""
          :before-remove="beforeRemove"
          :on-change="handleChange"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button size="small" type="info">上傳 CSV 或 XLSX</el-button>
        </el-upload>
      </el-form-item>
      <el-button @click="save">新增</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
var reader = new FileReader()
import XLSX from 'xlsx'
import { ValidateEmail } from '@/utils/validate'
export default {
  name: 'DialogAddEmailGroup',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      initDatas: {
        groupName: '',
        member: [

        ]
      },
      myEdit: {},
      fileList: []
    }
  },
  mounted() {
    this.myEdit = this.initDatas
  },
  beforeDestroy() {
    reader.removeEventListener('load', this.csvloader)
    reader.removeEventListener('load', this.xlsxloader)
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
      if (this.myEdit.groupName && this.myEdit.member !== []) {
        await this.$store.dispatch('EDM_email/ADD_EMAIL_GROUP', this.myEdit)
        this.$message.success('新增成功')
        await this.$store.dispatch('EDM_email/GET_EMAIL_GROUP')
        this.$emit('showAddDialog', false)
      }
    },
    async  handleChange(file) {
      if (file.raw.type === 'text/csv') {
        this.csvloader(file)
      } else if (file.raw.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.xlsxloader(file)
      } else {
        alert('檔案錯誤！')
        this.myEdit.member = []
      }
    },
    csvloader(file) {
      let result
      reader.readAsText(file.raw)
      reader.onload = evt => {
        if (evt.target.result) {
          result = evt.target.result.split(/\r\n|\n/)
          result.shift()
          result = result.filter(el => el.split(',').length >= 2)
          result = result.map(el => {
            const [name, mail] = el.split(',')
            return { name: name.trim(), mail: mail.trim() }
          })
          result = result.filter(el => ValidateEmail(el.mail))
          this.myEdit.member = result
        }
      }
    },
    xlsxloader(file) {
      let result = []
      reader.readAsBinaryString(file.raw)
      reader.onload = evt => {
        if (evt.target.result) {
          const wb = XLSX.read(evt.target.result, { type: 'binary' })
          wb.SheetNames.forEach(sheet => {
            var roa = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheet])
            if (roa.length > 0) {
              result = result.concat(roa)
            }
          })
          result = result.map(el => ({
            name: el['姓名'],
            mail: el['E-mail']
          }))
          result = result.filter(el => ValidateEmail(el.mail))
          this.myEdit.member = result
        }
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(`只能選擇一個文件,請先移除文件！`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

