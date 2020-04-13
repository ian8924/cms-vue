import {
  get_Email_nameList,
  add_Email_group,
  get_Email_nameList_content,
  delete_Email_nameList,
  get_edm_blackList,
  add_black_list,
  get_failure_list,
  add_failure
} from '@/store/api/callcarbar/EDM'
export default function() {
  return {
    namespaced: true,
    state: {
      Email_Groups_List: [],
      black_List: [],
      failure_List: []
    },
    mutations: {
      SET_EMAIL_GROUPS_LIST(state, mails) {
        state.Email_Groups_List = mails.sort((a, b) => b.id - a.id)
      },
      SET_BLACK_LIST(state, list) {
        state.black_List = list.sort((a, b) => b.id - a.id)
      },
      SET_FAILURE_LIST(state, list) {
        state.failure_List = list
      }
    },
    actions: {
      // GET
      async GET_EMAIL_GROUP({ commit }) {
        const response = await get_Email_nameList().then(res => res.data)
        commit('SET_EMAIL_GROUPS_LIST', response)
      },
      async GET_BLACK_LIST({ commit }) {
        const response = await get_edm_blackList().then(res => res.data)
        commit('SET_BLACK_LIST', response)
      },
      async GET_EMAIL_NAMELIST_CONTENT({ commit }, id) {
        const response = await get_Email_nameList_content(id).then(
          res => res.data
        )
        return response
      },
      async GET_FAILTURE_LIST({ commit }) {
        const response = await get_failure_list().then(res => res.data)
        commit('SET_FAILURE_LIST', response)
      },
      // POST
      async ADD_EMAIL_GROUP({ commit }, content) {
        await add_Email_group(content).then(res => res.data)
      },
      async ADD_BLACK_LIST({ commit }, content) {
        const response = await add_black_list(content).then(res => res.data)
        return response
      },

      async ADD_FAILURE({ commit }, content) {
        const response = await add_failure(content).then(res => res.data)
        return response
      },
      // DELETE
      async DELETE_EMAIL_NAMELIST({ commit }, groupID) {
        await delete_Email_nameList(groupID).then(res => res.data)
      }
    }
  }
}
