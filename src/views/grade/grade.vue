<template>
  <div>
    <div class="flex justify">
      <div style="width:50%">
        <div class="flex list">
          <div class="words">试卷:</div>
          <div class="number">{{statistics.paperCount}}</div>
          <!-- <div class="number">20</div> -->
        </div>
        <div class="flex list">
          <div class="words">考试次数:</div>
          <div class="number">{{statistics.examCount}}</div>
        </div>
        <div class="flex list">
          <div class="words">平均考试时间:</div>
          <div class="number">{{statistics.averageExamTime}}</div>
        </div>
        <div class="flex list">
          <div class="words">及格率:</div>
          <div class="number">{{statistics.passPercent}}</div>
        </div>
        <div class="flex list">
          <div class="words">平均分:</div>
          <div class="number">{{statistics.averageScore}}</div>
        </div>
        <div class="flex list">
          <div class="words">及格:</div>
          <div class="number">{{statistics.passCount}}</div>
        </div>
        <div class="flex list">
          <div class="words">不及格:</div>
          <div class="number">{{statistics.failCount}}</div>
        </div>
      </div>
      <div style="width:50%">
        <pieChart :passScoreMsg="passScore" />
      </div>
    </div>
  </div>
</template>

<script>
import pieChart from "../../components/pieChart/pieChart";
export default {
  data() {
    return {
      subjectName: [],
      statistics: [],
      passScore: {}
    };
  },
  components: {
    pieChart
  },
  methods: {
    getSubmitExam() {
      this.$grade
        .submitExam()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取科目名称
    getSubjectName() {
      this.$grade
        .getdict()
        .then(res => {
          console.log(res);
          if (res.data.code === 0) {
            this.subjectName = res.data.data[0]["科目名称"];
            console.log(this.subjectName);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取考试统计
    getStatistics() {
      this.$grade
        .getStatistics()
        .then(res => {
          console.log(res);
          if (res.data.code === 0) {
            this.statistics = res.data.data[0];
            console.log(this.statistics);
            this.passScore = res.data.data[0].passScoreStruct;
            console.log(this.passScore);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getSubmitExam();
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