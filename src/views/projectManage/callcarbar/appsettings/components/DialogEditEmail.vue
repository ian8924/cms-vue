<template>
  <el-dialog
    :title="title"
    :visible="true"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form
      ref="ruleForm"
      :model="hookData"
      label-position="left"
      label-width="25%"
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
  </el-dialog>
</template>

<script>
import TextInput from '@/components/form/TextInput'

export default {
  name: 'DialogEditEmail',
  components: {
    TextInput
  },
  props: {
    showDialog: { type: Boolean, required: true },
    editHookData: { type: Object, default: () => {} }
  },
  data() {
    const fields = [
      {
        type: 'TextInput',
        name: 'redirectURL',
        value: '',
        label: '評分返回連結',
        placeholder: ''
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
      hookData,
      hookRules
    }
  },
  computed: {
    title() {
      return `編輯Email服務 - ${this.hookData.title}`
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
