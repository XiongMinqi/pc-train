(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["undoMission"],{"3b42":function(t,i,e){},"4e9f":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[t.missionList.length>0?e("div",[t._l(t.missionList,(function(i,s){return e("div",{key:s,staticClass:"cardsDetail"},[e("el-card",{staticClass:"box-card",class:!0===i.running?"border-true":"border-false"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(i.name))]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return t.checkDetail(i)}}},[t._v("查看详情")])],1),e("div",{staticClass:"text item"},[t._v("要求学习时长 : "+t._s(i.requireLearnTime)+"分钟")]),e("div",{staticClass:"text item"},[t._v("要求答对数量 : "+t._s(i.requireRightCount)+"道")]),e("div",{staticClass:"text item"},[t._v("发布时间 : "+t._s(i.publishTime))]),e("div",{staticClass:"text item"},[t._v("截至时间 : "+t._s(i.endTime))])])],1)})),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[6,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2):e("div",{staticClass:"else"}),e("div",[e("el-dialog",{attrs:{title:t.missiondetail.name,visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("div",{staticStyle:{"min-height":"40vh"}},[e("div",{staticClass:"text item"},[t._v("要求学习时长 : "+t._s(t.missiondetail.requireLearnTime)+"分钟")]),e("div",{staticClass:"text item"},[t._v("要求答对数量 : "+t._s(t.missiondetail.requireRightCount)+"道")]),e("div",{staticClass:"text item"},[t._v("目前学习时长 : "+t._s(t.missiondetail.learnTime)+"分钟")]),t.missiondetail.lastSubmitTime?e("div",{staticClass:"text item"},[t._v("上次提交练习时间 : "+t._s(t.missiondetail.lastSubmitTime))]):e("div",{staticClass:"text item"},[t._v("上次提交练习时间 : 暂时无提交记录")]),e("div",{staticClass:"text item"},[t._v("发布时间 : "+t._s(t.missiondetail.publishTime))]),e("div",{staticClass:"text item"},[t._v("截至时间 : "+t._s(t.missiondetail.endTime))]),e("div",{staticClass:"text item"},[t._v("持续时间 : "+t._s(t.missiondetail.msg))]),e("div",{staticClass:"text item"},[t._v("作业描述 : "+t._s(t.missiondetail.description))])]),e("div",{staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[e("span",[e("el-button",{attrs:{type:"primary"},on:{click:t.joinMisson}},[t._v("进入作业")])],1)])])],1)])},a=[],n=(e("d81d"),{data:function(){return{loading:!0,page:1,limit:6,dialogVisible:!1,currentPage:1,missiondetail:{},missionList:[],total:0}},components:{},methods:{handleSizeChange:function(t){this.loading=!0,this.page=1,this.limit=t,this.getUndoMission()},handleCurrentChange:function(t){this.loading=!0,this.page=t,this.getUndoMission()},checkDetail:function(t){this.missiondetail=t,this.dialogVisible=!0},timeChange:function(t){var i=t,e="";if(i<60)return e=i+"分钟",e;if(i<1440){var s=Math.floor(i/60),a=i-60*s;return e=a>0?s+"小时"+a+"分钟":s+"小时",e}var n=Math.floor(i/1440),o=Math.floor((i-1440*n)/60),r=i-1440*n-60*o;return e=o>0?n+"天"+o+"小时"+r+"分钟":r>0?n+"天"+r+"分钟":n+"天",e},timeFormat:function(t){var i="",e=new Date(t),s=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),o=e.getHours(),r=e.getMinutes(),l=e.getSeconds();return i+=s+"-",a<10&&(i+="0"),i+=a+"-",n<10&&(i+="0"),i+=n+" ",o<10&&(i+="0"),i+=o+":",r<10&&(i+="0"),i+=r+":",l<10&&(i+="0"),i+=l,i},joinMisson:function(){this.dialogVisible=!1,this.$router.push({name:"doMission",path:"/doMission",query:{id:this.missiondetail.id}})},getUndoMission:function(){var t=this,i={limit:this.limit,page:this.page,object:{isRunning:!0}};this.$api.getUndoMission(i).then((function(i){t.loading=!1,1e3===i.data.code&&t.$router.push({name:"login",path:"/login"}),0===i.data.code?(t.missionList=i.data.data,t.total=i.data.count,t.missionList.map((function(i){var e=t.timeChange(i.lastTime);t.$set(i,"msg",e);var s=Date.parse(i.publishTime)+6e4*i.lastTime,a=t.timeFormat(s);t.$set(i,"endTime",a)}))):t.$message({message:i.data.msg,type:"warning"})})).catch((function(i){t.loading=!1,console.log(i),t.$message({message:"获取失败",type:"warning"})}))}},mounted:function(){this.getUndoMission()},watch:{},computed:{}}),o=n,r=(e("57d5"),e("2877")),l=Object(r["a"])(o,s,a,!1,null,"23588bfe",null);i["default"]=l.exports},"57d5":function(t,i,e){"use strict";var s=e("3b42"),a=e.n(s);a.a},b727:function(t,i,e){var s=e("0366"),a=e("44ad"),n=e("7b0b"),o=e("50c4"),r=e("65f0"),l=[].push,d=function(t){var i=1==t,e=2==t,d=3==t,c=4==t,u=6==t,m=5==t||u;return function(g,h,v,p){for(var f,_,b=n(g),C=a(b),x=s(h,v,3),M=o(C.length),w=0,y=p||r,T=i?y(g,M):e?y(g,0):void 0;M>w;w++)if((m||w in C)&&(f=C[w],_=x(f,w,b),t))if(i)T[w]=_;else if(_)switch(t){case 3:return!0;case 5:return f;case 6:return w;case 2:l.call(T,f)}else if(c)return!1;return u?-1:d||c?c:T}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},d81d:function(t,i,e){"use strict";var s=e("23e7"),a=e("b727").map,n=e("1dde"),o=e("ae40"),r=n("map"),l=o("map");s({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);