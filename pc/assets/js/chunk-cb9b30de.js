(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb9b30de"],{3235:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[!0===e.showselect?s("div",[s("div",{staticClass:"choose"},[s("div",{staticClass:"subject"},[s("el-select",{attrs:{placeholder:"请选择专业"},model:{value:e.subjectname,callback:function(t){e.subjectname=t},expression:"subjectname"}},[s("el-option",{key:"",attrs:{value:"不限"}}),e._l(e.subjectList,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),s("div",{staticClass:"classname"},[s("el-select",{attrs:{placeholder:"请选择科目"},model:{value:e.classname,callback:function(t){e.classname=t},expression:"classname"}},[s("el-option",{key:"",attrs:{value:"不限"}}),e._l(e.classList,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),s("div",{staticClass:"subject"},[s("el-select",{attrs:{placeholder:"请选择题型"},model:{value:e.topicType,callback:function(t){e.topicType=t},expression:"topicType"}},e._l(e.questionType,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})})),1)],1),s("div",{staticClass:"classname"},[s("el-select",{attrs:{placeholder:"请选择难易程度"},model:{value:e.easyType,callback:function(t){e.easyType=t},expression:"easyType"}},[s("el-option",{key:"",attrs:{value:"不限"}}),e._l(e.diffcult,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),s("div",{staticClass:"classname"},[s("el-select",{attrs:{placeholder:"请选择题目条数"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.listSize,(function(e){return s("el-option",{key:e,attrs:{value:e}})})),1)],1),s("div",{staticClass:"btn"},[s("el-button",{attrs:{type:"primary"},on:{click:e.chooseClass}},[e._v("开始练习")])],1)]),e._m(0)]):s("div",{staticClass:"else"},[s("div",[s("div",[s("div",[s("div",{staticClass:"detail"},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticClass:"index"},[e._v(e._s(e.index+1))]),e._l(e.questionType,(function(t,i){return s("div",{key:i,staticClass:"questiontype"},[e.questionDetail.type==t.key?s("span",[e._v("【"+e._s(t.value)+"】")]):e._e()])}))],2),s("div",{staticStyle:{"padding-right":"20px"}},[s("span",{staticStyle:{color:"#d56f2"}},[e._v(e._s(e.index+1))]),e._v(" /"+e._s(e.data.size)+" ")])]),s("div",{staticClass:"content"},[e._v(e._s(e.questionDetail.content))])]),s("div",{staticClass:"traincontent"},[0==e.questionDetail.type?s("div",e._l(e.questionDetail.options,(function(t,i){return s("div",{key:i},[s("el-radio-group",{attrs:{disabled:e.disabled},on:{change:e.chooseRadio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[s("el-radio",{attrs:{label:t.order}},[0===t.order?s("span",[e._v("A、")]):e._e(),1===t.order?s("span",[e._v("B、")]):e._e(),2===t.order?s("span",[e._v("C、")]):e._e(),3===t.order?s("span",[e._v("D、")]):e._e(),e._v(" "+e._s(t.content)+" ")])],1)],1)})),0):e._e(),3==e.questionDetail.type?s("div",[s("el-radio-group",{attrs:{disabled:e.disabled},on:{change:e.juage},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[s("div",{staticStyle:{padding:"0 0 10px 0"}},[s("el-radio",{attrs:{label:"judge1"}},[e._v("正确")])],1),s("div",[s("el-radio",{attrs:{label:"judge2"}},[e._v("错误")])],1)])],1):e._e(),1==e.questionDetail.type?s("div",e._l(e.questionDetail.options,(function(t,i){return s("div",{key:i},[s("el-checkbox-group",{attrs:{disabled:e.disabled},on:{change:e.checkbox},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[s("el-checkbox",{attrs:{label:t.order}},[0===t.order?s("span",[e._v("A、")]):e._e(),1===t.order?s("span",[e._v("B、")]):e._e(),2===t.order?s("span",[e._v("C、")]):e._e(),3===t.order?s("span",[e._v("D、")]):e._e(),4===t.order?s("span",[e._v("E、")]):e._e(),5===t.order?s("span",[e._v("F、")]):e._e(),e._v(" "+e._s(t.content)+" ")])],1)],1)})),0):e._e(),2==e.questionDetail.type||4==e.questionDetail.type||5==e.questionDetail.type?s("div",[s("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1):e._e()]),s("div",{staticClass:"checkRightAnswer"},[s("div",{on:{click:e.checkRightAnswer}},[s("img",{attrs:{src:i("cabe"),alt:""}})]),e.showAnswer?s("div",{on:{click:e.checkRightAnswer}},[e._v("关闭提示")]):s("div",{on:{click:e.checkRightAnswer}},[e._v("查看提示")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showAnswer,expression:"showAnswer"}]},[e.questionDetail.answerResolve?s("div",{staticStyle:{"margin-bottom":"20px"}},[e._v(" 提示: "),s("span",{staticStyle:{color:"red","padding-left":"10px"}},[e._v(e._s(e.questionDetail.answerResolve))])]):s("div",{staticStyle:{"margin-bottom":"10px"}},[e._v(" 提示: "),s("span",{staticStyle:{color:"red","padding-left":"10px"}},[e._v("暂无提示")])]),e.choosed?s("div",{staticStyle:{display:"flex","align-items":"center","padding-bottom":"10px"}},[s("div",[e._v("正确答案 :")]),s("div",{staticStyle:{"padding-left":"10px",color:"green"}},e._l(e.questionDetail.answers,(function(t,i){return s("span",{key:i},[s("span",[e._v(e._s(t.content))])])})),0)]):e._e()])])]),s("div",{staticClass:"choosebtn"},[e.showBtn?s("div",[s("el-button",{attrs:{type:"primary",round:""},on:{click:e.confirm}},[e._v("完成")])],1):s("div",[e.index===e.questionId.length-1?s("div",[s("el-button",{attrs:{type:"primary",round:""},on:{click:e.submitTrain}},[e._v("提交练习")])],1):s("div",[s("el-button",{attrs:{type:"primary",round:""},on:{click:e.after}},[e._v("下一题")])],1)])])]),s("el-dialog",{attrs:{title:"练习结果",visible:e.dialogVisible,width:"30%","close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",[s("div",[s("div",{staticClass:"padding"},[e._v("本次答对题目数: "+e._s(e.data.size))])]),s("div",[s("div",{staticClass:"flex justify-between aligh-center"},[s("div",{staticClass:"w30"},[e._v("正确率: "+e._s(e.rightPercent))]),s("div",{staticClass:"w50"},[e._v("用时: "+e._s(e.trainTime))])]),s("div",{staticClass:"flex justify-between aligh-center"},[s("div",{staticClass:"w30"},[e._v("错题数: "+e._s(e.errorCount))]),s("div",{staticClass:"w50"},[e._v("积分: 1")])])])]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1,e.showselect=!0,e.disabled=!1,e.showAnswer=!1,e.choosed=!1,e.showBtn=!0,e.radio="",e.checkList=[],e.questionDetail={}}}},[e._v("确 定")])],1)])],1)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"info"},[i("div",[e._v("请选择题型等筛选条件,系统默认选择单选题，默认十道题，其余条件不限")]),i("div",{staticStyle:{"padding-top":"5px"}},[e._v("若练习中途退出则不计入练习记录")])])}],n=(i("d81d"),i("a434"),i("a9e3"),{data:function(){return{subjectname:"不限",classname:"不限",topicType:"单选题",easyType:"不限",dialogVisible:!1,classList:[],disabled:!1,subjectList:[],questionType:[],showBtn:!0,choosed:!1,size:"10",listSize:["10","2","15","20","25","30"],data:{criteria:{level:null,majorId:null,subjectId:null,type:0},size:10},diffcult:[{key:"EASY",value:"简单"},{key:"NORMAL",value:"普通"},{key:"HARD",value:"困难"}],questionId:"",questionDetail:{},radio:"",checkList:[],textarea:"",judge1:"",judge2:"",trainTime:"",index:0,duringTime:"",type:!1,showAnswer:!1,showselect:!0,rightQuestionId:[],radioing:"",result:!1,beginTime:0,endTime:0,errorCount:0,rightPercent:""}},components:{},methods:{confirm:function(){""!==this.radio||this.checkList.length>0?(this.showAnswer=!0,this.disabled=!0,this.showBtn=!1,this.choosed=!0):this.$message({message:"至少选择一个选项才能进入下一题",type:"none"})},after:function(){this.index+=1,this.index<this.questionId.length?(!0===this.result&&this.rightQuestionId.push(this.questionDetail.id),console.log(this.rightQuestionId),this.disabled=!1,this.showAnswer=!1,this.choosed=!1,this.showBtn=!0,this.radio="",this.checkList=[],this.questionDetail={},this.getInfo(this.questionId[this.index])):(this.index-=1,this.$message({message:"当前是最后一题",type:"warning"}))},submitTrain:function(){var e=this;!0===this.result&&this.rightQuestionId.push(this.questionDetail.id),this.dialogVisible=!0,this.endTime=Date.parse(new Date);var t=this.endTime-this.beginTime;if(t/1e3>=60)if(t%6e4===0){var i=t/6e4;this.trainTime=i+"分钟"}else{var s=Math.floor(t/1e3/60),a=t/1e3-60*s;a<10&&(a="0"+a),this.trainTime=s+"分钟"+a+"秒"}else this.trainTime=t/1e3+"秒";this.errorCount=this.data.size-this.rightQuestionId.length,this.rightPercent=Math.floor(this.rightQuestionId.length/this.data.size*100)+"%";JSON.parse(localStorage.getItem("userInfo"));var n={costSeconds:t/1e3,questionNumber:this.data.size,rightNumber:this.rightQuestionId.length};this.$grade.submitPractise(n).then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code||e.$message({message:t.data.msg,type:"warning"})})).catch(),console.log(this.rightQuestionId)},checkRightAnswer:function(){this.showAnswer=!this.showAnswer},getdict:function(){var e=this;this.$grade.getdict().then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.classList=t.data.data[0]["科目名称"],e.subjectList=t.data.data[0]["专业名称"],t.data.data[0]["题目类型"].map((function(t){"单选题"!=t.value&&"多选题"!=t.value&&"判断题"!=t.value||e.questionType.push(t)}))):e.$message({message:t.data.msg,typr:"warning"})})).catch((function(e){console.log(e)}))},getInfo:function(e){var t=this;this.$grade.getErrorDetail(e).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?t.questionDetail=e.data.data[0]:t.$message({message:e.data.msg,typr:"warning"})})).catch()},chooseClass:function(){var e=this;""==this.classname||"不限"==this.classname?this.data.criteria.subjectId=null:this.classList.map((function(t){t.value==e.classname&&(e.data.criteria.subjectId=t.key)})),""==this.subjectname||"不限"==this.subjectname?this.data.criteria.majorId=null:this.subjectList.map((function(t){t.value==e.subjectname&&(e.data.criteria.majorId=t.key)})),""==this.topicType||"不限"==this.topicType?(this.data.criteria.type=0,this.type=!1):(this.type=!0,this.questionType.map((function(t){t.value==e.topicType&&(e.data.criteria.type=t.key)}))),""==this.easyType||"不限"==this.easyType?this.data.criteria.level=null:this.diffcult.map((function(t){t.value==e.easyType&&(e.data.criteria.level=t.key)})),""!=this.size&&(this.data.size=Number(this.size)),!0===this.type||null!==this.data.type?this.$api.getRandomQuestion(this.data).then((function(t){0===t.data.code?(e.showselect=!e.showselect,e.index=0,e.questionId=[],e.questionId=t.data.data,e.beginTime=Date.parse(new Date),e.getInfo(t.data.data[e.index])):e.$message({message:"暂时没有足够的题目",type:"warning"})})).catch():this.$message({message:"请至少选择一种题型",type:"warning"})},chooseRadio:function(e){this.radioing="",0===e&&(this.radioing="A"),1===e&&(this.radioing="B"),2===e&&(this.radioing="C"),3===e&&(this.radioing="D"),4===e&&(this.radioing="E"),5===e&&(this.radioing="F"),this.radioing===this.questionDetail.answers[0].content?this.result=!0:this.result=!1},juage:function(e){var t="";"judge1"===e&&(t="正确"),"judge2"===e&&(t="错误"),t===this.questionDetail.answers[0].content?this.result=!0:this.result=!1},checkbox:function(e){var t=[];e.map((function(e){0===e&&t.push("A"),1===e&&t.push("B"),2===e&&t.push("C"),3===e&&t.push("D"),4===e&&t.push("E"),5===e&&t.push("F")})),t=t.sort();var i=[];this.questionDetail.answers.map((function(e){i.push(e.content)})),this.compare(i,t)?this.result=!0:this.result=!1},compare:function(e,t){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0},unique:function(e){for(var t=0;t<e.length;t++)for(var i=t+1;i<e.length;i++)e[t]==e[i]&&(e.splice(i,1),i--);return e}},mounted:function(){this.getdict()},watch:{},computed:{}}),o=n,r=(i("3fb6"),i("2877")),c=Object(r["a"])(o,s,a,!1,null,"2cc117be",null);t["default"]=c.exports},"3fb6":function(e,t,i){"use strict";var s=i("9257"),a=i.n(s);a.a},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var s=i("1d80"),a=i("5899"),n="["+a+"]",o=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),c=function(e){return function(t){var i=String(s(t));return 1&e&&(i=i.replace(o,"")),2&e&&(i=i.replace(r,"")),i}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,i){var s=i("861d"),a=i("d2bb");e.exports=function(e,t,i){var n,o;return a&&"function"==typeof(n=t.constructor)&&n!==i&&s(o=n.prototype)&&o!==i.prototype&&a(e,o),e}},9257:function(e,t,i){},a434:function(e,t,i){"use strict";var s=i("23e7"),a=i("23cb"),n=i("a691"),o=i("50c4"),r=i("7b0b"),c=i("65f0"),l=i("8418"),d=i("1dde"),u=i("ae40"),h=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,f=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!h||!p},{splice:function(e,t){var i,s,d,u,h,p,y=r(this),b=o(y.length),_=a(e,b),w=arguments.length;if(0===w?i=s=0:1===w?(i=0,s=b-_):(i=w-2,s=f(v(n(t),0),b-_)),b+i-s>g)throw TypeError(m);for(d=c(y,s),u=0;u<s;u++)h=_+u,h in y&&l(d,u,y[h]);if(d.length=s,i<s){for(u=_;u<b-s;u++)h=u+s,p=u+i,h in y?y[p]=y[h]:delete y[p];for(u=b;u>b-s+i;u--)delete y[u-1]}else if(i>s)for(u=b-s;u>_;u--)h=u+s-1,p=u+i-1,h in y?y[p]=y[h]:delete y[p];for(u=0;u<i;u++)y[u+_]=arguments[u+2];return y.length=b-s+i,d}})},a9e3:function(e,t,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),o=i("6eeb"),r=i("5135"),c=i("c6b6"),l=i("7156"),d=i("c04e"),u=i("d039"),h=i("7c73"),p=i("241c").f,v=i("06cf").f,f=i("9bf2").f,g=i("58a8").trim,m="Number",y=a[m],b=y.prototype,_=c(h(b))==m,w=function(e){var t,i,s,a,n,o,r,c,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),o=n.length,r=0;r<o;r++)if(c=n.charCodeAt(r),c<48||c>a)return NaN;return parseInt(n,s)}return+l};if(n(m,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var k,x=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof x&&(_?u((function(){b.valueOf.call(i)})):c(i)!=m)?l(new y(w(t)),i,x):w(t)},I=s?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;I.length>C;C++)r(y,k=I[C])&&!r(x,k)&&f(x,k,v(y,k));x.prototype=b,b.constructor=x,o(a,m,x)}},ae40:function(e,t,i){var s=i("83ab"),a=i("d039"),n=i("5135"),o=Object.defineProperty,r={},c=function(e){throw e};e.exports=function(e,t){if(n(r,e))return r[e];t||(t={});var i=[][e],l=!!n(t,"ACCESSORS")&&t.ACCESSORS,d=n(t,0)?t[0]:c,u=n(t,1)?t[1]:void 0;return r[e]=!!i&&!a((function(){if(l&&!s)return!0;var e={length:-1};l?o(e,1,{enumerable:!0,get:c}):e[1]=1,i.call(e,d,u)}))}},b727:function(e,t,i){var s=i("0366"),a=i("44ad"),n=i("7b0b"),o=i("50c4"),r=i("65f0"),c=[].push,l=function(e){var t=1==e,i=2==e,l=3==e,d=4==e,u=6==e,h=5==e||u;return function(p,v,f,g){for(var m,y,b=n(p),_=a(b),w=s(v,f,3),k=o(_.length),x=0,I=g||r,C=t?I(p,k):i?I(p,0):void 0;k>x;x++)if((h||x in _)&&(m=_[x],y=w(m,x,b),e))if(t)C[x]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return x;case 2:c.call(C,m)}else if(d)return!1;return u?-1:l||d?d:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},cabe:function(e,t,i){e.exports=i.p+"assets/img/light-bulb.png"},d81d:function(e,t,i){"use strict";var s=i("23e7"),a=i("b727").map,n=i("1dde"),o=i("ae40"),r=n("map"),c=o("map");s({target:"Array",proto:!0,forced:!r||!c},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);