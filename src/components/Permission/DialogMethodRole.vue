<template>
  <el-dialog
    :title="title"
    :direction="'btt'"
    :visible.sync="showDialog2"
    :width="'800px'"
  >
    <el-form label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-form-item label="角色名稱">
        <el-input v-model="roleNameEdit" type="text" maxlength="50" :disabled="title==='編輯角色'" />
      </el-form-item>
      <div v-if="title==='編輯角色'">
        <el-form-item v-for="(item,index) in rightsEdit" :key="index" :label="item.service">
          <el-radio v-model="item.right" label="無" border size="medium" @change="changePermission(index)">無</el-radio>
          <el-radio v-model="item.right" label="編輯者" border size="medium" @change="changePermission(index)">編輯者</el-radio>
          <el-radio v-model="item.right" label="查看者" border size="medium" @change="changePermission(index)">查看者</el-radio>
        </el-form-item>
      </div>
      <el-button v-if="title==='新增角色'" @click="insertRole">新增</el-button>
    </el-form>
  </el-dialog>
</template>

<script>

export default {
  name: 'DialogMethodRole',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    rights: {
      type: Array,
      required: true
    },
    roleID: {
      type: Number,
      default: 0
    },
    roleName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: '',
      roleNameEdit: '',
      rightsEdit: [],
      showDialog2: false
    }
  },

  watch: {
    showDialog(val) {
      this.showDialog2 = val
    },
    showDialog2(val) {
      if (val === false) {
        this.$emit('showDialogMethodRole', false)
      } else {
        // 判斷是新增或編輯
        if (this.rights.length === 0) {
          this.title = '新增角色'
          this.roleNameEdit = ''
        } else {
          this.title = '編輯角色'
          this.rightsEdit = this.rights
          this.roleNameEdit = this.roleName
        }
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$emit('showDialogMethodRole', false)
    },
    changePermission(index) {
      this.rightsEdit[index].name = this.roleNameEdit
      const request = {
        roleID: this.roleID,
        data: this.rightsEdit[index]
      }
      // console.log(this.rightsEdit[index])
      this.$store.dispatch('permissionManage/EDIT_ROLE_RIGHT', request)
    },
    async insertRole() {
      if (this.roleNameEdit) {
        await this.$store.dispatch('permissionManage/ADD_ROLES', { name: this.roleNameEdit })
      }
      this.$emit('showDialogMethodRole', false)
    }
  }
}
</script>
<style scoped>
.notice-grey{
  color: grey;
  font-size: 8px;
}
</style>
