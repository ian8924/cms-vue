<template>
  <el-dialog
    :title="'編輯行程狀態推播'"
    :visible="true"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form
      ref="ruleForm"
      :model="hookData"
      label-position="left"
      label-width="15%"
      :rules="hookRules"
      style="width: 80%; margin-left:5%;"
    >
      <component
        :is="field.type"
        v-for="field in fields"
        :key="field.name"
        v-model="hookData[field.name]"
        :placeholder="field.placeholder"
        :name="field.name"
        :label="field.label"
        :disabled="field.disabled"
        :options="field.options"
        :maxlength="field.maxlength"
      />
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">儲存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div>
      <ul>
        <li>{date} 預約日期</li>
        <li>{driver} 司機名稱</li>
      </ul>
    </div>
  </el-dialog>
</template>

<script>
import TextInput from '@/components/form/TextInput'
import TextareaInput from '@/components/form/TextareaInput'

export default {
  name: 'DialogEditPush',
  components: {
    TextInput, TextareaInput
  },
  props: {
    showDialog: { type: Boolean, required: true },
    editHookData: { type: Object, default: () => {} }
  },
  data() {
    // state, title, message, link, isEnable
    const fields = [
      {
        type: 'TextInput',
        name: 'id',
        value: '',
        label: 'id',
        placeholder: '',
        disabled: true,
        rules: [{ required: true, trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'state',
        value: '',
        label: '行程狀態',
        placeholder: '',
        disabled: true,
        rules: [{ required: true, message: '', trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'title',
        value: '',
        label: '推播標題',
        placeholder: '',
        maxlength: 20,
        rules: [{ required: false, message: '請填寫推播標題', trigger: 'blur' }]
      },
      {
        type: 'TextareaInput',
        name: 'message',
        value: '',
        label: '推播內容',
        placeholder: '請輸入網址',
        maxlength: 50,
        rules: [{ required: false, message: '請填寫推播內容', trigger: 'blur' }]
      }
    ]

    const hookData = fields.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const hookRules = fields.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    return {
      fields,
      hookRules,
      hookData
    }
  },
  mounted() {
    this.hookData = Object.assign({}, this.editHookData)
  },
  methods: {
    handleClose() {
      this.$emit('update:showDialog', false)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('update', this.hookData)
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
