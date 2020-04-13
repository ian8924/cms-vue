<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>Email 名單管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button v-permission="['EDM-編輯者']" type="success" icon="el-icon-plus" round @click="openDialog('ADD')">新增群組</el-button>
          <el-button type="info" :icon="loadingIcon" round @click="reFreshList">刷新列表</el-button>
        </div>
      </div>
    </div>
    <el-table
      :data="tableData"
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
        label="群組名稱"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.groupName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip v-permission="['EDM-編輯者']" class="item" effect="dark" content="刪除" placement="top-start">
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteGroup(scope.row.id,scope.row.groupName)" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="查看名單" placement="top-start">
            <el-button type="info" icon="el-icon-tickets" circle @click="openDialog('CHECK',scope.row.id)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <DialogNameList
      :email-namelist="emailNamelist"
      :show-dialog="showCheckDialog"
      @showNamelistDialog="closeDialog"
    />
    <DialogAddEmailGroup
      v-if="showAddDialog"
      :show-dialog="showAddDialog"
      @showAddDialog="closeDialog"
    />
  </div>
</template>

<script>
import email from '@/store/modules/callcarbar/EDM/email'
import DialogNameList from '@/components/callcarbar/email/Dialog/DialogNameList'
import DialogAddEmailGroup from '@/components/callcarbar/email/Dialog/DialogAddEmailGroup'

export default {
  components: {
    DialogNameList,
    DialogAddEmailGroup
  },
  data() {
    return {
      showAddDialog: false,
      showCheckDialog: false,
      emailNamelist: [],
      isloading: false
    }
  },
  computed: {
    tableData() {
      return this.$store.state.EDM_email ? this.$store.state.EDM_email.Email_Groups_List : []
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
    this.$store.dispatch('EDM_email/GET_EMAIL_GROUP')
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.EDM_email !== undefined) {
      this.$store.unregisterModule('EDM_email')
    }
  },
  methods: {
    closeDialog() {
      this.showCheckDialog = false
      this.showAddDialog = false
    },
    async openDialog(method, groupID) {
      switch (method) {
        case 'CHECK':
          this.emailNamelist = await this.$store.dispatch('EDM_email/GET_EMAIL_NAMELIST_CONTENT', groupID)
          this.showCheckDialog = true
          break
        case 'ADD':
          this.showAddDialog = true
          break
      }
    },
    reFreshList() {
      this.isloading = true
      this.$store.dispatch('EDM_email/GET_EMAIL_GROUP').then((res) => {
        this.isloading = false
      })
    },
    async deleteGroup(id, groupName) {
      this.$confirm(`確認刪除  ${groupName}？`)
        .then(_ => {
          this.$store.dispatch('EDM_email/DELETE_EMAIL_NAMELIST', id).then(() => {
            this.$store.dispatch('EDM_email/GET_EMAIL_GROUP')
          })
        })
        .catch(_ => {})
    }
  }
}
</script>
