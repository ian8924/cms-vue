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
            <div class="logo" style="background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_er_coffee_stamp/logo.png)" />
            <div class="process_txt">

              <h4 class="tit">訂單編號</h4>
              <h3 class="txt_a" style="color:red">{{ orderID }}</h3>

            </div>
          </header>
          <section v-if="ticketUsed" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_coffee/cafe_strip_done.png);">
            <div class="name banner_un style_double_layer">
              <span /></div>
          </section>
          <section v-else style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_er_coffee_stamp/strip.png);">
            <div class="name banner_un style_double_layer">
              <span>台灣機場餐廳 美式咖啡兌換券</span></div>
          </section>
          <section class="normRow">

            <ul>
              <li class="tit">優惠提供：肯驛國際股份有限公司</li>
              <li class="txt_a">coffee44ybt</li>
            </ul>

          </section>
          <section class="normRow">

            <ul>
              <li class="tit">優惠效期</li>
              <li class="txt_a">2021/12/31</li>
            </ul>

            <ul>
              <li class="tit">抵用金額</li>
              <li class="txt_a">請參考背面說明</li>
            </ul>

            <ul>
              <li class="tit">適用店家</li>
              <li class="txt_a">背面指定餐廳</li>
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

            <div v-if="!ticketUsed" class="terms">
              <h3>核銷連結</h3>
              <ul><a>點此兌換此票卡</a></ul>
            </div>

            <div class="terms">
              <h3>優惠詳細資料</h3>
              <ul>優惠提供：肯驛國際股份有限公司<br>訂單編號：<span style="color:red;">{{ orderID }}</span><br></ul>
            </div>

            <div class="terms">
              <h3>票券資訊</h3>
              <ul>票券類型：台灣機場餐廳 美式咖啡兌換券<br>coffee44ybt<br>優惠效期：2021/12/31<br>抵用金額：依適用店家 美式咖啡售價為準<br></ul>
            </div>

            <div class="terms">
              <h3>注意事項</h3>
              <ul>1.兌換請出示本票卡，此票卡恕不接受截圖、手抄序號兌換，如有任何問題請洽發卡機構或肯驛國際客服專線: <a href="tel:04-2206-1147">04-2206-1147</a>。<br>2.可依照門市美式咖啡牌價，可補牌價差額兌換其他飲品。<br>(註) 除補足牌價差額兌換飲品外，其他商品恕無法兌換。<br>3.電子券產出後請儘速於期限內兌換完畢，逾期或遺失恕不補發。<br>4.本券限兌換乙個，兌換條碼一經刷讀完成兌換後，恕無法接受退貨或換貨。<br>5.本券無法兌換現金或找零，請一次抵用完畢，逾期視同作廢，恕不接受兌換，亦無法接受退還資格。<br>6.本券不得與其他促銷活動、其他優惠合併使用。<br>7.本券不得兌換現金或販售。<br>8.請善盡保管，本券若轉發他人導致無法使用，恕不補發。<br>9.發卡機構得以保留修改活動及更換之權利。<br></ul>
            </div>

            <div class="terms">
              <h3 />
              <ul>松山機場<br>-昇恆昌 hómee KITCHEN 好饗廚房<br>-昇恆昌 Wing Cafe<br><br>桃園機場<br>-昇恆昌 hómee KITCHEN 好饗廚房<br>-昇恆昌 Bistro:D 畢卓樂地餐廳<br>-昇恆昌<br>Espressamente illy<br>-誠盟 D3 Bar<br>-誠盟 D7 Bar<br>-誠盟 夢咖啡<br>-誠盟 Godiva(第一航廈門市不適用)<br><br>台中機場<br>-昇恆昌 hómee KITCHEN 好饗廚房(僅限3F國際線出境樓層)<br><br>高雄機場<br>-昇恆昌 hómee KITCHEN 好饗廚房<br>-昇恆昌 hómee CAFÉ 好饗咖啡<br>※上述兌換店家如有增減、異動，請依照活動專頁說明為主，恕不另行通知。<br></ul>
            </div>

            <div class="terms">
              <h3>序號兌換地點</h3>
              <ul><a href="https://www.smartticket.com.tw/airport_cafe.html">https://www.smartticket.com.tw/airport_cafe.html</a></ul>
            </div>

            <div class="terms">
              <h3>核銷使用教學</h3>
              <ul><a href="https://youtu.be/cH0cta49HH8">https://youtu.be/cH0cta49HH8</a></ul>
            </div>

            <div class="terms">
              <h3>服務單位</h3>
              <ul>肯驛國際(股)公司</ul>
            </div>
          </section>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDemoAirportCoffee',
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
