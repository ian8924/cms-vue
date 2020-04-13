<template>
  <el-form-item :label="label" :prop="name">
    <el-date-picker
      v-model="observeDate"
      type="date"
      :value-format="dateFormat"
      :clearable="false"
    />
    <el-time-picker
      v-model="observeTime"
      :value-format="timeFormat"
      :clearable="false"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'DatetimePicker',
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    message: { type: String, default: () => '' },
    dateFormat: { type: String, default: 'yyyy-MM-dd' },
    timeFormat: { type: String, default: 'HH:mm:ss' }
  },
  computed: {
    observeDate: {
      get() {
        const [date] = this.value.split(' ')
        // if (!date) {
        //   const now = new Date()
        //   const [yy, mm, dd] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
        //   date = this.dateFormat.replace(/yyyy/, yy).replace(/MM/, mm).replace(/dd/, dd)
        // }
        return date || ''
      },
      set(value) {
        this.$emit('input', `${value} ${this.observeTime}`)
      }
    },
    observeTime: {
      get() {
        const [, time] = this.value.split(' ')
        // if (!time) {
        //   time = new Date().toTimeString()
        // }
        return time || ''
      },
      set(value) {
        this.$emit('input', `${this.observeDate} ${value}`)
      }
    }
  },
  mounted() {
    this.initValue()
  },
  methods: {
    initValue() {
      const now = new Date()
      let defaultDate, defaultTime
      if (!this.observeTime) {
        const [HH, mm, ss] = [now.getHours(), now.getMinutes(), now.getSeconds()]
        defaultTime = this.timeFormat.replace(/HH/, (HH > 9 ? '' : '0') + HH).replace(/mm/, (mm > 9 ? '' : '0') + mm).replace(/ss/, (ss > 9 ? '' : '0') + ss)
      } else {
        defaultTime = this.observeTime
      }
      if (!this.observeDate) {
        const [yy, MM, dd] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
        defaultDate = this.dateFormat.replace(/yyyy/, yy).replace(/MM/, (MM > 9 ? '' : '0') + MM).replace(/dd/, (dd > 9 ? '' : '0') + dd)
      } else {
        defaultDate = this.observeDate
      }
      this.$emit('input', `${defaultDate} ${defaultTime}`)
    }
  }
}
</script>

<style>

</style>
