(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["testIng"],{"057f":function(t,e,i){var n=i("fc6a"),s=i("241c").f,a={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==a.call(t)?o(t):s(n(t))}},1624:function(t,e,i){"use strict";var n=i("f782"),s=i.n(n);s.a},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,s=i("a640"),a=i("ae40"),r=s("forEach"),o=a("forEach");t.exports=r&&o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"34a3":function(t,e,i){},"3ca3":function(t,e,i){"use strict";var n=i("6547").charAt,s=i("69f3"),a=i("7dd0"),r="String Iterator",o=s.set,c=s.getterFor(r);a(String,"String",(function(t){o(this,{type:r,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,s=e.index;return s>=i.length?{value:void 0,done:!0}:(t=n(i,s),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,i){"use strict";var n=i("23e7"),s=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},5319:function(t,e,i){"use strict";var n=i("d784"),s=i("825a"),a=i("7b0b"),r=i("50c4"),o=i("a691"),c=i("1d80"),l=i("8aa5"),u=i("14c3"),h=Math.max,d=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,i,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,w=n.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(i,n){var s=c(this),a=void 0==i?void 0:i[t];return void 0!==a?a.call(i,s,n):e.call(String(s),i,n)},function(t,n){if(!g&&w||"string"===typeof n&&-1===n.indexOf(b)){var a=i(e,t,this,n);if(a.done)return a.value}var c=s(t),f=String(this),p="function"===typeof n;p||(n=String(n));var m=c.global;if(m){var k=c.unicode;c.lastIndex=0}var x=[];while(1){var L=u(c,f);if(null===L)break;if(x.push(L),!m)break;var I=String(L[0]);""===I&&(c.lastIndex=l(f,r(c.lastIndex),k))}for(var _="",T=0,S=0;S<x.length;S++){L=x[S];for(var $=String(L[0]),E=h(d(o(L.index),f.length),0),C=[],O=1;O<L.length;O++)C.push(v(L[O]));var A=L.groups;if(p){var N=[$].concat(C,E,f);void 0!==A&&N.push(A);var D=String(n.apply(void 0,N))}else D=y($,f,E,C,A,n);E>=T&&(_+=f.slice(T,E)+D,T=E+$.length)}return _+f.slice(T)}];function y(t,i,n,s,r,o){var c=n+t.length,l=s.length,u=m;return void 0!==r&&(r=a(r),u=p),e.call(o,u,(function(e,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,n);case"'":return i.slice(c);case"<":o=r[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var h=f(u/10);return 0===h?e:h<=l?void 0===s[h-1]?a.charAt(1):s[h-1]+a.charAt(1):e}o=s[u-1]}return void 0===o?"":o}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),s=i("5899"),a="["+s+"]",r=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),c=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(o,"")),i}};t.exports={start:c(1),end:c(2),trim:c(3)}},"746f":function(t,e,i){var n=i("428f"),s=i("5135"),a=i("e538"),r=i("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});s(e,t)||r(e,t,{value:a.f(t)})}},8312:function(t,e,i){"use strict";var n=i("9e9e"),s=i.n(n);s.a},"8c07":function(t,e,i){},"9aec":function(t,e,i){},"9d1e":function(t,e,i){"use strict";var n=i("a50c"),s=i.n(n);s.a},"9e9e":function(t,e,i){},a4d3:function(t,e,i){"use strict";var n=i("23e7"),s=i("da84"),a=i("d066"),r=i("c430"),o=i("83ab"),c=i("4930"),l=i("fdbf"),u=i("d039"),h=i("5135"),d=i("e8b5"),f=i("861d"),p=i("825a"),m=i("7b0b"),v=i("fc6a"),g=i("c04e"),w=i("5c6c"),b=i("7c73"),y=i("df75"),k=i("241c"),x=i("057f"),L=i("7418"),I=i("06cf"),_=i("9bf2"),T=i("d1e7"),S=i("9112"),$=i("6eeb"),E=i("5692"),C=i("f772"),O=i("d012"),A=i("90e3"),N=i("b622"),D=i("e538"),F=i("746f"),M=i("d44e"),j=i("69f3"),P=i("b727").forEach,R=C("hidden"),q="Symbol",B="prototype",V=N("toPrimitive"),H=j.set,G=j.getterFor(q),J=Object[B],U=s.Symbol,W=a("JSON","stringify"),z=I.f,X=_.f,Y=x.f,K=T.f,Q=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),it=E("wks"),nt=s.QObject,st=!nt||!nt[B]||!nt[B].findChild,at=o&&u((function(){return 7!=b(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,i){var n=z(J,e);n&&delete J[e],X(t,e,i),n&&t!==J&&X(J,e,n)}:X,rt=function(t,e){var i=Q[t]=b(U[B]);return H(i,{type:q,tag:t,description:e}),o||(i.description=e),i},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,i){t===J&&ct(Z,e,i),p(t);var n=g(e,!0);return p(i),h(Q,n)?(i.enumerable?(h(t,R)&&t[R][n]&&(t[R][n]=!1),i=b(i,{enumerable:w(0,!1)})):(h(t,R)||X(t,R,w(1,{})),t[R][n]=!0),at(t,n,i)):X(t,n,i)},lt=function(t,e){p(t);var i=v(e),n=y(i).concat(pt(i));return P(n,(function(e){o&&!ht.call(i,e)||ct(t,e,i[e])})),t},ut=function(t,e){return void 0===e?b(t):lt(b(t),e)},ht=function(t){var e=g(t,!0),i=K.call(this,e);return!(this===J&&h(Q,e)&&!h(Z,e))&&(!(i||!h(this,e)||!h(Q,e)||h(this,R)&&this[R][e])||i)},dt=function(t,e){var i=v(t),n=g(e,!0);if(i!==J||!h(Q,n)||h(Z,n)){var s=z(i,n);return!s||!h(Q,n)||h(i,R)&&i[R][n]||(s.enumerable=!0),s}},ft=function(t){var e=Y(v(t)),i=[];return P(e,(function(t){h(Q,t)||h(O,t)||i.push(t)})),i},pt=function(t){var e=t===J,i=Y(e?Z:v(t)),n=[];return P(i,(function(t){!h(Q,t)||e&&!h(J,t)||n.push(Q[t])})),n};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),i=function(t){this===J&&i.call(Z,t),h(this,R)&&h(this[R],e)&&(this[R][e]=!1),at(this,e,w(1,t))};return o&&st&&at(J,e,{configurable:!0,set:i}),rt(e,t)},$(U[B],"toString",(function(){return G(this).tag})),$(U,"withoutSetter",(function(t){return rt(A(t),t)})),T.f=ht,_.f=ct,I.f=dt,k.f=x.f=ft,L.f=pt,D.f=function(t){return rt(N(t),t)},o&&(X(U[B],"description",{configurable:!0,get:function(){return G(this).description}}),r||$(J,"propertyIsEnumerable",ht,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),P(y(it),(function(t){F(t)})),n({target:q,stat:!0,forced:!c},{for:function(t){var e=String(t);if(h(tt,e))return tt[e];var i=U(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(h(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:u((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(m(t))}}),W){var mt=!c||u((function(){var t=U();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,i){var n,s=[t],a=1;while(arguments.length>a)s.push(arguments[a++]);if(n=e,(f(e)||void 0!==t)&&!ot(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),s[1]=e,W.apply(null,s)}})}U[B][V]||S(U[B],V,U[B].valueOf),M(U,q),O[R]=!0},a50c:function(t,e,i){},a9e3:function(t,e,i){"use strict";var n=i("83ab"),s=i("da84"),a=i("94ca"),r=i("6eeb"),o=i("5135"),c=i("c6b6"),l=i("7156"),u=i("c04e"),h=i("d039"),d=i("7c73"),f=i("241c").f,p=i("06cf").f,m=i("9bf2").f,v=i("58a8").trim,g="Number",w=s[g],b=w.prototype,y=c(d(b))==g,k=function(t){var e,i,n,s,a,r,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(a=l.slice(2),r=a.length,o=0;o<r;o++)if(c=a.charCodeAt(o),c<48||c>s)return NaN;return parseInt(a,n)}return+l};if(a(g,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var x,L=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof L&&(y?h((function(){b.valueOf.call(i)})):c(i)!=g)?l(new w(k(e)),i,L):k(e)},I=n?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)o(w,x=I[_])&&!o(L,x)&&m(L,x,p(w,x));L.prototype=b,b.constructor=L,r(s,g,L)}},b4b5:function(t,e,i){"use strict";var n=i("8c07"),s=i.n(n);s.a},b727:function(t,e,i){var n=i("0366"),s=i("44ad"),a=i("7b0b"),r=i("50c4"),o=i("65f0"),c=[].push,l=function(t){var e=1==t,i=2==t,l=3==t,u=4==t,h=6==t,d=5==t||h;return function(f,p,m,v){for(var g,w,b=a(f),y=s(b),k=n(p,m,3),x=r(y.length),L=0,I=v||o,_=e?I(f,x):i?I(f,0):void 0;x>L;L++)if((d||L in y)&&(g=y[L],w=k(g,L,b),t))if(e)_[L]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return L;case 2:c.call(_,g)}else if(u)return!1;return h?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},cabe:function(t,e,i){t.exports=i.p+"assets/img/light-bulb.png"},d28b:function(t,e,i){var n=i("746f");n("iterator")},d81d:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").map,a=i("1dde"),r=i("ae40"),o=a("map"),c=r("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,i){var n=i("da84"),s=i("fdbc"),a=i("e260"),r=i("9112"),o=i("b622"),c=o("iterator"),l=o("toStringTag"),u=a.values;for(var h in s){var d=n[h],f=d&&d.prototype;if(f){if(f[c]!==u)try{r(f,c,u)}catch(m){f[c]=u}if(f[l]||r(f,l,h),s[h])for(var p in a)if(f[p]!==a[p])try{r(f,p,a[p])}catch(m){f[p]=a[p]}}}},ddf8:function(t,e,i){"use strict";var n=i("9aec"),s=i.n(n);s.a},e01a:function(t,e,i){"use strict";var n=i("23e7"),s=i("83ab"),a=i("da84"),r=i("5135"),o=i("861d"),c=i("9bf2").f,l=i("e893"),u=a.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var h={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(h[e]=!0),e};l(d,u);var f=d.prototype=u.prototype;f.constructor=d;var p=f.toString,m="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=p.call(t);if(r(h,t))return"";var i=m?e.slice(7,-1):e.replace(v,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:d})}},e427:function(t,e,i){"use strict";var n=i("34a3"),s=i.n(n);s.a},e538:function(t,e,i){var n=i("b622");e.f=n},e961:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dayin",staticClass:"testIng",attrs:{id:"dayin"}},[n("el-container",[n("el-header",[n("div",{staticClass:"textcenter fontweight testTop"},[t._v(t._s(t.testInfo.name))])]),n("el-container",[n("el-aside",{attrs:{width:"250px"}},[n("div",[n("div",{staticClass:"times"},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:t.checkPaper}},[t._v("提交试卷")])],1),n("div",{staticClass:"explain"},[n("div",{staticClass:"grid-content",staticStyle:{color:"green"}},[t._v("考试说明")]),n("div",[t._v("若考试时间超过了截止交卷时间，倒计时将以截止交卷时间为准")]),n("div",[t._v("请不要在输入框里输入任何表情符号，否则将不能提交试卷")]),n("div",[t._v("考生姓名 : "+t._s(t.userInfomation.nickName))]),n("div",[t._v("考生专业 : "+t._s(t.majorName))]),n("div",[t._v("考生部门 : "+t._s(t.departmentName))]),n("div",[t._v("开始答卷时间 :")]),n("div",[t._v(t._s(t.beginWriteTime))]),n("div",[t._v("考试截止时间 :")]),n("div",[t._v(t._s(t.endWriteTime))]),n("div",[t._v(" 考试难度 : "),0===t.testInfo.level?n("span",[t._v("简单")]):t._e(),1===t.testInfo.level?n("span",[t._v("普通")]):t._e(),2===t.testInfo.level?n("span",[t._v("困难")]):t._e()]),n("div",[t._v("考试限时 : "+t._s(t.testInfo.minutes)+" 分钟")]),n("div",[t._v("及格分数 : "+t._s(t.testInfo.defaultPassScore)+" 分")])]),n("div",{staticClass:"fixedTime"},[n("div",[t._v("考试时间还剩")]),n("div",{attrs:{id:"countdown"}},[t._v("00:00")]),n("div",{staticClass:"allchecked"},t._l(t.checkList,(function(e,i){return n("div",{key:i,staticClass:"choosedcheck",attrs:{id:"tchar_nav_"+i}},[!1===e.check?n("div",{staticClass:"checkingfalse"},[t._v(t._s(i+1))]):t._e(),!0===e.check?n("div",{staticClass:"checkingtrue"},[t._v(t._s(i+1))]):t._e()])})),0)])])])]),n("el-main",[n("div",{staticClass:"btn-fullscreen"},[n("el-tooltip",{attrs:{effect:"dark",content:"祝您考试顺利",placement:"bottom"}},[n("div",{staticClass:"test"},[n("div",{staticClass:"content"},t._l(t.testInfo.questions,(function(e,i){return n("div",{key:i,staticClass:"scrollBody",attrs:{id:"tchar_nav_"+i}},[n("div",{staticClass:"scrollview",attrs:{id:"tchar_nav_"+i}}),n("div",{staticClass:"title"},[n("div",{staticStyle:{width:"3%"}},[n("div",i<9?[t._v("0"+t._s(i+1)+"、")]:[t._v(t._s(i+1)+"、")])]),n("div",{class:4===e.type?"name":"public",staticStyle:{width:"70px"}},[0===e.type?n("span",[t._v("【单选】")]):t._e(),1===e.type?n("span",[t._v("【多选】")]):t._e(),2===e.type?n("span",[t._v("【填空】")]):t._e(),3===e.type?n("span",[t._v("【判断】")]):t._e(),4===e.type?n("span",[t._v("【名词解释】")]):t._e(),5===e.type?n("span",[t._v("【问答】")]):t._e()]),n("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.content))])]),n("div",{staticClass:"answer"},[0===e.type?n("div",[n("radio",{attrs:{options:t.currentOptions,index:i,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),1===e.type?n("div",[n("checkbox",{attrs:{options:t.currentOptions,index:i,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),2===e.type?n("div",[n("fillBlanks",{attrs:{options:t.currentOptions,index:i,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),3===e.type?n("div",[n("judge",{attrs:{options:t.currentOptions,index:i,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),4===e.type?n("div",[n("nounExplanation",{attrs:{options:t.currentOptions,index:i,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e(),5===e.type?n("div",[n("explain",{attrs:{options:t.currentOptions,index:i,answer:t.answer,checkList:t.checkList},on:{checkList:t.getcheckList}})],1):t._e()])])})),0)])])],1)])],1)],1)],1),n("div",[n("el-dialog",{attrs:{title:"确认提交？",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",[t.empty.length>0?n("div",[t._v(" 还有题号 "),t._l(t.empty,(function(e,i){return n("span",{key:i},[i===t.empty.length-1?n("span",[t._v(t._s(e))]):n("span",[t._v(t._s(e)+"、")])])})),t._v(" 等"+t._s(t.length)+"道题未做 ")],2):n("div",[t._v("确认提交试卷")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{icon:"el-icon-download",circle:""},on:{click:t.dayinprint}}),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"时间到",visible:t.showDialog,width:"30%","close-on-click-modal":t.close,"show-close":t.close,"close-on-press-escape":t.close},on:{"update:visible":function(e){t.showDialog=e}}},[n("div",{staticClass:"tishiInfo"},[n("div",[n("img",{staticClass:"lightImg",attrs:{src:i("cabe"),alt:""}})]),n("div",[t._v("时间已到，系统已自动提交试卷")])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{icon:"el-icon-download",circle:""},on:{click:t.dayinprint}}),n("el-button",{attrs:{type:"primary"},on:{click:t.closePopup}},[t._v("确 定")])],1)])],1),n("el-dialog",{attrs:{visible:t.showFalut,title:"警告"},on:{"update:visible":function(e){t.showFalut=e}}},[n("div",[t._v("与服务器同步时间失败，系统将使用本机时间进行考试，请确认时间是否无误，若有问题，请立即联系管理员")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.showFalut=!1}}},[t._v("确 定")])],1)])],1)},s=[],a=(i("4160"),i("c975"),i("d81d"),i("a434"),i("a9e3"),i("ac1f"),i("466d"),i("5319"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list.options,(function(e,n){return i("div",{key:n,on:{change:t.changeRadio}},[i("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[0===n?i("span",[i("el-radio",{attrs:{label:0}},[t._v("A、"+t._s(e.content))])],1):t._e(),1===n?i("span",[i("el-radio",{attrs:{label:1}},[t._v("B、"+t._s(e.content))])],1):t._e(),2===n?i("span",[i("el-radio",{attrs:{label:2}},[t._v("C、"+t._s(e.content))])],1):t._e(),3===n?i("span",[i("el-radio",{attrs:{label:3}},[t._v("D、"+t._s(e.content))])],1):t._e()])],1)})),0)}),r=[],o={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{radio:10,list:{},answerInfo:[],answerList:[],data:{}}},components:{},methods:{changeRadio:function(){this.data={},"0"==this.radio&&(this.answerInfo=[],this.answerInfo.push("A")),"1"==this.radio&&(this.answerInfo=[],this.answerInfo.push("B")),"2"==this.radio&&(this.answerInfo=[],this.answerInfo.push("C")),"3"==this.radio&&(this.answerInfo=[],this.answerInfo.push("D")),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)}},mounted:function(){if(this.list=this.options[this.index],this.answerList=this.$store.state.answerList,this.answer[this.options[this.index].id]){var t=this.answer[this.options[this.index].id][0];"A"===t&&(this.radio=0),"B"===t&&(this.radio=1),"C"===t&&(this.radio=2),"D"===t&&(this.radio=3)}this.answerList[this.options.id]&&(this.radio=this.answerList[this.options.id])},watch:{},computed:{}},c=o,l=(i("1624"),i("2877")),u=Object(l["a"])(c,a,r,!1,null,"0e65c952",null),h=u.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list.options,(function(e,n){return i("div",{key:n,on:{change:t.changeCheckbox}},[i("el-checkbox-group",{model:{value:t.checkBoxList,callback:function(e){t.checkBoxList=e},expression:"checkBoxList"}},[0===n?i("span",[i("el-checkbox",{attrs:{label:"0"}},[t._v("A、"+t._s(e.content))])],1):t._e(),1===n?i("span",[i("el-checkbox",{attrs:{label:"1"}},[t._v("B、"+t._s(e.content))])],1):t._e(),2===n?i("span",[i("el-checkbox",{attrs:{label:"2"}},[t._v("C、"+t._s(e.content))])],1):t._e(),3===n?i("span",[i("el-checkbox",{attrs:{label:"3"}},[t._v("D、"+t._s(e.content))])],1):t._e(),4===n?i("span",[i("el-checkbox",{attrs:{label:"4"}},[t._v("E、"+t._s(e.content))])],1):t._e(),5===n?i("span",[i("el-checkbox",{attrs:{label:"5"}},[t._v("F、"+t._s(e.content))])],1):t._e()])],1)})),0)},f=[],p={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{checkBoxList:[],list:{},radio:"",answerInfo:[]}},components:{},methods:{uniq:function(t){var e=["A","B","C","D","E","F"],i=[];return e.map((function(e){t.map((function(t){e==t&&i.push(e)}))})),i},changeCheckbox:function(){var t=this;this.answerInfo=[],this.checkBoxList.map((function(e){"0"==e&&t.answerInfo.push("A"),"1"==e&&t.answerInfo.push("B"),"2"==e&&t.answerInfo.push("C"),"3"==e&&t.answerInfo.push("D"),"4"==e&&t.answerInfo.push("E"),"5"==e&&t.answerInfo.push("F")})),this.answerInfo=this.uniq(this.answerInfo),this.$store.state.answerList[this.list.id]=this.answerInfo,this.answerInfo.length>0?(this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)):(this.checkList[this.index].check=!1,this.$emit("checkList",this.checkList))}},mounted:function(){var t=this;if(this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]){var e=this.answer[this.options[this.index].id];e.map((function(e){"A"===e&&t.checkBoxList.push("0"),"B"===e&&t.checkBoxList.push("1"),"C"===e&&t.checkBoxList.push("2"),"D"===e&&t.checkBoxList.push("3"),"E"===e&&t.checkBoxList.push("4"),"F"===e&&t.checkBoxList.push("5")}))}},watch:{},computed:{}},m=p,v=Object(l["a"])(m,d,f,!1,null,"3fa14de0",null),g=v.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.fillList,(function(e,n){return i("div",{key:n},[i("div",[i("el-input",{attrs:{type:"textarea",rows:1,maxlength:"30","show-word-limit":"",placeholder:"请输入内容"},on:{input:function(e){return t.inputInfo(n)}},model:{value:t.textarea[n],callback:function(e){t.$set(t.textarea,n,e)},expression:"textarea[index]"}})],1)])})),0)},b=[],y={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{textarea:[""],answerInfo:[],list:{},fillList:[]}},components:{},methods:{inputInfo:function(t){var e=this;""!==this.textarea[t]&&(this.fillList[t]=this.textarea[t],this.$store.state.answerList[this.list.id]=this.fillList,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)),""===this.textarea[t]&&(this.fillList[t]=this.textarea[t],this.fillList.map((function(t){""!==t?(e.$store.state.answerList[e.list.id]=e.fillList,e.checkList[e.index].check=!0,e.$emit("checkList",e.checkList)):(delete e.$store.state.answerList[e.list.id],e.checkList[e.index].check=!1,e.$emit("checkList",e.checkList))})))}},mounted:function(){if(this.options[this.index].checked=!0,this.list=this.options[this.index],this.list.fillCount>0)for(var t=0;t<this.list.fillCount;t++)this.fillList.push("");else 0===this.list.fillCount&&this.fillList.push("");this.answer[this.options[this.index].id]&&(this.textarea=this.answer[this.options[this.index].id])},watch:{},computed:{}},k=y,x=(i("8312"),Object(l["a"])(k,w,b,!1,null,"5aceea99",null)),L=x.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{on:{change:t.changeRadio}},[i("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("div",[i("el-radio",{attrs:{label:0}},[t._v("正确")])],1),i("div",[i("el-radio",{attrs:{label:1}},[t._v("错误")])],1)])],1)])},_=[],T={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{radio:"",answerInfo:[],list:{}}},components:{},methods:{changeRadio:function(){"0"==this.radio&&(this.answerInfo=[],this.answerInfo.push("正确")),"1"==this.radio&&(this.answerInfo=[],this.answerInfo.push("错误")),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)}},mounted:function(){if(this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]){var t=this.answer[this.options[this.index].id][0];"正确"===t&&(this.radio=0),"错误"===t&&(this.radio=1)}},watch:{},computed:{}},S=T,$=(i("ddf8"),Object(l["a"])(S,I,_,!1,null,"271a9808",null)),E=$.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容",maxlength:"800","show-word-limit":""},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},O=[],A={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:[],list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo=[],this.answerInfo.push(this.textarea),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)),""===this.textarea&&(delete this.$store.state.answerList[this.list.id],this.checkList[this.index].check=!1,this.$emit("checkList",this.checkList))}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]&&(this.textarea=this.answer[this.options[this.index].id])},watch:{},computed:{}},N=A,D=(i("9d1e"),Object(l["a"])(N,C,O,!1,null,"2e3e3488",null)),F=D.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容",maxlength:"800","show-word-limit":""},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},j=[],P={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Object,default:function(){return{}}},checkList:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:[],list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo=[],this.answerInfo.push(this.textarea),this.$store.state.answerList[this.list.id]=this.answerInfo,this.checkList[this.index].check=!0,this.$emit("checkList",this.checkList)),""===this.textarea&&(delete this.$store.state.answerList[this.list.id],this.checkList[this.index].check=!1,this.$emit("checkList",this.checkList))}},mounted:function(){this.options[this.index].checked=!0,this.list=this.options[this.index],this.answer[this.options[this.index].id]&&(this.textarea=this.answer[this.options[this.index].id])},watch:{},computed:{}},R=P,q=(i("e427"),Object(l["a"])(R,M,j,!1,null,"aad4dbd8",null)),B=q.exports,V=i("2b0e");i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");function H(t){return H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}var G=function t(e,i){if(!(this instanceof t))return new t(e,i);this.options=this.extend({noPrint:".no-print"},i),"string"===typeof e?this.dom=document.querySelector(e):(this.isDOM(e),this.dom=this.isDOM(e)?e:e.$el),this.init()};G.prototype={init:function(){var t=this.getStyle()+this.getHtml();this.writeIframe(t)},extend:function(t,e){for(var i in e)t[i]=e[i];return t},getStyle:function(){for(var t="",e=document.querySelectorAll("style,link"),i=0;i<e.length;i++)t+=e[i].outerHTML;return t+="<style>"+(this.options.noPrint?this.options.noPrint:".no-print")+"{display:none;}</style>",t+="<style>html,body,div{height: auto!important;font-size:14px}</style>",t},getHtml:function(){for(var t=document.querySelectorAll("input"),e=document.querySelectorAll("textarea"),i=document.querySelectorAll("select"),n=0;n<t.length;n++)"checkbox"==t[n].type||"radio"==t[n].type?1==t[n].checked?t[n].setAttribute("checked","checked"):t[n].removeAttribute("checked"):(t[n].type,t[n].setAttribute("value",t[n].value));for(var s=0;s<e.length;s++)"textarea"==e[s].type&&(e[s].innerHTML=e[s].value);for(var a=0;a<i.length;a++)if("select-one"==i[a].type){var r=i[a].children;for(var o in r)"OPTION"==r[o].tagName&&(1==r[o].selected?r[o].setAttribute("selected","selected"):r[o].removeAttribute("selected"))}return this.dom.outerHTML},writeIframe:function(t){var e,i,n=document.createElement("iframe"),s=document.body.appendChild(n);n.id="myIframe",n.setAttribute("style","position:absolute;width:0;height:0;top:-10px;left:-10px;"),e=s.contentWindow||s.contentDocument,i=s.contentDocument||s.contentWindow.document,i.open(),i.write(t),i.close();var a=this;n.onload=function(){a.toPrint(e),setTimeout((function(){document.body.removeChild(n)}),100)}},toPrint:function(t){try{setTimeout((function(){t.focus();try{t.document.execCommand("print",!1,null)||t.print()}catch(e){t.print()}t.close()}),10)}catch(e){console.log("err",e)}},isDOM:"object"===("undefined"===typeof HTMLElement?"undefined":H(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===H(t)&&1===t.nodeType&&"string"===typeof t.nodeName}};var J={install:function(t,e){t.prototype.$print=G}},U=J;V["default"].use(U);var W={data:function(){return{loading:!0,currentRadio:[],id:"",time:0,currentOptions:{},currentIndex:0,testInfo:{},close:!1,radio:0,fullscreen:!1,dialogVisible:!1,showDialog:!1,allAnswer:{},answerId:[],answer:{},empty:[],checkList:[],ksExamId:"",length:0,llqName:"",timecount:{},numberes:!1,data:{},saveMsg:{},beginTestTime:"",finishTime:"",noeTime:"",submitResult:!1,nowTeastTime:0,showFalut:!1,userInfomation:{},majorName:"",departmentName:"",newTime:"",beginWriteTime:"",endWriteTime:""}},components:{radio:h,checkbox:g,fillBlanks:L,judge:E,nounExplanation:F,explain:B},methods:{handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen},dayinprint:function(){this.$print(this.$refs.dayin)},checkPaper:function(){var t=this;for(var e in this.empty=[],this.answerId=[],this.dialogVisible=!0,this.allAnswer=this.$store.state.answerList,this.allAnswer)e=Number(e),this.answerId.push(e);this.currentOptions.map((function(e,i){-1===t.answerId.indexOf(e.id)&&(i+=1,t.empty.push(i))})),this.length=this.empty.length,this.empty.length>5&&this.empty.splice(5)},getcheckList:function(t){this.checkList=t},closePopup:function(){!0===this.submitResult?(this.showDialog=!1,this.$store.state.answerList={},this.$router.replace({name:"result",path:"/result"})):(this.showDialog=!1,this.$message({message:"试卷提交失败，请联系管理员",type:"warning"}))},submit:function(){var t=this;this.handleFullScreen(),this.dialogVisible=!1;var e=JSON.parse(localStorage.getItem("userInfo")),i="0.0.0.0";this.getBrowser();var n={answers:this.allAnswer,beginTime:this.timechange(this.beginTestTime),device:"chrome",ip:i,ksExamId:this.ksExamId,peopleId:e.userId},s=this.$loading({lock:!0,text:"试卷提交中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});this.$onlineTest.submitPaper(n).then((function(e){s.close(),1e3===e.data.code?t.$router.push({name:"login",path:"/login"}):0===e.data.code?(clearInterval(t.saveMsg),t.$store.state.answerList={},t.data="",t.submitResult=!0,t.saveTestInfo(t.data),t.$router.replace({name:"result",path:"/result"})):(clearInterval(t.saveMsg),t.data="",t.saveTestInfo(t.data),t.submitResult=!1)})).catch((function(t){s.close()}))},getBrowser:function(){var t=this,e=["edge","firefox","chrome","safari","opera "],i=navigator.userAgent.toLocaleLowerCase(),n=[];if(e.forEach((function(e){if(i.indexOf(e)>0){var s="".concat(e)+"\\/([\\d.]+)";n.push(e),n.push(i.match(s)[1]),t.llqName=n[0],t.llqName||(t.llqName="chrome")}})),n.indexOf("chrome")>-1&&n.indexOf("safari")>-1){if(4===n.length){var s=[];return s.push("chrome"),s.push(n[n.indexOf("chrome")+1]),s}return n.splice(n.indexOf("chrome"),2),n.splice(n.indexOf("safari"),2),n}return n},getTestMsg:function(){var t=this;this.getNowTime(),this.$onlineTest.onlineTest(this.id).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.testInfo=e.data.data[0],0===t.checkList.length&&(t.checkList=[],t.testInfo.questions.map((function(e,i){var n={value:i,check:!1};t.checkList.push(n)}))),t.currentOptions=e.data.data[0].questions,t.beginWriteTime=t.timeFormat(t.beginTestTime),t.endWriteTime=t.timeFormat(t.finishTime),t.finishTime=Date.parse(new Date(t.finishTime)),0===t.nowTeastTime&&(t.showFalut=!0,t.nowTeastTime=Date.parse(new Date)),t.finishTime-t.nowTeastTime<=6e4*e.data.data[0].minutes?(t.time=t.finishTime-t.nowTeastTime,console.log(t.time)):(t.time=6e4*e.data.data[0].minutes-(t.nowTeastTime-t.beginTestTime),console.log(t.time)),console.log(t.finishTime),console.log(t.nowTeastTime),console.log(t.beginTestTime),t.timeDown()):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},timechange:function(t){var e="",i=new Date(t),n=i.getFullYear(),s=i.getMonth()+1,a=i.getDate(),r=i.getHours(),o=i.getMinutes(),c=i.getSeconds();return e+=n+"-",s<10&&(e+="0"),e+=s+"-",a<10&&(e+="0"),e+=a+" ",r<10&&(e+="0"),e+=r+":",o<10&&(e+="0"),e+=o+":",c<10&&(e+="0"),e+=c,e},timeDown:function(){var t=this,e=document.getElementById("countdown"),i=t.time/1e3;t.timecount=setInterval((function(){var n=this;if(i-=1,i>=0){t.time=i;var s=0,a=parseInt(i/60);a>60?(s=parseInt(i/60/60),s<10&&(s="0"+s),a=parseInt((i-60*s*60)/60),a<10&&(a="0"+a)):a<10&&(a="0"+a);var r=parseInt(i%60);r<10&&(r="0"+r),e.innerHTML=s?s+":"+a+":"+r:a+":"+r}else{clearInterval(t.timecount),clearInterval(t.saveMsg),t.showDialog=!0,t.handleFullScreen(),t.dialogVisible=!1;var o=JSON.parse(localStorage.getItem("userInfo")),c="0.0.0.0",l={answers:t.allAnswer,beginTime:t.timechange(t.beginTestTime),device:"chrome",ip:c,ksExamId:t.ksExamId,peopleId:o.userId};t.$onlineTest.submitPaper(l).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.$store.state.answerList={},t.data="",t.saveTestInfo(t.data),t.$message({message:"交卷成功",type:"success"}),t.$router.replace({name:"result",path:"/result"})):t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){n.data="",n.saveTestInfo(n.data)}))}}),1e3),t.numberes&&t.submit()},saveTestInfo:function(t){var e=this;this.$grade.saveExamRunningData(t).then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"})})).catch((function(t){e.$message({message:"获取失败",type:"warning"})}))},savePaper:function(){this.allAnswer=this.$store.state.answerList,this.data={paperInfo:{id:this.id,ksExamId:this.ksExamId},beginTestTime:this.beginTestTime,finishTime:this.finishTime,answerList:this.allAnswer,checkList:this.checkList},this.saveTestInfo(JSON.stringify(this.data))},saveMsgMinute:function(){var t=this;this.saveMsg=setInterval((function(){t.savePaper()}),6e4)},getNowTime:function(){var t=this;this.$api.getNowTime().then((function(e){if(1e3===e.data.code)t.$router.push({name:"login",path:"/login"});else if(0===e.data.code){var i=e.data.data[0],n=new Date(i);t.nowTeastTime=Date.parse(n)}else{t.showFalut=!0;var s=new Date;t.nowTeastTime=Date.parse(s)}})).catch((function(e){t.showFalut=!0;var i=new Date;t.nowTeastTime=Date.parse(i)}))},getUserList:function(){var t=this;this.$api.getUser().then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?t.userInfomation=e.data.data[0]:t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))},getSubjectDetail:function(){var t=this;this.$api.getSubject().then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.major=e.data.data[0]["专业名称"],t.major.map((function(e){t.userInfomation.majorId==e.key&&(t.majorName=e.value)})),t.department=e.data.data[0]["部门名称"],t.department.map((function(e){e.key==t.userInfomation.departmentId&&(t.departmentName=e.value)}))):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1}))}},beforeDestroy:function(){clearInterval(this.timecount),clearInterval(this.saveMsg)},mounted:function(){var t=this;console.log(this.$route.query),this.getUserList(),this.getSubjectDetail(),this.$store.state.answerList={},this.handleFullScreen(),this.$grade.getExamRunningData().then((function(e){if(1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code)if(null===e.data.data||""===e.data.data[0].data)t.$api.getNowTime().then((function(e){if(1e3===e.data.code)t.$router.push({name:"login",path:"/login"});else if(0===e.data.code){var i=e.data.data[0],n=new Date(i);t.id=t.$route.query.paperId,t.ksExamId=t.$route.query.id,t.data={paperInfo:{id:t.id,ksExamId:t.ksExamId},finishTime:t.$route.query.finishTime,beginTestTime:Date.parse(n),answerList:{},checkList:[]},t.$store.state.answerList={},t.answer={},t.finishTime=t.data.finishTime,t.beginTestTime=Date.parse(n),t.saveTestInfo(JSON.stringify(t.data)),t.getTestMsg()}}));else{var i=e.data.data[0].data,n=JSON.parse(i);t.id=n.paperInfo.id,t.ksExamId=n.paperInfo.ksExamId,t.beginTestTime=n.beginTestTime,t.finishTime=n.finishTime,t.answer=n.answerList,t.allAnswer=n.answerList,t.$store.state.answerList=t.answer,t.checkList=[],t.checkList=n.checkList,t.getTestMsg()}else t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){})),document.onkeydown=function(){27===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),122===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),18===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1),9===window.event.keyCode&&(window.event.keyCode=0,window.event.returnValue=!1)},this.saveMsgMinute(),this.$once("hook:beforeDestroy",(function(){clearInterval(t.timecount),clearInterval(t.saveMsg)}))},watch:{time:function(t,e){}},computed:{}},z=W,X=(i("b4b5"),Object(l["a"])(z,n,s,!1,null,"24bae89a",null));e["default"]=X.exports},f782:function(t,e,i){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);