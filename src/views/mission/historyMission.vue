<template>
  <div>
       <el-table :data="missionList" border style="width: 100%">
      <el-table-column prop="requireLearnTime" label="要求学习时长" width="180"></el-table-column>
      <el-table-column prop="requireRightCount" label="要求答对数量" width="180"></el-table-column>
      <el-table-column prop="publishTime" label="发布时间"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      page: 1,
      limit: 10,
      missionList: [],
      total: 0
    };
  },
  components: {},
  methods: {
    getUndoMission() {
      let data = {
        limit: this.limit,
        page: this.page,
        object: {
          isRunning: null
        }
      };
      this.$api
        .getUndoMission(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.missionList = res.data.data;
            this.total = res.data.count;
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
    this.getUndoMission();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.else{
  text-align: center;
  padding: 20px;
}
</style>