<template>
  <div>
    <div v-if="allComments.length>0"></div>
    <div class="else" v-else>暂无评论</div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 30, 40]"
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
      page: 1,
      limit: 10,
      allComments: [],
      total: 0
    };
  },
  components: {},
  methods: {
     handleSizeChange(val) {
      this.page = 1;
      this.limit = val;
      this.getAllCpmments();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      // console.log(this.offset, this.limit);
      this.getAllCpmments();
    },
    getAllCpmments() {
      let data = {
        limit: this.limit,
        page: this.page,
        object: 0
      };
      this.$grade
        .checkAllComments(data)
        .then(res => {
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.allComments = res.data.data;
            this.total = res.data.count;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    }
  },
  mounted() {
    this.getAllCpmments();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.else {
  text-align: center;
}
.block{
  text-align: center;
  margin-top: 20px;
}
</style>