(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03456931"],{3256:function(t,e,s){},"491c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"indexLeft"},[s("el-row",[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-all",on:{click:function(e){return t.goTo(null)}}},[s("span",[t._v("全部试卷("+t._s(t.total)+")")])])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-pass",on:{click:function(e){return t.goTo(0)}}},[s("span",[t._v("及格试卷("+t._s(t.pass)+")")])])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-fail",on:{click:function(e){return t.goTo(1)}}},[s("span",[t._v("不及格试卷("+t._s(t.fail)+")")])])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-empty",on:{click:function(e){return t.goTo(2)}}},[s("span",[t._v("未做试卷("+t._s(t.empty)+")")])])])],1)],1),t.allTestList.length>=0?s("div",{staticClass:"scroll"},[t.allTestList.length>0?s("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[s("div",[t._m(0),s("div",t._l(t.allTestList,(function(e,i){return s("div",{key:i},[s("div",{staticClass:"flex"},[i>=9?s("div",{staticClass:"index"},[t._v(t._s(i+1))]):t._e(),i<9?s("div",{staticClass:"index"},[t._v("0"+t._s(i+1))]):t._e(),s("div",{staticClass:"testName"},[t._v(t._s(e.paperName))]),s("div",{staticClass:"subject"},[e.subjectId?s("span",[t._v(t._s(e.subjextName))]):s("span",[t._v("---")])]),s("div",{staticClass:"testTime"},[t._v(t._s(e.beginTime))]),e.costMinutes?s("div",{staticClass:"duringTime"},[t._v(t._s(e.costMinutes))]):s("div",{staticClass:"duringTime"},[t._v("---")]),s("div",{staticClass:"score"},[t._v(t._s(e.score))]),s("div",{staticClass:"operation",class:e.submitId?"bgblue":"bggray",on:{click:function(s){return t.checkDetail(e)}}},[s("span",[t._v("查看明细")])])])])})),0),s("el-dialog",{attrs:{width:"80%",title:"试卷明细",top:"1vh",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.closeDialog}},[s("submitPaper",{attrs:{submitId:t.submitId,paperDetail:t.paperDetail}})],1)],1),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]):s("div",[t._v("暂无数据")])]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex"},[s("div",{staticClass:"index"},[t._v("序号")]),s("div",{staticClass:"testName"},[t._v("试卷")]),s("div",{staticClass:"subject"},[t._v("科目")]),s("div",{staticClass:"testTime"},[t._v("考试时间")]),s("div",{staticClass:"duringTime"},[t._v("考试用时")]),s("div",{staticClass:"score"},[t._v("得分")]),s("div",{staticClass:"operation"},[t._v("操作")])])}];s("c975"),s("d81d"),s("fb6a");function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.publicList.length>0?s("div",[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"grid-content"},[t._v(" 试卷名称 ： "),s("span",[t._v(t._s(t.paperMsg.name))])])])],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content"},[t._v(" 考试者 ： "),s("span",[t._v(t._s(t.userInfo.nickName))])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content"},[t._v(" 学员得分 : "),s("span",[t._v(t._s(t.paperDetail.score))])])])],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content"},[t._v(" 开始时间 : "),s("span",[t._v(t._s(t.paperDetail.beginWriteTime))])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content"},[t._v(" 结束时间 : "),s("span",[t._v(t._s(t.paperDetail.endWriteTime))])])])],1),s("el-row",[s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content"},[t._v(" 试卷总分 : "),s("span",[t._v(t._s(t.paperDetail.totalScore))])])]),s("el-col",{attrs:{span:12}},[s("div",{staticClass:"grid-content"},[t._v(" 考试用时 : "),s("span",[t._v(t._s(t.paperDetail.costMinutes)+"分钟")])])])],1),s("el-row",[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple span",class:0===t.number?"bgblue":"bg-purple",on:{click:t.checkAll}},[s("b",[t._v("全部题("+t._s(t.allList.length)+")")])])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light span",class:1===t.number?"bgblue":"bg-purple-light",on:{click:t.checkRight}},[s("b",[t._v("答对题("+t._s(t.rightList.length)+")")])])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple span",class:2===t.number?"bgblue":"bg-purple",on:{click:t.checkErr}},[s("b",[t._v("答错题("+t._s(t.errList.length)+")")])])]),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple-light span",class:3===t.number?"bgblue":"bg-purple-light",on:{click:t.checkEmpty}},[s("b",[t._v("未答题("+t._s(t.emptyList.length)+")")])])])],1),s("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[t.publicList.length>0?s("div",t._l(t.publicList,(function(e,i){return s("div",{key:i,staticClass:"titleDetail"},[s("div",{staticClass:"title"},[s("div",{staticStyle:{width:"3%"}},[s("div",i<9?[t._v("0"+t._s(i+1)+"、")]:[t._v(t._s(i+1)+"、")])]),s("div",{class:4===e.question.type?"name":"public",staticStyle:{width:"6%"}},[0===e.question.type?s("span",[t._v("【单选】")]):t._e(),1===e.question.type?s("span",[t._v("【多选】")]):t._e(),2===e.question.type?s("span",[t._v("【填空】")]):t._e(),3===e.question.type?s("span",[t._v("【判断】")]):t._e(),4===e.question.type?s("span",[t._v("【名词解释】")]):t._e(),5===e.question.type?s("span",[t._v("【问答】")]):t._e()]),s("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.question.content))])]),s("div",[e.question.options.length>0&&0===e.question.type||1===e.question.type?s("div",t._l(e.question.options,(function(e,i){return s("div",{key:i,staticClass:"chooices"},[0==i?s("div",[t._v("A")]):t._e(),1==i?s("div",[t._v("B")]):t._e(),2==i?s("div",[t._v("C")]):t._e(),3==i?s("div",[t._v("D")]):t._e(),s("div",[t._v("、"+t._s(e.content))])])})),0):t._e(),3===e.question.type?s("div",{},[s("div",{staticClass:"chooices"},[t._v("正确")]),s("div",{staticClass:"chooices"},[t._v("错误")])]):t._e(),5===e.question.type?s("div",{},[e.answer.ksAnswerContents.length>0?s("div",{},[s("div",{staticClass:"chooices"},[t._v(t._s(e.answer.ksAnswerContents[0].content))])]):t._e()]):t._e(),4===e.question.type?s("div",{},[e.answer.ksAnswerContents.length>0?s("div",{},[t._v(t._s(e.answer.ksAnswerContents[0].content))]):t._e()]):t._e()]),s("div",{staticClass:"jiexi",staticStyle:{"padding-left":"4%"}},[s("div",[s("div",{staticClass:"writeAnswer",staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("考生答案")]),e.answer.ksAnswerContents.length>0?s("div",{},[!0===e.answer.right?s("div",{staticClass:"bggreens"},t._l(e.answer.ksAnswerContents,(function(e,i){return s("span",{key:i,staticStyle:{"padding-left":"10px"}},[s("span",[t._v(t._s(e.content))])])})),0):s("div",{staticClass:"bgreds"},t._l(e.answer.ksAnswerContents,(function(e,i){return s("span",{key:i,staticStyle:{"padding-left":"10px"}},[s("span",[t._v(t._s(e.content))])])})),0)]):s("div",{staticClass:"unanwser",staticStyle:{color:"#ff0000"}},[t._v("该题考生未作答")])]),s("div",{staticClass:"currectAnswer",staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("正确答案")]),e.question.answers.length>0?s("div",{staticStyle:{color:"#007AFF",width:"90%"}},t._l(e.question.answers,(function(e,i){return s("span",{key:i,staticStyle:{"padding-left":"10px"}},[s("span",[t._v(t._s(e.content))])])})),0):t._e()]),s("div",{staticClass:"score",staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("分数")]),null===e.answer.score?s("div",{staticStyle:{color:"#007AFF"}},[t._v("0")]):s("div",{staticStyle:{color:"#007AFF"}},[t._v(t._s(e.answer.score)+"/"+t._s(e.question.defaultScore))])])]),s("div",{staticClass:"jiexi-text",staticStyle:{"margin-bottom":"70rpx"}},[s("div",{staticStyle:{"font-weight":"600","padding-bottom":"10px"}},[t._v("题目分析:")]),e.question.answerResolve?s("div",[t._v(t._s(e.question.answerResolve))]):s("div",[t._v("该题暂无解析")])])])])})),0):s("div",[t._v("暂无数据")])])],1):t._e()},r=[],c=(s("a9e3"),{data:function(){return{number:0,paperMsg:{},userInfo:{},allList:[],rightList:[],errList:[],emptyList:[],publicList:[]}},props:{submitId:{type:Number,required:!0},paperDetail:{type:Object,require:!0}},components:{},methods:{getSubmitPaper:function(){var t=this;this.$grade.getSubmitPaper(this.submitId).then((function(e){console.log(e),1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.paperMsg=e.data.data[0],t.allList=[],t.emptyList=[],t.rightList=[],t.errList=[],e.data.data[0].actualAnswer.map((function(s,i){var a={question:e.data.data[0].tkQuestions[i],answer:e.data.data[0].actualAnswer[i]};t.allList.push(a),!0===s.right?t.rightList.push(a):!1===s.right&&(s.ksAnswerContents.length>0?t.errList.push(a):t.emptyList.push(a))})),t.publicList=t.allList)})).catch((function(t){console.log(t)}))},checkAll:function(){this.number=0,this.publicList=[],this.publicList=this.allList},checkRight:function(){this.number=1,this.publicList=[],this.publicList=this.rightList},checkErr:function(){this.number=2,this.publicList=[],this.publicList=this.errList},checkEmpty:function(){this.number=3,this.publicList=[],this.publicList=this.emptyList}},mounted:function(){this.getSubmitPaper(),console.log(this.paperDetail),this.userInfo=JSON.parse(localStorage.getItem("userInfo"))},watch:{submitId:{handler:function(t,e){this.submitId=t,this.getSubmitPaper(),console.log(t,"submitid")},deep:!0},paperDetail:{handler:function(t,e){this.paperDetail=t,console.log(t,"paperDetail")},deep:!0}},computed:{}}),o=c,u=(s("6d11"),s("2877")),d=Object(u["a"])(o,l,r,!1,null,"fa5ca9d6",null),p=d.exports,v={data:function(){var t;return t={examList:[],allTestList:[],page:1,limit:5,status:null,totalNum:0,total:0,pass:0,fail:0,empty:0,dialogTableVisible:!1,submitId:0,currentPage:1},n(t,"total",0),n(t,"paperDetail",{}),n(t,"subjectName",[]),t},components:{submitPaper:p},methods:{closeDialog:function(){console.log(this.submitId,this.paperDetail)},goTo:function(t){null==t&&(this.totalNum=this.total),1==t&&(this.totalNum=this.fail),2==t&&(this.totalNum=this.empty),0==t&&(this.totalNum=this.pass),this.status=t,this.getTestExam()},handleSizeChange:function(t){this.page=1,this.limit=t,this.getTestExam()},handleCurrentChange:function(t){this.page=t,this.getTestExam()},checkDetail:function(t){t.submitId?(this.submitId=t.submitId,this.paperDetail=t,console.log(this.submitId,this.paperDetail),this.dialogTableVisible=!0):this.$message({message:"抱歉，该场考试您未参加，无法查看明细",type:"warning"})},timeFormat:function(t){var e="",s=new Date(t),i=s.getFullYear(),a=s.getMonth()+1,n=s.getDate(),l=s.getHours(),r=s.getMinutes(),c=s.getSeconds();return e+=i+"/",a<10&&(e+="0"),e+=a+"/",n<10&&(e+="0"),e+=n+" ",l<10&&(e+="0"),e+=l+":",r<10&&(e+="0"),e+=r+":",c<10&&(e+="0"),e+=c,e},twoNumber:function(t){var e=t;if(-1==e.indexOf("."))return t+".00";var s=e.length,i=e.indexOf(".");return s>i+2?e.slice(0,i+3):s==i+2?e+"0":e},getSubjectName:function(){var t=this;this.$grade.getdict().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.getTestExam(),t.subjectName=e.data.data[0]["科目名称"])})).catch()},getTestNumber:function(){var t=this;this.$grade.gettestNumber().then((function(e){0===e.data.code&&(t.total=e.data.data[0].totalCount,t.totalNum=e.data.data[0].totalCount,t.pass=e.data.data[0].successCount,t.fail=e.data.data[0].failCount,t.empty=e.data.data[0].undoCount)})).catch()},getTestExam:function(){var t=this;this.$grade.getExam(this.page,this.limit,this.status).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.allTestList=e.data.data,t.allTestList.map((function(e){e.beginTime=t.timeFormat(e.beginTime),e.endWriteTime=t.timeFormat(e.endWriteTime),e.beginWriteTime=t.timeFormat(e.beginWriteTime),t.subjectName.map((function(s){s.key==e.subjectId&&t.$set(e,"subjextName",s.value)}))})))})).catch((function(t){console.log(t)}))}},mounted:function(){this.getTestNumber(),this.getSubjectName()},watch:{},computed:{}},g=v,h=(s("fbc9"),Object(u["a"])(g,i,a,!1,null,"aa979a5a",null));e["default"]=h.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),a=s("5899"),n="["+a+"]",l=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),c=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(l,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6d11":function(t,e,s){"use strict";var i=s("ce14"),a=s.n(i);a.a},7156:function(t,e,s){var i=s("861d"),a=s("d2bb");t.exports=function(t,e,s){var n,l;return a&&"function"==typeof(n=e.constructor)&&n!==s&&i(l=n.prototype)&&l!==s.prototype&&a(t,l),t}},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,s){"use strict";var i=s("83ab"),a=s("da84"),n=s("94ca"),l=s("6eeb"),r=s("5135"),c=s("c6b6"),o=s("7156"),u=s("c04e"),d=s("d039"),p=s("7c73"),v=s("241c").f,g=s("06cf").f,h=s("9bf2").f,f=s("58a8").trim,_="Number",b=a[_],m=b.prototype,C=c(p(m))==_,y=function(t){var e,s,i,a,n,l,r,c,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=f(o),e=o.charCodeAt(0),43===e||45===e){if(s=o.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+o}for(n=o.slice(2),l=n.length,r=0;r<l;r++)if(c=n.charCodeAt(r),c<48||c>a)return NaN;return parseInt(n,i)}return+o};if(n(_,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof x&&(C?d((function(){m.valueOf.call(s)})):c(s)!=_)?o(new b(y(e)),s,x):y(e)},S=i?v(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;S.length>L;L++)r(b,w=S[L])&&!r(x,w)&&h(x,w,g(b,w));x.prototype=m,m.constructor=x,l(a,_,x)}},c975:function(t,e,s){"use strict";var i=s("23e7"),a=s("4d64").indexOf,n=s("a640"),l=s("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,o=n("indexOf"),u=l("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!o||!u},{indexOf:function(t){return c?r.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},ce14:function(t,e,s){},fb6a:function(t,e,s){"use strict";var i=s("23e7"),a=s("861d"),n=s("e8b5"),l=s("23cb"),r=s("50c4"),c=s("fc6a"),o=s("8418"),u=s("b622"),d=s("1dde"),p=s("ae40"),v=d("slice"),g=p("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),f=[].slice,_=Math.max;i({target:"Array",proto:!0,forced:!v||!g},{slice:function(t,e){var s,i,u,d=c(this),p=r(d.length),v=l(t,p),g=l(void 0===e?p:e,p);if(n(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!n(s.prototype)?a(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return f.call(d,v,g);for(i=new(void 0===s?Array:s)(_(g-v,0)),u=0;v<g;v++,u++)v in d&&o(i,u,d[v]);return i.length=u,i}})},fbc9:function(t,e,s){"use strict";var i=s("3256"),a=s.n(i);a.a}}]);