(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==i[r]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},i={app:0},s=[];function r(t){return c.p+"assets/js/"+({}[t]||t)+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1d4676fe":1,"chunk-2094fce2":1,"chunk-23965db5":1,"chunk-45227f18":1,"chunk-53221226":1,"chunk-5ebf1e66":1,"chunk-664b439c":1,"chunk-7be466fc":1,"chunk-8340c054":1,"chunk-aa0b2c1c":1,"chunk-ed486ace":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="assets/css/"+({}[t]||t)+".css",i=c.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete o[t],p.parentNode.removeChild(p),n(s)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02f1":function(t,e,n){"use strict";var a=n("1ca3"),o=n.n(a);o.a},"1ca3":function(t,e,n){},"39f2":function(t,e,n){"use strict";var a=n("c88c"),o=n.n(a);o.a},5331:function(t,e,n){t.exports=n.p+"assets/img/u=2669898717,1590930959&fm=26&gp=0.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("2f62"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("5c0b"),n("2877")),c={},u=Object(r["a"])(c,i,s,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("ac1f"),n("466d"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("el-container",[n("el-header",[n("indexTop")],1),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("indexLeft")],1),n("el-main",[n("router-view")],1)],1)],1)],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"indexTopContent"},[a("div",{staticClass:"title"},[t._v(" 新科电子培训系统 ")]),a("div",{staticClass:"indexTop"},[a("div",{staticClass:"topLeft"},[a("div",[t.userInfo?a("img",{staticClass:"userImg",attrs:{src:t.userInfo.avatarUrl,alt:""}}):a("img",{staticClass:"userImg",attrs:{src:n("5331"),alt:""}})]),a("div",[t._v(t._s(t.userInfo.nickName))])]),a("div",{staticClass:"submitBtn"},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.logout}},[t._v("退出登录")])],1)])])},g=[],h={data:function(){return{userInfo:{},number:0,popup:!1,user:{}}},components:{},methods:{getAmount:function(){var t=this;this.$api.getNumber().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.number=e.data[0])})).catch((function(t){console.log(t)}))},logout:function(){var t=this;this.$api.logout().then((function(e){0===e.data.code&&(t.$message({message:"退出登录成功",type:"success"}),localStorage.removeItem("userInfo"),t.$router.push({name:"login",path:"/login"}))})).catch((function(t){console.log(t)}))}},mounted:function(){this.getAmount(),this.userInfo=JSON.parse(localStorage.getItem("userInfo"))},watch:{},computed:{}},v=h,b=(n("c868"),Object(r["a"])(v,f,g,!1,null,"4cb6002f",null)),_=b.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexLeft"},[n("el-row",{staticClass:"tac"},[n("el-col",{attrs:{span:12}},[n("el-menu",{attrs:{"default-active":"1","background-color":"#d3dce6"},on:{open:t.handleOpen,close:t.handleClose}},[n("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.goTo("/index")}}},[n("i",{staticClass:"el-icon-menu"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),n("el-menu-item",{attrs:{index:"2"},on:{click:function(e){return t.goTo("/score")}}},[n("i",{staticClass:"el-icon-s-data"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的积分")])]),n("el-menu-item",{attrs:{index:"3"},on:{click:function(e){return t.goTo("/onlineTest")}}},[n("i",{staticClass:"el-icon-edit-outline"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("在线考试")])]),n("el-menu-item",{attrs:{index:"8"},on:{click:function(e){return t.goTo("/independentTest")}}},[n("i",{staticClass:"el-icon-edit"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("我的课程")])]),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-s-promotion"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("在线学习")])]),n("el-menu-item-group",[n("template",{slot:"title"},[t._v("学习")]),n("el-menu-item",{attrs:{index:"4-1"},on:{click:function(e){return t.goTo("/courseware")}}},[n("i",{staticClass:"el-icon-notebook-1"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("电子课件")])]),n("el-menu-item",{attrs:{index:"4-2"},on:{click:function(e){return t.goTo("/material")}}},[n("i",{staticClass:"el-icon-notebook-2"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("电子教材")])]),n("el-menu-item",{attrs:{index:"4-3"},on:{click:function(e){return t.goTo("/online")}}},[n("i",{staticClass:"el-icon-edit"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("在线练习")])]),n("el-menu-item",{attrs:{index:"4-4"},on:{click:function(e){return t.goTo("/studyRecord")}}},[n("i",{staticClass:"el-icon-tickets"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("学习记录")])])],2)],2),n("el-menu-item",{attrs:{index:"5"},on:{click:function(e){return t.goTo("/mistake")}}},[n("i",{staticClass:"el-icon-document"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("错题集选")])]),n("el-menu-item",{attrs:{index:"6"},on:{click:function(e){return t.goTo("/grade")}}},[n("i",{staticClass:"el-icon-document-copy"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("成绩统计")])]),n("el-menu-item",{attrs:{index:"9"},on:{click:function(e){return t.goTo("/testRecords")}}},[n("i",{staticClass:"el-icon-document-copy"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("考试记录")])]),n("el-menu-item",{attrs:{index:"7"},on:{click:function(e){return t.goTo("/user")}}},[n("i",{staticClass:"el-icon-user-solid"}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("个人信息")])])],1)],1)],1)],1)},y=[],C={data:function(){return{}},components:{},methods:{goTo:function(t){this.$router.push(t)},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}},mounted:function(){},watch:{},computed:{}},x=C,T=(n("39f2"),Object(r["a"])(x,k,y,!1,null,"64d4ae10",null)),w=T.exports,I={data:function(){return{}},components:{indexTop:_,indexLeft:w},methods:{},mounted:function(){},watch:{},computed:{}},E=I,S=(n("02f1"),Object(r["a"])(E,p,m,!1,null,"31bb6298",null)),$=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"loginmsg"},[a("div",[t._v("我的登录信息")]),a("div",[a("div",{staticClass:"logintime"},[a("div",{staticClass:"name"},[t._v("我的登录次数 :")]),t.userInfo.loginCount?a("div",{staticClass:"content"},[t._v(t._s(t.userInfo.loginCount)+" 次")]):a("div",{staticClass:"content"},[t._v("0 次")])]),a("div",{staticClass:"logintime"},[a("div",{staticClass:"name"},[t._v("上次登录时间 :")]),t.userInfo.lastLoginTime?a("div",{staticClass:"content"},[t._v(t._s(t.userInfo.lastLoginTime))]):a("div",{staticClass:"content"},[t._v("暂时没有上次登录的记录")])]),t._m(0)])]),a("div",{staticClass:"classes",on:{click:t.classes}},[a("div",[t._v("我的课程进度")]),a("div",[t._m(1),t._m(2),a("div",{staticStyle:{width:"50%","margin-top":"20px","padding-left":"20px"}},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:70}})],1)])]),a("div",{staticClass:"test"},[t.testInfo.todoExamCount?a("div",{staticClass:"newTest",on:{click:t.myTest}},[a("div",[t._v("我的考试("+t._s(t.testInfo.todoExamCount)+")")]),a("div",{staticClass:"new"},[t._v("new")])]):a("div",[t._v("我的考试")]),a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple",on:{click:function(e){return t.testPaper(1)}}},[a("div",[a("img",{attrs:{src:n("7b97"),alt:""}})]),a("div",[t._v(t._s(t.total)+"份")]),a("div",[t._v("全部试卷")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light",on:{click:function(e){return t.testPaper(2)}}},[a("div",[a("img",{attrs:{src:n("7b97"),alt:""}})]),a("div",[t._v(t._s(t.pass)+"份")]),a("div",[t._v("及格试卷")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple",on:{click:function(e){return t.testPaper(3)}}},[a("div",[a("img",{attrs:{src:n("7b97"),alt:""}})]),a("div",[t._v(t._s(t.fail)+"份")]),a("div",[t._v("不及格试卷")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light",on:{click:function(e){return t.testPaper(4)}}},[a("div",[a("img",{attrs:{src:n("7b97"),alt:""}})]),a("div",[t._v(t._s(t.empty)+"份")]),a("div",[t._v("空白试卷")])])])],1)],1),a("div",{staticClass:"classes",on:{click:t.study}},[a("div",[t._v("我的学习记录")]),t._m(3)])])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logintime"},[n("div",{staticClass:"name"},[t._v("我的积分 :")]),n("div",{staticClass:"content"},[t._v("0 分")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logintime"},[n("div",{staticClass:"name"},[t._v("已学习 :")]),n("div",{staticClass:"count"},[t._v("6 课")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logintime"},[n("div",{staticClass:"name"},[t._v("未学习 :")]),n("div",{staticClass:"count"},[t._v("5 课")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"logintime"},[n("div",{staticClass:"name"},[t._v("在线学习时长 :")]),n("div",{staticClass:"content"},[t._v("6小时50分钟")])]),n("div",{staticClass:"logintime"},[n("div",{staticClass:"name"},[t._v("在线测试记录 :")]),n("div",{staticClass:"content"},[t._v("8 次")])])])}],L={data:function(){return{userInfo:{},testInfo:{},total:0,pass:0,fail:0,empty:0}},components:{},methods:{study:function(){this.$router.push({name:"onlineStudy",path:"/onlineStudy"})},classes:function(){this.$router.push({name:"independentTest",path:"/independentTest"})},myTest:function(){this.$router.push({name:"onlineTest",path:"/onlineTest"})},testPaper:function(t){this.$router.push({name:"testRecords",path:"/testRecords"})},timeFormat:function(t){var e="",n=new Date(t),a=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),s=n.getHours(),r=n.getMinutes(),c=n.getSeconds();return e+=a+"/",o<10&&(e+="0"),e+=o+"/",i<10&&(e+="0"),e+=i+" ",s<10&&(e+="0"),e+=s+":",r<10&&(e+="0"),e+=r+":",c<10&&(e+="0"),e+=c,e},getTestNumber:function(){var t=this;this.$grade.gettestNumber().then((function(e){0===e.data.code&&(t.total=e.data.data[0].totalCount,t.totalNum=e.data.data[0].totalCount,t.pass=e.data.data[0].successCount,t.fail=e.data.data[0].failCount,t.empty=e.data.data[0].undoCount)})).catch()}},mounted:function(){var t=this;this.getTestNumber(),this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.userInfo.lastLoginTime=this.timeFormat(this.userInfo.lastLoginTime),this.$api.getMyMsg().then((function(e){0===e.data.code&&(t.testInfo=e.data.data[0])})).catch((function(t){console.log(t)}))},watch:{},computed:{}},M=L,P=(n("eca6"),Object(r["a"])(M,j,O,!1,null,"499dd3fa",null)),N=P.exports;a["default"].use(d["a"]);var R=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:function(){return n.e("chunk-53221226").then(n.bind(null,"dc3f"))}},{path:"/testIng",name:"testIng",component:function(){return n.e("chunk-8340c054").then(n.bind(null,"e961"))}},{path:"/index",component:$,children:[{path:"",name:"index",component:N}]},{path:"/score",component:$,children:[{path:"",name:"score",component:function(){return n.e("chunk-2d0cfb22").then(n.bind(null,"658e"))}}]},{path:"/onlineTest",component:$,children:[{path:"",name:"onlineTest",component:function(){return n.e("chunk-5ebf1e66").then(n.bind(null,"ad26"))}}]},{path:"/independentTest",component:$,children:[{path:"",name:"independentTest",component:function(){return n.e("chunk-2d0b30f8").then(n.bind(null,"2785"))}}]},{path:"/onlineStudy",component:$,children:[{path:"",name:"onlineStudy",component:function(){return n.e("chunk-1d4676fe").then(n.bind(null,"01c9"))},redirect:"/courseware",children:[{path:"/courseware",name:"courseware",component:function(){return n.e("chunk-aa0b2c1c").then(n.bind(null,"9c61"))}},{path:"/material",name:"material",component:function(){return n.e("chunk-664b439c").then(n.bind(null,"95c5"))}},{path:"/online",name:"online",component:function(){return n.e("chunk-23965db5").then(n.bind(null,"3235"))}},{path:"/studyRecord",name:"studyRecord",component:function(){return n.e("chunk-2d0e6161").then(n.bind(null,"96f4"))}}]}]},{path:"/mistake",component:$,children:[{path:"",name:"mistake",component:function(){return n.e("chunk-45227f18").then(n.bind(null,"cefe"))}}]},{path:"/testRecords",component:$,children:[{path:"",name:"testRecords",component:function(){return n.e("chunk-ed486ace").then(n.bind(null,"491c"))}}]},{path:"/grade",component:$,children:[{path:"",name:"grade",component:function(){return n.e("chunk-7be466fc").then(n.bind(null,"d74b"))}}]},{path:"/user",component:$,children:[{path:"",name:"user",component:function(){return n.e("chunk-2094fce2").then(n.bind(null,"b843"))}}]}],A=new d["a"]({routes:R});A.onError((function(t){var e=/Loading chunk (\d)+ failed/g,n=t.message.match(e);n?window.location.reload():console.log(t)})),A.beforeEach((function(t,e,n){var a=localStorage.getItem("userInfo");"/login"===t.path||a?n():n("/login")}));var B=A;a["default"].use(o["a"]);var D={answerList:{}},U=new o["a"].Store({state:D,mutations:{},actions:{},modules:{}}),Q=(n("99af"),n("bc3a")),F=n.n(Q);F.a.defaults.timeout=1e4;var J=!0;F.a.defaults.baseURL=J?"http://39.104.70.60:8080":"http://localhost:8080";var q={login:function(t){return F()({headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",params:{username:t.username,password:t.password,"remember-me":t["remember-me"]},url:"login"})},getNumber:function(){return F.a.get("ksExam/getByMeCount")},checkUser:function(t){return F.a.get("people/getById?id=".concat(t))},getUser:function(){return F.a.get("people/getByMe")},getSubject:function(){return F.a.get("getDict?keys=部门名称&keys=专业名称")},resetPersonalMsg:function(t){return F.a.post("people/update",t)},logout:function(){return F.a.post("logout")},checkNumber:function(){return F.a.get("people/isPhoneNumberDuplicate")},getMyMsg:function(){return F.a.get("ksExam/getKanbanByMe")},getLearn:function(t){return F.a.post("courseware/getAll",t)},geturl:function(t){return F.a.get("courseware/getAttachmentURL?coursewareId=".concat(t))},getStudyRecord:function(t,e,n){return F.a.get("courseware/getMyLogList?peopleId=".concat(t,"&page=").concat(e,"&limit=").concat(n))},getRandomQuestion:function(t){return F.a.post("tkQuestion/getByRandom",{criteria:{level:t.criteria.level,majorId:t.criteria.majorId,subjectId:t.criteria.subjectId,type:t.criteria.type},size:t.size})}};F.a.defaults.timeout=1e4;var z=!0;F.a.defaults.baseURL=z?"http://39.104.70.60:8080":"http://localhost:8080";var W={submitExam:function(){return F.a.post("ksExam/getMySubmitExam")},getdict:function(){return F.a.get("getDict?keys=科目名称&keys=专业名称&keys=题目类型")},getStatistics:function(){return F.a.get("ksExam/getMyStatistics")},getExam:function(t,e,n){return F.a.post("ksExam/getMySubmitExam",{page:t,limit:e,object:{status:n}})},gettestNumber:function(){return F.a.get("ksExam/getMyTotalExamCount")},getSubmitPaper:function(t){return F.a.get("ksExam/getSubmitPaper?submitId=".concat(t))},getMistake:function(t,e,n){return F.a.post("ksExam/getMyWrongQuestion",{page:t,limit:e,object:{questionType:n}})},getAllQuestionType:function(){return F.a.get("getDict?keys=题目类型")},getErrorDetail:function(t){return F.a.get("tkQuestion/getByIdWithOptionAndAnswer?id=".concat(t))}};F.a.defaults.timeout=1e4;var H=!0;F.a.defaults.baseURL=H?"http://39.104.70.60:8080":"http://localhost:8080";var K={getTestInfo:function(t,e){return F.a.get("ksExam/getByMe?page=".concat(t,"&limit=").concat(e))},onlineTest:function(t){return F.a.get("tkPaper/getWithDefaultChapterQuestionById?id=".concat(t))},submitPaper:function(t){return F.a.post("ksExam/submitExam",t)}},Y=n("5a0c"),G=n.n(Y),V=n("5c96"),X=n.n(V);n("0fae");a["default"].use(X.a),a["default"].use(o["a"]),a["default"].prototype.$dayjs=G.a,a["default"].prototype.$api=q,a["default"].prototype.$grade=W,a["default"].prototype.$onlineTest=K,a["default"].prototype.$axios=F.a,a["default"].config.productionTip=!1,new a["default"]({router:B,store:U,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"7b97":function(t,e,n){t.exports=n.p+"assets/img/myscore.svg"},8570:function(t,e,n){},"9c0c":function(t,e,n){},c868:function(t,e,n){"use strict";var a=n("8570"),o=n.n(a);o.a},c88c:function(t,e,n){},eca6:function(t,e,n){"use strict";var a=n("ee19"),o=n.n(a);o.a},ee19:function(t,e,n){}});