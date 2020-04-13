import request from '@/utils/request'
import { isEmpty } from '@/utils/checkObject'

export default function() {
  return {
    namespaced: true,
    state: {
      isLoading: false // 判斷是否在執行更新版本請求
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
      async GET_RESERVATION_EMAIL_HOOKS() {
        return await request({
          url: '/v1/settings/reservations/emails'
        }).then(res => res.data)
          .catch(() => [])
      },
      async UPDATE_RESERVATIOM_EMAIL_HOOKS({ commit }, hook) {
        commit('SET_IS_LOADING')
        const emailID = hook.id
        const result = await request({
          method: 'put',
          url: `/v1/settings/reservations/emails/${emailID}`,
          data: hook
        }).then(res => res.data)
          .catch(() => {})
        commit('SET_IS_LOADING')
        return !isEmpty(result)
      },
      async GET_RESERVATION_STATUS_HOOKS(context) {
        return await request({
          url: '/v1/settings/reservations/state'
        })
          .then(res => res.data)
          .catch(() => [])
      },
      async UPDATE_RESERVATION_STATUS_HOOKS({ commit }, hook) {
        commit('SET_IS_LOADING')
        const stateID = hook.id
        const { title, message, isEnable } = hook
        const result = await request({
          url: `/v1/settings/reservations/state/${stateID}`,
          data: { title, message, isEnable },
          method: 'put'
        })
          .then(res => res.data)
          .catch(() => {})
        commit('SET_IS_LOADING')
        return !isEmpty(result)
      },
      async TEST_RESERVATION_STATUE_CHANGE({ commit }, testData) {
        commit('SET_IS_LOADING')
        const { stateID } = testData
        const result = await request({
          url: `/v1/push/reservations/state/${stateID}/send`,
          method: 'post',
          data: testData
        })
          .then(res => res.data)
          .catch(() => {})
        commit('SET_IS_LOADING')
        return !isEmpty(result)
      },
      /**
       * @name GET_APP_VERSION
       * @description 取得設定 App 強制更新的版號
       * @param { Object } context
       * @param { Object } payload deviceOS=ios/ deviceOS=android
       * @returns { Object }
       */
      async GET_APP_VERSION({ commit }, payload) {
        commit('SET_IS_LOADING')
        const result = await request({
          url: '/v1/settings/app/version',
          params: payload,
          method: 'get'
        })
          .then(res => res.data)
          .catch(() => {})
        commit('SET_IS_LOADING')
        return result
      },
      /**
       * @name UPDATE_APP_VERSION
       * @description 向後端更新新的版號
       * @param { Object } context
       * @param { Object } payload 更新的版號內容
       * @returns { Object | Boolean }
       */
      async UPDATE_APP_VERSION({ getters, commit }, payload) {
        if (getters.IS_LOADING) {
          return false
        }
        commit('SET_IS_LOADING')
        const result = await request({
          url: '/v1/settings/app/version',
          data: payload,
          method: 'put'
        })
          .then(res => res.data)
          .catch(() => false)
        commit('SET_IS_LOADING')
        return result
      }
    }
  }
}
