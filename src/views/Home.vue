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
.content{
  position: absolute;
  width: 100%;
  height: 100%;
}
.el-container{
border-top: 1px solid black;
}
.is-vertical{
  border: 0;
}
.el-main{
  height: 696px;
  border-left: 1px solid black;
}
</style>