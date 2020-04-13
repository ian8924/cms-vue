<template>
  <el-form-item :label="label" :prop="name">
    <el-input
      v-model="observeValue"
      type="text"
      :name="name"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :disabled="disabled"
    />
    <span class="notice-grey">{{ messageMaxlength }}</span>
  </el-form-item>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    value: { type: [String, Number], required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
    message: { type: String, default: () => '' },
    maxlength: { type: [Number, String], default: '' },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    observeValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    messageMaxlength() {
      if (this.maxlength > 0) {
        return `${this.message ? this.message + ', ' : ''}字數限制：${
          this.observeValue.length
        }/${this.maxlength}`
      }
      return this.message
    }
  }
}
</script>

<style></style>
