<template>
  <div v-loading="loading">
    <el-tabs v-model="activeName" stretch="true" @tab-click="handleClick">
      <el-tab-pane label="课件" name="first">
        <div v-if="coursewareList.length>0">
          <div v-if="textList.length>0">
            <div class="words">文档</div>
            <div
              class="course"
              v-for="(item,index) in textList"
              :key="index"
              @click="checkcourse(item)"
            >
              <div class="courseware" slot="reference">
                <div>
                  <div v-if="item.fileSuffix == '.docx' || item.fileSuffix == '.doc'">
                    <img src="../../assets/icon/word.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.xls' || item.fileSuffix == '.xlsx'">
                    <img src="../../assets/icon/excel.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.ppt' || item.fileSuffix == '.pptx'">
                    <img src="../../assets/icon/ppt.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.mp4'">
                    <img src="../../assets/icon/movie.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.pdf'">
                    <img src="../../assets/icon/pdf.png" alt />
                  </div>
                  <div
                    v-else-if="item.fileSuffix == '.jpg'||item.fileSuffix == '.png'||item.fileSuffix == '.gif'||item.fileSuffix == '.tif'||item.fileSuffix == '.psd'||item.fileSuffix == '.dng'"
                  >
                    <img src="../../assets/icon/picture.png" alt />
                  </div>
                  <div v-else>
                    <img src="../../assets/icon/other.png" alt />
                  </div>
                </div>
                <div>
                  <div class="msg">
                    <div>课件名称: {{item.name}}</div>
                  </div>
                  <div style="font-size:14px">
                    <div>作者: {{item.author}}</div>
                  </div>
                  <div class="desc" style="font-size:14px">
                    <div>上传时间: {{item.uploadTime}}</div>
                  </div>
                  <div class="desc" style="font-size:14px">
                    <div>文件大小: {{item.fileSize}}KB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="pictureList.length>0">
            <div class="words">图片、视频、音频</div>
            <div
              class="course"
              v-for="(item,index) in pictureList"
              :key="index"
              @click="checkcourse(item)"
            >
              <div class="courseware" slot="reference">
                <div>
                  <div v-if="item.fileSuffix == '.docx' || item.fileSuffix == '.doc'">
                    <img src="../../assets/icon/word.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.xls' || item.fileSuffix == '.xlsx'">
                    <img src="../../assets/icon/excel.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.ppt' || item.fileSuffix == '.pptx'">
                    <img src="../../assets/icon/ppt.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.mp4'">
                    <img src="../../assets/icon/movie.png" alt />
                  </div>
                  <div v-else-if="item.fileSuffix == '.pdf'">
                    <img src="../../assets/icon/pdf.png" alt />
                  </div>
                  <div
                    v-else-if="item.fileSuffix == '.jpg'||item.fileSuffix == '.png'||item.fileSuffix == '.gif'||item.fileSuffix == '.tif'||item.fileSuffix == '.psd'||item.fileSuffix == '.dng'"
                  >
                    <img src="../../assets/icon/picture.png" alt />
                  </div>
                  <div v-else>
                    <img src="../../assets/icon/other.png" alt />
                  </div>
                </div>
                <div>
                  <div class="msg">
                    <div>课件名称: {{item.name}}</div>
                  </div>
                  <div style="font-size:14px">
                    <div>作者: {{item.author}}</div>
                  </div>
                  <div class="desc" style="font-size:14px">
                    <div>上传时间: {{item.uploadTime}}</div>
                  </div>
                  <div class="desc" style="font-size:14px">
                    <div>文件大小: {{item.fileSize}}KB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="else">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane label="练习题" name="second">
        <div v-if="practiseList.length>0">
          <div v-for="(item,index) in practiseList" :key="index">
            <div class="title">
              <div style="width:2%">
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
            <div class="answer">
              <!-- 单选 -->
              <div v-if="item.type===0">
                <radio :options="practiseList" :index="index" :answer="answerList" />
              </div>
              <!-- 多选 -->
              <div v-if="item.type===1">
                <checkbox :options="practiseList" :index="index" :answer="answerList" />
              </div>
              <!-- 填空 -->
              <div v-if="item.type===2">
                <fillBlanks :options="practiseList" :index="index" :answer="answerList" />
              </div>
              <!-- 判断 -->
              <div v-if="item.type===3">
                <judge :options="practiseList" :index="index" :answer="answerList" />
              </div>
              <!-- 名词解释 -->
              <div v-if="item.type===4">
                <nounExplanation :options="practiseList" :index="index" :answer="answerList" />
              </div>
              <!-- 问答 -->
              <div v-if="item.type===5">
                <explain :options="practiseList" :index="index" :answer="answerList" />
              </div>
            </div>
          </div>
          <div class="block">
            <el-button type="primary" round @click="submit">提交练习</el-button>
          </div>
        </div>
        <div v-else class="else">暂无数据</div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      width="90%"
      top="1vh"
      @close="close"
      @open="open"
      class="dialogVisible"
      title="课件在线预览"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :show-close="false"
      :modal-append-to-body="true"
    >
      <div>
        <div v-if="videoPlayer">
          <vueVideoPlayer :src="videoPlayer" :cover_url="openVideoImg" />
        </div>
        <div v-if="pdfUrl" style="height:74vh">
          <iframe class="filename" :src="pdfUrl" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div v-if="wordUrl" style="height:74vh">
          <iframe class="filename" :src="wordUrl" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div v-if="pictureUrl" style="height:74vh">
          <img :src="pictureUrl" alt />
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import radio from "../../components/pratise/radio";
import checkbox from "../../components/pratise/checkbox";
import fillBlanks from "../../components/pratise/fillBlanks";
import judge from "../../components/pratise/judge";
import nounExplanation from "../../components/pratise/nounExplanation";
import explain from "../../components/pratise/explain";
export default {
  data() {
    return {
      id: "",
      loading: true,
      activeName: "first",
      coursewareList: [],
      practiseList: [],
      videoPlayer: "",
      pdfUrl: "",
      wordUrl: "",
      pictureUrl: "",
      dialogVisible: false,
      beginTime: "",
      answerList: [],
      assignmentId: ""
    };
  },
  components: {
    radio,
    checkbox,
    fillBlanks,
    judge,
    nounExplanation,
    explain
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab.$options.propsData.label);
      // console.log(event);
      let value = tab.$options.propsData.label;
      if (value == "课件") {
        this.loading = true;
        this.getMissionType();
      } else if (value == "练习题") {
        this.loading = true;
        this.getAnswer();
        this.getQuestiones();
      }
    },
    //提交练习
    submit() {
      let data = {
        answerMap: this.$store.state.practiseList,
        assignmentId: Number(this.id)
      };
      console.log(data);
      this.$api
        .submitPratise(data)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.$message({
              message: "练习提交成功",
              type: "success"
            });
            this.$router.push({ name: "undoMission", path: "/undoMission" });
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
    //开启对话框
    open() {
      this.beginTime = "";
      this.endTime = "";
      this.beginTime = Date.parse(new Date());
    },
    //关闭对话框
    close() {
      this.endTime = Date.parse(new Date());
      let duringTime = (this.endTime - this.beginTime) / 60000;
      let data = {
        assignmentId: Number(this.id),
        minutes: Math.ceil(duringTime)
      };
      this.$api.submitTime(data);
      console.log(data);
    },
    handleSizeChange(val) {
      this.loading = true;
      this.data.page = 1;
      this.data.limit = val;
      this.getAllLearn();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.data.page = val;
      // console.log(this.offset, this.limit);
      this.getAllLearn();
    },
    //查看资料
    checkcourse(e) {
      this.wordUrl = "";
      this.pdfUrl = "";
      this.videoPlayer = "";
      this.pictureUrl = "";
      this.$api
        .geturl(e.id)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            if (
              e.fileSuffix === ".docx" ||
              e.fileSuffix === ".doc" ||
              e.fileSuffix === ".xls" ||
              e.fileSuffix === ".xlsx" ||
              e.fileSuffix === ".ppt" ||
              e.fileSuffix === ".pptx"
            ) {
              this.wordUrl =
                "https://view.officeapps.live.com/op/view.aspx?src=" +
                encodeURIComponent(res.data.data[0]);
              this.dialogVisible = true;
              console.log(this.wordUrl);
            } else if (e.fileSuffix === ".mp4") {
              this.videoPlayer = res.data.data[0];
              this.dialogVisible = true;
            } else if (e.fileSuffix === ".pdf") {
              this.pdfUrl = res.data.data[0];
              this.dialogVisible = true;
            } else if (
              e.fileSuffix == ".jpg" ||
              e.fileSuffix == ".png" ||
              e.fileSuffix == ".gif" ||
              e.fileSuffix == ".tif" ||
              e.fileSuffix == ".psd" ||
              e.fileSuffix == ".dng"
            ) {
              this.pictureUrl = res.data.data[0];
              this.dialogVisible = true;
            } else {
              // window.open(res.data.data[0]);
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          console.log(err);
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
      clock += year + "/";
      if (month < 10) clock += "0";
      clock += month + "/";
      if (day < 10) clock += "0";
      clock += day + " ";
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
    getMissionType() {
      this.$api
        .getCourseware(this.id)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.coursewareList = res.data.data;
            this.textList = [];
            this.pictureList = [];
            this.coursewareList.map(item => {
              item.uploadTime = this.timeFormat(item.uploadTime);
              item.fileSize = this.twoNumber(item.fileSize / 1024);
              if (
                item.fileSuffix === ".jpg" ||
                item.fileSuffix === ".png" ||
                item.fileSuffix === ".jpeg" ||
                item.fileSuffix === ".bmp" ||
                item.fileSuffix === ".gif" ||
                item.fileSuffix === ".wmv" ||
                item.fileSuffix === ".avi" ||
                item.fileSuffix === ".rm" ||
                item.fileSuffix === ".flv" ||
                item.fileSuffix === ".mp4" ||
                item.fileSuffix === ".wma" ||
                item.fileSuffix === ".mp3"
              ) {
                this.pictureList.push(item);
              } else {
                this.textList.push(item);
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
          this.loading = false;
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    },
    getQuestiones() {
      this.$api
        .getQuestion(this.id)
        .then(res => {
          this.loading = false;
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
          this.loading = false;
          this.$message({
            message: "获取失败",
            type: "warning"
          });
        });
    },
    getAnswer() {
      this.$api
        .getAnswer(this.id)
        .then(res => {
          this.dialogLoading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.answerList = res.data.data;
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
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.getMissionType();
    this.$store.state.practiseList = {};
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
  padding: 30px;
  text-align: center;
}
.course {
  display: inline-block;
  width: 33%;
  :hover {
    cursor: pointer;
    color: #cc4820;
    img {
      transform: scale(1.1);
    }
  }
}
.courseware {
  padding: 10px 0 0 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 90px;
    height: 90px;
    margin-right: 10px;
  }
}
.msg {
  display: flex;
  align-items: center;
  color: blue;
}
.block {
  margin: 20px auto;
  text-align: center;
}
.el-dialog {
  position: absolute;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 90%;
}
.dialog-footer {
  text-align: center;
  margin-top: 10px;
}
.words {
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;
}
.title {
  display: flex;
  //   align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.name {
  width: 100px !important;
}
.public {
  // width: 7%;
  width: 60px;
}
span {
  color: blue;
}
</style>