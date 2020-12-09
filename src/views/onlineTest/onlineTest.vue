<template>
  <div v-loading="loading">
    <div class="choose">
      <div class="classname">
        <el-input
          v-model="paperName"
          maxlength="30"
          show-word-limit
          clearable
          placeholder="请输入试卷名称"
        ></el-input>
      </div>
      <div class="btn">
        <el-button type="primary" @click="getTest">开始筛选</el-button>
      </div>
      <div class="explain">显示30天内，您需要参加的考试</div>
    </div>
    <div v-if="showTestList">
      <div v-if="testList.length>0">
        <div
          class="flex testDetail"
          v-for="(item,index) in testList"
          :key="index"
          @click="onlineTest(item)"
        >
          <div style=" display: flex;align-items: center;">
            <div class="userImg">
              <!-- <img src="../../assets/icon/testlist.png" alt /> -->
              <img src="../../assets/img/icon.png" alt />
            </div>
            <div style="margin-left:30px">
              <div class="name" style="font-weight:bold">
                {{item.name}}
                <span
                  style="font-style: italic;font-weight:normal;font-size:13px;color:#909399;padding-left:10px"
                >{{item.majorname}} / {{item.departname}}</span>
                <span style="margin-left:10px">
                  <el-tag type="success" size="mini" v-if="item.level===0">简单</el-tag>
                  <el-tag type="info" size="mini" v-if="item.level===1">普通</el-tag>
                  <el-tag type="warning" size="mini" v-if="item.level===2">困难</el-tag>
                </span>
              </div>
              <div style="color:#606266;margin-bottom:5px;font-size:14px">
                试题总分 : {{item.totalScore}}分
                <el-divider direction="vertical"></el-divider>及格分数 :
                <span class="bg-primary">{{item.passScore}}分</span>
<!--                <el-divider direction="vertical"></el-divider>-->
<!--                考试时间 : {{item.paperMinutes}}分钟-->
              </div>

              <div style="color:#606266;font-size:14px">
                考试开始时间 : {{item.beginTestTime}}
                <el-divider direction="vertical"></el-divider>截止交卷时间 :
                <span class="bg-primary">{{item.expirationTime}}</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div v-if="item.status===1">
                <div class="wordsedeed unbegin">未开始</div>
              </div>
              <div v-if="item.status===3">
                <div class="wordsedeed doshenhe">审核中</div>
              </div>
              <div v-if="item.status===4">
                <div class="wordsedeed finished">已结束</div>
              </div>
              <div v-if="item.status===2">
                <div class="wordsedeed doing">运行中</div>
              </div>
            </div>
          </div>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20, 30, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <div v-else class="else"></div>
    </div>

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
import submitPaper from "../../components/submitPaper/onlineTestPaper";
export default {
  data() {
    return {
      showTestList: false,
      currentPage: 1,
      offset: 1,
      limit: 5,
      total: 0,
      testList: [],
      major: [],
      paperName: "",
      department: [],
      loading: true,
      dialogTableVisible: false,
      submitPaperloading: false,
      submitId: "",
      setTime: {},
      paperDetail: {},
      subjectName: [],
      testDeatil: {},
    };
  },
  components: { submitPaper },
  methods: {
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
    //获取科目名称
    getSubjectName() {
      this.$grade
        .getdict()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.getTest();
            this.subjectName = res.data.data[0]["科目名称"];
            this.major = res.data.data[0]["专业名称"];
            this.department = res.data.data[0]["部门名称"];
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
    //开始筛选
    getlist() {},
    //获取考试信息
    getTest() {
      this.loading = true;
      let data = {
        page: this.offset,
        limit: this.limit,
        object: {
          examName: this.paperName,
        },
      };
      this.$onlineTest
        .getTestInfo(data)
        .then((res) => {
          this.loading = false;
          this.showTestList = true;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.total = res.data.count;
            this.testList = res.data.data;
            this.testList.map((item) => {
              this.$set(item, "beginTestTime", this.timeFormat(item.publishTime));
              // item.publishTime = this.timeFormat(item.publishTime);
              item.createTime = this.timeFormat(item.createTime);
              let expirationTime =
                Date.parse(new Date(item.publishTime)) + item.minutes * 60000;
              this.major.map((itm) => {
                if (item.majorId == itm.key) {
                  this.$set(item, "majorname", itm.value);
                }
              });
              this.department.map((itm) => {
                if (item.departmentId == itm.key) {
                  this.$set(item, "departname", itm.value);
                }
              });
              this.$set(
                item,
                "expirationTime",
                this.timeFormat(expirationTime)
              );
              this.$set(item, "expirationTestTime", expirationTime);
            });
            // this.testList.sort(function(a, b) {
            //   let minTime = new Date(a.publishTime).getTime();
            //   let maxTime = new Date(b.publishTime).getTime();
            //   return maxTime - minTime;
            // });
            // console.log(this.testList);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.showTestList = true;
          this.loading = false;
          //console.log(err);
        });
    },
    showToast(e) {
      if (e.status === 1) {
        this.$message({
          message: "考试还未开始，不能进入该场考试",
          type: "warning",
        });
      }
      if (e.status === 3) {
        this.$message({
          message: "考试正在审核，不能再次进入该场考试",
          type: "warning",
        });
      }
      if (e.status === 4) {
        this.$message({
          message: "考试已结束，不能再次进入该场考试",
          type: "warning",
        });
      }
    },
    onlineTest(e) {
      console.log(e);
      // if (e.status === 1) {
      //   this.$message({
      //     message: "考试还未开始，不能进入该场考试",
      //     type: "warning",
      //   });
      // }
      if (e.status === 3) {
        this.$message({
          message: "考试正在审核，不能再次进入该场考试",
          type: "warning",
        });
      }
      if (e.status === 4) {
        this.$message({
          message: "考试已结束，不能再次进入该场考试",
          type: "warning",
        });
      }
      if (e.status === 2||e.status===1) {
        if (e.totalScore > 0) {
          //获取服务器当前时间
            this.$api.getNowTime().then((res) => {
              if (res.data.code === 1000) {
                this.$router.push({ name: "login", path: "/login" });
              } else if (res.data.code === 0) {

                let newTime = res.data.data[0];
                let nowTest = new Date(newTime);
                let nowTime = Date.parse(nowTest);
                let beginTime = Date.parse(new Date(e.publishTime))
                if(nowTime<beginTime){
                  this.$message({
                      message: "考试还未开始，不能进入该场考试",
                      type: "warning",
                    });
                } else {
                  if(nowTime<e.expirationTestTime){
                    this.dialogTableVisible = true;
                    this.testDeatil = e;
                  } else {
                    this.$message({
                      message: "考试时间已过",
                      type: "warning",
                    });
                  }
                }

                // console.log(newTime, nowTest, this.nowTeastTime);
              } else {
                this.showFalut=true;
                let nowTest = new Date();
                this.nowTeastTime = Date.parse(nowTest);
              }
            });
          // this.dialogTableVisible = true;
          // this.testDeatil = e;
        } else {
          this.$message({
            message: "试卷发生错误，请联系管理员",
            type: "warning",
          });
        }
      }
    },
    handleSizeChange(val) {
      this.loading = true;
      this.offset = 1;
      this.limit = val;
      this.getTest();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.offset = val;
      // console.log(this.offset, this.limit);
      this.getTest();
    },
    //获取专业和部门名称
    getSubjectDetail() {
      this.$api
        .getSubject()
        .then((res) => {
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
    timeOut() {
      this.setTime = setInterval(() => {
        // console.log("存数据");
        this.getSubjectName();
      }, 6000);
    },
  },
  mounted() {
    this.getSubjectName();
    // this.timeOut();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  // padding-right: 50px;
  // border: 1px solid #e9e9e9;
  border-radius: 6px;
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
.userImg {
  width: 150px;
  height: 110px;
  img {
    width: 100%;
    height: 100%;
  }
}
.name {
  padding-bottom: 10px;
  font-size: 17px;
}
.else {
  padding: 30px;
  text-align: center;
  color: red;
}
.words {
  padding-bottom: 10px;
  padding-left: 10px;
}
.choose {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}
.classname {
  margin-right: 20px;
}
.testDetail {
  box-shadow: 5px 5px 10px #c2c2c2;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
}
.explain {
  margin-left: 30px;
  color: #aaaaaa;
}
.wordsedeed {
  background-color: #f2f6fc;
  width: 100px;
  height: 110px;
  line-height: 110px;
  text-align: center;
}
.finished {
  color: #f56c6c;
  // background-color:#aaaaaa;
}
.doshenhe {
  color: #e6a23c;
}
.doing {
  color: #67c23a;
}
.unbegin {
  color: #909399;
}
.needKnown {
  height: 50vh;
  overflow-y: scroll;
  color: #909399;
}
</style>