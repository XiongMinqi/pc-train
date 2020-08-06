(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["historyMission"],{"0bd6":function(t,i,e){"use strict";var a=e("8855"),s=e.n(a);s.a},"37f8":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"historyRecord"},[t._v("学习任务记录")]),t.showHistory?e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.missionList,border:""}},[e("el-table-column",{attrs:{prop:"name",label:"任务名称"}}),e("el-table-column",{attrs:{prop:"requireLearnTime",label:"要求学习时长/分钟"}}),e("el-table-column",{attrs:{prop:"requireRightCount",label:"要求答对数量/道"}}),e("el-table-column",{attrs:{prop:"learnTime",label:"学习时长/分钟"}}),e("el-table-column",{attrs:{prop:"lastSubmitTime",label:"最后提交练习时间"}}),e("el-table-column",{attrs:{prop:"endTime",label:"截止时间"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleClick(i.row)}}},[t._v("查看练习")])]}}],null,!1,3748000569)})],1)],1):t._e(),e("div",[e("el-dialog",{staticClass:"dialogVisible",attrs:{width:"90%",top:"1vh",title:"练习详情",visible:t.dialogVisible,"modal-append-to-body":!0},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dialogLoading,expression:"dialogLoading"}],staticClass:"paperInfo"},[e("div",{staticClass:"paperDetail"},[e("div",{staticClass:"rightCount"},[e("div",[t._v("答对数量 :")]),e("div",{staticClass:"count"},[t._v(t._s(t.rightCount))])]),t._l(t.practiseList,(function(i,a){return e("div",{key:a},[e("div",{staticClass:"title"},[e("div",[e("div",a<9?[t._v("0"+t._s(a+1)+"、")]:[t._v(t._s(a+1)+"、")])]),e("div",{class:4===i.type?"name":"public",staticStyle:{width:"60px"}},[0===i.type?e("span",[t._v("【单选】")]):t._e(),1===i.type?e("span",[t._v("【多选】")]):t._e(),2===i.type?e("span",[t._v("【填空】")]):t._e(),3===i.type?e("span",[t._v("【判断】")]):t._e(),4===i.type?e("span",[t._v("【名词解释】")]):t._e(),5===i.type?e("span",[t._v("【问答】")]):t._e()]),e("div",{staticStyle:{width:"88%"}},[t._v(t._s(i.content))])]),0===i.type||1===i.type?e("div",{staticStyle:{"padding-bottom":"10px"}},t._l(i.options,(function(i,a){return e("div",{key:a},[e("div",{staticClass:"flex aligh-center",staticStyle:{"padding-left":"10px"}},[0===i.order?e("div",[t._v("A.")]):t._e(),1===i.order?e("div",[t._v("B.")]):t._e(),2===i.order?e("div",[t._v("C.")]):t._e(),3===i.order?e("div",[t._v("D.")]):t._e(),4===i.order?e("div",[t._v("E.")]):t._e(),5===i.order?e("div",[t._v("F.")]):t._e(),e("div",[t._v(t._s(i.content))])])])})),0):t._e(),3===i.type?e("div",{staticStyle:{"padding-bottom":"10px"}},[e("div",{staticStyle:{"padding-left":"10px"}},[t._v("正确")]),e("div",{staticStyle:{"padding-left":"10px"}},[t._v("错误")])]):t._e(),e("div",[e("div",{staticClass:"flex aligh-center"},[e("div",[t._v("学员答案")]),e("div",{staticClass:"answerDetail",staticStyle:{color:"darkcyan"}},[t.answerList.length>0?e("div",[t._v(t._s(t.answerList[a].content))]):e("div",[t._v("该题暂未作答")])])]),e("div",{staticClass:"flex aligh-center"},[e("div",[t._v("正确答案")]),e("div",{staticClass:"answerDetail",staticStyle:{color:"darkolivegreen"}},[t._v(t._s(i.standardAnswerStr))])]),e("div",{staticClass:"flex aligh-center"},[e("div",[t._v("练习结果")]),t.answerList.length>0?e("div",{staticClass:"answerDetail"},[!1===t.answerList[a].isRight?e("div",{staticStyle:{color:"red"}},[t._v("回答错误")]):t._e(),!0===t.answerList[a].isRight?e("div",{staticStyle:{color:"green"}},[t._v("回答正确")]):t._e()]):e("div",{staticClass:"answerDetail",staticStyle:{color:"red"}},[t._v("暂无结果")])])])])}))],2),e("div",{staticClass:"dialog-footer Btn",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.dialogVisible=!1}}},[t._v("确 定")])],1)])])],1),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,15,20,25,30],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},s=[],n=(e("d81d"),{data:function(){return{loading:!0,showHistory:!1,page:1,limit:10,missionList:[],currentPage:1,total:0,dialogVisible:!1,dialogLoading:!0,practiseList:[],answerList:[],rightCount:0}},components:{},methods:{handleClick:function(t){console.log(t),this.practiseList=[],this.dialogVisible=!0,this.dialogLoading=!0,this.getAnswer(t.id),this.getQuestiones(t.id)},handleSizeChange:function(t){this.loading=!0,this.page=1,this.limit=t,this.getUndoMission()},handleCurrentChange:function(t){this.loading=!0,this.page=t,this.getUndoMission()},getAnswer:function(t){var i=this;this.$api.getAnswer(t).then((function(t){i.dialogLoading=!1,1e3===t.data.code&&i.$router.push({name:"login",path:"/login"}),0===t.data.code?(i.answerList=t.data.data,i.rightCount=0,i.rightMsg="",i.answerList.map((function(t){!0===t.isRight&&(i.rightCount+=1)}))):i.$message({message:t.data.msg,type:"warning"})})).catch((function(t){i.dialogLoading=!1,i.$message({message:"获取失败",type:"warning"})}))},getQuestiones:function(t){var i=this;this.$api.getQuestion(t).then((function(t){i.dialogLoading=!1,1e3===t.data.code&&i.$router.push({name:"login",path:"/login"}),0===t.data.code?i.practiseList=t.data.data:i.$message({message:t.data.msg,type:"warning"})})).catch((function(t){i.dialogLoading=!1,i.$message({message:"获取失败",type:"warning"})}))},getUndoMission:function(){var t=this,i={limit:this.limit,page:this.page,object:{isRunning:!1}};this.$api.getUndoMission(i).then((function(i){t.loading=!1,t.showHistory=!0,1e3===i.data.code&&t.$router.push({name:"login",path:"/login"}),0===i.data.code?(t.missionList=i.data.data,t.total=i.data.count,t.missionList.map((function(i){i.lastSubmitTime&&(i.lastSubmitTime=t.timeFormat(i.lastSubmitTime));var e=Date.parse(i.publishTime)+6e4*i.lastTime,a=t.timeFormat(e);t.$set(i,"endTime",a)}))):t.$message({message:i.data.msg,type:"warning"})})).catch((function(i){t.loading=!1,t.showHistory=!0,t.$message({message:"获取失败",type:"warning"})}))}},mounted:function(){this.getUndoMission()},watch:{},computed:{}}),o=n,l=(e("0bd6"),e("2877")),r=Object(l["a"])(o,a,s,!1,null,"ca38ed44",null);i["default"]=r.exports},8855:function(t,i,e){},b727:function(t,i,e){var a=e("0366"),s=e("44ad"),n=e("7b0b"),o=e("50c4"),l=e("65f0"),r=[].push,d=function(t){var i=1==t,e=2==t,d=3==t,c=4==t,g=6==t,p=5==t||g;return function(u,v,h,m){for(var _,f,y=n(u),b=s(y),w=a(v,h,3),C=o(b.length),L=0,S=m||l,x=i?S(u,C):e?S(u,0):void 0;C>L;L++)if((p||L in b)&&(_=b[L],f=w(_,L,y),t))if(i)x[L]=f;else if(f)switch(t){case 3:return!0;case 5:return _;case 6:return L;case 2:r.call(x,_)}else if(c)return!1;return g?-1:d||c?c:x}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},d81d:function(t,i,e){"use strict";var a=e("23e7"),s=e("b727").map,n=e("1dde"),o=e("ae40"),l=n("map"),r=o("map");a({target:"Array",proto:!0,forced:!l||!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);