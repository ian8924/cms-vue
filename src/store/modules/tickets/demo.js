import request from '@/utils/request'
import { Message } from 'element-ui'

export default function() {
  return {
    namespaced: true,
    state: {},
    actions: {
      async CREATE_711cash({ commit }, data) {
        const response = await request({
          url: `/v1/ticket/SevenCash/create`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (
              res.data.message === 'success' ||
              res.data.message === 'Success and OrderID is exist'
            ) {
              Message.success('發送成功')
              return res.data
            }
          })
          .catch(() => {
            Message.error('發送失敗')
            return '??????????'
          })
        return response
      },
      async CREATE_711cafe({ commit }, data) {
        const response = await request({
          url: `/v1/ticket/SevenCoffee/create`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (
              res.data.message === 'success' ||
              res.data.message === 'Success and OrderID is exist'
            ) {
              Message.success('發送成功')
              return res.data
            }
          })
          .catch(() => {
            Message.error('發送失敗')
            return {}
          })
        return response
      },
      async CREATE_HiLife({ commit }, data) {
        const response = await request({
          url: `/v1/ticket/HiLife/create`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (
              res.data.message === 'success' ||
              res.data.message === 'Success and OrderID is exist'
            ) {
              Message.success('發送成功')
              return res.data
            }
          })
          .catch(() => {
            Message.error('發送失敗')
            return {}
          })
        return response
      },
      async CREATE_chicken({ commit }, data) {
        const response = await request({
          url: `/v1/ticket/chicken/create`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (
              res.data.message === 'success' ||
              res.data.message === 'Success and OrderID is exist'
            ) {
              Message.success('發送成功')
              return res.data
            }
          })
          .catch(() => {
            Message.error('發送失敗')
            return {}
          })
        return response
      },
      async CREATE_airportRestaurant({ commit }, data) {
        const response = await request({
          url: `/v1/ticket/AirPortRestaurant/create`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (
              res.data.message === 'success' ||
              res.data.message === 'Success and OrderID is exist'
            ) {
              Message.success('發送成功')
              return res.data
            }
          })
          .catch(() => {
            Message.error('發送失敗')
            return {}
          })
        return response
      },
      async CREATE_airportCoffee({ commit }, data) {
        const response = await request({
          url: `/v1/ticket/AirPortCoffee/create`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (
              res.data.message === 'success' ||
              res.data.message === 'Success and OrderID is exist'
            ) {
              Message.success('發送成功')
              return res.data
            }
          })
          .catch(() => {
            Message.error('發送失敗')
            return {}
          })
        return response
      },
      async UPDATE_711cash({ commit }, data) {
        await request({
          url: `/v1/ticket/SevenCash/update`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (res.data.message === 'success') {
              Message.success('發送成功')
            } else {
              Message.error('發送失敗')
            }
          })
          .catch(() => {
            Message.error('發送失敗')
          })
      },
      async UPDATE_711cafe({ commit }, data) {
        await request({
          url: `/v1/ticket/SevenCoffee/update`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (res.data.message === 'success') {
              Message.success('發送成功')
            } else {
              Message.error('發送失敗')
            }
          })
          .catch(() => {
            Message.error('發送失敗')
          })
      },
      async UPDATE_HiLife({ commit }, data) {
        await request({
          url: `/v1/ticket/HiLife/update`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (res.data.message === 'success') {
              Message.success('發送成功')
            } else {
              Message.error('發送失敗')
            }
          })
          .catch(() => {
            Message.error('發送失敗')
          })
      },
      async UPDATE_chicken({ commit }, data) {
        await request({
          url: `/v1/ticket/chicken/update`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (res.data.message === 'success') {
              Message.success('發送成功')
            } else {
              Message.error('發送失敗')
            }
          })
          .catch(() => {
            Message.error('發送失敗')
          })
      },
      async UPDATE_airportRestaurant({ commit }, data) {
        await request({
          url: `/v1/ticket/AirPortRestaurant/update`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (res.data.message === 'success') {
              Message.success('發送成功')
            } else {
              Message.error('發送失敗')
            }
          })
          .catch(() => {
            Message.error('發送失敗')
          })
      },
      async UPDATE_airportCoffee({ commit }, data) {
        await request({
          url: `/v1/ticket/AirPortCoffee/update`,
          method: 'post',
          data: data
        })
          .then(res => {
            if (res.data.message === 'success') {
              Message.success('發送成功')
            } else {
              Message.error('發送失敗')
            }
          })
          .catch(() => {
            Message.error('發送失敗')
          })
      }
    }
  }
}
