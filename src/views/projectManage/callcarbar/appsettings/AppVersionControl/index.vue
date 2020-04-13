<template>
  <div style="padding:30px">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>設定</h2>
      </div>
    </div>

    <el-form
      ref="ruleForm"
      v-loading="loading"
      label-position="left"
      label-width="30%"
      style="width: 40%; margin-left:5%;"
    >
      <el-form-item :label="platform.label" placement="top">
        <el-switch
          ref="platformSwitch"
          v-model="platform.value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-text="platform.activeText"
          :inactive-text="platform.inactiveText"
          :active-value="platform.activeValue"
          :inactive-value="platform.inactiveValue"
          @change="switchHandler"
        />
      </el-form-item>
      <component
        :is="field.type"
        v-for="field in fields"
        :key="field.name"
        v-model="field.value"
        :placeholder="field.placeholder"
        :name="field.name"
        :label="field.label"
        :disabled="field.disabled"
        :options="field.options"
        :maxlength="field.maxlength"
      />
      <el-button
        v-loading="loading"
        type="success"
        icon="el-icon-refresh"
        round
        @click="updateSettingAppVersion"
      >更新設定</el-button>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TextInput from '@/components/form/TextInput'
import Checkbox from '@/components/form/Checkbox'

const MODULE_NAME = 'AppSettings'

export default {
  name: 'AppVersionControl',
  components: {
    TextInput,
    Checkbox
  },
  data() {
    const platform = {
      activeValue: 'android',
      inactiveValue: 'ios',
      activeText: 'Android',
      inactiveText: 'iOS',
      name: 'deviceOS',
      label: '切換平台',
      value: 'ios'
    }
    const fields = [
      {
        type: 'TextInput',
        name: 'version',
        value: '',
        label: '版本號',
        placeholder: '請輸入版本號',
        rules: [{ required: true, message: '請輸入版本號', trigger: 'blur' }]
      },
      {
        type: 'Checkbox',
        name: 'forcedUpdate',
        value: [],
        label: '是否強制更新',
        placeholder: '',
        options: [
          { name: '', value: true }
        ],
        rules: [{ required: true, message: '請選擇推播類型', trigger: 'blur' }]
      }
    ]
    return {
      fields,
      platform,
      notificationList: [],
      isRefresh: false,
      showDialog: false,
      isAddNotification: false,
      editNotificationData: {}
    }
  },
  computed: {
    settingData: {

      get() {
        // exmaple = {
        //   'deviceOS': 'ios/android',
        //   'forcedUpdate': true,
        //   'version': 'string'
        // }
        const data = {}
        data[this.platform.name] = this.platform.value
        this.fields.forEach(field => {
          if (field.name === 'forcedUpdate') {
            data[field.name] = field.value.length > 0
          } else {
            data[field.name] = field.value
          }
        })
        return data
      },
      set(value) {
        this.fields.forEach(field => {
          if (value[field.name] === undefined) {
            return
          }
          if (field.name === 'forcedUpdate') {
            value[field.name] ? (field.value = [true]) : (field.value = [])
          } else {
            field.value = value[field.name]
          }
        })
      }

    },
    ...mapGetters(MODULE_NAME, {
      'loading': 'IS_LOADING'
    })
  },
  created() {
    this.getSettingAppVersion()
  },
  methods: {
    switchHandler(e) {
      this.getSettingAppVersion()
    },
    async getSettingAppVersion() {
      const { deviceOS } = this.settingData
      const setting = await this.$store.dispatch(`${MODULE_NAME}/GET_APP_VERSION`, { deviceOS })
      if (setting) {
        this.settingData = setting
      }
    },
    async updateSettingAppVersion() {
      const isSuccess = await this.$store.dispatch(`${MODULE_NAME}/UPDATE_APP_VERSION`, this.settingData)
      if (!isSuccess) {
        this.$message.error('更新失敗！')
      } else {
        this.$message.success('更新成功！')
      }
    }
  }
}
</script>

<style scoped>
.el-icon-success{
  color: green;
  font-size: 25px;
}
.el-icon-error{
  color: rgb(206, 85, 85);
  font-size: 25px;
}
</style>
