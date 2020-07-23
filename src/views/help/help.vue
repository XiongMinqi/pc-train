<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="如何参加考试" name="1">
        <div class="">
          <div>
            <div>第一步、点击左侧导航栏（在线考试）</div>
            <div class="text-center">
              <img class="testimg" src="../../assets/effect/index.png" alt />
            </div>
          </div>
          <div>
            <div>第二步、点击蓝色（进入考试）按钮</div>
            <div style="color:red">注: 红色按钮表示不能参加的考试</div>
            <div class="text-center">
              <img class="testIngimg" src="../../assets/effect/testIng.png" alt />
            </div>
          </div>
          <div>
            <div>第三步、在倒计时结束前，做完题后点击提交试卷按钮提交试卷</div>
            <div class="text-center">
              <img class="test" src="../../assets/effect/test.png" alt />
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="如何查看考试成绩" name="2">
        <div class="">
          <div>
            <div>第一步、点击左侧导航栏（考试记录）</div>
            <div class="text-center">
              <img class="testimg" src="../../assets/effect/checktest.png" alt />
            </div>
          </div>
          <div>
            <div>第二步、点击查看明细</div>
            <div style="color:red">注: 灰色查看明细表示暂时无法查看试卷明细</div>
            <div class="text-center">
              <img class="testimg" src="../../assets/effect/looktest.png" alt />
            </div>
          </div>
          <div>
            <div>第三步、试卷明细</div>
            <div class="text-center">
              <img class="test" src="../../assets/effect/paperDetail.png" alt />
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="常见问题及解决办法" name="3">
        <div class="problem">
          <div class="title">1、无法评论课程?</div>
          <div class="content">原因 ：未参加该课程或已评论过该课程</div>
        </div>
        <el-divider></el-divider>
        <div class="problem">
          <div class="title">2、后台发布了新试卷，客户端未显示?</div>
          <div class="content">解决办法 ：退出重新登录</div>
        </div>
        <el-divider></el-divider>
        <div class="problem">
          <div class="title">3、更改了头像，右上角头像显示未改变?</div>
          <div class="content">解决办法 ：退出重新登录</div>
        </div>
        <el-divider></el-divider>
        <div class="problem">
          <div class="title">4、修改了个人信息刷新页面数据未改变?</div>
          <div class="content">解决办法 ：退出重新登录</div>
        </div>
        <el-divider></el-divider>
        <div class="problem">
          <div class="title">5、右上角头像不显示?</div>
          <div class="content">解决办法 ：退出重新登录</div>
        </div>
        <el-divider></el-divider>
        <div class="problem">
          <div class="title">6、考试记录中开始答题时间为1970/01/01 08:00:00?</div>
          <div class="content">原因 : 此时间为空，系统默认设置为1970/01/01 08:00:00</div>
        </div>
        <el-divider></el-divider>
        <div class="problem">
          <div class="title">7、左侧导航栏缩小了?</div>
          <div class="content">解决办法 : 点击左上角图标就会展开或者缩小左侧导航栏</div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: []
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
}
.aligh-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.text-center{
  text-align: center;
}
.margin-center{
  margin: 0 auto;
}
.testimg {
  width: 200px;
  height: 400px;
}
.testIngimg{
  width: 150px;
  height: 400px;
}
.test{
  width: 800px;
  height: 400px;
  border: 1px solid #f2f2f2;
}
.content{
  text-indent: 1.5em;
}
.problem{
  margin-bottom: 10px;
}
</style>