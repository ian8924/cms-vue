<template>
  <el-form-item :label="label" :prop="name">
    <el-select v-model="observeValue" :name="name" :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.name"
        :label="item.name"
        :value="item.value"
      />
    </el-select>

  </el-form-item>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    message: { type: String, default: () => '' },
    options: { type: Array, required: true }
  },
  computed: {
    observeValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style>

</style>
