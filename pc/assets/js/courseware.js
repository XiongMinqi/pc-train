(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["courseware"],{"01ac":function(e,t,i){e.exports=i.p+"assets/img/other.png"},"25f0":function(e,t,i){"use strict";var a=i("6eeb"),s=i("825a"),r=i("d039"),o=i("ad6d"),n="toString",l=RegExp.prototype,u=l[n],c=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=n;(c||f)&&a(RegExp.prototype,n,(function(){var e=s(this),t=String(e.source),i=e.flags,a=String(void 0===i&&e instanceof RegExp&&!("flags"in l)?o.call(e):i);return"/"+t+"/"+a}),{unsafe:!0})},"3b84":function(e,t,i){e.exports=i.p+"assets/img/word.png"},"3d38":function(e,t,i){e.exports=i.p+"assets/img/picture.png"},"572d":function(e,t,i){"use strict";var a=i("cca7"),s=i.n(a);s.a},"5c0e":function(e,t,i){e.exports=i.p+"assets/img/movie.png"},6358:function(e,t,i){e.exports=i.p+"assets/img/ppt.png"},"77ef":function(e,t,i){e.exports=i.p+"assets/img/pdf.png"},"9c61":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"choose"},[a("div",{staticClass:"subject"},[a("el-select",{attrs:{disabled:"",placeholder:"请选择专业"},model:{value:e.subjectname,callback:function(t){e.subjectname=t},expression:"subjectname"}},e._l(e.subjectList,(function(e){return a("el-option",{key:e.key,attrs:{value:e.value}})})),1)],1),a("div",{staticClass:"classname"},[a("el-select",{attrs:{placeholder:"请选择科目"},model:{value:e.classname,callback:function(t){e.classname=t},expression:"classname"}},[a("el-option",{key:"",attrs:{value:"不限"}}),e._l(e.classList,(function(e){return a("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),a("div",{staticClass:"classname"},[a("el-select",{attrs:{placeholder:"请选择文档类型"},model:{value:e.typename,callback:function(t){e.typename=t},expression:"typename"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.key,attrs:{value:e.value}})})),1)],1),a("div",{staticClass:"classname"},[a("el-input",{attrs:{placeholder:"请输入课件名"},model:{value:e.courseName,callback:function(t){e.courseName=t},expression:"courseName"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.chooseClass}},[e._v("开始筛选")])],1)]),e.allList.length>0?a("div",[e.textList.length>0?a("div",[a("div",{staticClass:"words"},[e._v("文档")]),e._l(e.textList,(function(t,s){return a("div",{key:s,staticClass:"course",on:{click:function(i){return e.checkcourse(t)}}},[a("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[a("div",[".docx"==t.fileSuffix||".doc"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==t.fileSuffix||".xlsx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==t.fileSuffix||".pptx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("77ef"),alt:""}})]):".jpg"==t.fileSuffix||".png"==t.fileSuffix||".gif"==t.fileSuffix||".tif"==t.fileSuffix||".psd"==t.fileSuffix||".dng"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3d38"),alt:""}})]):".wma"==t.fileSuffix||".mp3"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("e904"),alt:""}})]):a("div",[a("img",{attrs:{src:i("01ac"),alt:""}})])]),a("div",[a("div",{staticClass:"msg"},[a("div",[e._v("课件名称: "+e._s(t.name))])]),a("div",{staticStyle:{"font-size":"14px"}},[a("div",[e._v("作者: "+e._s(t.author))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[a("div",[e._v("上传时间: "+e._s(t.uploadTime))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[a("div",[e._v("文件大小: "+e._s(t.fileSize)+"KB")])])])])])}))],2):e._e(),e.pictureList.length>0?a("div",[a("div",{staticClass:"words"},[e._v("图片、视频、音频")]),e._l(e.pictureList,(function(t,s){return a("div",{key:s,staticClass:"course",on:{click:function(i){return e.checkcourse(t)}}},[a("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[a("div",[".docx"==t.fileSuffix||".doc"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==t.fileSuffix||".xlsx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==t.fileSuffix||".pptx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("77ef"),alt:""}})]):".jpg"==t.fileSuffix||".png"==t.fileSuffix||".gif"==t.fileSuffix||".tif"==t.fileSuffix||".psd"==t.fileSuffix||".dng"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3d38"),alt:""}})]):".wma"==t.fileSuffix||".mp3"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("e904"),alt:""}})]):a("div",[a("img",{attrs:{src:i("01ac"),alt:""}})])]),a("div",[a("div",{staticClass:"msg"},[a("div",[e._v("课件名称: "+e._s(t.name))])]),a("div",{staticStyle:{"font-size":"14px"}},[a("div",[e._v("作者: "+e._s(t.author))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[a("div",[e._v("上传时间: "+e._s(t.uploadTime))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[a("div",[e._v("文件大小: "+e._s(t.fileSize)+"KB")])])])])])}))],2):e._e(),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[9,6,12,15,18],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]):a("div",{staticStyle:{"text-align":"center",padding:"30px"}},[e._v("暂无数据")]),a("el-dialog",{staticClass:"dialogVisible",attrs:{width:"90%",top:"1vh",title:"课件在线预览",visible:e.dialogVisible,"close-on-click-modal":!1,"show-close":!1,"modal-append-to-body":!0},on:{close:e.close,open:e.open,"update:visible":function(t){e.dialogVisible=t}}},[a("div",[e.videoPlayer?a("div",[a("vueVideoPlayer",{attrs:{src:e.videoPlayer,cover_url:e.openVideoImg}})],1):e._e(),e.pdfUrl?a("div",{staticStyle:{height:"74vh"}},[a("iframe",{staticClass:"filename",attrs:{src:e.pdfUrl,width:"100%",height:"100%",frameborder:"0"}})]):e._e(),e.wordUrl?a("div",{staticStyle:{height:"74vh"}},[a("iframe",{staticClass:"filename",attrs:{src:e.wordUrl,width:"100%",height:"100%",frameborder:"0"}})]):e._e(),e.audioUrl.length>0?a("div",{staticStyle:{height:"60vh"}},[a("AudioPlayer",{attrs:{"audio-list":e.audioUrl,"show-prev-button":!1,"show-next-button":!1,isLoop:!1,progressInterval:"10"}})],1):e._e(),e.pictureUrl?a("div",{staticStyle:{height:"74vh"}},[a("img",{attrs:{src:e.pictureUrl,alt:""}})]):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])])],1)},s=[],r=(i("c975"),i("d81d"),i("fb6a"),i("b0c0"),i("d3b7"),i("25f0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"vueVideoPlayer"}},[i("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions}})],1)}),o=[],n={name:"vueVideoPlayer",props:{src:{type:String},cover_url:{type:String}},data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:10",fluid:!0,sources:[{src:this.src,type:"video/mp4"}],poster:this.cover_url,notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0}}}}},l=n,u=i("2877"),c=Object(u["a"])(l,r,o,!1,null,"a972a9fe",null),f=c.exports,d=i("ac8a"),p=(i("c610"),{data:function(){return{videoPlayer:"",currentPage:1,total:0,pdfUrl:"",audioUrl:[],wordUrl:"",pictureUrl:"",dialogVisible:!1,openVideoImg:"../../assets/img/maliao.png",subjectname:"",coursewareId:"",peopleId:"",classname:"不限",beginTime:"",courseName:"",endTime:"",classList:[],typeList:[{key:null,value:"不限"},{key:1,value:"文档"},{key:2,value:"图片"},{key:3,value:"视频"},{key:4,value:"音频"}],typename:"不限",subjectList:[],data:{object:{subjectId:null,type:null,name:null,majorId:null,authorDepartment:null,author:null},limit:9,page:1},allList:[],visible:!1,textList:[],pictureList:[],loading:!0}},components:{vueVideoPlayer:f,AudioPlayer:d["AudioPlayer"]},methods:{handleSizeChange:function(e){this.loading=!0,this.data.page=1,this.data.limit=e,this.getAllLearn()},handleCurrentChange:function(e){this.loading=!0,this.data.page=e,this.getAllLearn()},open:function(){this.beginTime="",this.endTime="",this.beginTime=Date.parse(new Date)},close:function(){this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.endTime=Date.parse(new Date);var e=Math.round((this.endTime-this.beginTime)/6e4);if(e>=1){var t={coursewareId:this.coursewareId,minutes:e};this.$api.saveMyLog(t).then().catch()}},chooseClass:function(){var e=this;this.data.page=1,"不限"==this.classname?this.data.object.subjectId="":this.classList.map((function(t){t.value==e.classname&&(e.data.object.subjectId=t.key)})),this.typeList.map((function(t){t.value==e.typename&&(e.data.object.type=t.key)})),""!==this.courseName?this.data.object.name=this.courseName:""===this.courseName&&(this.data.object.name=null),this.getAllLearn()},checkcourse:function(e){var t=this;this.coursewareId=e.id,this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.$api.geturl(e.id).then((function(i){1e3===i.data.code&&t.$router.push({name:"login",path:"/login"}),0===i.data.code?".docx"===e.fileSuffix||".doc"===e.fileSuffix||".xls"===e.fileSuffix||".xlsx"===e.fileSuffix||".ppt"===e.fileSuffix||".pptx"===e.fileSuffix?(t.wordUrl="https://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent(i.data.data[0]),t.dialogVisible=!0,console.log(t.wordUrl)):".mp4"===e.fileSuffix?(t.videoPlayer=i.data.data[0],t.dialogVisible=!0):".pdf"===e.fileSuffix?(t.pdfUrl=i.data.data[0],t.dialogVisible=!0):".mp3"===e.fileSuffix?(t.audioUrl.push(i.data.data[0]),t.dialogVisible=!0):".jpg"!=e.fileSuffix&&".png"!=e.fileSuffix&&".gif"!=e.fileSuffix&&".tif"!=e.fileSuffix&&".psd"!=e.fileSuffix&&".dng"!=e.fileSuffix||(t.pictureUrl=i.data.data[0],t.dialogVisible=!0):t.$message({message:i.data.msg,type:"warning"})})).catch((function(e){console.log(e)}))},timeFormat:function(e){var t="",i=new Date(e),a=i.getFullYear(),s=i.getMonth()+1,r=i.getDate();i.getHours(),i.getMinutes(),i.getSeconds();return t+=a+"/",s<10&&(t+="0"),t+=s+"/",r<10&&(t+="0"),t+=r+" ",t},twoNumber:function(e){var t=e.toString();if(-1==t.indexOf("."))return e+".00";var i=t.length,a=t.indexOf(".");return i>a+2?t.slice(0,a+3):i==a+2?t+"0":t},getdict:function(){var e=this;this.$grade.getdict().then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.classList=t.data.data[0]["科目名称"],e.subjectList=t.data.data[0]["专业名称"]):e.$message({message:t.data.msg,type:"warning"})})).catch((function(e){console.log(e)}))},getAllLearn:function(){var e=this;this.$api.getLearn(this.data).then((function(t){e.loading=!1,1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.allList=t.data.data,e.total=t.data.count,e.textList=[],e.pictureList=[],e.allList.map((function(t){t.uploadTime=e.timeFormat(t.uploadTime),t.fileSize=e.twoNumber(t.fileSize/1024),".jpg"===t.fileSuffix||".png"===t.fileSuffix||".jpeg"===t.fileSuffix||".bmp"===t.fileSuffix||".gif"===t.fileSuffix||".wmv"===t.fileSuffix||".avi"===t.fileSuffix||".rm"===t.fileSuffix||".flv"===t.fileSuffix||".mp4"===t.fileSuffix||".wma"===t.fileSuffix||".mp3"===t.fileSuffix?e.pictureList.push(t):e.textList.push(t)}))):e.$message({message:t.data.msg,type:"warning"})})).catch((function(t){e.loading=!1}))}},mounted:function(){this.getdict(),this.getAllLearn();var e=JSON.parse(localStorage.getItem("userInfo"));this.peopleId=e.userId},watch:{},computed:{}}),h=p,g=(i("572d"),Object(u["a"])(h,a,s,!1,null,"25824180",null));t["default"]=g.exports},a640:function(e,t,i){"use strict";var a=i("d039");e.exports=function(e,t){var i=[][e];return!!i&&a((function(){i.call(null,t||function(){throw 1},1)}))}},ac8a:function(e,t,i){(function(t,i){e.exports=i()})("undefined"!==typeof self&&self,(function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s="fb15")}({"0aac":function(e,t){!function(e){var t,i='<svg><symbol id="icon-play" viewBox="0 0 1024 1024"><path d="M511.2269 64.4608c-246.1655 0-446.4425 200.278-446.4425 446.4425 0 246.1655 200.277 446.4435 446.4425 446.4435s446.4425-200.278 446.4425-446.4435C957.6694 264.7388 757.3914 64.4608 511.2269 64.4608zM511.2269 901.5409c-215.4015 0-390.6376-175.2361-390.6376-390.6376 0-215.4015 175.2361-390.6365 390.6376-390.6365 215.4015 0 390.6365 175.2351 390.6365 390.6365C901.8634 726.3048 726.6273 901.5409 511.2269 901.5409zM705.3455 459.649l-238.807-129.622c-11.3347-6.186-23.5151-9.4556-35.2328-9.4556-34.5508 0-59.5927 26.5134-59.5927 63.0272v254.61248c0 36.5117 25.0419 62.9975 59.5927 63.0262 11.7166 0 23.8971-3.2696 35.1519-9.3993l240.087-129.7326c21.718-11.8262 34.1985-30.2735 34.1985-50.5743C740.7432 490.8216 727.852 471.9114 705.3455 459.649zM679.9227 513.0568 439.8356 642.7884c-4.1974 2.3183-7.168 2.6429-8.5299 2.6429-1.5247 0-3.7878 0-3.7878-7.2212V383.59859199999994c0-7.2212 2.263-7.2212 3.7878-7.2212 1.3629 0 4.3325 0.3543 8.5555 2.6429l238.8357 129.6507c1.7172 0.9533 3.0515 1.8524 4.0878 2.6429C682.0219 511.8587 681.0665 512.4577 679.9227 513.0568z"  ></path></symbol><symbol id="icon-play-pause" viewBox="0 0 1024 1024"><path d="M960 512c0-247.36-200.576-448-448-448C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448C759.424 960 960 759.424 960 512zM128 511.936c0-212.032 171.904-384 384-384s384 171.968 384 384-171.904 384-384 384S128 723.968 128 511.936zM406.784 678.208c-22.656 0.064-41.088-19.072-41.088-42.56L365.696 383.04c0-23.68 18.432-42.688 41.152-42.688C429.568 340.224 448 359.488 448 382.976l0 252.544C448 659.136 429.568 678.272 406.784 678.208zM617.088 678.208C594.368 678.272 576 659.136 576 635.648L576 383.04c0-23.68 18.432-42.688 41.152-42.688 22.656-0.128 41.152 19.136 41.152 42.624l0 252.544C658.24 659.136 639.808 678.272 617.088 678.208z"  ></path></symbol><symbol id="icon-play-prev" viewBox="0 0 1024 1024"><path d="M128 102.4V928c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32V102.4c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32z m646.028 41.395l-404.352 331.09c-27.383 22.42-27.435 58.886 0 81.35l404.352 331.09c27.382 22.42 49.676 12.003 49.676-23.366V167.16c0-35.646-22.24-45.83-49.676-23.365z m-40.546-49.518c69.12-56.597 154.222-16.897 154.222 72.883v696.8c0 89.481-85.14 129.447-154.222 72.883L329.13 605.753c-58.7-48.064-58.662-132.353 0-180.386l404.352-331.09z" fill="" ></path></symbol><symbol id="icon-play-next" viewBox="0 0 1024 1024"><path d="M889.6 921.6V96c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v825.6c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32z m-646.028-41.395l404.352-331.09c27.383-22.42 27.435-58.886 0-81.35l-404.352-331.09c-27.382-22.42-49.676-12.003-49.676 23.366V856.84c0 35.646 22.24 45.83 49.676 23.365z m40.546 49.518c-69.12 56.597-154.222 16.897-154.222-72.883v-696.8c0-89.481 85.14-129.447 154.222-72.883l404.352 331.09c58.7 48.064 58.662 132.353 0 180.386l-404.352 331.09z" fill="" ></path></symbol></svg>',a=(t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss");if(a&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var i=function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()};document.addEventListener("DOMContentLoaded",i,!1)}else document.attachEvent&&(a=t,s=e.document,r=!1,o=function(){r||(r=!0,a())},(n=function(){try{s.documentElement.doScroll("left")}catch(t){return void setTimeout(n,50)}o()})(),s.onreadystatechange=function(){"complete"==s.readyState&&(s.onreadystatechange=null,o())});var a,s,r,o,n}((function(){var e,t,a,s,r,o;(e=document.createElement("div")).innerHTML=i,i=null,(t=e.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",a=t,(s=document.body).firstChild?(r=a,(o=s.firstChild).parentNode.insertBefore(r,o)):s.appendChild(a))}))}(window)},1054:function(e,t,i){},f6fd:function(e,t){(function(e){var t="currentScript",i=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(a){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(a.stack)||[!1])[1];for(e in i)if(i[e].src==t||"interactive"==i[e].readyState)return i[e];return null}}})})(document)},f7be:function(e,t,i){"use strict";var a=i("1054"),s=i.n(a);s.a},fb15:function(e,t,i){"use strict";var a;i.r(t),"undefined"!==typeof window&&(i("f6fd"),(a=window.document.currentScript)&&(a=a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(i.p=a[1])),i("0aac");var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"audio-player"},[i("div",{staticClass:"audio__btn-wrap"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showPrevButton,expression:"showPrevButton"}],staticClass:"audio__play--previous",class:{disable:!e.isLoop&&0===e.currentPlayIndex},on:{click:e.playPrev}},[i("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-play-prev"}})])]),!e.isPlaying&&e.showPlayButton?i("div",{staticClass:"audio__play--start",on:{click:e.play}},[i("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-play"}})])]):e.showPlayButton?i("div",{staticClass:"audio__play--pause",on:{click:e.pause}},[i("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-play-pause"}})])]):e._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showNextButton,expression:"showNextButton"}],staticClass:"audio__play--next",class:{disable:!e.isLoop&&e.currentPlayIndex===e.audioList.length-1},on:{click:e.playNext}},[i("svg",{staticClass:"audio__play__icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-play-next"}})])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showProgressBar,expression:"showProgressBar"}],ref:"audioProgressWrap",staticClass:"audio__progress-wrap",on:{click:e.initProgressBarPoint}},[i("div",{ref:"audioProgress",staticClass:"audio__progress"}),i("div",{ref:"audioProgressPoint",staticClass:"audio__progress-point"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showProgressBar,expression:"showProgressBar"}],staticClass:"audio__time-wrap"},[i("div",{staticClass:"audio__current-time"},[e._v(" "+e._s(e.currentTimeAfterFormat)+" ")]),i("div",{staticClass:"audio__duration"},[e._v(" "+e._s(e.formatTime(e.duration))+" ")])]),i("audio",{ref:"audio",staticClass:"audio-player__audio",attrs:{src:e.audioList[e.currentPlayIndex]},on:{ended:e.onEnded,timeupdate:e.onTimeUpdate,loadedmetadata:e.onLoadedmetadata}},[e._v(" 浏览器太老咯，请升级浏览器吧~ ")])])},r=[],o={name:"AudioPlayer",props:{audioList:{default:null,type:Array},showPlayButton:{default:!0,type:Boolean},showPrevButton:{default:!0,type:Boolean},showNextButton:{default:!0,type:Boolean},showProgressBar:{default:!0,type:Boolean},beforePlay:{default:null,type:Function},beforePrev:{default:null,type:Function},beforeNext:{default:null,type:Function},isLoop:{type:Boolean,default:!0},progressInterval:{default:1e3,type:Number}},data:function(){return{isIOS:/iPhone|iPad|iPod/i.test(window.navigator.userAgent),timer:null,currentPlayIndex:0,isPlaying:!1,duration:"",currentTime:"",currentTimeAfterFormat:"",isDragging:!1}},methods:{onLoadedmetadata:function(e){this.duration=this.$refs.audio.duration,this.initProgressBarDrag(),this.$emit("loadedmetadata",e)},onTimeUpdate:function(e){this.$emit("timeupdate",e)},formatTime:function(e){return[parseInt(e/60%60),parseInt(e%60)].join(":").replace(/\b(\d)\b/g,"0$1")},onEnded:function(e){this.pause(),this.currentTimeAfterFormat=this.formatTime(this.$refs.audio.currentTime),this.$emit("ended",e),this.isLoop&&(this.playNext(),this.play())},initProgressBarDrag:function(){var e=this;this.$refs.audioProgressPoint.addEventListener("touchstart",(function(t){e.isDragging=!0}),!1),this.$refs.audioProgressPoint.addEventListener("touchmove",(function(t){var i=t.touches[0];return i.pageX<e.$refs.audioProgressWrap.offsetLeft?(e.$refs.audioProgressPoint.style.left=0,e.$refs.audioProgress.style.width=0,e.currentTime=0,void(e.currentTimeAfterFormat=e.formatTime(e.currentTime))):i.pageX>e.$refs.audioProgressWrap.offsetLeft+e.$refs.audioProgressWrap.offsetWidth?(e.$refs.audioProgressPoint.style.left=e.$refs.audioProgressWrap.offsetWidth-e.$refs.audioProgressPoint.offsetWidth+"px",e.$refs.audioProgress.style.width=e.$refs.audioProgressWrap.offsetWidth+"px",e.currentTime=e.duration-.1,void(e.currentTimeAfterFormat=e.formatTime(e.currentTime))):(e.setPointPosition(i.pageX),e.$refs.audioProgress.style.width=i.pageX-e.$refs.audioProgressWrap.offsetLeft+"px",e.currentTime=e.$refs.audioProgress.offsetWidth/e.$refs.audioProgressWrap.offsetWidth*e.duration,void(e.currentTimeAfterFormat=e.formatTime(e.currentTime)))}),!1),this.$refs.audioProgressPoint.addEventListener("touchend",(function(t){e.$refs.audio.currentTime=e.currentTime,e.isDragging=!1}),!1)},setPointPosition:function(e){this.$refs.audioProgressPoint.style.left=e-this.$refs.audioProgressPoint.offsetWidth/2-this.$refs.audioProgressWrap.offsetLeft+"px"},initProgressBarPoint:function(e){this.currentTime=(e.pageX-this.$refs.audioProgressWrap.offsetLeft)/this.$refs.audioProgressWrap.offsetWidth*this.duration,this.$refs.audio.currentTime=this.currentTime,this.setPointPosition(e.pageX),this.$refs.audioProgress.style.width=e.pageX-this.$refs.audioProgressWrap.offsetLeft+"px",this.currentTimeAfterFormat=this.formatTime(this.currentTime)},playing:function(){this.isDragging||(this.currentTimeAfterFormat=this.formatTime(this.$refs.audio.currentTime),this.$refs.audioProgress.style.width=this.$refs.audio.currentTime/this.$refs.audio.duration*this.$refs.audioProgressWrap.offsetWidth+"px",this.$refs.audioProgressPoint.style.left=this.$refs.audio.currentTime/this.$refs.audio.duration*(this.$refs.audioProgressWrap.offsetWidth-this.$refs.audioProgressPoint.offsetWidth/2)+"px",this.$emit("playing"))},play:function(){var e=this,t=function(){e.$refs.audio.play(),e.$nextTick((function(){e.playing(),e.timer=setInterval(e.playing,e.progressInterval),e.isPlaying=!0,e.$emit("play")}))};this.isIOS&&(this.$refs.audio.play(),this.$refs.audio.pause()),this.beforePlay?this.beforePlay((function(e){!1!==e&&t()})):t()},pause:function(){var e=this;this.$refs.audio.pause(),this.$nextTick((function(){clearInterval(e.timer),e.isPlaying=!1,e.$emit("pause")}))},playPrev:function(){var e=this;if(!(this.currentPlayIndex<=0)||this.isLoop){var t=function(){e.currentPlayIndex<=0&&e.isLoop?e.currentPlayIndex=e.audioList.length-1:e.currentPlayIndex--,e.$nextTick((function(){e.play(),e.$emit("play-prev")}))};this.beforePrev?this.beforePrev((function(e){!1!==e&&t()})):t()}},playNext:function(){var e=this;if(!(this.currentPlayIndex+1>=this.audioList.length)||this.isLoop){var t=function(){e.currentPlayIndex+1>=e.audioList.length&&e.isLoop?e.currentPlayIndex=0:e.currentPlayIndex++,e.$nextTick((function(){e.play(),e.$emit("play-next")}))};this.beforeNext?this.beforeNext((function(e){!1!==e&&t()})):t()}}},beforeDestroy:function(){this.pause()}},n=o;function l(e,t,i,a,s,r,o,n){var l,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),a&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):s&&(l=n?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:u}}i("f7be");var u=l(n,s,r,!1,null,null,null),c=u.exports,f=[c],d=function(e){f.forEach((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&d(window.Vue);var p={install:d};i.d(t,"AudioPlayer",(function(){return c})),t["default"]=p}})}))},b0c0:function(e,t,i){var a=i("83ab"),s=i("9bf2").f,r=Function.prototype,o=r.toString,n=/^\s*function ([^ (]*)/,l="name";a&&!(l in r)&&s(r,l,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(e){return""}}})},b727:function(e,t,i){var a=i("0366"),s=i("44ad"),r=i("7b0b"),o=i("50c4"),n=i("65f0"),l=[].push,u=function(e){var t=1==e,i=2==e,u=3==e,c=4==e,f=6==e,d=5==e||f;return function(p,h,g,m){for(var v,y,x=r(p),b=s(x),_=a(h,g,3),P=o(b.length),S=0,w=m||n,C=t?w(p,P):i?w(p,0):void 0;P>S;S++)if((d||S in b)&&(v=b[S],y=_(v,S,x),e))if(t)C[S]=y;else if(y)switch(e){case 3:return!0;case 5:return v;case 6:return S;case 2:l.call(C,v)}else if(c)return!1;return f?-1:u||c?c:C}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},b792:function(e,t,i){e.exports=i.p+"assets/img/excel.png"},c610:function(e,t,i){},c975:function(e,t,i){"use strict";var a=i("23e7"),s=i("4d64").indexOf,r=i("a640"),o=i("ae40"),n=[].indexOf,l=!!n&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),c=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:l||!u||!c},{indexOf:function(e){return l?n.apply(this,arguments)||0:s(this,e,arguments.length>1?arguments[1]:void 0)}})},cca7:function(e,t,i){},d81d:function(e,t,i){"use strict";var a=i("23e7"),s=i("b727").map,r=i("1dde"),o=i("ae40"),n=r("map"),l=o("map");a({target:"Array",proto:!0,forced:!n||!l},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},e904:function(e,t,i){e.exports=i.p+"assets/img/audio.png"},fb6a:function(e,t,i){"use strict";var a=i("23e7"),s=i("861d"),r=i("e8b5"),o=i("23cb"),n=i("50c4"),l=i("fc6a"),u=i("8418"),c=i("b622"),f=i("1dde"),d=i("ae40"),p=f("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),g=c("species"),m=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!p||!h},{slice:function(e,t){var i,a,c,f=l(this),d=n(f.length),p=o(e,d),h=o(void 0===t?d:t,d);if(r(f)&&(i=f.constructor,"function"!=typeof i||i!==Array&&!r(i.prototype)?s(i)&&(i=i[g],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return m.call(f,p,h);for(a=new(void 0===i?Array:i)(v(h-p,0)),c=0;p<h;p++,c++)p in f&&u(a,c,f[p]);return a.length=c,a}})}}]);