(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20eb4a22"],{"4e9c":function(t,n,e){"use strict";var a=e("6517"),c=e.n(a);c.a},6517:function(t,n,e){},9406:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dashboard-container"},[e("el-row",[e("el-col",{staticClass:"icons-container"},t._l(t.routes,(function(t,n){return e("ServiceIcon",{key:n,attrs:{name:t.name,path:t.path,icon:t.icon}})})),1)],1)],1)},c=[],i=e("a9e0"),s={name:"Dashboard",components:{ServiceIcon:i["a"]},data:function(){return{routes:[{name:"權限管理",path:"/permission",icon:"lock"},{name:"叫車吧",path:"/callcarbar",icon:"guide"},{name:"肯驛隨行券",path:"/ticket",icon:"ticket"}]}}},r=s,o=e("2877"),l=Object(o["a"])(r,a,c,!1,null,null,null);n["default"]=l.exports},a9e0:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("router-link",{attrs:{to:t.path}},[e("div",[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"icon-item"},[t.icon.startsWith("el-")?e("i",{class:t.icon,attrs:{"class-name":"disabled"}}):e("svg-icon",{attrs:{"icon-class":t.icon,"class-name":"disabled"}}),t._v(" "),e("span",[t._v(t._s(t.name))])],1)])],1)])},c=[],i={name:"ServiceIcon",props:{name:{type:String,required:!0},path:{type:String,required:!0},icon:{type:String,required:!0}}},s=i,r=(e("4e9c"),e("2877")),o=Object(r["a"])(s,a,c,!1,null,null,null);n["a"]=o.exports}}]);