<template>
  <div v-loading="loading">
    <div class="backLastPage" @click="backLastPage">
      <i class="el-icon-arrow-left"></i>返回
    </div>
    <div v-if="newsList.length>0">
      <div v-for="(item,index) in newsList" :key="index" @click="checkNewsDetail(item)">
        <div class="flex newsDetail">
          <div>
            <div class="unvoice">
              <img src="../../assets/icon/unvoice.png" alt />
            </div>
            <div class="voice">
              <img src="../../assets/icon/voice.png" alt />
            </div>
          </div>
          <div class="newsInfo">
            <div class="flex aligh-center">
              <div style="margin-right:10px;font-size:13px;color:darkcyan;">
                <div v-if="item.type<=1000">【系统通知】</div>
                <div v-else>【其他通知】</div>
              </div>
              <div class="title">{{item.title}}</div>
            </div>
            <div style="font-size:13px;color:#a2a2a2;padding-left:6px;padding-top:3px">{{item.msg}}</div>
            <div class="content">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align:center;padding:20px" v-else>暂无数据</div>
    <div style="text-align:center;margin-top:15px">
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
      loading: true,
      total: 0,
      currentPage:1,
      newsList: []
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
      this.getAllList();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.page = val;
      // console.log(this.offset, this.limit);
      this.getAllList();
    },
    checkNewsDetail(e) {
      this.$router.push({
        name: "unReadNews",
        path: "/unReadNews",
        query: { id: e.id, flag: false }
      });
    },
    //时间处理
    changTime(e) {
      let time = Date.parse(new Date(e));
      let nowTime = Date.parse(new Date());
      let duringTime = Math.ceil((nowTime - time) / 60000);
      let msg = "";
      if (duringTime < 1) {
        msg = "刚刚";
        return msg;
      } else if (duringTime <= 60) {
        msg = duringTime + "分钟前";
        return msg;
      } else {
        if (duringTime <= 1440) {
          msg = Math.ceil(duringTime / 60) - 1 + "小时前";
          return msg;
        } else if (duringTime <= 43200) {
          msg = Math.ceil(duringTime / 60 / 24) - 1 + "天前";
          return msg;
        } else {
          if (duringTime <= 518400) {
            msg = Math.ceil(duringTime / 60 / 24 / 30) - 1 + "月前";
            return msg;
          } else {
            msg = "更早";
            return msg;
          }
        }
      }
    },
    getAllList() {
      let data = {
        limit: this.limit,
        page: this.page,
        object: null
      };
      this.$api
        .checkHistory(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.total = res.data.count;
            this.newsList = res.data.data;
            this.newsList.map(item => {
              let msg = this.changTime(item.createTime);
              this.$set(item, "msg", msg);
            });
            //console.log(this.newsList);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          //console.log(err);
        });
    }
  },
  mounted() {
    this.getAllList();
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
.title {
  //   font-size: 18px;
  //   padding: 10px 0;
  color: darkcyan;
}
.newsDetail {
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
  &:hover {
    background: #f2f2f2;
    cursor: pointer;
    .unvoice {
      display: none;
    }
    .voice {
      display: block;
    }
  }
}
.content {
  text-indent: 2em;
  letter-spacing: 0.5px;
  line-height: 2em;
}
.newsInfo {
  padding-left: 30px;
}
.unvoice {
  width: 20px;
  height: 20px;
  display: block;
  img {
    width: 100%;
    height: 100%;
  }
}
.voice {
  width: 20px;
  height: 20px;
  display: none;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>