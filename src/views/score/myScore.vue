<template>
  <div v-loading="loading">
    <div class="pageTitle">个人积分</div>
    <div class="scorebg bg-white">
      <div style="text-align:center; display: flex;align-items: center;">
        <div>总积分</div>
        <div
          v-if="totalScore.point"
          style="font-size:45px;font-weight:bold;margin-left:5px"
        >{{totalScore.point}}</div>
        <div v-else style="font-size:20px;font-weight:bold">0</div>
      </div>
      <div v-if="totalScore.point>0">
        领先
        <span style="font-size:35px;font-weight:bold;padding:0 10px">{{percent}}%</span>的用户
      </div>
    </div>
    <div class="flex justify-between">
      <div class="words">积分明细</div>
      <div>
        <el-button size="mini" plain type="primary" @click="jump">积分排行</el-button>
      </div>
    </div>

    <div v-if="showLsit">
      <el-table :data="scoreList" border style="width: 100%">
        <el-table-column prop="createTime" label="时间" width="200"></el-table-column>
        <el-table-column prop="source" label="来源"></el-table-column>
        <el-table-column prop="point" label="积分" width="180"></el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20, 30, 40]"
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
      showLsit: false,
      page: 1,
      limit: 5,
      percent: 0,
      scoreList: [],
      currentPage: 1,
      total: 0,
      totalScore: 0,
      loading: true,
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      this.page = 1;
      this.limit = val;
      this.loading = true;
      this.checkMyList();
    },
    handleCurrentChange(val) {
      this.page = val;
      this.loading = true;
      this.checkMyList();
    },
    //保留两位小数
    twoNumber(num) {
      let str = num.toString();
      if (str.indexOf(".") == -1) {
        return num + ".00";
      } else {
        let len = str.length;
        let integerlen = str.indexOf(".");
        if (len > integerlen + 2) {
          return str.slice(0, integerlen + 3);
        } else if (len == integerlen + 2) {
          return str + "0";
        } else {
          return str;
        }
      }
    },
    //获取我的总积分
    getTotalScore() {
      this.$grade
        .checkScore()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            if (res.data.data[0] !== null) {
              this.totalScore = res.data.data[0];
              this.percent = this.twoNumber(
                ((this.totalScore.total - this.totalScore.rank) /
                  this.totalScore.total) *
                  100
              );
            } else if (res.data.data[0] === null) {
              this.totalScore = {};
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          //console.log(err);
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
    //查看我的积分记录
    checkMyList() {
      let data = {
        page: this.page,
        limit: this.limit,
        object: {},
      };
      this.$grade
        .getMyScoreList(data)
        .then((res) => {
          this.loading = false;
          this.showLsit = true;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.scoreList = res.data.data;
            this.total = res.data.count;
            this.scoreList.map((item) => {
              let source = "";
              if (item.type === 1) {
                source = "课件学习";
              } else if (item.type === 2) {
                source = "自主练习";
              }
              this.$set(item, "source", source);
              item.createTime = this.timeFormat(item.createTime);
            });
            // console.log(this.scoreList);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.showLsit = true;
          this.loading = false;
          //console.log(err);
        });
    },
    jump(){
      this.$router.push({name:"scoreList",path:"/scoreList"})
    }
  },
  mounted() {
    this.getTotalScore();
    this.checkMyList();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.scorebg {
  background: url("../../assets/img/score.png") no-repeat;
  background-size: cover;
  background-position: center 0;
  height: 200px;
  // color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px;
  margin-bottom: 20px;
}
.words {
  margin-bottom: 20px;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
</style>