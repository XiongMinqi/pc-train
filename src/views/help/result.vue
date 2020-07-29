<template>
  <div class="text-center">
    <div class="sucessWords">
      <div>
        <i class="el-icon-circle-check iconfont"></i>
      </div>
      <div>交卷成功!</div>
    </div>
    <div>
      <el-button type="primary" round @click="backIndex">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    backIndex() {
      this.$router.push({ name: "index", path: "/index" });
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.text-center {
  text-align: center;
}
.iconfont {
  // color: #67C23A;
  font-size: 150px;
  margin-right: 20px;

}
.sucessWords {
  background: #409eff;
  font-size: 100px;
  color: #ffffff;
  height: 110px;
  padding: 180px 0;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>