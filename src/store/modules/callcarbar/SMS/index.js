// import request from '@/utils/request'
import {
  send_SMS,
  get_sms_list,
  send_SMS_batch
} from '@/store/api/callcarbar/SMS'
export default function() {
  return {
    namespaced: true,
    state: {
      SMSList: []
    },
    getters: {},
    mutations: {
      SET_SMS_LIST(state, list) {
        state.SMSList = list
      }
    },
    actions: {
      async SEND_SMS({ commit }, data) {
        const response = await send_SMS(data).then(res => res.data)
        return response
      },
      async GET_SMS_LIST({ commit }) {
        const response = await get_sms_list().then(res => res.data)
        commit('SET_SMS_LIST', response)
      },
      async SEND_SMS_BATCH({ commit }, data) {
        const response = await send_SMS_batch(data).then(res => res.data)
        return response
      }
    }
  }
}

