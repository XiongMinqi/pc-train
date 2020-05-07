<template>
  <div class="list">
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="lastTime" label="上次观看时间" width="180"></el-table-column>
      <el-table-column prop="subjectName" label="名称"></el-table-column>
      <el-table-column prop="totalMinutes" label="总时长/分钟" width="180"></el-table-column>
      <el-table-column prop="times" label="次数/次" width="180"></el-table-column>
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
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      this.page = 1;
      this.limit = val;
      this.getStudy();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page = val;
      this.getStudy();
    },
    //获取全部课件
    getAllLearn() {
      this.$api
        .getLearn(this.data)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.getStudy()
            this.allList = res.data.data;
            // console.log(this.allList);
          }
        })
        .catch();
    },
    //获取我的学习记录
    getStudy() {
      this.$api
        .getStudyRecord(this.userInfo.userId, this.page, this.limit)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.total = res.data.count;
            this.list = res.data.data;
            this.list.map(item => {
              this.allList.map(itm => {
                if(item.coursewareId===itm.id){
                  this.$set(item,"subjectName",itm.name)
                }
              });
            });
            // console.log(this.list);
          }
        })
        .catch();
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.getAllLearn();
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