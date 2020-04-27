<template>
  <div>studyRecord</div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      page: 1,
      limit: 5
    };
  },
  components: {},
  methods: {
    //获取我的学习记录
    getStudy() {
      this.$api
        .getStudyRecord(this.userInfo.userId,this.page,this.limit)
        .then()
        .catch();
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.getStudy();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>