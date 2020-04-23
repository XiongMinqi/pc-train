<template>
  <div>
    <!-- <div class="flex">
      <div class="index">序号</div>
      <div class="subjectName">科目</div>
      <div class="testTime">考试时间</div>
      <div class="duringTime">截止时间</div>
      <div class="passTime">是否过期</div>
      <div class="operation">操作</div>
    </div>-->
    <div class="flex" v-for="(item,index) in testList" :key="index">
      <!-- <div class="index">{{index+1}}</div>
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
      </div>-->
      <div style=" display: flex;align-items: center;">
        <div class="userImg">
          <img src="http://pic.51yuansu.com/pic3/cover/01/02/80/590085d34c319_610.jpg" alt />
        </div>
        <div style="margin-left:20px">
          <div class="name" style="font-weight:bold">{{item.name}}</div>
          <div>
            专业 : {{item.majorname}} |
            部门 : {{item.departname}} |
            总分 ： {{item.totalScore}}分 |
            及格分数:
            <span style="color:#3C3CC4">{{item.passScore}}分</span>
          </div>

          <div>
            创建时间 : {{item.publishTime}} | 
            <span style="color:#CC3352">截止时间 : {{item.expirationTime}}</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div v-if="item.status===1||item.status===3||item.status===4" @click="showToast">
            <el-button type="danger" round>进入考试</el-button>
          </div>
          <div v-if="item.status===2" @click="onlineTest(item)">
            <el-button type="primary" round>进入考试</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,1, 10, 20, 30, 40]"
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
      limit: 5,
      total: 0,
      testList: [],
      major: [],
      department: []
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
              this.major.map(itm => {
                if (item.majorId == itm.key) {
                  this.$set(item, "majorname", itm.value);
                }
              });
              this.department.map(itm => {
                if (item.departmentId == itm.key) {
                  this.$set(item, "departname", itm.value);
                }
              });
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
    },
    //获取专业和部门名称
    getSubjectDetail() {
      this.$api
        .getSubject()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.getTest();
            // console.log(res);
            this.major = res.data.data[0]["专业名称"];
            this.department = res.data.data[0]["部门名称"];
            // console.log(this.major);
            // console.log(this.department);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getSubjectDetail();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
  align-items: center;
  // text-align: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 10px 10px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
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
.userImg {
  width: 80px;
  height: 90px;
  img {
    width: 100%;
    height: 100%;
  }
}
.name {
  padding-bottom: 10px;
  font-size: 17px;
}
</style>