<template>
  <div class="indexLeft">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="1" @open="handleOpen" @close="handleClose" background-color="#d3dce6">
          <el-menu-item index="1" @click="goTo('/index')">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="2" @click="goTo('/score')">
            <i class="el-icon-s-data"></i>
            <span slot="title">我的积分</span>
          </el-menu-item>
          <el-menu-item index="3" @click="goTo('/onlineTest')">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">在线考试</span>
          </el-menu-item>
          <el-menu-item index="8" @click="goTo('/independentTest')">
            <i class="el-icon-edit"></i>
            <span slot="title">我的课程</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">在线学习</span>
            </template>
            <el-menu-item-group>
              <template slot="title">学习</template>
              <el-menu-item index="4-1" @click="goTo('/courseware')">
                <i class="el-icon-notebook-1"></i>
                <span slot="title">电子课件</span>
              </el-menu-item>
              <el-menu-item index="4-2" @click="goTo('/material')">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">电子教材</span>
              </el-menu-item>
              <el-menu-item index="4-3" @click="goTo('/online')">
                <i class="el-icon-edit"></i>
                <span slot="title">在线练习</span>
              </el-menu-item>
              <el-menu-item index="4-4" @click="goTo('/studyRecord')">
                <i class="el-icon-tickets"></i>
                <span slot="title">学习记录</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="5" @click="goTo('/mistake')">
            <i class="el-icon-document"></i>
            <span slot="title">错题集选</span>
          </el-menu-item>
          <el-menu-item index="6" @click="goTo('/grade')">
            <i class="el-icon-document-copy"></i>
            <span slot="title">成绩统计</span>
          </el-menu-item>
          <el-menu-item index="9" @click="goTo('/testRecords')">
            <i class="el-icon-document-copy"></i>
            <span slot="title">考试记录</span>
          </el-menu-item>
          <!-- <el-menu-item index="7" @click="goTo('/user')">
            <i class="el-icon-user-solid"></i>
            <span slot="title">个人信息</span>
          </el-menu-item> -->
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
.el-menu {
  width: 200px;
  border: 0;
  background-color: #d3dce6;
  color: #333;
}
</style>