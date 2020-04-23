<template>
  <div>
    <el-container>
      <el-header>
        <examLeft />
      </el-header>
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
</style>