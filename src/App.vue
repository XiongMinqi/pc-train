<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: {},
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
        this.$api.sendInfo().then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        });
        // console.log("五分钟发一次消息");
      }, 300000);
    },
    getBrowser() {
      var browser = {
          msie: false,
          firefox: false,
          opera: false,
          safari: false,
          chrome: false,
          netscape: false,
          appname: "unknown",
          version: 0,
        },
        ua = window.navigator.userAgent.toLowerCase();
      if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(ua)) {
        browser[RegExp.$1] = true;
        browser.appname = RegExp.$1;
        browser.version = RegExp.$2;
      } else if (/version\D+(\d[\d.]*).*safari/.test(ua)) {
        // safari
        browser.safari = true;
        browser.appname = "safari";
        browser.version = RegExp.$2;
      }
      // return browser.appname + " " + browser.version;
      return browser.appname;
    },
  },
  mounted() {
    this.sendMsg();
    if (this._isMobile()) {
      this.$message({
        message: "请使用电脑浏览本网站，否则会影响您的正常使用",
        type: "warning",
      });
    }
    var a = this.getBrowser();
    if (
      a.indexOf("ie") !== -1 ||
      a.indexOf("IE") !== -1 ||
      a.indexOf("Explorer") !== -1 ||
      a.indexOf("unknown") !== -1
    ) {
      this.$notify({
        title: "温馨提示",
        message:
          "自2015年3月起，微软已宣布弃用IE，且不再对IE提供任何更新维护。如果您使用的是双核浏览器，请您切换浏览器内核为极速模式后再浏览本网页。建议使用chorme或者firefox浏览器",
        showClose: false,
        position: "bottom-right",
        type: "warning",
        duration: 0,
      });
    }
  },
  watch: {},
  computed: {},
  destroyed() {
    clearInterval(this.time);
  },
};
</script>


<style scope lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>