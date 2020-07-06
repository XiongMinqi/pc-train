<template>
  <div class="scroll" v-if="allTestList.length>=0">
    <div v-if="emptyScoreData.length>0" class="infinite-list" style="overflow:auto">
      <div class="flex">
        <div class="index">序号</div>
        <div class="testName">试卷</div>
        <div class="subject">科目</div>
        <div class="testTime">考试时间</div>
        <div class="duringTime">考试用时</div>
        <div class="score">得分</div>
        <div class="operation">操作</div>
      </div>
      <div>
        <div v-for="(item,index) in emptyScoreData" :key="index">
          <div class="flex">
            <div class="index" v-if="index>=9">{{index+1}}</div>
            <div class="index" v-if="index<9">0{{index+1}}</div>
            <div class="testName">{{item.paperName}}</div>
            <div class="subject">
              <span v-if="item.subjectId">{{item.subjextName}}</span>
              <span v-else>---</span>
            </div>
            <div class="testTime">{{item.beginTime}}</div>
            <div class="duringTime">{{item.costMinutes}}</div>
            <div class="score">{{item.score}}</div>
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
        <submitPaper :submitId="submitId" :paperDetail="paperDetail" />
      </el-dialog>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
import submitPaper from "../../components/submitPaper/submitPaper";
export default {
  data() {
    return {
      allTestList: [],
      emptyScoreData: [],
      loading: true,
      dialogTableVisible: false,
      submitId: "",
      paperDetail: {},
      subjectName: []
    };
  },
  components: { submitPaper },
  methods: {
    //查看明细
    checkDetail(e) {
      if (e.submitId) {
        this.submitId = e.submitId;
        this.paperDetail = e;
        // console.log("允许查看");
        this.dialogTableVisible = true;
      } else {
        this.$message({
          message: "抱歉，该场考试您未参加，无法查看明细",
          type: "warning"
        });
      }
    },
    //获取科目名称
    getSubjectName() {
      this.$grade
        .getdict()
        .then(res => {
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
        .catch();
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
      let str = num.toString();
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
    //去除重复考试的试卷
    duplicate(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            //第一个等同于第二个，splice方法删除第二个
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
    },
    //获取考试记录
    getTestExam() {
      this.$grade
        .getExam()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.loading = false;
            this.allTestList = res.data.data[0].items;
            this.allTestList.map(item => {
              item.beginTime = this.timeFormat(item.beginTime);
              item.beginWriteTime = this.timeFormat(item.beginWriteTime);
              item.endWriteTime = this.timeFormat(item.endWriteTime);
              item.costMinutes = this.twoNumber(item.costMinutes);
            });

            // console.log(res.data.data[0]);
            this.emptyExamIds = res.data.data[0].emptyExamIds;
            if (this.emptyExamIds.length > 0) {
              this.emptyExamIds.map(item => {
                this.allTestList.map(itemes => {
                  if (itemes.examId == item) {
                    this.emptyScoreData.push(itemes);
                  }
                });
              });
              this.emptyScoreData.map(item => {
                this.subjectName.map(itm => {
                  if (itm.key == item.subjectId) {
                    this.$set(item, "subjextName", itm.value);
                  }
                });
              });
              this.emptyScoreData.sort(function(a, b) {
                let minTime = new Date(a.beginTime).getTime();
                let maxTime = new Date(b.beginTime).getTime();
                return maxTime - minTime;
              });
              this.emptyScoreData = this.duplicate(this.emptyScoreData);
              //console.log(this.emptyScoreData, "emptyScoreData");
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          //console.log(err);
        });
    }
  },
  mounted() {
    this.getSubjectName();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
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
  height: 550px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 20px;
 .index {
    width: 5%;
  }
  .testName {
    width: 24%;
  }
  .subject {
    width: 8%;
  }
  .testTime {
    width: 23%;
  }
  .duringTime {
    width: 10%;
  }
  .score {
    width: 10%;
  }
  .operation {
    width: 20%;
    :hover {
      cursor: pointer;
    }
  }
  div {
    overflow: hidden;
  }
}
</style>