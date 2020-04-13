<template>
  <el-dialog
    :title="title"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'80%'"
  >
    <el-form label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-form-item v-if="title ==='新增帳戶'" label="帳號">
        <el-input v-model="account" placeholder="僅限輸入英文" />
      </el-form-item>
      <el-form-item v-if="title ==='新增帳戶'" label="密碼">
        <el-input v-model="password" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="roleID" placeholder="請選擇" style="width:100%">
          <el-option
            v-if="title ==='新增帳戶'"
            :key="0"
            label="選擇角色"
            :value="0"
          />
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-button @click="save">儲存</el-button>
    </el-form>
  </el-dialog>
</template>

<script>

export default {
  name: 'DialogMethodAccount',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    role: {
      type: Object,
      required: true
    },
    userID: {
      type: Number,
      default: 0
    },
    roleList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      roleID: 0,
      title: '',
      account: '',
      password: ''
    }
  },
  computed: {
    options() {
      return this.roleList.length !== 0 ? this.roleList : []
    }
  },
  watch: {
    showDialog(val) {
      if (val === true) {
        if (this.role.id) {
          this.title = '編輯帳戶角色'
          this.roleID = this.role.id
        } else {
          this.account = ''
          this.password = ''
          this.roleID = 0
          this.title = '新增帳戶'
        }
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showDialogMethodAccount', false)
          done()
        })
        .catch(_ => {})
    },
    async save() {
      if (this.title === '編輯帳戶角色' && this.roleID !== 0) {
        const required = {
          userID: this.userID,
          roleID: this.roleID
        }
        await this.$store.dispatch('permissionManage/EDIT_ACCOUNT_ROLE', required)
        this.$emit('showDialogMethodAccount', false)
      } else if (this.title === '新增帳戶' && this.account && this.password && this.roleID !== 0) {
        const required = {
          username: this.account,
          password: this.password,
          role: this.roleID
        }
        await this.$store.dispatch('permissionManage/ADD_ACCOUNT', required)
        this.$emit('showDialogMethodAccount', false)
      }
    }
  }
}
</script>

