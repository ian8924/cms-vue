<template>
  <el-dialog
    v-loading="loading"
    :title="'測試行程推播'"
    :visible="true"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form
      ref="ruleForm"
      :model="testData"
      label-position="left"
      label-width="15%"
      :rules="hookRules"
      style="width: 80%; margin-left:5%;"
    >
      <component
        :is="field.type"
        v-for="field in fields"
        :key="field.name"
        v-model="testData[field.name]"
        :placeholder="field.placeholder"
        :name="field.name"
        :label="field.label"
        :disabled="field.disabled"
        :options="field.options"
        :maxlength="field.maxlength"
      />
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >發送</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import TextInput from '@/components/form/TextInput'
const MODULE_NAME = 'AppSettings'

export default {
  name: 'DialogTestHookNotification',
  components: { TextInput },
  props: {
    showDialog: { type: Boolean, required: true }
  },
  data() {
    /**
     * driverAssigned 司機已指派
     * driverSetOff 司機已出發
     * driverArrive 司機已抵達上車地
     * customerOnBoard 行程開始
     * serviceComplete 行程結束
     * driverReassigned 司機被更改
     * orderCancel 訂單取消
     */
    /**
     * 推播資訊 只需填寫orderID, mobile, driverName, driverMobile
     * {
     *  "driverMobile": "string",
     *  "driverName": "string",
     *  "mobile": "string",
     *  "orderID": "string",
     *}
     */
    const fields = [
      {
        type: 'TextInput',
        name: 'mobile',
        value: process.env.VUE_APP_RESERVATION_TESTER_MOBILE || '',
        label: '測試帳號',
        placeholder: '請填寫測試帳號手機號碼',
        rules: [{ required: true, message: '請填寫測試帳號手機號碼', trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'orderID',
        value: '',
        label: '訂單編號',
        placeholder: '請填寫訂單編號',
        rules: [{ required: true, message: '請填寫訂單編號', trigger: 'blur' }]
      },
      {
        type: 'TextInput',
        name: 'driverName',
        value: '',
        label: '司機名稱',
        placeholder: '請填寫司機名稱'
      },
      {
        type: 'TextInput',
        name: 'driverMobile',
        value: '',
        label: '司機電話',
        placeholder: '請填寫司機電話'
      }
    ]
    const testData = fields.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const hookRules = fields.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    return {
      fields,
      testData,
      hookRules
    }
  },
  computed: {
    ...mapGetters(MODULE_NAME, {
      loading: 'IS_LOADING'
    })
  },
  methods: {
    handleClose() {
      this.$emit('update:showDialog', false)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('sendTestNotification', this.testData)
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

<style></style>
