<template>
  <div>
    <div class="loginmsg">
      <div>我的登录信息</div>
      <div>
        <div class="logintime">
          <div class="name">我的登录次数 :</div>
          <div class="content">6 次</div>
        </div>
        <div class="logintime">
          <div class="name">上次登录时间 :</div>
          <div class="content">2020/04/20 20:20:20</div>
        </div>
        <div class="logintime">
          <div class="name">我的积分 :</div>
          <div class="content">0 分</div>
        </div>
      </div>
    </div>
    <div class="classes" @click="classes">
      <div>我的课程进度</div>
      <div>
        <div class="logintime">
          <div class="name">已学习 :</div>
          <div class="count">6 课</div>
        </div>
        <div class="logintime">
          <div class="name">未学习 :</div>
          <div class="count">5 课</div>
        </div>
        <div style="width:50%;margin-top:20px;padding-left:20px">
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        </div>
      </div>
    </div>
    <div class="test">
      <div>我的考试</div>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>X份</div>
            <div>全部试卷</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>X份</div>
            <div>及格试卷</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>X份</div>
            <div>不及格试卷</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <div>
              <img src="../../assets/img/myscore.svg" alt />
            </div>
            <div>X份</div>
            <div>空白试卷</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="classes" @click="study">
      <div>我的学习记录</div>
      <div>
        <div class="logintime">
          <div class="name">在线学习时长 :</div>
          <div class="content">6小时50分钟</div>
        </div>
        <div class="logintime">
          <div class="name">在线测试记录 :</div>
          <div class="content">8 次</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    study() {
      this.$router.push({ name: "onlineStudy", path: "/onlineStudy" });
    },
    classes() {
      this.$router.push({ name: "independentTest", path: "/independentTest" });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.loginmsg {
  background: #e2e2e2;
  width: 92%;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.classes {
  // background: #efefef;
  width: 92%;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.test {
  // background: #efefef;
  width: 92%;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
}
.classes:hover {
  background: #e2e2e2;
  cursor: pointer;
}
.logintime {
  padding: 10px 20px 0 20px;
  display: flex;
  align-items: center;
  .name {
    width: 13%;
  }
  .content {
    padding-left: 8px;
  }
}
.count {
  color: red;
}
.el-col {
  // border: 0.5px solid #e2e2e2;
  :hover {
    cursor: pointer;
    background: #e9e9e9;
  }
}
.grid-content {
  text-align: center;
  padding: 20px;
  border: 0.5px solid #e2e2e2;
}
.el-row {
  width: 60%;
  margin-top: 20px;
}
// .bg-purple {
//   background: #d3dce6;
// }
// .bg-purple-light {
//   background: #e5e9f2;
// }
</style>