<template>
  <el-form-item :label="label" :prop="name">
    <el-checkbox-group v-model="observeValue" :name="name" :placeholder="placeholder">
      <el-checkbox
        v-for="item in options"
        :key="item.name"
        :label="item.name"
        :value="item.value"
      />
    </el-checkbox-group>

  </el-form-item>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    value: { type: Array, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    message: { type: String, default: () => '' },
    options: { type: Array, required: true }
  },
  computed: {
    /**
     * @description 轉換 option value to name 的物件
     */
    optionsObjValue2Name() {
      return this.options.reduce((optObj, opt) => {
        optObj[opt.value] = opt.name
        return optObj
      }, {})
    },
    /**
     * @description 轉換 option name to value 的物件
     */
    optionsObjName2Value() {
      return this.options.reduce((optObj, opt) => {
        optObj[opt.name] = opt.value
        return optObj
      }, {})
    },
    observeValue: {
      get() {
        const res = this.value.map(val => {
          return this.optionsObjValue2Name[val]
        })
        return res
      },
      set(value) {
        value = value.map(val => this.optionsObjName2Value[val])
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style>

</style>
