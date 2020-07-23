<template>
  <div v-loading="loading">
    <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
      <el-tab-pane label="培训经历" name="first">
        <div class="flex">
          <div class="subject">
            <el-select v-model="experience" placeholder="请选择时间范围">
              <el-option v-for="item in chooseLIst" :key="item.key" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="btn">
            <el-button type="primary" @click="getData">开始筛选</el-button>
          </div>
        </div>
        <div v-if="experienceData.length>0">
          <div class="experList">
            <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in experienceData"
                :key="index"
                :timestamp="activity.publishTime"
                placement="top"
              >
                <el-card>
                  <h4>{{activity.name}}</h4>
                  <div v-if="activity.isAttendance==true">出勤</div>
                  <div v-else>未出勤</div>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <div v-else class="else">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane label="考试记录" name="second">
        <div class="flex">
          <div class="subject">
            <el-select v-model="record" placeholder="请选择时间范围">
              <el-option v-for="item in chooseLIst" :key="item.key" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="btn">
            <el-button type="primary" @click="getrecord">开始筛选</el-button>
          </div>
        </div>
        <div v-if="recordData.length>0">
          <div class="experList">
            <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in recordData"
                :key="index"
                :timestamp="activity.beginTime"
                placement="top"
              >
                <el-card>
                  <h4>{{activity.examName}}</h4>
                  <div v-if="activity.isPass==true">通过</div>
                  <div v-else>未通过</div>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <div v-else class="else">暂无数据</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      activeName: "first",
      record: "今年",
      reverse: true,
      experience: "今年",
      experienceData: [],
      recordData: [],
      chooseLIst: [
        {
          key: 0,
          value: "前年"
        },
        {
          key: 1,
          value: "去年"
        },
        {
          key: 2,
          value: "今年"
        }
      ],
      year: 0
    };
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      let value = tab.$options.propsData.label;
      if (value == "培训经历") {
        this.loading = true;
        this.getData();
      } else if (value == "考试记录") {
        this.loading = true;
        this.getrecord();
      }
    },
    chooseexperience() {},
    chooserecord() {},
    getData() {
      let data = {};
      if (this.experience === "前年") {
        data = {
          customStart: this.year - 2 + "-01-01 00:00:00",
          customEnd: this.year - 2 + "-12-30 23:59:59",
          timeRange: 3
        };
      }
      if (this.experience === "去年") {
        data = {
          customStart: this.year - 1 + "-01-01 00:00:00",
          customEnd: this.year - 1 + "-12-30 23:59:59",
          timeRange: 3
        };
      }
      if (this.experience === "今年") {
        data = {
          customStart: this.year + "-01-01 00:00:00",
          customEnd: this.year + "-12-30 23:59:59",
          timeRange: 3
        };
      }
      this.$grade
        .getCourseByTime(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.experienceData = res.data.data;
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
            message: "获取失败",
            type: "warning"
          });
        });
    },
    getrecord() {
      let data = {};
      if (this.record === "前年") {
        data = {
          limit: 300,
          page: 1,
          object: {
            beginTime: this.year - 2 + "-01-01 00:00:00",
            endTime: this.year - 2 + "-12-30 23:59:59"
          }
        };
      }
      if (this.record === "去年") {
        data = {
          limit: 300,
          page: 1,
          object: {
            beginTime: this.year - 1 + "-01-01 00:00:00",
            endTime: this.year - 1 + "-12-30 23:59:59"
          }
        };
      }
      if (this.record === "今年") {
        data = {
          limit: 300,
          page: 1,
          object: {
            beginTime: this.year + "-01-01 00:00:00",
            endTime: this.year + "-12-30 23:59:59"
          }
        };
      }
      this.$grade
        .getExam(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.recordData = res.data.data;
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
            message: "获取失败",
            type: "warning"
          });
        });
    }
  },
  mounted() {
    this.year = new Date().getFullYear();
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.aligh-center {
  align-items: center;
}
.btn {
  margin-left: 10px;
}
.experList {
  margin-top: 30px;
}
</style>