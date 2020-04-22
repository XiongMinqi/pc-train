<template>
  <div class="content">
    <el-container>
      <el-header>
        <indexTop />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <indexLeft />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import indexTop from "../components/index-top/index-top";
import indexLeft from "../components/index-left/index-left";
export default {
  data() {
    return {};
  },
  components: {
    indexTop,
    indexLeft
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.content {
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  // line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  height: 100%;
  color: #333;
}

.el-main {
  // background-color: #e9eef3;
  // color: #333;
  height: 100%;
}
</style>