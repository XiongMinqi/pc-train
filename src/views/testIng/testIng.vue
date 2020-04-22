<template>
  <div class="btn-fullscreen">
    <el-tooltip effect="dark" content="祝您考试顺利" placement="bottom">
      <div class="test">
        <div>
          <div class="textcenter fontweight testTop">四川新科在线考试系统</div>
          <div class="textcenter" style="color:blue">{{testInfo.name}}</div>
          <div class="times">
            <div class="explain">
              <div class="grid-content" style="color:green">考试说明</div>
              <div>考试次数:{{testInfo.level}}</div>
              <div>考试限时:{{testInfo.minutes}}分钟</div>
              <div>及格分数:{{testInfo.defaultPassScore}}</div>
              <div>考试规则:允许返回修改答案</div>
              <div>如果考试异常中断，请退出并及时按同样步骤进入，可继续进行考试</div>
            </div>
            <div>
              <div>考试时间还剩</div>
              <div id="countdown">00:00</div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-for="(item,index) in testInfo.questions" :key="index">
            <div class="title">
              <div style="width:3%">
                <div v-if="index<9">0{{index+1}}、</div>
                <div v-else>{{index+1}}、</div>
              </div>
              <div style="width:6%" :class="item.type===4?'name':'public'">
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
                <radio :options="currentOptions" :index="index" />
              </div>
              <!-- 多选 -->
              <div v-if="item.type===1">
                <checkbox :options="currentOptions" :index="index" />
              </div>
              <!-- 填空 -->
              <div v-if="item.type===2">
                <fillBlanks :options="currentOptions" :index="index" />
              </div>
              <!-- 填空 -->
              <div v-if="item.type===3">
                <judge :options="currentOptions" :index="index" />
              </div>
              <!-- 名词解释 -->
              <div v-if="item.type===4">
                <nounExplanation :options="currentOptions" :index="index" />
              </div>
              <!-- 问答 -->
              <div v-if="item.type===5">
                <explain :options="currentOptions" :index="index" />
              </div>
            </div>
          </div>
        </div>
        <div class="btn">
          <el-button type="primary" @click="checkPaper">提交试卷</el-button>
        </div>
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
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </el-tooltip>
  </div>
</template>
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script type="text/javascript">
console.log(returnCitySN["cip"]);
// document.write(returnCitySN["cip"]+','+returnCitySN["cname"])
</script>
<script>
import radio from "../../components/options/radio";
import checkbox from "../../components/options/checkbox";
import fillBlanks from "../../components/options/fillBlanks";
import judge from "../../components/options/judge";
import nounExplanation from "../../components/options/nounExplanation";
import explain from "../../components/options/explain";
export default {
  data() {
    return {
      currentRadio: [],
      id: "",
      currentOptions: {},
      currentIndex: 0,
      testInfo: {},
      radio: 0,
      fullscreen: false,
      dialogVisible: false,
      allAnswer: {},
      answerId: [],
      empty: [],
      ksExamId: "",
      length: 0,
      llqName: ""
    };
  },
  components: {
    radio,
    checkbox,
    fillBlanks,
    judge,
    nounExplanation,
    explain
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
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
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
      // console.log(this.answerId);
      this.currentOptions.map((item, index) => {
        if (this.answerId.indexOf(item.id) === -1) {
          // console.log(index);
          index += 1;
          this.empty.push(index);
        }
      });
      // console.log(this.empty, "未答题号");
      this.length = this.empty.length;
      if (this.empty.length > 5) {
        this.empty.splice(5);
        // console.log(this.empty);
      }
    },
    //提交
    submit() {
      this.handleFullScreen();
      let targetTimezone = -8; // 目标时区，东8区
      let _dif = new Date().getTimezoneOffset(); // 当前时区与中时区时差，以min为维度
      // 本地时区时间 + 时差  = 中时区时间
      // 目标时区时间 + 时差 = 中时区时间
      // 目标时区时间 = 本地时区时间 + 本地时区时差 - 目标时区时差
      // 东8区时间
      let east8time =
        new Date().getTime() +
        _dif * 60 * 1000 -
        targetTimezone * 60 * 60 * 1000;
      let nowTime = new Date(east8time);
      console.log(nowTime);
      this.dialogVisible = false;
      //获取学员peopleId
      let userinfo = JSON.parse(localStorage.getItem("userInfo"));
      //获取ip地址
      let ip = localStorage.getItem("Ip");
      ip = ip.toString();
      this.getBrowser();
      // console.log(this.testInfo.id);
      let data = {
        answers: this.allAnswer,
        beginTime: nowTime,
        device: this.llqName,
        ip: ip,
        ksExamId: this.ksExamId,
        peopleId: userinfo.userId
      };
      console.log(data);
      this.$onlineTest
        .submitPaper(data)
        .then(res => {
          console.log(res);
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.$router.push({ name: "onlineTest", path: "/onlineTest" });
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
    },
    //获取浏览器信息
    getBrowser() {
      let types = ["edge", "firefox", "chrome", "safari", "opera "];
      let userAgent = navigator.userAgent.toLocaleLowerCase();
      var res = [];
      types.forEach(element => {
        // console.log(element);
        if (userAgent.indexOf(element) > 0) {
          let rule = `${element}` + "\\/([\\d.]+)";
          // console.log(rule);
          res.push(element);
          // console.log(userAgent.match(rule)[1]);
          res.push(userAgent.match(rule)[1]);
          this.llqName = res[0];
          // console.log(this.llqName);
          // console.log(res);
        }
      });
      if (res.indexOf("chrome") > -1 && res.indexOf("safari") > -1) {
        if (res.length === 4) {
          let temp = [];
          temp.push("chrome");
          temp.push(res[res.indexOf("chrome") + 1]);
          return temp;
          console.log(temp);
        } else {
          res.splice(res.indexOf("chrome"), 2);
          res.splice(res.indexOf("safari"), 2);
          return res;
          console.log(res);
        }
      } else {
        return res;
        console.log(res);
      }
    },
    //获取考试信息
    getTestMsg() {
      this.$onlineTest
        .onlineTest(this.id)
        .then(res => {
          // console.log(res);
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.testInfo = res.data.data[0];
            this.currentOptions = res.data.data[0].questions;
            console.log(this.testInfo);
            this.timeDown();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //时间倒计时
    timeDown() {
      var countdown = document.getElementById("countdown");
      var time = this.testInfo.minutes * 60; //30分钟换算成1800秒
      //   console.log(this.testInfo.minutes);
      setInterval(function() {
        time = time - 1;
        var minute = parseInt(time / 60);
        if (minute > 60) {
          var hour = parseInt(time / 60 / 60);
          if (hour < 10) {
            hour = "0" + hour;
          }
          minute = parseInt((time - hour * 60 * 60) / 60);
          if (minute < 10) {
            minute = "0" + minute;
          }
        }
        var second = parseInt(time % 60);
        if (second < 10) {
          second = "0" + second;
        }
        if (hour) {
          countdown.innerHTML = hour + ":" + minute + ":" + second;
        } else {
          countdown.innerHTML = minute + ":" + second;
        }
      }, 1000);
    }
  },
  mounted() {
    //进入全屏
    this.handleFullScreen();
    // console.log(localStorage.getItem("Ip"));
    this.id = this.$route.query.paperId;
    // console.log(this.id);
    // console.log(this.$route.query);
    this.ksExamId = this.$route.query.id;
    // console.log(this.id);
    this.getTestMsg();
    document.onkeydown = function() {
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
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.test {
  // pointer-events: none;
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
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.shijian {
  width: 50%;
}
.explain {
  width: 50%;
  div {
    margin-bottom: 10px;
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
}
.name {
  width: 9% !important;
}
.public {
  width: 6%;
}
#countdown {
  font-size: 50px;
  color: red;
}
.answer {
  padding-left: 45px;
}
.btn {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>