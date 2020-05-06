<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    goto(e) {
      console.log(e);
      this.$router.push({ name: e, path: `/${e}` });
    },
  },
  mounted() {
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.grid-content {
  text-align: center;
  border-radius: 10px;
  min-height: 36px;
  line-height: 36px;
}
.bg-purple-courseware {
  background: #0faf97;
}
.bg-purple-material {
  background: #0ee7b1;
}
.bg-purple-online {
  background: #a8d30b;
}
.bg-purple-studyRecord {
  background: #e108e9;
}
.el-col {
  :hover {
    cursor: pointer;
  }
}
</style>