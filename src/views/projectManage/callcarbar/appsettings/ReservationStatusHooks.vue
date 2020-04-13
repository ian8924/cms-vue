<template>
  <div style="padding:30px">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>行程狀態通知設定</h2>
      </div>
    </div>
    <StatusHooksTable
      v-loading="loading"
      :hooks="hooks"
      :cols="cols"
      @editHook="editHookHandler"
      @enableHook="enableHookHandler"
      @testHook="testHookHandler"
    />
    <DialogEditHook
      v-if="showDialog"
      :show-dialog.sync="showDialog"
      :edit-hook-data="editHookData"
      @update="updateHookHandler"
    />
    <DialogTestHookNotification
      v-if="showDialogTestHook"
      :show-dialog.sync="showDialogTestHook"
      @sendTestNotification="sendTestNotificaionHandler"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StatusHooksTable from './components/StatusHooksTable'
import DialogEditHook from './components/DialogEditHook'
import DialogTestHookNotification from './components/DialogTestHookNotification'

const MODULE_NAME = 'AppSettings'
const cols = [
  { label: '行程狀態', scope: 'state' },
  { label: '推播標題', scope: 'title' },
  { label: '推播內容', scope: 'message' },
  { label: '啟用', scope: 'isEnable' }
]
export default {
  name: 'ReservationStatusHooks',
  components: { StatusHooksTable, DialogEditHook, DialogTestHookNotification },
  data() {
    return {
      hooks: [],
      cols,
      showDialog: false,
      showDialogTestHook: false,
      editHookData: {}
    }
  },
  computed: {
    ...mapGetters(MODULE_NAME, {
      loading: 'IS_LOADING'
    })
  },
  async mounted() {
    this.getReservationStatusHooks()
  },
  methods: {
    async getReservationStatusHooks() {
      this.hooks = await this.$store.dispatch(
        `${MODULE_NAME}/GET_RESERVATION_STATUS_HOOKS`
      )
    },
    async editHookHandler(hook) {
      this.editHookData = hook
      this.showDialog = true
    },
    async updateHookHandler(hook) {
      const isSuccess = await this.$store.dispatch(
        `${MODULE_NAME}/UPDATE_RESERVATION_STATUS_HOOKS`,
        hook
      )
      if (isSuccess) {
        const index = this.hooks.indexOf(this.editHookData)
        this.$set(this.hooks, index, hook)
        this.showDialog = false
      }
    },
    async enableHookHandler(hook) {
      const isEnable = hook.isEnable === '1' ? '0' : '1'
      const isSuccess = await this.$store.dispatch(
        `${MODULE_NAME}/UPDATE_RESERVATION_STATUS_HOOKS`,
        { ...hook, isEnable }
      )
      if (isSuccess) {
        hook.isEnable = isEnable
      }
    },
    async testHookHandler(hook) {
      this.editHookData = hook
      this.showDialogTestHook = true
    },
    async sendTestNotificaionHandler(testData) {
      this.$store.dispatch(`${MODULE_NAME}/TEST_RESERVATION_STATUE_CHANGE`, { ...testData, stateID: this.editHookData.id })
    }
  }
}
</script>

<style></style>
