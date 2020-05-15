<template>
  <div>
    <div class="loginmsg">
      <div>我的登录信息</div>
      <div>
        <div class="logintime">
          <div class="name">我的登录次数 :</div>
          <div class="content" v-if="userInfo.loginCount">{{userInfo.loginCount}} 次</div>
          <div class="content" v-else>0 次</div>
        </div>
        <div class="logintime">
          <div class="name">上次登录时间 :</div>
          <div class="content" v-if="userInfo.lastLoginTime">{{userInfo.lastLoginTime}}</div>
          <div class="content" v-else>暂时没有上次登录的记录</div>
        </div>
        <div class="logintime">
          <div class="name">我的积分 :</div>
          <div class="content">0 分</div>
        </div>
      </div>
    </div>
    <div class="classes" @click="classes">
      <div>我的课程进度</div>
      <div>
        <div class="logintime">
          <div class="name">已学习 :</div>
          <div class="count">6 课</div>
        </div>
        <div class="logintime">
          <div class="name">未学习 :</div>
          <div class="count">5 课</div>
        </div>
        <div style="width:50%;margin-top:20px;padding-left:20px">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        </div>
      </div>
    </div>
    <div class="test">
      <div v-if="testInfo.todoExamCount" class="newTest" @click="myTest">
        <div>我的考试({{testInfo.todoExamCount}})</div>
        <div class="new">new</div>
      </div>
      <div v-else>我的考试</div>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="testPaper(1)">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>{{total}}份</div>
            <div>全部试卷</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light" @click="testPaper(2)">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>{{pass}}份</div>
            <div>及格试卷</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="testPaper(3)">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>{{fail}}份</div>
            <div>不及格试卷</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light" @click="testPaper(4)">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>{{empty}}份</div>
            <div>空白试卷</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="classes" @click="study">
      <div>我的学习记录</div>
      <div>
        <div class="logintime">
          <div class="name">在线学习时长 :</div>
          <div class="content">{{totalStudyTime}}</div>
        </div>
        <div class="logintime">
          <div class="name">在线测试记录 :</div>
          <div class="content">{{fail+pass}}次</div>
        </div>
      </div>
    </div>
    <div style="text-align: center;">版本号:20.05.15.15</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: {},
      testInfo: {},
      page: 1,
      limit: 10000,
      total: 0,
      pass: 0,
      fail: 0,
      empty: 0,
      totalStudyTime: 0
    };
  },
  components: {},
  methods: {
    study() {
      this.$router.push({ name: "onlineStudy", path: "/onlineStudy" });
    },
    classes() {
      this.$router.push({ name: "independentTest", path: "/independentTest" });
    },
    myTest() {
      this.$router.push({ name: "onlineTest", path: "/onlineTest" });
    },
    testPaper(e) {
      this.$router.push({ name: "testRecords", path: "/testRecords" });
    },
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
    //获取考试记录
    getTestNumber() {
      this.$grade
        .gettestNumber()
        .then(res => {
          if (res.data.code === 0) {
            this.total = res.data.data[0].totalCount;
            this.totalNum = res.data.data[0].totalCount;
            this.pass = res.data.data[0].successCount;
            this.fail = res.data.data[0].failCount;
            this.empty = res.data.data[0].undoCount;
          }
        })
        .catch();
    },
    //获取我的学习记录
    getStudy() {
      this.$api
        .getStudyRecord(this.userInfo.userId, this.page, this.limit)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            res.data.data.map(item => {
              this.totalStudyTime += item.totalMinutes;
            });
            if (this.totalStudyTime > 60) {
              let hour = Math.floor(this.totalStudyTime / 60);
              let minute = this.totalStudyTime - hour * 60;
              this.totalStudyTime = hour + "小时" + minute+"分钟";
            } else {
              this.totalStudyTime = this.totalStudyTime+"分钟";
            }
          }
        })
        .catch();
    }
  },
  mounted() {
    this.getTestNumber();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo.lastLoginTime = this.timeFormat(this.userInfo.lastLoginTime);
    if (this.userInfo !== {}) {
      this.getStudy();
    }
    this.$api
      .getMyMsg()
      .then(res => {
        // console.log(res);
        if (res.data.code === 0) {
          this.testInfo = res.data.data[0];
          // console.log(this.testInfo);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.loginmsg {
  background: #e2e2e2;
  width: 92%;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.classes {
  // background: #efefef;
  width: 92%;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  
}
.test {
  // background: #efefef;
  width: 92%;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.classes:hover {
  background: #e2e2e2;
  cursor: pointer;
}
.logintime {
  padding: 10px 20px 0 20px;
  display: flex;
  align-items: center;
  .name {
    width: 13%;
  }
  .content {
    padding-left: 8px;
  }
}
.count {
  color: red;
}
.el-col {
  // border: 0.5px solid #e2e2e2;
  :hover {
    cursor: pointer;
    background: #e9e9e9;
    color: green;
  }
}
.grid-content {
  text-align: center;
  padding: 20px;
  border: 0.5px solid #e2e2e2;
}
.el-row {
  width: 60%;
  margin-top: 20px;
}
.newTest {
  color: red;
  width: 123px;
  :hover {
    cursor: pointer;
    color: green;
  }
  position: relative;
  .new {
    position: absolute;
    top: -18px;
    right: 10px;
    background: red;
    color: white;
    :hover {
      cursor: pointer;
      color: red !important;
      background: white;
    }
  }
}
</style>