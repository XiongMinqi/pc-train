<template>
  <div>
    <div class="choose">
      <div class="subject">
        <el-select v-model="subjectname" placeholder="请选择专业">
          <el-option v-for="item in subjectList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="classname">
        <el-select v-model="classname" placeholder="请选择科目">
          <el-option v-for="item in classList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button type="primary">开始筛选</el-button>
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
      classList: [],
      subjectList: [],
      data: {}
    };
  },
  components: {},
  methods: {
    getdict() {
      this.$grade
        .getdict()
        .then(res => {
          //   console.log(res);
          if (res.data.code === 0) {
            this.classList = res.data.data[0]["科目名称"];
            this.subjectList = res.data.data[0]["专业名称"];
            console.log(this.subjectList, "专业");
            console.log(this.classList, "科目");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllLearn() {
      this.$api
        .getLearn(this.data)
        .then()
        .catch();
    }
  },
  mounted() {
    this.getdict();
    this.getAllLearn();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.choose {
  display: flex;
  align-items: center;
  padding: 20px 50px;
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
.btn {
}
</style>