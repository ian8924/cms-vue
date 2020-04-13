<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>活動專案管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button v-permission="['EDM-編輯者']" type="success" icon="el-icon-plus" round @click="openAddDialog">新增活動</el-button>
          <el-button type="info" :icon="loadingIcon" round @click="reFreshList">刷新列表</el-button>
        </div>
      </div>
    </div>
    <!-- <SearchBar style="margin-bottom:20px;" /> -->
    <div style="margin-bottom:20px;">
      <el-pagination
        background
        :page-sizes="[5, 10, 20, 40,tableData.length]"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="tableData.length"
        layout="total, sizes, prev, pager, next, jumper"
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
        width="100"
      >
        <template slot-scope="scope">
          <h4 style="color:gray;">{{ scope.row.id }}</h4>
        </template>
      </el-table-column>
      <el-table-column
        label="campaignID"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.campaignID }}
        </template>
      </el-table-column>
      <el-table-column
        label="名稱"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        label="描述"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip v-permission="['EDM-編輯者']" class="item" effect="dark" content="編輯活動" placement="top-start">
            <el-button type="primary" icon="el-icon-edit" circle @click="openEditDialog(scope.row)" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="查看EDM" placement="top-start">
            <el-button type="info" icon="el-icon-thumb" circle @click="goEDMList(scope.row.id)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <DialogAddproject :show-dialog="showAddDialog" @showAddDialog="closeDialog" />
    <DialogEditproject
      :show-dialog="showEditDialog"
      :crrent-slect="crrentSlect"
      @showEditDialog="closeDialog"
    />
  </div>
</template>

<script>
import project from '@/store/modules/callcarbar/EDM/project'
import DialogAddproject from '@/components/callcarbar/project/Dialog/DialogAddproject'
import DialogEditproject from '@/components/callcarbar/project/Dialog/DialogEditproject'
export default {
  components: {
    DialogAddproject,
    DialogEditproject
  },
  data() {
    return {
      showAddDialog: false,
      showEditDialog: false,
      crrentSlect: {},
      isloading: false,
      currentPage: 1, // 初始頁
      pagesize: 10 //    每頁的數據
    }
  },
  computed: {
    tableData() {
      return this.$store.state.EDM_project ? this.$store.state.EDM_project.projectList : []
    },
    loadingIcon: {
      get() {
        return this.isloading ? 'el-icon-loading' : 'el-icon-refresh'
      }
    }
  },
  mounted() {
    if (this.$store._modules.root._children.EDM_project === undefined) {
      this.$store.registerModule('EDM_project', project())
    }
    this.$store.dispatch('EDM_project/GET_PROJECT_LIST')
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.EDM_project !== undefined) {
      this.$store.unregisterModule('EDM_project')
    }
  },
  methods: {
    closeDialog() {
      this.showAddDialog = false
      this.showEditDialog = false
    },
    openAddDialog() {
      this.showAddDialog = true
    },
    openEditDialog(row) {
      this.$store.dispatch('EDM_project/GET_PROJECT_CONTENT', row.id).then((res) => {
        if (res.campaignID) {
          this.crrentSlect.campaignID = res.campaignID
          this.crrentSlect.name = res.name
          this.crrentSlect.description = res.description
          this.crrentSlect.id = row.id
          this.showEditDialog = true
        } else {
          this.$message('查無此專案,請刷新列表')
        }
      })
    },
    reFreshList() {
      this.isloading = true
      this.$store.dispatch('EDM_project/GET_PROJECT_LIST').then((res) => {
        this.isloading = false
      })
    },
    goEDMList(id) {
      this.$router.push({ name: 'EDM列表', query: {
        id: id
      }})
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
