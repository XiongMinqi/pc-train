<template>
  <div class="indexLeft">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" @click="goTo('/allExam')">
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">全部试卷</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goTo('/passExam')">
            <!-- <i class="el-icon-s-data"></i> -->
            <span slot="title">及格试卷</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goTo('/failExam')">
            <!-- <i class="el-icon-edit-outline"></i> -->
            <span slot="title">不及格试卷</span>
          </el-menu-item>
          <el-menu-item index="4" @click="goTo('/emptyExam')">
            <!-- <i class="el-icon-s-promotion"></i> -->
            <span slot="title">未做试卷</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
     goTo(path) {
      this.$router.push(path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.indexLeft{
    border-right: 1px solid black;
}
.el-menu{
  width: 200px;
  border: 0;
}
</style>