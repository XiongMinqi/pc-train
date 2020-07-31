<template>
  <div>
    <div id="pie1">
      <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
      <div id="main1" style="float:left;width:100%;height: 300px"></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  created() {},
  mounted() {
    this.getStatistics();
  },
  methods: {
    getStatistics() {
      this.$grade
        .getStatistics()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          // console.log(res);
          if (res.data.code === 0) {
            this.passScoreMsg = res.data.data[0].passScoreStruct;
            // console.log(this.passScore);
            this.initData();
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          //console.log(err);
        });
    },
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "成绩统计", //主标题
          x: "center" //x轴方向对齐方式
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          bottom: "bottom",
          data: ["0", "60", "70", "80", "90"]
        },
        series: [
          {
            name: "个人成绩统计",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.passScoreMsg[0], name: "0" },
              { value: this.passScoreMsg[60], name: "60" },
              { value: this.passScoreMsg[70], name: "70" },
              { value: this.passScoreMsg[80], name: "80" },
              { value: this.passScoreMsg[90], name: "90" }
            ],
            // data: [
            //   { value: 6, name: "0" },
            //   { value: 1, name: "60" },
            //   { value: 0, name: "70" },
            //   { value: 0, name: "80" },
            //   { value: 2, name: "90" }
            // ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scope>
  #main1{
    height: 200px!important;
  }
</style>