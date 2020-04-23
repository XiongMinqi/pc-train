<template>
  <div id="chartLineBox" style="width: 90%;height: 70vh;"></div>
</template>

<script>
let echarts = require("echarts/lib/echarts"); // vue文件中引入echarts工具
require("echarts/lib/chart/line");
// 以下的组件按需引入
require("echarts/lib/component/tooltip"); // tooltip组件
require("echarts/lib/component/title"); //  title组件
require("echarts/lib/component/legend"); // legend组件
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},

  mounted() {
    this.chartLine = echarts.init(document.getElementById("chartLineBox"));

    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        //设置tip提示
        trigger: "axis"
      },

      legend: {
        //设置区分（哪条线属于什么）
        data: ["平均成绩", "学生成绩"]
      },
      color: ["#8AE09F", "#FA6F53"], //设置区分（每条线是什么颜色，和 legend 一一对应）
      xAxis: {
        //设置x轴
        type: "category",
        boundaryGap: false, //坐标轴两边不留白
        data: [
          "2019-1-1",
          "2019-2-1",
          "2019-3-1",
          "2019-4-1",
          "2019-5-1",
          "2019-6-1",
          "2019-7-1"
        ],
        name: "科目", //X轴 name
        nameTextStyle: {
          //坐标轴名称的文字样式
          color: "#FA6F53",
          fontSize: 16,
          padding: [0, 0, 0, 20]
        },
        axisLine: {
          //坐标轴轴线相关设置。
          lineStyle: {
            color: "#FA6F53"
          }
        }
      },
      yAxis: {
        name: "分数",
        nameTextStyle: {
          color: "#FA6F53",
          fontSize: 16,
          padding: [0, 0, 10, 0]
        },
        axisLine: {
          lineStyle: {
            color: "#FA6F53"
          }
        },
        type: "value"
      },
      series: [
        {
          name: "平均成绩",
          data: [220, 232, 201, 234, 290, 230, 220],
          type: "line", // 类型为折线图
          lineStyle: {
            // 线条样式 => 必须使用normal属性
            normal: {
              color: "#8AE09F"
            }
          }
        },
        {
          name: "学生成绩",
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          lineStyle: {
            normal: {
              color: "#FA6F53"
            }
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.chartLine.setOption(option);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
#chartLineBox{
    height: 50vh!important;
}
</style>