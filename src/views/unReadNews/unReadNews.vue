<template>
  <div class="newsDetail" v-loading="loading">
    <div class="newsTitle text-center">{{newsDetail.title}}</div>
    <div class="flex aligh-center justify-between newsTime">
      <div>
        <div v-if="newsDetail.type<=1000">系统通知</div>
        <div v-else>其他通知</div>
      </div>
      <div>{{newsDetail.createTime}}</div>
    </div>
    <div class="newsContent">
      <div v-if="newsDetail.content">{{newsDetail.content}}</div>
      <div v-else>此消息无内容</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      newsDetail: {},
      loading: true,
      flag: false
    };
  },
  components: {},
  methods: {
    //未读消息详情
    getNewaDetail() {
      this.$api
        .newsDetail(this.id)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.newsDetail = res.data.data[0];
            if (this.flag === true) {
              this.readNews();
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    //标记消息为已读
    readNews() {
      this.$api
        .alreadyRead(this.id)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.flag = this.$route.query.flag;
    this.getNewaDetail();
  },
  watch: {
    $route: {
      handler() {
        this.id = this.$route.query.id;
        this.getNewaDetail();
      },
      //深度监听，同时也可监听到param参数变化
      deep: true
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.text-center {
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
.newsDetail {
  width: 60%;
  margin: 0 auto;
}
.newsTitle {
  font-size: 20px;
}
.newsTime {
  font-size: 12px;
  color: #a2a2a2;
  margin: 20px 0;
}
.newsContent {
  text-indent: 2em;
  margin-top: 10px;
  letter-spacing: 0.5px;
  line-height: 2em;
}
</style>