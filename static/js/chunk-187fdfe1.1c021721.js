(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-187fdfe1"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var a,o,c=String(i(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(a=c.charCodeAt(u),a<55296||a>56319||u+1===s||(o=c.charCodeAt(u+1))<56320||o>57343?t?c.charAt(u):a:t?c.slice(u,u+2):o-56320+(a-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0f20":function(t,e,n){"use strict";n.d(e,"p",(function(){return i})),n.d(e,"o",(function(){return a})),n.d(e,"h",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"r",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"g",(function(){return d})),n.d(e,"q",(function(){return m})),n.d(e,"k",(function(){return p})),n.d(e,"b",(function(){return h})),n.d(e,"l",(function(){return v})),n.d(e,"f",(function(){return g})),n.d(e,"m",(function(){return b})),n.d(e,"n",(function(){return _})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return w}));var r=n("b775");function i(){return Object(r["a"])({url:"/v1/edm/campaigns",method:"get"})}function a(t){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t),method:"get"})}function o(t,e){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t),method:"put",data:e})}function c(t){return Object(r["a"])({url:"/v1/edm/campaigns",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t,"/emails"),method:"get"})}function s(t,e){return"".concat("https://edm.callcarbar.com.tw","/v1/edm/campaigns/").concat(t,"/emails/").concat(e,"/template")}function l(t,e){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t,"/emails"),method:"post",data:e})}function f(t,e){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t,"/emails/").concat(e),method:"get"})}function d(t,e,n){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t,"/emails/").concat(e),method:"put",data:n})}function m(t,e,n){return Object(r["a"])({url:"/v1/edm/campaigns/".concat(t,"/emails/").concat(e,"/send"),method:"post",data:n})}function p(){return Object(r["a"])({url:"/v1/edm/contacts/groups",method:"get"})}function h(t){return Object(r["a"])({url:"/v1/edm/contacts/groups",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/v1/edm/contacts/groups/".concat(t),method:"get"})}function g(t){return Object(r["a"])({url:"/v1/edm/contacts/groups/".concat(t),method:"delete"})}function b(){return Object(r["a"])({url:"/v1/edm/contacts/blacklist",method:"get"})}function _(){return Object(r["a"])({url:"/v1/edm/failure",method:"get"})}function E(t){return Object(r["a"])({url:"/v1/edm/contacts/blacklist",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/v1/edm/failure",method:"post",data:t})}},1:function(t,e){},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},2:function(t,e){},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),a=n("79e5"),o=n("be13"),c=n("2b4c"),u=n("520a"),s=c("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=c(t),m=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=m?!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!e})):void 0;if(!m||!p||"replace"===t&&!l||"split"===t&&!f){var h=/./[d],v=n(o,d,""[t],(function(t,e,n,r,i){return e.exec===u?m&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=v[0],b=v[1];r(String.prototype,t,g),i(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),a=n("ebd6"),o=n("0390"),c=n("9def"),u=n("5f1b"),s=n("520a"),l=n("79e5"),f=Math.min,d=[].push,m="split",p="length",h="lastIndex",v=4294967295,g=!l((function(){RegExp(v,"y")}));n("214f")("split",2,(function(t,e,n,l){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[p]||2!="ab"[m](/(?:ab)*/)[p]||4!="."[m](/(.?)(.?)/)[p]||"."[m](/()()/)[p]>1||""[m](/.?/)[p]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var a,o,c,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=void 0===e?v:e>>>0,g=new RegExp(t.source,l+"g");while(a=s.call(g,i)){if(o=g[h],o>f&&(u.push(i.slice(f,a.index)),a[p]>1&&a.index<i[p]&&d.apply(u,a.slice(1)),c=a[0][p],f=o,u[p]>=m))break;g[h]===a.index&&g[h]++}return f===i[p]?!c&&g.test("")||u.push(""):u.push(i.slice(f)),u[p]>m?u.slice(0,m):u}:"0"[m](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,r):b.call(String(i),n,r)},function(t,e){var r=l(b,t,this,e,b!==n);if(r.done)return r.value;var s=i(t),d=String(this),m=a(s,RegExp),p=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(g?"y":"g"),_=new m(g?s:"^(?:"+s.source+")",h),E=void 0===e?v:e>>>0;if(0===E)return[];if(0===d.length)return null===u(_,d)?[d]:[];var w=0,x=0,y=[];while(x<d.length){_.lastIndex=g?x:0;var D,O=u(_,g?d:d.slice(x));if(null===O||(D=f(c(_.lastIndex+(g?0:x)),d.length))===w)x=o(d,x,p);else{if(y.push(d.slice(w,x)),y.length===E)return y;for(var A=1;A<=O.length-1;A++)if(y.push(O[A]),y.length===E)return y;x=w=D}}return y.push(d.slice(w)),y}]}))},"2f21":function(t,e,n){"use strict";var r=n("79e5");t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},3:function(t,e){},"469f":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("7d7b")},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,c="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[c]||0!==e[c]}(),s=void 0!==/()??/.exec("")[1],l=u||s;l&&(o=function(t){var e,n,o,l,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),u&&(e=f[c]),o=i.call(f,t),u&&o&&(f[c]=f.global?o.index+o[0].length:e),s&&o&&o.length>1&&a.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"55dd":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d8e8"),a=n("4bf8"),o=n("79e5"),c=[].sort,u=[1,2,3];r(r.P+r.F*(o((function(){u.sort(void 0)}))||!o((function(){u.sort(null)}))||!n("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(a(this)):c.call(a(this),i(t))}})},"5a91":function(t,e,n){"use strict";n("96cf");var r=n("3b8d"),i=(n("55dd"),n("0f20"));e["a"]=function(){return{namespaced:!0,state:{Email_Groups_List:[],black_List:[],failure_List:[]},mutations:{SET_EMAIL_GROUPS_LIST:function(t,e){t.Email_Groups_List=e.sort((function(t,e){return e.id-t.id}))},SET_BLACK_LIST:function(t,e){t.black_List=e.sort((function(t,e){return e.id-t.id}))},SET_FAILURE_LIST:function(t,e){t.failure_List=e}},actions:{GET_EMAIL_GROUP:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(i["k"])().then((function(t){return t.data}));case 3:r=t.sent,n("SET_EMAIL_GROUPS_LIST",r);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_BLACK_LIST:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(i["m"])().then((function(t){return t.data}));case 3:r=t.sent,n("SET_BLACK_LIST",r);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),GET_EMAIL_NAMELIST_CONTENT:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,Object(i["l"])(n).then((function(t){return t.data}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),GET_FAILTURE_LIST:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Object(i["n"])().then((function(t){return t.data}));case 3:r=t.sent,n("SET_FAILURE_LIST",r);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),ADD_EMAIL_GROUP:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,Object(i["b"])(n).then((function(t){return t.data}));case 3:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),ADD_BLACK_LIST:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,Object(i["c"])(n).then((function(t){return t.data}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),ADD_FAILURE:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,Object(i["d"])(n).then((function(t){return t.data}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),DELETE_EMAIL_NAMELIST:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.next=3,Object(i["f"])(n).then((function(t){return t.data}));case 3:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()}}}},"5d73":function(t,e,n){t.exports=n("469f")},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"768b":function(t,e,n){"use strict";var r=n("a745"),i=n.n(r);function a(t){if(i()(t))return t}var o=n("5d73"),c=n.n(o),u=n("c8bb"),s=n.n(u);function l(t,e){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,u=c()(t);!(r=(o=u.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){i=!0,a=l}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw a}}return n}}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(t,e){return a(t)||l(t,e)||f()}n.d(e,"a",(function(){return d}))},"7d7b":function(t,e,n){var r=n("e4ae"),i=n("7cd6");t.exports=n("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},"95d5":function(t,e,n){var r=n("40c3"),i=n("5168")("iterator"),a=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(r(e))}},a745:function(t,e,n){t.exports=n("f410")},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},bbc8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"30px"}},[n("div",{staticStyle:{with:"100%"}},[n("div",{staticStyle:{display:"flex",position:"relative"}},[n("h2",[t._v("Email 名單管理")]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"15%"}},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["EDM-編輯者"],expression:"['EDM-編輯者']"}],attrs:{type:"success",icon:"el-icon-plus",round:""},on:{click:function(e){return t.openDialog("ADD")}}},[t._v("新增群組")]),t._v(" "),n("el-button",{attrs:{type:"info",icon:t.loadingIcon,round:""},on:{click:t.reFreshList}},[t._v("刷新列表")])],1)])]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"id",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"群組名稱",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"gray"}},[t._v(t._s(e.row.groupName))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{directives:[{name:"permission",rawName:"v-permission",value:["EDM-編輯者"],expression:"['EDM-編輯者']"}],staticClass:"item",attrs:{effect:"dark",content:"刪除",placement:"top-start"}},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(n){return t.deleteGroup(e.row.id,e.row.groupName)}}})],1),t._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"查看名單",placement:"top-start"}},[n("el-button",{attrs:{type:"info",icon:"el-icon-tickets",circle:""},on:{click:function(n){return t.openDialog("CHECK",e.row.id)}}})],1)]}}])})],1),t._v(" "),n("DialogNameList",{attrs:{"email-namelist":t.emailNamelist,"show-dialog":t.showCheckDialog},on:{showNamelistDialog:t.closeDialog}}),t._v(" "),t.showAddDialog?n("DialogAddEmailGroup",{attrs:{"show-dialog":t.showAddDialog},on:{showAddDialog:t.closeDialog}}):t._e()],1)},i=[],a=(n("96cf"),n("3b8d")),o=n("5a91"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"查看名單",visible:t.showDialog,direction:"btt","before-close":t.handleClose,width:"600px"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listDatas}},[n("el-table-column",{attrs:{label:"索引",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"名稱",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Email",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{color:"gray"}},[t._v(t._s(e.row.mail))])]}}])})],1)],1)},u=[],s={name:"DialogNameList",props:{showDialog:{type:Boolean,default:!1},emailNamelist:{type:Array,required:!0}},computed:{listDatas:function(){return this.emailNamelist?this.emailNamelist:[]}},methods:{handleClose:function(t){var e=this;this.$confirm("確認關閉？").then((function(n){e.$emit("showNamelistDialog",!1),t()})).catch((function(t){}))}}},l=s,f=n("2877"),d=Object(f["a"])(l,c,u,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"新增Email群組",visible:t.showDialog,direction:"btt","before-close":t.handleClose,width:"800px"}},[n("el-form",{ref:"myEdit",staticStyle:{width:"70%","margin-left":"10%"},attrs:{model:t.myEdit,"label-position":"left","label-width":"20%"}},[n("el-form-item",{attrs:{label:"群組名稱"}},[n("el-input",{attrs:{placeholder:"群組名稱","show-word-limit":"",maxlength:"50"},model:{value:t.myEdit.groupName,callback:function(e){t.$set(t.myEdit,"groupName",e)},expression:"myEdit.groupName"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"上傳群組名單"}},[n("el-upload",{staticClass:"upload-demo",attrs:{action:"","before-remove":t.beforeRemove,"on-change":t.handleChange,multiple:"",limit:1,"on-exceed":t.handleExceed,"file-list":t.fileList,"auto-upload":!1}},[n("el-button",{attrs:{size:"small",type:"info"}},[t._v("上傳 CSV 或 XLSX")])],1)],1),t._v(" "),n("el-button",{on:{click:t.save}},[t._v("新增")])],1)],1)},h=[],v=(n("7f7f"),n("ac6a"),n("768b")),g=(n("28a5"),n("1146")),b=n.n(g),_=n("61f7"),E=new FileReader,w={name:"DialogAddEmailGroup",props:{showDialog:{type:Boolean,default:!1}},data:function(){return{initDatas:{groupName:"",member:[]},myEdit:{},fileList:[]}},mounted:function(){this.myEdit=this.initDatas},beforeDestroy:function(){E.removeEventListener("load",this.csvloader),E.removeEventListener("load",this.xlsxloader)},methods:{handleClose:function(t){var e=this;this.$confirm("確認關閉？").then((function(n){e.$emit("showAddDialog",!1),t()})).catch((function(t){}))},save:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.myEdit.groupName||this.myEdit.member===[]){t.next=7;break}return t.next=3,this.$store.dispatch("EDM_email/ADD_EMAIL_GROUP",this.myEdit);case 3:return this.$message.success("新增成功"),t.next=6,this.$store.dispatch("EDM_email/GET_EMAIL_GROUP");case 6:this.$emit("showAddDialog",!1);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleChange:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"text/csv"===e.raw.type?this.csvloader(e):"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e.raw.type?this.xlsxloader(e):(alert("檔案錯誤！"),this.myEdit.member=[]);case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),csvloader:function(t){var e,n=this;E.readAsText(t.raw),E.onload=function(t){t.target.result&&(e=t.target.result.split(/\r\n|\n/),e.shift(),e=e.filter((function(t){return t.split(",").length>=2})),e=e.map((function(t){var e=t.split(","),n=Object(v["a"])(e,2),r=n[0],i=n[1];return{name:r.trim(),mail:i.trim()}})),e=e.filter((function(t){return Object(_["a"])(t.mail)})),n.myEdit.member=e)}},xlsxloader:function(t){var e=this,n=[];E.readAsBinaryString(t.raw),E.onload=function(t){if(t.target.result){var r=b.a.read(t.target.result,{type:"binary"});r.SheetNames.forEach((function(t){var e=b.a.utils.sheet_to_row_object_array(r.Sheets[t]);e.length>0&&(n=n.concat(e))})),n=n.map((function(t){return{name:t["姓名"],mail:t["E-mail"]}})),n=n.filter((function(t){return Object(_["a"])(t.mail)})),e.myEdit.member=n}}},handleExceed:function(t,e){this.$message.warning("只能選擇一個文件,請先移除文件！")},beforeRemove:function(t,e){return this.$confirm("确定移除 ".concat(t.name,"？"))}}},x=w,y=Object(f["a"])(x,p,h,!1,null,null,null),D=y.exports,O={components:{DialogNameList:m,DialogAddEmailGroup:D},data:function(){return{showAddDialog:!1,showCheckDialog:!1,emailNamelist:[],isloading:!1}},computed:{tableData:function(){return this.$store.state.EDM_email?this.$store.state.EDM_email.Email_Groups_List:[]},loadingIcon:{get:function(){return this.isloading?"el-icon-loading":"el-icon-refresh"}}},mounted:function(){void 0===this.$store._modules.root._children.EDM_email&&this.$store.registerModule("EDM_email",Object(o["a"])()),this.$store.dispatch("EDM_email/GET_EMAIL_GROUP")},beforeDestroy:function(){void 0!==this.$store._modules.root._children.EDM_email&&this.$store.unregisterModule("EDM_email")},methods:{closeDialog:function(){this.showCheckDialog=!1,this.showAddDialog=!1},openDialog:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=e,t.next="CHECK"===t.t0?3:"ADD"===t.t0?8:10;break;case 3:return t.next=5,this.$store.dispatch("EDM_email/GET_EMAIL_NAMELIST_CONTENT",n);case 5:return this.emailNamelist=t.sent,this.showCheckDialog=!0,t.abrupt("break",10);case 8:return this.showAddDialog=!0,t.abrupt("break",10);case 10:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),reFreshList:function(){var t=this;this.isloading=!0,this.$store.dispatch("EDM_email/GET_EMAIL_GROUP").then((function(e){t.isloading=!1}))},deleteGroup:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm("確認刪除  ".concat(n,"？")).then((function(t){r.$store.dispatch("EDM_email/DELETE_EMAIL_NAMELIST",e).then((function(){r.$store.dispatch("EDM_email/GET_EMAIL_GROUP")}))})).catch((function(t){}));case 1:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}},A=O,L=Object(f["a"])(A,r,i,!1,null,null,null);e["default"]=L.exports},c8bb:function(t,e,n){t.exports=n("54a1")},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray}}]);