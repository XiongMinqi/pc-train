(function(t){function e(e){for(var o,a,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function c(t){return u.p+"assets/js/"+({}[t]||t)+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-10e6681a":1,"chunk-1e6918aa":1,"chunk-26268e4a":1,"chunk-3ad1ef1e":1,"chunk-6730ee4c":1,"chunk-7bda3692":1,"chunk-7e3e1d4f":1,"chunk-90859e98":1,"chunk-dbf4934a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="assets/css/"+({}[t]||t)+".css",r=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="http://39.104.70.60:8080/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02f1":function(t,e,n){"use strict";var o=n("1ca3"),a=n.n(o);a.a},"0381":function(t,e,n){},"1ca3":function(t,e,n){},5331:function(t,e,n){t.exports=n.p+"assets/img/u=2669898717,1590930959&fm=26&gp=0.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("2f62"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),u={},s=Object(c["a"])(u,r,i,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("ac1f"),n("466d"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("el-container",[n("el-header",[n("indexTop")],1),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("indexLeft")],1),n("el-main",[n("router-view")],1)],1)],1)],1)},f=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"indexTopContent"},[o("div",{staticClass:"title"},[t._v(" 新科电子培训系统 ")]),o("div",{staticClass:"indexTop"},[o("div",{staticClass:"topLeft"},[o("div",[t.userInfo?o("img",{staticClass:"userImg",attrs:{src:t.userInfo.avatarUrl,alt:""}}):o("img",{staticClass:"userImg",attrs:{src:n("5331"),alt:""}})]),o("div",[t._v(t._s(t.userInfo.nickName))])]),o("div",{staticClass:"submitBtn"},[o("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.logout}},[t._v("退出登录")])],1)])])},h=[],g={data:function(){return{userInfo:{},number:0,popup:!1,user:{}}},components:{},methods:{getAmount:function(){var t=this;this.$api.getNumber().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.number=e.data[0])})).catch((function(t){console.log(t)}))},logout:function(){var t=this;this.$api.logout().then((function(e){console.log(e),0===e.data.code&&(t.$message({message:"退出登录成功",type:"success"}),localStorage.removeItem("userInfo"),t.$router.push({name:"login",path:"/login"}))})).catch((function(t){console.log(t)}))}},mounted:function(){this.getAmount(),this.userInfo=JSON.parse(localStorage.getItem("userInfo"))},watch:{},computed:{}},b=g,v=(n("edec"),Object(c["a"])(b,m,h,!1,null,"6f7069b2",null)),k=v.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexLeft"},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:12}},[n("el-menu",{attrs:{"default-active":"1"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.goTo("/index")}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),n("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.goTo("/score")}}},[n("i",{staticClass:"el-icon-s-data"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的积分")])]),n("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.goTo("/onlineTest")}}},[n("i",{staticClass:"el-icon-edit-outline"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("在线考试")])]),n("el-menu-item",{attrs:{index:"8"},on:{click:function(e){return t.goTo("/independentTest")}}},[n("i",{staticClass:"el-icon-edit"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的课程")])]),n("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.goTo("/onlineStudy")}}},[n("i",{staticClass:"el-icon-s-promotion"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("在线学习")])]),n("el-menu-item",{attrs:{index:"5"},on:{click:function(e){return t.goTo("/mistake")}}},[n("i",{staticClass:"el-icon-document"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("错题集选")])]),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){return t.goTo("/grade")}}},[n("i",{staticClass:"el-icon-document-copy"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("成绩统计")])]),n("el-menu-item",{attrs:{index:"7"},on:{click:function(e){return t.goTo("/user")}}},[n("i",{staticClass:"el-icon-user-solid"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("个人信息")])])],1)],1)],1)],1)},y=[],E={data:function(){return{}},components:{},methods:{goTo:function(t){this.$router.push(t)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}},mounted:function(){},watch:{},computed:{}},w=E,T=(n("cd28"),Object(c["a"])(w,x,y,!1,null,"656b8cd8",null)),_=T.exports,C={data:function(){return{}},components:{indexTop:k,indexLeft:_},methods:{},mounted:function(){},watch:{},computed:{}},S=C,O=(n("02f1"),Object(c["a"])(S,p,f,!1,null,"31bb6298",null)),I=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("index")])},P=[],$={data:function(){return{}},components:{},methods:{},mounted:function(){},watch:{},computed:{}},L=$,M=Object(c["a"])(L,j,P,!1,null,"ab3b6d48",null),N=M.exports;o["default"].use(d["a"]);var B=[{path:"/",redirect:"/index"},{path:"/login",name:"login",component:function(){return n.e("chunk-dbf4934a").then(n.bind(null,"dc3f"))}},{path:"/testIng",name:"testIng",component:function(){return n.e("chunk-10e6681a").then(n.bind(null,"e961"))}},{path:"/index",component:I,children:[{path:"",name:"index",component:N}]},{path:"/score",component:I,children:[{path:"",name:"score",component:function(){return n.e("chunk-2d0cfb22").then(n.bind(null,"658e"))}}]},{path:"/onlineTest",component:I,children:[{path:"",name:"onlineTest",component:function(){return n.e("chunk-3ad1ef1e").then(n.bind(null,"ad26"))}}]},{path:"/independentTest",component:I,children:[{path:"",name:"independentTest",component:function(){return n.e("chunk-2d0b30f8").then(n.bind(null,"2785"))}}]},{path:"/onlineStudy",component:I,children:[{path:"",name:"onlineStudy",component:function(){return n.e("chunk-2d0a36ed").then(n.bind(null,"01c9"))}}]},{path:"/mistake",component:I,children:[{path:"",name:"mistake",component:function(){return n.e("chunk-2d222997").then(n.bind(null,"cefe"))}}]},{path:"/grade",component:I,children:[{path:"",name:"grade",component:function(){return n.e("chunk-26268e4a").then(n.bind(null,"d74b"))},redirect:"/allExam",children:[{path:"/allExam",name:"allExam",component:function(){return n.e("chunk-6730ee4c").then(n.bind(null,"c5cb"))}},{path:"/emptyExam",name:"emptyExam",component:function(){return n.e("chunk-90859e98").then(n.bind(null,"344a"))}},{path:"/passExam",name:"passExam",component:function(){return n.e("chunk-7bda3692").then(n.bind(null,"79ce"))}},{path:"/failExam",name:"failExam",component:function(){return n.e("chunk-1e6918aa").then(n.bind(null,"be7b"))}}]}]},{path:"/user",component:I,children:[{path:"",name:"user",component:function(){return n.e("chunk-7e3e1d4f").then(n.bind(null,"b843"))}}]}],A=new d["a"]({routes:B});A.onError((function(t){var e=/Loading chunk (\d)+ failed/g,n=t.message.match(e);n?window.location.reload():console.log(t)})),A.beforeEach((function(t,e,n){var o=localStorage.getItem("userInfo");"/login"===t.path||o?n():n("/login")}));var D=A;o["default"].use(a["a"]);var U={answerList:{}},J=new a["a"].Store({state:U,mutations:{},actions:{},modules:{}}),q=(n("99af"),n("bc3a")),H=n.n(q);H.a.defaults.timeout=1e4;var z={login:function(t){return H()({Headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",url:"login?username=".concat(t.username,"&password=").concat(t.password,'&"remeber-me"=').concat(t["remeber-me"])})},getNumber:function(){return H.a.get("ksExam/getByMeCount")},checkUser:function(t){return H.a.get("people/getById?id=".concat(t))},getUser:function(){return H.a.get("people/getByMe")},getSubject:function(){return H.a.get("getDict?keys=部门名称&keys=专业名称")},resetPersonalMsg:function(t){return H.a.post("people/update",t)},logout:function(){return H.a.post("logout")},checkNumber:function(){return H.a.get("/people/isPhoneNumberDuplicate")}};H.a.defaults.timeout=1e4;var F={submitExam:function(){return H.a.post("ksExam/getMySubmitExam")},getdict:function(){return H.a.get("getDict?keys=科目名称")},getStatistics:function(){return H.a.get("ksExam/getMyStatistics")},getExam:function(){return H.a.post("ksExam/getMySubmitExam")},getSubmitPaper:function(t){return H.a.get("ksExam/getSubmitPaper?submitId=".concat(t))}};H.a.defaults.timeout=1e4;var K={getTestInfo:function(t,e){return H.a.get("ksExam/getByMe?offset=".concat(t,"&limit=").concat(e))},onlineTest:function(t){return H.a.get("tkPaper/getWithDefaultChapterQuestionById?id=".concat(t))},submitPaper:function(t){return H.a.post("ksExam/submitExam",t)}},Q=n("5a0c"),W=n.n(Q),G=n("5c96"),R=n.n(G);n("0fae");o["default"].use(R.a),o["default"].use(a["a"]),o["default"].prototype.$dayjs=W.a,o["default"].prototype.$api=z,o["default"].prototype.$grade=F,o["default"].prototype.$onlineTest=K,o["default"].prototype.$axios=H.a,o["default"].config.productionTip=!1,new o["default"]({router:D,store:J,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(t,e,n){},a98b:function(t,e,n){},cd28:function(t,e,n){"use strict";var o=n("a98b"),a=n.n(o);a.a},edec:function(t,e,n){"use strict";var o=n("0381"),a=n.n(o);a.a}});