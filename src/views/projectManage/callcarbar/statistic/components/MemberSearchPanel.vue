<template>
  <div>
    <el-form :inline="false">
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
      <el-form-item>
        <el-button v-loading="loading" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
          搜尋
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DatePicker from '@/components/form/DatePicker'
import SelectInput from '@/components/form/SelectInput'
import Checkbox from '@/components/form/Checkbox'

/**
 * @name getDefaultDate
 * @description 取得預設時間 N 天前的日期字串
 * @param {string} before
 * @returns {string}
 */
function getDefaultDate(before = 90, format = 'yyyy-MM-dd') {
  const default_ = new Date()
  default_.setDate(default_.getDate() - before)
  //   console.log('data -> default_', default_.getFullYear(), default_.getMonth() + 1, default_.getDate())
  const [yy, MM, dd] = [default_.getFullYear(), default_.getMonth() + 1, default_.getDate()]
  return format.replace(/yyyy/, yy).replace(/MM/, (MM > 9 ? '' : '0') + MM).replace(/dd/, (dd > 9 ? '' : '0') + dd)
}

export default {
  name: 'MemberSearchPanel',
  components: { DatePicker, SelectInput, Checkbox },
  data() {
    const fields = [
      {
        type: 'DatePicker',
        name: 'startDate',
        value: getDefaultDate(365),
        label: '起始時間'
      },
      {
        type: 'DatePicker',
        name: 'endDate',
        value: getDefaultDate(0),
        label: '結束時間'
      },
      {
        type: 'SelectInput',
        name: 'condition',
        value: 'activeTime',
        label: '過濾方式',
        placeholder: '',
        options: [
          { name: '活躍時間', value: 'activeTime' },
          { name: '註冊時間', value: 'registrationTime' }

        ],
        rules: [{ required: true, message: '請選擇推播類型', trigger: 'blur' }]
      },
      {
        type: 'Checkbox',
        name: 'columns',
        value: ['name', 'mail', 'mobile'],
        label: '欄位',
        placeholder: '',
        options: [
          { name: '姓名', value: 'name' },
          { name: 'E-mail', value: 'mail' },
          { name: '手機', value: 'mobile' }
        ],
        rules: [{ required: true, message: '請選擇推播類型', trigger: 'blur' }]
      }
    ]
    return {
      fields
    }
  },
  computed: {
    submitValue() {
      const data = this.fields.reduce((values, field) => {
        values[field.name] = field.value
        return values
      }, {})
      return data
    },
    ...mapGetters('statistic', {
      'loading': 'IS_LOADING'
    })
  },
  methods: {
    handleFilter() {
      if (this.submitValue.columns.length === 0) {
        this.$message.error('請選擇欄位')
        return
      }
      this.$emit('search', this.submitValue)
    }
  }
}
</script>

<style>

</style>
