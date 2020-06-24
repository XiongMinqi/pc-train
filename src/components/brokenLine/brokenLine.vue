<template>
  <div>
    <div class="flex aligh-center">
      <div>
        <el-select v-model="type" placeholder="请选择时间范围">
          <el-option v-for="item in listType" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button type="primary" @click="getlist">开始筛选</el-button>
      </div>
    </div>
    <div id="chartLineBox" style="width: 90%;height: 49vh;"></div>
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
      type: "本月",
      listType: [
        {
          key: 1,
          value: "今天"
        },
        {
          key: 2,
          value: "昨天"
        },
        {
          key: 3,
          value: "近7天"
        },
        {
          key: 4,
          value: "近30天"
        },
        {
          key: 5,
          value: "本月"
        },
        {
          key: 6,
          value: "上一月"
        },
        {
          key: 7,
          value: "本季度"
        },
        {
          key: 8,
          value: "上季度"
        },
        {
          key: 9,
          value: "本年"
        },
        {
          key: 10,
          value: "上年"
        },
        {
          key: 11,
          value: "本周"
        },
        {
          key: 12,
          value: "上周"
        }
      ],
      page: 1,
      limit: 30,
      option: {}
    };
  },
  components: {},
  methods: {
    getlist() {
      let data = {
        timeRange: this.type
      };
      this.$grade
        .getTongji(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.setOption();
            if (res.data.data.length > 0) {
              this.paperName = [];
              this.score = [];
              this.totalScore = [];
              res.data.data.map(item => {
                this.paperName.push(item.paperName);
                this.score.push(item.actualScore);
                this.totalScore.push(item.totalScore);
              });
            } else {
              this.paperName = [];
              this.score = [];
              this.totalScore = [];
              this.$message({
                message: this.type + "暂无考试数据",
                type: "warning"
              });
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          // console.log(err);
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
    // this.getTestExam();
    this.getlist();
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
.flex {
  display: flex;
}
.aligh-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.btn {
  margin-left: 20px;
}
</style>