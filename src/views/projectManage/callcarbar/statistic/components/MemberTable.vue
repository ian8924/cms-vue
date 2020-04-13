<template>
  <div>
    <div style="padding: 30px  30px 30px 0px;">
      <el-button v-if="members.length > 0" @click="downloadHandler">下載資料</el-button>
    </div>
    <el-table
      :data="members"
    >
      <el-table-column
        v-for="(col, i) in cols"
        :key="i"
        :label="col.label"
        :sortable="col.sortable"
        :show-overflow-tooltip="true"
      >
        <template slot-scope="scope">
          <h4 style="color:gray;">
            {{ scope.row[col.scope] }}
          </h4>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'

export default {
  name: 'MemberTable',
  props: {
    cols: { type: Array, required: true },
    members: { type: Array, required: true }
  },
  computed: {
    keys() {
      return this.cols.map(col => col.scope)
    }
  },
  methods: {
    /**
     * @name downloadHandler
     * @description 將會員資料陣列轉換成文字檔並儲存檔案
     */
    downloadHandler() {
      let raw = ''
      raw += this.cols.map(col => col.label).join(',') + '\r\n'
      this.members.forEach(member => {
        this.keys.forEach((key, i) => {
          raw += `${member[key]}${i === this.keys.length - 1 ? '' : ','}`
        })
        raw += '\r\n'
      })
      const date = new Date()
      const blob = new Blob([raw], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, `會員名單_${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}.csv`)
    }
  }
}
</script>

<style>

</style>
