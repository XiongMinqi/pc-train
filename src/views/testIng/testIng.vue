<template>
  <div>
    <div class="testIng" v-loading="loading" id="dayin" ref="dayin">
      <el-container>
        <el-header>
          <div class="textcenter fontweight testTop">{{testInfo.name}}</div>
        </el-header>
        <el-container>
          <el-aside width="250px">
            <div>
              <div class="times">
                <div class="btn">
                  <el-button type="primary" @click="checkPaper">提交试卷</el-button>
                </div>
                <div class="explain">
                  <div class="grid-content" style="color:green">考试说明</div>
                  <div>若考试时间超过了截止交卷时间，倒计时将以截止交卷时间为准</div>
                  <div>请不要在输入框里输入任何表情符号，否则将不能提交试卷</div>
                  <div>考生姓名 : {{userInfomation.nickName}}</div>
                  <div>考生专业 : {{majorName}}</div>
                  <div>考生部门 : {{departmentName}}</div>
                  <div>开始答卷时间 :</div>
                  <div>{{beginWriteTime}}</div>
                  <div>考试截止时间 :</div>
                  <div>{{endWriteTime}}</div>
                  <div>
                    考试难度 :
                    <span v-if="testInfo.level===0">简单</span>
                    <span v-if="testInfo.level===1">普通</span>
                    <span v-if="testInfo.level===2">困难</span>
                  </div>
                  <div>考试限时 : {{testInfo.minutes}} 分钟</div>
                  <div>及格分数 : {{testInfo.defaultPassScore}} 分</div>
                  <!-- <div style="color:green">考试规则:允许返回修改答案</div>
                  <div style="color:green">如果考试异常中断，请退出并及时按同样步骤进入，可继续进行考试</div>-->
                </div>
                <div class="fixedTime">
                  <div>考试时间还剩</div>
                  <div id="countdown">00:00</div>
                  <div class="allchecked">
                    <div
                      class="choosedcheck"
                      v-for="(item,index) in checkList"
                      :key="index"
                      :id="'tchar_nav_'+index"
                    >
                      <div v-if="item.check===false" class="checkingfalse">{{index+1}}</div>
                      <div v-if="item.check===true" class="checkingtrue">{{index+1}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-aside>
          <el-main>
            <div class="btn-fullscreen">
              <el-tooltip effect="dark" content="祝您考试顺利" placement="bottom">
                <div class="test">
                  <div class="content">
                    <div
                      class="scrollBody"
                      v-for="(item,index) in testInfo.questions"
                      :key="index"
                      :id="'tchar_nav_'+index"
                    >
                      <div :id="'tchar_nav_'+index" class="scrollview"></div>
                      <div class="title">
                        <div style="width:3%">
                          <div v-if="index<9">0{{index+1}}、</div>
                          <div v-else>{{index+1}}、</div>
                        </div>
                        <div style="width:70px" :class="item.type===4?'name':'public'">
                          <span v-if="item.type===0">【单选】</span>
                          <span v-if="item.type===1">【多选】</span>
                          <span v-if="item.type===2">【填空】</span>
                          <span v-if="item.type===3">【判断】</span>
                          <span v-if="item.type===4">【名词解释】</span>
                          <span v-if="item.type===5">【问答】</span>
                        </div>
                        <div style="width:88%">{{item.content}}</div>
                      </div>
                      <div class="answer">
                        <!-- 单选 -->
                        <div v-if="item.type===0">
                          <radio
                            :options="currentOptions"
                            :index="index"
                            :answer="answer"
                            :checkList="checkList"
                            @checkList="getcheckList"
                          />
                        </div>
                        <!-- 多选 -->
                        <div v-if="item.type===1">
                          <checkbox
                            :options="currentOptions"
                            :index="index"
                            :answer="answer"
                            :checkList="checkList"
                            @checkList="getcheckList"
                          />
                        </div>
                        <!-- 填空 -->
                        <div v-if="item.type===2">
                          <fillBlanks
                            :options="currentOptions"
                            :index="index"
                            :answer="answer"
                            :checkList="checkList"
                            @checkList="getcheckList"
                          />
                        </div>
                        <!-- 判断 -->
                        <div v-if="item.type===3">
                          <judge
                            :options="currentOptions"
                            :index="index"
                            :answer="answer"
                            :checkList="checkList"
                            @checkList="getcheckList"
                          />
                        </div>
                        <!-- 名词解释 -->
                        <div v-if="item.type===4">
                          <nounExplanation
                            :options="currentOptions"
                            :index="index"
                            :answer="answer"
                            :checkList="checkList"
                            @checkList="getcheckList"
                          />
                        </div>
                        <!-- 问答 -->
                        <div v-if="item.type===5">
                          <explain
                            :options="currentOptions"
                            :index="index"
                            :answer="answer"
                            :checkList="checkList"
                            @checkList="getcheckList"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-tooltip>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <div>
      <el-dialog title="确认提交？" :visible.sync="dialogVisible" width="30%">
        <div>
          <div v-if="empty.length>0">
            还有题号
            <span v-for="(item,index) in empty" :key="index">
              <span v-if="index===empty.length-1">{{item}}</span>
              <span v-else>{{item}}、</span>
            </span>
            等{{length}}道题未做
          </div>
          <div v-else>确认提交试卷</div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button icon="el-icon-download" circle @click="dayinprint"></el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="时间到"
        :visible.sync="showDialog"
        width="30%"
        :close-on-click-modal="close"
        :show-close="close"
        :close-on-press-escape="close"
      >
        <div class="tishiInfo">
          <div>
            <img class="lightImg" src="../../assets/icon/light-bulb.png" alt />
          </div>
          <div>时间已到，系统已自动提交试卷</div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button icon="el-icon-download" circle @click="dayinprint"></el-button>
          <el-button type="primary" @click="closePopup">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <el-dialog :visible.sync="showFalut" title="警告">
      <div>与服务器同步时间失败，系统将使用本机时间进行考试，请确认时间是否无误，若有问题，请立即联系管理员</div>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="showFalut=false">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>
<script>
import radio from "../../components/options/radio";
import checkbox from "../../components/options/checkbox";
import fillBlanks from "../../components/options/fillBlanks";
import judge from "../../components/options/judge";
import nounExplanation from "../../components/options/nounExplanation";
import explain from "../../components/options/explain";
import vue from "vue";
import print from "../../assets/print.js";
vue.use(print);
export default {
  data() {
    return {
      loading: true,
      currentRadio: [],
      id: "",
      time: 0,
      currentOptions: {},
      currentIndex: 0,
      testInfo: {},
      close: false,
      radio: 0,
      fullscreen: false,
      dialogVisible: false,
      showDialog: false,
      allAnswer: {},
      answerId: [],
      answer: {}, //储存从服务器获取的答案
      empty: [],
      checkList: [], //存放题号
      ksExamId: "",
      length: 0,
      llqName: "",
      timecount: {},
      numberes: false,
      data: {},
      saveMsg: {},
      beginTestTime: "",
      finishTime: "",
      noeTime: "",
      submitResult: false,
      nowTeastTime: 0,
      showFalut:false,
      userInfomation: {},
      majorName: "",
      departmentName: "",
      newTime: "",
      beginWriteTime: "",
      endWriteTime: "",
    };
  },
  components: {
    radio,
    checkbox,
    fillBlanks,
    judge,
    nounExplanation,
    explain,
  },
  methods: {
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    //打印
    dayinprint() {
      this.$print(this.$refs.dayin);
    },
    //提示
    checkPaper() {
      this.empty = [];
      this.answerId = [];
      this.dialogVisible = true;
      this.allAnswer = this.$store.state.answerList;
      for (let a in this.allAnswer) {
        a = Number(a);
        this.answerId.push(a);
      }
      //  console.log(this.answerId);
      this.currentOptions.map((item, index) => {
        if (this.answerId.indexOf(item.id) === -1) {
          index += 1;
          this.empty.push(index);
        }
      });
      //  console.log(this.empty, "未答题号");
      this.length = this.empty.length;
      if (this.empty.length > 5) {
        this.empty.splice(5);
        //  console.log(this.empty);
      }
    },
    //接收子组件传过来的题号true or false
    getcheckList(data) {
      this.checkList = data;
      // console.log(this.checkList);
    },
    //时间到,关闭弹出层，跳转页面
    closePopup() {
      if (this.submitResult === true) {
        this.showDialog = false;
        this.$store.state.answerList = {};
        // this.$router.go(-1);
        this.$router.replace({ name: "result", path: "/result" });
      } else {
        this.showDialog = false;
        this.$message({
          message: "试卷提交失败，请联系管理员",
          type: "warning",
        });
      }
    },
    //提交试卷
    submit() {
      this.handleFullScreen();
      this.dialogVisible = false;
      let userinfo = JSON.parse(localStorage.getItem("userInfo"));
      let ip = "0.0.0.0";
      this.getBrowser();
      let data = {
        answers: this.allAnswer,
        beginTime: this.timechange(this.beginTestTime),
        // device: this.llqName,
        device: "chrome",
        ip: ip,
        ksExamId: this.ksExamId,
        peopleId: userinfo.userId,
      };
      const loading = this.$loading({
        lock: true,
        text: "试卷提交中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.$onlineTest
        .submitPaper(data)
        .then((res) => {
          loading.close();
          //  console.log(res);
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          } else if (res.data.code === 0) {
            //清除每分钟存数据到服务器
            clearInterval(this.saveMsg);
            this.$store.state.answerList = {};
            this.data = "";
            this.submitResult = true;
            //清空缓存在服务器的数据
            this.saveTestInfo(this.data);
            // this.$router.go(-1);
            this.$router.replace({ name: "result", path: "/result" });
          } else {
            //清除每分钟存数据到服务器
            clearInterval(this.saveMsg);
            //清空缓存在服务器的数据
            this.data = "";
            this.saveTestInfo(this.data);
            this.submitResult = false;

            // this.$message({
            //   message: res.data.msg,
            //   type: "warning",
            // });
          }
        })
        .catch((err) => {
          loading.close();
          //  console.log(err);
        });
    },
    //获取浏览器信息
    getBrowser() {
      let types = ["edge", "firefox", "chrome", "safari", "opera "];
      let userAgent = navigator.userAgent.toLocaleLowerCase();
      let res = [];
      types.forEach((element) => {
        //  console.log(element);
        if (userAgent.indexOf(element) > 0) {
          let rule = `${element}` + "\\/([\\d.]+)";
          //  console.log(rule);
          res.push(element);
          //  console.log(userAgent.match(rule)[1]);
          res.push(userAgent.match(rule)[1]);
          this.llqName = res[0];
          if (!this.llqName) {
            this.llqName = "chrome";
          }
          //  console.log(this.llqName);
          //  console.log(res);
        }
      });
      if (res.indexOf("chrome") > -1 && res.indexOf("safari") > -1) {
        if (res.length === 4) {
          let temp = [];
          temp.push("chrome");
          temp.push(res[res.indexOf("chrome") + 1]);
          return temp;
          //  console.log(temp);
        } else {
          res.splice(res.indexOf("chrome"), 2);
          res.splice(res.indexOf("safari"), 2);
          return res;
          //  console.log(res);
        }
      } else {
        return res;
        //  console.log(res);
      }
    },
    //获取考试信息
    getTestMsg() {
      this.getNowTime();
      this.$onlineTest
        .onlineTest(this.id)
        .then((res) => {
          this.loading = false;
          //  console.log(res);
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            //  console.log(res);
            this.testInfo = res.data.data[0];
            if (this.checkList.length === 0) {
              this.checkList = [];
              this.testInfo.questions.map((item, index) => {
                let data = {
                  value: index,
                  check: false,
                };
                this.checkList.push(data);
              });
            }

            this.currentOptions = res.data.data[0].questions;
            //  console.log(this.testInfo);
            // console.log(this.checkList);
            // let finishTimeing = this.$route.query.finishTime;
            // let finishTime = Date.parse(new Date(finishTimeing));
            this.beginWriteTime = this.timeFormat(this.beginTestTime);
            this.endWriteTime = this.timeFormat(this.finishTime);
            this.finishTime = Date.parse(new Date(this.finishTime))
            //finishTime 截至交卷时间
            //this.nowTeastTime 当前时间
            //res.data.data[0].minutes * 60000  考试限时
            //this.beginTestTime 开始答卷时间
            if(this.nowTeastTime===0){
              this.showFalut=true;
              this.nowTeastTime=Date.parse(new Date())
            }
            if (
                this.finishTime - this.nowTeastTime <=
                res.data.data[0].minutes * 60000
            ) {
              this.time = this.finishTime - this.nowTeastTime;
              console.log(this.time);
            } else {
              // this.time = res.data.data[0].minutes * 60000;
              this.time =
                  res.data.data[0].minutes * 60000 -
                  (this.nowTeastTime - this.beginTestTime);
              console.log(this.time);
            }
            console.log(this.finishTime);
            console.log(this.nowTeastTime);
            console.log(this.beginTestTime);
            this.timeDown();
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          //  console.log(err);
        });
    },
    //时间格式转换
    timechange(time) {
      let clock = "";
      let d = new Date(time);
      let year = d.getFullYear(); //年
      let month = d.getMonth() + 1; //月
      let day = d.getDate(); //日
      let hh = d.getHours(); //时
      let mm = d.getMinutes(); //分
      let ss = d.getSeconds(); //秒
      clock += year + "-";
      if (month < 10) clock += "0";
      clock += month + "-";
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
    //时间倒计时
    timeDown() {
      let _this = this;
      let countdown = document.getElementById("countdown");
      let time = _this.time / 1000; //30分钟换算成1800秒
      //  console.log(this.testInfo.minutes);
      _this.timecount = setInterval(function () {
        time = time - 1;
        if (time >= 0) {
          _this.time = time;
          let hour = 0;
          let minute = parseInt(time / 60);
          if (minute > 60) {
            hour = parseInt(time / 60 / 60);
            if (hour < 10) {
              hour = "0" + hour;
            }
            minute = parseInt((time - hour * 60 * 60) / 60);
            if (minute < 10) {
              minute = "0" + minute;
            }
          } else if (minute < 10) {
            minute = "0" + minute;
          }
          let second = parseInt(time % 60);
          if (second < 10) {
            second = "0" + second;
          }
          if (hour) {
            countdown.innerHTML = hour + ":" + minute + ":" + second;
          } else {
            countdown.innerHTML = minute + ":" + second;
          }
        } else {
          clearInterval(_this.timecount);
          clearInterval(_this.saveMsg);
          // _this.numberes = true;
          _this.showDialog = true;
          // console.log(_this.numberes);
          // _this.submit();

          _this.handleFullScreen();
          _this.dialogVisible = false;
          //获取学员peopleId
          let userinfo = JSON.parse(localStorage.getItem("userInfo"));
          //获取ip地址
          // let ip = localStorage.getItem("Ip");
          // ip = ip.toString();
          let ip = "0.0.0.0";
          // _this.getBrowser();
          //  console.log(this.testInfo.id);
          let data = {
            answers: _this.allAnswer,
            beginTime: _this.timechange(_this.beginTestTime),
            device: "chrome",
            ip: ip,
            ksExamId: _this.ksExamId,
            peopleId: userinfo.userId,
          };
          //console.log(data);
          _this.$onlineTest
            .submitPaper(data)
            .then((res) => {
              //  console.log(res);
              if (res.data.code === 1000) {
                _this.$router.push({ name: "login", path: "/login" });
              }
              if (res.data.code === 0) {

                _this.$store.state.answerList = {};
                _this.data = "";
                //清空缓存在服务器的数据
                _this.saveTestInfo(_this.data);
                _this.$message({
                  message: "交卷成功",
                  type: "success",
                });
                _this.$router.replace({ name: "result", path: "/result" });
              } else {
                _this.$message({
                  message: res.data.msg,
                  type: "warning",
                });
              }
            })
            .catch((err) => {
              //  console.log(err);
              this.data = "";
              //清空缓存在服务器的数据
              this.saveTestInfo(this.data);
            });
        }
      }, 1000);
      if (_this.numberes) {
        _this.submit();
      }
    },
    //存数据
    saveTestInfo(data) {
      this.$grade
        .saveExamRunningData(data)
        .then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
        })
        .catch((err) => {
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
    //保存数据到服务器
    savePaper() {
      this.allAnswer = this.$store.state.answerList;
      this.data = {
        paperInfo: {
          id: this.id,
          ksExamId: this.ksExamId,
        },
        beginTestTime: this.beginTestTime,
        finishTime: this.finishTime,
        answerList: this.allAnswer,
        checkList: this.checkList,
      };
      //console.log(this.data);
      this.saveTestInfo(JSON.stringify(this.data));
    },
    //每隔一分钟将答案和试卷信息存到数据库
    saveMsgMinute() {
      this.saveMsg = setInterval(() => {
        this.savePaper();
      }, 60000);
    },
    //获取服务器当前时间
    getNowTime() {
      this.$api.getNowTime().then((res) => {
        if (res.data.code === 1000) {
          this.$router.push({ name: "login", path: "/login" });
        } else if (res.data.code === 0) {
          let newTime = res.data.data[0];
          let nowTest = new Date(newTime);
          this.nowTeastTime = Date.parse(nowTest);
          // console.log(newTime, nowTest, this.nowTeastTime);
        } else {
          this.showFalut=true;
          let nowTest = new Date();
          this.nowTeastTime = Date.parse(nowTest);
        }
      })
      .catch(err=>{
        this.showFalut=true;
        let nowTest = new Date();
        this.nowTeastTime = Date.parse(nowTest);
      });
    },
    //获取个人信息
    getUserList() {
      this.$api
        .getUser()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.userInfomation = res.data.data[0];
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          // console.log(err);
        });
    },
    //获取专业和部门名称
    getSubjectDetail() {
      this.$api
        .getSubject()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.major = res.data.data[0]["专业名称"];
            this.major.map((item) => {
              if (this.userInfomation.majorId == item.key) {
                this.majorName = item.value;
              }
            });
            this.department = res.data.data[0]["部门名称"];
            this.department.map((item) => {
              if (item.key == this.userInfomation.departmentId) {
                this.departmentName = item.value;
              }
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
          // console.log(err);
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.timecount);
    clearInterval(this.saveMsg);
  },
  mounted() {
    console.log(this.$route.query)
    this.getUserList();
    this.getSubjectDetail();
    this.$store.state.answerList = {};
    //进入全屏
    this.handleFullScreen();
    //先从服务器获取储存数据，若有，继续考试，若没有，重新开始考试
    this.$grade
      .getExamRunningData()
      .then((res) => {
        if (res.data.code === 1000) {
          this.$router.push({ name: "login", path: "/login" });
        }
        if (res.data.code === 0) {
          if (res.data.data === null || res.data.data[0].data === "") {
            this.$api.getNowTime().then((result) => {
              if (result.data.code === 1000) {
                this.$router.push({ name: "login", path: "/login" });
              } else if (result.data.code === 0) {
                let newTime = result.data.data[0];
                let nowTest = new Date(newTime);
                this.id = this.$route.query.paperId;
                this.ksExamId = this.$route.query.id;
                this.data = {
                  paperInfo: {
                    id: this.id,
                    ksExamId: this.ksExamId,
                  },
                  finishTime : this.$route.query.finishTime,
                  beginTestTime: Date.parse(nowTest),
                  answerList: {},
                  checkList: [],
                };
                this.$store.state.answerList = {};
                this.answer={};
                this.finishTime = this.data.finishTime;
                this.beginTestTime = Date.parse(nowTest);
                // console.log(this.data);
                this.saveTestInfo(JSON.stringify(this.data));
                this.getTestMsg();
              }
            });
            // this.getNowTime();
            // this.id = this.$route.query.paperId;
            // this.ksExamId = this.$route.query.id;
            // // if (this.nowTeastTime > 0) {
            // this.data = {
            //   paperInfo: {
            //     id: this.id,
            //     ksExamId: this.ksExamId,
            //   },
            //   beginTestTime: this.nowTeastTime,
            //   answerList: {},
            //   checkList: [],
            // };
            // this.beginTestTime = this.nowTeastTime;
            // console.log(this.data);
            // this.saveTestInfo(JSON.stringify(this.data));
            // this.getTestMsg();
            // }
          } else {
            // console.log(JSON.parse(res.data.data[0].data));
            // this.getNowTime();
            let object = res.data.data[0].data;
            // console.log(object);
            let paperInfo = JSON.parse(object);
            this.id = paperInfo.paperInfo.id;
            this.ksExamId = paperInfo.paperInfo.ksExamId;
            this.beginTestTime = paperInfo.beginTestTime;
            this.finishTime = paperInfo.finishTime;
            this.answer = paperInfo.answerList;
            this.allAnswer = paperInfo.answerList;
            this.$store.state.answerList = this.answer;
            this.checkList = [];
            this.checkList = paperInfo.checkList;
            // console.log(this.id, this.ksExamId, this.time);
            // console.log(this.checkList.length,"montent");
            this.getTestMsg();
          }
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
    document.onkeydown = function () {
      if (window.event.keyCode === 27) {
        window.event.keyCode = 0;
        window.event.returnValue = false;
      }
      if (window.event.keyCode === 122) {
        window.event.keyCode = 0;
        window.event.returnValue = false;
      }
      if (window.event.keyCode === 18) {
        window.event.keyCode = 0;
        window.event.returnValue = false;
      }
      if (window.event.keyCode === 9) {
        window.event.keyCode = 0;
        window.event.returnValue = false;
      }
    };
    //一分钟传一次数据
    this.saveMsgMinute();
    this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timecount);
      clearInterval(this.saveMsg);
    })
  },
  watch: {
    time(oldval, newval) {
      // console.log(this.time);
      // console.log(oldval);
      // console.log(oldval, newval);
    },
  },
  computed: {},
};
</script>

<style scoped lang='scss'>
.testIng {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-container {
  height: 90%;
}
.el-header,
.el-footer {
  text-align: center;
}

.el-aside {
  height: 100%;
}

.el-main {
  height: 100%;
}
.test {
  display: flex;
}
span {
  color: blue;
}
.fontweight {
  font-weight: bold;
}
.textcenter {
  text-align: center;
}
.testTop {
  font-size: 30px;
  padding: 20px 0;
}
.times {
  // padding: 0 10px;
  // width: 70%;
  // margin: 0 auto;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
}
.shijian {
  width: 50%;
}
.explain {
  // width: 300px;
  margin-left: 30px;
  div {
    margin-bottom: 5px;
  }
}
.content {
  width: 80%;
  margin: 0 auto;
}
.title {
  display: flex;
  //   align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.name {
  width: 100px !important;
}
.public {
  // width: 7%;
  width: 60px;
}
#countdown {
  font-size: 40px;
  color: red;
}
.answer {
  padding-left: 45px;
}
.btn {
  text-align: center;
  margin-bottom: 10px;
}
.fixedTime {
  // position: fixed;
  // width: 100%;
  // margin-left: 30px;
  // top: 240px;
  // left: 0;
  padding: 10px 0;
  text-align: center;
  // right: 50px;
}
.allchecked {
  width: 160px;
  // background: blueviolet;
  border: 1px solid #a2a2a2;
  border-radius: 15px;
  padding: 10px;
  margin: 0 auto;
  padding-top: 20px;
}
.choosedcheck {
  display: inline-block;
  flex-wrap: nowrap;
  width: 20%;
  :hover {
    cursor: pointer;
    background: blueviolet;
  }
  // padding: 5px;
}
.checkingfalse {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  background: burlywood;
  margin-bottom: 10px;
}
.checkingtrue {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  background: green;
  margin-bottom: 10px;
}
.scrollBody {
  position: relative;
}
.scrollview {
  position: absolute;
}
.tishiInfo {
  display: flex;
  align-items: center;
}
.lightImg {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
</style>