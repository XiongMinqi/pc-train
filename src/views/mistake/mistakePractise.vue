<template>
  <div v-loading="loading">
    <div>
      <div class="backLastPage" @click="backLastPage">
        <i class="el-icon-arrow-left"></i>返回
      </div>
      <div class="pageTitle">错题练习</div>
    </div>
    <div v-if="showselect===true">
      <div>
        <div class="choose">
          <div class="classname">
            <div class="wordes">来源 :</div>
            <div>
              <el-select v-model="source" disabled placeholder="请选择题库">
                <!-- <el-option key=0 value="题库"></el-option> -->
                <el-option v-for="item in sourceList" :key="item.key" :value="item.value"></el-option>
              </el-select>
            </div>
          </div>
<!--          <div class="classname">-->
<!--            <div class="wordes">专业 :</div>-->
<!--            <div>-->
<!--              <el-select v-model="subjectname" placeholder="请选择专业">-->
<!--                <el-option key value="不限"></el-option>-->
<!--                <el-option v-for="item in subjectList" :key="item.key" :value="item.value"></el-option>-->
<!--              </el-select>-->
<!--            </div>-->
<!--          </div>-->
          <div class="classname">
            <div class="wordes">科目 :</div>
            <div>
              <el-select v-model="classname" placeholder="请选择科目">
                <el-option key value="不限"></el-option>
                <el-option v-for="item in classList" :key="item.key" :value="item.value"></el-option>
              </el-select>
            </div>
          </div>
          <div class="classname">
            <div class="wordes">题型 :</div>
            <div>
              <el-select v-model="topicType" placeholder="请选择题型">
                <!-- <el-option key value="不限"></el-option> -->
                <el-option v-for="item in questionType" :key="item.key" :value="item.value"></el-option>
              </el-select>
            </div>
          </div>
<!--          <div class="classname">-->
<!--            <div class="wordes">难易程度 :</div>-->
<!--            <div>-->
<!--              <el-select v-model="easyType" placeholder="请选择难易程度">-->
<!--                <el-option key value="不限"></el-option>-->
<!--                <el-option v-for="item in diffcult" :key="item.key" :value="item.value"></el-option>-->
<!--              </el-select>-->
<!--            </div>-->
<!--          </div>-->
          <div class="classname">
            <div class="wordes">数量 :</div>
            <div>
              <el-select v-model="size" placeholder="请选择题目条数">
                <el-option v-for="item in listSize" :key="item" :value="item"></el-option>
              </el-select>
            </div>
          </div>
          <div class="info">
<!--            <div>请选择题型等筛选条件</div>-->
<!--            <div style="padding-top:5px">系统默认选择单选题</div>-->
<!--            <div style="padding-top:5px">系统默认选择十道题</div>-->
<!--            <div style="padding-top:5px">其余条件不限</div>-->
            <div style="padding-top:5px">若练习中途退出则不计入练习记录</div>
          </div>
          <div class="btn">
            <el-button type="primary" @click="chooseClass">开始练习</el-button>
          </div>
        </div>
<!--        <div class="info bg-warning">-->
<!--          <div>请选择题型等筛选条件</div>-->
<!--          <div style="padding-top:5px">系统默认选择单选题</div>-->
<!--          <div style="padding-top:5px">系统默认选择十道题</div>-->
<!--          <div style="padding-top:5px">其余条件不限</div>-->
<!--          <div style="padding-top:5px">若练习中途退出则不计入练习记录</div>-->
<!--        </div>-->
      </div>
    </div>
    <div v-else class="prictise">
      <div>
        <div>
          <div>
            <div class="detail">
              <div style="display: flex;align-items: center;">
                <div class="index">{{index+1}}</div>
                <div class="questiontype" v-for="(itm,idx) in questionType" :key="idx">
                  <span v-if="questionDetail.type == itm.key">【{{itm.value}}】</span>
                </div>
              </div>
              <div style="padding-right:20px">
                <span style="color:#d56f2b">{{index+1}}</span>
                /{{data.size}}
              </div>
            </div>
            <div class="content">{{questionDetail.content}}</div>
          </div>
          <!-- 选项 -->
          <div class="traincontent">
            <!-- 单选 -->
            <div v-if="questionDetail.type==0">
              <div v-for="(item,index) in questionDetail.options" :key="index">
                <el-radio-group v-model="radio" :disabled="disabled" @change="chooseRadio">
                  <el-radio :label="item.order">
                    <span v-if="item.order === 0">A、</span>
                    <span v-if="item.order === 1">B、</span>
                    <span v-if="item.order === 2">C、</span>
                    <span v-if="item.order === 3">D、</span>
                    {{item.content}}
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
            <!-- 判断 -->
            <div v-if="questionDetail.type==3">
              <el-radio-group v-model="radio" :disabled="disabled" @change="juage">
                <div style="padding:0 0 10px 0">
                  <el-radio label="judge1">正确</el-radio>
                </div>
                <div>
                  <el-radio label="judge2">错误</el-radio>
                </div>
              </el-radio-group>
            </div>
            <!-- 多选 -->
            <div v-if="questionDetail.type==1">
              <div v-for="(item,index) in questionDetail.options" :key="index">
                <el-checkbox-group v-model="checkList" :disabled="disabled" @change="checkbox">
                  <el-checkbox :label="item.order">
                    <span v-if="item.order === 0">A、</span>
                    <span v-if="item.order === 1">B、</span>
                    <span v-if="item.order === 2">C、</span>
                    <span v-if="item.order === 3">D、</span>
                    <span v-if="item.order === 4">E、</span>
                    <span v-if="item.order === 5">F、</span>
                    {{item.content}}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div v-if="questionDetail.type==2||questionDetail.type==4||questionDetail.type==5">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div class="checkRightAnswer">
            <div @click="checkRightAnswer">
              <img src="../../assets/icon/light-bulb.png" alt />
            </div>
            <div @click="checkRightAnswer" v-if="showAnswer">关闭提示</div>
            <div @click="checkRightAnswer" v-else>查看提示</div>
          </div>
          <div v-show="showAnswer">
            <div v-if="questionDetail.answerResolve" style=";margin-bottom:20px">
              提示:
              <span style="color:red;padding-left:10px">{{questionDetail.answerResolve}}</span>
            </div>
            <div v-else style="margin-bottom:10px">
              提示:
              <span style="color:red;padding-left:10px">暂无提示</span>
            </div>
            <div v-if="choosed">
              <div style="display:flex;align-items: center;padding-bottom:10px">
                <div>正确答案 :</div>
                <div style="padding-left:10px;color:green">
                  <span v-for="(item,index) in questionDetail.answers" :key="index">
                    <span>{{item.content}}</span>
                  </span>
                </div>
              </div>
              <div>
                <div v-if="result===true" style="color:green">回答正确</div>
                <div v-else style="color:red">回答错误</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choosebtn">
        <el-button type="warning" round @click="abandon">放弃练习</el-button>
        <div v-if="showBtn">
          <el-button type="primary" round @click="confirm">完成</el-button>
        </div>
        <div v-else>
          <div v-if="index===questionId.length-1">
            <el-button type="primary" round @click="submitTrain">提交练习</el-button>
          </div>
          <div v-else>
            <el-button type="primary" round @click="after">下一题</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="练习结果"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal="false"
      :show-close="false"
    >
      <div>
        <div>
          <div class="padding">本次答对题目数: {{data.size}}</div>
        </div>
        <div>
          <div class="flex justify-between aligh-center">
            <div class="w30">正确率: {{rightPercent}}</div>
            <div class="w50">用时: {{trainTime}}</div>
          </div>
          <div class="flex justify-between aligh-center">
            <div class="w30">错题数: {{errorCount}}</div>
            <div class="w50">积分: 1</div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="dialogVisible = false;
          showselect = true;
          disabled = false;
          showAnswer = false;
          choosed = false;
          showBtn = true;
          radio = '';
          checkList = [];
          questionDetail = {};
        "
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjectname: "不限",
      classname: "不限",
      topicType: "单选题",
      easyType: "不限",
      source: "错题集",
      dialogVisible: false,
      classList: [],
      disabled: false, //点击确定后就不能再选择其他答案
      subjectList: [],
      questionType: [],
      showBtn: true,
      choosed: false, //是否已选择选项
      size: "5",
      listSize: ["5", "10", "15", "20", "25", "30"],
      sourceList: [
        {
          key: 0,
          value: "题库"
        },
        {
          key: 1,
          value: "错题集"
        }
      ],
      data: {
        criteria: {
          level: null,
          majorId: null,
          subjectId: null,
          type: 0
        },
        fromMyWrongQuestionSet: false,
        size: 10
      },
      diffcult: [
        {
          key: "EASY",
          value: "简单"
        },
        {
          key: "NORMAL",
          value: "普通"
        },
        {
          key: "HARD",
          value: "困难"
        }
      ],
      questionId: "",
      questionDetail: {},
      radio: "",
      checkList: [],
      textarea: "",
      judge1: "",
      judge2: "",
      trainTime: "",
      index: 0,
      duringTime: "",
      type: false,
      showAnswer: false,
      showselect: true,
      rightQuestionId: [],
      radioing: "", //被选中的单选
      result: false,
      beginTime: 0,
      endTime: 0,
      errorCount: 0,
      rightPercent: "",
      loading: true,
      choosedisabled: false,
      flag: false
    };
  },
  components: {},
  methods: {
    backLastPage() {
      this.$router.go(-1);
    },
    //完成
    confirm() {
      if (this.radio !== "" || this.checkList.length > 0) {
        this.showAnswer = true;
        this.disabled = true;
        this.showBtn = false;
        this.choosed = true;
      } else {
        this.$message({
          message: "至少选择一个选项才能进入下一题",
          type: "none"
        });
      }
    },
    //下一题
    after() {
      this.loading = true;
      this.index += 1;
      if (this.index < this.questionId.length) {
        if (this.result === true) {
          this.rightQuestionId.push(this.questionDetail.id);
        }
        //console.log(this.rightQuestionId);
        this.disabled = false;
        this.showAnswer = false;
        this.choosed = false;
        this.showBtn = true;
        this.radio = "";
        this.checkList = [];
        this.questionDetail = {};
        this.getInfo(this.questionId[this.index]);
      } else {
        this.index -= 1;
        this.$message({
          message: "当前是最后一题",
          type: "warning"
        });
      }
    },
    abandon() {
      this.showselect = true;
      this.disabled = false;
      this.showAnswer = false;
      this.choosed = false;
      this.showBtn = true;
      this.radio = "";
      this.checkList = [];
      this.questionDetail = {};
    },
    //提交练习
    submitTrain() {
      if (this.result === true) {
        this.rightQuestionId.push(this.questionDetail.id);
      }
      this.dialogVisible = true;
      this.endTime = Date.parse(new Date());
      let duringTime = this.endTime - this.beginTime;
      if (duringTime / 1000 >= 60) {
        if (duringTime % 60000 === 0) {
          let minute = duringTime / 60000;
          this.trainTime = minute + "分钟";
        } else {
          let minute = Math.floor(duringTime / 1000 / 60);
          let second = duringTime / 1000 - minute * 60;
          if (second < 10) {
            second = "0" + second;
          }
          this.trainTime = minute + "分钟" + second + "秒";
        }
      } else {
        this.trainTime = duringTime / 1000 + "秒";
      }
      this.errorCount = this.data.size - this.rightQuestionId.length;
      this.rightPercent =
        Math.floor((this.rightQuestionId.length / this.data.size) * 100) + "%";
      let user = JSON.parse(localStorage.getItem("userInfo"));
      let data = {
        costSeconds: duringTime / 1000,
        questionNumber: this.data.size,
        rightNumber: this.rightQuestionId.length
      };
      this.$grade
        .submitPractise(data)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch();
      //console.log(this.rightQuestionId);
    },
    //查看正确答案
    checkRightAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    getdict() {
      this.$grade
        .getdict()
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          //   console.log(res);
          if (res.data.code === 0) {
            this.classList = res.data.data[0]["科目名称"];
            this.subjectList = res.data.data[0]["专业名称"];
            res.data.data[0]["题目类型"].map(item => {
              if (
                item.value == "单选题" ||
                item.value == "多选题" ||
                item.value == "判断题"
              ) {
                this.questionType.push(item);
              }
            });
            // this.questionType = res.data.data[0]["题目类型"];
          } else {
            this.$message({
              message: res.data.msg,
              typr: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          //console.log(err);
        });
    },
    //根据题目id获取详情
    getInfo(e) {
      this.loading = true;
      this.$grade
        .getErrorDetail(e)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.questionDetail = res.data.data[0];
            // console.log(this.questionDetail);
          } else {
            this.$message({
              message: res.data.msg,
              typr: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message({
            message: "获取失败",
            type: "warning"
          });
        });
    },
    //选择科目，专业，题型
    chooseClass() {
      this.loading = true;
      // console.log(this.classname);
      if (this.source === "题库") {
        this.data.fromMyWrongQuestionSet = false;
      } else if (this.source === "错题集") {
        this.data.fromMyWrongQuestionSet = true;
      }
      if (this.classname == "" || this.classname == "不限") {
        this.data.criteria.subjectId = null;
      } else {
        this.classList.map(item => {
          if (item.value == this.classname) {
            this.data.criteria.subjectId = Number(item.key);
          }
        });
      }
      // console.log(this.subjectname);
      if (this.subjectname == "" || this.subjectname == "不限") {
        this.data.criteria.majorId = null;
      } else {
        this.subjectList.map(item => {
          if (item.value == this.subjectname) {
            this.data.criteria.majorId = Number(item.key);
          }
        });
      }
      // console.log(this.topicType);
      if (this.topicType == "" || this.topicType == "不限") {
        this.data.criteria.type = 0;
        this.type = false;
      } else {
        this.type = true;
        this.questionType.map(item => {
          if (item.value == this.topicType) {
            this.data.criteria.type = Number(item.key);
          }
        });
      }
      // console.log(this.easyType);
      if (this.easyType == "" || this.easyType == "不限") {
        this.data.criteria.level = null;
      } else {
        this.diffcult.map(item => {
          if (item.value == this.easyType) {
            this.data.criteria.level = Number(item.key);
          }
        });
      }
      // console.log(this.size);
      if (this.size != "") {
        this.data.size = Number(this.size);
      }
      //console.log(this.data);
      if (this.type === true || this.data.type !== null) {
        this.$api
          .getRandomQuestion(this.data)
          .then(res => {
            this.loading = false;
            // console.log(res);
            if (res.data.code === 0) {
              this.showselect = !this.showselect;
              this.index = 0;
              this.questionId = [];
              this.questionId = res.data.data;
              this.beginTime = Date.parse(new Date());
              // console.log(this.beginTime);
              this.getInfo(res.data.data[this.index]);
            } else {
              this.$message({
                message: "暂时没有足够的题目",
                type: "warning"
              });
            }
          })
          .catch(err => {
            this.loading = false;
          });
      } else {
        this.$message({
          message: "请至少选择一种题型",
          type: "warning"
        });
      }
    },
    // 单选
    chooseRadio(e) {
      // console.log(e);
      this.radioing = "";
      if (e === 0) {
        this.radioing = "A";
      }
      if (e === 1) {
        this.radioing = "B";
      }
      if (e === 2) {
        this.radioing = "C";
      }
      if (e === 3) {
        this.radioing = "D";
      }
      if (e === 4) {
        this.radioing = "E";
      }
      if (e === 5) {
        this.radioing = "F";
      }
      // console.log(this.radioing);
      // console.log(this.questionDetail.answers[0].content);
      if (this.radioing === this.questionDetail.answers[0].content) {
        this.result = true;
      } else {
        this.result = false;
      }
    },
    //判断
    juage(e) {
      // console.log(e);
      var judge = "";
      if (e === "judge1") {
        judge = "正确";
      }
      if (e === "judge2") {
        judge = "错误";
      }
      if (judge === this.questionDetail.answers[0].content) {
        this.result = true;
      } else {
        this.result = false;
      }
    },
    //多选
    checkbox(e) {
      let checkbox = [];
      let result = false;
      e.map(item => {
        if (item === 0) {
          checkbox.push("A");
        }
        if (item === 1) {
          checkbox.push("B");
        }
        if (item === 2) {
          checkbox.push("C");
        }
        if (item === 3) {
          checkbox.push("D");
        }
        if (item === 4) {
          checkbox.push("E");
        }
        if (item === 5) {
          checkbox.push("F");
        }
      });
      checkbox = checkbox.sort();
      let arr = [];
      this.questionDetail.answers.map(item => {
        arr.push(item.content);
      });
      if (this.compare(arr, checkbox)) {
        this.result = true;
      } else {
        this.result = false;
      }
    },
    //比较两个数组
    compare(arr1, arr2) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    },
    //数组去重
    unique(arr) {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
    }
  },
  mounted() {
    this.getdict();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.choose {
  // display: flex;
  // align-items: center;
  padding: 20px 0;
}
.choosesymbol {
  margin-right: 20px;
}
.subject {
  margin-right: 20px;
}
.classname {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .wordes {
    width: 80px;
    padding-right: 10px;
  }
}
.detail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-left: 20px;
  span {
    color: blue;
  }
}
.content {
  padding: 0 20px;
  margin-bottom: 10px;
}
.traincontent {
  margin-bottom: 20px;
}
.checkRightAnswer {
  color: #d56f2b;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 10px 0;
  :hover {
    cursor: pointer;
  }
  img {
    width: 15px;
    height: 15px;
  }
}
.choosebtn {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  padding-top: 50px;
}
.btn {
  margin-top: 50px;
}
.traincontent {
  padding: 0 20px;
}
.prictise {
  margin-top: 50px;
}
.info {
  //text-align: center;
  //margin-left: 100px;
  //padding: 50px;
  //font-size: 20px;
  color: #909399;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.aligh-center {
  align-items: center;
}
.w30 {
  width: 30%;
}
.w50 {
  width: 50%;
}
.padding {
  padding: 10px 0;
}
</style>