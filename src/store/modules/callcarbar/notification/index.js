import request from '@/utils/request'
import { isEmpty } from '@/utils/checkObject'

export default function() {
  return {
    namespaced: true,
    state: {
      isLoading: false // 判斷是否在執行新增/更新推播請求
    },
    getters: {
      IS_LOADING(state) {
        return state.isLoading
      }
    },
    mutations: {
      /**
       * @name SET_IS_UPDATING
       * @description 更新現在是否正在執行請求的狀態
       * @param { Object } state
       */
      SET_IS_LOADING(state) {
        state.isLoading = !state.isLoading
      }
    },
    actions: {
      /**
       * @name GET_NOTIFICATION_LIST
       * @description 取得推播列表
       * @returns { Array<Object> }
       */
      async GET_NOTIFICATION_LIST({ getters, commit }) {
        if (getters.IS_LOADING) {
          return []
        }
        commit('SET_IS_LOADING')
        const notifications = await request({
          url: `/v1/push`,
          method: 'get'
        }).then(res => res.data)
          .catch(() => [])
        commit('SET_IS_LOADING')
        return notifications
      },
      /**
       * @name POST_NOTIFICATION
       * @description 新增推播
       * @param { Object } context
       * @param { Object } newNotification - 新增的推播內容
       * @returns { Boolean } 是否成功更新增推播
       */
      async POST_NOTIFICATION(context, newNotification) {
        const res = await request({
          url: '/v1/push',
          method: 'post',
          data: newNotification
        }).then(res => res.data)
          .catch(() => {})
        return !isEmpty(res)
      },
      /**
       * @name UPDATE_NOTIFICATION
       * @deprecated 更新/啟用推播資料
       * @param { Object } context
       * @param { Object } editNotification - 變更的推播內容
       * @returns { Boolean } 是否成功編輯推播
       */
      async UPDATE_NOTIFICATION({ getters, commit }, editNotification) {
        if (getters.IS_LOADING) {
          return false
        }
        commit('SET_IS_LOADING')
        const pushID = editNotification.id
        const res = await request({
          url: `/v1/push/${pushID}`,
          method: 'put',
          data: editNotification
        }).then(res => res.data)
          .catch(() => {})
        commit('SET_IS_LOADING')
        return !isEmpty(res)
      }
    }
  }
}
