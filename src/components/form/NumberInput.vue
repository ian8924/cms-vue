<template>
  <el-form-item :label="label" :prop="name">
    <el-input-number v-model="observeValue" :name="name" :placeholder="placeholder" controls-position="right" />
    <span class="notice-grey">{{ message }}</span>
  </el-form-item>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    value: { type: Number, default: 0 },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    message: { type: String, default: () => '' }
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
