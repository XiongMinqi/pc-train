(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6290c4b0"],{"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,s=n("a640"),a=n("ae40"),o=s("forEach"),r=a("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},2448:function(t,e,n){"use strict";var i=n("5ba1"),s=n.n(i);s.a},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),s=n("825a"),a=n("d039"),o=n("ad6d"),r="toString",c=RegExp.prototype,l=c[r],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=r;(u||d)&&i(RegExp.prototype,r,(function(){var t=s(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},3789:function(t,e,n){},4155:function(t,e,n){"use strict";var i=n("6b01"),s=n.n(i);s.a},4160:function(t,e,n){"use strict";var i=n("23e7"),s=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"41ea":function(t,e,n){},"4faa":function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),s=n("5899"),a="["+s+"]",o=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5ba1":function(t,e,n){},"6b01":function(t,e,n){},7156:function(t,e,n){var i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var a,o;return s&&"function"==typeof(a=e.constructor)&&a!==n&&i(o=a.prototype)&&o!==n.prototype&&s(t,o),t}},"8ab9":function(t,e,n){},a434:function(t,e,n){"use strict";var i=n("23e7"),s=n("23cb"),a=n("a691"),o=n("50c4"),r=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,m=9007199254740991,w="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var n,i,u,d,f,h,g=r(this),x=o(g.length),b=s(t,x),_=arguments.length;if(0===_?n=i=0:1===_?(n=0,i=x-b):(n=_-2,i=v(p(a(e),0),x-b)),x+n-i>m)throw TypeError(w);for(u=c(g,i),d=0;d<i;d++)f=b+d,f in g&&l(u,d,g[f]);if(u.length=i,n<i){for(d=b;d<x-i;d++)f=d+i,h=d+n,f in g?g[h]=g[f]:delete g[h];for(d=x;d>x-i+n;d--)delete g[d-1]}else if(n>i)for(d=x-i;d>b;d--)f=d+i-1,h=d+n-1,f in g?g[h]=g[f]:delete g[h];for(d=0;d<n;d++)g[d+b]=arguments[d+2];return g.length=x-i+n,u}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var i=n("83ab"),s=n("da84"),a=n("94ca"),o=n("6eeb"),r=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,w="Number",g=s[w],x=g.prototype,b=c(f(x))==w,_=function(t){var e,n,i,s,a,o,r,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+l}for(a=l.slice(2),o=a.length,r=0;r<o;r++)if(c=a.charCodeAt(r),c<48||c>s)return NaN;return parseInt(a,i)}return+l};if(a(w,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var I,y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(b?d((function(){x.valueOf.call(n)})):c(n)!=w)?l(new g(_(e)),n,y):_(e)},k=i?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;k.length>S;S++)r(g,I=k[S])&&!r(y,I)&&v(y,I,p(g,I));y.prototype=x,x.constructor=y,o(s,w,y)}},ae40:function(t,e,n){var i=n("83ab"),s=n("d039"),a=n("5135"),o=Object.defineProperty,r={},c=function(t){throw t};t.exports=function(t,e){if(a(r,t))return r[t];e||(e={});var n=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,d=a(e,1)?e[1]:void 0;return r[t]=!!n&&!s((function(){if(l&&!i)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,d)}))}},b041:function(t,e,n){"use strict";var i=n("00ee"),s=n("f5df");t.exports=i?{}.toString:function(){return"[object "+s(this)+"]"}},b2bb:function(t,e,n){"use strict";var i=n("41ea"),s=n.n(i);s.a},b727:function(t,e,n){var i=n("0366"),s=n("44ad"),a=n("7b0b"),o=n("50c4"),r=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(h,p,v,m){for(var w,g,x=a(h),b=s(x),_=i(p,v,3),I=o(b.length),y=0,k=m||r,S=e?k(h,I):n?k(h,0):void 0;I>y;y++)if((f||y in b)&&(w=b[y],g=_(w,y,x),t))if(e)S[y]=g;else if(g)switch(t){case 3:return!0;case 5:return w;case 6:return y;case 2:c.call(S,w)}else if(u)return!1;return d?-1:l||u?u:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},be55:function(t,e,n){"use strict";var i=n("4faa"),s=n.n(i);s.a},c975:function(t,e,n){"use strict";var i=n("23e7"),s=n("4d64").indexOf,a=n("a640"),o=n("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?r.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},d141:function(t,e,n){"use strict";var i=n("8ab9"),s=n.n(i);s.a},d3b7:function(t,e,n){var i=n("00ee"),s=n("6eeb"),a=n("b041");i||s(Object.prototype,"toString",a,{unsafe:!0})},d81d:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").map,a=n("1dde"),o=n("ae40"),r=a("map"),c=o("map");i({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e168:function(t,e,n){"use strict";var i=n("3789"),s=n.n(i);s.a},e961:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-fullscreen"},[n("el-tooltip",{attrs:{effect:"dark",content:"祝您考试顺利",placement:"bottom"}},[n("div",{staticClass:"test"},[n("div",[n("div",{staticClass:"textcenter fontweight testTop"},[t._v("四川新科在线考试系统")]),n("div",{staticClass:"textcenter",staticStyle:{color:"blue"}},[t._v(t._s(t.testInfo.name))]),n("div",{staticClass:"times"},[n("div",{staticClass:"explain"},[n("div",{staticClass:"grid-content",staticStyle:{color:"green"}},[t._v("考试说明")]),n("div",[t._v("考试次数:"+t._s(t.testInfo.level))]),n("div",[t._v("考试限时:"+t._s(t.testInfo.minutes)+"分钟")]),n("div",[t._v("及格分数:"+t._s(t.testInfo.defaultPassScore))]),n("div",{staticStyle:{color:"green"}},[t._v("考试规则:允许返回修改答案")]),n("div",{staticStyle:{color:"green"}},[t._v("如果考试异常中断，请退出并及时按同样步骤进入，可继续进行考试")])]),n("div",{staticClass:"fixedTime",staticStyle:{position:"fixed",top:"90px",right:"50px","z-index":"99",background:"white",padding:"10px 30px"}},[n("div",[t._v("考试时间还剩")]),n("div",{attrs:{id:"countdown"}},[t._v("00:00")])])])]),n("div",{staticClass:"content"},t._l(t.testInfo.questions,(function(e,i){return n("div",{key:i},[n("div",{staticClass:"title"},[n("div",{staticStyle:{width:"3%"}},[n("div",i<9?[t._v("0"+t._s(i+1)+"、")]:[t._v(t._s(i+1)+"、")])]),n("div",{class:4===e.type?"name":"public",staticStyle:{width:"6%"}},[0===e.type?n("span",[t._v("【单选】")]):t._e(),1===e.type?n("span",[t._v("【多选】")]):t._e(),2===e.type?n("span",[t._v("【填空】")]):t._e(),3===e.type?n("span",[t._v("【判断】")]):t._e(),4===e.type?n("span",[t._v("【名词解释】")]):t._e(),5===e.type?n("span",[t._v("【问答】")]):t._e()]),n("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.content))])]),n("div",{staticClass:"answer"},[0===e.type?n("div",[n("radio",{attrs:{options:t.currentOptions,index:i}})],1):t._e(),1===e.type?n("div",[n("checkbox",{attrs:{options:t.currentOptions,index:i}})],1):t._e(),2===e.type?n("div",[n("fillBlanks",{attrs:{options:t.currentOptions,index:i}})],1):t._e(),3===e.type?n("div",[n("judge",{attrs:{options:t.currentOptions,index:i}})],1):t._e(),4===e.type?n("div",[n("nounExplanation",{attrs:{options:t.currentOptions,index:i}})],1):t._e(),5===e.type?n("div",[n("explain",{attrs:{options:t.currentOptions,index:i}})],1):t._e()])])})),0),n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:t.checkPaper}},[t._v("提交试卷")])],1),n("el-dialog",{attrs:{title:"确认提交？",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",[t.empty.length>0?n("div",[t._v(" 还有题号 "),t._l(t.empty,(function(e,i){return n("span",{key:i},[i===t.empty.length-1?n("span",[t._v(t._s(e))]):n("span",[t._v(t._s(e)+"、")])])})),t._v(" 等"+t._s(t.length)+"道题未做 ")],2):n("div",[t._v("确认提交试卷")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"时间到",visible:t.showDialog,width:"30%","close-on-click-modal":t.close,"show-close":t.close,"close-on-press-escape":t.close},on:{"update:visible":function(e){t.showDialog=e}}},[n("div",[t._v("时间已到，系统已自动提交试卷")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.closePopup}},[t._v("确 定")])],1)])],1)])],1)},s=[],a=(n("4160"),n("c975"),n("d81d"),n("a434"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list.options,(function(e,i){return n("div",{key:i,on:{change:t.changeRadio}},[n("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("el-radio",{attrs:{label:e.order}},[0===i?n("span",[t._v("A、")]):t._e(),1===i?n("span",[t._v("B、")]):t._e(),2===i?n("span",[t._v("C、")]):t._e(),3===i?n("span",[t._v("D、")]):t._e(),t._v(" "+t._s(e.content)+" ")])],1)],1)})),0)}),o=[],r={props:{index:{type:Number},options:{type:Array,default:function(){return[]}}},data:function(){return{radio:"",list:{},answerInfo:[],answerList:[],data:{}}},components:{},methods:{changeRadio:function(){this.data={},"0"==this.radio&&(this.answerInfo=[],this.answerInfo.push("A")),"1"==this.radio&&(this.answerInfo=[],this.answerInfo.push("B")),"2"==this.radio&&(this.answerInfo=[],this.answerInfo.push("C")),"3"==this.radio&&(this.answerInfo=[],this.answerInfo.push("D")),this.$store.state.answerList[this.list.id]=this.answerInfo}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index],this.answerList=this.$store.state.answerList},watch:{},computed:{}},c=r,l=(n("4155"),n("2877")),u=Object(l["a"])(c,a,o,!1,null,"44e1971a",null),d=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.list.options,(function(e,i){return n("div",{key:i,on:{change:t.changeCheckbox}},[n("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[n("el-checkbox",{attrs:{label:e.order}},[0===i?n("span",[t._v("A、")]):t._e(),1===i?n("span",[t._v("B、")]):t._e(),2===i?n("span",[t._v("C、")]):t._e(),3===i?n("span",[t._v("D、")]):t._e(),4===i?n("span",[t._v("E、")]):t._e(),5===i?n("span",[t._v("F、")]):t._e(),t._v(" "+t._s(e.content)+" ")])],1)],1)})),0)},h=[],p={props:{index:{type:Number},options:{type:Array,default:function(){return[]}}},data:function(){return{checkList:[],list:{},radio:"",answerInfo:[]}},components:{},methods:{uniq:function(t){for(var e=[],n=0;n<t.length;n++)-1==e.indexOf(t[n])&&e.push(t[n]);return e},changeCheckbox:function(){var t=this;this.answerInfo=[],this.checkList.map((function(e){"0"==e&&t.answerInfo.push("A"),"1"==e&&t.answerInfo.push("B"),"2"==e&&t.answerInfo.push("C"),"3"==e&&t.answerInfo.push("D"),"4"==e&&t.answerInfo.push("E"),"5"==e&&t.answerInfo.push("F")})),this.answerInfo=this.uniq(this.answerInfo).sort(),this.$store.state.answerList[this.list.id]=this.answerInfo}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index]},watch:{},computed:{}},v=p,m=Object(l["a"])(v,f,h,!1,null,"54d31245",null),w=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.fillList,(function(e,i){return n("div",{key:i},[n("div",[n("el-input",{attrs:{type:"textarea",rows:1,placeholder:"请输入内容"},on:{input:function(e){return t.inputInfo(i)}},model:{value:t.textarea[i],callback:function(e){t.$set(t.textarea,i,e)},expression:"textarea[index]"}})],1)])})),0)},x=[],b={props:{index:{type:Number},options:{type:Array,default:function(){return[]}}},data:function(){return{textarea:[""],answerInfo:[],list:{},fillList:[]}},components:{},methods:{inputInfo:function(t){var e=this;""!==this.textarea[t]&&(this.fillList[t]=this.textarea[t],this.$store.state.answerList[this.list.id]=this.fillList),""===this.textarea[t]&&(this.fillList[t]=this.textarea[t],this.fillList.map((function(t){""!==t?e.$store.state.answerList[e.list.id]=e.fillList:delete e.$store.state.answerList[e.list.id]})))}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index];for(var t=0;t<this.list.fillCount;t++)this.fillList.push("")},watch:{},computed:{}},_=b,I=(n("be55"),Object(l["a"])(_,g,x,!1,null,"a0b9b0c0",null)),y=I.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{on:{change:t.changeRadio}},[n("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[n("div",[n("el-radio",{attrs:{label:0}},[t._v("正确")])],1),n("div",[n("el-radio",{attrs:{label:1}},[t._v("错误")])],1)])],1)])},S=[],E={props:{index:{type:Number},options:{type:Array,default:function(){return[]}}},data:function(){return{radio:"",answerInfo:[],list:{}}},components:{},methods:{changeRadio:function(){"0"==this.radio&&(this.answerInfo=[],this.answerInfo.push("正确")),"1"==this.radio&&(this.answerInfo=[],this.answerInfo.push("错误")),this.$store.state.answerList[this.list.id]=this.answerInfo}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index]},watch:{},computed:{}},C=E,O=(n("d141"),Object(l["a"])(C,k,S,!1,null,"53fe9073",null)),L=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},A=[],F={props:{index:{type:Number},options:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:[],list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo=[],this.answerInfo.push(this.textarea),this.$store.state.answerList[this.list.id]=this.answerInfo),""===this.textarea&&delete this.$store.state.answerList[this.list.id]}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index]},watch:{},computed:{}},N=F,T=(n("2448"),Object(l["a"])(N,$,A,!1,null,"0cf6e88e",null)),R=T.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},q=[],V={props:{index:{type:Number},options:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:[],list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo=[],this.answerInfo.push(this.textarea),this.$store.state.answerList[this.list.id]=this.answerInfo),""===this.textarea&&delete this.$store.state.answerList[this.list.id]}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index]},watch:{},computed:{}},j=V,M=(n("b2bb"),Object(l["a"])(j,D,q,!1,null,"4c3f9a61",null)),B=M.exports,P={data:function(){return{currentRadio:[],id:"",currentOptions:{},currentIndex:0,testInfo:{},close:!1,radio:0,fullscreen:!1,dialogVisible:!1,showDialog:!1,allAnswer:{},answerId:[],empty:[],ksExamId:"",length:0,llqName:"",timecount:{},numberes:!1}},components:{radio:d,checkbox:w,fillBlanks:y,judge:L,nounExplanation:R,explain:B},methods:{handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen},checkPaper:function(){var t=this;for(var e in this.empty=[],this.answerId=[],this.dialogVisible=!0,this.allAnswer=this.$store.state.answerList,this.allAnswer)e=Number(e),this.answerId.push(e);this.currentOptions.map((function(e,n){-1===t.answerId.indexOf(e.id)&&(n+=1,t.empty.push(n))})),this.length=this.empty.length,this.empty.length>5&&this.empty.splice(5)},timeFormat:function(t){var e="",n=new Date(t),i=n.getFullYear(),s=n.getMonth()+1,a=n.getDate(),o=n.getHours(),r=n.getMinutes(),c=n.getSeconds();return e+=i+"-",s<10&&(e+="0"),e+=s+"-",a<10&&(e+="0"),e+=a+" ",o<10&&(e+="0"),e+=o+":",r<10&&(e+="0"),e+=r+":",c<10&&(e+="0"),e+=c,e},closePopup:function(){this.showDialog=!1,this.$store.state.answerList={},this.$router.push({name:"onlineTest",path:"/onlineTest"})},submit:function(){var t=this;this.handleFullScreen();var e=-8,n=(new Date).getTimezoneOffset(),i=(new Date).getTime()+60*n*1e3-60*e*60*1e3,s=this.timeFormat(new Date(i));this.dialogVisible=!1;var a=JSON.parse(localStorage.getItem("userInfo")),o=localStorage.getItem("Ip");o=o.toString(),this.getBrowser();var r={answers:this.allAnswer,beginTime:s,device:this.llqName,ip:o,ksExamId:this.ksExamId,peopleId:a.userId};console.log(r),this.$onlineTest.submitPaper(r).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.$store.state.answerList={},t.$router.push({name:"onlineTest",path:"/onlineTest"})):t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){}))},getBrowser:function(){var t=this,e=["edge","firefox","chrome","safari","opera "],n=navigator.userAgent.toLocaleLowerCase(),i=[];if(e.forEach((function(e){if(n.indexOf(e)>0){var s="".concat(e)+"\\/([\\d.]+)";i.push(e),i.push(n.match(s)[1]),t.llqName=i[0]}})),i.indexOf("chrome")>-1&&i.indexOf("safari")>-1){if(4===i.length){var s=[];return s.push("chrome"),s.push(i[i.indexOf("chrome")+1]),s}return i.splice(i.indexOf("chrome"),2),i.splice(i.indexOf("safari"),2),i}return i},getTestMsg:function(){var t=this;this.$onlineTest.onlineTest(this.id).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.testInfo=e.data.data[0],t.currentOptions=e.data.data[0].questions,t.timeDown())})).catch((function(t){}))},timeDown:function(){var t=this,e=document.getElementById("countdown"),n=60*t.testInfo.minutes,i=setInterval((function(){if(n-=1,n>=0){var s=parseInt(n/60);if(s>60){var a=parseInt(n/60/60);a<10&&(a="0"+a),s=parseInt((n-60*a*60)/60),s<10&&(s="0"+s)}s<10&&(s="0"+s);var o=parseInt(n%60);o<10&&(o="0"+o),e.innerHTML=a?a+":"+s+":"+o:s+":"+o}else{clearInterval(i),t.showDialog=!0,t.handleFullScreen();var r=-8,c=(new Date).getTimezoneOffset(),l=(new Date).getTime()+60*c*1e3-60*r*60*1e3,u=t.timeFormat(new Date(l));t.dialogVisible=!1;var d=JSON.parse(localStorage.getItem("userInfo")),f=localStorage.getItem("Ip");f=f.toString(),t.getBrowser();var h={answers:t.allAnswer,beginTime:u,device:t.llqName,ip:f,ksExamId:t.ksExamId,peopleId:d.userId};console.log(h),t.$onlineTest.submitPaper(h).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?t.$store.state.answerList={}:t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){}))}}),1e3);t.timecount=i,t.numberes&&t.submit()}},destroyed:function(){clearInterval(this.timecount)},mounted:function(){this.$store.state.answerList={},this.handleFullScreen(),this.id=this.$route.query.paperId,this.ksExamId=this.$route.query.id,this.getTestMsg(),document.onkeydown=function(){27===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),122===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),18===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),9===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1)}},watch:{},computed:{}},z=P,J=(n("e168"),Object(l["a"])(z,i,s,!1,null,"84bfc6c4",null));e["default"]=J.exports}}]);