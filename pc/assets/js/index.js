(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"37f9":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"loginmsg"},[e("div",[t._v("我的登录信息")]),e("div",[e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("我的登录次数 :")]),t.userInfo.loginCount?e("div",{staticClass:"content"},[t._v(t._s(t.userInfo.loginCount)+" 次")]):e("div",{staticClass:"content"},[t._v("0 次")])]),e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("本次登录时间 :")]),t.userInfo.lastLoginTime?e("div",{staticClass:"content"},[t._v(t._s(t.userInfo.lastLoginTime))]):e("div",{staticClass:"content"},[t._v("暂时没有上次登录的记录")])]),e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("我的积分 :")]),e("div",{staticClass:"content"},[t._v(t._s(t.totalScore)+" 分")])])])]),e("div",{staticClass:"classes",on:{click:t.classes}},[e("div",[t._v("我的课程进度(本周)")]),e("div",[e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("已学习 :")]),e("div",{staticClass:"count"},[t._v(t._s(t.alreadyStudy)+" 课")])]),e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("未学习 :")]),e("div",{staticClass:"count"},[t._v(t._s(t.unstudy)+" 课")])]),e("div",{staticStyle:{width:"50%","margin-top":"20px","padding-left":"20px"}},[e("el-progress",{attrs:{"text-inside":!0,"stroke-width":26,percentage:t.studypercent}})],1)])]),e("div",{staticClass:"test"},[t.testInfo.todoExamCount?e("div",{staticClass:"newTest",on:{click:t.myTest}},[e("div",[t._v("我的考试("+t._s(t.testInfo.todoExamCount)+")")]),e("div",{staticClass:"new"},[t._v("new")])]):e("div",[t._v("我的考试")]),e("el-row",[e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple",on:{click:function(a){return t.testPaper(1)}}},[e("div",[e("img",{attrs:{src:s("7b97"),alt:""}})]),e("div",[t._v(t._s(t.total)+"份")]),e("div",[t._v("全部试卷")])])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple-light",on:{click:function(a){return t.testPaper(2)}}},[e("div",[e("img",{attrs:{src:s("7b97"),alt:""}})]),e("div",[t._v(t._s(t.pass)+"份")]),e("div",[t._v("及格试卷")])])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple",on:{click:function(a){return t.testPaper(3)}}},[e("div",[e("img",{attrs:{src:s("7b97"),alt:""}})]),e("div",[t._v(t._s(t.fail)+"份")]),e("div",[t._v("不及格试卷")])])]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple-light",on:{click:function(a){return t.testPaper(4)}}},[e("div",[e("img",{attrs:{src:s("7b97"),alt:""}})]),e("div",[t._v(t._s(t.empty)+"份")]),e("div",[t._v("空白试卷")])])])],1)],1),e("div",{staticClass:"classes",on:{click:t.study}},[e("div",[t._v("我的学习记录")]),e("div",[e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("在线学习时长 :")]),e("div",{staticClass:"content"},[t._v(t._s(t.totalStudyTime))])]),e("div",{staticClass:"logintime"},[e("div",{staticClass:"name"},[t._v("在线测试记录 :")]),e("div",{staticClass:"content"},[t._v(t._s(t.fail+t.pass)+"次")])])])]),e("div",{staticStyle:{"text-align":"center"}},[t._v("版本号:20.06.29.17")])])},i=[],n=(s("d81d"),{data:function(){return{userInfo:{},testInfo:{},page:1,limit:1e4,total:0,pass:0,fail:0,empty:0,totalStudyTime:0,loading:!0,alreadyStudy:10,unstudy:3,studypercent:0,totalScore:0}},components:{},methods:{study:function(){this.$router.push({name:"onlineStudy",path:"/onlineStudy"})},classes:function(){this.$router.push({name:"classList",path:"/classList"})},myTest:function(){this.$router.push({name:"onlineTest",path:"/onlineTest"})},testPaper:function(t){this.$router.push({name:"testRecords",path:"/testRecords"})},timeFormat:function(t){var a="",s=new Date(t),e=s.getFullYear(),i=s.getMonth()+1,n=s.getDate(),o=s.getHours(),d=s.getMinutes(),c=s.getSeconds();return a+=e+"/",i<10&&(a+="0"),a+=i+"/",n<10&&(a+="0"),a+=n+" ",o<10&&(a+="0"),a+=o+":",d<10&&(a+="0"),a+=d+":",c<10&&(a+="0"),a+=c,a},getTestNumber:function(){var t=this;this.$grade.gettestNumber().then((function(a){t.loading=!1,1e3===a.data.code&&t.$router.push({name:"login",path:"/login"}),0===a.data.code?(t.total=a.data.data[0].totalCount,t.totalNum=a.data.data[0].totalCount,t.pass=a.data.data[0].successCount,t.fail=a.data.data[0].failCount,t.empty=a.data.data[0].undoCount):t.$message({message:a.data.msg,type:"warning"})})).catch((function(a){t.loading=!1}))},getStudy:function(){var t=this;this.$api.getStudyRecord(this.userInfo.userId,this.page,this.limit).then((function(a){if(t.loading=!1,1e3===a.data.code&&t.$router.push({name:"login",path:"/login"}),0===a.data.code)if(a.data.data.map((function(a){t.totalStudyTime+=a.totalMinutes})),t.totalStudyTime>60){var s=Math.floor(t.totalStudyTime/60),e=t.totalStudyTime-60*s;t.totalStudyTime=s+"小时"+e+"分钟"}else t.totalStudyTime=t.totalStudyTime+"分钟";else t.$message({message:a.data.msg,type:"warning"})})).catch((function(a){t.loading=!1}))},getCourse:function(){var t=this,a={timeRange:1};this.$api.getCouese(a).then((function(a){if(t.loading=!1,1e3===a.data.code&&t.$router.push({name:"login",path:"/login"}),0===a.data.code){var s=a.data.data[0].total;t.alreadyStudy=a.data.data[0].done,t.unstudy=s-a.data.data[0].done,t.alreadyStudy>0&&s>0?t.studypercent=Math.ceil(t.alreadyStudy/s*100):t.studypercent=0}else t.$message({message:a.data.msg,type:"warning"})})).catch((function(a){t.loading=!1}))},getTotalScore:function(){var t=this;this.$api.getTotalScore().then((function(a){t.loading=!1,1e3===a.data.code&&t.$router.push({name:"login",path:"/login"}),0===a.data.code?t.totalScore=a.data.data[0].point:t.$message({message:a.data.msg,type:"warning"})})).catch((function(a){t.loading=!1}))}},mounted:function(){var t=this;this.getTestNumber(),this.getCourse(),this.getTotalScore(),this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.userInfo.lastLoginTime=this.timeFormat(this.userInfo.lastLoginTime),this.userInfo!=={}&&this.getStudy(),this.$api.getMyMsg().then((function(a){1e3===a.data.code&&t.$router.push({name:"login",path:"/login"}),0===a.data.code?t.testInfo=a.data.data[0]:t.$message({message:a.data.msg,type:"warning"})})).catch((function(t){console.log(t)}))},watch:{},computed:{}}),o=n,d=(s("6445"),s("2877")),c=Object(d["a"])(o,e,i,!1,null,"4416bfec",null);a["default"]=c.exports},6445:function(t,a,s){"use strict";var e=s("d01f"),i=s.n(e);i.a},"7b97":function(t,a,s){t.exports=s.p+"assets/img/myscore.svg"},b727:function(t,a,s){var e=s("0366"),i=s("44ad"),n=s("7b0b"),o=s("50c4"),d=s("65f0"),c=[].push,l=function(t){var a=1==t,s=2==t,l=3==t,r=4==t,u=6==t,g=5==t||u;return function(v,m,p,f){for(var h,y,C=n(v),_=i(C),S=e(m,p,3),T=o(_.length),w=0,b=f||d,$=a?b(v,T):s?b(v,0):void 0;T>w;w++)if((g||w in _)&&(h=_[w],y=S(h,w,C),t))if(a)$[w]=y;else if(y)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:c.call($,h)}else if(r)return!1;return u?-1:l||r?r:$}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d01f:function(t,a,s){},d81d:function(t,a,s){"use strict";var e=s("23e7"),i=s("b727").map,n=s("1dde"),o=s("ae40"),d=n("map"),c=o("map");e({target:"Array",proto:!0,forced:!d||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);