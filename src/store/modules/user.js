// import { login, getUserRole } from '@/store/api/user'
// import { get_role_rights } from '@/store/api/permissionManage/permissionManage'
import { getCookie, setCookie, removeCookie } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getCookie('token'),
    name: '',
    avatar: '',
    role: '',
    roleID: 0,
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  },

  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_NAME: (state, name) => {
    state.name = name
  },

  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  CON_ROLES: (state, roles) => {
    const rights = []
    roles.forEach(element => {
      if (element.right !== '無') {
        rights.push(`${element.service}-${element.right}`)
      }
    })
    if (rights.length === 0) {
      state.roles = ['無權限']
    } else {
      state.roles = rights
    }
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_ROLE_ID: (state, roleID) => {
    state.roleID = roleID
  }
}

const actions = {
  // user login
  async LOGIN({ commit, dispatch }, userInfo) {
    commit(
      'SET_TOKEN',
      'admin-token'
    )
    setCookie(
      'token',
      'admin-token'
    )
    setCookie('userID', 1111)
    // const result = await login(userInfo)
    //   .then(res => {
    //     commit('SET_TOKEN', res.data.token)
    //     setCookie('token', res.data.token)
    //     setCookie('userID', res.data.id)
    //     return 'Success'
    //   })
    //   .catch(err => (err.response.status === 500 ? 'fail' : 'error'))
    // return result
    return 'Success'
  },

  async GET_ROLE_RIGHTS({ state, commit }) {
    // const roleID = state.roleID
    // const response = await get_role_rights(roleID).then(res => res.data)
    const response = [
      { service: '角色編輯', right: '編輯者' },
      { service: '用戶編輯', right: '編輯者' },
      { service: 'EDM', right: '編輯者' },
      { service: '票卡管理', right: '編輯者' }
    ]
    commit('CON_ROLES', response)
  },

  async GET_USER_ROLE({ commit, state, dispatch }) {
    // const userID = getCookie(
    //   'userID'
    // )
    commit('SET_ROLE', '管理者')
    commit('SET_ROLE_ID', 2)
    // const response = await getUserRole(userID).then(res => res.data)
    // commit('SET_ROLE', response.name)
    // commit('SET_ROLE_ID', response.id)
    await dispatch(
      'GET_ROLE_RIGHTS'
    )
    return state.roles
  },
  // user logout
  logout({ commit, state, rootState }) {
    return new Promise((resolve, reject) => {
      removeCookie('token') // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeCookie('token') // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

