(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596e1a63"],{2365:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{padding:"30px"}},[t.showFunctionIcon?e("el-row",[e("el-col",{staticClass:"icons-container"},t._l(t.routes,(function(t,n){return e("ServiceIcon",{key:n,attrs:{name:t.name,path:"/callcarbar"+t.path,icon:t.icon}})})),1)],1):t._e(),t._v(" "),e("router-view")],1)},i=[],c=e("a9e0"),o={name:"Callcarbar",components:{ServiceIcon:c["a"]},data:function(){return{routes:[{name:"EDM 管理",path:"/edm",icon:"el-icon-receiving"},{name:"推播管理",path:"/notification",icon:"el-icon-news"},{name:"簡訊管理",path:"/SMS/list",icon:"el-icon-s-promotion"},{name:"資料&統計",path:"/statistic",icon:"chart"},{name:"設定",path:"/app_settings",icon:"el-icon-setting"}]}},computed:{fullPath:function(){return this.$route.fullPath},showFunctionIcon:function(){return"/callcarbar"===this.$route.path}}},r=o,s=e("2877"),l=Object(s["a"])(r,a,i,!1,null,null,null);n["default"]=l.exports},"4e9c":function(t,n,e){"use strict";var a=e("6517"),i=e.n(a);i.a},6517:function(t,n,e){},a9e0:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("router-link",{attrs:{to:t.path}},[e("div",[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"icon-item"},[t.icon.startsWith("el-")?e("i",{class:t.icon,attrs:{"class-name":"disabled"}}):e("svg-icon",{attrs:{"icon-class":t.icon,"class-name":"disabled"}}),t._v(" "),e("span",[t._v(t._s(t.name))])],1)])],1)])},i=[],c={name:"ServiceIcon",props:{name:{type:String,required:!0},path:{type:String,required:!0},icon:{type:String,required:!0}}},o=c,r=(e("4e9c"),e("2877")),s=Object(r["a"])(o,a,i,!1,null,null,null);n["a"]=s.exports}}]);