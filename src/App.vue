<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: {}
    };
  },
  components: {},
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    //定时给后台发信息
    sendMsg() {
      this.time = setInterval(() => {
        this.$api.sendInfo()
        // console.log("五分钟发一次消息");
      }, 300000);
    }
  },
  mounted() {
    this.sendMsg();
    if (this._isMobile()) {
      this.$message({
        message: "请使用电脑浏览本网站，否则会影响您的正常使用",
        type: "warning"
      });
    }
  },
  watch: {},
  computed: {},
  destroyed() {
    clearInterval(this.time);
  }
};
</script>


<style scope lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>