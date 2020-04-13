// import request from '@/utils/request'
import {
  get_tickets_all,
  get_tickets_all_total,
  get_tickets_opened,
  get_tickets_download,
  get_tickets_googlepay_download,
  get_tickets_writtenoff,
  get_tickets_writtenoff_total,
  get_tickets_roamingbar
} from '@/store/api/tickets/tickets'
export default function() {
  return {
    namespaced: true,
    state: {
      TICKETS: {}
    },
    getters: {},
    mutations: {
      SET_TICKET_LIST(state, newState) {
        state.TICKETS = newState
      }
    },
    actions: {
      // 全部票卡
      async GET_ALL_TICKETS({ commit }, dates) {
        const response = await get_tickets_all(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      // 票卡總數
      async GET_ALL_TICKETS_TOTAL({ commit }, dates) {
        const response = await get_tickets_all_total(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      async GET_TICKETS_OPENED({ commit }, dates) {
        const response = await get_tickets_opened(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      async GET_TICKETS_DOWNLOAD({ commit }, dates) {
        const response = await get_tickets_download(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      async GET_TICKETS_GOOGLEPAY_DOWNLOAD({ commit }, dates) {
        const response = await get_tickets_googlepay_download(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      // 已核銷票卡
      async GET_TICKETS_WRITTENOFF({ commit }, dates) {
        const response = await get_tickets_writtenoff(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      async GET_TICKETS_WRITTENOFF_TOTAL({ commit }, dates) {
        const response = await get_tickets_writtenoff_total(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      },
      // 漫遊吧票卡狀態
      async GET_TICKETS_ROAMINGBAR({ commit }, dates) {
        const response = await get_tickets_roamingbar(dates)
          .then(res => {
            return res.data
          })
          .catch(() => {
            return []
          })
        if (response === []) {
          this.$message.error('查無資料')
        }
        commit('SET_TICKET_LIST', response)
        return response
      }
    }
  }
}
