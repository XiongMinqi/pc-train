<template>
  <div v-loading="loading">
    <div class="msg">
      <span style="padding-right:10px">{{date}}</span>
      {{msg}}
    </div>
    <div id="coursesTable" style="text-align:center"></div>
    <el-dialog title="课程详情" :visible.sync="dialogFormVisible" @close="close">
      <div
        v-loading="dialogloading"
        style="min-height: 50vh;display: flex;justify-content: space-between"
      >
        <div>
          <div class="type" style="font-size:20px;font-weight:bold;">{{courseDetail.name}}</div>
          <div class="type">老师 : {{courseDetail.teacherName}}</div>
          <div class="type">
            类型 :
            <span v-if="courseDetail.type === 0">理论课</span>
            <span v-if="courseDetail.type === 1">实践课</span>
            <span v-if="courseDetail.type === 2">考试</span>
          </div>
          <div class="type">
            状态 :
            <span v-if="courseDetail.done === false">尚未开始</span>
            <span v-if="courseDetail.done === true">已经开始</span>
          </div>
          <div class="type">教室 : {{ courseDetail.classroomName }}</div>
          <div class="type">
            <div v-if="courseDetail.place">培训地点 : {{ courseDetail.place }}</div>
            <div v-else>培训地点 : 尚未指定</div>
          </div>
          <div class="type">开始时间 : {{ courseDetail.startTime }}</div>
          <div class="type">结束时间 : {{ courseDetail.endTime }}</div>
          <div class="type">
            <div v-if="isJoinCourse === true">您参与了该课程</div>
            <div v-if="isJoinCourse === false">您尚未参与该课程</div>
          </div>
          <div class="type">课程说明 : {{ courseDetail.content }}</div>
        </div>
        <div>
          <div class="teacherPicture">
            <div v-if="teacherImg">
              <img :src="teacherImg[0]" alt />
            </div>
            <div v-else>
              <img src="../../assets/icon/userImg.jpg" alt />
            </div>
            <div style="display: flex;align-items: center;justify-content: center;padding-top:80px">
              <el-button round size="mini" @click="commentCurse">评价课程</el-button>
              <el-button round size="mini" @click="allComments">查看课程评价</el-button>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align:center">
        <el-button type="primary" round @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="课程选择" :visible.sync="diachoosed" @close="chooseCourseClose">
      <div style="min-height:50vh">
        <el-select v-model="choosedItem" placeholder="请选择">
          <el-option
            v-for="item in courseChooseList"
            :key="item.key"
            :label="item.value"
            :value="item.key"
          ></el-option>
        </el-select>
        <div class="choosedBtn">
          <el-button type="primary" round @click="diachoosed = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Timetables from "timetables";
export default {
  data() {
    return {
      courselist: [
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      courseIdList: [
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      classList: [],
      date: "",
      msg: "",
      dialogFormVisible: false,
      courseDetail: {},
      teacherImg: [],
      courseChooseList: [],
      diachoosed: false,
      choosedItem: "",
      isJoinCourse: false,
      isCommentCourse: false,
      loading: true,
      dialogloading: false
    };
  },
  components: {},
  methods: {
    chooseCourseClose() {
      if (this.choosedItem) {
        this.dialogloading = true;
        this.$grade
          .getDetailById(this.choosedItem)
          .then(res => {
            this.dialogloading = false;
            if (res.data.code === 1000) {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
              this.$router.push({ name: "login", path: "/login" });
            }
            if (res.data.code === 0) {
              this.courseDetail = res.data.data[0];
              this.getTeacherImg();
              // this.dialogFormVisible = true;
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
            }
          })
          .catch(err => {
            this.dialogloading = false;
            this.$message({
              message: err.data.msg,
              type: "warning"
            });
          });
      }
    },
    confirm() {
      this.dialogFormVisible = false;
    },
    close() {
      this.courseDetail = {};
    },
    //评论课程
    commentCurse() {
      if (this.isJoinCourse === true) {
        if (isCommentCourse === true) {
          this.$message({
            message: "本课程您已经评论过了，不能再次评论",
            type: "warning"
          });
        } else {
          this.$message({
            message: "正在为您跳转到评论页",
            type: "success"
          });
          this.$router.push({
            path: "/comments",
            query: {
              detail: this.courseDetail
            }
          });
        }
      } else {
        this.$message({
          message: "本课程您尚未参加，无法评论",
          type: "error"
        });
      }
    },
    //查看全部评论
    allComments() {
      //console.log(this.courseDetail);
      this.$router.push({
        name: "allComments",
        path: "/allComments",
        query: {
          planCourseId: this.courseDetail.id
        }
      });
    },
    //是否参加课程
    isJoin(id) {
      this.$grade
        .isJoinCourse(id)
        .then(res => {
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.isJoinCourse = res.data.data[0];
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          //console.log(err);
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    },
    //是否评论课程
    isComment(id) {
      this.$grade
        .isJoinCourse(id)
        .then(res => {
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.isCommentCourse = res.data.data[0];
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          //console.log(err);
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    },
    //获取老师头像
    getTeacherImg() {
      this.dialogFormVisible = true;
      this.dialogloading = true;
      this.$grade
        .getPicture(this.courseDetail.teacherId)
        .then(res => {
          this.dialogloading = false;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.teacherImg = res.data.data;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          //console.log(err);
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    },
    //渲染页面
    getCourse() {
      // 对于 vue、react，可以在能够获取到真实dom节点的生命周期中进行实例化
      var timetableType = [
        [{ index: "1", name: "00:00" }, 1],
        [{ index: "2", name: "01:00" }, 1],
        [{ index: "3", name: "02:00" }, 1],
        [{ index: "4", name: "03:00" }, 1],
        [{ index: "5", name: "04:00" }, 1],
        [{ index: "6", name: "05:00" }, 1],
        [{ index: "7", name: "06:00" }, 1],
        [{ index: "8", name: "07:00" }, 1],
        [{ index: "9", name: "08:00" }, 1],
        [{ index: "10", name: "09:00" }, 1],
        [{ index: "11", name: "10:00" }, 1],
        [{ index: "12", name: "11:00" }, 1],
        [{ index: "13", name: "12:00" }, 1],
        [{ index: "14", name: "13:00" }, 1],
        [{ index: "15", name: "14:00" }, 1],
        [{ index: "16", name: "15:00" }, 1],
        [{ index: "17", name: "16:00" }, 1],
        [{ index: "18", name: "17:00" }, 1],
        [{ index: "19", name: "18:00" }, 1],
        [{ index: "20", name: "19:00" }, 1],
        [{ index: "21", name: "20:00" }, 1],
        [{ index: "22", name: "21:00" }, 1],
        [{ index: "23", name: "22:00" }, 1],
        [{ index: "24", name: "23:00" }, 1]
      ];
      var week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      var highlightWeek = new Date().getDay();
      var styles = {
        Gheight: 50,
        leftHandWidth: 50,
        palette: ["#ff6633", "#dddddd"]
      };
      // 实例化(初始化课表)
      this.Timetable = new Timetables({
        el: "#coursesTable",
        timetables: this.courselist,
        week: week,
        timetableType: timetableType,
        highlightWeek: highlightWeek,
        gridOnClick: e => {
          this.courseDetail = {};
          let weekDay = -1;
          if (e.week === "周日") {
            weekDay = 0;
          }
          if (e.week === "周一") {
            weekDay = 1;
          }
          if (e.week === "周二") {
            weekDay = 2;
          }
          if (e.week === "周三") {
            weekDay = 3;
          }
          if (e.week === "周四") {
            weekDay = 4;
          }
          if (e.week === "周五") {
            weekDay = 5;
          }
          if (e.week === "周六") {
            weekDay = 6;
          }
          // console.log(e);
          // console.log(e.name.indexOf(","));
          // console.log(this.courseIdList[weekDay][e.index]);
          if (e.name && e.name.indexOf(",") === -1) {
            this.dialogFormVisible = true;
            this.dialogloading = true;
            this.$grade
              .getDetailById(this.courseIdList[weekDay][e.index])
              .then(res => {
                this.dialogloading = false;
                if (res.data.code === 1000) {
                  this.$message({
                    message: res.data.msg,
                    type: "warning"
                  });
                  this.$router.push({ name: "login", path: "/login" });
                }
                if (res.data.code === 0) {
                  this.courseDetail = res.data.data[0];
                  this.isJoinCourse = false;
                  this.isCommentCourse = false;
                  this.isJoin(this.courseDetail.id);
                  this.isComment(this.courseDetail.id);
                  this.getTeacherImg();
                  // this.dialogFormVisible = true;
                } else {
                  this.$message({
                    message: res.data.msg,
                    type: "warning"
                  });
                }
              })
              .catch(err => {
                this.dialogloading = false;
                this.$message({
                  message: err.data.msg,
                  type: "warning"
                });
              });
          } else if (e.name && e.name.indexOf(",") !== -1) {
            this.courseChooseList = [];
            let arr = e.name.split(",");
            let arrId = this.courseIdList[weekDay][e.index].split(",");
            arr.map((item, index) => {
              let data = {
                key: arrId[index],
                value: item
              };
              this.courseChooseList.push(data);
            });
            this.choosedItem = "";
            this.diachoosed = true;
            // console.log(this.courseChooseList);
          }
        },
        styles: styles
      });
    },
    //获取课程详情
    getCourseDetail(weekDay, index) {},
    //获取课程表
    getCourseList() {
      this.$grade
        .getCourseList()
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.classList = res.data.data;
            this.classList.map(item => {
              let endHour = new Date(item.endTime).getHours();
              let duringTime = endHour - item.startHour;
              for (let i = item.startHour; i < endHour; i++) {
                if (this.courselist[item.startDayOfWeek - 1][i] === "") {
                  this.courselist[item.startDayOfWeek - 1][i] = item.name;
                  this.courseIdList[item.startDayOfWeek - 1][i] = item.id;
                } else {
                  this.courselist[item.startDayOfWeek - 1][i] =
                    this.courselist[item.startDayOfWeek - 1][i] +
                    " , " +
                    item.name;
                  this.courseIdList[item.startDayOfWeek - 1][i] =
                    this.courseIdList[item.startDayOfWeek - 1][i] +
                    "," +
                    item.id;
                }
              }
            });
            //渲染页面
            this.getCourse();
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
    },
    //获取当前时间是第几周
    getMonthWeek(a, b, c) {
      //  a = d = 当前日期
      // b = 6 - w = 当前周的还有几天过完(不算今天)
      // a + b 的和在除以7 就是当天是当前月份的第几周
      var date = new Date(a, parseInt(b) - 1, c),
        w = date.getDay(),
        d = date.getDate();
      if (w == 0) {
        w = 7;
      }
      var config = {
        getMonth: date.getMonth() + 1,
        getYear: date.getFullYear(),
        getWeek: Math.ceil((d + 6 - w) / 7)
      };
      return config;
    }
  },
  mounted() {
    this.getCourseList();
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    var getDate = this.getMonthWeek(year, month, day);

    this.date = year + "/" + month + "/" + day;
    this.msg =
      getDate.getMonth + " 月 " + " 第 " + getDate.getWeek + " 周 " + "  ";
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.msg {
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
}
#courseWrapper {
  border: 0 !important;
}
.type {
  margin-bottom: 10px;
}
.teacherPicture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 50px;
  box-shadow: 0 0 10px 30px #c6c6c6;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.choosedBtn {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>