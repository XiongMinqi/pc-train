<template>
  <div v-loading="loading">
    <div class="historyRecord">学习任务记录</div>
    <el-table :data="missionList" border style="width: 100%">
      <el-table-column prop="name" label="任务名称"></el-table-column>
      <el-table-column prop="requireLearnTime" label="要求学习时长/分钟"></el-table-column>
      <el-table-column prop="requireRightCount" label="要求答对数量/道"></el-table-column>
      <el-table-column prop="learnTime" label="学习时长/分钟"></el-table-column>
      <el-table-column prop="lastSubmitTime" label="最后提交练习时间"></el-table-column>
      <el-table-column prop="endTime" label="截止时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="mini">查看练习</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog
        width="90%"
        top="1vh"
        class="dialogVisible"
        title="练习详情"
        :visible.sync="dialogVisible"
        :modal-append-to-body="true"
      >
        <div v-loading="dialogLoading" class="paperInfo">
          <div class="paperDetail">
            <div class="rightCount">
              <div>答对数量 : </div>
              <div class="count"> {{rightCount}}</div>
            </div>
            <div v-for="(item,index) in practiseList" :key="index">
              <div class="title">
                <div>
                  <div v-if="index<9">0{{index+1}}、</div>
                  <div v-else>{{index+1}}、</div>
                </div>
                <div style="width:60px" :class="item.type===4?'name':'public'">
                  <span v-if="item.type===0">【单选】</span>
                  <span v-if="item.type===1">【多选】</span>
                  <span v-if="item.type===2">【填空】</span>
                  <span v-if="item.type===3">【判断】</span>
                  <span v-if="item.type===4">【名词解释】</span>
                  <span v-if="item.type===5">【问答】</span>
                </div>
                <div style="width:88%">{{item.content}}</div>
              </div>
              <div v-if="item.type===0||item.type===1" style="padding-bottom:10px">
                <div v-for="(itm,idx) in item.options" :key="idx">
                  <div class="flex aligh-center" style="padding-left:10px">
                    <div v-if="itm.order===0">A.</div>
                    <div v-if="itm.order===1">B.</div>
                    <div v-if="itm.order===2">C.</div>
                    <div v-if="itm.order===3">D.</div>
                    <div v-if="itm.order===4">E.</div>
                    <div v-if="itm.order===5">F.</div>
                    <div>{{itm.content}}</div>
                  </div>
                </div>
              </div>
              <div v-if="item.type===3" style="padding-bottom:10px">
                <div style="padding-left:10px">正确</div>
                <div style="padding-left:10px">错误</div>
              </div>
              <div>
                <div class="flex aligh-center">
                  <div>学员答案</div>
                  <div class="answerDetail" style="color:darkcyan">
                    <div v-if="answerList.length>0">{{answerList[index].content}}</div>
                    <div v-else>该题暂未作答</div>
                  </div>
                </div>
                <div class="flex aligh-center">
                  <div>正确答案</div>
                  <div class="answerDetail" style="color: darkolivegreen">{{item.standardAnswerStr}}</div>
                </div>
                <div class="flex aligh-center">
                  <div>练习结果</div>
                  <div class="answerDetail" v-if="answerList.length>0">
                    <div v-if="answerList[index].isRight===false" style="color:red">回答错误</div>
                    <div v-if="answerList[index].isRight===true" style="color:green">回答正确</div>
                  </div>
                  <div class="answerDetail" v-else style="color:red">暂无结果</div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" class="dialog-footer Btn">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,15,20,25,30]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      page: 1,
      limit: 10,
      missionList: [],
      currentPage: 1,
      total: 0,
      dialogVisible: false,
      dialogLoading: true,
      practiseList: [],
      answerList: [],
      rightCount: 0
    };
  },
  components: {},
  methods: {
    handleClick(e) {
      //e);
      this.practiseList = [];
      this.dialogVisible = true;
      this.dialogLoading = true;
      this.getAnswer(e.id);
      this.getQuestiones(e.id);
    },
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getUndoMission();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.page = val;
      // console.log(this.offset, this.limit);
      this.getUndoMission();
    },
    getAnswer(e) {
      this.$api
        .getAnswer(e)
        .then(res => {
          this.dialogLoading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.answerList = res.data.data;
            this.rightCount = 0;
            this.rightMsg = "";
            this.answerList.map(item => {
              if (item.isRight === true) {
                this.rightCount += 1;
              }
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.dialogLoading = false;
          this.$message({
            message: "获取失败",
            type: "warning"
          });
        });
    },
    getQuestiones(e) {
      this.$api
        .getQuestion(e)
        .then(res => {
          this.dialogLoading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.practiseList = res.data.data;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.dialogLoading = false;
          this.$message({
            message: "获取失败",
            type: "warning"
          });
        });
    },
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
      clock += year + "-";
      if (month < 10) clock += "0";
      clock += month + "-";
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
    getUndoMission() {
      let data = {
        limit: this.limit,
        page: this.page,
        object: {
          isRunning: false
        }
      };
      this.$api
        .getUndoMission(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.missionList = res.data.data;
            this.total = res.data.count;
            this.missionList.map(item => {
              let times = Date.parse(item.publishTime) + item.lastTime * 60000;
              let endTime = this.timeFormat(times);
              this.$set(item, "endTime", endTime);
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    }
  },
  mounted() {
    this.getUndoMission();
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
.else {
  text-align: center;
  padding: 20px;
}
.block {
  text-align: center;
  margin-top: 20px;
}
.title {
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
}
.paperInfo {
}
.Btn {
  margin-top: 50px;
  text-align: center;
}
.answerDetail {
  margin-left: 20px;
}
.paperDetail {
  height: 60vh;
  overflow: auto;
  position: relative;
}
.rightCount {
  position: fixed;
  top: 3vh;
  left: 30vh;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #a2a2a2;
  .count {
    color: green;
    font-size: 20px;
    padding-left: 10px;
  }
}
</style>