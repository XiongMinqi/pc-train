<template>
  <div v-loading="loading">
    <div v-if="newsList.length>0">
      <div class="newsdetail" v-for="(item,index) in newsList" :key="index">
        <div class="flex justify-between aligh-center news">
          <div class="flex aligh-center">
            <div>
              <img src="../../assets/icon/news.png" alt />
            </div>
            <div>
              <div class="title">{{item.title}}</div>
              <div style="margin-bottom: 5px;color:#a2a2a2">
                <span style=";padding-right: 10px;">By : {{item.peopleName}}</span>
                <span>{{item.createTime}}</span>
              </div>
              <div style="color:#a2a2a2">
                浏览次数 :
                <span style="color:red">{{item.readCount}}</span>
              </div>
            </div>
          </div>
          <div>
            <!-- <button @click="checkNews(item)">查看新闻</button> -->
            <el-button type="primary" round @click="checkNews(item)">查看新闻</el-button>
          </div>
        </div>
      </div>
      <div style="text-align:center">
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
    <div v-else class="else">暂无新闻</div>
    <el-dialog title="新闻详情" :visible.sync="dialogFormVisible" @close="close">
      <div class="newsMsg">
        <div
          style="font-size: 18px;margin-bottom: 10px;letter-spacing: 1px;line-height:1.5em;"
        >{{newsDetail.title}}</div>
        <div class="flex aligh-center" style="margin-bottom: 5px;color:#a2a2a2">
          <div style=";padding-right: 10px;">{{newsDetail.createTime}}</div>
          <div>By : {{newsDetail.peopleName}}</div>
          <div style="color:#a2a2a2;padding-left:10px">浏览次数 : {{newsDetail.readCount}}</div>
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
      dialogFormVisible: false,
      newsDetail: {},
      loading: true
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
        object: {}
      };
      this.$api
        .getNews(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.newsList = res.data.data;
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
    },
    checkNews(e) {
      //   console.log(e);

      this.$api
        .checkNewsDetail(e.id)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.newsDetail = res.data.data[0];
            this.dialogFormVisible = true;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    }
  },
  mounted() {
    this.getNews();
  },
  watch: {},
  computed: {}
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
img {
  width: 60px;
  height: 80px;
  margin-right: 10px;
}
.title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #1f3b7b;
  width: 800px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.news {
  padding: 10px;
  border: 1px solid #f2f2f2;
  margin-bottom: 5px;
  border-radius: 15px;
}
.newsMsg {
  min-height: 50vh;
}
</style>