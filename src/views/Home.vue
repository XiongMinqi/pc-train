<template>
  <div>
    <indexTop />
    <indexContent />
  </div>
</template>

<script>
import indexTop from "../components/index-top/index-top";
import indexContent from "../components/index-content/index-content";
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
      console.log(13156)
      this.$axios
        .get("/ksExam/getByMeCount")
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