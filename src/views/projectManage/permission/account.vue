<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>用戶帳號管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button v-permission="['用戶編輯-編輯者']" type="success" icon="el-icon-plus" round @click="openDialog('add')">新增帳號</el-button>
          <el-button type="info" round @click="refreshList">刷新列表</el-button>
        </div>
      </div>
    </div>
    <el-table
      :data="accountList"
      style="width: 100%"
    >
      <el-table-column
        label="id"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.ID }}
        </template>
      </el-table-column>

      <el-table-column
        label="帳號"
        width="300"
      >
        <template slot-scope="scope">
          <span style="color:gray;">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="角色"
        width="300"
      >
        <template slot-scope="scope">
          {{ scope.row.Role }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="checkPermission(['用戶編輯-編輯者'])"
        label="操作"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="刪除帳戶" placement="top-start">
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteAccount(scope.row.ID)" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="編輯角色" placement="top-start">
            <el-button type="info" icon="el-icon-tickets" circle @click="openDialog('edit',scope.row)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <DialogMethodAccount :show-dialog="showDialogMethodAccount" :role="role" :role-list="roleList" :user-i-d="userID" @showDialogMethodAccount="closeDialog" />
  </div>
</template>

<script>
import checkPermission from '@/utils/permission' // 权限判断函数
import permissionManage from '@/store/modules/permissionManage/permissionManage'
import DialogMethodAccount from '@/components/Permission/DialogMethodAccount'
export default {
  name: 'Account',
  components: {
    DialogMethodAccount
  },
  data() {
    return {
      showDialogMethodAccount: false,
      role: {},
      userID: 0
    }
  },
  computed: {
    accountList() {
      return this.$store.state.permissionManage ? this.$store.state.permissionManage.accountList : []
    },
    roleList() {
      return this.$store.state.permissionManage ? this.$store.state.permissionManage.roleList : []
    }
  },
  async mounted() {
    if (this.$store._modules.root._children.permissionManage === undefined) {
      this.$store.registerModule('permissionManage', permissionManage())
    }
    await this.$store.dispatch('permissionManage/GET_ACCOUNT_LIST')
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.permissionManage !== undefined) {
      this.$store.unregisterModule('permissionManage')
    }
  },
  methods: {
    async openDialog(method, item) {
      switch (method) {
        case 'add' :
          await this.$store.dispatch('permissionManage/GET_ROLES_LIST').then(() => {
            this.showDialogMethodAccount = true
            this.role = {}
          })
            .catch(err => { console.log(err) })
          break
        case 'edit':
          this.userID = item.ID
          try {
            await this.$store.dispatch('permissionManage/GET_ROLES_LIST')
            await this.$store.dispatch('permissionManage/GET_ACCOUNT_ROLE', item.ID).then(res => {
              this.role = Object.assign({}, res)
              this.showDialogMethodAccount = true
            })
          } catch {
            this.showDialogMethodAccount = false
          }
          break
      }
    },
    closeDialog() {
      this.showDialogMethodAccount = false
      this.$store.dispatch('permissionManage/GET_ACCOUNT_LIST')
    },
    deleteAccount(ID) {
      this.$confirm(`確認刪除 ${ID}？`)
        .then(_ => {
          this.$store.dispatch('permissionManage/DELETE_ACCOUNT', ID).then(() => {
            this.$store.dispatch('permissionManage/GET_ACCOUNT_LIST')
          })
        })
        .catch(_ => {})
    },
    refreshList() {
      this.$store.dispatch('permissionManage/GET_ACCOUNT_LIST')
    },
    checkPermission
  }
}
</script>
