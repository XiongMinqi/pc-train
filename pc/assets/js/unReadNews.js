(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["unReadNews"],{"02b5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"newsDetail"},[a("div",{staticClass:"newsTitle text-center"},[e._v(e._s(e.newsDetail.title))]),a("div",{staticClass:"newsTime"},[e._v(e._s(e.newsDetail.createTime))]),a("div",{staticClass:"newsContent"},[e.newsDetail.content?a("div",[e._v(e._s(e.newsDetail.content))]):a("div",[e._v("此消息无内容")])])])},i=[],s={data:function(){return{id:"",newsDetail:{},loading:!0}},components:{},methods:{getNewaDetail:function(){var e=this;this.$api.newsDetail(this.id).then((function(t){e.loading=!1,1e3===t.data.code&&e.$router.push({name:"login",path:"/login"}),0===t.data.code?(e.newsDetail=t.data.data[0],e.readNews()):e.$message({message:t.data.msg,type:"warning"})})).catch((function(t){e.loading=!1,console.log(t)}))},readNews:function(){var e=this;this.$api.alreadyRead(this.id).then((function(t){1e3===t.data.code&&e.$router.push({name:"login",path:"/login"})})).catch((function(e){console.log(e)}))}},mounted:function(){this.id=this.$route.query.id,this.getNewaDetail()},watch:{$route:{handler:function(){this.id=this.$route.query.id,this.getNewaDetail()},deep:!0}},computed:{}},o=s,d=(a("4c2d"),a("2877")),c=Object(d["a"])(o,n,i,!1,null,"2b94ef2c",null);t["default"]=c.exports},"4c2d":function(e,t,a){"use strict";var n=a("f13a"),i=a.n(n);i.a},f13a:function(e,t,a){}}]);