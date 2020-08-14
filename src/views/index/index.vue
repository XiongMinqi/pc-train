<template>
  <div v-loading="loading" class="index">
    <div class="flex justify-between">
      <div class="index-left">
        <div class="userInfomation box-shadow">
          <div class="flex aligh-center userimage">
            <div class="useravatarUrl" v-if="userInfo.avatarUrl===null || userInfo.avatarUrl===''">
              <img class="userImg" src="../../assets/icon/userImg.jpg" alt />
            </div>
            <div v-else class="useravatarUrl">
              <!-- <img class="userImg" src="../../assets/icon/userImg.jpg" alt /> -->
               <img class="userImg" :src="userInfo.avatarUrl" alt />
            </div>
            <div class="username">{{userInfo.nickName}}</div>
          </div>
          <div class="flex aligh-center fosize">
            <div class="names">登录次数：</div>
            <div class="content" v-if="userInfo.loginCount">{{userInfo.loginCount}} 次</div>
            <div class="content" v-else>暂无登录记录</div>
          </div>
          <div class="flex aligh-center fosize">
            <div class="names">上次登录时间：</div>
            <div class="content" v-if="userInfo.lastLoginTime">{{userInfo.lastLoginTime}}</div>
            <div class="content" v-else>暂时没有上次登录的记录</div>
          </div>
          <div class="flex aligh-center fosize">
            <div class="names">我的积分：</div>
            <div class="content">{{totalScore}} 分</div>
          </div>
        </div>
        <div>
          <div class="box-shadow" style="border: 1px solid #e2e2e2;">
            <div style="padding:10px">
              <i class="el-icon-s-data iconfont"></i>最近考试
            </div>
            <div v-if="showTest">
              <div class="testrecord" v-if="allTestList.length>0">
                <el-timeline :reverse="false">
                  <el-timeline-item
                    v-for="(item, index) in allTestList"
                    :key="index"
                    :timestamp="item.beginTime"
                  >{{item.examName}}</el-timeline-item>
                </el-timeline>
              </div>
              <div v-else class="testrecord text-center">暂无数据</div>
            </div>
          </div>
        </div>
      </div>
      <div class="grade">
        <div class="flex aligh-center justify-between">
          <div class="flex aligh-center numberCount box-shadow numcou" @click="testPaper(1)">
            <div class="iconLeft">
              <div class="numberImg back-primary">
                <img src="../../assets/img/allpaper.png" alt />
              </div>
            </div>
            <div class="text-center wordsRight">
              <div class="bg-primary ftsize">
                <countTo :startVal="startVal" :endVal="total" :duration="duration"></countTo>
              </div>
              <div class="bg-info">全部试卷</div>
            </div>
          </div>
          <div class="flex aligh-center numberCount box-shadow numcou" @click="testPaper(2)">
            <div class="indexLeft">
              <div class="numberImg back-success">
                <img src="../../assets/img/eglass-pass.png" alt />
              </div>
            </div>
            <div class="text-center wordsRight">
              <div class="bg-success ftsize">
                <countTo :startVal="startVal" :endVal="pass" :duration="duration"></countTo>
              </div>
              <div class="bg-info">及格试卷</div>
            </div>
          </div>
          <div class="flex aligh-center numberCount box-shadow numcou" @click="testPaper(3)">
            <div class="indexLeft">
              <div class="numberImg back-warning">
                <img src="../../assets/img/failure.png" alt />
              </div>
            </div>
            <div class="text-center wordsRight">
              <div class="bg-warning ftsize">
                <countTo :startVal="startVal" :endVal="fail" :duration="duration"></countTo>
              </div>
              <div class="bg-info">不及格试卷</div>
            </div>
          </div>
          <div class="flex aligh-center numberCount box-shadow numcou" @click="testPaper(4)">
            <div class="indexLeft">
              <div class="numberImg back-info">
                <img src="../../assets/img/file-empty.png" alt />
              </div>
            </div>
            <div class="text-center wordsRight">
              <div class="bg-info ftsize">
                <countTo :startVal="startVal" :endVal="empty" :duration="duration"></countTo>
              </div>
              <div class="bg-info">空白试卷</div>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="classes box-shadow" @click="classes">
            <div>
              <i class="el-icon-s-promotion iconfont"></i>我的课程进度(本周)
            </div>
            <div>
              <div class="logintime">
                <div class="name">已学习 :</div>
                <div class="bg-primary">{{alreadyStudy}} 课</div>
              </div>
              <div class="logintime">
                <div class="name">未学习 :</div>
                <div class="bg-primary">{{unstudy}} 课</div>
              </div>
              <div style="width:90%;margin-top:10px;padding-left:20px">
                <el-progress :percentage="studypercent"></el-progress>
              </div>
            </div>
          </div>
          <div class="record box-shadow" @click="study">
            <div>
              <i class="el-icon-tickets iconfont"></i>我的学习记录
            </div>
            <div>
              <div class="logintime learnRecord">
                <div>在线学习时长 :</div>
                <div class="content">{{totalStudyTime}}</div>
              </div>
              <div class="logintime learnRecord">
                <div>在线测试记录 :</div>
                <div class="content">{{fail+pass}}次</div>
              </div>
            </div>
          </div>
        </div>
        <div class="courseList box-shadow">
          <div>
            <i class="el-icon-s-help iconfont"></i>学习任务
          </div>
          <div v-if="showMission">
            <el-table :data="missionList" style="width: 100%" height="300">
              <!-- <template slot="empty">
                <div>
                  <img style="width:250px;height:200px" src="../../assets/icon/kong.png" alt />
                </div>
              </template>-->
              <el-table-column prop="name" label="任务名称" width="180"></el-table-column>
              <el-table-column prop="requireLearnTime" label="要求学习时长" width="180"></el-table-column>
              <el-table-column prop="learnTime" label="已学习时长" width="180"></el-table-column>
              <el-table-column prop="publishTime" label="发布时间"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="broken box-shadow">
      <div>
        <i class="el-icon-medal iconfont" style="margin-bottom:10px"></i>成绩统计
      </div>
      <brokenLine />
    </div>
    <div class="runningTestList box-shadow">
      <div>
        <i class="el-icon-edit iconfont"></i>我的考试
      </div>
      <el-table :data="testList" style="width: 100%" height="300">
        <!-- <template slot="empty">
          <div>
            <img style="width:250px;height:200px;" src="../../assets/icon/kong.png" alt />
          </div>
        </template>-->
        <el-table-column prop="name" label="考试名称"></el-table-column>
        <el-table-column prop="passScore" label="通过分数"></el-table-column>
        <el-table-column prop="totalScore" label="总分数"></el-table-column>
        <el-table-column prop="publishTime" label="考试时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">进入考试</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="vision" style="text-align: center;">版本号:20.08.13.17</div>
  </div>
</template>
<script>
import countTo from "vue-count-to";
import brokenLine from "../../components/brokenLine/indexBrokenLine";
export default {
  data() {
    return {
      userInfo: {},
      showTest: false,
      showMission: false,
      testInfo: {},
      page: 1,
      limit: 10000,
      total: 0,
      pass: 0,
      fail: 0,
      empty: 0,
      totalStudyTime: 0,
      loading: true,
      alreadyStudy: 0,
      unstudy: 0,
      studypercent: 0,
      totalScore: 0,
      startVal: 0,
      duration: 2000,
      allTestList: [],
      missionList: [],
      testList: [],
    };
  },
  components: { countTo, brokenLine },
  methods: {
    handleEdit(index, row) {
      if (row.totalScore > 0) {
        this.$message({
          message: "即将进入考试，祝您考试顺利",
          type: "success",
        });
        this.$router.push({
          path: "/testIng",
          query: {
            paperId: row.paperId,
            id: row.id,
          },
        });
      } else {
        this.$message({
          message: "试卷发生错误，请联系管理员",
          type: "warning",
        });
      }
    },
    study() {
      this.$router.push({ name: "studyRecord", path: "/studyRecord" });
    },
    classes() {
      this.$router.push({ name: "classList", path: "/classList" });
    },
    myTest() {
      this.$router.push({ name: "onlineTest", path: "/onlineTest" });
    },
    testPaper(e) {
      this.$router.push({ name: "testRecords", path: "/testRecords" });
    },
    //获取考试记录
    getTestNumber() {
      this.$grade
        .gettestNumber()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            this.total = res.data.data[0].totalCount;
            this.totalNum = res.data.data[0].totalCount;
            this.pass = res.data.data[0].successCount;
            this.fail = res.data.data[0].failCount;
            this.empty = res.data.data[0].undoCount;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    //获取我的学习记录
    getStudy() {
      this.$api
        .getStudyRecord(this.userInfo.userId, this.page, this.limit)
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            res.data.data.map((item) => {
              this.totalStudyTime += item.totalMinutes;
            });
            if (this.totalStudyTime > 60) {
              let hour = Math.floor(this.totalStudyTime / 60);
              let minute = this.totalStudyTime - hour * 60;
              this.totalStudyTime = hour + "小时" + minute + "分钟";
            } else {
              this.totalStudyTime = this.totalStudyTime + "分钟";
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    //获取我的课程进度
    getCourse() {
      let data = {
        timeRange: 1,
      };
      this.$api
        .getCouese(data)
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            let total = res.data.data[0].total;
            this.alreadyStudy = res.data.data[0].done;
            this.unstudy = total - res.data.data[0].done;
            if (this.alreadyStudy > 0 && total > 0) {
              this.studypercent = Math.ceil((this.alreadyStudy / total) * 100);
            } else {
              this.studypercent = 0;
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    //获取总积分
    getTotalScore() {
      this.$api
        .getTotalScore()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            this.totalScore = res.data.data[0].point;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    //获取运行中的考试
    getRunningTest() {
      this.$api
        .getRunningTest()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            this.testList = res.data.data;
            this.testList.map((item) => {
              item.publishTime = this.timeFormat(item.publishTime);
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    getTestExam() {
      let data = {
        page: 1,
        limit: 5,
        object: {
          examName: "",
          status: null,
          subjectId: null,
        },
      };
      this.$grade
        .getExam(data)
        .then((res) => {
          this.loading = false;
          this.showTest = true;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            this.allTestList = res.data.data;
            this.allTestList.map((item) => {
              item.beginTime = this.timeFormat(item.beginTime);
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.showTest = true;
          //console.log(err);
        });
    },
    getUndoMission() {
      let data = {
        limit: 10,
        page: 1,
        object: {
          isRunning: true,
        },
      };
      this.$api
        .getUndoMission(data)
        .then((res) => {
          this.loading = false;
          this.showMission = true;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            this.missionList = res.data.data;
            this.missionList.map((item) => {
              item.publishTime = this.timeFormat(item.publishTime);
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.showMission = true;
          //console.log(err);
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
  },
  mounted() {
    this.getTestNumber();
    this.getCourse();
    this.getTotalScore();
    this.getTestExam();
    this.getUndoMission();
    this.getRunningTest();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(this.userInfo);
    this.userInfo.lastLoginTime = this.timeFormat(this.userInfo.lastLoginTime);
    if (this.userInfo !== {}) {
      this.getStudy();
    }
    this.$api
      .getMyMsg()
      .then((res) => {
        if (res.data.code === 1000) {
          this.$router.push({ name: "login", path: "/login" });
        } else if (res.data.code === 0) {
          this.testInfo = res.data.data[0];
        } else {
          this.$message({
            message: res.data.msg,
            type: "warning",
          });
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.aligh-center {
  align-items: center;
}
.text-center {
  text-align: center;
}
.bg-white {
  background-color: white;
}
.fosize {
  font-size: 12px;
  color: #aaaaaa;
  padding: 2px 0;
}
.loginmsg {
  width: 50%;
}
.header {
  // background: #e2e2e2;
  // font-weight: bold;
  border: 1px solid #e2e2e2;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}
.record {
  width: 45%;
  height: 132px;
  border: 1px solid #e2e2e2;
  padding: 10px;
  margin: 10px 0 10px 10px;
}
.record:hover {
  // color: green;
  cursor: pointer;
}
.classes {
  width: 50%;
  height: 132px;
  margin-top: 10px;
  border: 1px solid #e2e2e2;
  padding: 10px;
  margin-bottom: 10px;
}
.test {
  // background: #efefef;
  width: 92%;
  // font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
}
.classes:hover {
  // background: #e2e2e2;
  cursor: pointer;
}
.logintime {
  padding: 18px 20px 0 20px;
  display: flex;
  align-items: center;
  .name {
    margin-right: 10px;
  }
  .content {
    padding-left: 8px;
  }
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
.vision {
  margin-top: 20px;
}
.box-shadow {
  box-shadow: 0 0 20px #e2e2e2;
}
.index-left {
  width: 30%;
}
.userInfomation {
  border: 1px solid #f2f2f2;
  padding: 20px;
  // margin-right: 10px;
  border: 1px solid #e2e2e2;
  margin-bottom: 10px;
}
.useravatarUrl {
}
.userimage {
  padding-bottom: 10px;
  border-bottom: 2px solid #409eff;
}
.userImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
}
.username {
  font-weight: bold;
  font-size: 20px;
  width: 205px;
  text-align: center;
}
.numberCount {
  border: 1px solid #e2e2e2;
  .numberImg {
    width: 80px;
    height: 80px;
    // margin-right: 8%;
    position: relative;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 50px;
      height: 50px;
    }
  }
}
.numcou {
  width: 24%;
  &:hover {
    cursor: pointer;
    // background: #f2f2f2;
  }
}
.grade {
  width: 69%;
}
.testrecord {
  margin-top: 10px;
  padding: 10px;
  height: 310px;
  margin-bottom: 10px;
}
.courseList {
  height: 323px;
  border: 1px solid #e2e2e2;
  padding: 10px;
}
.runningTestList {
  margin-top: 10px;
  padding: 10px;
}
.iconfont {
  color: #409eff;
  margin-right: 10px;
}
.broken {
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 10px;
}
.ftsize {
  font-size: 20px;
  font-weight: bold;
}
.iconLeft {
  width: 40%;
}
.wordsRight {
  width: 60%;
}
.learnRecord {
  padding-top: 18px;
}
.names{
  width: 100px;
  // text-align: end;
}
</style>