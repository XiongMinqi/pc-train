(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e564252"],{3235:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[!0===e.showselect?s("div",[s("div",{staticClass:"choose"},[s("div",{staticClass:"subject"},[s("el-select",{attrs:{placeholder:"请选择专业"},model:{value:e.subjectname,callback:function(t){e.subjectname=t},expression:"subjectname"}},[s("el-option",{key:"",attrs:{value:"全部"}}),e._l(e.subjectList,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),s("div",{staticClass:"classname"},[s("el-select",{attrs:{placeholder:"请选择科目"},model:{value:e.classname,callback:function(t){e.classname=t},expression:"classname"}},[s("el-option",{key:"",attrs:{value:"全部"}}),e._l(e.classList,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),s("div",{staticClass:"subject"},[s("el-select",{attrs:{placeholder:"请选择题型"},model:{value:e.topicType,callback:function(t){e.topicType=t},expression:"topicType"}},e._l(e.questionType,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})})),1)],1),s("div",{staticClass:"classname"},[s("el-select",{attrs:{placeholder:"请选择难易程度"},model:{value:e.easyType,callback:function(t){e.easyType=t},expression:"easyType"}},[s("el-option",{key:"",attrs:{value:"全部"}}),e._l(e.diffcult,(function(e){return s("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),s("div",{staticClass:"classname"},[s("el-select",{attrs:{placeholder:"请选择题目条数"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},e._l(e.listSize,(function(e){return s("el-option",{key:e,attrs:{value:e}})})),1)],1),s("div",{staticClass:"btn"},[s("el-button",{attrs:{type:"primary"},on:{click:e.chooseClass}},[e._v("开始练习")])],1)]),s("div",{staticClass:"info"},[e._v("请选择题型等筛选条件,系统默认选择单选题")])]):s("div",{staticClass:"else"},[s("div",[s("div",[s("div",[s("div",{staticClass:"detail"},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticClass:"index"},[e._v(e._s(e.index+1))]),e._l(e.questionType,(function(t,i){return s("div",{key:i,staticClass:"questiontype"},[e.questionDetail.type==t.key?s("span",[e._v("【"+e._s(t.value)+"】")]):e._e()])}))],2),s("div",{staticStyle:{"padding-right":"20px"}},[s("span",{staticStyle:{color:"#d56f2"}},[e._v(e._s(e.index+1))]),e._v(" /"+e._s(e.data.size)+" ")])]),s("div",{staticClass:"content"},[e._v(e._s(e.questionDetail.content))])]),s("div",{staticClass:"traincontent"},[0==e.questionDetail.type?s("div",e._l(e.questionDetail.options,(function(t,i){return s("div",{key:i},[s("el-radio-group",{on:{change:e.chooseRadio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[s("el-radio",{attrs:{label:t.order}},[0===t.order?s("span",[e._v("A、")]):e._e(),1===t.order?s("span",[e._v("B、")]):e._e(),2===t.order?s("span",[e._v("C、")]):e._e(),3===t.order?s("span",[e._v("D、")]):e._e(),e._v(" "+e._s(t.content)+" ")])],1)],1)})),0):e._e(),3==e.questionDetail.type?s("div",[s("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[s("div",{staticStyle:{padding:"0 0 10px 0"}},[s("el-radio",{attrs:{label:"judge1"}},[e._v("正确")])],1),s("div",[s("el-radio",{attrs:{label:"judge2"}},[e._v("错误")])],1)])],1):e._e(),1==e.questionDetail.type?s("div",e._l(e.questionDetail.options,(function(t,i){return s("div",{key:i},[s("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[s("el-checkbox",{attrs:{label:t.content}},[0===t.order?s("span",[e._v("A、")]):e._e(),1===t.order?s("span",[e._v("B、")]):e._e(),2===t.order?s("span",[e._v("C、")]):e._e(),3===t.order?s("span",[e._v("D、")]):e._e(),4===t.order?s("span",[e._v("E、")]):e._e(),5===t.order?s("span",[e._v("F、")]):e._e(),e._v(" "+e._s(t.content)+" ")])],1)],1)})),0):e._e(),2==e.questionDetail.type||4==e.questionDetail.type||5==e.questionDetail.type?s("div",[s("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1):e._e()]),s("div",{staticClass:"checkRightAnswer"},[s("div",{on:{click:e.checkRightAnswer}},[s("img",{attrs:{src:i("cabe"),alt:""}})]),e.showAnswer?s("div",{on:{click:e.checkRightAnswer}},[e._v("关闭正确答案")]):s("div",{on:{click:e.checkRightAnswer}},[e._v("查看正确答案")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showAnswer,expression:"showAnswer"}],staticStyle:{display:"flex","align-items":"center","padding-bottom":"20px"}},[s("div",[e._v("正确答案 :")]),s("div",{staticStyle:{"padding-left":"10px",color:"green"}},e._l(e.questionDetail.answers,(function(t,i){return s("span",{key:i},[s("span",[e._v(e._s(t.content))])])})),0)])])]),s("div",{staticClass:"choosebtn"},[s("div",[s("el-button",{attrs:{type:"primary",round:""},on:{click:e.before}},[e._v("上一题")])],1),s("div",[s("el-button",{attrs:{type:"primary",round:""},on:{click:e.after}},[e._v("下一题")])],1)])])])},a=[],n=(i("d81d"),i("a9e3"),{data:function(){return{subjectname:"",classname:"",topicType:"",easyType:"",classList:[],subjectList:[],questionType:[],size:"",listSize:["10","15","20","25","30"],data:{criteria:{level:null,majorId:null,subjectId:null,type:null},size:10},diffcult:[{key:"EASY",value:"简单"},{key:"NORMAL",value:"普通"},{key:"HARD",value:"困难"}],questionId:"",questionDetail:{},radio:"",checkList:[],textarea:"",judge1:"",judge2:"",index:0,type:!1,showAnswer:!1,showselect:!0,rightQuestionId:[],radioing:""}},components:{},methods:{before:function(){this.showAnswer=!1,this.index-=1,this.index<0?(this.index+=1,this.$message({message:"当前是第一题",type:"warning"})):this.getInfo(this.questionId[this.index])},after:function(){this.index+=1,this.index<this.questionId.length?(this.showAnswer=!1,this.questionDetail={},this.getInfo(this.questionId[this.index])):(this.index-=1,this.$message({message:"当前是最后一题",type:"warning"}))},checkRightAnswer:function(){this.showAnswer=!this.showAnswer},getdict:function(){var e=this;this.$grade.getdict().then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code&&(e.classList=t.data.data[0]["科目名称"],e.subjectList=t.data.data[0]["专业名称"],t.data.data[0]["题目类型"].map((function(t){"单选题"!=t.value&&"多选题"!=t.value&&"判断题"!=t.value||e.questionType.push(t)})))})).catch((function(e){console.log(e)}))},getInfo:function(e){var t=this;this.$grade.getErrorDetail(e).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?t.questionDetail=e.data.data[0]:t.$message({message:e.data.msg,typr:"warning"})})).catch()},chooseClass:function(){var e=this;""==this.classname||"全部"==this.classname?this.data.criteria.subjectId=null:this.classList.map((function(t){t.value==e.classname&&(e.data.criteria.subjectId=t.key)})),""==this.subjectname||"全部"==this.subjectname?this.data.criteria.majorId=null:this.subjectList.map((function(t){t.value==e.subjectname&&(e.data.criteria.majorId=t.key)})),""==this.topicType||"全部"==this.topicType?(this.data.criteria.type=0,this.type=!1):(this.type=!0,this.questionType.map((function(t){t.value==e.topicType&&(e.data.criteria.type=t.key)}))),""==this.easyType||"全部"==this.easyType?this.data.criteria.level=null:this.diffcult.map((function(t){t.value==e.easyType&&(e.data.criteria.level=t.key)})),""!=this.size&&(this.data.size=Number(this.size)),!0===this.type?(this.showselect=!this.showselect,this.$api.getRandomQuestion(this.data).then((function(t){0===t.data.code&&(e.index=0,e.questionId=[],e.questionId=t.data.data,e.getInfo(t.data.data[e.index]))})).catch()):this.$message({message:"请至少选择一种题型",type:"warning"})},chooseRadio:function(e){this.radioing="",0===e&&(this.radioing="A"),1===e&&(this.radioing="B"),2===e&&(this.radioing="C"),3===e&&(this.radioing="D"),4===e&&(this.radioing="E"),5===e&&(this.radioing="F"),console.log(this.radioing),this.radioing===this.questionDetail.answers[0].content&&this.rightQuestionId.push(this.questionDetail.id),console.log(this.rightQuestionId)}},mounted:function(){this.getdict()},watch:{},computed:{}}),o=n,c=(i("b74d"),i("2877")),r=Object(c["a"])(o,s,a,!1,null,"6f28cd5e",null);t["default"]=r.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var s=i("1d80"),a=i("5899"),n="["+a+"]",o=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),r=function(e){return function(t){var i=String(s(t));return 1&e&&(i=i.replace(o,"")),2&e&&(i=i.replace(c,"")),i}};e.exports={start:r(1),end:r(2),trim:r(3)}},7156:function(e,t,i){var s=i("861d"),a=i("d2bb");e.exports=function(e,t,i){var n,o;return a&&"function"==typeof(n=t.constructor)&&n!==i&&s(o=n.prototype)&&o!==i.prototype&&a(e,o),e}},a9e3:function(e,t,i){"use strict";var s=i("83ab"),a=i("da84"),n=i("94ca"),o=i("6eeb"),c=i("5135"),r=i("c6b6"),l=i("7156"),d=i("c04e"),u=i("d039"),p=i("7c73"),h=i("241c").f,v=i("06cf").f,f=i("9bf2").f,y=i("58a8").trim,g="Number",_=a[g],m=_.prototype,b=r(p(m))==g,k=function(e){var t,i,s,a,n,o,c,r,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=y(l),t=l.charCodeAt(0),43===t||45===t){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+l}for(n=l.slice(2),o=n.length,c=0;c<o;c++)if(r=n.charCodeAt(c),r<48||r>a)return NaN;return parseInt(n,s)}return+l};if(n(g,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,w=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof w&&(b?u((function(){m.valueOf.call(i)})):r(i)!=g)?l(new _(k(t)),i,w):k(t)},I=s?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;I.length>A;A++)c(_,x=I[A])&&!c(w,x)&&f(w,x,v(_,x));w.prototype=m,m.constructor=w,o(a,g,w)}},ad38:function(e,t,i){},b74d:function(e,t,i){"use strict";var s=i("ad38"),a=i.n(s);a.a},cabe:function(e,t,i){e.exports=i.p+"assets/img/light-bulb.png"}}]);