(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"37f9":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"loginmsg"},[a("div",[t._v("我的登录信息")]),a("div",[a("div",{staticClass:"logintime"},[a("div",{staticClass:"name"},[t._v("我的登录次数 :")]),t.userInfo.loginCount?a("div",{staticClass:"content"},[t._v(t._s(t.userInfo.loginCount)+" 次")]):a("div",{staticClass:"content"},[t._v("0 次")])]),a("div",{staticClass:"logintime"},[a("div",{staticClass:"name"},[t._v("本次登录时间 :")]),t.userInfo.lastLoginTime?a("div",{staticClass:"content"},[t._v(t._s(t.userInfo.lastLoginTime))]):a("div",{staticClass:"content"},[t._v("暂时没有上次登录的记录")])]),t._m(0)])]),a("div",{staticClass:"classes",on:{click:t.classes}},[a("div",[t._v("我的课程进度")]),a("div",[t._m(1),t._m(2),a("div",{staticStyle:{width:"50%","margin-top":"20px","padding-left":"20px"}},[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:70}})],1)])]),a("div",{staticClass:"test"},[t.testInfo.todoExamCount?a("div",{staticClass:"newTest",on:{click:t.myTest}},[a("div",[t._v("我的考试("+t._s(t.testInfo.todoExamCount)+")")]),a("div",{staticClass:"new"},[t._v("new")])]):a("div",[t._v("我的考试")]),a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple",on:{click:function(s){return t.testPaper(1)}}},[a("div",[a("img",{attrs:{src:e("7b97"),alt:""}})]),a("div",[t._v(t._s(t.total)+"份")]),a("div",[t._v("全部试卷")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light",on:{click:function(s){return t.testPaper(2)}}},[a("div",[a("img",{attrs:{src:e("7b97"),alt:""}})]),a("div",[t._v(t._s(t.pass)+"份")]),a("div",[t._v("及格试卷")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple",on:{click:function(s){return t.testPaper(3)}}},[a("div",[a("img",{attrs:{src:e("7b97"),alt:""}})]),a("div",[t._v(t._s(t.fail)+"份")]),a("div",[t._v("不及格试卷")])])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple-light",on:{click:function(s){return t.testPaper(4)}}},[a("div",[a("img",{attrs:{src:e("7b97"),alt:""}})]),a("div",[t._v(t._s(t.empty)+"份")]),a("div",[t._v("空白试卷")])])])],1)],1),a("div",{staticClass:"classes",on:{click:t.study}},[a("div",[t._v("我的学习记录")]),a("div",[a("div",{staticClass:"logintime"},[a("div",{staticClass:"name"},[t._v("在线学习时长 :")]),a("div",{staticClass:"content"},[t._v(t._s(t.totalStudyTime))])]),a("div",{staticClass:"logintime"},[a("div",{staticClass:"name"},[t._v("在线测试记录 :")]),a("div",{staticClass:"content"},[t._v(t._s(t.fail+t.pass)+"次")])])])]),a("div",{staticStyle:{"text-align":"center"}},[t._v("版本号:20.06.08.18")])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("我的积分 :")]),e("div",{staticClass:"content"},[t._v("0 分")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("已学习 :")]),e("div",{staticClass:"count"},[t._v("6 课")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("未学习 :")]),e("div",{staticClass:"count"},[t._v("5 课")])])}],n=(e("d81d"),{data:function(){return{userInfo:{},testInfo:{},page:1,limit:1e4,total:0,pass:0,fail:0,empty:0,totalStudyTime:0}},components:{},methods:{study:function(){this.$router.push({name:"onlineStudy",path:"/onlineStudy"})},classes:function(){this.$router.push({name:"classList",path:"/classList"})},myTest:function(){this.$router.push({name:"onlineTest",path:"/onlineTest"})},testPaper:function(t){this.$router.push({name:"testRecords",path:"/testRecords"})},timeFormat:function(t){var s="",e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate(),o=e.getHours(),c=e.getMinutes(),r=e.getSeconds();return s+=a+"/",i<10&&(s+="0"),s+=i+"/",n<10&&(s+="0"),s+=n+" ",o<10&&(s+="0"),s+=o+":",c<10&&(s+="0"),s+=c+":",r<10&&(s+="0"),s+=r,s},getTestNumber:function(){var t=this;this.$grade.gettestNumber().then((function(s){0===s.data.code?(t.total=s.data.data[0].totalCount,t.totalNum=s.data.data[0].totalCount,t.pass=s.data.data[0].successCount,t.fail=s.data.data[0].failCount,t.empty=s.data.data[0].undoCount):t.$message({message:s.data.msg,type:"warning"})})).catch()},getStudy:function(){var t=this;this.$api.getStudyRecord(this.userInfo.userId,this.page,this.limit).then((function(s){if(1e3===s.data.code&&t.$router.push({name:"login",path:"/login"}),0===s.data.code)if(s.data.data.map((function(s){t.totalStudyTime+=s.totalMinutes})),t.totalStudyTime>60){var e=Math.floor(t.totalStudyTime/60),a=t.totalStudyTime-60*e;t.totalStudyTime=e+"小时"+a+"分钟"}else t.totalStudyTime=t.totalStudyTime+"分钟";else t.$message({message:s.data.msg,type:"warning"})})).catch()}},mounted:function(){var t=this;this.getTestNumber(),this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.userInfo.lastLoginTime=this.timeFormat(this.userInfo.lastLoginTime),this.userInfo!=={}&&this.getStudy(),this.$api.getMyMsg().then((function(s){1e3===s.data.code&&t.$router.push({name:"login",path:"/login"}),0===s.data.code?t.testInfo=s.data.data[0]:t.$message({message:s.data.msg,type:"warning"})})).catch((function(t){console.log(t)}))},watch:{},computed:{}}),o=n,c=(e("cf6c"),e("2877")),r=Object(c["a"])(o,a,i,!1,null,"011f5088",null);s["default"]=r.exports},"7b97":function(t,s,e){t.exports=e.p+"assets/img/myscore.svg"},ae40:function(t,s,e){var a=e("83ab"),i=e("d039"),n=e("5135"),o=Object.defineProperty,c={},r=function(t){throw t};t.exports=function(t,s){if(n(c,t))return c[t];s||(s={});var e=[][t],l=!!n(s,"ACCESSORS")&&s.ACCESSORS,d=n(s,0)?s[0]:r,u=n(s,1)?s[1]:void 0;return c[t]=!!e&&!i((function(){if(l&&!a)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:r}):t[1]=1,e.call(t,d,u)}))}},b180:function(t,s,e){},b727:function(t,s,e){var a=e("0366"),i=e("44ad"),n=e("7b0b"),o=e("50c4"),c=e("65f0"),r=[].push,l=function(t){var s=1==t,e=2==t,l=3==t,d=4==t,u=6==t,v=5==t||u;return function(m,f,g,p){for(var h,_,C=n(m),y=i(C),S=a(f,g,3),b=o(y.length),T=0,w=p||c,I=s?w(m,b):e?w(m,0):void 0;b>T;T++)if((v||T in y)&&(h=y[T],_=S(h,T,C),t))if(s)I[T]=_;else if(_)switch(t){case 3:return!0;case 5:return h;case 6:return T;case 2:r.call(I,h)}else if(d)return!1;return u?-1:l||d?d:I}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},cf6c:function(t,s,e){"use strict";var a=e("b180"),i=e.n(a);i.a},d81d:function(t,s,e){"use strict";var a=e("23e7"),i=e("b727").map,n=e("1dde"),o=e("ae40"),c=n("map"),r=o("map");a({target:"Array",proto:!0,forced:!c||!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);