<template>
  <div>
    會員資料
    <MemberSearchPanel @search="searchHandler" />
    <MemberTable v-loading="" :cols="cols" :members="members" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MemberSearchPanel from './components/MemberSearchPanel'
import MemberTable from './components/MemberTable'

const colsConfig = {
  'name': '姓名',
  'mail': 'E-mail',
  'mobile': '手機'
}

export default {
  name: 'Member',
  components: { MemberSearchPanel, MemberTable },
  data() {
    return {
      memberDataQuery: '',
      members: []
    }
  },
  computed: {
    /**
     * @name observeMemberDataQueryString
     * @description get 將物件轉換成 Query String 字串
     */
    observeMemberDataQueryString: {
      get() {
        const value = this.memberDataQuery
        const columns = value['columns'].map(col => `columns=${col}`).join('&')
        const filters = `filters=${value['condition']}`
        const startDate = `startDate=${value['startDate']}`
        const endDate = `endDate=${value['endDate'] || ''}`

        return [columns, filters, startDate, endDate].join('&')
      },
      set(value) {
        this.memberDataQuery = value
      }
    },
    ...mapGetters('statistic', {
      'loading': 'IS_LOADING'
    }),
    /**
     * @name cols
     * @description 將 memberDataQuery 資料欄位動態轉換成 Table 要顯示的欄位設定
     */
    cols() {
      const columns = this.memberDataQuery.columns || []

      return columns.map(col => {
        return {
          label: colsConfig[col],
          scope: col
        }
      })
    }
  },
  methods: {
    async searchHandler(e) {
      this.observeMemberDataQueryString = e
      this.members = await this.$store.dispatch('statistic/GET_MEMBER_LIST', this.observeMemberDataQueryString)
    }
  }
}
</script>

<style>

</style>
