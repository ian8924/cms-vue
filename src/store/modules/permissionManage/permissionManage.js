import {
  get_roles_list,
  add_roles,
  get_role_rights,
  delete_role,
  edit_right,
  get_account_list,
  add_account,
  edit_account_role,
  delete_account
} from '@/store/api/permissionManage/permissionManage'
import { getUserRole } from '@/store/api/user'
export default function() {
  return {
    namespaced: true,
    state: {
      roleList: [],
      accountList: []
    },
    mutations: {
      SET_ROLELIST: (state, roleList) => {
        state.roleList = roleList
      },
      SET_ACCOUNTLIST: (state, accountList) => {
        state.accountList = accountList
      }
    },
    actions: {
      //  post
      async ADD_ROLES({ commit }, name) {
        const response = await add_roles(name).then(res => res.data)
        if (response.id) {
          return 'success'
        } else {
          return 'fail'
        }
      },

      async ADD_ACCOUNT({ commit }, request) {
        await add_account(request).then(res => res.data)
      },
      // get
      async GET_ROLES_LIST({ commit }) {
        const response = await get_roles_list().then(res => res.data)
        commit('SET_ROLELIST', response)
      },

      async GET_ACCOUNT_LIST({ commit }) {
        const response = await get_account_list().then(res => res.data)
        commit('SET_ACCOUNTLIST', response)
      },

      async GET_ACCOUNT_ROLE({ commit }, userID) {
        const response = await getUserRole(userID).then(res => res.data)
        return response
      },

      async GET_ROLE_RIGHTS({ commit }, roleID) {
        const response = await get_role_rights(roleID).then(res => res.data)
        return response
      },
      // put
      async EDIT_ROLE_RIGHT({ commit }, request) {
        await edit_right(request.roleID, request.data).then(res => res.data)
        // console.log(response)
      },
      async EDIT_ACCOUNT_ROLE({ commit }, request) {
        const data = { role: request.roleID }
        await edit_account_role(request.userID, data).then(res => res.data)
      },
      // delete
      async DELETE_ROLE({ commit }, roleID) {
        await delete_role(roleID).then(res => res.data)
        // console.log(response)
      },
      async DELETE_ACCOUNT({ commit }, userID) {
        await delete_account(userID).then(res => res.data)
      }
    }
  }
}
