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
            <div class="logo" style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_jgssg/jgssg_logo.png );" />
            <div class="process_txt">

              <h4 class="tit" style="color:rgb(248, 20, 37)">訂單編號</h4>
              <h3 class="txt_a">{{ orderID }}</h3>

            </div>
          </header>
          <section
            v-if="!ticketUsed"
            style="background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_jgssg/jgssg_finish.png);"
          >
            <div class="name banner_un style_double_layer">
              <span style="color:#fff;" /></div>
          </section>
          <section
            v-else
            style=" background-image: url(https://s3-ap-northeast-1.amazonaws.com/idanticketresource/ticket_canlead/m_jgssg/jgssg_create.png);"
          >
            <div class="name banner_un style_double_layer">
              <span style="color:#fff;">繼光香香雞兌換券 票面價$200                            </span></div>
          </section>
          <section class="normRow">

            <ul>
              <li class="tit" style="color:rgb(248, 20, 37)">優惠提供：肯驛國際股份有限公司</li>
              <li class="txt_a">YE9H9HOH</li>
            </ul>

          </section>
          <section class="normRow">

            <ul>
              <li class="tit" style="color:rgb(248, 20, 37)">優惠效期</li>
              <li class="txt_a">即日起至 2021/12/31</li>
            </ul>

            <ul>
              <li class="tit" style="color:rgb(248, 20, 37)">抵用金額</li>
              <li class="txt_a"> NT$150</li>
            </ul>

            <ul>
              <li class="tit" style="color:rgb(248, 20, 37)">適用店家</li>
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

            <div v-if="ticketUsed" class="terms">
              <h3>核銷連結</h3>
              <ul><a>點此兌換此票卡</a></ul>
            </div>

            <div class="terms">
              <h3>優惠詳細資料</h3>
              <ul>優惠提供：肯驛國際股份有限公司<br>訂單編號：{{ orderID }}<br></ul>
            </div>

            <div class="terms">
              <h3>票券資訊</h3>
              <ul>票券類型：繼光香香雞兌換券 票面價$200<br>優惠序號：YE9H9HOH<br>優惠效期：即日起至 2021/12/31<br>購買優惠價：NT$200<br></ul>
            </div>

            <div class="terms">
              <h3>票券規範</h3>
              <ul>1.本優惠適用 <a href="https://www.freeliving.com.tw/visadebit/eat_order_Confirm.aspx#Store" target="_blank">https://www.freeliving.com.tw/visadebit/eat_order_Confirm.aspx#Store</a>所述門市，如有更新，請依照Visa金融卡活動專頁說明為主，恕不另行通知。<br>2.本券優惠折抵面額依照肯驛隨行券票卡說明，逾優惠效期優惠將無法使用；如需退款僅退回原刷卡金額，請來電<a href="tel:04-2206-1147">04-2206-1147</a>申請。<br>3.結帳前請出示本券，不接受手抄或口說序號方式兌換。<br>4.餐點以各門市現場供應為主。<br>5.本券無法兌換現金或找零，請一次抵用完畢，不可重複使用。<br>6.本券不記名使用，請妥善保管，如遭他人盜用，不再補發或退貨。<br>7.本券售出時已開立統一發票，兌換餐點時門市將不另開立發票。<br>8.本券不可與JG Card.會員卡或其他優惠合併使用。<br>9.若有未盡事宜，肯驛國際與Visa享有隨時調整、解釋、中止優惠品項之權利。<br>10.肯驛隨行券兌換影片 <a href="https://youtu.be/mtqPHdbzpFY" target="_blank">https://youtu.be/mtqPHdbzpFY</a> 。<br></ul>
            </div>

            <div class="terms">
              <h3>序號兌換地點</h3>
              <ul><a href="http://www.jgssg.com.tw/zh-tw/Store">http://www.jgssg.com.tw/zh-tw/Store</a></ul>
            </div>

            <div class="terms">
              <h3>網站連結</h3>
              <ul><a id="storefb" target="_blank" href="https://www.freeliving.com.tw/visa/daily_teatime_li.aspx">專案連結</a></ul>
            </div>

            <div class="terms">
              <h3>兌換教學影片</h3>
              <ul><a href="https://youtu.be/mtqPHdbzpFY">https://youtu.be/mtqPHdbzpFY</a></ul>
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
  name: 'CardDemoTicketChicken',
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
