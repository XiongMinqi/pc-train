(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["doMission"],{1276:function(t,e,i){"use strict";var s=i("d784"),n=i("44e7"),a=i("825a"),r=i("1d80"),o=i("4840"),l=i("8aa5"),c=i("50c4"),u=i("14c3"),f=i("9263"),d=i("d039"),h=[].push,p=Math.min,g=4294967295,v=!d((function(){return!RegExp(g,"y")}));s("split",2,(function(t,e,i){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var s=String(r(this)),a=void 0===i?g:i>>>0;if(0===a)return[];if(void 0===t)return[s];if(!n(t))return e.call(s,t,a);var o,l,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,d+"g");while(o=f.call(v,s)){if(l=v.lastIndex,l>p&&(u.push(s.slice(p,o.index)),o.length>1&&o.index<s.length&&h.apply(u,o.slice(1)),c=o[0].length,p=l,u.length>=a))break;v.lastIndex===o.index&&v.lastIndex++}return p===s.length?!c&&v.test("")||u.push(""):u.push(s.slice(p)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var n=r(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n,i):s.call(String(n),e,i)},function(t,n){var r=i(s,t,this,n,s!==e);if(r.done)return r.value;var f=a(t),d=String(this),h=o(f,RegExp),m=f.unicode,x=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),w=new h(v?f:"^(?:"+f.source+")",x),b=void 0===n?g:n>>>0;if(0===b)return[];if(0===d.length)return null===u(w,d)?[d]:[];var _=0,y=0,S=[];while(y<d.length){w.lastIndex=v?y:0;var L,I=u(w,v?d:d.slice(y));if(null===I||(L=p(c(w.lastIndex+(v?0:y)),d.length))===_)y=l(d,y,m);else{if(S.push(d.slice(_,y)),S.length===b)return S;for(var k=1;k<=I.length-1;k++)if(S.push(I[k]),S.length===b)return S;y=_=L}}return S.push(d.slice(_)),S}]}),!v)},"1ff8":function(t,e,i){},2710:function(t,e,i){},"34d2":function(t,e,i){"use strict";var s=i("2710"),n=i.n(s);n.a},"4ca1":function(t,e,i){},5369:function(t,e,i){},"5e73":function(t,e,i){},"63ac":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("div",{staticClass:"backLastPage",on:{click:t.backLastPage}},[s("i",{staticClass:"el-icon-arrow-left"}),t._v("返回 ")]),s("el-tabs",{attrs:{stretch:!0},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:"课件",name:"first"}},[t.coursewareList.length>0?s("div",[t.textList.length>0?s("div",[s("el-divider",[t._v("文档")]),t._l(t.textList,(function(e,n){return s("div",{key:n,staticClass:"course",on:{click:function(i){return t.checkcourse(e)}}},[s("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[s("div",[".docx"==e.fileSuffix||".doc"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==e.fileSuffix||".xlsx"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==e.fileSuffix||".pptx"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("77ef"),alt:""}})]):".mp3"==e.fileSuffix||".wma"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("e904"),alt:""}})]):".jpg"==e.fileSuffix||".png"==e.fileSuffix||".gif"==e.fileSuffix||".tif"==e.fileSuffix||".psd"==e.fileSuffix||".dng"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("3d38"),alt:""}})]):s("div",[s("img",{attrs:{src:i("01ac"),alt:""}})])]),s("div",[s("div",{staticClass:"msg"},[s("div",[t._v("课件名称: "+t._s(e.name))])]),s("div",{staticStyle:{"font-size":"14px"}},[s("div",[t._v("作者: "+t._s(e.author))])]),s("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[s("div",[t._v("上传时间: "+t._s(e.uploadTime))])]),s("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[s("div",[t._v("文件大小: "+t._s(e.fileSize)+"KB")])])])])])}))],2):t._e(),t.pictureList.length>0?s("div",[s("el-divider",[t._v("图片、视频、音频")]),t._l(t.pictureList,(function(e,n){return s("div",{key:n,staticClass:"course",on:{click:function(i){return t.checkcourse(e)}}},[s("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[s("div",[".docx"==e.fileSuffix||".doc"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==e.fileSuffix||".xlsx"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==e.fileSuffix||".pptx"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("5c0e"),alt:""}})]):".mp3"==e.fileSuffix||".wma"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("e904"),alt:""}})]):".pdf"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("77ef"),alt:""}})]):".jpg"==e.fileSuffix||".png"==e.fileSuffix||".gif"==e.fileSuffix||".tif"==e.fileSuffix||".psd"==e.fileSuffix||".dng"==e.fileSuffix?s("div",[s("img",{attrs:{src:i("3d38"),alt:""}})]):s("div",[s("img",{attrs:{src:i("01ac"),alt:""}})])]),s("div",[s("div",{staticClass:"msg"},[s("div",[t._v("课件名称: "+t._s(e.name))])]),s("div",{staticStyle:{"font-size":"14px"}},[s("div",[t._v("作者: "+t._s(e.author))])]),s("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[s("div",[t._v("上传时间: "+t._s(e.uploadTime))])]),s("div",{staticClass:"desc",staticStyle:{"font-size":"14px"}},[s("div",[t._v("文件大小: "+t._s(e.fileSize)+"KB")])])])])])}))],2):t._e()]):s("div",{staticClass:"else"})]),s("el-tab-pane",{attrs:{label:"练习题",name:"second"}},[t.practiseList.length>0?s("div",[t._l(t.practiseList,(function(e,i){return s("div",{key:i},[s("div",{staticClass:"title"},[s("div",{staticStyle:{width:"2%"}},[s("div",i<9?[t._v("0"+t._s(i+1)+"、")]:[t._v(t._s(i+1)+"、")])]),s("div",[0===e.type?s("span",[t._v("【单选】")]):t._e(),1===e.type?s("span",[t._v("【多选】")]):t._e(),2===e.type?s("span",[t._v("【填空】")]):t._e(),3===e.type?s("span",[t._v("【判断】")]):t._e(),4===e.type?s("span",[t._v("【名词解释】")]):t._e(),5===e.type?s("span",[t._v("【问答】")]):t._e()]),s("div",{staticStyle:{width:"88%"}},[t._v(t._s(e.content))])]),s("div",{staticClass:"answer"},[0===e.type?s("div",[s("radio",{attrs:{options:t.practiseList,index:i,answer:t.answerList}})],1):t._e(),1===e.type?s("div",[s("checkbox",{attrs:{options:t.practiseList,index:i,answer:t.answerList}})],1):t._e(),2===e.type?s("div",[s("fillBlanks",{attrs:{options:t.practiseList,index:i,answer:t.answerList}})],1):t._e(),3===e.type?s("div",[s("judge",{attrs:{options:t.practiseList,index:i,answer:t.answerList}})],1):t._e(),4===e.type?s("div",[s("nounExplanation",{attrs:{options:t.practiseList,index:i,answer:t.answerList}})],1):t._e(),5===e.type?s("div",[s("explain",{attrs:{options:t.practiseList,index:i,answer:t.answerList}})],1):t._e()])])})),s("div",{staticClass:"block"},[s("el-button",{attrs:{type:"primary",round:""},on:{click:t.submit}},[t._v("提交练习")])],1)],2):s("div",{staticClass:"else"})])],1),s("el-dialog",{staticClass:"dialogVisible",attrs:{width:"90%",top:"1vh",title:"课件在线预览",visible:t.dialogVisible,"close-on-click-modal":!1,"show-close":!1,"modal-append-to-body":!0},on:{close:t.close,open:t.open,"update:visible":function(e){t.dialogVisible=e}}},[s("div",[t.videoPlayer?s("div",[s("vueVideoPlayer",{attrs:{src:t.videoPlayer,cover_url:t.openVideoImg}})],1):t._e(),t.pdfUrl?s("div",{staticStyle:{height:"74vh"}},[s("iframe",{staticClass:"filename",attrs:{src:t.pdfUrl,width:"100%",height:"100%",frameborder:"0"}})]):t._e(),t.wordUrl?s("div",{staticStyle:{height:"74vh"}},[s("iframe",{staticClass:"filename",attrs:{src:t.wordUrl,width:"100%",height:"100%",frameborder:"0"}})]):t._e(),t.audioUrl.length>0?s("div",{staticStyle:{height:"60vh"}},[s("AudioPlayer",{attrs:{"audio-list":t.audioUrl,"show-prev-button":!1,"show-next-button":!1,isLoop:!1,progressInterval:"10"}})],1):t._e(),t.pictureUrl?s("div",{staticStyle:{height:"74vh"}},[s("img",{attrs:{src:t.pictureUrl,alt:""}})]):t._e(),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])])],1)},n=[],a=(i("c975"),i("d81d"),i("fb6a"),i("a9e3"),i("d3b7"),i("25f0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list.options,(function(e,s){return i("div",{key:s,on:{change:t.changeRadio}},[i("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[0===s?i("span",[i("el-radio",{attrs:{label:0}},[t._v("A、"+t._s(e.content))])],1):t._e(),1===s?i("span",[i("el-radio",{attrs:{label:1}},[t._v("B、"+t._s(e.content))])],1):t._e(),2===s?i("span",[i("el-radio",{attrs:{label:2}},[t._v("C、"+t._s(e.content))])],1):t._e(),3===s?i("span",[i("el-radio",{attrs:{label:3}},[t._v("D、"+t._s(e.content))])],1):t._e()])],1)})),0)}),r=[],o={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Array,default:function(){return[]}}},data:function(){return{radio:10,list:{},answerInfo:"",answerList:[]}},components:{},methods:{changeRadio:function(){"0"==this.radio&&(this.answerInfo="",this.answerInfo="A"),"1"==this.radio&&(this.answerInfo="",this.answerInfo="B"),"2"==this.radio&&(this.answerInfo="",this.answerInfo="C"),"3"==this.radio&&(this.answerInfo="",this.answerInfo="D"),this.$store.state.practiseList[this.list.assignmentQuestionId]=this.answerInfo}},mounted:function(){this.list=this.options[this.index];var t=this.answer[this.index];t&&(this.$store.state.practiseList[this.list.assignmentQuestionId]=t.content,"A"===t.content&&(this.radio=0),"B"===t.content&&(this.radio=1),"C"===t.content&&(this.radio=2),"D"===t.content&&(this.radio=3),"E"===t.content&&(this.radio=4))},watch:{},computed:{}},l=o,c=(i("66d4"),i("2877")),u=Object(c["a"])(l,a,r,!1,null,"e05030a6",null),f=u.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list.options,(function(e,s){return i("div",{key:s,on:{change:t.changeCheckbox}},[i("el-checkbox-group",{model:{value:t.checkBoxList,callback:function(e){t.checkBoxList=e},expression:"checkBoxList"}},[0===s?i("span",[i("el-checkbox",{attrs:{label:"0"}},[t._v("A、"+t._s(e.content))])],1):t._e(),1===s?i("span",[i("el-checkbox",{attrs:{label:"1"}},[t._v("B、"+t._s(e.content))])],1):t._e(),2===s?i("span",[i("el-checkbox",{attrs:{label:"2"}},[t._v("C、"+t._s(e.content))])],1):t._e(),3===s?i("span",[i("el-checkbox",{attrs:{label:"3"}},[t._v("D、"+t._s(e.content))])],1):t._e(),4===s?i("span",[i("el-checkbox",{attrs:{label:"4"}},[t._v("E、"+t._s(e.content))])],1):t._e(),5===s?i("span",[i("el-checkbox",{attrs:{label:"5"}},[t._v("F、"+t._s(e.content))])],1):t._e()])],1)})),0)},h=[],p=(i("a434"),i("ac1f"),i("1276"),{props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Array,default:function(){return[]}}},data:function(){return{checkBoxList:[],list:{},radio:"",answerInfo:[]}},components:{},methods:{uniq:function(t){var e=["A","B","C","D","E","F"],i=[];return e.map((function(e){t.map((function(t){e==t&&i.push(e)}))})),i},changeCheckbox:function(){var t=this;if(this.answerInfo=[],this.checkBoxList.map((function(e){"0"==e&&t.answerInfo.push("A"),"1"==e&&t.answerInfo.push("B"),"2"==e&&t.answerInfo.push("C"),"3"==e&&t.answerInfo.push("D"),"4"==e&&t.answerInfo.push("E"),"5"==e&&t.answerInfo.push("F")})),this.answerInfo=this.uniq(this.answerInfo),this.answerInfo.length>0){var e="";this.answerInfo.map((function(t,i){e=0===i?t:e+"|"+t})),this.$store.state.practiseList[this.list.assignmentQuestionId]=e}else delete this.$store.state.practiseList[this.list.assignmentQuestionId]}},mounted:function(){var t=this;this.list=this.options[this.index];var e=this.answer[this.index];if(e&&""!==e.content){this.$store.state.practiseList[this.list.assignmentQuestionId]=e.content;var i=e.content.split("");i.map((function(t,e){"|"===t&&i.splice(e,1)})),i.map((function(e){"A"===e&&t.checkBoxList.push("0"),"B"===e&&t.checkBoxList.push("1"),"C"===e&&t.checkBoxList.push("2"),"D"===e&&t.checkBoxList.push("3"),"E"===e&&t.checkBoxList.push("4"),"F"===e&&t.checkBoxList.push("5")}))}},watch:{},computed:{}}),g=p,v=Object(c["a"])(g,d,h,!1,null,"08321cfc",null),m=v.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.fillList,(function(e,s){return i("div",{key:s},[i("div",[i("el-input",{attrs:{type:"textarea",rows:1,placeholder:"请输入内容"},on:{input:function(e){return t.inputInfo(s)}},model:{value:t.textarea[s],callback:function(e){t.$set(t.textarea,s,e)},expression:"textarea[index]"}})],1)])})),0)},w=[],b={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Array,default:function(){return[]}}},data:function(){return{textarea:[""],answerInfo:[],list:{},fillList:[],number:-1,arr:[]}},components:{},methods:{inputInfo:function(t){var e=this,i="";this.fillList[t]=this.textarea[t],this.fillList.map((function(t,s){i=0===s?t:i+"|"+t,""!==t&&e.arr.push(t)})),this.arr.length>0?this.$store.state.practiseList[this.list.assignmentQuestionId]=i:delete this.$store.state.practiseList[this.list.assignmentQuestionId]}},mounted:function(){if(this.list=this.options[this.index],this.list.fillCount>0)for(var t=0;t<this.list.fillCount;t++)this.fillList.push("");else 0===this.list.fillCount&&this.fillList.push("");var e=this.answer[this.index];if(e&&(this.$store.state.practiseList[this.list.assignmentQuestionId]=e.content,null!==e.content)){var i=String(e.content).split("|");this.textarea=i}},watch:{},computed:{}},_=b,y=(i("d7be"),Object(c["a"])(_,x,w,!1,null,"6cd8f65e",null)),S=y.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{on:{change:t.changeRadio}},[i("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[i("div",[i("el-radio",{attrs:{label:0}},[t._v("正确")])],1),i("div",[i("el-radio",{attrs:{label:1}},[t._v("错误")])],1)])],1)])},I=[],k={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Array,default:function(){return[]}}},data:function(){return{radio:"",answerInfo:"",list:{}}},components:{},methods:{changeRadio:function(){"0"==this.radio&&(this.answerInfo="",this.answerInfo="正确"),"1"==this.radio&&(this.answerInfo="",this.answerInfo="错误"),this.$store.state.practiseList[this.list.assignmentQuestionId]=this.answerInfo}},mounted:function(){this.list=this.options[this.index];var t=this.answer[this.index];t&&(this.$store.state.practiseList[this.list.assignmentQuestionId]=t.content,"正确"===t.content&&(this.radio=0),"错误"===t.content&&(this.radio=1))},watch:{},computed:{}},$=k,C=(i("e5dd"),Object(c["a"])($,L,I,!1,null,"193e8f9e",null)),A=C.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},U=[],Q={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:"",list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo="",this.answerInfo=this.textarea,this.$store.state.practiseList[this.list.assignmentQuestionId]=this.answerInfo),""===this.textarea&&delete this.$store.state.practiseList[this.list.assignmentQuestionId]}},mounted:function(){this.list=this.options[this.index];var t=this.answer[this.index];t&&(this.$store.state.practiseList[this.list.assignmentQuestionId]=t.content,this.textarea=t.content)},watch:{},computed:{}},E=Q,N=(i("bc96"),Object(c["a"])(E,B,U,!1,null,"05d2cd9d",null)),T=N.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},on:{input:t.inputInfo},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1)},P=[],V={props:{index:{type:Number},options:{type:Array,default:function(){return[]}},answer:{type:Array,default:function(){return[]}}},data:function(){return{textarea:"",answerInfo:"",list:{}}},components:{},methods:{inputInfo:function(){""!==this.textarea&&(this.answerInfo="",this.answerInfo=this.textarea,this.$store.state.practiseList[this.list.assignmentQuestionId]=this.answerInfo),""===this.textarea&&delete this.$store.state.practiseList[this.list.assignmentQuestionId]}},mounted:function(){this.list=this.options[this.index];var t=this.answer[this.index];t&&(this.$store.state.practiseList[this.list.assignmentQuestionId]=t.content,this.textarea=t.content)},watch:{},computed:{}},D=V,z=(i("34d2"),Object(c["a"])(D,j,P,!1,null,"61b36c45",null)),M=z.exports,O=i("5dc6"),R=i("ac8a"),F=(i("c610"),{data:function(){return{id:"",loading:!0,activeName:"first",coursewareList:[],practiseList:[],textList:[],pictureList:[],videoPlayer:"",audioUrl:[],pdfUrl:"",openVideoImg:"",wordUrl:"",pictureUrl:"",dialogVisible:!1,beginTime:"",answerList:[],assignmentId:""}},components:{radio:f,checkbox:m,fillBlanks:S,judge:A,nounExplanation:T,explain:M,vueVideoPlayer:O["a"],AudioPlayer:R["AudioPlayer"]},methods:{backLastPage:function(){this.$router.go(-1)},handleClick:function(t,e){var i=t.$options.propsData.label;"课件"==i?(this.loading=!0,this.getMissionType()):"练习题"==i&&(this.loading=!0,this.getAnswer())},submit:function(){var t=this,e={answerMap:this.$store.state.practiseList,assignmentId:Number(this.id)};this.$api.submitPratise(e).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.$message({message:"练习提交成功",type:"success"}),t.$router.push({name:"undoMission",path:"/undoMission"})):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1,t.$message({message:"获取失败",type:"warning"})}))},open:function(){this.beginTime="",this.endTime="",this.beginTime=Date.parse(new Date)},close:function(){this.endTime=Date.parse(new Date);var t=(this.endTime-this.beginTime)/6e4,e={assignmentId:Number(this.id),minutes:Math.ceil(t)};this.$api.submitTime(e)},handleSizeChange:function(t){this.loading=!0,this.data.page=1,this.data.limit=t,this.getAllLearn()},handleCurrentChange:function(t){this.loading=!0,this.data.page=t,this.getAllLearn()},checkcourse:function(t){var e=this;this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.$api.geturl(t.id).then((function(i){1e3===i.data.code&&e.$router.push({name:"login",path:"/login"}),0===i.data.code?".docx"===t.fileSuffix||".doc"===t.fileSuffix||".xls"===t.fileSuffix||".xlsx"===t.fileSuffix||".ppt"===t.fileSuffix||".pptx"===t.fileSuffix?(e.wordUrl="https://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent(i.data.data[0]),e.dialogVisible=!0):".mp4"===t.fileSuffix?(e.videoPlayer=i.data.data[0],e.dialogVisible=!0):".mp3"===t.fileSuffix?(e.audioUrl.push(i.data.data[0]),e.dialogVisible=!0):".pdf"===t.fileSuffix?(e.pdfUrl=i.data.data[0],e.dialogVisible=!0):".jpg"!=t.fileSuffix&&".png"!=t.fileSuffix&&".gif"!=t.fileSuffix&&".tif"!=t.fileSuffix&&".psd"!=t.fileSuffix&&".dng"!=t.fileSuffix||(e.pictureUrl=i.data.data[0],e.dialogVisible=!0):e.$message({message:i.data.msg,type:"warning"})})).catch((function(t){}))},twoNumber:function(t){var e=t.toString();if(-1==e.indexOf("."))return t+".00";var i=e.length,s=e.indexOf(".");return i>s+2?e.slice(0,s+3):i==s+2?e+"0":e},getMissionType:function(){var t=this;this.$api.getCourseware(this.id).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?null===e.data.data?t.coursewareList=[]:(t.coursewareList=e.data.data,t.textList=[],t.pictureList=[],t.coursewareList.map((function(e){e.uploadTime=t.timeFormat(e.uploadTime),e.fileSize=t.twoNumber(e.fileSize/1024),".jpg"===e.fileSuffix||".png"===e.fileSuffix||".jpeg"===e.fileSuffix||".bmp"===e.fileSuffix||".gif"===e.fileSuffix||".wmv"===e.fileSuffix||".avi"===e.fileSuffix||".rm"===e.fileSuffix||".flv"===e.fileSuffix||".mp4"===e.fileSuffix||".wma"===e.fileSuffix||".mp3"===e.fileSuffix?t.pictureList.push(e):t.textList.push(e)}))):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1,t.$message({message:"获取失败",type:"warning"})}))},getQuestiones:function(){var t=this;this.$api.getQuestion(this.id).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?t.practiseList=e.data.data:t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1,t.$message({message:"获取失败",type:"warning"})}))},getAnswer:function(){var t=this;this.$api.getAnswer(this.id).then((function(e){t.dialogLoading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.answerList=e.data.data,t.getQuestiones()):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.dialogLoading=!1,t.$message({message:"获取失败",type:"warning"})}))}},mounted:function(){this.id=this.$route.query.id,this.getMissionType(),this.$store.state.practiseList={}},watch:{},computed:{}}),q=F,J=(i("64c2"),Object(c["a"])(q,s,n,!1,null,"59048eee",null));e["default"]=J.exports},"64c2":function(t,e,i){"use strict";var s=i("1ff8"),n=i.n(s);n.a},"66d4":function(t,e,i){"use strict";var s=i("4ca1"),n=i.n(s);n.a},"9a6b":function(t,e,i){},bc96:function(t,e,i){"use strict";var s=i("5369"),n=i.n(s);n.a},d7be:function(t,e,i){"use strict";var s=i("5e73"),n=i.n(s);n.a},e5dd:function(t,e,i){"use strict";var s=i("9a6b"),n=i.n(s);n.a}}]);