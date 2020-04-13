<template>
  <div id="ticket" class="container_card_all for_mobile" style="text-align:center;">
    <div id="card" :class="{flipped:flip}" @click="flipCard">
      <!-- ======以下是卡片本體內容============================================ -->
      <figure id="flip_a" class="front ufirst_process_positive_a">
        <div class="card_container">
          <div class=" card_mask_mask">
            <div class="card_mask" />
          </div>
          <header class="ticket_top ticket_top_header">
            <div class="logo" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_7_c/logo.png);" />
            <div class="process_txt">
              <h4 class="tit">客戶編號</h4>
              <h3 class="txt_a"><span style="color:red">{{ orderID }}</span></h3>
            </div>
          </header>
          <!-- 已使用 -->
          <section v-if="ticketUsed" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_7_c/strip_finish.png);">
            <div class="name banner_un style_double_layer">
              <span /></div>
          </section>
          <!-- 未使用 -->
          <section
            v-else
            style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_7_c/strip.png);"
          >
            <div class="name banner_un style_double_layer">
              <span>NT${{ price }} 現金抵用券</span></div>
          </section>
          <section class="normRow">
            <ul>
              <li class="tit">優惠提供：嘉聯資通股份有限公司</li>
              <li class="txt_a">兌換序號 UPT1LK31</li>
            </ul>
          </section>
          <section class="normRow">
            <ul>
              <li class="tit">優惠效期</li>
              <li class="txt_a">即日起至 {{ destDate }}</li>
            </ul>
            <ul>
              <li class="tit">抵用金額</li>
              <li class="txt_a">NT${{ price }}</li>
            </ul>
            <ul>
              <li class="tit">適用店家</li>
              <li class="txt_a">7-ELEVEN</li>
            </ul>
          </section>
          <section v-show="!ticketUsed" class="normRow">
            <div class="qr_barcode">
              <svg id="code1281" style="width:245px;margin-left:auto;margin-top: 30px;" />
              <svg id="code1282" style="width:245px;margin-left: auto;margin-top: 5px;" />
              <br>詳細說明請點選ⓘ參考背面
            </div>
          </section>
          <section class="normRow ticket_buttom" />
          <div
            style="position: absolute; right: 20px; bottom: 10px; border: 2px solid #666666; color: #ffffff; background: #666666;border-radius: 10px; padding: 1.5px 10px;"
          >
            點擊查看詳細訊息</div>
          <div class="i_b">...</div>
        </div>
      </figure>
      <figure id="flip_b" class="back ufirst_process_back_a">
        <div class="overflow card_container_back">
          <div class="ticket_top card_mask_mask">
            <div class="card_mask" />
          </div>
          <section>
            <div class="form_header">
              <span>肯驛隨行券</span>
            </div>
          </section>
          <section>
            <div class="terms">
              <h3>優惠詳細資料</h3>
              <ul>優惠提供：嘉聯資通股份有限公司<br>
                訂單編號：<span style="color:red">{{ orderID }}</span></ul>
            </div>
            <div class="terms">
              <h3>票券資訊</h3>
              <ul>票券類型：NT${{ price }} 現金抵用券<br>
                優惠序號：UPT1LK31<br>
                兌換效期：即日起至 {{ destDate }}<br>
                抵用金額：NT${{ price }}<br>
                適用店家：7-ELEVEN<br>
              </ul>
            </div>
            <div class="terms">
              <h3>兌換店家規範</h3>
              <ul>1. 若有手機條碼無法順利刷讀或感應不良，可於門市ibon列印紙本兌換券。選擇左上角代碼輸入-&gt;輸入條碼上之12碼兌換序號兌換。 <br>
                2. 請依照兌換券上之指定商品及兌換期限前兌換完畢，逾期恕不接收兌換。
                <br>
                3. 本兌換券需當次使用完畢，不找零，可累積使用（至多99張)；並不得要求折抵現金，亦不得轉售。<br>
                4.本券可抵全店消費（無開立發票之服務恕無法折抵）；但不得使用代收、代售業務及健康捐商品(如：香菸)及儲值(如：icash、悠遊卡、一卡通...等)。 <br>
                5.非開立「7-ELEVEN發票」之門市（如：台鐵門市、部份學校、廠辨及商場門市...等)，及雖開立本公司發票，但為特殊門市（如：綠島門市、蘭嶼門市）及集團關係企業門市恕無法提供折抵及兌換，請至鄰近其他門市兌換。 <br>
                6.請妥善保管本券，若遺失、毀損或保存不當造成模糊辨識不清，恕不補發；影印亦不得使用。 <br>
                7. 主辦單位及本公司保留隨時修正、暫停或終止本活動之權利及更換等值商品之權利，如有變動並將另行公告。 <br></ul>
            </div>
            <div class="terms">
              <h3>票券規範</h3>
              <ul>1.本券僅限兌換乙次，恕不找零。<br>
                2.限持卡人本人使用，恕不得轉讓、兌換現金或販售，不得與其他優惠合併使用。<br>
                3.客服專線: <a href="tel:04-2206-1147">04-2206-1147</a><br>
              </ul>
            </div>
            <div class="terms">
              <h3>序號兌換地點</h3>
              <ul>
                <a href="http://emap.pcsc.com.tw/emap.aspx">http://emap.pcsc.com.tw/emap.aspx</a>
              </ul>
            </div>
            <div class="terms">
              <h3>網站連結</h3>
              <ul>
                <a id="storefb" target="_blank" href="https://www.freeliving.com.tw/visa/daily_teatime_li.aspx">專案連結</a>
              </ul>
            </div>
          </section>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode'
export default {
  name: 'CardDemoTicket711Cash',
  props: {
    destDate: {
      type: String,
      default: 'default'
    },
    price: {
      type: Number,
      default: 0
    },
    ticketUsed: {
      type: Boolean,
      required: true
    },
    orderID: {
      type: String,
      default: '??????????'
    }
  },
  data() {
    return {
      flip: false
    }
  },
  async mounted() {
    JsBarcode('#code1281', 12232232131, { format: 'CODE128', height: 40 })
    JsBarcode('#code1282', 123123131231, { format: 'CODE128', height: 40, displayValue: false })
  },
  methods: {
    flipCard() {
      this.flip = !this.flip
    }
  }

}
</script>
<style lang="scss" scoped>
  @import "~@/styles/ticket.scss";
</style>
