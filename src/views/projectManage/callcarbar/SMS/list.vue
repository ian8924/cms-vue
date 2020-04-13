<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>已發送簡訊</h2>
        <div style="position:absolute;right:15%;">
          <el-button type="info" round @click="refreshList">刷新列表</el-button>
        </div>
      </div>
    </div>
    <div style="margin-bottom:20px;">
      <el-pagination
        background
        :page-sizes="[5, 10, 20, 50, 100,SMSList.length]"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="SMSList.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-table
      ref="filterTable"
      :data="SMSList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 90%"
    >
      <el-table-column
        label="索引"
        style="color:gray;"
        type="index"
        width="180"
      />
      <el-table-column
        sortable
        label="簡訊內容"
        style="color:gray;"
        width="ˋ400"
        prop="message"
      />
      <el-table-column
        sortable
        label="手機號碼"
        width="300"
        prop="mobile"
      />
      <el-table-column
        sortable
        prop="updateTime"
        label="發送時間"
        :show-overflow-tooltip="true"
      />
    </el-table>
  </div>
</template>

<script>
import SMS from '@/store/modules/callcarbar/SMS/index'
export default {
  name: 'SMSList',
  data() {
    return {
      currentPage: 1, // 初始頁
      pagesize: 20 //    每頁的數據
    }
  },
  computed: {
    SMSList() {
      return this.$store.state.SMS ? this.$store.state.SMS.SMSList : []
    }
  },
  async mounted() {
    if (this.$store._modules.root._children.SMS === undefined) {
      this.$store.registerModule('SMS', SMS())
    }
    await this.$store.dispatch('SMS/GET_SMS_LIST')
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.SMS !== undefined) {
      this.$store.unregisterModule('SMS')
    }
  },
  methods: {
    refreshList() {
      this.$store.dispatch('SMS/GET_SMS_LIST')
    },
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>
