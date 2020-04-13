<template>
  <el-dialog
    :title="isAddNotification ? '新增推播' : '編輯推播'"
    :visible="true"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form
      ref="ruleForm"
      :model="notificationData"
      label-position="left"
      label-width="15%"
      :rules="notificationRules"
      style="width: 80%; margin-left:5%;"
    >
      <component
        :is="field.type"
        v-for="field in fields"
        :key="field.name"
        v-model="notificationData[field.name]"
        :placeholder="field.placeholder"
        :name="field.name"
        :label="field.label"
        :disabled="field.disabled"
        :options="field.options"
        :maxlength="field.maxlength"
      />
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{ isAddNotification? '新增推播': '儲存推播' }}</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import SelectInput from '@/components/form/SelectInput'
import TextInput from '@/components/form/TextInput'
import DatetimePicker from '@/components/form/DatetimePicker'
import TextareaInput from '@/components/form/TextareaInput'

export default {
  name: 'DialogEditPush',
  components: {
    TextInput, SelectInput, DatetimePicker, TextareaInput
  },
  props: {
    isAddNotification: { type: Boolean, required: true }, // 切換新增或是編輯
    showDialog: { type: Boolean, required: true },
    editNotificationData: { type: Object, default: () => {} }
  },
  data() {
    const validateNotificationTime = (rule, value, callback) => {
      const format = /[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}/
      format.test(value) ? callback() : callback(new Error())
    }
    // title, message, link, notificationTime, infoType
    const fields = [
      {
        type: 'TextInput',
        name: 'title',
        value: '',
        label: '標題',
        placeholder: '請輸入標題',
        maxlength: 20,
        rules: [{ required: true, message: '請填寫推播標題', trigger: 'blur' }]
      },
      {
        type: 'TextareaInput',
        name: 'message',
        value: '',
        label: '訊息內容',
        placeholder: '',
        maxlength: 100,
        rules: [{ required: true, message: '請填寫推播內容', trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'link',
        value: '',
        label: 'URL',
        placeholder: '請輸入網址',
        rules: [{ required: true, message: '請填寫推播連結', trigger: 'blur' }]
      },
      {
        type: 'DatetimePicker',
        name: 'notificationTime',
        value: '',
        label: '通知時間',
        placeholder: '選擇日期',
        rules: [{ required: true, message: '請選擇推播時間', trigger: 'blur', validator: validateNotificationTime }]
      },
      {
        type: 'SelectInput',
        name: 'infoType',
        value: '',
        label: '推播類型',
        placeholder: '',
        options: [
          { name: '通知', value: '通知' },
          { name: '優惠', value: '優惠' }
        ],
        rules: [{ required: true, message: '請選擇推播類型', trigger: 'blur' }]
      }
    ]
    if (!this.isAddNotification) {
      fields.unshift({
        type: 'TextInput',
        name: 'id',
        value: '',
        label: 'id',
        placeholder: '',
        disabled: true,
        rules: [{ required: !this.isAddNotification, trigger: 'blur' }]
      })
    }
    const notificationData = fields.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const notificationRules = fields.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    return {
      fields,
      notificationRules,
      notificationData
    }
  },
  mounted() {
    if (!this.isAddNotification) {
      this.notificationData = Object.assign({}, this.editNotificationData)
    }
  },
  methods: {
    handleClose() {
      if (this.isAddNotification) {
        this.$confirm('確認關閉？')
          .then(_ => {
            this.$emit('update:showDialog', false)
          })
          .catch(_ => {})
      } else {
        this.$emit('update:showDialog', false)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const event = this.isAddNotification ? 'post' : 'update'
          this.$emit(event, this.notificationData)
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style>

</style>
