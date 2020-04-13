<template>
  <el-dialog
    :title="title"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'800px'"
  >
    <el-form ref="myEdit" :model="myEdit" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
      <el-form-item label="主旨">
        <el-input v-model="myEdit.subject" type="text" placeholder="主旨" maxlength="50" />
        <span class="notice-grey">個人化稱謂格式 : {nickname}，{{ myEdit.subject.length }}/50</span>
      </el-form-item>
      <el-form-item label="Email內容">
        <el-input v-model="myEdit.content" type="textarea" />
        <span class="notice-grey">個人化稱謂格式 : {nickname}</span>
      </el-form-item>
      <el-form-item label="收件群組">
        <el-select v-model="myEdit.receiveGroup" placeholder="請選擇" style="width:100%">
          <el-option
            v-for="item in options"
            :key="item.groupName"
            :label="item.groupName"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="發信日期">
        <el-date-picker
          v-model="date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="選擇日期"
          style="width:100%"
        />
      </el-form-item>
      <el-form-item label="發信時間">
        <el-time-picker
          v-model="time"
          value-format="HH:mm:ss"
          style="width:100%"
          placeholder="任意時間點"
        />
      </el-form-item>
      <el-form-item label="個人化稱謂">
        <el-radio v-model="myEdit.isCustomize" label="1" border size="medium" value="'1'">有</el-radio>
        <el-radio v-model="myEdit.isCustomize" label="0" border size="medium" value="'0'">無</el-radio>
      </el-form-item>
      <el-button @click="save">{{ title==='編輯EDM'?'儲存':'新增' }}</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
const initEdit = {
  subject: '',
  content: '',
  receiveGroup: '請選擇',
  date: '',
  time: '',
  isCustomize: '0'
}
export default {
  name: 'ShowEDMMethodDialog',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    projectID: {
      type: Number,
      default: 0
    },
    edmID: {
      type: Number,
      default: 0
    },
    currentSelect: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: '',
      myEdit: Object.assign({}, initEdit),
      date: '',
      time: ''
    }
  },
  computed: {
    // Email 群組選項
    options() {
      return this.$store.state.EDM_EDM ? this.$store.state.EDM_EDM.Email_List : []
    }
  },
  watch: {
    showDialog(val) {
      if (val === true) {
        // 導入傳入的值
        if (this.currentSelect.subject) {
          this.myEdit = Object.assign({}, this.currentSelect)
          const notificationTime = this.currentSelect.notificationTime.split(' ')
          this.date = notificationTime[0] // 日期格式
          this.time = notificationTime[1] // 時間格式
          this.title = '編輯EDM'
        } else {
          this.myEdit = Object.assign({}, initEdit)
          this.date = ''
          this.time = ''
          this.title = '新增EDM'
        }
      }
    },
    date(val) {
      this.myEdit.notificationTime = `${val} ${this.time}`
    },
    time(val) {
      this.myEdit.notificationTime = `${this.date} ${val}`
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showEDMMethodDialog', false)
          done()
        })
        .catch(_ => {})
    },
    async save() {
      const isComplete = this.myEdit.subject && this.myEdit.content && this.myEdit.receiveGroup !== '請選擇' && this.date && this.time
      const isChange = JSON.stringify(this.myEdit) !== JSON.stringify(this.currentSelect)
      if (!isComplete) {
        alert('還沒填完！！！')
        return
      }
      if (this.title === '編輯EDM') {
        if (isChange) {
          await this.editEDM()
        }
      } else if (this.title === '新增EDM') {
        await this.insertEDM()
      }
      this.$emit('showEDMMethodDialog', false)
    },
    async insertEDM() {
      const request = {
        projectID: this.projectID,
        subject: this.myEdit.subject,
        content: this.myEdit.content,
        isCustomize: this.myEdit.isCustomize,
        notificationTime: this.myEdit.notificationTime,
        receiveGroup: this.myEdit.receiveGroup
      }
      await this.$store.dispatch('EDM_EDM/ADD_EDM', request)
    },
    async editEDM() {
      const required = {
        projectID: this.projectID,
        edmID: this.edmID,
        datas: this.myEdit
      }
      await this.$store.dispatch('EDM_EDM/EDIT_EDM', required)
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
