(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d82732dc"],{"30f3":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"選擇日期",visible:t.showDialog,"before-close":t.handleClose,width:"600px","show-close":!1}},[n("el-form",{ref:"myEdit",staticStyle:{width:"70%","margin-left":"10%"},attrs:{"label-position":"left","label-width":"20%"}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{"value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"開始日期","end-placeholder":"結束日期"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}}),t._v(" "),n("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"info"},on:{click:t.check}},[t._v("確定")])],1)],1)},a=[],i={props:{showDialog:{type:Boolean,default:!1}},data:function(){return{dateValue:[]}},methods:{check:function(){this.dateValue&&2===this.dateValue.length&&this.$emit("changeDateRange",this.dateValue)},handleClose:function(t){this.$emit("closeDialog",!1),t()}}},o=i,s=n("2877"),u=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=u.exports},"3e12":function(t,e,n){"use strict";n("96cf");var r=n("3b8d"),a=n("b775");function i(t){return Object(a["a"])({url:"/v1/data/wallet/rowdata",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/v1/data/wallet/totalcount",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/v1/data/wallet/open",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/v1/data/wallet/download",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/v1/data/wallet/googlepay",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/v1/data/wallet/qrcode",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/v1/data/wallet/exchange",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/v1/data/wallet/roaminbar",method:"post",data:t})}e["a"]=function(){return{namespaced:!0,state:{TICKETS:{}},getters:{},mutations:{SET_TICKET_LIST:function(t,e){t.TICKETS=e}},actions:{GET_ALL_TICKETS:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,i(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_ALL_TICKETS_TOTAL:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,o(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_TICKETS_OPENED:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,s(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_TICKETS_DOWNLOAD:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,u(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_TICKETS_GOOGLEPAY_DOWNLOAD:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_TICKETS_WRITTENOFF:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,l(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_TICKETS_WRITTENOFF_TOTAL:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,h(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_TICKETS_ROAMINGBAR:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,d(n).then((function(t){return t.data})).catch((function(){return[]}));case 3:return a=t.sent,a===[]&&this.$message.error("查無資料"),r("SET_TICKET_LIST",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}}}},bc22:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"30px"}},[n("div",{staticStyle:{with:"100%"}},[n("div",{staticStyle:{display:"flex",position:"relative"}},[n("h2",[t._v("已兌換票卡總數統計")]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"15%"}},[n("el-button",{attrs:{type:"info",round:""},on:{click:t.refreshList}},[t._v("刷新列表")]),t._v(" "),n("el-button",{attrs:{type:"info",round:""},on:{click:t.openDialog}},[t._v("選擇日期")])],1)]),t._v(" "),n("h4",{staticStyle:{color:"gray"}},[t._v(" 所選擇時間區間內被兌換數量 ")])]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"20px",display:"flex","justify-content":"space-between"}},[n("el-pagination",{attrs:{background:"","page-sizes":[10,100,400,1e3,t.ticketsList.length],"current-page":t.currentPage,"page-size":t.pagesize,total:t.ticketsList.length,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"filterTable",staticStyle:{width:"90%"},attrs:{data:t.ticketsList.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize)}},[n("el-table-column",{attrs:{sortable:"",label:"票券名稱",width:"300",prop:"project"}}),t._v(" "),n("el-table-column",{attrs:{prop:"count",label:"總數","show-overflow-tooltip":!0}})],1),t._v(" "),n("DialogDateRange",{attrs:{"show-dialog":t.showDialog},on:{changeDateRange:t.changeDateRange,closeDialog:t.closeDialog}})],1)},a=[],i=(n("96cf"),n("3b8d")),o=n("3e12"),s=n("30f3"),u={name:"WrittenOffTicketsTotal",components:{DialogDateRange:s["a"]},data:function(){return{currentPage:1,pagesize:10,state:"",loading:!1,total:[],sDate:"",eDate:"",showDialog:!1}},computed:{ticketsList:function(){return this.total}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:void 0===this.$store._modules.root._children.datalist&&this.$store.registerModule("datalist",Object(o["a"])()),this.showDialog=!0;case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){void 0!==this.$store._modules.root._children.datalist&&this.$store.unregisterModule("datalist")},methods:{refreshList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e={sDate:this.sDate,eDate:this.eDate},t.next=4,this.$store.dispatch("datalist/GET_TICKETS_WRITTENOFF_TOTAL",e);case 4:this.total=t.sent,this.loading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},openDialog:function(){this.showDialog=!0},changeDateRange:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,this.showDialog=!1,this.sDate=e[0],this.eDate=e[1],n={sDate:this.sDate,eDate:this.eDate},t.next=7,this.$store.dispatch("datalist/GET_TICKETS_WRITTENOFF_TOTAL",n);case 7:this.total=t.sent,this.loading=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),closeDialog:function(){this.showDialog=!1}}},c=u,l=n("2877"),h=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=h.exports}}]);