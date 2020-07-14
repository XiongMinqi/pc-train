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
    </div>
    <div v-if="testList.length>0">
      <div class="flex" v-for="(item,index) in testList" :key="index">
        <div style=" display: flex;align-items: center;">
          <div class="userImg">
            <img src="../../assets/icon/testlist.png" alt />
          </div>
          <div style="margin-left:20px">
            <div class="name" style="font-weight:bold">{{item.name}}</div>
            <div>
              专业 : {{item.majorname}} |
              部门 : {{item.departname}} |
              总分 ： {{item.totalScore}}分 |
              及格分数:
              <span
                style="color:#3C3CC4"
              >{{item.passScore}}分</span>
            </div>

            <div>
              创建时间 : {{item.publishTime}} |
              <span
                style="color:#CC3352"
              >截止时间 : {{item.expirationTime}}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div v-if="item.status===1" @click="showToast(item)">
              <el-button type="danger" round>未开始</el-button>
            </div>
            <div v-if="item.status===3" @click="showToast(item)">
              <el-button type="danger" round>审核中</el-button>
            </div>
            <div v-if="item.status===4" @click="showToast(item)">
              <el-button type="danger" round>已结束</el-button>
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
          :page-sizes="[5, 10, 15, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
    <div v-else class="else">暂无考试</div>
    <el-dialog width="80%" title="试卷明细" top="1vh" :visible.sync="dialogTableVisible">
      <div v-loading="submitPaperloading">
        <submitPaper :submitId="submitId" :paperDetail="paperDetail" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import submitPaper from "../../components/submitPaper/onlineTestPaper";
export default {
  data() {
    return {
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
      paperDetail: {},
      subjectName: []
    };
  },
  components: { submitPaper },
  methods: {
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
            this.getTest();
            this.subjectName = res.data.data[0]["科目名称"];
            this.major = res.data.data[0]["专业名称"];
            this.department = res.data.data[0]["部门名称"];
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
    //开始筛选
    getlist() {},
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
      let data = {
        page: this.offset,
        limit: this.limit,
        object: {
          examName: this.paperName
        }
      };
      this.$onlineTest
        .getTestInfo(data)
        .then(res => {
          this.loading = false;
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
            // console.log(this.testList);
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
    },
    showToast(e) {
      console.log(e);
      if (e.status === 1) {
        this.$message({
          message: "考试还未开始，不能进入该场考试",
          type: "warning"
        });
      }
      if (e.status === 3) {
        if (e.totalScore > 0) {
          this.submitId = e.paperId;
          this.paperDetail = {};
          this.paperDetail = e;
          this.dialogTableVisible = true;
        } else {
          this.$message({
            message: "发生错误",
            type: "warning"
          });
        }
      }
      if (e.status === 4) {
        if (e.totalScore > 0) {
          this.submitId = e.paperId;
          this.paperDetail = {};
          this.paperDetail = e;
          this.dialogTableVisible = true;
        } else {
          this.$message({
            message: "发生错误",
            type: "warning"
          });
        }
      }
    },
    onlineTest(e) {
      if (e.totalScore > 0) {
        this.$message({
          message: "即将进入考试，祝您考试顺利",
          type: "success"
        });
        this.$router.push({
          path: "/testIng",
          query: {
            paperId: e.paperId,
            id: e.id
          }
        });
      } else {
        this.$message({
          message: "发生错误",
          type: "warning"
        });
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
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // this.getSubjectDetail();
    this.getSubjectName();
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
</style>