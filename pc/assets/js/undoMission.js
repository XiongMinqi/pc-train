(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["undoMission"],{"3a3b":function(i,t,e){},"4e9f":function(i,t,e){"use strict";e.r(t);var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:i.loading,expression:"loading"}]},[i.missionList.length>0?e("div",i._l(i.missionList,(function(t,s){return e("div",{key:s,staticClass:"cardsDetail"},[e("el-card",{staticClass:"box-card",class:!0===t.running?"border-true":"border-false"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[i._v(i._s(t.name))]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){return i.checkDetail(t)}}},[i._v("查看详情")])],1),e("div",{staticClass:"text item"},[i._v("要求学习时长 : "+i._s(t.requireLearnTime)+"分钟")]),e("div",{staticClass:"text item"},[i._v("要求答对数量 : "+i._s(t.requireRightCount)+"道")]),e("div",{staticClass:"text item"},[i._v("持续时间 : "+i._s(t.msg))])])],1)})),0):e("div",[i._v("暂无数据")]),e("div",[e("el-dialog",{attrs:{title:i.missiondetail.name,visible:i.dialogVisible,width:"60%"},on:{"update:visible":function(t){i.dialogVisible=t}}},[e("div",{staticStyle:{"min-height":"40vh"}},[e("div",{staticClass:"text item"},[i._v("要求学习时长 : "+i._s(i.missiondetail.requireLearnTime)+"分钟")]),e("div",{staticClass:"text item"},[i._v("要求答对数量 : "+i._s(i.missiondetail.requireRightCount)+"道")]),e("div",{staticClass:"text item"},[i._v("持续时间 : "+i._s(i.missiondetail.msg))]),e("div",{staticClass:"text item"},[i._v("发布时间 : "+i._s(i.missiondetail.publishTime))]),e("div",{staticClass:"text item"},[i._v("作业描述 : "+i._s(i.missiondetail.description))])]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:i.joinMisson}},[i._v("进入作业")])],1)])],1),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":i.currentPage,"page-sizes":[6,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:i.total},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange}})],1)])},a=[],n=(e("d81d"),{data:function(){return{loading:!0,page:1,limit:6,dialogVisible:!1,missiondetail:{},missionList:[],total:0}},components:{},methods:{handleSizeChange:function(i){this.loading=!0,this.page=1,this.limit=i,this.getUndoMission()},handleCurrentChange:function(i){this.loading=!0,this.page=i,this.getUndoMission()},checkDetail:function(i){this.missiondetail=i,this.dialogVisible=!0},timeChange:function(i){var t=i,e="";if(t<60)return e=t+"分钟",e;if(t<1440){var s=Math.floor(t/60),a=t-60*s;return e=a>0?s+"小时"+a+"分钟":s+"小时",e}var n=Math.floor(t/1440),o=Math.floor((t-1440*n)/60),r=t-1440*n-60*o;return e=o>0?n+"天"+o+"小时"+r+"分钟":r>0?n+"天"+r+"分钟":n+"天",e},joinMisson:function(){this.dialogVisible=!1,this.$router.push({name:"doMission",path:"/doMission",query:{id:this.missiondetail.id}})},getUndoMission:function(){var i=this,t={limit:this.limit,page:this.page,object:{isRunning:!0}};this.$api.getUndoMission(t).then((function(t){i.loading=!1,1e3===t.data.code&&i.$router.push({name:"login",path:"/login"}),0===t.data.code?(i.missionList=t.data.data,i.total=t.data.count,i.missionList.map((function(t){var e=i.timeChange(t.lastTime);i.$set(t,"msg",e)}))):i.$message({message:t.data.msg,type:"warning"})})).catch((function(t){i.loading=!1,i.$message({message:t.data.msg,type:"warning"})}))}},mounted:function(){this.getUndoMission()},watch:{},computed:{}}),o=n,r=(e("ad9e"),e("2877")),l=Object(r["a"])(o,s,a,!1,null,"68630813",null);t["default"]=l.exports},ad9e:function(i,t,e){"use strict";var s=e("3a3b"),a=e.n(s);a.a},b727:function(i,t,e){var s=e("0366"),a=e("44ad"),n=e("7b0b"),o=e("50c4"),r=e("65f0"),l=[].push,d=function(i){var t=1==i,e=2==i,d=3==i,c=4==i,u=6==i,g=5==i||u;return function(m,h,v,f){for(var p,b,_=n(m),C=a(_),x=s(h,v,3),M=o(C.length),w=0,y=f||r,k=t?y(m,M):e?y(m,0):void 0;M>w;w++)if((g||w in C)&&(p=C[w],b=x(p,w,_),i))if(t)k[w]=b;else if(b)switch(i){case 3:return!0;case 5:return p;case 6:return w;case 2:l.call(k,p)}else if(c)return!1;return u?-1:d||c?c:k}};i.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},d81d:function(i,t,e){"use strict";var s=e("23e7"),a=e("b727").map,n=e("1dde"),o=e("ae40"),r=n("map"),l=o("map");s({target:"Array",proto:!0,forced:!r||!l},{map:function(i){return a(this,i,arguments.length>1?arguments[1]:void 0)}})}}]);