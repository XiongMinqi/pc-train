<template>
  <div>
    <div class="flex">
      <div class="index">序号</div>
      <div class="subjectName">科目</div>
      <div class="testTime">考试时间</div>
      <div class="duringTime">截止时间</div>
      <div class="passTime">是否过期</div>
      <div class="operation">操作</div>
    </div>
    <div class="flex" v-for="(item,index) in testList" :key="index">
      <div class="index">{{index+1}}</div>
      <div class="subjectName">{{item.name}}</div>
      <div class="testTime">{{item.publishTime}}</div>
      <div class="duringTime">{{item.expirationTime}}</div>
      <div class="passTime">
        <div v-if="item.status===1" style="color: #F43F3B;">未开始</div>
        <div v-if="item.status===2" style="color: #2FC25B;">考试中</div>
        <div v-if="item.status===3" style="color: #F0AD4E;">审核中</div>
        <div v-if="item.status===4" style="color: #E54D42;">结束</div>
      </div>
      <div class="operation">
        <div
          v-if="item.status===1||item.status===3||item.status===4"
          style="color: #808080;"
          @click="showToast"
        >进入考试</div>
        <div v-if="item.status===2" style="color: #2FC25B;" @click="onlineTest(item)">进入考试</div>
        <!-- <div style="color: #2FC25B;" @click="onlineTest(item)">进入考试</div> -->
      </div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      offset: 0,
      limit: 10,
      total: 0,
      testList: []
    };
  },
  components: {},
  methods: {
    //转换时间
    timeFormat(time) {
      var clock = "";
      var d = new Date(time);
      var year = d.getFullYear(); //年
      var month = d.getMonth() + 1; //月
      var day = d.getDate(); //日
      var hh = d.getHours(); //时
      var mm = d.getMinutes(); //分
      var ss = d.getSeconds(); //秒
      clock += year + "/";
      if (month < 10) clock += "0";
      clock += month + "/";
      if (day < 10) clock += "0";
      clock += day + " ";
      if (hh < 10) clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += "0";
      clock += mm + ":";
      if (ss < 10) clock += "0";
      clock += ss;
      return clock;
    },
    //获取考试信息
    getTest() {
      this.$onlineTest
        .getTestInfo(this.offset, this.limit)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.total = res.data.count;
            this.testList = res.data.data;
            this.testList.map(item => {
              item.publishTime = this.timeFormat(item.publishTime);
              item.createTime = this.timeFormat(item.createTime);
              let expirationTime =
                Date.parse(new Date(item.publishTime)) + item.minutes * 60000;
              this.$set(
                item,
                "expirationTime",
                this.timeFormat(expirationTime)
              );
            });
            // this.testList.sort(function(a, b) {
            //   let minTime = new Date(a.publishTime).getTime();
            //   let maxTime = new Date(b.publishTime).getTime();
            //   return maxTime - minTime;
            // });
            console.log(this.testList);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showToast() {
      this.$message({
        message:
          "很遗憾，考试时间已过或者您已经参加过该场考试，不能进入该场考试",
        type: "warning"
      });
    },
    onlineTest(e) {
      console.log(e);
      this.$router.push({
        path: "/testIng",
        query: {
          paperId: e.paperId,
          id: e.id
        }
      });
    },
    handleSizeChange(val) {
      this.offset = 0;
      this.limit = val;
      this.getTest();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.offset = (val - 1) * this.limit;
      console.log(this.offset, this.limit);
      this.getTest();
    }
  },
  mounted() {
    this.getTest();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
  align-items: center;
  text-align: center;
  div {
    margin-bottom: 10px;
  }
  .index {
    width: 5%;
  }
  .subjectName {
    width: 31%;
  }
  .testTime {
    width: 27%;
  }
  .duringTime {
    width: 27%;
  }
  .passTime {
    width: 10%;
  }
  .operation {
    width: 10%;
    :hover {
      cursor: pointer;
    }
  }
}
.block {
  margin: 0 auto;
  text-align: center;
}
</style>