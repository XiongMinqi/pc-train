(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["practiseRecord"],{"3ab4":function(t,e,a){"use strict";var n=a("4ef0"),s=a.n(n);s.a},"4ef0":function(t,e,a){},"8eec":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{staticClass:"historyRecord"},[t._v("在线练习记录")]),a("div",{staticClass:"list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"rightNumber",label:"答对/道",width:"180"}}),a("el-table-column",{attrs:{prop:"questionNumber",label:"全部/道",width:"180"}}),a("el-table-column",{attrs:{prop:"createTime",label:"提交练习时间"}}),a("el-table-column",{attrs:{prop:"costSeconds",label:"练习时长",width:"180"}}),a("el-table-column",{attrs:{prop:"score",label:"积分",width:"180"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},s=[],i=(a("d81d"),{data:function(){return{userInfo:{},page:1,limit:10,list:[],allList:[],total:0,currentPage:1,data:{object:{subjectId:""},limit:100,page:1},loading:!0}},components:{},methods:{handleSizeChange:function(t){this.loading=!0,this.page=1,this.limit=t,this.getStudy()},handleCurrentChange:function(t){this.loading=!0,this.page=t,this.getStudy()},getStudy:function(){var t=this,e={page:this.page,limit:this.limit};this.$grade.getPractiseRecord(e).then((function(e){t.loading=!1,1e3===e.data.code&&t.$router.push({name:"login",path:"/login"}),0===e.data.code?(t.total=e.data.count,t.list=e.data.data,t.list.map((function(e){if(t.$set(e,"score",1),e.costSeconds>=60)if(e.costSeconds%60===0)e.costSeconds=e.costSeconds/60+"分钟";else{var a=Math.floor(e.costSeconds/60),n=e.costSeconds-60*a;e.costSeconds=a+"分钟"+n+"秒"}else e.costSeconds=e.costSeconds+"秒"}))):t.$message({message:e.data.msg,type:"warning"})})).catch((function(e){t.loading=!1,t.$message({message:e.data.msg,type:"warning"})}))}},mounted:function(){this.userInfo=JSON.parse(localStorage.getItem("userInfo")),this.getStudy()},watch:{},computed:{}}),o=i,r=(a("3ab4"),a("2877")),c=Object(r["a"])(o,n,s,!1,null,"a8bfc43a",null);e["default"]=c.exports},b727:function(t,e,a){var n=a("0366"),s=a("44ad"),i=a("7b0b"),o=a("50c4"),r=a("65f0"),c=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,d=4==t,u=6==t,g=5==t||u;return function(p,h,f,m){for(var b,v,S=i(p),w=s(S),y=n(h,f,3),C=o(w.length),z=0,I=m||r,$=e?I(p,C):a?I(p,0):void 0;C>z;z++)if((g||z in w)&&(b=w[z],v=y(b,z,S),t))if(e)$[z]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return z;case 2:c.call($,b)}else if(d)return!1;return u?-1:l||d?d:$}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d81d:function(t,e,a){"use strict";var n=a("23e7"),s=a("b727").map,i=a("1dde"),o=a("ae40"),r=i("map"),c=o("map");n({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);