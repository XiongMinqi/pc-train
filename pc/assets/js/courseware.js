(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["courseware"],{"0d1a":function(e,t,i){},"4a3b":function(e,t,i){"use strict";var a=i("0d1a"),s=i.n(a);s.a},"9c61":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[a("div",{staticClass:"choose"},[a("div",{staticClass:"subject"},[a("el-select",{attrs:{disabled:"",placeholder:"请选择专业"},model:{value:e.subjectname,callback:function(t){e.subjectname=t},expression:"subjectname"}},e._l(e.subjectList,(function(e){return a("el-option",{key:e.key,attrs:{value:e.value}})})),1)],1),a("div",{staticClass:"classname"},[a("el-select",{attrs:{placeholder:"请选择科目"},model:{value:e.classname,callback:function(t){e.classname=t},expression:"classname"}},[a("el-option",{key:"",attrs:{value:"不限"}}),e._l(e.classList,(function(e){return a("el-option",{key:e.key,attrs:{value:e.value}})}))],2)],1),a("div",{staticClass:"classname"},[a("el-select",{attrs:{placeholder:"请选择文档类型"},model:{value:e.typename,callback:function(t){e.typename=t},expression:"typename"}},e._l(e.typeList,(function(e){return a("el-option",{key:e.key,attrs:{value:e.value}})})),1)],1),a("div",{staticClass:"classname"},[a("el-input",{attrs:{placeholder:"请输入课件名"},model:{value:e.courseName,callback:function(t){e.courseName=t},expression:"courseName"}})],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.chooseClass}},[e._v("开始筛选")])],1)]),e.allList.length>0?a("div",[e.textList.length>0?a("div",[a("el-divider",[e._v("文档")]),e._l(e.textList,(function(t,s){return a("div",{key:s,staticClass:"course",on:{click:function(i){return e.checkcourse(t)}}},[a("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[a("div",[".docx"==t.fileSuffix||".doc"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==t.fileSuffix||".xlsx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==t.fileSuffix||".pptx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("77ef"),alt:""}})]):".jpg"==t.fileSuffix||".png"==t.fileSuffix||".gif"==t.fileSuffix||".tif"==t.fileSuffix||".psd"==t.fileSuffix||".dng"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3d38"),alt:""}})]):".wma"==t.fileSuffix||".mp3"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("e904"),alt:""}})]):a("div",[a("img",{attrs:{src:i("01ac"),alt:""}})])]),a("div",[a("div",{staticClass:"msg"},[a("div",[e._v("课件名称: "+e._s(t.name))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v("作者: "+e._s(t.author))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v("上传时间: "+e._s(t.uploadTime))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v("文件大小: "+e._s(t.fileSize)+"KB")])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v(" "+e._s(t.majorName)+"/"+e._s(t.subjectName)+"/浏览 "),a("span",{staticStyle:{padding:"0 4px"}},[e._v(e._s(t.readCount))]),e._v("次 ")])])])])])}))],2):e._e(),e.pictureList.length>0?a("div",[a("el-divider",[e._v("图片、视频、音频")]),e._l(e.pictureList,(function(t,s){return a("div",{key:s,staticClass:"course",on:{click:function(i){return e.checkcourse(t)}}},[a("div",{staticClass:"courseware",attrs:{slot:"reference"},slot:"reference"},[a("div",[".docx"==t.fileSuffix||".doc"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3b84"),alt:""}})]):".xls"==t.fileSuffix||".xlsx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("b792"),alt:""}})]):".ppt"==t.fileSuffix||".pptx"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("6358"),alt:""}})]):".mp4"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("5c0e"),alt:""}})]):".pdf"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("77ef"),alt:""}})]):".jpg"==t.fileSuffix||".png"==t.fileSuffix||".gif"==t.fileSuffix||".tif"==t.fileSuffix||".psd"==t.fileSuffix||".dng"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("3d38"),alt:""}})]):".wma"==t.fileSuffix||".mp3"==t.fileSuffix?a("div",[a("img",{attrs:{src:i("e904"),alt:""}})]):a("div",[a("img",{attrs:{src:i("01ac"),alt:""}})])]),a("div",[a("div",{staticClass:"msg"},[a("div",[e._v("课件名称: "+e._s(t.name))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v("作者: "+e._s(t.author))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v("上传时间: "+e._s(t.uploadTime))])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v("文件大小: "+e._s(t.fileSize)+"KB")])]),a("div",{staticClass:"desc",staticStyle:{"font-size":"12px"}},[a("div",[e._v(" "+e._s(t.majorName)+"/"+e._s(t.subjectName)+"/浏览 "),a("span",{staticStyle:{padding:"0 4px"}},[e._v(e._s(t.readCount))]),e._v("次 ")])])])])])}))],2):e._e(),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[9,6,12,15,18],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]):a("div",{staticClass:"else"}),a("el-dialog",{staticClass:"dialogVisible",attrs:{width:"90%",top:"1vh",title:"课件在线预览",visible:e.dialogVisible,"close-on-click-modal":!1,"show-close":!1,"modal-append-to-body":!0},on:{close:e.close,open:e.open,"update:visible":function(t){e.dialogVisible=t}}},[a("div",[e.videoPlayer?a("div",{staticClass:"vueVideoPlayer"},[a("vueVideoPlayer",{attrs:{src:e.videoPlayer,cover_url:e.openVideoImg}})],1):e._e(),e.pdfUrl?a("div",{staticStyle:{height:"70vh"}},[a("iframe",{staticClass:"filename",attrs:{src:e.pdfUrl,width:"100%",height:"100%",frameborder:"0"}})]):e._e(),e.wordUrl?a("div",{staticStyle:{height:"70vh"}},[a("iframe",{staticClass:"filename",attrs:{src:e.wordUrl,width:"100%",height:"100%",frameborder:"0"}})]):e._e(),e.audioUrl.length>0?a("div",{staticStyle:{height:"60vh"}},[a("AudioPlayer",{attrs:{"audio-list":e.audioUrl,"show-prev-button":!1,"show-next-button":!1,isLoop:!1,progressInterval:10}})],1):e._e(),e.pictureUrl?a("div",{staticStyle:{height:"70vh"}},[a("img",{attrs:{src:e.pictureUrl,alt:""}})]):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])])],1)},s=[],l=(i("c975"),i("d81d"),i("fb6a"),i("b0c0"),i("a9e3"),i("d3b7"),i("25f0"),i("5dc6")),n=(i("fda2"),i("ac8a")),r=(i("c610"),{data:function(){return{videoPlayer:"",currentPage:1,total:0,pdfUrl:"",audioUrl:[],wordUrl:"",pictureUrl:"",dialogVisible:!1,openVideoImg:"../../assets/img/maliao.png",subjectname:"",coursewareId:"",peopleId:"",classname:"不限",beginTime:"",courseName:"",endTime:"",classList:[],typeList:[{key:null,value:"不限"},{key:1,value:"文档"},{key:2,value:"图片"},{key:3,value:"视频"},{key:4,value:"音频"}],typename:"不限",subjectList:[],data:{object:{subjectId:null,type:null,name:null,majorId:null,authorDepartment:null,author:null},limit:9,page:1},allList:[],visible:!1,textList:[],pictureList:[],loading:!0}},components:{vueVideoPlayer:l["a"],AudioPlayer:n["AudioPlayer"]},methods:{handleSizeChange:function(e){this.loading=!0,this.data.page=1,this.data.limit=e,this.getAllLearn()},handleCurrentChange:function(e){this.loading=!0,this.data.page=e,this.getAllLearn()},open:function(){this.beginTime="",this.endTime="",this.beginTime=Date.parse(new Date)},close:function(){this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.endTime=Date.parse(new Date);var e=Math.round((this.endTime-this.beginTime)/6e4);if(e>=1){var t={coursewareId:this.coursewareId,minutes:e};this.$api.saveMyLog(t).then().catch()}},chooseClass:function(){var e=this;this.data.page=1,"不限"==this.classname?this.data.object.subjectId="":this.classList.map((function(t){t.value==e.classname&&(e.data.object.subjectId=t.key)})),this.typeList.map((function(t){t.value==e.typename&&(e.data.object.type=t.key)})),""!==this.courseName?this.data.object.name=this.courseName:""===this.courseName&&(this.data.object.name=null),this.getAllLearn()},checkcourse:function(e){var t=this;this.coursewareId=e.id,this.wordUrl="",this.pdfUrl="",this.videoPlayer="",this.pictureUrl="",this.audioUrl=[],this.$api.geturl(e.id).then((function(i){1e3===i.data.code&&t.$router.push({name:"login",path:"/login"}),0===i.data.code?".docx"===e.fileSuffix||".doc"===e.fileSuffix||".xls"===e.fileSuffix||".xlsx"===e.fileSuffix||".ppt"===e.fileSuffix||".pptx"===e.fileSuffix?(t.wordUrl="https://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent(i.data.data[0]),t.dialogVisible=!0):".mp4"===e.fileSuffix?(t.videoPlayer=i.data.data[0],t.dialogVisible=!0):".pdf"===e.fileSuffix?(t.pdfUrl=i.data.data[0],t.dialogVisible=!0):".mp3"===e.fileSuffix?(t.audioUrl.push(i.data.data[0]),t.dialogVisible=!0):".jpg"!=e.fileSuffix&&".png"!=e.fileSuffix&&".gif"!=e.fileSuffix&&".tif"!=e.fileSuffix&&".psd"!=e.fileSuffix&&".dng"!=e.fileSuffix||(t.pictureUrl=i.data.data[0],t.dialogVisible=!0):t.$message({message:i.data.msg,type:"warning"})})).catch((function(e){}))},timeFormat:function(e){var t="",i=new Date(e),a=i.getFullYear(),s=i.getMonth()+1,l=i.getDate();i.getHours(),i.getMinutes(),i.getSeconds();return t+=a+"/",s<10&&(t+="0"),t+=s+"/",l<10&&(t+="0"),t+=l+" ",t},twoNumber:function(e){var t=e.toString();if(-1==t.indexOf("."))return e+".00";var i=t.length,a=t.indexOf(".");return i>a+2?t.slice(0,a+3):i==a+2?t+"0":t},getdict:function(){var e=this;this.$grade.getdict().then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.classList=t.data.data[0]["科目名称"],e.subjectList=t.data.data[0]["专业名称"],e.getAllLearn()):e.$message({message:t.data.msg,type:"warning"})})).catch((function(e){}))},getAllLearn:function(){var e=this;this.$api.getLearn(this.data).then((function(t){e.loading=!1,1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.allList=t.data.data,e.total=t.data.count,e.textList=[],e.pictureList=[],e.allList.map((function(t){t.uploadTime=e.timeFormat(t.uploadTime),t.fileSize=e.twoNumber(t.fileSize/1024),e.subjectList.map((function(i){t.majorId===Number(i.key)&&e.$set(t,"majorName",i.value)})),e.classList.map((function(i){t.subjectId===Number(i.key)&&e.$set(t,"subjectName",i.value)})),".jpg"===t.fileSuffix||".png"===t.fileSuffix||".jpeg"===t.fileSuffix||".bmp"===t.fileSuffix||".gif"===t.fileSuffix||".wmv"===t.fileSuffix||".avi"===t.fileSuffix||".rm"===t.fileSuffix||".flv"===t.fileSuffix||".mp4"===t.fileSuffix||".wma"===t.fileSuffix||".mp3"===t.fileSuffix?e.pictureList.push(t):e.textList.push(t)}))):e.$message({message:t.data.msg,type:"warning"})})).catch((function(t){e.loading=!1}))}},mounted:function(){this.getdict();var e=JSON.parse(localStorage.getItem("userInfo"));this.peopleId=e.userId},watch:{},computed:{}}),c=r,o=(i("4a3b"),i("2877")),f=Object(o["a"])(c,a,s,!1,null,"614c1545",null);t["default"]=f.exports},b0c0:function(e,t,i){var a=i("83ab"),s=i("9bf2").f,l=Function.prototype,n=l.toString,r=/^\s*function ([^ (]*)/,c="name";a&&!(c in l)&&s(l,c,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(e){return""}}})}}]);