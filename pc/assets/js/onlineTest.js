(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["onlineTest"],{"0f15":function(t,e,a){},"0f7e":function(t,e,a){"use strict";var s=a("64f6"),i=a.n(s);i.a},1700:function(t,e,a){"use strict";var s=a("0f15"),i=a.n(s);i.a},"4cdf":function(t,e,a){t.exports=a.p+"assets/img/testlist.png"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),i=a("5899"),n="["+i+"]",r=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),l=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},"64f6":function(t,e,a){},7156:function(t,e,a){var s=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var n,r;return i&&"function"==typeof(n=e.constructor)&&n!==a&&s(r=n.prototype)&&r!==a.prototype&&i(t,r),t}},a9e3:function(t,e,a){"use strict";var s=a("83ab"),i=a("da84"),n=a("94ca"),r=a("6eeb"),o=a("5135"),l=a("c6b6"),c=a("7156"),d=a("c04e"),u=a("d039"),p=a("7c73"),g=a("241c").f,v=a("06cf").f,m=a("9bf2").f,f=a("58a8").trim,h="Number",_=i[h],b=_.prototype,y=l(p(b))==h,w=function(t){var e,a,s,i,n,r,o,l,c=d(t,!1);if("string"==typeof c&&c.length>2)if(c=f(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+c}for(n=c.slice(2),r=n.length,o=0;o<r;o++)if(l=n.charCodeAt(o),l<48||l>i)return NaN;return parseInt(n,s)}return+c};if(n(h,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(y?u((function(){b.valueOf.call(a)})):l(a)!=h)?c(new _(w(e)),a,C):w(e)},I=s?g(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)o(_,S=I[x])&&!o(C,S)&&m(C,S,v(_,S));C.prototype=b,b.constructor=C,r(i,h,C)}},ad26:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{staticClass:"choose"},[a("div",{staticClass:"classname"},[a("el-input",{attrs:{maxlength:"30","show-word-limit":"",clearable:"",placeholder:"请输入试卷名称"},model:{value:t.paperName,callback:function(e){t.paperName=e},expression:"paperName"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.getTest}},[t._v("开始筛选")])],1)]),t.testList.length>0?a("div",[t._l(t.testList,(function(e,s){return a("div",{key:s,staticClass:"flex testDetail"},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[t._m(0,!0),a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"name",staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.name))]),a("div",[t._v(" 专业 : "+t._s(e.majorname)+" | 部门 : "+t._s(e.departname)+" | 总分 ： "+t._s(e.totalScore)+"分 | 及格分数: "),a("span",{staticStyle:{color:"#3C3CC4"}},[t._v(t._s(e.passScore)+"分")])]),a("div",[t._v(" 创建时间 : "+t._s(e.publishTime)+" | "),a("span",{staticStyle:{color:"#CC3352"}},[t._v("截止时间 : "+t._s(e.expirationTime))])])])]),a("div",[a("div",[1===e.status?a("div",{on:{click:function(a){return t.showToast(e)}}},[a("el-button",{attrs:{type:"danger",round:""}},[t._v("未开始")])],1):t._e(),3===e.status?a("div",{on:{click:function(a){return t.showToast(e)}}},[a("el-button",{attrs:{type:"danger",round:""}},[t._v("审核中")])],1):t._e(),4===e.status?a("div",{on:{click:function(a){return t.showToast(e)}}},[a("el-button",{attrs:{type:"danger",round:""}},[t._v("已结束")])],1):t._e(),2===e.status?a("div",{on:{click:function(a){return t.onlineTest(e)}}},[a("el-button",{attrs:{type:"primary",round:""}},[t._v("进入考试")])],1):t._e()])])])})),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],2):a("div",{staticClass:"else"},[t._v("暂无考试")]),a("el-dialog",{attrs:{width:"80%",title:"试卷明细",top:"1vh",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.submitPaperloading,expression:"submitPaperloading"}]},[a("submitPaper",{attrs:{submitId:t.submitId,paperDetail:t.paperDetail}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userImg"},[s("img",{attrs:{src:a("4cdf"),alt:""}})])}],n=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content"},[t._v(" 试卷名称 ： "),a("span",[t._v(t._s(t.paperMsg.name))])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content"},[t._v(" 考试者 ： "),a("span",[t._v(t._s(t.userInfo.nickName))])])])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content"},[t._v(" 试卷总分 : "),a("span",[t._v(t._s(t.paperDetail.totalScore))])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content"},[t._v(" 学员得分 : "),a("span",[t._v(t._s(t.paperDetail.score))])])])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bgblue span"},[a("b",[t._v("试卷详情")])])])],1),a("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[t.publicList.length>0?a("div",t._l(t.publicList,(function(e,s){return a("div",{key:s,staticClass:"titleDetail"},[a("div",{staticClass:"title"},[a("div",{staticStyle:{width:"3%"}},[a("div",s<9?[t._v("0"+t._s(s+1)+"、")]:[t._v(t._s(s+1)+"、")])]),a("div",{class:4===e.question.type?"name":"public",staticStyle:{width:"6%"}},[0===e.question.type?a("span",[t._v("【单选】")]):t._e(),1===e.question.type?a("span",[t._v("【多选】")]):t._e(),2===e.question.type?a("span",[t._v("【填空】")]):t._e(),3===e.question.type?a("span",[t._v("【判断】")]):t._e(),4===e.question.type?a("span",[t._v("【名词解释】")]):t._e(),5===e.question.type?a("span",[t._v("【问答】")]):t._e()]),a("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.question.content))])]),a("div",[e.question.options.length>0&&0===e.question.type||1===e.question.type?a("div",t._l(e.question.options,(function(e,s){return a("div",{key:s,staticClass:"chooices"},[0==s?a("div",[t._v("A")]):t._e(),1==s?a("div",[t._v("B")]):t._e(),2==s?a("div",[t._v("C")]):t._e(),3==s?a("div",[t._v("D")]):t._e(),a("div",[t._v("、"+t._s(e.content))])])})),0):t._e(),3===e.question.type?a("div",{},[a("div",{staticClass:"chooices"},[t._v("正确")]),a("div",{staticClass:"chooices"},[t._v("错误")])]):t._e()]),a("div",{staticClass:"jiexi",staticStyle:{"padding-left":"4%"}},[a("div",[a("div",{staticClass:"writeAnswer",staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("考生答案")]),e.answer.ksAnswerContents.length>0?a("div",{},[!0===e.answer.right?a("div",{staticClass:"bggreens"},t._l(e.answer.ksAnswerContents,(function(e,s){return a("span",{key:s,staticStyle:{"padding-left":"10px"}},[a("span",[t._v(t._s(e.content))])])})),0):a("div",{staticClass:"bgreds"},t._l(e.answer.ksAnswerContents,(function(e,s){return a("span",{key:s,staticStyle:{"padding-left":"10px"}},[a("span",[t._v(t._s(e.content))])])})),0)]):a("div",{staticClass:"unanwser",staticStyle:{color:"#ff0000"}},[t._v("该题考生未作答")])]),a("div",{staticClass:"currectAnswer",staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("正确答案")]),e.question.answers.length>0?a("div",{staticStyle:{color:"#007AFF",width:"90%"}},t._l(e.question.answers,(function(e,s){return a("span",{key:s,staticStyle:{"padding-left":"10px"}},[a("span",[t._v(t._s(e.content))])])})),0):t._e()]),a("div",{staticClass:"score",staticStyle:{display:"flex","align-items":"center"}},[a("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("分数")]),null===e.answer.score?a("div",{staticStyle:{color:"#007AFF"}},[t._v("0")]):a("div",{staticStyle:{color:"#007AFF"}},[t._v(t._s(e.answer.score)+"/"+t._s(e.question.defaultScore))])])]),a("div",{staticClass:"jiexi-text",staticStyle:{"margin-bottom":"70rpx"}},[a("div",{staticStyle:{"font-weight":"600","padding-bottom":"10px"}},[t._v("题目分析:")]),e.question.answerResolve?a("div",[t._v(t._s(e.question.answerResolve))]):a("div",[t._v("该题暂无解析")])])])])})),0):a("div",[t._v("暂无数据")])])],1)}),r=[],o=(a("a9e3"),{data:function(){return{number:0,paperMsg:{},userInfo:{},allList:[],rightList:[],errList:[],emptyList:[],publicList:[],loading:!0}},props:{submitId:{type:Number,required:!0},paperDetail:{type:Object,require:!0}},components:{},methods:{getSubmitPaper:function(){var t=this;this.$grade.getSubmitPaper(this.submitId).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.paperMsg=e.data.data[0],t.allList=[],t.emptyList=[],t.rightList=[],t.errList=[],e.data.data[0].actualAnswer.map((function(a,s){var i={question:e.data.data[0].tkQuestions[s],answer:e.data.data[0].actualAnswer[s]};t.allList.push(i),!0===a.right?t.rightList.push(i):!1===a.right&&(a.ksAnswerContents.length>0?t.errList.push(i):t.emptyList.push(i))})),t.publicList=t.allList):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))}},mounted:function(){this.getSubmitPaper(),this.userInfo=JSON.parse(localStorage.getItem("userInfo"))},watch:{submitId:{handler:function(t,e){this.submitId=t,this.getSubmitPaper(),this.loading=!0},deep:!0},paperDetail:{handler:function(t,e){this.loading=!0,this.paperDetail=t},deep:!0}},computed:{}}),l=o,c=(a("0f7e"),a("2877")),d=Object(c["a"])(l,n,r,!1,null,"b8251cd4",null),u=d.exports,p={data:function(){return{currentPage:1,offset:1,limit:5,total:0,testList:[],major:[],paperName:"",department:[],loading:!0,dialogTableVisible:!1,submitPaperloading:!1,submitId:"",paperDetail:{},subjectName:[]}},components:{submitPaper:u},methods:{getSubjectName:function(){var t=this;this.$grade.getdict().then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.getTest(),t.subjectName=e.data.data[0]["科目名称"],t.major=e.data.data[0]["专业名称"],t.department=e.data.data[0]["部门名称"]):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},getlist:function(){},timeFormat:function(t){var e="",a=new Date(t),s=a.getFullYear(),i=a.getMonth()+1,n=a.getDate(),r=a.getHours(),o=a.getMinutes(),l=a.getSeconds();return e+=s+"/",i<10&&(e+="0"),e+=i+"/",n<10&&(e+="0"),e+=n+" ",r<10&&(e+="0"),e+=r+":",o<10&&(e+="0"),e+=o+":",l<10&&(e+="0"),e+=l,e},getTest:function(){var t=this,e={page:this.offset,limit:this.limit,object:{examName:this.paperName}};this.$onlineTest.getTestInfo(e).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.total=e.data.count,t.testList=e.data.data,t.testList.map((function(e){e.publishTime=t.timeFormat(e.publishTime),e.createTime=t.timeFormat(e.createTime);var a=Date.parse(new Date(e.publishTime))+6e4*e.minutes;t.major.map((function(a){e.majorId==a.key&&t.$set(e,"majorname",a.value)})),t.department.map((function(a){e.departmentId==a.key&&t.$set(e,"departname",a.value)})),t.$set(e,"expirationTime",t.timeFormat(a))}))):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},showToast:function(t){1===t.status&&this.$message({message:"考试还未开始，不能进入该场考试",type:"warning"}),3===t.status&&this.$message({message:"考试正在审核，不能再次进入该场考试",type:"warning"}),4===t.status&&this.$message({message:"考试已结束，不能再次进入该场考试",type:"warning"})},onlineTest:function(t){t.totalScore>0?(this.$message({message:"即将进入考试，祝您考试顺利",type:"success"}),this.$router.push({path:"/testIng",query:{paperId:t.paperId,id:t.id}})):this.$message({message:"发生错误",type:"warning"})},handleSizeChange:function(t){this.loading=!0,this.offset=1,this.limit=t,this.getTest()},handleCurrentChange:function(t){this.loading=!0,this.offset=t,this.getTest()},getSubjectDetail:function(){var t=this;this.$api.getSubject().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.getTest(),t.major=e.data.data[0]["专业名称"],t.department=e.data.data[0]["部门名称"]):t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){console.log(t)}))}},mounted:function(){this.getSubjectName()},watch:{},computed:{}},g=p,v=(a("1700"),Object(c["a"])(g,s,i,!1,null,"3387e770",null));e["default"]=v.exports},b727:function(t,e,a){var s=a("0366"),i=a("44ad"),n=a("7b0b"),r=a("50c4"),o=a("65f0"),l=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,d=4==t,u=6==t,p=5==t||u;return function(g,v,m,f){for(var h,_,b=n(g),y=i(b),w=s(v,m,3),S=r(y.length),C=0,I=f||o,x=e?I(g,S):a?I(g,0):void 0;S>C;C++)if((p||C in y)&&(h=y[C],_=w(h,C,b),t))if(e)x[C]=_;else if(_)switch(t){case 3:return!0;case 5:return h;case 6:return C;case 2:l.call(x,h)}else if(d)return!1;return u?-1:c||d?d:x}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d81d:function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").map,n=a("1dde"),r=a("ae40"),o=n("map"),l=r("map");s({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);