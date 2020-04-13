<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="position:relative">
        <div>
          <h2>發送簡訊</h2>
        </div>
        <el-tabs type="border-card">
          <el-tab-pane label="單筆發送">
            <el-form
              ref="ruleForm"
              :model="SMSData"
              label-position="left"
              label-width="15%"
              :rules="SMSRules"
              style="width: 80%; margin-left:5%;"
            >
              <component
                :is="field.type"
                v-for="field in fields"
                :key="field.name"
                v-model="SMSData[field.name]"
                :placeholder="field.placeholder"
                :name="field.name"
                :label="field.label"
                :disabled="field.disabled"
                :options="field.options"
                :maxlength="field.maxlength"
              />
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">發送</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="分批發送">
            <el-form
              ref="ruleFormBatch"
              :model="SMSDataBatch"
              label-position="left"
              label-width="15%"
              :rules="SMSRulesBatch"
              style="width: 80%; margin-left:5%;"
            >
              <component
                :is="field.type"
                v-for="field in fieldsBatch"
                :key="field.name"
                v-model="SMSDataBatch[field.name]"
                :placeholder="field.placeholder"
                :name="field.name"
                :label="field.label"
                :disabled="field.disabled"
                :options="field.options"
                :maxlength="field.maxlength"
              />
              <el-form-item label="上傳檔案">
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
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleFormBatch')">發送</el-button>
                <el-button @click="resetForm('ruleFormBatch')">重置</el-button>
              </el-form-item>
              <div>
                <h4>手機名單</h4>
                <el-table
                  :data="tableData"
                  style="width: 100%"
                >
                  <el-table-column
                    type="index"
                    label="索引"
                    width="180"
                  />
                  <el-table-column
                    prop="mobile"
                    label="手機號碼"
                    width="180"
                  />
                </el-table>
              </div>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
var reader = new FileReader()
import XLSX from 'xlsx'
import SMS from '@/store/modules/callcarbar/SMS'
import { ValidateMobile } from '@/utils/validate'
import TextareaInput from '@/components/form/TextareaInput'
import TextInput from '@/components/form/TextInput'
export default {
  name: 'SendMessage',
  components: {
    TextareaInput,
    TextInput
  },
  data() {
    const validateMobile = (rule, value, callback) => {
      const format = /09[0-9]{8}/
      format.test(value) ? callback() : callback(new Error())
    }
    const fields = [
      {
        type: 'TextareaInput',
        name: 'message',
        value: '',
        label: '訊息內容',
        placeholder: '',
        maxlength: 70,
        rules: [{ required: true, message: '請填寫簡訊內容', trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'mobile',
        value: '',
        label: '手機號碼',
        placeholder: '請輸入手機號碼',
        maxlength: 10,
        rules: [{ required: true, message: '請輸入手機號碼', trigger: 'blur', validator: validateMobile }]
      }
    ]
    const SMSData = fields.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const SMSRules = fields.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})

    const fieldsBatch = [
      {
        type: 'TextareaInput',
        name: 'message',
        value: '',
        label: '訊息內容',
        placeholder: '',
        maxlength: 70,
        rules: [{ required: true, message: '請填寫簡訊內容', trigger: 'blur' }]
      }
    ]
    const SMSDataBatch = fieldsBatch.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const SMSRulesBatch = fieldsBatch.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    return {
      fields,
      fieldsBatch,
      SMSRules,
      SMSData,
      SMSDataBatch,
      SMSRulesBatch,
      fileList: [],
      tableData: []
    }
  },
  mounted() {
    if (this.$store._modules.root._children['SMS'] === undefined) {
      this.$store.registerModule('SMS', SMS())
    }
  },
  async beforeDestroy() {
    if (this.$store._modules.root._children['SMS'] !== undefined) {
      this.$store.unregisterModule('SMS')
    }
  },
  methods: {
    submitForm(formName) {
      if (formName === 'ruleForm') {
        this.send_SMS_single()
      } else {
        this.send_SMS_batch()
      }
    },
    send_SMS_single() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('SMS/SEND_SMS', this.SMSData).then(response => {
            if (response.message === 'Success') {
              this.$message.success('發送成功')
            }
          })
            .catch(() => {
              this.$message.error('發送錯誤')
            })
        } else {
          return false
        }
      })
    },
    send_SMS_batch() {
      const mobileList = []
      this.tableData.map(el => {
        mobileList.push(el.mobile)
      })
      const required = {
        message: this.SMSDataBatch.message,
        mobileList: mobileList
      }
      if (mobileList.length === 0) {
        alert('檔案錯誤')
        return
      }
      this.$refs['ruleFormBatch'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('SMS/SEND_SMS_BATCH', required).then(response => {
            if (response.message === 'Success') {
              this.$message.success('發送成功')
            }
          })
            .catch(() => {
              this.$message.error('發送錯誤')
            })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.fileList = []
      this.tableData = []
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
          const tableData = []
          result = result.map(el => {
            if (ValidateMobile(el)) {
              tableData.push({ mobile: el })
            }
          })
          this.tableData = tableData
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
          const tableData = []
          result = result.map(el => {
            if (ValidateMobile(el['mobile'])) {
              tableData.push({ mobile: el['mobile'] })
            }
          })
          this.tableData = tableData
        }
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(`只能選擇一個文件,請先移除文件！`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`).then(() => {
        this.fileList = []
        this.tableData = []
      })
    }
  }
}
</script>

<style>

</style>
