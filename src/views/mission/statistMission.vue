<template>
  <div v-loading="loading">
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
    <div id="chartLineBox" style="width: 90%;height: 80vh;"></div>
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
      loading: true,
      type: "本周",
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
      ]
    };
  },
  components: {},
  methods: {
    getlist() {
      let data = {
        timeRange: this.type
      };
      this.$api
        .statistmission(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            if (res.data.data.length > 0) {
              this.paperName = [];
              this.score = [];
              this.totalScore = [];
              res.data.data.map(item => {
                this.paperName.push(item.assignmentName);
                this.score.push(item.learnTime);
              });
            } else {
              this.paperName = [];
              this.score = [];
              this.$message({
                message: this.type + "暂无数据",
                type: "warning"
              });
            }
            this.setOption();
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
        tooltip: {
          //设置tip提示
          trigger: "axis"
        },

        legend: {
          //设置区分（哪条线属于什么）
          data: ["学习时长", "时间"]
        },
        color: ["#FA6F53", "#fddeca"], //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: {
          //设置x轴
          type: "category",
          boundaryGap: false, //坐标轴两边不留白
          data: this.paperName,
          //   data: ["2020-1-1", "2020-2-1", "2020-3-1", "2020-4-1"],
          name: "任务名称", //X轴 name
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
        yAxis: {
          name: "学习时长",
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
            name: "学习时长",
            data: this.score,
            // data: [10, 20, 50, 60],
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
    this.getlist();
  },
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
.btn{
    margin-left: 20px;
}
</style>