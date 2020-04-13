<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>EDM管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button v-permission="['EDM-編輯者']" type="success" icon="el-icon-plus" round @click="openDialog('add')">新增EDM</el-button>
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
        width="80"
      >
        <template slot-scope="scope">
          <h4 style="color:gray;">{{ scope.row.id }}</h4>
        </template>
      </el-table-column>
      <el-table-column
        label="主旨"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.subject }}
        </template>
      </el-table-column>
      <el-table-column
        label="email內容"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column
        label="收件群組"
        width="120"
      >
        <template slot-scope="scope">
          {{ scope.row.receiveGroupName }}
        </template>
      </el-table-column>
      <el-table-column
        label="發信時間"
        width="160"
      >
        <template slot-scope="scope">
          {{ scope.row.notificationTime }}
        </template>
      </el-table-column>
      <el-table-column
        label="個人化"
        width="90"
      >
        <template slot-scope="scope">
          <i v-if="scope.row.isCustomize==='1'" class="el-icon-success" />
          <i v-else class="el-icon-error" />
        </template>
      </el-table-column>
      <el-table-column
        label="上傳EDM"
        width="90"
      >
        <template slot-scope="scope">
          <i v-if="scope.row.templatePath" class="el-icon-document-checked" />
          <i v-else class="el-icon-document-delete" />
        </template>
      </el-table-column>
      <el-table-column
        label="啟用狀態"
        width="90"
      >
        <template slot-scope="scope">
          <div v-permission="['EDM-查看者']">
            <i v-if="scope.row.isEnable==='1'" class="el-icon-success" />
            <i v-else class="el-icon-error" />
          </div>
          <div v-permission="['EDM-編輯者']">
            <i v-if="scope.row.isEnable==='1'" class="el-icon-success" style="cursor:pointer" @click="toStart(scope.row,'0')" />
            <i v-else class="el-icon-error" style="cursor:pointer" @click="toStart(scope.row,'1')" />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="發送狀態"
        width="90"
      >
        <template slot-scope="scope">
          <i v-if=" scope.row.isNotify==='1'" class="el-icon-success" />
          <i v-else class="el-icon-error" />
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180"
      >
        <template slot-scope="scope">
          <el-tooltip v-permission="['EDM-編輯者']" class="item" effect="dark" content="編輯EDM" placement="top-start">
            <el-button type="primary" icon="el-icon-edit" circle @click="openDialog('edit',scope.row.id)" />
          </el-tooltip>
          <el-tooltip v-permission="['EDM-編輯者']" class="item" effect="dark" content="上傳EDM" placement="top-start">
            <el-button type="info" icon="el-icon-document-add" circle @click="openDialog('upload',scope.row.id)" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="發送測試EDM" placement="top-start">
            <el-button type="primary" icon="el-icon-s-promotion" circle @click="openDialog('sendEDM',scope.row.id,scope.row.isCustomize)" />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <DialogUploadEdm v-if="showEDMuploadDialog" :show-dialog="showEDMuploadDialog" :url="uploadURL" @showUploadDialog="closeDialog" />
    <DialogMethodEDM
      :show-dialog="showEDMMethodDialog"
      :project-i-d="projectID"
      :edm-i-d="edmID"
      :current-select="currentSelect"
      @showEDMMethodDialog="closeDialog"
    />
    <DialogSendEDM
      v-if="showEDMsendDialog"
      :show-dialog="showEDMsendDialog"
      :is-customize="isCustomize"
      :project-i-d="projectID"
      :edm-i-d="edmID"
      @showSendDialog="closeDialog"
    />
  </div>
</template>

<script>
import EDM from '@/store/modules/callcarbar/EDM/edm'
import DialogUploadEdm from '@/components/base/uploader/DialogUploader'
import DialogMethodEDM from '@/components/callcarbar/EDM/Dialog/DialogMethodedm'
import DialogSendEDM from '@/components/callcarbar/EDM/Dialog/DialogSendedm'
import { upload_EDM_template } from '@/store/api/callcarbar/EDM'

export default {
  name: 'EDM',
  components: {
    DialogUploadEdm,
    DialogMethodEDM,
    DialogSendEDM
  },
  data() {
    return {
      showEDMMethodDialog: false,
      showEDMuploadDialog: false,
      showEDMsendDialog: false,
      projectID: 0,
      edmID: 0,
      isCustomize: '0',
      uploadURL: '',
      isloading: false,
      currentSelect: {}
    }
  },
  computed: {
    loadingIcon: {
      get() {
        return this.isloading ? 'el-icon-loading' : 'el-icon-refresh'
      }
    },
    tableData() {
      return this.$store.state.EDM_EDM ? this.$store.state.EDM_EDM.EDM_List : []
    }
  },
  async mounted() {
    this.projectID = parseInt(this.$route.query.id)
    if (!this.projectID) {
      await this.$router.push({ name: '活動專案管理' })
    }
    if (this.$store._modules.root._children.EDM_EDM === undefined) {
      this.$store.registerModule('EDM_EDM', EDM())
    }
    this.$store.dispatch('EDM_EDM/GET_EDM_LIST', this.$route.query.id)
    this.$store.dispatch('EDM_EDM/GET_EMAIL_GROUP')
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.EDM_EDM !== undefined) {
      this.$store.unregisterModule('EDM_EDM')
    }
  },
  methods: {
    async openDialog(method, edmID, isCustomize) {
      const request = {
        projectID: this.projectID,
        edmID: edmID
      }
      switch (method) {
        case 'add':
          this.edmID = 0
          this.currentSelect = {}
          this.showEDMMethodDialog = true
          break
        case 'edit':
          this.edmID = edmID
          await this.$store.dispatch('EDM_EDM/GET_EDM_CONTENT', request).then((res) => {
            this.currentSelect = Object.assign({}, res)
            this.showEDMMethodDialog = true
          })
          break
        case 'upload':
          this.edmID = edmID
          // 設定url
          this.uploadURL = upload_EDM_template(this.projectID, this.edmID)
          this.showEDMuploadDialog = true
          break
        case 'sendEDM':
          this.edmID = edmID
          this.isCustomize = isCustomize
          this.showEDMsendDialog = true
          break
      }
    },
    async closeDialog() {
      await this.$store.dispatch('EDM_EDM/GET_EDM_LIST', this.projectID)
      this.showEDMMethodDialog = false
      this.showEDMuploadDialog = false
      this.showEDMsendDialog = false
    },
    async toStart(selects, value) {
      // 若為未上傳文件且非啟用狀態,則跳$message
      if (selects.templatePath === '' && selects.isEnable === '0') {
        this.$message.info('請先上傳EDM模板')
        return
      }
      selects.isEnable = value
      const required = {
        projectID: this.projectID,
        edmID: selects.id,
        datas: {
          content: selects.content,
          isCancel: selects.isCancel,
          isCustomize: selects.isCustomize,
          isEnable: selects.isEnable,
          notificationTime: selects.notificationTime,
          receiveGroup: selects.receiveGroup,
          subject: selects.subject,
          templatePath: selects.templatePath
        }
      }
      await this.$store.dispatch('EDM_EDM/EDIT_EDM', required)
      this.$store.dispatch('EDM_EDM/GET_EDM_LIST', this.projectID)
    },
    async reFreshList() {
      this.isloading = true
      await this.$store.dispatch('EDM_EDM/GET_EDM_LIST', this.projectID)
      this.isloading = false
    }
  }
}
</script>

<style scoped>
.el-icon-success{
  color: green;
  font-size: 25px;
}
.el-icon-error{
  color: rgb(206, 85, 85);
  font-size: 25px;
}
.el-icon-document-checked{
  color: green;
  font-size: 25px;
}
.el-icon-document-delete{
   color: rgb(224, 42, 42);
   font-weight: 500;
  font-size: 25px;
}
</style>
