(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["testIng","login"],{"159b":function(t,e,s){var i=s("da84"),n=s("fdbc"),a=s("17c2"),o=s("9112");for(var r in n){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(h){l.forEach=a}}},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,n=s("a640"),a=s("ae40"),o=n("forEach"),r=a("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"18c1":function(t,e,s){"use strict";var i=s("3d68"),n=s.n(i);n.a},"25f0":function(t,e,s){"use strict";var i=s("6eeb"),n=s("825a"),a=s("d039"),o=s("ad6d"),r="toString",c=RegExp.prototype,l=c[r],h=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=r;(h||d)&&i(RegExp.prototype,r,(function(){var t=n(this),e=String(t.source),s=t.flags,i=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?o.call(t):s);return"/"+e+"/"+i}),{unsafe:!0})},3132:function(t,e,s){},"33cb":function(t,e,s){"use strict";var i=s("c16c"),n=s.n(i);n.a},"3d68":function(t,e,s){},4160:function(t,e,s){"use strict";var i=s("23e7"),n=s("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4fd6":function(t,e,s){"use strict";var i=s("6490"),n=s.n(i);n.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),n=s("5899"),a="["+n+"]",o=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),c=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(o,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5a60":function(t,e,s){"use strict";var i=s("72b8"),n=s.n(i);n.a},6125:function(t,e,s){"use strict";var i=s("7ecd"),n=s.n(i);n.a},6490:function(t,e,s){},7156:function(t,e,s){var i=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var a,o;return n&&"function"==typeof(a=e.constructor)&&a!==s&&i(o=a.prototype)&&o!==s.prototype&&n(t,o),t}},"72b8":function(t,e,s){},"7ecd":function(t,e,s){},"81d5":function(t,e,s){"use strict";var i=s("7b0b"),n=s("23cb"),a=s("50c4");t.exports=function(t){var e=i(this),s=a(e.length),o=arguments.length,r=n(o>1?arguments[1]:void 0,s),c=o>2?arguments[2]:void 0,l=void 0===c?s:n(c,s);while(l>r)e[r++]=t;return e}},"9aec":function(t,e,s){},a640:function(t,e,s){"use strict";var i=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&i((function(){s.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,s){"use strict";var i=s("83ab"),n=s("da84"),a=s("94ca"),o=s("6eeb"),r=s("5135"),c=s("c6b6"),l=s("7156"),h=s("c04e"),d=s("d039"),u=s("7c73"),f=s("241c").f,p=s("06cf").f,m=s("9bf2").f,v=s("58a8").trim,g="Number",w=n[g],k=w.prototype,x=c(u(k))==g,L=function(t){var e,s,i,n,a,o,r,c,l=h(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(a=l.slice(2),o=a.length,r=0;r<o;r++)if(c=a.charCodeAt(r),c<48||c>n)return NaN;return parseInt(a,i)}return+l};if(a(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var y,b=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof b&&(x?d((function(){k.valueOf.call(s)})):c(s)!=g)?l(new w(L(e)),s,b):L(e)},I=i?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)r(w,y=I[_])&&!r(b,y)&&m(b,y,p(w,y));b.prototype=k,k.constructor=b,o(n,g,b)}},b727:function(t,e,s){var i=s("0366"),n=s("44ad"),a=s("7b0b"),o=s("50c4"),r=s("65f0"),c=[].push,l=function(t){var e=1==t,s=2==t,l=3==t,h=4==t,d=6==t,u=5==t||d;return function(f,p,m,v){for(var g,w,k=a(f),x=n(k),L=i(p,m,3),y=o(x.length),b=0,I=v||r,_=e?I(f,y):s?I(f,0):void 0;y>b;b++)if((u||b in x)&&(g=x[b],w=L(g,b,k),t))if(e)_[b]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return b;case 2:c.call(_,g)}else if(h)return!1;return d?-1:l||h?h:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c16c:function(t,e,s){},c975:function(t,e,s){"use strict";var i=s("23e7"),n=s("4d64").indexOf,a=s("a640"),o=s("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),h=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!h},{indexOf:function(t){return c?r.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})},cabe:function(t,e,s){t.exports=s.p+"assets/img/light-bulb.png"},cb29:function(t,e,s){var i=s("23e7"),n=s("81d5"),a=s("44d2");i({target:"Array",proto:!0},{fill:n}),a("fill")},d81d:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").map,a=s("1dde"),o=s("ae40"),r=a("map"),c=o("map");i({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},dc3f:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{attrs:{id:"bgd"}},[s("canvas",{attrs:{id:"myCanvas",width:t.width,height:t.height}})]),s("div",{attrs:{id:"loginBox"}},[s("h4",[t._v("新科培训管理系统")]),s("el-form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.loginRules,"label-width":"0px"}},[s("el-form-item",{staticStyle:{"margin-top":"20px"},attrs:{label:"",prop:"userName"}},[s("el-row",[s("el-col",{attrs:{span:2}},[s("span",{staticClass:"iconfont"},[s("i",{staticClass:"el-icon-user-solid"})])]),s("el-col",{attrs:{span:22}},[s("el-input",{staticClass:"inps",attrs:{placeholder:"用户名"},on:{input:t.inputUsername},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1)],1),s("el-form-item",{attrs:{label:"",prop:"passWord"}},[s("el-row",[s("el-col",{attrs:{span:2}},[s("span",{staticClass:"iconfont"},[s("i",{staticClass:"el-icon-s-goods"})])]),s("el-col",{attrs:{span:22}},[s("el-input",{staticClass:"inps",attrs:{type:"password",placeholder:"密码"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.passwords,callback:function(e){t.passwords=e},expression:"passwords"}})],1)],1)],1),s("el-form-item",{attrs:{label:"",prop:"check"}},[s("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("记住登录")])],1),s("el-form-item",{staticStyle:{"margin-top":"20px"}},[s("el-button",{staticClass:"submitBtn",attrs:{type:"primary",round:""},on:{click:t.submitForm}},[t._v("登录")])],1)],1)],1)])},n=[];s("cb29"),s("4160"),s("159b");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,s){return e&&o(t.prototype,e),s&&o(t,s),t}var c={data:function(){return{answerList:{},imgLink:"../../assets/icon/bgimg.png",username:"",passwords:"",checked:!0,canvas:null,context:null,stars:[],shadowColorList:["#39f","#ec5707","#b031d4","#22e6c7","#92d819","#14d7f1","#e23c66"],directionList:["leftTop","leftBottom","rightTop","rightBottom"],speed:5,last_star_created_time:new Date,Ball:function(){function t(e){a(this,t),this.x=0,this.y=0,this.radius=e,this.color="",this.shadowColor="",this.direction=""}return r(t,[{key:"draw",value:function(t){t.save(),t.translate(this.x,this.y),t.lineWidth=this.lineWidth;var e=t.createLinearGradient(0,0,0,8);e.addColorStop(0,this.color),e.addColorStop(1,this.shadowColor),t.fillStyle=e,t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI,!0),t.closePath(),t.shadowColor=this.shadowColor,t.shadowOffsetX=0,t.shadowOffsetY=0,t.shadowBlur=10,t.fill(),t.restore()}}]),t}(),width:window.innerWidth,height:window.innerHeight,loginForm:{userName:"",passWord:""},loginRules:{username:"",passWord:""}}},components:{},methods:{inputUsername:function(t){t!==this.loginRules.username&&(this.passwords="",localStorage.removeItem("userList-afsdfsdafd"))},submitForm:function(){var t=this,e={username:this.username,password:this.passwords,"remember-me":this.checked};this.$api.login(e).then((function(s){0===s.data.code?(console.log(s),localStorage.setItem("token",s.headers["x-auth-token"]),t.$message({message:s.data.msg,type:"success"}),t.$grade.getExamRunningData().then((function(i){t.$api.sendInfo(),null===i.data.data[0]||""===i.data.data[0].data?(localStorage.setItem("userInfo",JSON.stringify(s.data.data[0])),!0===t.checked?localStorage.setItem("userList-afsdfsdafd",JSON.stringify(e)):localStorage.setItem("userList-afsdfsdafd",{}),t.$router.push({name:"index",path:"/index"})):(localStorage.setItem("userInfo",JSON.stringify(s.data.data[0])),!0===t.checked?localStorage.setItem("userList-afsdfsdafd",JSON.stringify(e)):localStorage.setItem("userList-afsdfsdafd",{}),t.$router.push({name:"testIng",path:"/testIng"}))})).catch((function(t){console.log(t)}))):t.$message({message:s.data.msg,type:"warning"})})).catch((function(t){console.log(t)}))},drawFrame:function(){requestAnimationFrame(this.drawFrame);this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.createStar(!1),this.stars.forEach(this.moveStar)},createStar:function(t){var e=new Date;if(t)for(var s=0;s<50;s++){var i=3*Math.random()+2,n=new this.Ball(i);n.x=Math.random()*this.canvas.width+1,n.y=Math.random()*this.canvas.height+1,n.color="#ffffff",n.shadowColor=this.shadowColorList[Math.floor(Math.random()*this.shadowColorList.length)],n.direction=this.directionList[Math.floor(Math.random()*this.directionList.length)],this.stars.push(n)}else if(!t&&e-this.last_star_created_time>3e3){for(s=0;s<30;s++)this.stars[s].shadowColor=this.shadowColorList[Math.floor(Math.random()*this.shadowColorList.length)];this.last_star_created_time=e}},moveStar:function(t,e){t.y-this.canvas.height>0?1===Math.floor(2*Math.random())?t.direction="leftTop":t.direction="rightTop":t.y<2?1===Math.floor(2*Math.random())?t.direction="rightBottom":t.direction="leftBottom":t.x<2?1===Math.floor(2*Math.random())?t.direction="rightTop":t.direction="rightBottom":t.x-this.canvas.width>0&&(1===Math.floor(2*Math.random())?t.direction="leftBottom":t.direction="leftTop"),"leftTop"===t.direction?(t.y-=t.radius/this.speed,t.x-=t.radius/this.speed):"rightBottom"===t.direction?(t.y+=t.radius/this.speed,t.x+=t.radius/this.speed):"leftBottom"===t.direction?(t.y+=t.radius/this.speed,t.x-=t.radius/this.speed):"rightTop"===t.direction&&(t.y-=t.radius/this.speed,t.x+=t.radius/this.speed),t.draw(this.context)}},mounted:function(){this.canvas=document.getElementById("myCanvas"),this.context=this.canvas.getContext("2d"),this.createStar(!0),this.drawFrame();var t=JSON.parse(localStorage.getItem("userList-afsdfsdafd"));t&&(this.username=t.username,this.passwords=t.password,this.checked=!0,this.loginRules.username=t.username)},watch:{},computed:{}},l=c,h=(s("18c1"),s("2877")),d=Object(h["a"])(l,i,n,!1,null,"e4c889d8",null);e["default"]=d.exports},ddf8:function(t,e,s){"use strict";var i=s("9aec"),n=s.n(i);n.a},e961:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"testIng"},[i("el-container",[i("el-header",[i("div",{staticClass:"textcenter fontweight testTop"},[t._v(t._s(t.testInfo.name))])]),i("el-container",[i("el-aside",{attrs:{width:"250px"}},[i("div",[i("div",{staticClass:"times"},[i("div",{staticClass:"explain"},[i("div",{staticClass:"grid-content",staticStyle:{color:"green"}},[t._v("考试说明")]),i("div",[t._v("考试次数:"+t._s(t.testInfo.level))]),i("div",[t._v("考试限时:"+t._s(t.testInfo.minutes)+"分钟")]),i("div",[t._v("及格分数:"+t._s(t.testInfo.defaultPassScore))])]),i("div",{staticClass:"fixedTime"},[i("div",[t._v("考试时间还剩")]),i("div",{attrs:{id:"countdown"}},[t._v("00:00")]),i("div",{staticClass:"allchecked"},t._l(t.checkList,(function(e,s){return i("div",{key:s,staticClass:"choosedcheck",attrs:{id:"tchar_nav_"+s},on:{click:function(e){return t.choosecheck(s)}}},[!1===e.check?i("div",{staticClass:"checkingfalse"},[t._v(t._s(s+1))]):t._e(),!0===e.check?i("div",{staticClass:"checkingtrue"},[t._v(t._s(s+1))]):t._e()])})),0)])])])]),i("el-main",[i("div",{staticClass:"btn-fullscreen"},[i("el-tooltip",{attrs:{effect:"dark",content:"祝您考试顺利",placement:"bottom"}},[i("div",{staticClass:"test"},[i("div",{staticClass:"content"},[t._l(t.testInfo.questions,(function(e,s){return i("div",{key:s,staticClass:"scrollBody",attrs:{id:"tchar_nav_"+s}},[i("div",{staticClass:"scrollview",attrs:{id:"tchar_nav_"+s}}),i("div",{staticClass:"title"},[i("div",{staticStyle:{width:"3%"}},[i("div",s<9?[t._v("0"+t._s(s+1)+"、")]:[t._v(t._s(s+1)+"、")])]),i("div",{class:4===e.type?"name":"public",staticStyle:{width:"70px"}},[0===e.type?i("span",[t._v("【单选】")]):t._e(),1===e.type?i("span",[t._v("【多选】")]):t._e(),2===e.type?i("span",[t._v("【填空】")]):t._e(),3===e.type?i("span",[t._v("【判断】")]):t._e(),4===e.type?i("span",[t._v("【名词解释】")]):t._e(),5===e.type?i("span",[t._v("【问答】")]):t._e()]),i("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.content))])]),i("div",{staticClass:"answer"},[0===e.type?i("div",[i("radio",{attrs:{options:t.currentOptions,index:s,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),1===e.type?i("div",[i("checkbox",{attrs:{options:t.currentOptions,index:s,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),2===e.type?i("div",[i("fillBlanks",{attrs:{options:t.currentOptions,index:s,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),3===e.type?i("div",[i("judge",{attrs:{options:t.currentOptions,index:s,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),4===e.type?i("div",[i("nounExplanation",{attrs:{options:t.currentOptions,index:s,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),5===e.type?i("div",[i("explain",{attrs:{options:t.currentOptions,index:s,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e()])])})),i("div",{staticClass:"btn"},[i("el-button",{attrs:{type:"primary"},on:{click:t.checkPaper}},[t._v("提交试卷")])],1)],2),i("el-dialog",{attrs:{title:"确认提交？",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("div",[t.empty.length>0?i("div",[t._v(" 还有题号 "),t._l(t.empty,(function(e,s){return i("span",{key:s},[s===t.empty.length-1?i("span",[t._v(t._s(e))]):i("span",[t._v(t._s(e)+"、")])])})),t._v(" 等"+t._s(t.length)+"道题未做 ")],2):i("div",[t._v("确认提交试卷")])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)]),i("el-dialog",{attrs:{title:"时间到",visible:t.showDialog,width:"30%","close-on-click-modal":t.close,"show-close":t.close,"close-on-press-escape":t.close},on:{"update:visible":function(e){t.showDialog=e}}},[i("div",{staticClass:"tishiInfo"},[i("div",[i("img",{staticClass:"lightImg",attrs:{src:s("cabe"),alt:""}})]),i("div",[t._v("时间已到，系统已自动提交试卷")])]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.closePopup}},[t._v("确 定")])],1)])],1)])],1)])],1)],1)],1)},n=[],a=(s("4160"),s("c975"),s("d81d"),s("a434"),s("a9e3"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.list.options,(function(e,i){return s("div",{key:i,on:{change:t.changeRadio}},[s("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[0===i?s("span",[s("el-radio",{attrs:{label:0}},[t._v("A、"+t._s(e.content))])],1):t._e(),1===i?s("span",[s("el-radio",{attrs:{label:1}},[t._v("B、"+t._s(e.content))])],1):t._e(),2===i?s("span",[s("el-radio",{attrs:{label:2}},[t._v("C、"+t._s(e.content))])],1):t._e(),3===i?s("span",[s("el-radio",{attrs:{label:3}},[t._v("D、"+t._s(e.content))])],1):t._e()])],1)})),0)}),o=[],r={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{radio:10,list:{},answerInfo:[],answerList:[],data:{}}},components:{},methods:{changeRadio:function(){this.data={},"0"==this.radio&&(this.answerInfo=[],this.answerInfo.push("A")),"1"==this.radio&&(this.answerInfo=[],this.answerInfo.push("B")),"2"==this.radio&&(this.answerInfo=[],this.answerInfo.push("C")),"3"==this.radio&&(this.answerInfo=[],this.answerInfo.push("D")),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)}},mounted:function(){if(this.list=this.options[this.index],this.answerList=this.$store.state.answerList,this.answer[this.options[this.index].id]){var t=this.answer[this.options[this.index].id][0];"A"===t&&(this.radio=0),"B"===t&&(this.radio=1),"C"===t&&(this.radio=2),"D"===t&&(this.radio=3)}this.answerList[this.options.id]&&(this.radio=this.answerList[this.options.id])},watch:{},computed:{}},c=r,l=(s("33cb"),s("2877")),h=Object(l["a"])(c,a,o,!1,null,"00474cef",null),d=h.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.list.options,(function(e,i){return s("div",{key:i,on:{change:t.changeCheckbox}},[s("el-checkbox-group",{model:{value:t.checkBoxList,callback:function(e){t.checkBoxList=e},expression:"checkBoxList"}},[0===i?s("span",[s("el-checkbox",{attrs:{label:"0"}},[t._v("A、"+t._s(e.content))])],1):t._e(),1===i?s("span",[s("el-checkbox",{attrs:{label:"1"}},[t._v("B、"+t._s(e.content))])],1):t._e(),2===i?s("span",[s("el-checkbox",{attrs:{label:"2"}},[t._v("C、"+t._s(e.content))])],1):t._e(),3===i?s("span",[s("el-checkbox",{attrs:{label:"3"}},[t._v("D、"+t._s(e.content))])],1):t._e(),4===i?s("span",[s("el-checkbox",{attrs:{label:"4"}},[t._v("E、"+t._s(e.content))])],1):t._e(),5===i?s("span",[s("el-checkbox",{attrs:{label:"5"}},[t._v("F、"+t._s(e.content))])],1):t._e()])],1)})),0)},f=[],p={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{checkBoxList:[],list:{},radio:"",answerInfo:[]}},components:{},methods:{uniq:function(t){for(var e=[],s=0;s<t.length;s++)-1==e.indexOf(t[s])&&e.push(t[s]);return e},changeCheckbox:function(){var t=this;this.answerInfo=[],this.checkBoxList.map((function(e){"0"==e&&t.answerInfo.push("A"),"1"==e&&t.answerInfo.push("B"),"2"==e&&t.answerInfo.push("C"),"3"==e&&t.answerInfo.push("D"),"4"==e&&t.answerInfo.push("E"),"5"==e&&t.answerInfo.push("F")})),this.answerInfo=this.uniq(this.answerInfo).sort(),this.$store.state.answerList[this.list.id]=this.answerInfo,this.answerInfo.length>0?(this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)):(this.checkList[this.index].check=!1,this.$emit("checkList",this.checkList))}},mounted:function(){var t=this;if(this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]){var e=this.answer[this.options[this.index].id];e.map((function(e){"A"===e&&t.checkBoxList.push("0"),"B"===e&&t.checkBoxList.push("1"),"C"===e&&t.checkBoxList.push("2"),"D"===e&&t.checkBoxList.push("3"),"E"===e&&t.checkBoxList.push("4"),"F"===e&&t.checkBoxList.push("5")}))}},watch:{},computed:{}},m=p,v=Object(l["a"])(m,u,f,!1,null,"8ab08916",null),g=v.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.fillList,(function(e,i){return s("div",{key:i},[s("div",[s("el-input",{attrs:{type:"textarea",rows:1,placeholder:"请输入内容"},on:{input:function(e){return t.inputInfo(i)}},model:{value:t.textarea[i],callback:function(e){t.$set(t.textarea,i,e)},expression:"textarea[index]"}})],1)])})),0)},k=[],x={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{textarea:[""],answerInfo:[],list:{},fillList:[]}},components:{},methods:{inputInfo:function(t){var e=this;""!==this.textarea[t]&&(this.fillList[t]=this.textarea[t],this.$store.state.answerList[this.list.id]=this.fillList,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)),""===this.textarea[t]&&(this.fillList[t]=this.textarea[t],this.fillList.map((function(t){""!==t?(e.$store.state.answerList[e.list.id]=e.fillList,e.checkList[e.index].check=!0,e.$emit("checkList",e.checkList)):(delete e.$store.state.answerList[e.list.id],e.checkList[e.index].check=!1,e.$emit("checkList",e.checkList))})))}},mounted:function(){if(this.options[this.index].checked=!0,this.list=this.options[this.index],this.list.fillCount>0)for(var t=0;t<this.list.fillCount;t++)this.fillList.push("");else 0===this.list.fillCount&&this.fillList.push("");this.answer[this.options[this.index].id]&&(this.textarea=this.answer[this.options[this.index].id])},watch:{},computed:{}},L=x,y=(s("4fd6"),Object(l["a"])(L,w,k,!1,null,"35b7a947",null)),b=y.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{on:{change:t.changeRadio}},[s("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[s("div",[s("el-radio",{attrs:{label:0}},[t._v("正确")])],1),s("div",[s("el-radio",{attrs:{label:1}},[t._v("错误")])],1)])],1)])},_=[],C={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{radio:"",answerInfo:[],list:{}}},components:{},methods:{changeRadio:function(){"0"==this.radio&&(this.answerInfo=[],this.answerInfo.push("正确")),"1"==this.radio&&(this.answerInfo=[],this.answerInfo.push("错误")),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)}},mounted:function(){if(this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]){var t=this.answer[this.options[this.index].id][0];"正确"===t&&(this.radio=0),"错误"===t&&(this.radio=1)}},watch:{},computed:{}},S=C,T=(s("ddf8"),Object(l["a"])(S,I,_,!1,null,"271a9808",null)),E=T.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},O=[],M={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:[],list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo=[],this.answerInfo.push(this.textarea),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)),""===this.textarea&&(delete this.$store.state.answerList[this.list.id],this.checkList[this.index].check=!1,this.$emit("checkList",this.checkList))}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]&&(this.textarea=this.answer[this.options[this.index].id])},watch:{},computed:{}},N=M,A=(s("f9a5"),Object(l["a"])(N,$,O,!1,null,"7c4d32c6",null)),F=A.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},D=[],R={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:[],list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo=[],this.answerInfo.push(this.textarea),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)),""===this.textarea&&(delete this.$store.state.answerList[this.list.id],this.checkList[this.index].check=!1,this.$emit("checkList",this.checkList))}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]&&(this.textarea=this.answer[this.options[this.index].id])},watch:{},computed:{}},V=R,q=(s("6125"),Object(l["a"])(V,B,D,!1,null,"149572f5",null)),P=q.exports,j=(s("dc3f"),{data:function(){return{loading:!0,currentRadio:[],id:"",time:0,currentOptions:{},currentIndex:0,testInfo:{},close:!1,radio:0,fullscreen:!1,dialogVisible:!1,showDialog:!1,allAnswer:{},answerId:[],answer:{},empty:[],checkList:[],ksExamId:"",length:0,llqName:"",timecount:{},numberes:!1,data:{},saveMsg:{},beginTestTime:"",noeTime:""}},components:{radio:d,checkbox:g,fillBlanks:b,judge:E,nounExplanation:F,explain:P},methods:{handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen},checkPaper:function(){var t=this;for(var e in this.empty=[],this.answerId=[],this.dialogVisible=!0,this.allAnswer=this.$store.state.answerList,this.allAnswer)e=Number(e),this.answerId.push(e);this.currentOptions.map((function(e,s){-1===t.answerId.indexOf(e.id)&&(s+=1,t.empty.push(s))})),this.length=this.empty.length,this.empty.length>5&&this.empty.splice(5)},getcheckList:function(t){this.checkList=t},choosecheck:function(t){document.getElementById("tchar_nav_"+t).scrollIntoView()},timeFormat:function(t){var e="",s=new Date(t),i=s.getFullYear(),n=s.getMonth()+1,a=s.getDate(),o=s.getHours(),r=s.getMinutes(),c=s.getSeconds();return e+=i+"-",n<10&&(e+="0"),e+=n+"-",a<10&&(e+="0"),e+=a+" ",o<10&&(e+="0"),e+=o+":",r<10&&(e+="0"),e+=r+":",c<10&&(e+="0"),e+=c,e},closePopup:function(){this.showDialog=!1,this.$store.state.answerList={},this.$router.push({name:"onlineTest",path:"/onlineTest"})},submit:function(){var t=this;this.handleFullScreen(),this.dialogVisible=!1;var e=JSON.parse(localStorage.getItem("userInfo")),s=localStorage.getItem("Ip");s=s.toString(),this.getBrowser();var i={answers:this.allAnswer,beginTime:this.beginTestTime,device:this.llqName,ip:s,ksExamId:this.ksExamId,peopleId:e.userId},n=this.$loading({lock:!0,text:"试卷提交中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$onlineTest.submitPaper(i).then((function(e){n.close(),1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.$message({message:"交卷成功",type:"success"}),clearInterval(t.saveMsg),t.$store.state.answerList={},t.data="",t.saveTestInfo(t.data),t.$router.push({name:"onlineTest",path:"/onlineTest"})):(clearInterval(t.saveMsg),t.data="",t.saveTestInfo(t.data),t.$message({message:e.data.msg,type:"warning"}))})).catch((function(t){n.close()}))},getBrowser:function(){var t=this,e=["edge","firefox","chrome","safari","opera "],s=navigator.userAgent.toLocaleLowerCase(),i=[];if(e.forEach((function(e){if(s.indexOf(e)>0){var n="".concat(e)+"\\/([\\d.]+)";i.push(e),i.push(s.match(n)[1]),t.llqName=i[0]}})),i.indexOf("chrome")>-1&&i.indexOf("safari")>-1){if(4===i.length){var n=[];return n.push("chrome"),n.push(i[i.indexOf("chrome")+1]),n}return i.splice(i.indexOf("chrome"),2),i.splice(i.indexOf("safari"),2),i}return i},getTestMsg:function(){var t=this;this.$onlineTest.onlineTest(this.id).then((function(e){if(t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code){t.testInfo=e.data.data[0],0===t.checkList.length&&(t.checkList=[],t.testInfo.questions.map((function(e,s){var i={value:s,check:!1};t.checkList.push(i)})));var s=Date.parse(new Date);t.time=t.beginTestTime+6e4*e.data.data[0].minutes-s,t.currentOptions=e.data.data[0].questions,t.timeDown()}else t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},timeDown:function(){var t=this,e=document.getElementById("countdown"),s=t.time/1e3,i=setInterval((function(){var n=this;if(s-=1,s>=0){t.time=s;var a=parseInt(s/60);if(a>60){var o=parseInt(s/60/60);o<10&&(o="0"+o),a=parseInt((s-60*o*60)/60),a<10&&(a="0"+a)}else a<10&&(a="0"+a);var r=parseInt(s%60);r<10&&(r="0"+r),e.innerHTML=o?o+":"+a+":"+r:a+":"+r}else{clearInterval(i),t.showDialog=!0,t.handleFullScreen();var c=-8,l=(new Date).getTimezoneOffset(),h=(new Date).getTime()+60*l*1e3-60*c*60*1e3,d=t.timeFormat(new Date(h));t.dialogVisible=!1;var u=JSON.parse(localStorage.getItem("userInfo")),f=localStorage.getItem("Ip");f=f.toString(),t.getBrowser();var p={answers:t.allAnswer,beginTime:d,device:t.llqName,ip:f,ksExamId:t.ksExamId,peopleId:u.userId};console.log(p),t.$onlineTest.submitPaper(p).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.$store.state.answerList={},n.data="",n.saveTestInfo(n.data)):t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){n.data="",n.saveTestInfo(n.data)}))}}),1e3);t.timecount=i,t.numberes&&t.submit()},saveTestInfo:function(t){var e=this;this.$grade.saveExamRunningData(t).then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"})})).catch((function(t){e.$message({message:t.data.msg,type:"warning"})}))},savePaper:function(){this.allAnswer=this.$store.state.answerList,this.data={paperInfo:{id:this.id,ksExamId:this.ksExamId},answerList:this.allAnswer,checkList:this.checkList},console.log(this.data),this.saveTestInfo(JSON.stringify(this.data))},saveMsgMinute:function(){var t=this;this.saveMsg=setInterval((function(){t.savePaper()}),6e4)}},destroyed:function(){clearInterval(this.timecount),clearInterval(this.saveMsg)},mounted:function(){var t=this;this.$store.state.answerList={},this.handleFullScreen(),this.$grade.getExamRunningData().then((function(e){if(1e3===e.data.code&&(t.$message({message:e.data.msg,type:"warning"}),t.$router.push({name:"login",path:"/login"})),0===e.data.code)if(null===e.data.data[0]||""===e.data.data[0].data)t.id=t.$route.query.paperId,t.ksExamId=t.$route.query.id,t.getTestMsg(),t.data={paperInfo:{id:t.id,ksExamId:t.ksExamId},beginTestTime:Date.parse(new Date),answerList:{},checkList:[]},t.beginTestTime=t.data.beginTestTime,t.saveTestInfo(JSON.stringify(t.data));else{var s=e.data.data[0].data,i=JSON.parse(s);t.id=i.paperInfo.id,t.ksExamId=i.paperInfo.ksExamId,t.beginTestTime=i.beginTestTime,t.answer=i.answerList,t.$store.state.answerList=t.answer,t.checkList=[],t.checkList=i.checkList,t.getTestMsg()}else t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){console.log(t)})),document.onkeydown=function(){27===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),122===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),18===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),9===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1)},this.saveMsgMinute()},watch:{time:function(t,e){}},computed:{}}),J=j,G=(s("5a60"),Object(l["a"])(J,i,n,!1,null,"dc8ac472",null));e["default"]=G.exports},f9a5:function(t,e,s){"use strict";var i=s("3132"),n=s.n(i);n.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);