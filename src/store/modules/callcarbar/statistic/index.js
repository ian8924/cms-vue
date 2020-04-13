import request from '@/utils/request'
// import { isEmpty } from '@/utils/checkObject'

export default function() {
  return {
    namespaced: true,
    state: {
      isLoading: false // 判斷是否在執行取得會員名單請求
    },
    getters: {
      IS_LOADING(state) {
        return state.isLoading
      }
    },
    mutations: {
      /**
       * @name SET_IS_LOADING
       * @description 更新現在是否正在執行請求的狀態
       * @param { Object } state
       */
      SET_IS_LOADING(state) {
        state.isLoading = !state.isLoading
      }
    },
    actions: {
      async GET_MEMBER_LIST({ getters, commit }, query) {
        if (getters.IS_LOADING) {
          return []
        }
        commit('SET_IS_LOADING')
        const members = await request({
          url: `/v1/data/members?${query}`,
          method: 'get'
        }).then(res => res.data)
          .catch(() => [])
        commit('SET_IS_LOADING')
        return members
      }
    }
  }
}
