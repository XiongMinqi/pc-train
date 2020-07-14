<template>
  <div class="list" v-loading="loading">
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="rightNumber" label="答对/道" width="180"></el-table-column>
      <el-table-column prop="questionNumber" label="全部/道" width="180"></el-table-column>
      <el-table-column prop="createTime" label="提交练习时间"></el-table-column>
      <el-table-column prop="costSeconds" label="练习时长" width="180"></el-table-column>
      <el-table-column prop="score" label="积分" width="180"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,20,30]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      page: 1,
      limit: 10,
      list: [],
      allList: [],
      total: 0,
      currentPage: 1,
      data: {
        object: {
          subjectId: ""
        },
        limit: 100,
        page: 1
      },
      loading:true
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getStudy();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getStudy();
    },
    //获取我的学习记录
    getStudy() {
      let data = {
        page: this.page,
        limit: this.limit
      };
      this.$grade
        .getPractiseRecord(data)
        .then(res => {
          this.loading=false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.total = res.data.count;
            this.list = res.data.data;
            this.list.map(item => {
              this.$set(item, "score", 1);
              if (item.costSeconds >= 60) {
                if (item.costSeconds % 60 === 0) {
                  item.costSeconds = item.costSeconds / 60 + "分钟";
                } else {
                  let minute = Math.floor(item.costSeconds / 60);
                  let second = item.costSeconds - minute * 60;
                  item.costSeconds = minute + "分钟" + second + "秒";
                }
              } else {
                item.costSeconds = item.costSeconds + "秒";
              }
            });
            // console.log(this.list);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err=>{
          this.loading=false;
          this.$message({
              message: err.data.msg,
              type: "warning"
            });
        });
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.getStudy();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.list {
  text-align: center;
}
.block {
  margin: 0 auto;
  text-align: center;
}
</style>