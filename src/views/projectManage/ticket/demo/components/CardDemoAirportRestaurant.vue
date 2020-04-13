<template>
  <div id="coffee" class="container_card_all for_mobile" style="text-align:center;">
    <div id="card" :class="{flipped:flip}" @click="flipCard">
      <!-- ======以下是卡片本體內容============================================ -->
      <figure id="flip_a" class="front ufirst_process_positive_a">
        <div class="card_container">
          <div class=" card_mask_mask">
            <div class="card_mask" />
          </div>
          <header class="ticket_top ticket_top_header">
            <div class="logo" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/canlead_restaurant/logo.png );" />
            <div class="process_txt">

              <h4 class="tit" style="color:rgb(13, 153, 145)">訂單編號</h4>
              <h3 class="txt_a"><span style="color:red;">{{ orderID }}</span></h3>

            </div>
          </header>
          <section v-if="ticketUsed" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/canlead_restaurant/strip_3.png);">
            <div class="name banner_un style_double_layer">
              <span /></div>
          </section>
          <section v-else style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/canlead_restaurant/strip_1.png);">
            <div class="name banner_un style_double_layer">
              <span>台灣機場餐廳 NT$300 現金抵用券                            </span></div>
          </section>
          <section class="normRow">

            <ul>
              <li class="tit" style="color:rgb(13, 153, 145)">優惠提供：肯驛國際股份有限公司</li>
              <li class="txt_a">優惠序號：G8RZHRVU</li>
            </ul>

          </section>
          <section class="normRow">

            <ul>
              <li class="tit" style="color:rgb(13, 153, 145)">兌換效期</li>
              <li class="txt_a">2021/12/31</li>
            </ul>

            <ul>
              <li class="tit" style="color:rgb(13, 153, 145)">兌換內容</li>
              <li class="txt_a">指定套餐乙客</li>
            </ul>

            <ul>
              <li class="tit" style="color:rgb(13, 153, 145)">適用店家</li>
              <li class="txt_a">次頁指定餐廳</li>
            </ul>

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
              <span>肯驛隨行券</span>
            </div>
          </section>
          <section>

            <div v-show="!ticketUsed" class="terms">
              <h3>核銷連結</h3>
              <ul><a>點此兌換此票卡</a></ul>
            </div>

            <div class="terms">
              <h3>優惠詳細資料</h3>
              <ul>優惠提供：肯驛國際股份有限公司<br>訂單編號：<span style="color:red;">{{ orderID }}</span><br></ul>
            </div>

            <div class="terms">
              <h3>票券資訊</h3>
              <ul>票券類型：<br>優惠序號：G8RZHRVU<br>兌換效期：2021/12/31<br>兌換內容：指定套餐乙客<br></ul>
            </div>

            <div class="terms">
              <h3>注意事項</h3>
              <ul>1.兌換請出示本票卡，此票卡恕不接受截圖、手抄序號兌換，如有任何問題請洽發卡機構或肯驛國際客服專線: <a href="tel:04-2206-1147">04-2206-1147</a>。<br>2.可依照門市餐飲牌價抵用，可補差額使用。<br>3.電子券產出後請儘速於期限內兌換完畢，逾期或遺失恕不補發。<br>4.本券限兌換乙個，兌換條碼一經刷讀完成兌換後，恕無法接受退貨或換貨。<br>5.本券無法兌換現金或找零，請一次抵用完畢，逾期視同作廢，恕不接受兌換，亦無法接受退還資格。<br>6.本券不得與其他促銷活動、其他優惠合併使用。<br>7.本券不得兌換現金或販售。<br>8.請善盡保管，本券若轉發他人導致無法使用，恕不補發。<br>9.發卡機構得以保留修改活動及更換之權利。<br></ul>
            </div>

            <div class="terms">
              <h3>適用店家</h3>
              <ul>松山機場<br>-昇恆昌 hómee KITCHEN 好饗廚房(近6號登機門)<br>-昇恆昌 Wing Cafe<br><br>桃園機場 第一航廈<br>-昇恆昌 Bistro:D 畢卓樂地餐廳(出境樓層A6登機門)<br>-昇恆昌 Bistro:D 畢卓樂地餐廳(出境樓層B5登機門)<br>桃園機場 第二航廈<br>-誠盟 D3 Bar(出境樓層管制區內D3登機門旁)<br>-誠盟 D7 Bar(出境樓層管制區內D7登機門旁)<br>-誠盟 Godiva(第二航廈4F 出境管制區)<br>-誠盟 慢慢來義式餐廳(第二航廈管制區內D7登機門旁)<br>-昇恆昌 KiKi麵<br>-昇恆昌 烙張清真牛肉麵館<br><br>台中機場<br>-昇恆昌 hómee KITCHEN 好饗廚房(僅限3F國際線出境樓層，近4號登機門)<br><br>高雄機場<br>-昇恆昌 hómee KITCHEN 好饗廚房(三樓出境管制區內，東區近26號登機門)<br>-昇恆昌 hómee KITCHEN 好饗廚房(於3F出境證照查驗大廳出口左轉，西區中央長廊左側)<br>※上述兌換店家如有增減、異動，請依照活動專頁說明為主，恕不另行通知。<br></ul>
            </div>

            <div class="terms">
              <h3>序號兌換</h3>
              <ul><a style="word-break: break-all;" href="https://goo.gl/n2nPnc">goo.gl/n2nPnc</a></ul>
            </div>

            <div class="terms">
              <h3>網站連結</h3>
              <ul><a style="word-break: break-all;" href="https://www.freeliving.com.tw/visa/daily_teatime_li.aspx">專案連結</a></ul>
            </div>

            <div class="terms">
              <h3>兌換教學影片</h3>
              <ul><a style="word-break: break-all;" href="https://www.youtube.com/watch?v=ebIvtTKV7iE">https://www.youtube.com/watch?v=ebIvtTKV7iE</a></ul>
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
export default {
  name: 'CardDemoAirportRestaurant',
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
