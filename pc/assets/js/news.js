(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news"],{"0e95":function(e,t,a){},"3ce6":function(e,t,a){"use strict";var i=a("0e95"),s=a.n(i);s.a},"7d0b":function(e,t,a){e.exports=a.p+"assets/img/gonggao.png"},fd2f:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.newsList.length>0?a("div",[e._l(e.newsList,(function(t,i){return a("div",{key:i,staticClass:"newsdetail",on:{click:function(a){return e.checkNews(t,i)}}},[a("div",{staticClass:"flex justify-between aligh-center news"},[a("div",{staticClass:"flex aligh-center"},[e._m(0,!0),a("div",[a("div",{staticClass:"title"},[e._v(e._s(t.title))]),a("div",{staticStyle:{"margin-bottom":"5px",color:"#a2a2a2"}},[a("span",{staticStyle:{"padding-right":"10px"}},[e._v("By : "+e._s(t.peopleName))]),a("span",[e._v(e._s(t.createTime))])]),a("div",{staticStyle:{color:"#a2a2a2"}},[e._v(" 浏览次数 : "),a("span",{staticClass:"bg-primary"},[e._v(e._s(t.readCount))])])])]),a("div",[a("el-button",{attrs:{type:"primary",round:""},on:{click:function(a){return e.checkNews(t,i)}}},[e._v("查看公告")])],1)])])})),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[5,10,15,20,30,40],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],2):a("div",{staticClass:"else"},[e._v("暂无公告")]),a("el-dialog",{attrs:{title:e.newsDetail.title,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.close}},[a("div",{staticClass:"newsMsg"},[a("div",{staticClass:"flex aligh-center newsDetailInfo",staticStyle:{"margin-bottom":"5px",color:"#a2a2a2"}},[a("div",{staticStyle:{"padding-right":"10px"}},[e._v("发布时间 : "+e._s(e.newsDetail.createTime))]),a("div",[e._v("发布人员 : "+e._s(e.newsDetail.peopleName))]),a("div",{staticStyle:{color:"#a2a2a2","padding-left":"10px"}},[e._v("浏览次数 : "+e._s(e.newsDetail.readCount))])]),a("div",{staticStyle:{"text-indent":"2em","margin-top":"10px","letter-spacing":"0.5px","line-height":"2em"}},[e._v(e._s(e.newsDetail.content))])])])],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"newsImg"},[i("img",{attrs:{src:a("7d0b"),alt:""}})])}],n={data:function(){return{page:1,limit:5,newsList:[],total:0,currentPage:1,dialogFormVisible:!1,newsDetail:{},loading:!0}},components:{},methods:{handleSizeChange:function(e){this.loading=!0,this.page=1,this.limit=e,this.getNews()},handleCurrentChange:function(e){this.loading=!0,this.page=e,this.getNews()},close:function(){this.newsDetail={}},getNews:function(){var e=this,t={page:this.page,limit:this.limit,object:{}};this.$api.getNews(t).then((function(t){e.loading=!1,1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.newsList=t.data.data,e.total=t.data.count):e.$message({message:t.data.msg,type:"warning"})})).catch((function(t){e.loading=!1,e.$message({message:t.data.msg,type:"warning"})}))},checkNews:function(e,t){var a=this;this.$api.checkNewsDetail(e.id).then((function(e){1e3===e.data.code&&a.$router.push({name:"login",path:"/login"}),0===e.data.code?(a.newsDetail=e.data.data[0],a.dialogFormVisible=!0,a.$set(a.newsList[t],"readCount",a.newsList[t].readCount+1)):a.$message({message:e.data.msg,type:"warning"})})).catch((function(e){a.$message({message:e.data.msg,type:"warning"})}))}},mounted:function(){this.getNews()},watch:{},computed:{}},l=n,o=(a("3ce6"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,"20a33e17",null);t["default"]=c.exports}}]);