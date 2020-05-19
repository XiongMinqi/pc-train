<template>
  <div>
    <div class="text">最近三十天的考试记录</div>
    <div id="chartLineBox" style="width: 90%;height: 50vh;"></div>
  </div>
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
    return {
      paperName: [],
      time: [],
      score: [],
      totalScore: [],
      page: 1,
      limit: 30,
      option: {}
    };
  },
  components: {},
  methods: {
    //转换时间
    timeFormat(time) {
      var clock = "";
      var d = new Date(time);
      var year = d.getFullYear(); //年
      var month = d.getMonth() + 1; //月
      var day = d.getDate(); //日
      var hh = d.getHours(); //时
      var mm = d.getMinutes(); //分
      var ss = d.getSeconds(); //秒
      clock += year + "/";
      if (month < 10) clock += "0";
      clock += month + "/";
      if (day < 10) clock += "0";
      clock += day + " ";
      if (hh < 10) clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += "0";
      clock += mm + ":";
      if (ss < 10) clock += "0";
      clock += ss;
      return clock;
    },
    getTestExam() {
      this.$grade
        .getExam(this.page, this.limit, this.status)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.setOption();
            // console.log(res);
            // this.allTestList = res.data.data;
            res.data.data.map(item => {
              item.beginTime = this.timeFormat(item.beginTime);
              this.paperName.push(item.paperName);
              this.time.push(item.beginTime);
              this.score.push(item.score);
              this.totalScore.push(item.totalScore);
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    setOption() {
      this.chartLine = echarts.init(document.getElementById("chartLineBox"));
      // 指定图表的配置项和数据
      this.option = {
        // title: {
        //   text: "最近三十次考试统计"
        // },
        tooltip: {
          //设置tip提示
          trigger: "axis"
        },

        legend: {
          //设置区分（哪条线属于什么）
          data: ["总分", "得分", "时间"]
        },
        color: ["#8AE09F", "#FA6F53", "#fddeca"], //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {
          //设置x轴
          type: "category",
          boundaryGap: false, //坐标轴两边不留白
          data: this.paperName,
          // data: ["2020-1-1", "2020-2-1", "2020-3-1", "2020-4-1", "2020-5-1"],
          name: "试卷名称", //X轴 name
          nameTextStyle: {
            //坐标轴名称的文字样式
            color: "#FA6F53",
            fontSize: 16,
            padding: [0, 0, 0, 20]
          },
          axisLine: {
            //坐标轴轴线相关设置。
            lineStyle: {
              color: "#000000"
            }
          }
        },
        // xAxis: {
        //   //设置x轴
        //   type: "category",
        //   boundaryGap: false, //坐标轴两边不留白
        //   data: this.time,
        //   // data: ["2020-1-1", "2020-2-1", "2020-3-1", "2020-4-1", "2020-5-1"],
        //   name: "考试时间", //X轴 name
        //   nameTextStyle: {
        //     //坐标轴名称的文字样式
        //     color: "#fddeca",
        //     fontSize: 16,
        //     padding: [0, 0, 0, 20]
        //   },
        //   axisLine: {
        //     //坐标轴轴线相关设置。
        //     lineStyle: {
        //       color: "#000000"
        //     }
        //   }
        // },
        yAxis: {
          name: "分数",
          nameTextStyle: {
            color: "#FA6F53",
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: "#000000"
            }
          },
          type: "value"
        },
        series: [
          {
            name: "总分",
            data: this.totalScore,
            // data: [50, 80, 90, 70, 90],
            type: "line", // 类型为折线图
            lineStyle: {
              // 线条样式 => 必须使用normal属性
              normal: {
                color: "#8AE09F"
              }
            }
          },
          // {
          //   name: "考试时间",
          //   data: this.time,
          //   // data: [50, 80, 90, 70, 90],
          //   type: "line", // 类型为折线图
          //   lineStyle: {
          //     // 线条样式 => 必须使用normal属性
          //     normal: {
          //       color: "#fddeca"
          //     }
          //   }
          // },
          {
            name: "得分",
            data: this.score,
            // data: [10, 20, 50, 60, 40],
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
      this.chartLine.setOption(this.option);
    }
  },
  mounted() {
    this.getTestExam();
  },
  watch: {
    //观察option的变化
    paperName: {
      handler(newVal, oldVal) {
        if (newVal) {
          // this.option.series[1].data = newVal;
          this.setOption();
          // console.log(newVal);
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    time: {
      handler(newVal, oldVal) {
        if (newVal) {
          // this.option.xAxis.data = newVal;
          this.setOption();
          // console.log(newVal);
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    score: {
      handler(newVal, oldVal) {
        if (newVal) {
          // this.option.series[1].data = newVal;
          this.setOption();
          // console.log(newVal);
        }
      },
      deep: true //对象内部属性的监听，关键。
    },
    totalScore: {
      handler(newVal, oldVal) {
        if (newVal) {
          // this.option.series[0].data = newVal;
          this.setOption();
          // console.log(newVal);
        }
      },
      deep: true //对象内部属性的监听，关键。
    }
  },

  computed: {}
};
</script>

<style scoped lang='scss'>
.text {
  padding-left: 200px;
  font-size: 18px;
  color:blue;
}
</style>