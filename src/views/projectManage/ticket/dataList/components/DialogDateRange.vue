<template>
  <el-dialog
    title="選擇日期"
    :visible="showDialog"
    :before-close="handleClose"
    :width="'600px'"
    :show-close="false"
  >
    <el-form ref="myEdit" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-date-picker
        v-model="dateValue"
        value-format="yyyy-MM-dd"
        style="width:100%"
        type="daterange"
        range-separator="至"
        start-placeholder="開始日期"
        end-placeholder="結束日期"
      />
      <el-button style="margin-top:30px;" type="info" @click="check">確定</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dateValue: []
    }
  },
  methods: {
    check() {
      if (this.dateValue && this.dateValue.length === 2) {
        this.$emit('changeDateRange', this.dateValue)
      } else {
        return
      }
    },
    handleClose(done) {
      this.$emit('closeDialog', false)
      done()
    }
  }
}
</script>

<style>

</style>
