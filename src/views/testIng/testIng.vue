<template>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import radio from "../../components/options/radio";
import checkbox from "../../components/options/checkbox";
export default {
  data() {
    return {
      currentRadio: [],
      id: "",
      currentOptions: {},
      currentIndex: 0,
      testInfo: {},
      radio: 0
    };
  },
  components: {
    radio,
    checkbox
  },
  methods: {
    //单选
    changeRadio() {
      console.log(this.radio);
    },
    inputMsg(e) {
      console.log(e);
      console.log(this.currentRadio);
    },
    //获取考试信息
    getTestMsg() {
      this.$onlineTest
        .onlineTest(this.id)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            //   console.log(res);
            this.testInfo = res.data.data[0];
            this.currentOptions = res.data.data[0].questions;
            this.currentOptions.map(item => {
              this.$set(item, "checked", false);
            });
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
    this.id = this.$route.query.id;
    // console.log(this.id);
    this.getTestMsg();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
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
</style>