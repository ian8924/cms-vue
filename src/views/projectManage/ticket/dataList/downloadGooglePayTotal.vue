<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>發行票卡總數統計</h2>
        <div style="position:absolute;right:15%;">
          <el-button type="info" round @click="refreshList">刷新列表</el-button>
          <el-button type="info" round @click="openDialog">選擇日期</el-button>
        </div>
      </div>
      <h4 style="color:gray;">所選擇時間區間內"GooglePay票卡被下載"的總數統計 </h4>
    </div>
    <div style="margin-bottom:20px; display:flex;  justify-content:space-between;">
      <el-pagination
        background
        :page-sizes="[10, 100, 400, 1000,ticketsList.length]"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="ticketsList.length"
        layout="total, sizes, prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-table
      ref="filterTable"
      v-loading="loading"
      :data="ticketsList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 90%"
    >

      <el-table-column
        sortable
        label="票券名稱"
        width="300"
        prop="name"
      />

      <el-table-column
        prop="count"
        label="總數"
        :show-overflow-tooltip="true"
      />
    </el-table>
    <DialogDateRange :show-dialog="showDialog" @changeDateRange="changeDateRange" @closeDialog="closeDialog" />
  </div>
</template>

<script>
import datalist from '@/store/modules/tickets/datalist'
import DialogDateRange from './components/DialogDateRange'
export default {
  name: 'DownloadGooglePayTotal',
  components: {
    DialogDateRange
  },
  data() {
    return {
      currentPage: 1, // 初始頁
      pagesize: 10, //    每頁的數據
      state: '',
      loading: false,
      // 列表資料
      total: [],
      sDate: '',
      eDate: '',
      showDialog: false
    }
  },
  computed: {
    ticketsList() {
      // 搜尋控制
      return this.total
    }
  },
  async mounted() {
    if (this.$store._modules.root._children.datalist === undefined) {
      this.$store.registerModule('datalist', datalist())
    }
    this.showDialog = true
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.datalist !== undefined) {
      this.$store.unregisterModule('datalist')
    }
  },
  methods: {
    async refreshList() {
      this.loading = true
      const request = {
        sDate: this.sDate,
        eDate: this.eDate
      }
      this.total = await this.$store.dispatch('datalist/GET_TICKETS_GOOGLEPAY_DOWNLOAD', request)
      this.loading = false
    },
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    openDialog() {
      this.showDialog = true
    },
    async changeDateRange(val) {
      this.loading = true
      this.showDialog = false
      this.sDate = val[0]
      this.eDate = val[1]
      const request = {
        sDate: this.sDate,
        eDate: this.eDate
      }
      this.total = await this.$store.dispatch('datalist/GET_TICKETS_GOOGLEPAY_DOWNLOAD', request)
      this.loading = false
    },
    closeDialog() {
      this.showDialog = false
    }
  }
}
</script>
