<template>
  <div style="padding:30px">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>推播管理</h2>
        <div style="position:absolute;right:15%;">
          <el-button
            type="success"
            icon="el-icon-plus"
            round
            @click="addNotification"
          >新增推播</el-button>
          <el-button
            type="info"
            :icon="refreshIcon"
            round
            @click="getNotificationList"
          >刷新列表</el-button>
        </div>
      </div>
    </div>
    <div style="margin-bottom:20px;">
      <el-pagination
        background
        :page-sizes="[5, 10, 20, 100,notificationList.length]"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="notificationList.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-table
      v-loading="loading"
      :data="notificationList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      :default-sort="{ prop: 'id', order: 'descending' }"
    >
      <el-table-column
        v-for="(col, i) in cols"
        :key="i"
        :label="col.label"
        :sortable="col.sortable"
        :show-overflow-tooltip="true"
      >

        <template slot-scope="scope">
          <!-- 啟用欄位的行為 -->
          <div v-if="col.scope === 'isEnable'">
            <i
              v-permission="['EDM-查看者']"
              style="cursor:pointer"
              :class="
                scope.row['isEnable'] === '1'
                  ? 'el-icon-success'
                  : 'el-icon-error'
              "
            />
            <i
              v-permission="['EDM-編輯者']"
              style="cursor:pointer"
              :class="
                scope.row['isEnable'] === '1'
                  ? 'el-icon-success'
                  : 'el-icon-error'
              "
              @click="enableNotification(scope.row)"
            />
          </div>
          <!-- 一般欄位的行為 -->
          <h4 v-else style="color:gray;">
            {{ scope.row[col.scope] }}
          </h4>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            v-permission="['EDM-編輯者']"
            type="primary"
            style="padding:12px12px;"
            @click="editNotification(scope.row)"
          >
            編輯</el-button>
        </template>
      </el-table-column>
    </el-table>
    <DialogEditPush
      v-if="showDialog"
      :show-dialog.sync="showDialog"
      :is-add-notification="isAddNotification"
      :edit-notification-data="editNotificationData"
      @update="updateNotification"
      @post="postNotification"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import notification from '@/store/modules/callcarbar/notification'
import DialogEditPush from './DialogEditPush'

const cols = [
  { label: 'id', scope: 'id', sortable: false },
  { label: '標題', scope: 'title', sortable: false },
  { label: '訊息內容', scope: 'message', sortable: false },
  { label: '網址連結', scope: 'link', sortable: false },
  { label: '推播時間', scope: 'notificationTime', sortable: false },
  { label: '推播類型', scope: 'infoType', sortable: false },
  { label: '啟用狀態', scope: 'isEnable', sortable: false },
  { label: '建立時間', scope: 'applyTime', sortable: false },
  { label: '已讀數量', scope: 'views', sortable: false }
]

export default {
  name: 'Notification',
  components: {
    DialogEditPush
  },
  data() {
    return {
      notificationList: [],
      cols,
      isRefresh: false,
      showDialog: false,
      isAddNotification: false,
      editNotificationData: {},
      currentPage: 1, // 初始頁
      pagesize: 20 //    每頁的數據
    }
  },
  computed: {
    refreshIcon() {
      return this.isRefresh ? 'el-icon-loading' : 'el-icon-refresh'
    },
    ...mapGetters('notification', {
      'loading': 'IS_LOADING'
    })
  },
  created() {
    if (this.$store._modules.root._children['notification'] === undefined) {
      this.$store.registerModule('notification', notification())
    }
    this.getNotificationList()
  },
  async beforeDestroy() {
    if (this.$store._modules.root._children['notification'] !== undefined) {
      this.$store.unregisterModule('notification')
    }
  },
  methods: {
    /**
     * @name getNotificationList
     * @description 取得推播列表
     */
    async getNotificationList() {
      this.isRefresh = true
      this.notificationList = await this.$store.dispatch(
        'notification/GET_NOTIFICATION_LIST'
      )
      this.notificationList.reverse()
      this.isRefresh = false
    },
    /**
     * @name addNotification
     * @description 開啟新增推播視窗
     */
    addNotification() {
      this.isAddNotification = true
      this.showDialog = true
    },
    /**
     * @name editNotification
     * @description 開啟編輯推播視窗
     * @param { String } row 要編輯的推播 row data
     */
    editNotification(row) {
      if (!row) {
        return
      }
      this.editNotificationData = row
      this.isAddNotification = false
      this.showDialog = true
    },
    // 新增推播
    async postNotification(notificationData) {
      const isSuccess = await this.$store.dispatch(
        'notification/POST_NOTIFICATION',
        notificationData
      )
      if (isSuccess) {
        await this.getNotificationList()
        this.showDialog = false
      }
    },
    // 更新推播
    async updateNotification(notificationData) {
      const isSuccess = await this.$store.dispatch(
        'notification/UPDATE_NOTIFICATION',
        notificationData
      )
      if (isSuccess) {
        this.showDialog = false
        const index = this.notificationList.indexOf(this.editNotificationData)
        this.$set(this.notificationList, index, notificationData)
      }
    },
    /**
     * @name enableNotification
     * @param { Object } row
     */
    async enableNotification(row) {
      const isEnable = row.isEnable === '1' ? '0' : '1'
      const isSuccess = await this.$store.dispatch('notification/UPDATE_NOTIFICATION', { ...row, isEnable })
      if (isSuccess) {
        row.isEnable = isEnable
      }
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

<style scoped>
.el-icon-success{
  color: green;
  font-size: 25px;
}
.el-icon-error{
  color: rgb(206, 85, 85);
  font-size: 25px;
}
</style>
