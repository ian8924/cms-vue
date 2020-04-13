<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>角色權限管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button v-permission="['角色編輯-編輯者']" type="success" icon="el-icon-plus" round @click="openDialog('add')">建立角色</el-button>
          <el-button type="info" round @click="refresh">刷新列表</el-button>
        </div>
      </div>
      <el-row style="display:flex; flex-wrap: wrap;">
        <el-col v-for="item in roleList" :key="item.id" style="width:300px; margin:10px;">
          <el-card
            class="box-card"
            style="background: rgb(121, 118, 118)"
            shadow="hover"
          >
            <div slot="header" style="display:flex; justify-content:space-between;">
              <h5 style="margin-left:20px ; color:white; font-weight:800">{{ item.id }}  </h5>
              <div v-permission="['角色編輯-編輯者']" style="margin:10px;">
                <el-button type="info" icon="el-icon-s-tools" circle @click="openDialog('edit',item)" />
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteRole(item)" />
              </div>
            </div>
            <div>
              <el-form label-position="left">
                <el-form-item label="角色名稱 : ">
                  {{ item.name }}
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <DialogMethodRole
      :show-dialog="showDialogMethodRole"
      :rights="rights"
      :role-i-d="roleID"
      :role-name="roleName"
      @showDialogMethodRole="closeDialog"
    />
  </div>
</template>

<script>
import permissionManage from '@/store/modules/permissionManage/permissionManage'
import DialogMethodRole from '@/components/Permission/DialogMethodRole'

export default {
  name: 'Role',
  components: {
    DialogMethodRole
  },
  data() {
    return {
      showDialogMethodRole: false,
      rights: [],
      roleID: 0,
      roleName: ''
    }
  },
  computed: {
    roleList() {
      return this.$store.state.permissionManage ? this.$store.state.permissionManage.roleList : []
    }
  },
  async mounted() {
    if (this.$store._modules.root._children.permissionManage === undefined) {
      this.$store.registerModule('permissionManage', permissionManage())
    }
    await this.$store.dispatch('permissionManage/GET_ROLES_LIST')
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
          this.rights = []
          this.showDialogMethodRole = true
          break
        case 'edit':
          this.roleID = item.id
          this.roleName = item.name
          await this.$store.dispatch('permissionManage/GET_ROLE_RIGHTS', this.roleID).then((res) => {
            this.rights = Object.assign([], res)
            this.showDialogMethodRole = true
          })
          this.showDialogMethodRole = true
          break
      }
    },
    closeDialog() {
      this.showDialogMethodRole = false
      this.$store.dispatch('permissionManage/GET_ROLES_LIST')
    },
    deleteRole(item) {
      this.$confirm(`確認刪除  ${item.name}？`)
        .then(_ => {
          this.$store.dispatch('permissionManage/DELETE_ROLE', item.id).then(() => {
            this.$store.dispatch('permissionManage/GET_ROLES_LIST')
          })
        })
        .catch(_ => {})
    },
    refresh() {
      this.$store.dispatch('permissionManage/GET_ROLES_LIST')
    }
  }
}
</script>

<style>
.el-card__header{
  padding: 0px;
}
.el-card__body{
  background: rgb(212, 209, 209)
}
</style>
