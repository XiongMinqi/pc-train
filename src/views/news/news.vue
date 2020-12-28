<template>
  <div v-loading="loading">
    <div class="pageTitle">系统公告</div>
    <div v-if="show">
      <div class="choose searchPadding">
        <div class="classname">
          <el-input v-model="title" maxlength="30" show-word-limit clearable placeholder="请输入公告名称"></el-input>
        </div>
        <div class="btn">
          <el-button type="primary" @click="getNews">开始筛选</el-button>
        </div>
      </div>
      <div v-if="newsList.length>0">
        <div
          class="newsdetail"
          v-for="(item,index) in newsList"
          :key="index"
          @click="checkNews(item,index)"
        >
          <div class="flex justify-between aligh-center news">
            <div class="flex aligh-center">
              <div class="newsImg" v-if="item.thumbnailUrl">
                <img :src="item.thumbnailUrl" alt />
              </div>
              <div class="newsImg" v-else>
                <img src="../../assets/img/newsImg.png" alt />
              </div>
              <div>
                <div class="title">{{item.title}}</div>
                <div style="margin-bottom: 5px;color: rgb(96, 98, 102);font-size: 14px;">
                  <span style=";padding-right: 10px;">By : {{item.peopleName}}</span>
                  <span style="font-size:11px;color:#909399">{{item.createTime}}</span>
                </div>
                <div style="color: rgb(96, 98, 102);font-size: 14px;">
                  浏览次数 :
                  <span class="bg-primary">{{item.readCount}}</span>
                </div>
              </div>
            </div>
            <div>
              <!-- <button @click="checkNews(item)">查看新闻</button> -->
              <el-button type="primary" round @click="checkNews(item,index)">查看公告</el-button>
            </div>
          </div>
        </div>
        <div  class="block">
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
      <div v-else class="else"></div>
    </div>
    <el-dialog :title="newsDetail.title" :visible.sync="dialogFormVisible" @close="close" >
      <div class="newsMsg" style="height: 60vh;overflow-y: scroll">
        <!-- <div
          style="font-size: 18px;margin-bottom: 10px;letter-spacing: 1px;line-height:1.5em;"
        >{{newsDetail.title}}</div>-->
        <div class="flex aligh-center newsDetailInfo" style="margin-bottom: 5px;color:#a2a2a2">
          <div style=";padding-right: 10px;">发布时间 : {{newsDetail.createTime}}</div>
          <div>发布人员 : {{newsDetail.peopleName}}</div>
          <div style="color:#a2a2a2;padding-left:10px">浏览次数 : {{newsDetail.readCount}}</div>
        </div>
        <div style="margin: 0 auto;text-align: center">
          <img :src="newsDetail.pictureUrl" alt="">
        </div>
        <div
          style="text-indent:2em;margin-top:10px;letter-spacing: 0.5px;line-height:2em;"
        >{{newsDetail.content}}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      limit: 5,
      newsList: [],
      total: 0,
      currentPage: 1,
      show: false,
      title: "",
      dialogFormVisible: false,
      newsDetail: {},
      loading: true,
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getNews();
    },
    handleCurrentChange(val) {
      this.loading = true;
      this.page = val;
      this.getNews();
    },
    close() {
      this.newsDetail = {};
    },
    getNews() {
      let data = {
        page: this.page,
        limit: this.limit,
        object: {
          title: this.title,
        },
      };
      this.$api
        .getNews(data)
        .then((res) => {
          this.loading = false;
          this.show = true;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.newsList = res.data.data;
            this.newsList.map(item=>{
              item.createTime = this.timeFormat(item.createTime)
            })
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
          this.show = true;
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
    checkNews(e, index) {
      this.$api
        .checkNewsDetail(e.id)
        .then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.newsDetail = res.data.data[0];
            this.dialogFormVisible = true;
            this.$set(
              this.newsList[index],
              "readCount",
              this.newsList[index].readCount + 1
            );
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
  },
  mounted() {
    this.getNews();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.aligh-center {
  align-items: center;
}
.newsImg {
  width: 150px;
  height: 110px;
  margin-right: 35px;
  img {
    width: 100%;
    height: 100%;
  }
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
  // color: #1f3b7b;
  font-weight: bold;
  width: 800px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news {
  padding-right: 15px;
  // border: 1px solid #f2f2f2;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 5px 5px 10px #c2c2c2;
  &:hover {
    cursor: pointer;
  }
}
.newsMsg {
  min-height: 50vh;
}
.newsDetailInfo {
  border: 1px solid #f2f2f2;
  background-color: #f9f9f9;
  padding: 10px;
}
.el-dialog__title {
  border-left: 2px solid palegreen;
}
.choose {
  display: flex;
  align-items: center;
}
.classname {
  margin-right: 20px;
}
</style>