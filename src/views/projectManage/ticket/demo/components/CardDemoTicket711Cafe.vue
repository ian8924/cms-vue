<template>
  <div id="coffee" class="container_card_all for_mobile" style="text-align:center;">

    <div id="card" class="" :class="{flipped:flip}" @click="flipCard">
      <!-- ======以下是卡片本體內容============================================ -->
      <figure id="flip_a" class="front ufirst_process_positive_a">
        <div class="card_container">
          <div class=" card_mask_mask">
            <div class="card_mask" />
          </div>
          <header class="ticket_top ticket_top_header">
            <div
              class="logo"
              style="background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/k_dev_prototype/MT_coffee/coffee-03.png);"
            />
            <div class="process_txt">

              <h4 class="tit">客戶編號</h4>
              <h3 class="txt_a" style="color:red">{{ orderID }}</h3>

            </div>
          </header>
          <section v-if="ticketUsed" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_coffee/cafe_strip_done.png);">
            <div class="name banner_un style_double_layer">
              <span /></div>
          </section>
          <section v-else style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_coffee/cafe_strip_html.png);">
            <div class="name banner_un style_double_layer">
              <span>３５元ＣＩＴＹＣＡＦＥ任選                            </span></div>
          </section>
          <section class="normRow">
            <ul>
              <li class="tit">優惠提供： 肯驛國際股份有限公司</li>
              <li class="txt_a">兌換序號 8VGEUHFT</li>
            </ul>
          </section>
          <section class="normRow">
            <ul>
              <li class="tit">優惠效期</li>
              <li class="txt_a">即日起至2021/12/31</li>
            </ul>

            <ul>
              <li class="tit">抵用金額</li>
              <li class="txt_a">NT$35</li>
            </ul>

            <ul>
              <li class="tit">適用店家</li>
              <li class="txt_a">7-ELEVEN</li>
            </ul>

          </section>
          <section v-show="!ticketUsed" class="normRow">
            <div class="qr_barcode">
              <svg id="code1281" />
              <svg id="code1282" />
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
          <div class="ticket_top card_mask_mask">
            <div class="card_mask" />
          </div>
          <section>
            <div class="form_header">
              <span>肯驛隨行 咖啡兌換券</span>
            </div>
          </section>
          <section>

            <div class="terms">
              <h3>優惠詳細資料</h3>
              <ul>優惠提供：肯驛國際股份有限公司 <br>訂單編號：<span style="color:red">{{ orderID }}</span><br></ul>
            </div>

            <div class="terms">
              <h3>票券資訊</h3>
              <ul>票券類型：３５元ＣＩＴＹＣＡＦＥ任選<br>優惠序號：8VGEUHFT<br>兌換效期：即日起至2021/12/31<br>抵用金額：NT$35<br>適用店家：7-ELEVEN<br></ul>
            </div>

            <div class="terms">
              <h3>兌換店家規範</h3>
              <ul>1. 若有手機條碼無法順利刷讀或感應不良，可於門市ibon列印紙本兌換券。選擇左上角代碼輸入、輸入兌換序號、確認後即可列印紙本小白單。 <br>2. 電子券產出後請儘速於期限內兌換完畢，逾期或遺失恕不補發。 <br>3. 本券限兌換乙個，兌換條碼一經刷讀完成兌換後，恕無法接受退貨或換貨。 <br>4. 本券不得折抵現金，亦不得轉售，逾期視同作廢，恕不接受兌換，亦無法接受退還點數或資格。 <br>5. 本券不得與其他促銷活動合併使用，也不計入統一超商舉辦之全店集點活動消費金額內。 <br>6. 非使用統一超商發票之特殊門市無法兌換(如:台鐵或高鐵門市、百貨公司等)，本兌換券使用時需符合本券載明之品牌及規格，並以該門市實際販售之商品為主。 <br>7. 贈品依各門市庫存數量為準，使用時須符合本券載明之品牌與規格，兌換前請先確認門市是否有足夠數量。 <br>8. 活動主辦單位得以保留修改活動及更換贈品之權利，如對兌換資格或活動辦法有疑問請洽活動主辦廠商。 <br></ul>
            </div>

            <div class="terms">
              <h3>票券規範</h3>
              <ul>1.本券僅限兌換乙次，恕不找零。<br>2.限持卡人本人使用，恕不得轉讓、兌換現金或販售，不得與其他優惠合併使用。<br>3.客服專線: <a href="tel:04-2206-1147">04-2206-1147</a><br></ul>
            </div>

            <div class="terms">
              <h3>序號兌換地點</h3>
              <ul><a id="storefb" target="_blank" href="http://emap.pcsc.com.tw/emap.aspx">http://emap.pcsc.com.tw/emap.aspx</a></ul>
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
  name: 'CardDemoTicket711Cafe',
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
