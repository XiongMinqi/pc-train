(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["courseware~doMission"],{"01ac":function(e,t,r){e.exports=r.p+"assets/img/other.png"},"25f0":function(e,t,r){"use strict";var i=r("6eeb"),n=r("825a"),o=r("d039"),s=r("ad6d"),a="toString",u=RegExp.prototype,c=u[a],d=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f=c.name!=a;(d||f)&&i(RegExp.prototype,a,(function(){var e=n(this),t=String(e.source),r=e.flags,i=String(void 0===r&&e instanceof RegExp&&!("flags"in u)?s.call(e):r);return"/"+t+"/"+i}),{unsafe:!0})},3980:function(e,t,r){"use strict";var i=r("a92b"),n=r.n(i);n.a},"3b84":function(e,t,r){e.exports=r.p+"assets/img/word.png"},"3d38":function(e,t,r){e.exports=r.p+"assets/img/picture.png"},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var i=r("1d80"),n=r("5899"),o="["+n+"]",s=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(e){return function(t){var r=String(i(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(a,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5c0e":function(e,t,r){e.exports=r.p+"assets/img/movie.png"},"5dc6":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"vueVideoPlayer"}},[r("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions}})],1)},n=[],o={name:"vueVideoPlayer",props:{src:{type:String},cover_url:{type:String}},data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:10",fluid:!0,sources:[{src:this.src,type:"video/mp4"}],poster:this.cover_url,notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}}},s=o,a=(r("3980"),r("2877")),u=Object(a["a"])(s,i,n,!1,null,"49d824de",null);t["a"]=u.exports},6358:function(e,t,r){e.exports=r.p+"assets/img/ppt.png"},7156:function(e,t,r){var i=r("861d"),n=r("d2bb");e.exports=function(e,t,r){var o,s;return n&&"function"==typeof(o=t.constructor)&&o!==r&&i(s=o.prototype)&&s!==r.prototype&&n(e,s),e}},"77ef":function(e,t,r){e.exports=r.p+"assets/img/pdf.png"},a640:function(e,t,r){"use strict";var i=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&i((function(){r.call(null,t||function(){throw 1},1)}))}},a92b:function(e,t,r){},a9e3:function(e,t,r){"use strict";var i=r("83ab"),n=r("da84"),o=r("94ca"),s=r("6eeb"),a=r("5135"),u=r("c6b6"),c=r("7156"),d=r("c04e"),f=r("d039"),l=r("7c73"),p=r("241c").f,h=r("06cf").f,g=r("9bf2").f,m=r("58a8").trim,v="Number",y=n[v],P=y.prototype,_=u(l(P))==v,x=function(e){var t,r,i,n,o,s,a,u,c=d(e,!1);if("string"==typeof c&&c.length>2)if(c=m(c),t=c.charCodeAt(0),43===t||45===t){if(r=c.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+c}for(o=c.slice(2),s=o.length,a=0;a<s;a++)if(u=o.charCodeAt(a),u<48||u>n)return NaN;return parseInt(o,i)}return+c};if(o(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var b,w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(_?f((function(){P.valueOf.call(r)})):u(r)!=v)?c(new y(x(t)),r,w):x(t)},$=i?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;$.length>T;T++)a(y,b=$[T])&&!a(w,b)&&g(w,b,h(y,b));w.prototype=P,P.constructor=w,s(n,v,w)}},ac8a:function(e,t,r){(function(t,r){e.exports=r()})("undefined"!==typeof self&&self,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({"0aac":function(e,t){!function(e){var t,r='<svg><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M511.2269 64.4608c-246.1655 0-446.4425 200.278-446.4425 446.4425 0 246.1655 200.277 446.4435 446.4425 446.4435s446.4425-200.278 446.4425-446.4435C957.6694 264.7388 757.3914 64.4608 511.2269 64.4608zM511.2269 901.5409c-215.4015 0-390.6376-175.2361-390.6376-390.6376 0-215.4015 175.2361-390.6365 390.6376-390.6365 215.4015 0 390.6365 175.2351 390.6365 390.6365C901.8634 726.3048 726.6273 901.5409 511.2269 901.5409zM705.3455 459.649l-238.807-129.622c-11.3347-6.186-23.5151-9.4556-35.2328-9.4556-34.5508 0-59.5927 26.5134-59.5927 63.0272v254.61248c0 36.5117 25.0419 62.9975 59.5927 63.0262 11.7166 0 23.8971-3.2696 35.1519-9.3993l240.087-129.7326c21.718-11.8262 34.1985-30.2735 34.1985-50.5743C740.7432 490.8216 727.852 471.9114 705.3455 459.649zM679.9227 513.0568 439.8356 642.7884c-4.1974 2.3183-7.168 2.6429-8.5299 2.6429-1.5247 0-3.7878 0-3.7878-7.2212V383.59859199999994c0-7.2212 2.263-7.2212 3.7878-7.2212 1.3629 0 4.3325 0.3543 8.5555 2.6429l238.8357 129.6507c1.7172 0.9533 3.0515 1.8524 4.0878 2.6429C682.0219 511.8587 681.0665 512.4577 679.9227 513.0568z"  ></path></symbol><symbol id="icon-play-pause" viewBox="0 0 1024 1024"><path d="M960 512c0-247.36-200.576-448-448-448C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448C759.424 960 960 759.424 960 512zM128 511.936c0-212.032 171.904-384 384-384s384 171.968 384 384-171.904 384-384 384S128 723.968 128 511.936zM406.784 678.208c-22.656 0.064-41.088-19.072-41.088-42.56L365.696 383.04c0-23.68 18.432-42.688 41.152-42.688C429.568 340.224 448 359.488 448 382.976l0 252.544C448 659.136 429.568 678.272 406.784 678.208zM617.088 678.208C594.368 678.272 576 659.136 576 635.648L576 383.04c0-23.68 18.432-42.688 41.152-42.688 22.656-0.128 41.152 19.136 41.152 42.624l0 252.544C658.24 659.136 639.808 678.272 617.088 678.208z"  ></path></symbol><symbol id="icon-play-prev" viewBox="0 0 1024 1024"><path d="M128 102.4V928c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32V102.4c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32z m646.028 41.395l-404.352 331.09c-27.383 22.42-27.435 58.886 0 81.35l404.352 331.09c27.382 22.42 49.676 12.003 49.676-23.366V167.16c0-35.646-22.24-45.83-49.676-23.365z m-40.546-49.518c69.12-56.597 154.222-16.897 154.222 72.883v696.8c0 89.481-85.14 129.447-154.222 72.883L329.13 605.753c-58.7-48.064-58.662-132.353 0-180.386l404.352-331.09z" fill="" ></path></symbol><symbol id="icon-play-next" viewBox="0 0 1024 1024"><path d="M889.6 921.6V96c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v825.6c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32z m-646.028-41.395l404.352-331.09c27.383-22.42 27.435-58.886 0-81.35l-404.352-331.09c-27.382-22.42-49.676-12.003-49.676 23.366V856.84c0 35.646 22.24 45.83 49.676 23.365z m40.546 49.518c-69.12 56.597-154.222 16.897-154.222-72.883v-696.8c0-89.481 85.14-129.447 154.222-72.883l404.352 331.09c58.7 48.064 58.662 132.353 0 180.386l-404.352 331.09z" fill="" ></path></symbol></svg>',i=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");if(i&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var r=function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()};document.addEventListener("DOMContentLoaded",r,!1)}else document.attachEvent&&(i=t,n=e.document,o=!1,s=function(){o||(o=!0,i())},(a=function(){try{n.documentElement.doScroll("left")}catch(t){return void setTimeout(a,50)}s()})(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,s())});var i,n,o,s,a}((function(){var e,t,i,n,o,s;(e=document.createElement("div")).innerHTML=r,r=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",i=t,(n=document.body).firstChild?(o=i,(s=n.firstChild).parentNode.insertBefore(o,s)):n.appendChild(i))}))}(window)},1054:function(e,t,r){},f6fd:function(e,t){(function(e){var t="currentScript",r=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(i){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack)||[!1])[1];for(e in r)if(r[e].src==t||"interactive"==r[e].readyState)return r[e];return null}}})})(document)},f7be:function(e,t,r){"use strict";var i=r("1054"),n=r.n(i);n.a},fb15:function(e,t,r){"use strict";var i;r.r(t),"undefined"!==typeof window&&(r("f6fd"),(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(r.p=i[1])),r("0aac");var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"audio-player"},[r("div",{staticClass:"audio__btn-wrap"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.showPrevButton,expression:"showPrevButton"}],staticClass:"audio__play--previous",class:{disable:!e.isLoop&&0===e.currentPlayIndex},on:{click:e.playPrev}},[r("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-play-prev"}})])]),!e.isPlaying&&e.showPlayButton?r("div",{staticClass:"audio__play--start",on:{click:e.play}},[r("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-play"}})])]):e.showPlayButton?r("div",{staticClass:"audio__play--pause",on:{click:e.pause}},[r("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-play-pause"}})])]):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showNextButton,expression:"showNextButton"}],staticClass:"audio__play--next",class:{disable:!e.isLoop&&e.currentPlayIndex===e.audioList.length-1},on:{click:e.playNext}},[r("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-play-next"}})])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showProgressBar,expression:"showProgressBar"}],ref:"audioProgressWrap",staticClass:"audio__progress-wrap",on:{click:e.initProgressBarPoint}},[r("div",{ref:"audioProgress",staticClass:"audio__progress"}),r("div",{ref:"audioProgressPoint",staticClass:"audio__progress-point"})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showProgressBar,expression:"showProgressBar"}],staticClass:"audio__time-wrap"},[r("div",{staticClass:"audio__current-time"},[e._v(" "+e._s(e.currentTimeAfterFormat)+" ")]),r("div",{staticClass:"audio__duration"},[e._v(" "+e._s(e.formatTime(e.duration))+" ")])]),r("audio",{ref:"audio",staticClass:"audio-player__audio",attrs:{src:e.audioList[e.currentPlayIndex]},on:{ended:e.onEnded,timeupdate:e.onTimeUpdate,loadedmetadata:e.onLoadedmetadata}},[e._v(" 浏览器太老咯，请升级浏览器吧~ ")])])},o=[],s={name:"AudioPlayer",props:{audioList:{default:null,type:Array},showPlayButton:{default:!0,type:Boolean},showPrevButton:{default:!0,type:Boolean},showNextButton:{default:!0,type:Boolean},showProgressBar:{default:!0,type:Boolean},beforePlay:{default:null,type:Function},beforePrev:{default:null,type:Function},beforeNext:{default:null,type:Function},isLoop:{type:Boolean,default:!0},progressInterval:{default:1e3,type:Number}},data:function(){return{isIOS:/iPhone|iPad|iPod/i.test(window.navigator.userAgent),timer:null,currentPlayIndex:0,isPlaying:!1,duration:"",currentTime:"",currentTimeAfterFormat:"",isDragging:!1}},methods:{onLoadedmetadata:function(e){this.duration=this.$refs.audio.duration,this.initProgressBarDrag(),this.$emit("loadedmetadata",e)},onTimeUpdate:function(e){this.$emit("timeupdate",e)},formatTime:function(e){return[parseInt(e/60%60),parseInt(e%60)].join(":").replace(/\b(\d)\b/g,"0$1")},onEnded:function(e){this.pause(),this.currentTimeAfterFormat=this.formatTime(this.$refs.audio.currentTime),this.$emit("ended",e),this.isLoop&&(this.playNext(),this.play())},initProgressBarDrag:function(){var e=this;this.$refs.audioProgressPoint.addEventListener("touchstart",(function(t){e.isDragging=!0}),!1),this.$refs.audioProgressPoint.addEventListener("touchmove",(function(t){var r=t.touches[0];return r.pageX<e.$refs.audioProgressWrap.offsetLeft?(e.$refs.audioProgressPoint.style.left=0,e.$refs.audioProgress.style.width=0,e.currentTime=0,void(e.currentTimeAfterFormat=e.formatTime(e.currentTime))):r.pageX>e.$refs.audioProgressWrap.offsetLeft+e.$refs.audioProgressWrap.offsetWidth?(e.$refs.audioProgressPoint.style.left=e.$refs.audioProgressWrap.offsetWidth-e.$refs.audioProgressPoint.offsetWidth+"px",e.$refs.audioProgress.style.width=e.$refs.audioProgressWrap.offsetWidth+"px",e.currentTime=e.duration-.1,void(e.currentTimeAfterFormat=e.formatTime(e.currentTime))):(e.setPointPosition(r.pageX),e.$refs.audioProgress.style.width=r.pageX-e.$refs.audioProgressWrap.offsetLeft+"px",e.currentTime=e.$refs.audioProgress.offsetWidth/e.$refs.audioProgressWrap.offsetWidth*e.duration,void(e.currentTimeAfterFormat=e.formatTime(e.currentTime)))}),!1),this.$refs.audioProgressPoint.addEventListener("touchend",(function(t){e.$refs.audio.currentTime=e.currentTime,e.isDragging=!1}),!1)},setPointPosition:function(e){this.$refs.audioProgressPoint.style.left=e-this.$refs.audioProgressPoint.offsetWidth/2-this.$refs.audioProgressWrap.offsetLeft+"px"},initProgressBarPoint:function(e){this.currentTime=(e.pageX-this.$refs.audioProgressWrap.offsetLeft)/this.$refs.audioProgressWrap.offsetWidth*this.duration,this.$refs.audio.currentTime=this.currentTime,this.setPointPosition(e.pageX),this.$refs.audioProgress.style.width=e.pageX-this.$refs.audioProgressWrap.offsetLeft+"px",this.currentTimeAfterFormat=this.formatTime(this.currentTime)},playing:function(){this.isDragging||(this.currentTimeAfterFormat=this.formatTime(this.$refs.audio.currentTime),this.$refs.audioProgress.style.width=this.$refs.audio.currentTime/this.$refs.audio.duration*this.$refs.audioProgressWrap.offsetWidth+"px",this.$refs.audioProgressPoint.style.left=this.$refs.audio.currentTime/this.$refs.audio.duration*(this.$refs.audioProgressWrap.offsetWidth-this.$refs.audioProgressPoint.offsetWidth/2)+"px",this.$emit("playing"))},play:function(){var e=this,t=function(){e.$refs.audio.play(),e.$nextTick((function(){e.playing(),e.timer=setInterval(e.playing,e.progressInterval),e.isPlaying=!0,e.$emit("play")}))};this.isIOS&&(this.$refs.audio.play(),this.$refs.audio.pause()),this.beforePlay?this.beforePlay((function(e){!1!==e&&t()})):t()},pause:function(){var e=this;this.$refs.audio.pause(),this.$nextTick((function(){clearInterval(e.timer),e.isPlaying=!1,e.$emit("pause")}))},playPrev:function(){var e=this;if(!(this.currentPlayIndex<=0)||this.isLoop){var t=function(){e.currentPlayIndex<=0&&e.isLoop?e.currentPlayIndex=e.audioList.length-1:e.currentPlayIndex--,e.$nextTick((function(){e.play(),e.$emit("play-prev")}))};this.beforePrev?this.beforePrev((function(e){!1!==e&&t()})):t()}},playNext:function(){var e=this;if(!(this.currentPlayIndex+1>=this.audioList.length)||this.isLoop){var t=function(){e.currentPlayIndex+1>=e.audioList.length&&e.isLoop?e.currentPlayIndex=0:e.currentPlayIndex++,e.$nextTick((function(){e.play(),e.$emit("play-next")}))};this.beforeNext?this.beforeNext((function(e){!1!==e&&t()})):t()}}},beforeDestroy:function(){this.pause()}},a=s;function u(e,t,r,i,n,o,s,a){var u,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(e,t){return u.call(t),d(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}r("f7be");var c=u(a,n,o,!1,null,null,null),d=c.exports,f=[d],l=function(e){f.forEach((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&l(window.Vue);var p={install:l};r.d(t,"AudioPlayer",(function(){return d})),t["default"]=p}})}))},b727:function(e,t,r){var i=r("0366"),n=r("44ad"),o=r("7b0b"),s=r("50c4"),a=r("65f0"),u=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,d=4==e,f=6==e,l=5==e||f;return function(p,h,g,m){for(var v,y,P=o(p),_=n(P),x=i(h,g,3),b=s(_.length),w=0,$=m||a,T=t?$(p,b):r?$(p,0):void 0;b>w;w++)if((l||w in _)&&(v=_[w],y=x(v,w,P),e))if(t)T[w]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return w;case 2:u.call(T,v)}else if(d)return!1;return f?-1:c||d?d:T}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},b792:function(e,t,r){e.exports=r.p+"assets/img/excel.png"},c610:function(e,t,r){},c975:function(e,t,r){"use strict";var i=r("23e7"),n=r("4d64").indexOf,o=r("a640"),s=r("ae40"),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,c=o("indexOf"),d=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:u||!c||!d},{indexOf:function(e){return u?a.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d81d:function(e,t,r){"use strict";var i=r("23e7"),n=r("b727").map,o=r("1dde"),s=r("ae40"),a=o("map"),u=s("map");i({target:"Array",proto:!0,forced:!a||!u},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e904:function(e,t,r){e.exports=r.p+"assets/img/audio.png"},fb6a:function(e,t,r){"use strict";var i=r("23e7"),n=r("861d"),o=r("e8b5"),s=r("23cb"),a=r("50c4"),u=r("fc6a"),c=r("8418"),d=r("b622"),f=r("1dde"),l=r("ae40"),p=f("slice"),h=l("slice",{ACCESSORS:!0,0:0,1:2}),g=d("species"),m=[].slice,v=Math.max;i({target:"Array",proto:!0,forced:!p||!h},{slice:function(e,t){var r,i,d,f=u(this),l=a(f.length),p=s(e,l),h=s(void 0===t?l:t,l);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[g],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return m.call(f,p,h);for(i=new(void 0===r?Array:r)(v(h-p,0)),d=0;p<h;p++,d++)p in f&&c(i,d,f[p]);return i.length=d,i}})}}]);