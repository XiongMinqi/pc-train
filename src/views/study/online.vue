<template>
  <div>
    <div v-if="showselect===true">
      <div class="choose">
        <div class="subject">
          <el-select v-model="subjectname" placeholder="请选择专业">
            <el-option key value="全部"></el-option>
            <el-option v-for="item in subjectList" :key="item.key" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="classname">
          <el-select v-model="classname" placeholder="请选择科目">
            <el-option key value="全部"></el-option>
            <el-option v-for="item in classList" :key="item.key" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="subject">
          <el-select v-model="topicType" placeholder="请选择题型">
            <!-- <el-option key value="全部"></el-option> -->
            <el-option v-for="item in questionType" :key="item.key" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="classname">
          <el-select v-model="easyType" placeholder="请选择难易程度">
            <el-option key value="全部"></el-option>
            <el-option v-for="item in diffcult" :key="item.key" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="classname">
          <el-select v-model="size" placeholder="请选择题目条数">
            <el-option v-for="item in listSize" :key="item" :value="item"></el-option>
          </el-select>
        </div>
        <div class="btn">
          <el-button type="primary" @click="chooseClass">开始练习</el-button>
        </div>
      </div>
      <div class="info">请选择题型等筛选条件,系统默认选择单选题</div>
    </div>
    <div v-else class="else">
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
                <span style="color:#d56f2">{{index+1}}</span>
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
                <el-radio-group v-model="radio" @change="chooseRadio">
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
              <el-radio-group v-model="radio">
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
                <el-checkbox-group v-model="checkList">
                  <el-checkbox :label="item.content">
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
            <div style="display:flex;align-items: center;padding-bottom:10px" v-if="choosed">
              <div>正确答案 :</div>
              <div style="padding-left:10px;color:green">
                <span v-for="(item,index) in questionDetail.answers" :key="index">
                  <span>{{item.content}}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choosebtn">
        <div>
          <el-button type="primary" round @click="before">上一题</el-button>
        </div>
        <div>
          <el-button type="primary" round @click="after">下一题</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjectname: "",
      classname: "",
      topicType: "",
      easyType: "",
      classList: [],
      subjectList: [],
      questionType: [],
      choosed:false,//是否已选择选项
      size: "",
      listSize: ["10", "15", "20", "25", "30"],
      data: {
        criteria: {
          level: null,
          majorId: null,
          subjectId: null,
          type: null
        },
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
      index: 0,
      type: false,
      showAnswer: false,
      showselect: true,
      rightQuestionId: [],
      radioing: "" //被选中的单选
    };
  },
  components: {},
  methods: {
    //上一题
    before() {
      this.showAnswer = false;
      this.index -= 1;
      // console.log(this.questionId);
      if (this.index < 0) {
        this.index += 1;
        this.$message({
          message: "当前是第一题",
          type: "warning"
        });
      } else {
        this.getInfo(this.questionId[this.index]);
      }
    },
    //下一题
    after() {
      this.index += 1;
      // console.log(this.questionId);
      if (this.index < this.questionId.length) {
        this.showAnswer = false;
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
    //查看正确答案
    checkRightAnswer() {
      this.showAnswer = !this.showAnswer;
    },
    getdict() {
      this.$grade
        .getdict()
        .then(res => {
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
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //根据题目id获取详情
    getInfo(e) {
      this.$grade
        .getErrorDetail(e)
        .then(res => {
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
        .catch();
    },
    //选择科目，专业，题型
    chooseClass() {
      // console.log(this.classname);
      if (this.classname == "" || this.classname == "全部") {
        this.data.criteria.subjectId = null;
      } else {
        this.classList.map(item => {
          if (item.value == this.classname) {
            this.data.criteria.subjectId = item.key;
          }
        });
      }
      // console.log(this.subjectname);
      if (this.subjectname == "" || this.subjectname == "全部") {
        this.data.criteria.majorId = null;
      } else {
        this.subjectList.map(item => {
          if (item.value == this.subjectname) {
            this.data.criteria.majorId = item.key;
          }
        });
      }
      // console.log(this.topicType);
      if (this.topicType == "" || this.topicType == "全部") {
        this.data.criteria.type = 0;
        this.type = false;
      } else {
        this.type = true;
        this.questionType.map(item => {
          if (item.value == this.topicType) {
            this.data.criteria.type = item.key;
          }
        });
      }
      // console.log(this.easyType);
      if (this.easyType == "" || this.easyType == "全部") {
        this.data.criteria.level = null;
      } else {
        this.diffcult.map(item => {
          if (item.value == this.easyType) {
            this.data.criteria.level = item.key;
          }
        });
      }
      // console.log(this.size);
      if (this.size != "") {
        this.data.size = Number(this.size);
      }
      // console.log(this.data);
      if (this.type === true) {
        this.showselect = !this.showselect;
        this.$api
          .getRandomQuestion(this.data)
          .then(res => {
            // console.log(res);
            if (res.data.code === 0) {
              this.index = 0;
              this.questionId = [];
              this.questionId = res.data.data;
              // console.log(this.questionId);
              this.getInfo(res.data.data[this.index]);
            }
          })
          .catch();
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
      console.log(this.radioing);
      if (this.radioing === this.questionDetail.answers[0].content) {
        this.rightQuestionId.push(this.questionDetail.id);
      }
      console.log(this.rightQuestionId);
    }
  },
  mounted() {
    this.getdict();
    // this.chooseClass();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.choose {
  display: flex;
  align-items: center;
  padding: 20px 20px;
}
.choosesymbol {
  margin-right: 20px;
}
.subject {
  margin-right: 20px;
}
.classname {
  margin-right: 20px;
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
.traincontent {
  padding: 0 20px;
}
.else {
  margin-top: 50px;
}
.info {
  text-align: center;
  padding: 50px;
  font-size: 20px;
  color: red;
}
</style>