<template>
  <el-form-item :label="label" :prop="name">
    <el-date-picker
      v-model="observeDate"
      type="date"
      :value-format="dateFormat"
      :clearable="false"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    message: { type: String, default: () => '' },
    dateFormat: { type: String, default: 'yyyy-MM-dd' }
  },
  computed: {
    observeDate: {
      get() {
        // const [date] = this.value.split(' ')
        // if (!date) {
        //   const now = new Date()
        //   const [yy, mm, dd] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
        //   date = this.dateFormat.replace(/yyyy/, yy).replace(/MM/, mm).replace(/dd/, dd)
        // }
        return this.value || ''
      },
      set(value) {
        this.$emit('input', `${value}`)
      }
    }
  },
  mounted() {
    this.initValue()
  },
  methods: {
    initValue() {
      const now = new Date()
      let defaultDate
      if (!this.observeDate) {
        const [yy, MM, dd] = [now.getFullYear(), now.getMonth() + 1, now.getDate()]
        defaultDate = this.dateFormat.replace(/yyyy/, yy).replace(/MM/, (MM > 9 ? '' : '0') + MM).replace(/dd/, (dd > 9 ? '' : '0') + dd)
      } else {
        defaultDate = this.observeDate
      }
      this.$emit('input', `${defaultDate}`)
    }
  }
}
</script>

<style>

</style>
