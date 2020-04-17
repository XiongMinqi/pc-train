<template>
  <div>
    <div class="flex">
      <div class="index">序号</div>
      <div class="subjectName">科目</div>
      <div class="testTime">考试时间</div>
      <div class="duringTime">考试时长</div>
      <div class="passTime">是否过期</div>
      <div class="operation">操作</div>
    </div>
    <div class="flex">
      <div class="index">1</div>
      <div class="subjectName">新科考试</div>
      <div class="testTime">2020/4/17 17：32：32</div>
      <div class="duringTime">60</div>
      <div class="passTime">等待中</div>
      <div class="operation">进入考试</div>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
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
      currentPage: 1,
      offset: 0,
      limit: 10,
      total: 0
    };
  },
  components: {},
  methods: {
    //获取考试信息
    getTest() {
      this.$onlineTest
        .getTestInfo(this.offset, this.limit)
        .then(res => {
          console.log(res);
          this.total = res.data.count;
          console.log(res.data.data);
          console.log(this.total);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.limit = val;
      this.getTest();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mounted() {
    this.getTest();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
  align-items: center;
  text-align: center;
  div {
    margin-bottom: 10px;
  }
  .index {
    width: 5%;
  }
  .subjectName {
    width: 35%;
  }
  .testTime {
    width: 30%;
  }
  .duringTime {
    width: 10%;
  }
  .passTime {
    width: 10%;
  }
  .operation {
    width: 10%;
  }
}
.block {
  margin: 0 auto;
  text-align: center;
}
</style>