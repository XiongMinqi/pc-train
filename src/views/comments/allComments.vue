<template>
  <div v-loading="loading">
    <div class="backLastPage" @click="backLastPage">
      <i class="el-icon-arrow-left"></i>返回
    </div>
    <div v-if="showComments">
      <div v-if="allComments.length>0">
        <div class="totalDetail">
          <div class="flex aligh-center">
            <div class="courseGood">
              好评度 :
              <span>{{courseGood}}%</span>
            </div>
            <div>
              <div>已评论人数 : {{totalDetail.commentPeopleCount}}</div>
              <div>评论总人数 : {{totalDetail.totalPeopleCount}}</div>
            </div>
          </div>
        </div>
        <div v-for="(item,index) in allComments" :key="index">
          <div class="flex align-start commentDetail" :class="index===0?'Firstindex':''">
            <div class="flex aligh-center" style="width:20%">
              <div class="userImg">
                <img v-if="item.peopleAvatarPath" :src="item.peopleAvatarPath" alt />
                <img v-else src="../../assets/icon/userImg.jpg" alt />
              </div>
              <div style="width:100px">{{item.peopleName}}</div>
            </div>
            <div class="starComments">
              <div class="star">
                <el-rate disabled v-model="item.score"></el-rate>
              </div>
              <div class="comments">{{item.comment}}</div>
              <div class="commentTime">{{item.commentTime}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="else" v-else></div>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[4, 10, 15, 20, 30, 40]"
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
      showComments: false,
      page: 1,
      limit: 4,
      allComments: [],
      currentPage: 1,
      total: 0,
      courseGood: "",
      totalDetail: {},
      planCourseId: 0,
      loading: true,
    };
  },
  components: {},
  methods: {
    backLastPage() {
      this.$router.go(-1);
    },
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getAllCpmments();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.page = val;
      // console.log(this.offset, this.limit);
      this.getAllCpmments();
    },
    getAllCpmments() {
      let data = {
        limit: this.limit,
        page: this.page,
        object: this.planCourseId,
      };
      this.$grade
        .checkAllComments(data)
        .then((res) => {
          this.loading = false;
          this.showComments = true;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.allComments = res.data.data;
            this.total = res.data.count;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.showComments = true;
          //console.log(err);
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
    getTotalRank() {
      this.$grade
        .getTotalCommentsRank(this.planCourseId)
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
            this.totalDetail = res.data.data[0];
            this.courseGood = Math.ceil(
              (this.totalDetail.goodCount /
                this.totalDetail.commentPeopleCount) *
                100
            );
            //console.log(this.courseGood);
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
  },
  mounted() {
    this.planCourseId = Number(this.$route.query.planCourseId);
    this.getAllCpmments();
    this.getTotalRank();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.else {
  text-align: center;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.aligh-center {
  align-items: center;
}
.align-start {
  align-items: flex-start;
}
.userImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.commentTime {
  color: #c2c2c2;
  font-size: 12px;
  padding: 0 0 10px 0;
}
.comments {
  padding-top: 5px;
  min-height: 10vh;
}
.commentDetail {
  border-bottom: 1px solid #e2e2e2;
  padding-top: 20px;
  padding-left: 20px;
}
.Firstindex {
  border-top: 1px solid #e2e2e2;
}
.starComments {
  width: 30%;
}
.teacherGood {
  width: 20%;
}
.courseGood {
  width: 20%;
}
span {
  color: red;
  font-size: 40px;
}
</style>