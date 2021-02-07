(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["courseware"],{"2db7":function(t,e,i){},3671:function(t,e,i){"use strict";var a=i("2db7"),s=i.n(a);s.a},"9c61":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{staticClass:"display-justify-between display-flex display-align-center"},[a("div",{staticClass:"pageTitle"},[t._v("课件学习")]),a("div",[a("el-button",{attrs:{size:"mini",plain:"",type:"primary"},on:{click:function(e){return t.jumpHistoryList("/studyRecord")}}},[t._v("学习记录")])],1)]),a("div",{staticClass:"choose"},[a("div",{staticClass:"classname"},[a("el-select",{attrs:{placeholder:"请选择科目"},model:{value:t.classname,callback:function(e){t.classname=e},expression:"classname"}},[a("el-option",{key:"",attrs:{value:"不限"}}),t._l(t.classList,(function(t){return a("el-option",{key:t.key,attrs:{value:t.value}})}))],2)],1),a("div",{staticClass:"classname"},[a("el-select",{attrs:{placeholder:"请选择文档类型"},model:{value:t.typename,callback:function(e){t.typename=e},expression:"typename"}},t._l(t.typeList,(function(t){return a("el-option",{key:t.key,attrs:{value:t.value}})})),1)],1),a("div",{staticClass:"classname"},[a("el-input",{attrs:{placeholder:"请输入课件名"},model:{value:t.courseName,callback:function(e){t.courseName=e},expression:"courseName"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.chooseClass}},[t._v("开始筛选")])],1)]),t.showCourse?a("div",[t.allList.length>0?a("div",[t.textList.length>0?a("div",[a("el-divider",[t._v("文档")]),t._l(t.textList,(function(e,s){return a("div",{key:s,staticClass:"course",on:{click:function(i){return t.checkcourse(e)}}},[a("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[a("div",[".docx"==e.fileSuffix||".doc"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==e.fileSuffix||".xlsx"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==e.fileSuffix||".pptx"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("77ef"),alt:""}})]):".txt"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("d83f"),alt:""}})]):".jpg"==e.fileSuffix||".png"==e.fileSuffix||".gif"==e.fileSuffix||".tif"==e.fileSuffix||".psd"==e.fileSuffix||".dng"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("3d38"),alt:""}})]):".wma"==e.fileSuffix||".mp3"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("e904"),alt:""}})]):a("div",[a("img",{attrs:{src:i("01ac"),alt:""}})])]),a("div",[a("div",{staticClass:"msg"},[a("div",[t._v("课件名称: "+t._s(e.name))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v("作者: "+t._s(e.author))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v("上传时间: "+t._s(e.uploadTime))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v("文件大小: "+t._s(e.fileSize)+"KB")])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v(" "+t._s(e.subjectName)+"/浏览 "),a("span",{staticStyle:{padding:"0 4px"}},[t._v(t._s(e.readCount))]),t._v("次 ")])])])])])}))],2):t._e(),t.pictureList.length>0?a("div",[a("el-divider",[t._v("图片、视频、音频")]),t._l(t.pictureList,(function(e,s){return a("div",{key:s,staticClass:"course",on:{click:function(i){return t.checkcourse(e)}}},[a("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[a("div",[".docx"==e.fileSuffix||".doc"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==e.fileSuffix||".xlsx"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==e.fileSuffix||".pptx"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("77ef"),alt:""}})]):".jpg"==e.fileSuffix||".png"==e.fileSuffix||".gif"==e.fileSuffix||".tif"==e.fileSuffix||".psd"==e.fileSuffix||".dng"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("3d38"),alt:""}})]):".wma"==e.fileSuffix||".mp3"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("e904"),alt:""}})]):".txt"==e.fileSuffix?a("div",[a("img",{attrs:{src:i("d83f"),alt:""}})]):a("div",[a("img",{attrs:{src:i("01ac"),alt:""}})])]),a("div",[a("div",{staticClass:"msg"},[a("div",[t._v("课件名称: "+t._s(e.name))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v("作者: "+t._s(e.author))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v("上传时间: "+t._s(e.uploadTime))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v("文件大小: "+t._s(e.fileSize)+"KB")])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[t._v(" "+t._s(e.subjectName)+"/浏览 "),a("span",{staticStyle:{padding:"0 4px"}},[t._v(t._s(e.readCount))]),t._v("次 ")])])])])])}))],2):t._e(),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[9,6,12,15,18],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]):a("div",{staticClass:"else"})]):t._e(),a("el-dialog",{staticClass:"dialogVisible",attrs:{width:"90%",top:"1vh",title:t.courseTitle,visible:t.dialogVisible,"close-on-click-modal":!1,"show-close":!1,"modal-append-to-body":!0},on:{close:t.close,open:t.open,"update:visible":function(e){t.dialogVisible=e}}},[a("div",[t.videoPlayer?a("div",{staticClass:"vueVideoPlayer"},[a("vueVideoPlayer",{attrs:{src:t.videoPlayer,cover_url:t.openVideoImg}})],1):t._e(),t.pdfUrl?a("div",{staticStyle:{height:"70vh"}},[a("iframe",{staticClass:"filename",attrs:{src:t.pdfUrl,width:"100%",height:"100%",frameborder:"0"}})]):t._e(),t.txtUrl?a("div",{staticStyle:{height:"70vh"}},[a("iframe",{staticClass:"filename",attrs:{src:t.txtUrl,width:"100%",height:"100%",frameborder:"0"}})]):t._e(),t.wordUrl?a("div",{staticStyle:{height:"70vh"}},[a("iframe",{staticClass:"filename",attrs:{src:t.wordUrl,width:"100%",height:"100%",frameborder:"0"}})]):t._e(),t.audioUrl.length>0?a("div",{staticStyle:{height:"60vh"}},[a("AudioPlayer",{attrs:{"audio-list":t.audioUrl,"show-prev-button":!1,"show-next-button":!1,isLoop:!1,progressInterval:10}})],1):t._e(),t.pictureUrl?a("div",{staticStyle:{height:"70vh"}},[a("img",{staticClass:"courseimg",attrs:{src:t.pictureUrl,alt:""}})]):t._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])])],1)},s=[],l=(i("c975"),i("d81d"),i("fb6a"),i("b0c0"),i("a9e3"),i("d3b7"),i("25f0"),i("5dc6")),r=(i("fda2"),i("ac8a")),f=(i("c610"),{data:function(){return{showCourse:!1,videoPlayer:"",currentPage:1,total:0,pdfUrl:"",audioUrl:[],txtUrl:"",wordUrl:"",courseTitle:"",pictureUrl:"",dialogVisible:!1,subjectname:"",coursewareId:"",peopleId:"",classname:"不限",beginTime:"",courseName:"",endTime:"",classList:[],typeList:[{key:null,value:"不限"},{key:1,value:"文档"},{key:2,value:"图片"},{key:3,value:"视频"},{key:4,value:"音频"}],typename:"不限",subjectList:[],data:{object:{subjectId:null,type:null,name:null,majorId:null,authorDepartment:null,author:null},limit:9,page:1},allList:[],visible:!1,textList:[],pictureList:[],loading:!0}},components:{vueVideoPlayer:l["a"],AudioPlayer:r["AudioPlayer"]},methods:{jumpHistoryList:function(t){this.$router.push({path:t})},handleSizeChange:function(t){this.loading=!0,this.data.page=1,this.data.limit=t,this.getAllLearn()},handleCurrentChange:function(t){this.loading=!0,this.data.page=t,this.getAllLearn()},open:function(){this.beginTime="",this.endTime="",this.beginTime=Date.parse(new Date)},close:function(){this.courseTitle="",this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.endTime=Date.parse(new Date);var t=Math.round((this.endTime-this.beginTime)/6e4);if(t>=1){var e={coursewareId:this.coursewareId,minutes:t};this.$api.saveMyLog(e).then().catch()}},chooseClass:function(){var t=this;this.data.page=1,"不限"==this.classname?this.data.object.subjectId="":this.classList.map((function(e){e.value==t.classname&&(t.data.object.subjectId=e.key)})),this.typeList.map((function(e){e.value==t.typename&&(t.data.object.type=e.key)})),""!==this.courseName?this.data.object.name=this.courseName:""===this.courseName&&(this.data.object.name=null),this.getAllLearn()},checkcourse:function(t){var e=this;this.courseTitle=t.name,this.coursewareId=t.id,this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.$api.geturl(t.id).then((function(i){1e3===i.data.code&&e.$router.push({name:"login",path:"/login"}),0===i.data.code?i.data.data[0]?".docx"===t.fileSuffix||".doc"===t.fileSuffix||".xls"===t.fileSuffix||".xlsx"===t.fileSuffix||".ppt"===t.fileSuffix||".pptx"===t.fileSuffix?(e.wordUrl="https://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent(i.data.data[0]),e.dialogVisible=!0):".mp4"===t.fileSuffix?(t.coverUrl?e.openVideoImg=t.coverUrl:e.openVideoImg="",e.videoPlayer=i.data.data[0],e.dialogVisible=!0):".pdf"===t.fileSuffix?(e.pdfUrl=i.data.data[0],e.dialogVisible=!0):".mp3"===t.fileSuffix?(e.audioUrl.push(i.data.data[0]),e.dialogVisible=!0):".jpg"==t.fileSuffix||".png"==t.fileSuffix||".gif"==t.fileSuffix||".tif"==t.fileSuffix||".psd"==t.fileSuffix||".dng"==t.fileSuffix?(e.pictureUrl=i.data.data[0],e.dialogVisible=!0):".txt"==t.fileSuffix&&(e.txtUrl=i.data.data[0],e.dialogVisible=!0):e.$message({message:"获取课件失败，请联系管理员",type:"warning"}):e.$message({message:i.data.msg,type:"warning"})})).catch((function(t){}))},twoNumber:function(t){var e=t.toString();if(-1==e.indexOf("."))return t+".00";var i=e.length,a=e.indexOf(".");return i>a+2?e.slice(0,a+3):i==a+2?e+"0":e},getdict:function(){var t=this;this.$grade.getdict().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.classList=e.data.data[0]["科目名称"],t.getAllLearn()):t.$message({message:e.data.msg,type:"warning"})})).catch((function(t){}))},getAllLearn:function(){var t=this;this.$api.getLearn(this.data).then((function(e){t.loading=!1,t.showCourse=!0,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.allList=e.data.data,t.total=e.data.count,t.textList=[],t.pictureList=[],t.allList.map((function(e){e.uploadTime=t.timeFormat(e.uploadTime),e.fileSize=t.twoNumber(e.fileSize/1024),t.classList.map((function(i){e.subjectId===Number(i.key)&&t.$set(e,"subjectName",i.value)})),".jpg"===e.fileSuffix||".png"===e.fileSuffix||".jpeg"===e.fileSuffix||".bmp"===e.fileSuffix||".gif"===e.fileSuffix||".wmv"===e.fileSuffix||".avi"===e.fileSuffix||".rm"===e.fileSuffix||".flv"===e.fileSuffix||".mp4"===e.fileSuffix||".wma"===e.fileSuffix||".mp3"===e.fileSuffix?t.pictureList.push(e):t.textList.push(e)}))):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1,t.showCourse=!0}))}},mounted:function(){this.getdict();var t=JSON.parse(localStorage.getItem("userInfo"));this.peopleId=t.userId},watch:{},computed:{}}),c=f,o=(i("3671"),i("2877")),n=Object(o["a"])(c,a,s,!1,null,"4af43bf8",null);e["default"]=n.exports},b0c0:function(t,e,i){var a=i("83ab"),s=i("9bf2").f,l=Function.prototype,r=l.toString,f=/^\s*function ([^ (]*)/,c="name";a&&!(c in l)&&s(l,c,{configurable:!0,get:function(){try{return r.call(this).match(f)[1]}catch(t){return""}}})}}]);