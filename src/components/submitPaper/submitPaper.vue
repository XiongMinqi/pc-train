<template>
  <div v-loading="loading">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          试卷名称 ：
          <span>{{ paperMsg.name }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          考试者 ：
          <span>{{ userInfo.nickName }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          学员得分 :
          <span>{{ paperDetail.score }} <span v-if="paperDetail.isPublishResult===false"
                                              style=" color: #e6a23c;font-size: 12px;padding-left: 10px">此分数只是客观题得分数，主观题分数未计入总成绩</span></span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          开始时间 :
          <span>{{ paperDetail.beginWriteTime }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          结束时间 :
          <span>{{ paperDetail.endWriteTime }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          试卷总分 :
          <span>{{ paperDetail.totalScore }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          考试用时 :
          <span>{{ paperDetail.costMinutes }}分钟</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div
            class="grid-content bg-purple span"
            :class="number===0?'bgblue':'bg-purple'"
            @click="checkAll"
        >
          <b>全部题({{ allList.length }})</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div
            class="grid-content bg-purple-light span"
            :class="number===1?'bgblue':'bg-purple-light'"
            @click="checkRight"
        >
          <b>答对题({{ rightList.length }})</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div
            class="grid-content bg-purple span"
            :class="number===2?'bgblue':'bg-purple'"
            @click="checkErr"
        >
          <b>答错题({{ errList.length }})</b>
        </div>
      </el-col>
      <el-col :span="6">
        <div
            class="grid-content bg-purple-light span"
            :class="number===3?'bgblue':'bg-purple-light'"
            @click="checkEmpty"
        >
          <b>未答题({{ emptyList.length }})</b>
        </div>
      </el-col>
    </el-row>
    <div class="infinite-list" style="overflow:auto">
      <div v-if="publicList.length>0">
        <div class="titleDetail" v-for="(item,index) in publicList" :key="index">
          <!-- 题目 -->
          <div class="title">
            <div style="width:3%">
              <div v-if="index<9">0{{ index + 1 }}、</div>
              <div v-else>{{ index + 1 }}、</div>
            </div>
            <div style="width:6%" :class="item.question.type===4?'name':'public'">
              <span v-if="item.question.type===0">【单选】</span>
              <span v-if="item.question.type===1">【多选】</span>
              <span v-if="item.question.type===2">【填空】</span>
              <span v-if="item.question.type===3">【判断】</span>
              <span v-if="item.question.type===4">【名词解释】</span>
              <span v-if="item.question.type===5">【问答】</span>
            </div>
            <div style="width:88%">{{ item.question.content }}</div>
          </div>
          <!-- 答案选项 -->
          <div>
            <!-- 单选或者多选 -->
            <div
                v-if="item.question.options.length>0&&item.question.type===0||item.question.type===1"
            >
              <div class="chooices" v-for="(itm,idx) in item.question.options" :key="idx">
                <div v-if="idx==0">A</div>
                <div v-if="idx==1">B</div>
                <div v-if="idx==2">C</div>
                <div v-if="idx==3">D</div>
                <div>、{{ itm.content }}</div>
              </div>
            </div>
            <!-- 判断 -->
            <div class v-if="item.question.type===3">
              <div class="chooices">正确</div>
              <div class="chooices">错误</div>
            </div>
          </div>
          <!-- 考生答案和正确答案以及分数 -->
          <div class="jiexi" style="padding-left:4%">
            <div>
              <div class="writeAnswer" style="display: flex;align-items: center">
                <div style="padding-right:10px;width:6%">考生答案</div>
                <div class v-if="item.answer.ksAnswerContents.length>0">
                  <div class="bggreens" v-if="item.answer.right===true">
                    <span
                        style="padding-left:10px"
                        v-for="(itm,idx) in item.answer.ksAnswerContents"
                        :key="idx"
                    >
                      <span>{{ itm.content }}</span>
                    </span>
                  </div>
                  <div class="bgreds" v-else>
                    <span
                        style="padding-left:10px"
                        v-for="(itm,idx) in item.answer.ksAnswerContents"
                        :key="idx"
                    >
                      <span>{{ itm.content }}</span>
                    </span>
                  </div>
                </div>
                <div v-else class="unanwser" style="color:#ff0000">该题考生未作答</div>
              </div>
              <div class="currectAnswer" style="display: flex;align-items: center">
                <div style="padding-right:10px;width:6%">正确答案</div>
                <div style="color: #007AFF;width:90%" v-if="item.question.answers.length>0">
                  <span
                      style="padding-left:10px"
                      v-for="(itm,idx) in item.question.answers"
                      :key="idx"
                  >
                    <span>{{ itm.content }}</span>
                  </span>
                </div>
              </div>
              <div class="score" style="display: flex;align-items: center">
                <div style="padding-right:10px;width:6%">分数</div>
                <div style="color: #007AFF;" v-if="item.answer.score===null">0</div>
                <div
                    style="color: #007AFF;"
                    v-else
                >{{ item.answer.score }}/{{ item.question.defaultScore }}
                </div>
                <div class="result">
                  <div v-if="item.answer.right===true"><img src="../../assets/icon/right.png" alt=""></div>
                  <div v-if="item.answer.right===false"><img src="../../assets/icon/error.png" alt=""></div>
                </div>
<!--                <div><span v-if="paperDetail.isPublishResult===false"-->
<!--                           style=" color: #e6a23c;font-size: 12px;">此分数仅做参考，真正分数以教师端审核结果为准</span></div>-->
              </div>
            </div>
            <div class="jiexi-text" style="margin-bottom: 70rpx;">
              <div style="font-weight: 600; padding-bottom:10px">题目分析:</div>
              <div v-if="item.question.answerResolve">{{ item.question.answerResolve }}</div>
              <div v-else>该题暂无解析</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="else"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      paperMsg: {},
      userInfo: {},
      allList: [],
      rightList: [],
      errList: [],
      emptyList: [],
      publicList: [],
      loading: true
    };
  },
  props: {
    submitId: {
      type: Number,
      required: true
    },
    paperDetail: {
      type: Object,
      require: true
    }
  },
  components: {},
  methods: {
    getSubmitPaper() {
      this.$grade
          .getSubmitPaper(this.submitId)
          .then(res => {
            this.loading = false;
            if (res.data.code === 1000) {
              this.$router.push({name: "login", path: "/login"});
            }
            if (res.data.code === 0) {
              this.paperMsg = res.data.data[0];
              this.allList = [];
              this.emptyList = [];
              this.rightList = [];
              this.errList = [];
              res.data.data[0].actualAnswer.map((item, index) => {
                let list = {
                  question: res.data.data[0].tkQuestions[index],
                  answer: res.data.data[0].actualAnswer[index]
                };
                this.allList.push(list);
                if (item.right === true) {
                  this.rightList.push(list);
                } else if (item.right === false) {
                  if (item.ksAnswerContents.length > 0) {
                    this.errList.push(list);
                  } else {
                    this.emptyList.push(list);
                  }
                }
              });
              this.publicList = this.allList;
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
    //查看全部
    checkAll() {
      this.number = 0;
      this.publicList = [];
      this.publicList = this.allList;
    },
    //查看正确
    checkRight() {
      this.number = 1;
      this.publicList = [];
      this.publicList = this.rightList;
    },
    //查看全部
    checkErr() {
      this.number = 2;
      this.publicList = [];
      this.publicList = this.errList;
    },
    //查看全部
    checkEmpty() {
      this.number = 3;
      this.publicList = [];
      this.publicList = this.emptyList;
    }
  },
  mounted() {
    this.getSubmitPaper();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(this.userInfo);
  },
  watch: {
    submitId: {
      handler(newValue, oldValue) {
        this.submitId = newValue;
        this.getSubmitPaper();
        this.loading = true;
        //console.log(newValue, "submitid");
      },
      deep: true
    },
    paperDetail: {
      handler(newValue, oldValue) {
        this.loading = true;
        this.paperDetail = newValue;
        this.paperDetail.beginWriteTime = this.timeFormat(this.paperDetail.beginWriteTime)
        this.paperDetail.endWriteTime = this.timeFormat(this.paperDetail.endWriteTime)
        //console.log(newValue, "paperDetail");
      },
      deep: true
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
span {
  color: blue;
}

.el-row {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.grid-content :hover {
  cursor: pointer;
}

.span {
  text-align: center;

  &hover {
    cursor: pointer;
  }
}

.bgblue {
  background: #22dddd;
  color: white;
}

.infinite-list {
  height: 50vh;
}

.title {
  display: flex;
  align-items: center;
}

.chooices {
  padding: 10px 0 0 37px;
  display: flex;
  align-items: center;
}

.titleDetail {
  padding-bottom: 10px;
}

.name {
  width: 8% !important;
}

.public {
  width: 6%;
}

.unanwser {
  // padding-bottom: 10px;
}

.writeAnswer {
  padding: 10px 0;
}

.currectAnswer {
  padding-bottom: 10px;
}

.score {
  padding-bottom: 10px;
}

.result {
  padding-left: 10px;

  img {
    width: 20px;
    height: 20px;
  }
}
</style>