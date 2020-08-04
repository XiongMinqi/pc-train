<template>
  <div v-loading="loading">
    <div class="backLastPage" @click="backLastPage">
      <i class="el-icon-arrow-left"></i>返回
    </div>
    <div class="flex marginTen" style="border-bottom:5px dotted #c9c9c9">
      <div style="margin-right:40px">
        <!-- <img class="maliao" src="../../assets/img/maliao.png" alt /> -->
        <img class="maliao" src="../../assets/img/train.png" alt />
      </div>
      <div class="marginTen" style="margin-right:150px">
        <div class="marginTen" style="font-size:20px;font-weight:bold">{{detail.name}}</div>
        <div class="marginTen">老师 : {{detail.teacherName}}</div>
        <div class="marginTen">
          类型 :
          <span v-if="detail.type === 0">理论课</span>
          <span v-if="detail.type === 1">实践课</span>
          <span v-if="detail.type === 2">考试</span>
        </div>
        <div class="marginTen">教室 : {{ detail.classroomName }}</div>

        <div class="marginTen">
          <div v-if="detail.place">培训地点 : {{ detail.place }}</div>
          <div v-else>培训地点 : 尚未指定</div>
        </div>
        <div class="marginTen">开始时间 : {{ detail.startTime }}</div>
        <div class="marginTen">结束时间 : {{ detail.endTime }}</div>
      </div>
    </div>

    <div style="padding-bottom:80px">
      <div class="flex aligh-center marginTen" style="line-height:30px;height:30px">
        <div>教师满意度 :</div>
        <div class="block" style="line-height:30px;height:30px">
          <el-rate v-model="value1"></el-rate>
        </div>
        <div v-if="value1 >= 0" style="color: #a2a2a2;">
          <div v-if="value1 === 1">很差</div>
          <div v-if="value1 === 2">较差</div>
          <div v-if="value1 === 3">较满意</div>
          <div v-if="value1 === 4">满意</div>
          <div v-if="value1 === 5">很满意</div>
        </div>
      </div>
      <div
        class="flex aligh-center marginTen"
        style="line-height:30px;height:30px;margin-bottom:20px"
      >
        <div>课程满意度 :</div>
        <div class="block" style="line-height:30px;height:30px">
          <el-rate v-model="value2"></el-rate>
        </div>
        <div v-if="value2 >= 0" style="color: #a2a2a2;">
          <div v-if="value2 === 1">很差</div>
          <div v-if="value2 === 2">较差</div>
          <div v-if="value2 === 3">较满意</div>
          <div v-if="value2 === 4">满意</div>
          <div v-if="value2 === 5">很满意</div>
        </div>
      </div>
      <div style="width:60%">
        <el-input
          v-model="textarea"
          type="textarea"
          rows="5"
          maxlength="200"
          show-word-limit
          placeholder="请输入内容"
        ></el-input>
      </div>
      <div style="margin-top:10px">
        <el-checkbox v-model="checked">匿名评论</el-checkbox>
      </div>
    </div>
    <div style="text-align:center">
      <el-button type="primary" round @click="submitComments">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {},
      checked: false,
      value1: 0,
      value2: 0,
      loading: true,
      textarea: "",
      timeout: {},
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    };
  },
  components: {},
  methods: {
    backLastPage() {
      this.$router.go(-1);
    },
    submitComments() {
      if (this.textarea && this.value1 && this.value2) {
        let data = {
          comment: this.textarea,
          planCourseId: this.detail.id,
          score: this.value2,
          teacherScore: this.value1
        };
        this.$grade
          .submitComment(data)
          .then(res => {
            if (res.data.code === 1000) {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
              this.$router.push({ name: "login", path: "/login" });
            }
            if (res.data.code === 0) {
              this.$message({
                message: "评论成功",
                type: "success"
              });
              this.$router.go(-1);
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
            }
          })
          .catch(err => {
            //console.log(err);
            this.$message({
              message: "获取失败",
              type: "warning"
            });
          });
      }
      if (this.value2 === 0) {
        //console.log("value2");
        this.$message({
          message: "请对课程打分",
          type: "warning"
        });
      } else if (this.value1 === 0) {
        //console.log("value1");
        this.$message({
          message: "请对教师打分",
          type: "warning"
        });
      } else if (this.textarea === "") {
        //console.log("textarea");
        this.$message({
          message: "请输入课程评论",
          type: "warning"
        });
      }
    }
  },
  mounted() {
    this.detail = this.$route.query.detail;
    this.timeout = setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  watch: {},
  destroyed() {
    clearTimeout(this.timeout);
  },
  computed: {}
};
</script>
<style lang="scss">
.block {
  .el-rate__icon {
    font-size: 25px;
  }
}
</style>
<style scoped lang='scss'>
.flex {
  display: flex;
}
.aligh-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.maliao {
  width: 300px;
  height: 200px;
}
.marginTen {
  margin-bottom: 10px;
}
</style>