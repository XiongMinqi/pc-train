<template>
  <div class="scroll">
    <div v-if="emptyScoreData.length>0" class="infinite-list" style="overflow:auto">
      <div class="flex">
        <div class="index">序号</div>
        <div class="testName">试卷</div>
        <div class="testTime">考试时间</div>
        <div class="duringTime">考试用时</div>
        <div class="score">得分</div>
        <div class="operation">操作</div>
      </div>
      <div>
        <div v-for="(item,index) in emptyScoreData" :key="index">
          <div class="flex">
            <div class="index" v-if="index>=9">{{index+1}}</div>
            <div class="index" v-if="index<9">0{{index+1}}</div>
            <div class="testName">{{item.paperName}}</div>
            <div class="testTime">{{item.beginTime}}</div>
            <div class="duringTime">{{item.costMinutes}}</div>
            <div class="score">{{item.score}}</div>
            <div class="operation">查看明细</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allTestList: [],
      emptyScoreData:[]
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
    //去除重复考试的试卷
			duplicate(arr) {
				for (var i = 0; i < arr.length; i++) {
					for (var j = i + 1; j < arr.length; j++) {
						if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
							arr.splice(j, 1);
							j--;
						}
					}
				}
				return arr;
			},
    //获取考试记录
    getTestExam() {
      this.$grade
        .getExam()
        .then(res => {
          this.allTestList = res.data.data[0].items;
          this.allTestList.map(item => {
            item.beginTime = this.timeFormat(item.beginTime);
            item.beginWriteTime = this.timeFormat(item.beginWriteTime);
            item.endWriteTime = this.timeFormat(item.endWriteTime);
            item.costMinutes = this.twoNumber(item.costMinutes);
          });
          console.log(res.data.data[0]);
          this.emptyExamIds = res.data.data[0].emptyExamIds;
          if (this.emptyExamIds.length > 0) {
            this.emptyExamIds.map(item=>{
              this.allTestList.map(itemes=>{
                if(itemes.examId == item){
                  this.emptyScoreData.push(itemes);
                }
              })
            })
            this.emptyScoreData = this.duplicate(this.emptyScoreData)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getTestExam();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.scroll {
  height: 290px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 20px;
  .index {
    width: 5%;
  }
  .testName {
    width: 30%;
  }
  .testTime {
    width: 25%;
  }
  .duringTime {
    width: 10%;
  }
  .score {
    width: 10%;
  }
  .operation {
    width: 20%;
    :hover {
      cursor: pointer;
    }
  }
  // :hover {
  //   cursor: pointer;
  // }
  div {
    overflow: hidden;
  }
}
</style>