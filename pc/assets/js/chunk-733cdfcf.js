(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-733cdfcf"],{8077:function(t,e,a){"use strict";var i=a("b9a5"),s=a.n(i);s.a},ae40:function(t,e,a){var i=a("83ab"),s=a("d039"),n=a("5135"),o=Object.defineProperty,r={},l=function(t){throw t};t.exports=function(t,e){if(n(r,t))return r[t];e||(e={});var a=[][t],c=!!n(e,"ACCESSORS")&&e.ACCESSORS,d=n(e,0)?e[0]:l,u=n(e,1)?e[1]:void 0;return r[t]=!!a&&!s((function(){if(c&&!i)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,a.call(t,d,u)}))}},b727:function(t,e,a){var i=a("0366"),s=a("44ad"),n=a("7b0b"),o=a("50c4"),r=a("65f0"),l=[].push,c=function(t){var e=1==t,a=2==t,c=3==t,d=4==t,u=6==t,p=5==t||u;return function(v,g,h,f){for(var _,m,y=n(v),b=s(y),k=i(g,h,3),x=o(b.length),q=0,C=f||r,D=e?C(v,x):a?C(v,0):void 0;x>q;q++)if((p||q in b)&&(_=b[q],m=k(_,q,y),t))if(e)D[q]=m;else if(m)switch(t){case 3:return!0;case 5:return _;case 6:return q;case 2:l.call(D,_)}else if(d)return!1;return u?-1:c||d?d:D}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},b9a5:function(t,e,a){},cd08:function(t,e,a){t.exports=a.p+"assets/img/mistake.png"},cefe:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"choose"},[a("div",{staticClass:"subject"},[a("el-select",{attrs:{placeholder:"请选择问题类型"},model:{value:t.question,callback:function(e){t.question=e},expression:"question"}},[a("el-option",{attrs:{value:"不限"}}),t._l(t.questionType,(function(t){return a("el-option",{key:t.key,attrs:{value:t.value}})}))],2)],1),a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.chooseClass}},[t._v("开始筛选")])],1)]),t.errorList.length>0?a("div",t._l(t.errorList,(function(e,i){return a("div",{key:i},[a("div",{staticClass:"mistake"},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[t._m(0,!0),a("div",{staticStyle:{"margin-left":"20px"}},[a("div",{staticClass:"name",staticStyle:{"font-weight":"bold","padding-bottom":"5px"}},t._l(t.questionType,(function(i,s){return a("div",{key:s,staticClass:"questiontype"},[e.type==i.key?a("span",{staticStyle:{color:"blue"}},[t._v("【"+t._s(i.value)+"】")]):t._e()])})),0),a("div",{staticClass:"questioncontent"},[t._v(t._s(e.content))]),a("div",{staticStyle:{"font-size":"12px",color:"#a5a5a5","padding-left":"6px"}},[a("span",{staticStyle:{color:"rgb(204, 51, 82)"}},[t._v(" 困难程度: "),a("span",[0===e.level?a("span",[t._v("简单")]):t._e(),1===e.level?a("span",[t._v("普通")]):t._e(),2===e.level?a("span",[t._v("困难")]):t._e()])]),t._v(" | "),a("span",{staticStyle:{color:"purple"}},[t._v("所属专业 : "+t._s(e.majorname))]),t._v(" | "),a("span",{staticStyle:{color:"#EE6911"}},[t._v("所属部门 : "+t._s(e.departname))]),t._v(" | "),a("span",{staticStyle:{color:"green"}},[t._v("分数 ："+t._s(e.defaultScore)+"分")])])])]),a("div",[a("el-button",{attrs:{type:"primary",round:""},on:{click:function(a){return t.checkDetail(e)}}},[t._v("错题重做")])],1)])])})),0):a("div",{staticClass:"else"},[t._v("暂无数据")]),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"错题详情",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.close}},[a("div",[a("div",{staticClass:"detail"},[t._l(t.questionType,(function(e,i){return a("div",{key:i,staticClass:"questiontype"},[t.questionDetail.type==e.key?a("span",[t._v("【"+t._s(e.value)+"】")]):t._e()])})),a("div",{staticClass:"content"},[t._v(t._s(t.questionDetail.content))])],2),a("div",[0==t.questionDetail.type?a("div",t._l(t.questionDetail.options,(function(e,i){return a("div",{key:i},[a("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio",{attrs:{label:e.order}},[0===e.order?a("span",[t._v("A、")]):t._e(),1===e.order?a("span",[t._v("B、")]):t._e(),2===e.order?a("span",[t._v("C、")]):t._e(),3===e.order?a("span",[t._v("D、")]):t._e(),t._v(" "+t._s(e.content)+" ")])],1)],1)})),0):t._e(),3==t.questionDetail.type?a("div",[a("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("div",{staticStyle:{padding:"0 0 10px 0"}},[a("el-radio",{attrs:{label:"judge1"}},[t._v("正确")])],1),a("div",[a("el-radio",{attrs:{label:"judge2"}},[t._v("错误")])],1)])],1):t._e(),1==t.questionDetail.type?a("div",t._l(t.questionDetail.options,(function(e,i){return a("div",{key:i},[a("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-checkbox",{attrs:{label:e.content}},[0===e.order?a("span",[t._v("A、")]):t._e(),1===e.order?a("span",[t._v("B、")]):t._e(),2===e.order?a("span",[t._v("C、")]):t._e(),3===e.order?a("span",[t._v("D、")]):t._e(),4===e.order?a("span",[t._v("E、")]):t._e(),5===e.order?a("span",[t._v("F、")]):t._e(),t._v(" "+t._s(e.content)+" ")])],1)],1)})),0):t._e(),2==t.questionDetail.type||4==t.questionDetail.type||5==t.questionDetail.type?a("div",[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1):t._e()]),t.disappear?a("div",{staticStyle:{display:"flex","align-items":"center","padding-top":"20px"}},[a("div",[t._v("正确答案 :")]),1==t.questionDetail.type?a("div",{staticStyle:{"padding-left":"10px",color:"green"}},t._l(t.questionDetail.answers,(function(e,i){return a("span",{key:i},[a("span",[t._v(t._s(e.content))])])})),0):a("div",{staticStyle:{"padding-left":"10px",color:"green"}},[t._v(t._s(t.questionDetail.answers[0].content))])]):t._e()]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"userImg"},[i("img",{attrs:{src:a("cd08"),alt:""}})])}],n=(a("d81d"),{data:function(){return{questionType:[],errorList:[],question:"不限",status:null,page:1,limit:5,disappear:!1,total:0,currentPage:1,questionDetail:{},dialogFormVisible:!1,closeDialog:!1,formLabelWidth:"120px",radio:"",checkList:[],textarea:"",judge1:"",judge2:"",department:[],major:[]}},components:{},methods:{handleSizeChange:function(t){this.page=1,this.limit=t,this.getErrorList()},handleCurrentChange:function(t){this.page=t,this.getErrorList()},close:function(){this.disappear=!1,this.textarea="",this.radio="",this.judge1="",this.judge2="",this.checkList=[],this.closeDialog=!1},submit:function(){(""!=this.textarea||""!=this.radio||this.checkList.length>0||""!=this.judge1||""!=this.judge2)&&!1===this.closeDialog?(this.disappear=!0,this.closeDialog=!0):this.dialogFormVisible=!1},checkDetail:function(t){var e=this;this.dialogFormVisible=!0,this.$grade.getErrorDetail(t.id).then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?e.questionDetail=t.data.data[0]:e.$message({message:t.data.msg,typr:"warning"})})).catch()},getQuestionType:function(){var t=this;this.$grade.getdict().then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code&&(t.questionType=e.data.data[0]["题目类型"],t.major=e.data.data[0]["专业名称"],t.department=e.data.data[0]["部门名称"],t.getErrorList())})).catch()},chooseClass:function(){var t=this;this.currentPage=1,this.page=1,"不限"===this.question&&(this.status=null),this.questionType.map((function(e){e.value===t.question&&(t.status=e.key)})),this.getErrorList()},getErrorList:function(){var t=this;this.$grade.getMistake(this.page,this.limit,this.status).then((function(e){1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.errorList=e.data.data,t.total=e.data.count,t.errorList.map((function(e){t.major.map((function(a){e.majorId==a.key&&t.$set(e,"majorname",a.value)})),t.department.map((function(a){e.departmentId==a.key&&t.$set(e,"departname",a.value)}))}))):t.$message({message:e.data.msg,typr:"warning"})})).catch()}},mounted:function(){this.getQuestionType()},watch:{},computed:{}}),o=n,r=(a("8077"),a("2877")),l=Object(r["a"])(o,i,s,!1,null,"7b1db79c",null);e["default"]=l.exports},d81d:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").map,n=a("1dde"),o=a("ae40"),r=n("map"),l=o("map");i({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);