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
                    type="primary"
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
          <div class="flex aligh-center numberCount box-shadow numcou">
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
          <div class="flex aligh-center numberCount box-shadow numcou">
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
          <div class="flex aligh-center numberCount box-shadow numcou">
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
          <div class="flex aligh-center numberCount box-shadow numcou">
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
          <div class="classes box-shadow">
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
          <div class="record box-shadow">
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
                <div class="content">{{fail+pass}} 次</div>
              </div>
            </div>
          </div>
        </div>
        <div class="courseList box-shadow">
          <div>
            <i class="el-icon-edit iconfont"></i>我的考试
          </div>
          <el-table :data="testList" style="width: 100%" height="300">
            <el-table-column prop="name" label="考试名称"></el-table-column>
            <el-table-column prop="passScore" label="通过分数" width="120"></el-table-column>
            <el-table-column prop="totalScore" label="总分数" width="120"></el-table-column>
            <el-table-column prop="publishTime" label="考试开始时间"></el-table-column>
            <el-table-column prop="expirationTime" label="截止交卷时间"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                >进入考试</el-button>
              </template>
            </el-table-column>
          </el-table>
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
        <i class="el-icon-s-help iconfont"></i>学习任务
      </div>
      <div v-if="showMission">
        <el-table :data="missionList" style="width: 100%" height="300">
          <el-table-column prop="name" label="任务名称"></el-table-column>
          <el-table-column prop="requireLearnTime" label="要求学习时长"></el-table-column>
          <el-table-column prop="learnTime" label="已学习时长"></el-table-column>
          <el-table-column prop="publishTime" label="发布时间"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="vision" style="text-align: center;margin-bottom:50px">版本号:20.01.06.11</div>
    <el-dialog width="60%" title="考试须知" :visible.sync="dialogTableVisible">
      <div class="rich-text needKnown">
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >一、考生应讲诚信并自觉服从监考员等考试工作人员管理，不得以任何理由妨碍监考员等考试工作人员履行职责，不得扰乱考场及其他考试工作地点的秩序。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >二、凭有效身份证件，按规定时间和地点参加考试。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >三、考生入场，严禁携带各种通信工具 (如手机、寻呼机及其他无线接收、传送设备等）、电子存储记忆录放设备以及涂改液、修正带等物品进入考场。允许使用计算器的课程，计算器也不得有程序储存功能。考场内不得自行传递文具、用品等。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >四、考生入场后，遇计算机或考试系统问题，可举手询问；涉及试题内容的疑问，不得向监考员询问。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >五、统一开考信号发出后才能开始答题。考试结束信号发出后考生立即停止答卷，根据监考员指令依次退出考场。交卷出场后不得再进场续考，也不得在考场附近逗留或交谈。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >六、在考场内须保持安静，不准吸烟，不准喧哗，不准交头接耳、左顾右盼、打手势、做暗号，不准夹带、旁窥、抄袭或有意让他人抄袭。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >七、如不遵守考场纪律，不服从考试工作人员管理，有违纪、作弊等行为的，将按照公司规定进行处理并记入考生诚信考试电子档案。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:400; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >八、请不要在输入框里输入任何表情符号，否则将不能提交试卷。</span>
        </p>
        <p style="line-height:0; margin-bottom:5px;">
          <span
            class="--mb--rich-text"
            data-boldtype="0"
            style="font-family:SourceHanSansSC; font-weight:bold; font-size:16px;  font-style:normal; letter-spacing:0px; line-height:24px; text-decoration:none;"
          >九、建议在考试截止前五分钟提交试卷，若超时试卷将无法提交。</span>
        </p>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
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
      dialogTableVisible: false,
      totalScore: 0,
      startVal: 0,
      duration: 2000,
      allTestList: [],
      missionList: [],
      testList: [],
      testDeatil: {},
    };
  },
  components: { countTo, brokenLine },
  methods: {
    handleEdit(index, row) {
      if (row.totalScore > 0) {
        this.dialogTableVisible = true;
        this.testDeatil = row;
        // this.$message({
        //   message: "即将进入考试，祝您考试顺利",
        //   type: "success",
        // });
        // this.$router.push({
        //   path: "/testIng",
        //   query: {
        //     paperId: row.paperId,
        //     id: row.id,
        //   },
        // });
      } else {
        this.$message({
          message: "试卷发生错误，请联系管理员",
          type: "warning",
        });
      }
    },
    confirm() {
      this.$message({
        message: "即将进入考试，祝您考试顺利",
        type: "success",
      });
      this.$router.push({
        path: "/testIng",
        query: {
          paperId: this.testDeatil.paperId,
          id: this.testDeatil.id,
          finishTime: this.testDeatil.expirationTestTime,
        },
      });
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
        .getStudyRecord(this.page, this.limit)
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
              this.totalStudyTime = hour + " 小时 " + minute + " 分钟";
            } else {
              this.totalStudyTime = this.totalStudyTime + " 分钟";
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
            // this.testList.map((item) => {
            //   item.publishTime = this.timeFormat(item.publishTime);
            // });
            this.testList.map((item) => {
              item.publishTime = this.timeFormat(item.publishTime);
              item.createTime = this.timeFormat(item.createTime);
              let expirationTime =
                Date.parse(new Date(item.publishTime)) + item.minutes * 60000;
              this.$set(
                item,
                "expirationTime",
                this.timeFormat(expirationTime)
              );
              this.$set(
                 item,
                "expirationTestTime",
                expirationTime
              )
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
  //cursor: pointer;
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
  //cursor: pointer;
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
    //cursor: pointer;
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
    //cursor: pointer;
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
      //cursor: pointer;
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
  margin-bottom: 10px;
}
.useravatarUrl {
  width: 84px;
  height: 84px;
}
.userimage {
  padding-bottom: 10px;
  border-bottom: 2px solid #409eff;
}
.userImg {
  width: 100%;
  height: 100%;
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
    //cursor: pointer;
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
  // width: 40%;
}
.wordsRight {
  width: 283px;
  text-align: center;
}
.learnRecord {
  padding-top: 18px;
}
.names {
  width: 100px;
  // text-align: end;
}
.needKnown {
  height: 50vh;
  overflow-y: scroll;
  color: #909399;
}
</style>