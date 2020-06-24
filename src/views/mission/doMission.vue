<template>
  <div v-loading="loading">
    <el-tabs v-model="activeName" stretch="true" @tab-click="handleClick">
      <el-tab-pane label="课件" name="first">课件</el-tab-pane>
      <el-tab-pane label="练习题" name="second">练习题</el-tab-pane>
      <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      activeName: "first",
      coursewareList: [],
      total: 0
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getMissionType() {
      this.$api
        .getCourseware(this.id)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // this.coursewareList = res.data.data;
            // this.total = res.data.count;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    },
    getMissi() {
      this.$api
        .getCourseware(this.id)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // this.coursewareList = res.data.data;
            // this.total = res.data.count;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getMissionType();
  },
  watch: {},
  computed: {}
};
</script>

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
</style>