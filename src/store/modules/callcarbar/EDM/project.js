import {
  get_project_list,
  get_project_content,
  edit_project_content,
  add_project_content
} from '@/store/api/callcarbar/EDM'
export default function() {
  return {
    namespaced: true,
    state: {
      projectList: []
    },
    mutations: {
      SET_PROJECT_LIST(state, campaigns) {
        state.projectList = campaigns.sort((a, b) => (b.id - a.id))
      }
    },
    actions: {
      async GET_PROJECT_LIST({ commit }) {
        const campaigns = await get_project_list().then(res => res.data)
        commit('SET_PROJECT_LIST', campaigns)
      },
      async GET_PROJECT_CONTENT({ commit }, id) {
        const content = await get_project_content(id).then(res => res.data)
        return content
      },
      async EDIT_PROJECT_CONTENT({ commit }, payload) {
        const id = payload.id
        const content = {
          campaignID: payload.campaignID,
          name: payload.name,
          description: payload.description
        }
        await edit_project_content(id, content).then(res => res.data)
      },
      async ADD_PROJECT({ commit }, payload) {
        await add_project_content(payload).then(res => res.data)
      }
    }
  }
}

