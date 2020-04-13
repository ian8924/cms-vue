<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>已核銷票券列表</h2>
        <div style="position:absolute;right:15%;font-size:10px;">
          <el-select v-model="searchType" placeholder="请选择">
            <el-option
              v-for="item in searchOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
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
              <div v-if="searchType==='訂單編號'" class="id">{{ item.orderID }}</div>
              <div v-else-if="searchType==='兌換序號'" class="id">{{ item.checkCode }}</div>
              <div v-else-if="searchType==='兌換店家'" class="id">{{ item.exchangeStore }}</div>
              <div v-else-if="searchType==='店家代號'" class="id">{{ item.storeStamp }}</div>
              <div v-if="searchType!=='訂單編號'" class="name">{{ item.orderID }}</div>
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
        width="150"
      />
      <el-table-column
        sortable
        label="兌換序號"
        style="color:gray;"
        prop="checkCode"
        width="150"
      />
      <el-table-column
        sortable
        label="票券名稱"
        width="200"
        prop="itemName"
      />
      <el-table-column
        sortable
        label="店家代號"
        width="100"
        prop="storeStamp"
      />
      <el-table-column
        sortable
        label="兌換店家"
        width="180"
        prop="exchangeStore"
      />
      <el-table-column
        sortable
        label="兌換日期"
        style="color:gray;"
        width="100"
        prop="exchangeDate"
      />
      <el-table-column
        sortable
        label="兌換時間"
        style="color:gray;"
        width="100"
        prop="exchangeTime"
      />
      <el-table-column
        prop="walletDuration"
        label="票券有效期間"
        width="200"
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
  name: 'WrittenOffTickets',
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
      searchOptions: [{
        value: '訂單編號',
        label: '訂單編號'
      }, {
        value: '兌換序號',
        label: '兌換序號'
      }, {
        value: '兌換店家',
        label: '兌換店家'
      }, {
        value: '店家代號',
        label: '店家代號'
      }],
      // 列表資料
      total: [],
      sDate: '',
      eDate: '',
      // excel
      excelFilename: '已核銷票券',
      excelTname: ['訂單編號', '兌換序號', '票券名稱', '店家代號', '兌換店家', '兌換日期', '兌換時間', '票券有效期間'],
      excelkey: ['orderID', 'checkCode', 'itemName', 'storeStamp', 'exchangeStore', 'exchangeDate', 'exchangeTime', 'walletDuration'],
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
      } else if (this.searchType === '兌換序號') {
        return this.total.filter((item, index, array) => {
          return item.checkCode.indexOf(this.state) === 0
        })
      } else if (this.searchType === '兌換店家') {
        return this.total.filter((item, index, array) => {
          return item.exchangeStore.indexOf(this.state) === 0
        })
      } else {
        return this.total.filter((item, index, array) => {
          return item.storeStamp.indexOf(this.state) === 0
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
      this.total = await this.$store.dispatch('datalist/GET_TICKETS_WRITTENOFF', request)
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
      } else if (this.searchType === '兌換序號') {
        return (tickets) => {
          return (tickets.checkCode.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      } else if (this.searchType === '兌換店家') {
        return (tickets) => {
          return (tickets.exchangeStore.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      } else if (this.searchType === '店家代號') {
        return (tickets) => {
          return (tickets.storeStamp.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      }
    },
    handleSelect(item) {
      if (this.searchType === '訂單編號') {
        this.state = item.orderID
      } else if (this.searchType === '兌換序號') {
        this.state = item.checkCode
      } else if (this.searchType === '兌換店家') {
        this.state = item.exchangeStore
      } else if (this.searchType === '店家代號') {
        this.state = item.storeStamp
      }
    },
    handleIconClick(ev) {
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
      this.total = await this.$store.dispatch('datalist/GET_TICKETS_WRITTENOFF', request)
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
