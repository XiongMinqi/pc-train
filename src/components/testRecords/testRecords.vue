<template>
  <div class="content">
    <el-container>
      <el-aside width="200px">
        <examLeft />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import examLeft from "../../components/examLeft/examLeft";
export default {
  data() {
    return {
      examList: [],
      allTestList: []
    };
  },
  components: {
    examLeft
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  border-top: 1px solid #c5c5c5;
}
.el-main {
  border-left: 1px solid #c5c5c5;
}
</style>