(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90859e98"],{"14d6":function(t,e,i){"use strict";var s=i("28cf"),n=i.n(s);n.a},"25f0":function(t,e,i){"use strict";var s=i("6eeb"),n=i("825a"),a=i("d039"),r=i("ad6d"),c="toString",o=RegExp.prototype,l=o[c],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=c;(u||d)&&s(RegExp.prototype,c,(function(){var t=n(this),e=String(t.source),i=t.flags,s=String(void 0===i&&t instanceof RegExp&&!("flags"in o)?r.call(t):i);return"/"+e+"/"+s}),{unsafe:!0})},"28cf":function(t,e,i){},"344a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.emptyScoreData.length>=0?i("div",{staticClass:"scroll"},[t.emptyScoreData.length>0?i("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[t._m(0),i("div",t._l(t.emptyScoreData,(function(e,s){return i("div",{key:s},[i("div",{staticClass:"flex"},[s>=9?i("div",{staticClass:"index"},[t._v(t._s(s+1))]):t._e(),s<9?i("div",{staticClass:"index"},[t._v("0"+t._s(s+1))]):t._e(),i("div",{staticClass:"testName"},[t._v(t._s(e.paperName))]),i("div",{staticClass:"testTime"},[t._v(t._s(e.beginTime))]),i("div",{staticClass:"duringTime"},[t._v(t._s(e.costMinutes))]),i("div",{staticClass:"score"},[t._v(t._s(e.score))]),i("div",{staticClass:"operation",class:e.submitId?"bgblue":"bggray",on:{click:function(i){return t.checkDetail(e)}}},[i("span",[t._v("查看明细")])])])])})),0),i("el-dialog",{attrs:{width:"80%",title:"试卷明细",top:"1vh",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[i("submitPaper",{attrs:{submitId:t.submitId,paperDetail:t.paperDetail}})],1)],1):i("div",[t._v("暂无数据")])]):t._e()},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex"},[i("div",{staticClass:"index"},[t._v("序号")]),i("div",{staticClass:"testName"},[t._v("试卷")]),i("div",{staticClass:"testTime"},[t._v("考试时间")]),i("div",{staticClass:"duringTime"},[t._v("考试用时")]),i("div",{staticClass:"score"},[t._v("得分")]),i("div",{staticClass:"operation"},[t._v("操作")])])}],a=(i("c975"),i("d81d"),i("fb6a"),i("a434"),i("d3b7"),i("25f0"),i("c3ee")),r={data:function(){return{allTestList:[],emptyScoreData:[],loading:!0,dialogTableVisible:!1,submitId:"",paperDetail:{}}},components:{submitPaper:a["a"]},methods:{checkDetail:function(t){t.submitId?(this.submitId=t.submitId,this.paperDetail=t,this.dialogTableVisible=!0):this.$message({message:"抱歉，该场考试您未参加，无法查看明细",type:"warning"})},timeFormat:function(t){var e="",i=new Date(t),s=i.getFullYear(),n=i.getMonth()+1,a=i.getDate(),r=i.getHours(),c=i.getMinutes(),o=i.getSeconds();return e+=s+"/",n<10&&(e+="0"),e+=n+"/",a<10&&(e+="0"),e+=a+" ",r<10&&(e+="0"),e+=r+":",c<10&&(e+="0"),e+=c+":",o<10&&(e+="0"),e+=o,e},twoNumber:function(t){var e=t.toString();if(-1==e.indexOf("."))return t+".00";var i=e.length,s=e.indexOf(".");return i>s+2?e.slice(0,s+3):i==s+2?e+"0":e},duplicate:function(t){for(var e=0;e<t.length;e++)for(var i=e+1;i<t.length;i++)t[e]==t[i]&&(t.splice(i,1),i--);return t},getTestExam:function(){var t=this;this.$grade.getExam().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.loading=!1,t.allTestList=e.data.data[0].items,t.allTestList.map((function(e){e.beginTime=t.timeFormat(e.beginTime),e.beginWriteTime=t.timeFormat(e.beginWriteTime),e.endWriteTime=t.timeFormat(e.endWriteTime),e.costMinutes=t.twoNumber(e.costMinutes)})),console.log(e.data.data[0]),t.emptyExamIds=e.data.data[0].emptyExamIds,t.emptyExamIds.length>0&&(t.emptyExamIds.map((function(e){t.allTestList.map((function(i){i.examId==e&&t.emptyScoreData.push(i)}))})),t.emptyScoreData.sort((function(t,e){var i=new Date(t.beginTime).getTime(),s=new Date(e.beginTime).getTime();return s-i})),t.emptyScoreData=t.duplicate(t.emptyScoreData),console.log(t.emptyScoreData,"emptyScoreData")))})).catch((function(t){console.log(t)}))}},mounted:function(){this.getTestExam()},watch:{},computed:{}},c=r,o=(i("de55"),i("2877")),l=Object(o["a"])(c,s,n,!1,null,"50fe9778",null);e["default"]=l.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var s=i("1d80"),n=i("5899"),a="["+n+"]",r=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),o=function(t){return function(e){var i=String(s(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var s=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var a,r;return n&&"function"==typeof(a=e.constructor)&&a!==i&&s(r=a.prototype)&&r!==i.prototype&&n(t,r),t}},a434:function(t,e,i){"use strict";var s=i("23e7"),n=i("23cb"),a=i("a691"),r=i("50c4"),c=i("7b0b"),o=i("65f0"),l=i("8418"),u=i("1dde"),d=i("ae40"),p=u("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,h=9007199254740991,_="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p||!v},{splice:function(t,e){var i,s,u,d,p,v,m=c(this),b=r(m.length),y=n(t,b),w=arguments.length;if(0===w?i=s=0:1===w?(i=0,s=b-y):(i=w-2,s=g(f(a(e),0),b-y)),b+i-s>h)throw TypeError(_);for(u=o(m,s),d=0;d<s;d++)p=y+d,p in m&&l(u,d,m[p]);if(u.length=s,i<s){for(d=y;d<b-s;d++)p=d+s,v=d+i,p in m?m[v]=m[p]:delete m[v];for(d=b;d>b-s+i;d--)delete m[d-1]}else if(i>s)for(d=b-s;d>y;d--)p=d+s-1,v=d+i-1,p in m?m[v]=m[p]:delete m[v];for(d=0;d<i;d++)m[d+y]=arguments[d+2];return m.length=b-s+i,u}})},a640:function(t,e,i){"use strict";var s=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&s((function(){i.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,i){"use strict";var s=i("83ab"),n=i("da84"),a=i("94ca"),r=i("6eeb"),c=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),p=i("7c73"),v=i("241c").f,f=i("06cf").f,g=i("9bf2").f,h=i("58a8").trim,_="Number",m=n[_],b=m.prototype,y=o(p(b))==_,w=function(t){var e,i,s,n,a,r,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+l}for(a=l.slice(2),r=a.length,c=0;c<r;c++)if(o=a.charCodeAt(c),o<48||o>n)return NaN;return parseInt(a,s)}return+l};if(a(_,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var C,S=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof S&&(y?d((function(){b.valueOf.call(i)})):o(i)!=_)?l(new m(w(e)),i,S):w(e)},x=s?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;x.length>A;A++)c(m,C=x[A])&&!c(S,C)&&g(S,C,f(m,C));S.prototype=b,b.constructor=S,r(n,_,S)}},ae40:function(t,e,i){var s=i("83ab"),n=i("d039"),a=i("5135"),r=Object.defineProperty,c={},o=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var i=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:o,d=a(e,1)?e[1]:void 0;return c[t]=!!i&&!n((function(){if(l&&!s)return!0;var t={length:-1};l?r(t,1,{enumerable:!0,get:o}):t[1]=1,i.call(t,u,d)}))}},b727:function(t,e,i){var s=i("0366"),n=i("44ad"),a=i("7b0b"),r=i("50c4"),c=i("65f0"),o=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,d=6==t,p=5==t||d;return function(v,f,g,h){for(var _,m,b=a(v),y=n(b),w=s(f,g,3),C=r(y.length),S=0,x=h||c,A=e?x(v,C):i?x(v,0):void 0;C>S;S++)if((p||S in y)&&(_=y[S],m=w(_,S,b),t))if(e)A[S]=m;else if(m)switch(t){case 3:return!0;case 5:return _;case 6:return S;case 2:o.call(A,_)}else if(u)return!1;return d?-1:l||u?u:A}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c3ee:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"grid-content"},[t._v(" 试卷名称 ： "),i("span",[t._v(t._s(t.paperMsg.name))])])])],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 考试者 ： "),i("span",[t._v(t._s(t.userInfo.nickName))])])]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 学员得分 : "),i("span",[t._v(t._s(t.paperDetail.score))])])])],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 开始时间 : "),i("span",[t._v(t._s(t.paperDetail.beginWriteTime))])])]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 结束时间 : "),i("span",[t._v(t._s(t.paperDetail.endWriteTime))])])])],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 试卷总分 : "),i("span",[t._v(t._s(t.paperDetail.totalScore))])])]),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[t._v(" 考试用时 : "),i("span",[t._v(t._s(t.paperDetail.costMinutes)+"分钟")])])])],1),i("el-row",[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple span",class:0===t.number?"bgblue":"bg-purple",on:{click:t.checkAll}},[i("b",[t._v("全部题("+t._s(t.allList.length)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-light span",class:1===t.number?"bgblue":"bg-purple-light",on:{click:t.checkRight}},[i("b",[t._v("答对题("+t._s(t.rightList.length)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple span",class:2===t.number?"bgblue":"bg-purple",on:{click:t.checkErr}},[i("b",[t._v("答错题("+t._s(t.errList.length)+")")])])]),i("el-col",{attrs:{span:6}},[i("div",{staticClass:"grid-content bg-purple-light span",class:3===t.number?"bgblue":"bg-purple-light",on:{click:t.checkEmpty}},[i("b",[t._v("未答题("+t._s(t.emptyList.length)+")")])])])],1),i("div",{staticClass:"infinite-list",staticStyle:{overflow:"auto"}},[t.publicList.length>0?i("div",t._l(t.publicList,(function(e,s){return i("div",{key:s,staticClass:"titleDetail"},[i("div",{staticClass:"title"},[i("div",{staticStyle:{width:"3%"}},[i("div",s<9?[t._v("0"+t._s(s+1)+"、")]:[t._v(t._s(s+1)+"、")])]),i("div",{class:4===e.question.type?"name":"public",staticStyle:{width:"6%"}},[0===e.question.type?i("span",[t._v("【单选】")]):t._e(),1===e.question.type?i("span",[t._v("【多选】")]):t._e(),2===e.question.type?i("span",[t._v("【填空】")]):t._e(),3===e.question.type?i("span",[t._v("【判断】")]):t._e(),4===e.question.type?i("span",[t._v("【名词解释】")]):t._e(),5===e.question.type?i("span",[t._v("【问答】")]):t._e()]),i("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.question.content))])]),i("div",[e.question.options.length>0&&0===e.question.type||1===e.question.type?i("div",t._l(e.question.options,(function(e,s){return i("div",{key:s,staticClass:"chooices"},[0==s?i("div",[t._v("A")]):t._e(),1==s?i("div",[t._v("B")]):t._e(),2==s?i("div",[t._v("C")]):t._e(),3==s?i("div",[t._v("D")]):t._e(),i("div",[t._v("、"+t._s(e.content))])])})),0):t._e(),3===e.question.type?i("div",{},[i("div",{staticClass:"chooices"},[t._v("正确")]),i("div",{staticClass:"chooices"},[t._v("错误")])]):t._e(),5===e.question.type?i("div",{},[e.answer.ksAnswerContents.length>0?i("div",{},[i("div",{staticClass:"chooices"},[t._v(t._s(e.answer.ksAnswerContents[0].content))])]):t._e()]):t._e(),4===e.question.type?i("div",{},[e.answer.ksAnswerContents.length>0?i("div",{},[t._v(t._s(e.answer.ksAnswerContents[0].content))]):t._e()]):t._e()]),i("div",{staticClass:"jiexi",staticStyle:{"padding-left":"4%"}},[i("div",[i("div",{staticClass:"writeAnswer",staticStyle:{display:"flex","align-items":"center"}},[i("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("考生答案")]),e.answer.ksAnswerContents.length>0?i("div",{},[!0===e.answer.right?i("div",{staticClass:"bggreens"},[t._v(" "+t._s(e.answer.ksAnswerContents[0].content)+" ")]):i("div",{staticClass:"bgreds"},[t._v(" "+t._s(e.answer.ksAnswerContents[0].content)+" ")])]):i("div",{staticClass:"unanwser",staticStyle:{color:"#ff0000"}},[t._v("该题考生未作答")])]),i("div",{staticClass:"currectAnswer",staticStyle:{display:"flex","align-items":"center"}},[i("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("正确答案")]),e.question.answers.length>0?i("div",{staticStyle:{color:"#007AFF",width:"90%"}},[t._v(t._s(e.question.answers[0].content))]):t._e()]),i("div",{staticClass:"score",staticStyle:{display:"flex","align-items":"center"}},[i("div",{staticStyle:{"padding-right":"10px",width:"6%"}},[t._v("分数")]),null===e.answer.score?i("div",{staticStyle:{color:"#007AFF"}},[t._v("0")]):i("div",{staticStyle:{color:"#007AFF"}},[t._v(t._s(e.answer.score)+"/"+t._s(e.question.defaultScore))])])]),i("div",{staticClass:"jiexi-text",staticStyle:{"margin-bottom":"70rpx"}},[i("div",{staticStyle:{"font-weight":"600","padding-bottom":"10px"}},[t._v("题目分析:")]),e.question.answerResolve?i("div",[t._v(t._s(e.question.answerResolve))]):i("div",[t._v("该题暂无解析")])])])])})),0):i("div",[t._v("暂无数据")])])],1)},n=[],a=(i("d81d"),i("a9e3"),{data:function(){return{number:0,paperMsg:{},userInfo:{},allList:[],rightList:[],errList:[],emptyList:[],publicList:[]}},props:{submitId:Number,required:!0,paperDetail:Object,require:!0},components:{},methods:{getSubmitPaper:function(){var t=this;this.$grade.getSubmitPaper(this.submitId).then((function(e){console.log(e),1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.paperMsg=e.data.data[0],e.data.data[0].actualAnswer.map((function(i,s){var n={question:e.data.data[0].tkQuestions[s],answer:e.data.data[0].actualAnswer[s]};t.allList.push(n),!0===i.right?t.rightList.push(n):!1===i.right&&(i.ksAnswerContents.length>0?t.errList.push(n):t.emptyList.push(n))})),t.publicList=t.allList)})).catch((function(t){console.log(t)}))},checkAll:function(){this.number=0,this.publicList=[],this.publicList=this.allList},checkRight:function(){this.number=1,this.publicList=[],this.publicList=this.rightList},checkErr:function(){this.number=2,this.publicList=[],this.publicList=this.errList},checkEmpty:function(){this.number=3,this.publicList=[],this.publicList=this.emptyList}},mounted:function(){this.getSubmitPaper(),console.log(this.paperDetail),this.userInfo=JSON.parse(localStorage.getItem("userInfo"))},watch:{},computed:{}}),r=a,c=(i("14d6"),i("2877")),o=Object(c["a"])(r,s,n,!1,null,"1b67639e",null);e["a"]=o.exports},c975:function(t,e,i){"use strict";var s=i("23e7"),n=i("4d64").indexOf,a=i("a640"),r=i("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:o||!l||!u},{indexOf:function(t){return o?c.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},d81d:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").map,a=i("1dde"),r=i("ae40"),c=a("map"),o=r("map");s({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},de55:function(t,e,i){"use strict";var s=i("f361"),n=i.n(s);n.a},f361:function(t,e,i){},fb6a:function(t,e,i){"use strict";var s=i("23e7"),n=i("861d"),a=i("e8b5"),r=i("23cb"),c=i("50c4"),o=i("fc6a"),l=i("8418"),u=i("b622"),d=i("1dde"),p=i("ae40"),v=d("slice"),f=p("slice",{ACCESSORS:!0,0:0,1:2}),g=u("species"),h=[].slice,_=Math.max;s({target:"Array",proto:!0,forced:!v||!f},{slice:function(t,e){var i,s,u,d=o(this),p=c(d.length),v=r(t,p),f=r(void 0===e?p:e,p);if(a(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?n(i)&&(i=i[g],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return h.call(d,v,f);for(s=new(void 0===i?Array:i)(_(f-v,0)),u=0;v<f;v++,u++)v in d&&l(s,u,d[v]);return s.length=u,s}})}}]);