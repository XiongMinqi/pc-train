<template>
  <div>
    <div v-for="(item,index) in itemBoxs" :key="index">
      <div class="img"><img :src="item.imgUrl" alt /></div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemBoxs: [
        {
          imgUrl: "../../assets/img/myclass.svg",
          itemStr: "Classroom",
          name: "我的课程"
        },
        {
          imgUrl: "../../assets/img/myscore.svg",
          itemStr: "integral",
          name: "我的积分"
        },
        {
          imgUrl: "../../assets/img/onlinetest.svg",
          itemStr: "test",
          name: "在线考试"
        },
        {
          imgUrl: "../../assets/img/onlinestudy.svg",
          itemStr: "Study",
          name: "在线学习"
        },
        {
          imgUrl: "../../assets/img/error.svg",
          itemStr: "mistakes",
          name: "错题集"
        },
        {
          imgUrl: "../../assets/img/myscore.svg",
          itemStr: "score",
          name: "成绩统计"
        },
        {
          imgUrl: "../../assets/img/username.svg",
          itemStr: "user",
          name: "个人信息"
        }
      ]
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
.img{
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>