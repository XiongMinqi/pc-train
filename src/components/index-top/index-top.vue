<template>
  <div>
      <div class="title">新科电子培训系统</div>
      <div class="indexTop">
      <div class="topLeft">
          <div><img class="userImg" src="../../assets/icon/u=2669898717,1590930959&fm=26&gp=0.jpg" alt=""></div>
          <div>新科电子</div>
      </div>
      <div><img src="../../assets/img/tall.svg" alt=""></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title{
    text-align: center;
    // color: #ff0000;
    font-weight: bold;
    font-size: 30px;
    padding: 20px;
}
.indexTop{
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    // line-height: 32px;
    .userImg{
        margin-right: 10px;
        width: 50px;
        height: 50px;
    }
    img{
        width: 32px;
        height: 32px;
    }
    .topLeft{
        display: flex;
        align-items: center;
    }
}
</style>