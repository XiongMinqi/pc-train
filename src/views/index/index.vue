<template>
  <div>
    <indexTop />
    <indexContent />
  </div>
</template>

<script>
import indexTop from "../../components/index-top/index-top";
import indexContent from "../../components/index-content/index-content";
export default {
  data() {
    return {};
  },
  components: {
    indexTop,
    indexContent
  },
  methods: {
    getNumber() {
      console.log(132453)
      this.$axios
        .get("/apis/ksExam/getByMeCount")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getNumber();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>