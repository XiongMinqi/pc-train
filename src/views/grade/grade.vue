<template>
  <div>
    <div class="flex justify">
      <div style="width:50%">
        <!-- <div class="flex list">
          <div class="words">试卷:</div>
          <div class="number">{{statistics.paperCount}}</div>
        </div>-->
        <div class="flex list">
          <div class="words">考试次数:</div>
          <div class="number">{{statistics.paperCount}}次</div>
        </div>
        <div class="flex list">
          <div class="words">平均考试时间:</div>
          <div class="number">{{statistics.averageExamTime}}分钟</div>
        </div>
        <div class="flex list">
          <div class="words">及格率:</div>
          <div class="number">{{statistics.passPercent}}%</div>
        </div>
        <div class="flex list">
          <div class="words">平均分:</div>
          <div class="number">{{statistics.averageScore}}分</div>
        </div>
        <div class="flex list">
          <div class="words">及格:</div>
          <div class="number">{{statistics.passCount}}次</div>
        </div>
        <div class="flex list">
          <div class="words">不及格:</div>
          <div class="number">{{statistics.failCount}}次</div>
        </div>
      </div>
      <div style="width:50%">
        <pieChart :passScoreMsg="passScore" />
      </div>
    </div>
    <div>
      <testRecords />
    </div>
  </div>
</template>

<script>
import pieChart from "../../components/pieChart/pieChart";
import testRecords from "../../components/testRecords/testRecords";
export default {
  data() {
    return {
      subjectName: [],
      statistics: [],
      passScore: {}
    };
  },
  components: {
    pieChart,
    testRecords
  },
  methods: {
    //获取科目名称
    getSubjectName() {
      this.$grade
        .getdict()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          // console.log(res);
          if (res.data.code === 0) {
            this.subjectName = res.data.data[0]["科目名称"];
            // console.log(this.subjectName);
          }
        })
        .catch(err => {
          // console.log(err);
        });
    },
    //保留两位小数
    twoNumber(num) {
      let str = num.toString();
      if (str.indexOf(".") == -1) {
        return num + ".00";
      } else {
        let len = str.length;
        let integerlen = str.indexOf(".");
        if (len > integerlen + 2) {
          return str.slice(0, integerlen + 3);
        } else if (len == integerlen + 2) {
          return str + "0";
        } else {
          return str;
        }
      }
    },
    //获取考试统计
    getStatistics() {
      this.$grade
        .getStatistics()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          // console.log(res);
          if (res.data.code === 0) {
            this.statistics = res.data.data[0];
            this.statistics.averageExamTime = this.twoNumber(
              this.statistics.averageExamTime
            );
            this.statistics.passPercent = this.twoNumber(
              this.statistics.passPercent * 100
            );
            this.statistics.averageScore = this.twoNumber(
              this.statistics.averageScore
            );
            // console.log(this.statistics);
            this.passScore = res.data.data[0].passScoreStruct;
            // console.log(this.passScore);
          }
        })
        .catch(err => {
          // console.log(err);
        });
    }
  },
  mounted() {
    this.getSubjectName();
    this.getStatistics();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
  align-items: center;
}
.justify {
  justify-content: space-between;
}
.words {
  width: 30%;
  text-align: end;
  margin-right: 20px;
}
.number {
  width: 50%;
  text-align: start;
}
.list {
  margin: 10px 0;
}
</style>