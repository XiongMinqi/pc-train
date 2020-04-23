<template>
  <div class="indexLeft">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple-all" @click="goTo('/allExam')">
          <span>全部试卷({{total}})</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-pass" @click="goTo('/passExam')">
          <span>及格试卷({{pass}})</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-fail" @click="goTo('/failExam')">
          <span>不及格试卷({{fail}})</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-empty" @click="goTo('/emptyExam')">
          <span>未做试卷({{empty}})</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseIndex: 1,
      total: 0,
      pass: 0,
      fail: 0,
      empty: 0
    };
  },
  components: {},
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
            this.total = res.data.data[0].totalExamIds.length;
            this.pass = res.data.data[0].passExamIds.length;
            this.fail = res.data.data[0].failExamIds.length;
            this.empty = res.data.data[0].emptyExamIds.length;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTestExam();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-col {
  text-align: center;
}
.grid-content {
  padding: 10px 0;
  border-radius: 10px;
}
span :hover {
  color: red;
  cursor: pointer;
}

.bg-purple-all {
  background: #d3dce6;
  :hover {
    color: magenta;
    cursor: pointer;
  }
}
.bg-purple-pass {
  background: #e5e9f2;
  :hover {
    color: green;
    cursor: pointer;
  }
}
.bg-purple-fail {
  background: #d3dce6;
  :hover {
    color: red;
    cursor: pointer;
  }
}
.bg-purple-empty {
  background: #e5e9f2;
  :hover {
    color: blue;
    cursor: pointer;
  }
}
</style>