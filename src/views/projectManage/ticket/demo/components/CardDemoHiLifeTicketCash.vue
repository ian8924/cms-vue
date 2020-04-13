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

              <h4 class="tit">訂單編號</h4>
              <h3 class="txt_a" style="color:red">{{ orderID }}</h3>

            </div>
          </header>
          <section v-if="ticketUsed" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_7_c/strip_finish.png);">
            <div class="name banner_un style_double_layer">
              <span /></div>
          </section>
          <section v-else style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_hilife/strip.png);">
            <div class="name banner_un style_double_layer">
              <span>NT$100 萊爾富現金                            </span></div>
          </section>
          <section class="normRow">

            <ul>
              <li class="tit">優惠提供： 肯驛國際股份有限公司</li>
              <li v-if="!ticketUsed" class="txt_a">兌換序號 PTU8SQ7H</li>
            </ul>

          </section>
          <section class="normRow">

            <ul>
              <li class="tit">優惠效期</li>
              <li class="txt_a">2021/12/31</li>
            </ul>

            <ul>
              <li class="tit">抵用金額</li>
              <li class="txt_a">免費</li>
            </ul>

            <ul>
              <li class="tit">適用店家</li>
              <li class="txt_a">萊爾富</li>
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
          <div style="position: absolute; right: 20px; bottom: 10px; border: 2px solid #666666; color: #ffffff; background: #666666;border-radius: 10px; padding: 1.5px 10px;">點擊查看詳細訊息</div>
          <div class="i_b">...</div>
        </div>
      </figure>
      <figure id="flip_b" class="back ufirst_process_back_a">
        <div class="overflow card_container_back">
          <div class="ticket_top card_mask_mask" style="transform: matrix(1, 0, 0, 1, 0, 0);">
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
              <ul>優惠提供：肯驛國際股份有限公司 <br>訂單編號：<span style="color:red">{{ orderID }}</span><br></ul>
            </div>

            <div class="terms">
              <h3>票券資訊</h3>
              <ul>票券類型：NT$100 萊爾富現金<br>優惠序號：PTU8SQ7H<br>兌換效期：即日起至2021/12/31<br>抵用金額：免費<br>適用店家：萊爾富<br></ul>
            </div>

            <div class="terms">
              <h3>票券規範</h3>
              <ul>1.本券僅限兌換乙次，恕不找零。<br>2.限持卡人本人使用，恕不得轉讓、兌換現金或販售，不得與其他優惠合併使用。<br>3.客服專線: <a href="tel:04-2206-1147">04-2206-1147</a><br></ul>
            </div>

            <div class="terms">
              <h3>序號兌換地點</h3>
              <ul><a id="storefb" target="_blank" href="https://www.hilife.com.tw/storeInquiry_street.aspx">https://www.hilife.com.tw/storeInquiry_street.aspx</a></ul>
            </div>

            <div class="terms">
              <h3>網站連結</h3>
              <ul><a id="storefb" target="_blank" href="https://www.freeliving.com.tw/visa/daily_teatime_li.aspx">專案連結</a></ul>
            </div>

            <div class="terms">
              <h3>服務單位：肯驛國際股份有限公司</h3>
              <ul />
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
  name: 'CardDemoHiLifeTicketCash',
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
