<template>
  <el-dialog
    title="新增黑名單"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <div style="padding:30px;">
      <div style="with:100%">
        <div style="position:relative">
          <el-form
            ref="ruleForm"
            :model="Data"
            label-position="left"
            label-width="15%"
            :rules="Rules"
            style="width: 80%; margin-left:5%;"
          >
            <component
              :is="field.type"
              v-for="field in fields"
              :key="field.name"
              v-model="Data[field.name]"
              :placeholder="field.placeholder"
              :name="field.name"
              :label="field.label"
              :message="field.message"
              :disabled="field.disabled"
              :options="field.options"
              :maxlength="field.maxlength"
            />
            <el-form-item label="FailCode">
              <el-select v-model="failCode" placeholder="請選擇" style="width:100%">
                <el-option
                  v-for="item in options"
                  :key="item.key"
                  :label="item.label"
                  :value="item.key"
                />
              </el-select>
            </el-form-item>
            <el-form-item style="margin-top:20px;">
              <el-button type="info" @click="addList">加入</el-button>
              <!-- 新增FailtureCode -->
              <el-popover
                v-model="visible"
                placement="bottom"
                width="600"
              >
                <el-form
                  ref="ruleFormFailure"
                  :model="DataFailure"
                  label-position="left"
                  label-width="15%"
                  :rules="RulesFailure"
                  style="width: 80%; margin-left:5%;"
                >
                  <component
                    :is="field.type"
                    v-for="field in fieldsFailure"
                    :key="field.name"
                    v-model="DataFailure[field.name]"
                    :placeholder="field.placeholder"
                    :name="field.name"
                    :label="field.label"
                    :message="field.message"
                    :disabled="field.disabled"
                    :options="field.options"
                    :maxlength="field.maxlength"
                  />
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                    <el-button type="primary" size="mini" @click="addFailure">新增</el-button>
                  </div>
                </el-form>
                <el-button slot="reference">新增FailtureCode</el-button>
              </el-popover>
              <div>或</div>
              <el-upload
                class="upload-demo display:inline;"
                action=""
                :before-remove="beforeRemove"
                :on-change="handleChange"
                multiple
                :limit="1"
                :on-exceed="handleExceed"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button type="info">上傳 CSV 或 XLSX</el-button>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 編輯黑名單列表 -->
    <el-table
      :data="inputList"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column
        label="索引"
        type="index"
        width="100"
      />
      <el-table-column
        label="信箱"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.mail }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="failureCode"
        width="200"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.failureCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="移除"
        width="200"
      >
        <template slot-scope="scope">
          <el-button type="danger" size="small" @click="removeList(scope.row.index)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin:20px 0 0 60%;">
      <el-button type="primary" @click="save">確認新增</el-button>
      <el-button @click="resetInputList">重置</el-button>
    </div>
  </el-dialog>
</template>

<script>
var reader = new FileReader()
import XLSX from 'xlsx'
import { ValidateEmail } from '@/utils/validate'
import TextInput from '@/components/form/TextInput'
import SelectInput from '@/components/form/SelectInput'

export default {
  name: 'DialogAddBlackList',
  components: {
    TextInput,
    SelectInput
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateMail = (rule, value, callback) => {
      const format = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
      format.test(value) ? callback() : callback(new Error())
    }
    const fields = [
      {
        type: 'TextInput',
        name: 'mail',
        value: '',
        label: 'Email',
        placeholder: '請輸入Email',
        rules: [{ required: true, message: '請輸入Email', trigger: 'blur', validator: validateMail }]
      }
    ]
    const Data = fields.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const Rules = fields.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    const fieldsFailure = [
      {
        type: 'TextInput',
        name: 'code',
        value: '',
        label: 'code',
        placeholder: '請輸入code',
        rules: [{ required: true, message: '請輸入code', trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'reason',
        value: '',
        label: 'reason',
        placeholder: '請輸入reason',
        rules: [{ required: true, message: '請輸入reason', trigger: 'blur' }]
      }
    ]
    const DataFailure = fieldsFailure.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const RulesFailure = fieldsFailure.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    return {
      fields,
      fieldsFailure,
      Rules,
      DataFailure,
      Data,
      RulesFailure,
      failCode: '',
      fileList: [], // 上傳檔案
      inputList: [], // 編輯黑名單列表
      visible: false
    }
  },
  computed: {
    options() {
      const options = []
      if (this.$store.state.EDM_email) {
        this.$store.state.EDM_email.failure_List.map((item) => {
          options.push({ key: item.code, value: item.code, label: `${item.code} ${item.reason}` })
        })
      }
      return options || []
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
      if (this.inputList.length > 0) {
        this.$store.dispatch('EDM_email/ADD_BLACK_LIST', this.inputList).then(response => {
          if (response.message === 'Success') {
            this.$message.success('新增成功')
            this.$store.dispatch('EDM_email/GET_BLACK_LIST')
            this.$emit('showAddDialog', false)
          }
        })
          .catch(() => {
            this.$message.error('新增錯誤')
          })
      }
    },
    resetInputList(formName) {
      this.inputList = []
      this.fileList = []
    },
    // 加入查看列表
    addList() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid && this.failCode) {
          const inputState = {
            mail: this.Data.mail,
            failureCode: this.failCode
          }
          this.inputList.push(Object.assign({}, inputState))
          this.$refs['ruleForm'].resetFields()
        } else {
          this.$message.error('資料不完整')
          return false
        }
      })
    },
    removeList(index) {
      this.inputList.splice(index, 1)
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex
    },
    async  handleChange(file) {
      if (file.raw.type === 'text/csv') {
        this.csvloader(file)
      } else if (file.raw.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        this.xlsxloader(file)
      } else {
        alert('檔案錯誤！')
        this.fileList = []
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
            const [mail, failureCode] = el.split(',')
            return { failureCode: failureCode.trim(), mail: mail.trim() }
          })
          result = result.filter(el => ValidateEmail(el.mail))
          result.map((item) => {
            this.inputList.push(item)
          })
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
            failureCode: el['failureCode'],
            mail: el['E-mail']
          }))
          result = result.filter(el => ValidateEmail(el.mail))
          this.inputList.push(Object.assign({}, result))
        }
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(`只能選擇一個文件,請先移除文件！`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    addFailure() {
      this.$refs['ruleFormFailure'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('EDM_email/ADD_FAILURE', this.DataFailure).then(response => {
            if (response.id) {
              this.$message.success('新增成功')
              this.$store.dispatch('EDM_email/GET_FAILTURE_LIST')
              this.visible = false
            }
          })
            .catch(() => {
              this.$message.error('新增錯誤')
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

