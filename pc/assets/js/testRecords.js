(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["testRecords"],{"0942":function(t,e,i){},"13d3":function(t,e,i){},1901:function(t,e,i){"use strict";var s=i("0942"),a=i.n(s);a.a},4734:function(t,e,i){"use strict";var s=i("13d3"),a=i.n(s);a.a},"491c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{staticClass:"indexLeft"},[i("el-row",[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-all",on:{click:function(e){return t.goTo(null)}}},[i("span",[t._v("全部试卷("+t._s(t.total)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-pass",on:{click:function(e){return t.goTo(0)}}},[i("span",[t._v("及格试卷("+t._s(t.pass)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-fail",on:{click:function(e){return t.goTo(1)}}},[i("span",[t._v("不及格试卷("+t._s(t.fail)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-empty",on:{click:function(e){return t.goTo(2)}}},[i("span",[t._v("未做试卷("+t._s(t.empty)+")")])])])],1)],1),t.allTestList.length>=0?i("div",{staticClass:"scroll"},[t.allTestList.length>0?i("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[i("div",[t._m(0),i("div",t._l(t.allTestList,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"flex"},[s>=9?i("div",{staticClass:"index"},[t._v(t._s(s+1))]):t._e(),s<9?i("div",{staticClass:"index"},[t._v("0"+t._s(s+1))]):t._e(),i("div",{staticClass:"testName"},[t._v(t._s(e.paperName))]),i("div",{staticClass:"subject"},[e.subjectId?i("span",[t._v(t._s(e.subjextName))]):i("span",[t._v("---")])]),i("div",{staticClass:"testTime"},[t._v(t._s(e.beginTime))]),e.costMinutes?i("div",{staticClass:"duringTime"},[t._v(t._s(e.costMinutes))]):i("div",{staticClass:"duringTime"},[t._v("---")]),i("div",{staticClass:"score"},[t._v(t._s(e.score))]),i("div",{staticClass:"operation",class:e.submitId?"bgblue":"bggray",on:{click:function(i){return t.checkDetail(e)}}},[i("span",[t._v("查看明细")])])])])})),0),i("el-dialog",{attrs:{width:"80%",title:"试卷明细",top:"1vh",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.closeDialog}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.submitPaperloading,expression:"submitPaperloading"}]},[i("submitPaper",{attrs:{submitId:t.submitId,paperDetail:t.paperDetail}})],1)])],1),i("div",{staticClass:"block"},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]):i("div",[t._v("暂无数据")])]):t._e()])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("div",{staticClass:"index"},[t._v("序号")]),i("div",{staticClass:"testName"},[t._v("试卷")]),i("div",{staticClass:"subject"},[t._v("科目")]),i("div",{staticClass:"testTime"},[t._v("发布考试时间")]),i("div",{staticClass:"duringTime"},[t._v("考试用时")]),i("div",{staticClass:"score"},[t._v("得分")]),i("div",{staticClass:"operation"},[t._v("操作")])])}];i("c975"),i("d81d"),i("fb6a");function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content"},[t._v(" 试卷名称 ： "),i("span",[t._v(t._s(t.paperMsg.name))])])])],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 考试者 ： "),i("span",[t._v(t._s(t.userInfo.nickName))])])]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 学员得分 : "),i("span",[t._v(t._s(t.paperDetail.score))])])])],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 开始时间 : "),i("span",[t._v(t._s(t.paperDetail.beginWriteTime))])])]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 结束时间 : "),i("span",[t._v(t._s(t.paperDetail.endWriteTime))])])])],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 试卷总分 : "),i("span",[t._v(t._s(t.paperDetail.totalScore))])])]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 考试用时 : "),i("span",[t._v(t._s(t.paperDetail.costMinutes)+"分钟")])])])],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple span",class:0===t.number?"bgblue":"bg-purple",on:{click:t.checkAll}},[i("b",[t._v("全部题("+t._s(t.allList.length)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-light span",class:1===t.number?"bgblue":"bg-purple-light",on:{click:t.checkRight}},[i("b",[t._v("答对题("+t._s(t.rightList.length)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple span",class:2===t.number?"bgblue":"bg-purple",on:{click:t.checkErr}},[i("b",[t._v("答错题("+t._s(t.errList.length)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-light span",class:3===t.number?"bgblue":"bg-purple-light",on:{click:t.checkEmpty}},[i("b",[t._v("未答题("+t._s(t.emptyList.length)+")")])])])],1),i("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[t.publicList.length>0?i("div",t._l(t.publicList,(function(e,s){return i("div",{key:s,staticClass:"titleDetail"},[i("div",{staticClass:"title"},[i("div",{staticStyle:{width:"3%"}},[i("div",s<9?[t._v("0"+t._s(s+1)+"、")]:[t._v(t._s(s+1)+"、")])]),i("div",{class:4===e.question.type?"name":"public",staticStyle:{width:"6%"}},[0===e.question.type?i("span",[t._v("【单选】")]):t._e(),1===e.question.type?i("span",[t._v("【多选】")]):t._e(),2===e.question.type?i("span",[t._v("【填空】")]):t._e(),3===e.question.type?i("span",[t._v("【判断】")]):t._e(),4===e.question.type?i("span",[t._v("【名词解释】")]):t._e(),5===e.question.type?i("span",[t._v("【问答】")]):t._e()]),i("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.question.content))])]),i("div",[e.question.options.length>0&&0===e.question.type||1===e.question.type?i("div",t._l(e.question.options,(function(e,s){return i("div",{key:s,staticClass:"chooices"},[0==s?i("div",[t._v("A")]):t._e(),1==s?i("div",[t._v("B")]):t._e(),2==s?i("div",[t._v("C")]):t._e(),3==s?i("div",[t._v("D")]):t._e(),i("div",[t._v("、"+t._s(e.content))])])})),0):t._e(),3===e.question.type?i("div",{},[i("div",{staticClass:"chooices"},[t._v("正确")]),i("div",{staticClass:"chooices"},[t._v("错误")])]):t._e()]),i("div",{staticClass:"jiexi",staticStyle:{"padding-left":"4%"}},[i("div",[i("div",{staticClass:"writeAnswer",staticStyle:{display:"flex","align-items":"center"}},[i("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("考生答案")]),e.answer.ksAnswerContents.length>0?i("div",{},[!0===e.answer.right?i("div",{staticClass:"bggreens"},t._l(e.answer.ksAnswerContents,(function(e,s){return i("span",{key:s,staticStyle:{"padding-left":"10px"}},[i("span",[t._v(t._s(e.content))])])})),0):i("div",{staticClass:"bgreds"},t._l(e.answer.ksAnswerContents,(function(e,s){return i("span",{key:s,staticStyle:{"padding-left":"10px"}},[i("span",[t._v(t._s(e.content))])])})),0)]):i("div",{staticClass:"unanwser",staticStyle:{color:"#ff0000"}},[t._v("该题考生未作答")])]),i("div",{staticClass:"currectAnswer",staticStyle:{display:"flex","align-items":"center"}},[i("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("正确答案")]),e.question.answers.length>0?i("div",{staticStyle:{color:"#007AFF",width:"90%"}},t._l(e.question.answers,(function(e,s){return i("span",{key:s,staticStyle:{"padding-left":"10px"}},[i("span",[t._v(t._s(e.content))])])})),0):t._e()]),i("div",{staticClass:"score",staticStyle:{display:"flex","align-items":"center"}},[i("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("分数")]),null===e.answer.score?i("div",{staticStyle:{color:"#007AFF"}},[t._v("0")]):i("div",{staticStyle:{color:"#007AFF"}},[t._v(t._s(e.answer.score)+"/"+t._s(e.question.defaultScore))])])]),i("div",{staticClass:"jiexi-text",staticStyle:{"margin-bottom":"70rpx"}},[i("div",{staticStyle:{"font-weight":"600","padding-bottom":"10px"}},[t._v("题目分析:")]),e.question.answerResolve?i("div",[t._v(t._s(e.question.answerResolve))]):i("div",[t._v("该题暂无解析")])])])])})),0):i("div",[t._v("暂无数据")])])],1)},l=[],c=(i("a9e3"),{data:function(){return{number:0,paperMsg:{},userInfo:{},allList:[],rightList:[],errList:[],emptyList:[],publicList:[],loading:!0}},props:{submitId:{type:Number,required:!0},paperDetail:{type:Object,require:!0}},components:{},methods:{getSubmitPaper:function(){var t=this;this.$grade.getSubmitPaper(this.submitId).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.paperMsg=e.data.data[0],t.allList=[],t.emptyList=[],t.rightList=[],t.errList=[],e.data.data[0].actualAnswer.map((function(i,s){var a={question:e.data.data[0].tkQuestions[s],answer:e.data.data[0].actualAnswer[s]};t.allList.push(a),!0===i.right?t.rightList.push(a):!1===i.right&&(i.ksAnswerContents.length>0?t.errList.push(a):t.emptyList.push(a))})),t.publicList=t.allList):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},checkAll:function(){this.number=0,this.publicList=[],this.publicList=this.allList},checkRight:function(){this.number=1,this.publicList=[],this.publicList=this.rightList},checkErr:function(){this.number=2,this.publicList=[],this.publicList=this.errList},checkEmpty:function(){this.number=3,this.publicList=[],this.publicList=this.emptyList}},mounted:function(){this.getSubmitPaper(),this.userInfo=JSON.parse(localStorage.getItem("userInfo"))},watch:{submitId:{handler:function(t,e){this.submitId=t,this.getSubmitPaper(),this.loading=!0},deep:!0},paperDetail:{handler:function(t,e){this.loading=!0,this.paperDetail=t},deep:!0}},computed:{}}),o=c,u=(i("1901"),i("2877")),d=Object(u["a"])(o,r,l,!1,null,"0b2725ae",null),p=d.exports,g={data:function(){var t;return t={examList:[],allTestList:[],page:1,limit:5,status:null,totalNum:0,total:0,pass:0,fail:0,empty:0,dialogTableVisible:!1,submitId:0,currentPage:1},n(t,"total",0),n(t,"paperDetail",{}),n(t,"subjectName",[]),n(t,"loading",!0),n(t,"submitPaperloading",!1),t},components:{submitPaper:p},methods:{closeDialog:function(){},goTo:function(t){null==t&&(this.totalNum=this.total),1==t&&(this.totalNum=this.fail),2==t&&(this.totalNum=this.empty),0==t&&(this.totalNum=this.pass),this.status=t,this.page=1,this.getTestExam()},handleSizeChange:function(t){this.loading=!0,this.page=1,this.limit=t,this.getTestExam()},handleCurrentChange:function(t){this.loading=!0,this.page=t,this.getTestExam()},checkDetail:function(t){t.submitId?(this.submitId=t.submitId,this.paperDetail={},this.paperDetail=t,this.dialogTableVisible=!0):this.$message({message:"抱歉，暂时无法查看明细",type:"warning"})},timeFormat:function(t){var e="",i=new Date(t),s=i.getFullYear(),a=i.getMonth()+1,n=i.getDate(),r=i.getHours(),l=i.getMinutes(),c=i.getSeconds();return e+=s+"/",a<10&&(e+="0"),e+=a+"/",n<10&&(e+="0"),e+=n+" ",r<10&&(e+="0"),e+=r+":",l<10&&(e+="0"),e+=l+":",c<10&&(e+="0"),e+=c,e},twoNumber:function(t){var e=t;if(-1==e.indexOf("."))return t+".00";var i=e.length,s=e.indexOf(".");return i>s+2?e.slice(0,s+3):i==s+2?e+"0":e},getSubjectName:function(){var t=this;this.$grade.getdict().then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.getTestExam(),t.subjectName=e.data.data[0]["科目名称"]):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},getTestNumber:function(){var t=this;this.$grade.gettestNumber().then((function(e){t.loading=!1,0===e.data.code?(t.total=e.data.data[0].totalCount,t.totalNum=e.data.data[0].totalCount,t.pass=e.data.data[0].successCount,t.fail=e.data.data[0].failCount,t.empty=e.data.data[0].undoCount):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},getTestExam:function(){var t=this;this.loading=!0,this.$grade.getExam(this.page,this.limit,this.status).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.allTestList=e.data.data,t.allTestList.map((function(e){e.beginTime=t.timeFormat(e.beginTime),e.endWriteTime=t.timeFormat(e.endWriteTime),e.beginWriteTime=t.timeFormat(e.beginWriteTime),t.subjectName.map((function(i){i.key==e.subjectId&&t.$set(e,"subjextName",i.value)}))}))):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))}},mounted:function(){this.getTestNumber(),this.getSubjectName()},watch:{},computed:{}},v=g,h=(i("4734"),Object(u["a"])(v,s,a,!1,null,"dbb6966e",null));e["default"]=h.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("1d80"),a=i("5899"),n="["+a+"]",r=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),c=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(l,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,i){var s=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var n,r;return a&&"function"==typeof(n=e.constructor)&&n!==i&&s(r=n.prototype)&&r!==i.prototype&&a(t,r),t}},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),r=i("6eeb"),l=i("5135"),c=i("c6b6"),o=i("7156"),u=i("c04e"),d=i("d039"),p=i("7c73"),g=i("241c").f,v=i("06cf").f,h=i("9bf2").f,f=i("58a8").trim,m="Number",_=a[m],b=_.prototype,y=c(p(b))==m,C=function(t){var e,i,s,a,n,r,l,c,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=f(o),e=o.charCodeAt(0),43===e||45===e){if(i=o.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+o}for(n=o.slice(2),r=n.length,l=0;l<r;l++)if(c=n.charCodeAt(l),c<48||c>a)return NaN;return parseInt(n,s)}return+o};if(n(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof x&&(y?d((function(){b.valueOf.call(i)})):c(i)!=m)?o(new _(C(e)),i,x):C(e)},N=s?g(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;N.length>S;S++)l(_,w=N[S])&&!l(x,w)&&h(x,w,v(_,w));x.prototype=b,b.constructor=x,r(a,m,x)}},b727:function(t,e,i){var s=i("0366"),a=i("44ad"),n=i("7b0b"),r=i("50c4"),l=i("65f0"),c=[].push,o=function(t){var e=1==t,i=2==t,o=3==t,u=4==t,d=6==t,p=5==t||d;return function(g,v,h,f){for(var m,_,b=n(g),y=a(b),C=s(v,h,3),w=r(y.length),x=0,N=f||l,S=e?N(g,w):i?N(g,0):void 0;w>x;x++)if((p||x in y)&&(m=y[x],_=C(m,x,b),t))if(e)S[x]=_;else if(_)switch(t){case 3:return!0;case 5:return m;case 6:return x;case 2:c.call(S,m)}else if(u)return!1;return d?-1:o||u?u:S}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6)}},c975:function(t,e,i){"use strict";var s=i("23e7"),a=i("4d64").indexOf,n=i("a640"),r=i("ae40"),l=[].indexOf,c=!!l&&1/[1].indexOf(1,-0)<0,o=n("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!o||!u},{indexOf:function(t){return c?l.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,e,i){"use strict";var s=i("23e7"),a=i("b727").map,n=i("1dde"),r=i("ae40"),l=n("map"),c=r("map");s({target:"Array",proto:!0,forced:!l||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,i){"use strict";var s=i("23e7"),a=i("861d"),n=i("e8b5"),r=i("23cb"),l=i("50c4"),c=i("fc6a"),o=i("8418"),u=i("b622"),d=i("1dde"),p=i("ae40"),g=d("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),f=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!g||!v},{slice:function(t,e){var i,s,u,d=c(this),p=l(d.length),g=r(t,p),v=r(void 0===e?p:e,p);if(n(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[h],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return f.call(d,g,v);for(s=new(void 0===i?Array:i)(m(v-g,0)),u=0;g<v;g++,u++)g in d&&o(s,u,d[g]);return s.length=u,s}})}}]);