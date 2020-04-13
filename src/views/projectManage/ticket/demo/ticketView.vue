<template>
  <div style="padding:30px;">
    <div style="with:100%">
      <h2 style="margin-bottom:20px">{{ title }}</h2>
      <div style="display:flex;">
        <!-- 輸入框 -->
        <div style="width:50%">
          <h3 style="margin:20px;">生成票卡</h3>
          <el-card shadow="always">
            <el-form
              ref="ruleFormPhone"
              :model="DataPhone"
              label-position="left"
              label-width="30%"
              :rules="RulePhone"
              style="width: 80%; margin-left:5%;"
            >
              <component
                :is="field.type"
                v-for="field in fieldPhone"
                :key="field.name"
                v-model="DataPhone[field.name]"
                :placeholder="field.placeholder"
                :name="field.name"
                :label="field.label"
                :disabled="field.disabled"
                :options="field.options"
                :maxlength="field.maxlength"
              />
              <el-form-item label="寄簡訊至手機">
                <el-switch
                  v-model="issms"
                  active-color="#13ce66"
                  inactive-color="#9e9191"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="info" @click="sendMSG">確定</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <h3 style="margin:20px;">完成/取消票卡</h3>
          <el-card shadow="always">
            <el-form
              ref="ruleFormFinish"
              :model="DataOder"
              label-position="left"
              label-width="30%"
              :rules="RuleOder"
              style="width: 80%; margin-left:5%;"
            >
              <component
                :is="field.type"
                v-for="field in fieldOder"
                :key="field.name"
                v-model="DataOder[field.name]"
                :placeholder="field.placeholder"
                :name="field.name"
                :label="field.label"
                :disabled="field.disabled"
                :options="field.options"
                :maxlength="field.maxlength"
              />
              <el-form-item>
                <el-button type="info" @click="finish"> 完成票卡</el-button>
                <el-button type="info" @click="cancel"> 取消票卡</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <h3 style="margin:20px;">生成票卡資訊</h3>
          <el-card shadow="always">
            <h4>網址：{{ ticketData.url }}</h4><br>
            <h4>驗證碼：{{ ticketData.check_code }}</h4>
          </el-card>
        </div>
        <!-- card_container -->
        <div style="width:50%;text-align:center;">
          <h2>Demo樣式</h2>
          <component :is="demoCard" :dest-date="'2021/12/31'" :price="100" :ticket-used="ticketUsed" :order-i-d="ticketData.OrderID" />
          <el-button style="margin-top:30px" round icon="el-icon-refresh" @click="changeUsed">切換已完成／未使用</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ticketDemo from '@/store/modules/tickets/demo'
import DatePicker from '@/components/form/DatePicker'
import NumberInput from '@/components/form/NumberInput'
import TextInput from '@/components/form/TextInput'
// demo tickets
import CardDemoTicket711Cash from './components/CardDemoTicket711Cash'
import CardDemoTicket711Cafe from './components/CardDemoTicket711Cafe'
import CardDemoHiLifeTicketCash from './components/CardDemoHiLifeTicketCash'
import CardDemoTicketChicken from './components/CardDemoTicketChicken'
import CardDemoAirportCoffee from './components/CardDemoAirportCoffee'
import CardDemoAirportRestaurant from './components/CardDemoAirportRestaurant'

export default {
  name: 'TicketView',
  components: {
    NumberInput,
    DatePicker,
    TextInput,
    CardDemoTicket711Cash,
    CardDemoTicket711Cafe,
    CardDemoHiLifeTicketCash,
    CardDemoTicketChicken,
    CardDemoAirportRestaurant,
    CardDemoAirportCoffee
  },
  data() {
    // 手機號碼
    const fieldPhone = [
      {
        type: 'TextInput',
        name: 'mobile',
        value: '',
        label: '手機',
        placeholder: '請輸入手機',
        rules: [{ required: true, message: '請輸入手機', trigger: 'blur' }]
      }
    ]
    const DataPhone = fieldPhone.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const RulePhone = fieldPhone.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    // 完成票卡
    const fieldOder = [
      {
        type: 'TextInput',
        name: 'orderID',
        value: '',
        label: '訂單編號',
        placeholder: '請輸入訂單編號',
        rules: [{ required: true, message: '請輸入訂單編號', trigger: 'blur' }]
      }
    ]
    const DataOder = fieldOder.reduce((data, field) => {
      data[field.name] = field.value
      return data
    }, {})
    const RuleOder = fieldOder.reduce((rules, field) => {
      rules[field.name] = field.rules
      return rules
    }, {})
    return {
      fieldPhone,
      DataPhone,
      RulePhone,
      fieldOder,
      DataOder,
      RuleOder,
      issms: false,
      ticketUsed: false, // demo票卡狀態 未使用或已完成
      ticketData: {},
      demoCard: '',
      title: ''
    }
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.ticketDemo !== undefined) {
      this.$store.unregisterModule('ticketDemo')
    }
  },
  mounted() {
    // 用路由name判斷當前是哪種票卡
    switch (this.$route.name) {
      case '711cash':
        this.title = '711現金抵用券'
        this.demoCard = 'CardDemoTicket711Cash'
        break
      case '711cafe':
        this.title = '711咖啡抵用券'
        this.demoCard = 'CardDemoTicket711Cafe'
        break
      case 'HiLife':
        this.title = '萊爾富現金抵用券'
        this.demoCard = 'CardDemoHiLifeTicketCash'
        break
      case 'chicken':
        this.title = '繼光香香雞現金抵用券'
        this.demoCard = 'CardDemoTicketChicken'
        break
      case 'airportCoffee':
        this.title = '機場咖啡抵用券'
        this.demoCard = 'CardDemoAirportCoffee'
        break
      case 'airportRestaurant':
        this.title = '機場餐廳抵用券'
        this.demoCard = 'CardDemoAirportRestaurant'
        break
    }
    if (this.$store._modules.root._children.ticketDemo === undefined) {
      this.$store.registerModule('ticketDemo', ticketDemo())
    }
    this.$notify({
      title: '提示',
      message: `
                1.點選票卡可以翻頁-------------------
                2.Demo樣式與實際生成票卡資訊不同------
                3.711和萊爾富尚無取消票卡功能-----------
                `,
      position: 'top-right',
      duration: 50000
    })
  },
  methods: {
    changeUsed() {
      this.ticketUsed = !this.ticketUsed
    },
    async sendMSG() {
      const data = {
        issms: this.issms,
        mobile: this.DataPhone.mobile
      }
      const response = await this.$store.dispatch(`ticketDemo/CREATE_${this.$route.name}`, data)
      this.ticketData = response
      // 回傳格式
      // response = {
      //   result: 0,
      //   message: 'success',
      //   url: 'https://h5a79.app.goo.gl/NPtti',
      //   check_code: '6298',
      //   OrderID: 'T200331013'
      // }
      this.DataOder.orderID = response.OrderID
      this.$refs['ruleFormPhone'].resetFields()
    },
    async finish() {
      const request = {
        mobile: '',
        issms: false,
        order_id: this.DataOder.orderID,
        state: 'finish'
      }
      this.$store.dispatch(`ticketDemo/UPDATE_${this.$route.name}`, request)
    },
    async cancel() {
      const request = {
        mobile: '',
        issms: false,
        order_id: this.DataOder.orderID,
        state: 'cancel'
      }
      this.$store.dispatch(`ticketDemo/UPDATE_${this.$route.name}`, request)
    }
  }
}
</script>

