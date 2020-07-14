<template>
  <div v-loading="loading">
    <div class="choose">
      <div class="classname">
        <el-select v-model="subname" placeholder="请选择科目">
          <el-option key value="不限"></el-option>
          <el-option v-for="item in subjectName" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="classname">
        <el-input
          v-model="paperName"
          maxlength="30"
          show-word-limit
          clearable
          placeholder="请输入考试名称"
        ></el-input>
      </div>
      <div class="btn">
        <el-button type="primary" @click="getTestExam">开始筛选</el-button>
      </div>
    </div>
    <div class="indexLeft">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple-all" @click="goTo(null)">
            <span>全部试卷({{total}})</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-pass" @click="goTo(0)">
            <span>及格试卷({{pass}})</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-fail" @click="goTo(1)">
            <span>不及格试卷({{fail}})</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-empty" @click="goTo(2)">
            <span>未做试卷({{empty}})</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="scroll" v-if="allTestList.length>=0">
      <div v-if="allTestList.length>0" class="infinite-list" style="overflow:auto">
        <div>
          <div class="flex">
            <div class="index">序号</div>
            <!-- <div class="testName">试卷</div> -->
            <div class="testName">考试名称</div>
            <div class="subject">科目</div>
            <div class="testTime">开始答题时间</div>
            <div class="duringTime">考试用时</div>
            <div class="score">总分</div>
            <div class="score">得分</div>
            <div class="duringTime">及格情况</div>
            <div class="operation">操作</div>
          </div>
          <div>
            <div v-for="(item,index) in allTestList" :key="index">
              <div class="flex">
                <div class="index" v-if="index>=9">{{index+1}}</div>
                <div class="index" v-if="index<9">0{{index+1}}</div>
                <!-- <div class="testName">{{item.paperName}}</div> -->
                <div class="testName">{{item.examName}}</div>
                <div class="subject">
                  <span v-if="item.subjectId">{{item.subjextName}}</span>
                  <span v-else>---</span>
                </div>
                <div class="testTime">{{item.beginWriteTime}}</div>
                <div class="duringTime" v-if="item.costMinutes">{{item.costMinutes}}</div>
                <div class="duringTime" v-else>---</div>
                <div class="score">{{item.totalScore}}</div>
                <div class="score">{{item.score}}</div>
                <div class="duringTime">
                  <div v-if="item.isPass===true" style="color:green">及格</div>
                  <div v-else-if="item.isPass===null" style="color:#aaaaaa">未交卷</div>
                  <div v-else style="color:red">不及格</div>
                </div>
                <div
                  class="operation"
                  :class="item.submitId?'bgblue':'bggray'"
                  @click="checkDetail(item)"
                >
                  <span>查看明细</span>
                </div>
              </div>
            </div>
          </div>
          <el-dialog width="80%" title="试卷明细" top="1vh" :visible.sync="dialogTableVisible">
            <div v-loading="submitPaperloading">
              <submitPaper :submitId="submitId" :paperDetail="paperDetail" />
            </div>
          </el-dialog>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20, 30, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNum"
          ></el-pagination>
        </div>
      </div>
      <div v-else class="else">暂无数据</div>
    </div>
  </div>
</template>

<script>
import submitPaper from "../../components/submitPaper/submitPaper";
export default {
  data() {
    return {
      examList: [],
      allTestList: [],
      page: 1,
      limit: 5,
      status: null,
      totalNum: 0,
      total: 0,
      pass: 0,
      fail: 0,
      empty: 0,
      dialogTableVisible: false,
      submitId: 0,
      currentPage: 1,
      total: 0,
      paperDetail: {},
      subjectName: [],
      loading: true,
      submitPaperloading: false,
      paperName: "",
      subname: "不限"
    };
  },
  components: { submitPaper },
  methods: {
    goTo(e) {
      this.status = e;
      this.page = 1;
      this.getTestExam();
    },
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getTestExam();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      this.page = val;
      this.getTestExam();
    },
    //查看明细
    checkDetail(e) {
      if (e.submitId) {
        this.submitId = e.submitId;
        this.paperDetail = {};
        this.paperDetail = e;
        // console.log("允许查看");
        this.dialogTableVisible = true;
      } else {
        this.$message({
          message: "抱歉，暂时无法查看明细",
          type: "warning"
        });
      }
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
    //保留两位小数
    twoNumber(num) {
      let str = num;
      if (str.indexOf(".") == -1) {
        return num + ".00";
      } else {
        let len = str.length;
        let integerlen = str.indexOf(".");
        if (len > integerlen + 2) {
          return str.slice(0, integerlen + 3);
        } else if (len == integerlen + 2) {
          return str + "0";
        } else {
          return str;
        }
      }
    },
    //获取科目名称
    getSubjectName() {
      this.$grade
        .getdict()
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.getTestExam();
            this.subjectName = res.data.data[0]["科目名称"];
            // console.log(this.subjectName);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
        });
    },
    getTestNumber() {
      this.$grade
        .gettestNumber()
        .then(res => {
          this.loading = false;
          if (res.data.code === 0) {
            this.total = res.data.data[0].totalCount;
            this.totalNum = res.data.data[0].totalCount;
            this.pass = res.data.data[0].successCount;
            this.fail = res.data.data[0].failCount;
            this.empty = res.data.data[0].undoCount;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
        });
    },
    getTestExam() {
      this.loading = true;
      if (this.subname === "不限") {
        this.subjectId = null;
      } else {
        this.subjectName.map(item => {
          if (this.subname === item.value) {
            this.subjectId = Number(item.key);
          }
        });
      }
      let data = {
        page: this.page,
        limit: this.limit,
        object: {
          examName: this.paperName,
          status: this.status,
          subjectId: this.subjectId
        }
      };
      this.$grade
        .getExam(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.allTestList = res.data.data;
            this.totalNum = res.data.count;
            this.allTestList.map(item => {
              item.beginTime = this.timeFormat(item.beginTime);
              item.endWriteTime = this.timeFormat(item.endWriteTime);
              item.beginWriteTime = this.timeFormat(item.beginWriteTime);
              this.subjectName.map(itm => {
                if (itm.key == item.subjectId) {
                  this.$set(item, "subjextName", itm.value);
                }
              });
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          //console.log(err);
        });
    }
  },
  mounted() {
    this.getTestNumber();
    this.getSubjectName();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col {
  text-align: center;
}
.grid-content {
  padding: 10px 0;
  border-radius: 10px;
}
span :hover {
  color: red;
  cursor: pointer;
}

.bg-purple-all {
  background: #d3dce6;
  :hover {
    color: magenta;
    cursor: pointer;
  }
}
.bg-purple-pass {
  background: #e5e9f2;
  :hover {
    color: green;
    cursor: pointer;
  }
}
.bg-purple-fail {
  background: #d3dce6;
  :hover {
    color: red;
    cursor: pointer;
  }
}
.bg-purple-empty {
  background: #e5e9f2;
  :hover {
    color: blue;
    cursor: pointer;
  }
}
span {
  :hover {
    cursor: pointer;
  }
}
.bgblue {
  color: blue;
}
.bggray {
  color: #a1a1a1;
}
.el-dialog {
  margin-top: 1vh !important;
}
.scroll {
  height: 72vh;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 20px;
  .index {
    width: 3%;
  }
  .testName {
    width: 16%;
  }
  .subject {
    width: 8%;
  }
  .testTime {
    width: 15%;
  }
  .duringTime {
    width: 7%;
  }
  .score {
    width: 3%;
  }
  .operation {
    width: 10%;
    :hover {
      cursor: pointer;
    }
  }
  // :hover {
  //   cursor: pointer;
  // }
  div {
    overflow: hidden;
  }
}
.block {
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
}
.indexLeft {
  margin-bottom: 20px;
}
.choose {
  display: flex;
  align-items: center;
  padding-bottom: 8px;
}
.classname {
  margin-right: 20px;
}
</style>