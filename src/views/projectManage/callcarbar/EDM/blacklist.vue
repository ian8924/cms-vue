<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>黑名單管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button v-permission="['EDM-編輯者']" type="success" icon="el-icon-plus" round @click="openDialog('ADD')">新增黑名單</el-button>
          <el-button type="info" :icon="loadingIcon" round @click="reFreshList">刷新列表</el-button>
        </div>
      </div>
    </div>
    <div style="margin-bottom:20px;">
      <el-pagination
        background
        :page-sizes="[5, 10, 20, 40,tableData.length]"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="tableData.length"
        layout="total, sizes, prev, pager, next"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
    >
      <el-table-column
        label="id"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column
        label="信箱"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.mail }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="原因"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.failureReason }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="failureCode"
        sortable
        prop="failureCode"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.failureCode }}</span>
        </template>
      </el-table-column>
    </el-table>
    <DialogAddBlackList
      v-if="showAddDialog"
      :show-dialog="showAddDialog"
      @showAddDialog="closeDialog"
    />
  </div>
</template>

<script>
import email from '@/store/modules/callcarbar/EDM/email'
import DialogAddBlackList from '@/components/callcarbar/email/Dialog/DialogAddBlackList'

export default {
  components: {
    DialogAddBlackList
  },
  data() {
    return {
      showAddDialog: false,
      isloading: false,
      currentPage: 1, // 初始頁
      pagesize: 10 //    每頁的數據
    }
  },

  computed: {
    tableData() {
      return this.$store.state.EDM_email ? this.$store.state.EDM_email.black_List : []
    },
    loadingIcon: {
      get() {
        return this.isloading ? 'el-icon-loading' : 'el-icon-refresh'
      }
    }
  },
  mounted() {
    if (this.$store._modules.root._children.EDM_email === undefined) {
      this.$store.registerModule('EDM_email', email())
    }
    this.$store.dispatch('EDM_email/GET_BLACK_LIST')
    this.$store.dispatch('EDM_email/GET_FAILTURE_LIST')
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.EDM_email !== undefined) {
      this.$store.unregisterModule('EDM_email')
    }
  },
  methods: {
    closeDialog() {
      this.showAddDialog = false
    },
    async openDialog(method, groupID) {
      switch (method) {
        case 'ADD':
          this.showAddDialog = true
          break
      }
    },
    reFreshList() {
      this.isloading = true
      this.$store.dispatch('EDM_email/GET_BLACK_LIST').then((res) => {
        this.isloading = false
      })
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
