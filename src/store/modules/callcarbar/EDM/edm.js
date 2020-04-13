import {
  get_EDM_list,
  get_Email_nameList,
  add_EDM,
  get_EDM_content,
  edit_EDM,
  send_EDM
} from '@/store/api/callcarbar/EDM'
export default function() {
  return {
    namespaced: true,
    state: {
      EDM_List: [],
      Email_List: []
    },
    mutations: {
      SET_EDM_LIST(state, EDMS) {
        state.EDM_List = EDMS.sort((a, b) => b.id - a.id)
      },
      SET_EMAIL_GROUP_LIST(state, nweValue) {
        state.Email_List = nweValue
      }
    },
    actions: {
      //  get
      async GET_EDM_LIST({ commit }, projectID) {
        const response = await get_EDM_list(projectID).then(res => res.data)
        commit('SET_EDM_LIST', response)
      },
      async GET_EMAIL_GROUP({ commit }) {
        const response = await get_Email_nameList().then(res => res.data)
        commit('SET_EMAIL_GROUP_LIST', response)
      },
      async GET_EDM_CONTENT({ commit }, content) {
        const response = await get_EDM_content(content.projectID, content.edmID).then(res => res.data)
        return response
      },
      // post
      async ADD_EDM({ commit }, content) {
        await add_EDM(content.projectID, content).then(res => res.data)
      },

      async SEND_EDM({ commit }, content) {
        await send_EDM(content.projectID, content.edmID, content.content).then(
          res => res.data
        )
      },

      // put
      async EDIT_EDM({ commit }, content) {
        await edit_EDM(content.projectID, content.edmID, content.datas).then(res => res.data)
      }
    }
  }
}
