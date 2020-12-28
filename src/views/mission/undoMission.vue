<template>
  <div v-loading="loading">
    <div class="display-align-center display-flex display-justify-between">
      <div class="pageTitle">学习任务</div>
      <div >
        <el-button size="mini" plain type="primary" @click="jumpHistoryList('/statistMission')">任务统计</el-button>
        <el-button size="mini" plain type="primary" @click="jumpHistoryList('/historyMission')">历史记录</el-button></div>
    </div>
    <div v-if="showMission">
      <div v-if="missionList.length>0">
        <div v-for="(item,index) in missionList" :key="index" class="cardsDetail">
          <el-card class="box-card" :class="item.running===true?'border-true':'border-false'">
            <div slot="header" class="clearfix">
              <span>{{item.name}}</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="checkDetail(item)"
              >查看详情</el-button>
            </div>
            <div class="text item">要求学习时长 : {{item.requireLearnTime}}分钟</div>
            <div class="text item">要求答对数量 : {{item.requireRightCount}}道</div>
            <div class="text item">发布时间 : {{item.publishTime}}</div>
            <div class="text item">截至时间 : {{item.endTime}}</div>
            <!-- <div class="text item">持续时间 : {{item.msg}}</div> -->
          </el-card>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[6, 10, 15, 20, 30, 40]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <div v-else class="else"></div>
    </div>
    <div>
      <el-dialog :title="missiondetail.name" :visible.sync="dialogVisible" width="60%">
        <div style="min-height:40vh">
          <div class="text item">要求学习时长 : {{missiondetail.requireLearnTime}}分钟</div>
          <div class="text item">要求答对数量 : {{missiondetail.requireRightCount}}道</div>
          <div class="text item">目前学习时长 : {{missiondetail.learnTime}}分钟</div>
          <div
            class="text item"
            v-if="missiondetail.lastSubmitTime"
          >上次提交练习时间 : {{missiondetail.lastSubmitTime}}</div>
          <div class="text item" v-else>上次提交练习时间 : 暂时无提交记录</div>
          <div class="text item">发布时间 : {{missiondetail.publishTime}}</div>
          <div class="text item">截至时间 : {{missiondetail.endTime}}</div>
          <div class="text item">持续时间 : {{missiondetail.msg}}</div>

          <div class="text item">作业描述 : {{missiondetail.description}}</div>
        </div>
        <div slot="footer" style="text-align: center;">
          <span>
            <el-button type="primary" @click="joinMisson">进入作业</el-button>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      showMission: false,
      page: 1,
      limit: 6,
      dialogVisible: false,
      currentPage: 1,
      missiondetail: {},
      missionList: [],
      total: 0,
    };
  },
  components: {},
  methods: {
    jumpHistoryList(e){
      this.$router.push({path:e})
    },
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getUndoMission();
    },
    handleCurrentChange(val) {
      this.loading = true;
      this.page = val;
      this.getUndoMission();
    },
    checkDetail(e) {
      //console.log(e);
      this.missiondetail = e;
      this.dialogVisible = true;
    },
    //转换时间长度
    timeChange(e) {
      let time = e;
      let msg = "";
      if (time < 60) {
        msg = time + "分钟";
        return msg;
      } else if (time < 1440) {
        let hour = Math.floor(time / 60);
        let minute = time - hour * 60;
        if (minute > 0) {
          msg = hour + "小时" + minute + "分钟";
        } else {
          msg = hour + "小时";
        }
        return msg;
      } else {
        let day = Math.floor(time / 1440);
        let hour = Math.floor((time - day * 1440) / 60);
        let minute = time - day * 1440 - hour * 60;
        if (hour > 0) {
          msg = day + "天" + hour + "小时" + minute + "分钟";
        } else if (minute > 0) {
          msg = day + "天" + minute + "分钟";
        } else {
          msg = day + "天";
        }
        return msg;
      }
    },
    joinMisson() {
      this.dialogVisible = false;
      this.$router.push({
        name: "doMission",
        path: "/doMission",
        query: { id: this.missiondetail.id },
      });
    },
    getUndoMission() {
      let data = {
        limit: this.limit,
        page: this.page,
        object: {
          isRunning: true,
        },
      };
      this.$api
        .getUndoMission(data)
        .then((res) => {
          this.loading = false;
          this.showMission = true;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.missionList = res.data.data;
            this.total = res.data.count;
            this.missionList.map((item) => {
              item.publishTime = this.timeFormat(item.publishTime);
              if (item.lastSubmitTime) {
                item.lastSubmitTime = this.timeFormat(item.lastSubmitTime);
              }
              let msg = this.timeChange(item.lastTime);
              this.$set(item, "msg", msg);
              let times = Date.parse(item.publishTime) + item.lastTime * 60000;
              let endTime = this.timeFormat(times);
              this.$set(item, "endTime", endTime);
            });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.showMission = true;
          //console.log(err);
          this.$message({
            message: "获取失败",
            type: "warning",
          });
        });
    },
  },
  mounted() {
    this.getUndoMission();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 0 auto;
}
.border-true {
  border-left: 3px solid green;
}
.border-false {
  border-left: 3px solid grey;
}
.cardsDetail {
  display: inline-block;
  width: 50%;
  flex-wrap: wrap;
}
.else {
  padding: 30px;
  text-align: center;
  color: red;
}
</style>