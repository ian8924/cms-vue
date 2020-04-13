<template>
  <div style="padding:30px">
    <div style="with:100%">
      <div style="display:flex ;position:relative">
        <h2>服務信設定</h2>
      </div>
    </div>
    <EmailHooksTable
      v-loading="loading"
      :hooks="hooks"
      @upload="uploadHandler"
      @enable="enableHandler"
      @edit="editHandler"
      @preview="previewHandler"
    />
    <DialogEmailUploader
      v-if="showUploadDialog"
      :show-dialog.sync="showUploadDialog"
      :current-hook="updateHook"
    />
    <DialogEditEmail
      v-if="showDialog"
      :show-dialog.sync="showDialog"
      :edit-hook-data="updateHook"
      @update="updateHookHandler"
    />
    <DialogEmailPreviewer
      v-if="showPreviewer"
      :show-dialog.sync="showPreviewer"
      :preview-hook="updateHook"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EmailHooksTable from './components/EmailHooksTable'
import DialogEmailUploader from './components/DialogEmailUploader'
import DialogEditEmail from './components/DialogEditEmail'
import DialogEmailPreviewer from './components/DialogEmailPreviewer'

const MODULE_NAME = 'AppSettings'
export default {
  name: 'ReservationEmailHooks',
  components: {
    EmailHooksTable,
    DialogEmailUploader,
    DialogEditEmail,
    DialogEmailPreviewer
  },
  data() {
    return {
      hooks: [],
      showUploadDialog: false,
      showDialog: false,
      showPreviewer: false,
      updateHook: {}
    }
  },
  computed: {
    ...mapGetters(MODULE_NAME, {
      loading: 'IS_LOADING'
    })
  },
  async mounted() {
    this.hooks = await this.getReservationEmailHooks()
  },
  methods: {
    ...mapActions(MODULE_NAME, {
      getReservationEmailHooks: 'GET_RESERVATION_EMAIL_HOOKS',
      updateReservationEmailHooks: 'UPDATE_RESERVATIOM_EMAIL_HOOKS'
    }),
    uploadHandler(hook) {
      this.showUploadDialog = true
      this.updateHook = hook
    },
    async enableHandler(hook) {
      const isEnable = hook.isEnable === '1' ? '0' : '1'
      const isSuccess = await this.updateReservationEmailHooks({
        ...hook,
        isEnable
      })
      if (isSuccess) {
        hook.isEnable = isEnable
      }
    },
    async editHandler(hook) {
      this.showDialog = true
      this.updateHook = hook
    },
    async updateHookHandler(hook) {
      const isSuccess = this.updateReservationEmailHooks(hook)
      if (isSuccess) {
        const index = this.hooks.indexOf(this.updateHook)
        this.$set(this.hooks, index, hook)
        this.showDialog = false
      }
    },
    previewHandler(hook) {
      this.showPreviewer = true
      this.updateHook = hook
    }
  }
}
</script>

<style></style>
