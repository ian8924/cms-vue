<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>已發行票券列表</h2>
        <div style="position:absolute;right:15%;">
          <el-radio v-model="searchType" label="訂單編號">訂單編號</el-radio>
          <el-radio v-model="searchType" label="票券名稱">票券名稱</el-radio>
          <el-autocomplete
            v-model="state"
            popper-class="my-autocomplete"
            :fetch-suggestions="querySearch"
            placeholder="請輸入..."
            style="margin-right:20px"
            @select="handleSelect"
          >
            <i
              slot="suffix"
              class="el-icon-search el-input__icon"
              @click="handleIconClick"
            />
            <template slot-scope="{ item }">
              <div class="id">{{ item.orderID }}</div>
              <span class="name">{{ item.localName }}</span>
            </template>
          </el-autocomplete>
          <el-button type="info" round @click="refreshList">刷新列表</el-button>
          <el-button type="info" round @click="openDialog">選擇日期</el-button>
        </div>
      </div>
      <h4 style="color:gray;">記錄每筆票券狀態</h4>
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
      <ButtonExcelDownload style="margin-right:15%;" :data-array="ticketsList" :filename="excelFilename" :key-array="excelkey" :t-name-array="excelTname" />
    </div>
    <el-table
      ref="filterTable"
      v-loading="loading"
      :data="ticketsList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 90%"
    >
      <el-table-column
        sortable
        label="訂單編號"
        style="color:gray;"
        prop="orderID"
        width="180"
      />

      <el-table-column
        sortable
        label="票券名稱"
        width="300"
        prop="localName"
      />
      <el-table-column
        sortable
        label="發行時間"
        style="color:gray;"
        width="ˋ400"
        prop="applyTime"
      />
      <el-table-column
        prop="checkCode"
        label="輸入檢查碼次數"
        :show-overflow-tooltip="true"
      />
      <el-table-column
        prop="failTimes"
        label="失敗次數"
        :show-overflow-tooltip="true"
      />
    </el-table>
    <DialogDateRange :show-dialog="showDialog" @changeDateRange="changeDateRange" @closeDialog="closeDialog" />
  </div>
</template>

<script>
import datalist from '@/store/modules/tickets/datalist'
import ButtonExcelDownload from '@/components/base/downloader/ButtonExcelDownload'
import DialogDateRange from './components/DialogDateRange'
export default {
  name: 'AllTicketsList',
  components: {
    ButtonExcelDownload,
    DialogDateRange
  },
  data() {
    return {
      currentPage: 1, // 初始頁
      pagesize: 10, //    每頁的數據
      state: '',
      loading: false,
      searchType: '訂單編號',
      // 列表資料
      total: [],
      sDate: '',
      eDate: '',
      // excel
      excelFilename: '已發行票券',
      excelTname: ['訂單編號', '票卡名稱', '發行時間', '輸入檢查碼次數', '失敗次數'],
      excelkey: ['orderID', 'localName', 'applyTime', 'checkCode', 'failTimes'],
      showDialog: false
    }
  },
  computed: {
    ticketsList() {
      // 搜尋控制
      if (this.state === '') {
        return this.total
      }
      // 依照訂單編號或名稱做篩選
      if (this.searchType === '訂單編號') {
        return this.total.filter((item, index, array) => {
          return item.orderID.indexOf(this.state) === 0
        })
      } else {
        return this.total.filter((item, index, array) => {
          return item.localName.indexOf(this.state) === 0
        })
      }
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
      this.total = await this.$store.dispatch('datalist/GET_ALL_TICKETS', request)
      this.loading = false
    },
    handleSizeChange(val) {
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    querySearch(queryString, cb) {
      this.currentPage = 1
      var tickets = this.total
      var results = queryString ? tickets.filter(this.createFilter(queryString)) : tickets
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      if (this.searchType === '訂單編號') {
        return (tickets) => {
          return (tickets.orderID.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      } else {
        return (tickets) => {
          return (tickets.localName.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      }
    },
    handleSelect(item) {
      if (this.searchType === '訂單編號') {
        this.state = item.orderID
      } else {
        this.state = item.localName
      }
    },
    handleIconClick(ev) {
      console.log('b')
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
      this.total = await this.$store.dispatch('datalist/GET_ALL_TICKETS', request)
      this.loading = false
    },
    closeDialog() {
      this.showDialog = false
    }
  }
}
</script>

<style  scoped>
.id {
      text-overflow: ellipsis;
      overflow: hidden;
    }
.name {
      font-size: 12px;
      color: #b4b4b4;
    }
.highlighted .name {
      color: #ddd;
    }
</style>
