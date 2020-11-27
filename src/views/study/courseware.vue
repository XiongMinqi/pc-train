<template>
  <div v-loading="loading">
    <div class="choose">
      <!-- <div class="subject">
        <el-select disabled v-model="subjectname" placeholder="请选择专业">
          <el-option v-for="item in subjectList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>-->
      <div class="classname">
        <el-select v-model="classname" placeholder="请选择科目">
          <el-option key value="不限"></el-option>
          <el-option v-for="item in classList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="classname">
        <el-select v-model="typename" placeholder="请选择文档类型">
          <el-option v-for="item in typeList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="classname">
        <el-input v-model="courseName" placeholder="请输入课件名"></el-input>
      </div>
      <div class="btn">
        <el-button type="primary" @click="chooseClass">开始筛选</el-button>
      </div>
    </div>
    <div v-if="showCourse">
      <div v-if="allList.length>0">
        <div v-if="textList.length>0">
          <el-divider>文档</el-divider>
          <!-- <div class="words">文档</div> -->
          <div
            class="course"
            v-for="(item,index) in textList"
            :key="index"
            @click="checkcourse(item)"
          >
            <div class="courseware" slot="reference">
              <div>
                <div v-if="item.fileSuffix == '.docx' || item.fileSuffix == '.doc'">
                  <img src="../../assets/img/word.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.xls' || item.fileSuffix == '.xlsx'">
                  <img src="../../assets/img/excel.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.ppt' || item.fileSuffix == '.pptx'">
                  <img src="../../assets/img/ppt.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.mp4'">
                  <img src="../../assets/img/movie.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.pdf'">
                  <img src="../../assets/img/pdf.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.txt'">
                  <img src="../../assets/img/txt.png" alt />
                </div>
                <div
                  v-else-if="item.fileSuffix == '.jpg'||item.fileSuffix == '.png'||item.fileSuffix == '.gif'||item.fileSuffix == '.tif'||item.fileSuffix == '.psd'||item.fileSuffix == '.dng'"
                >
                  <img src="../../assets/img/picture.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.wma'||item.fileSuffix == '.mp3'">
                  <img src="../../assets/img/audio.png" alt />
                </div>
                <div v-else>
                  <img src="../../assets/img/other.png" alt />
                </div>
              </div>
              <div>
                <div class="msg">
                  <div>课件名称: {{item.name}}</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>作者: {{item.author}}</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>上传时间: {{item.uploadTime}}</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>文件大小: {{item.fileSize}}KB</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>
                    {{item.majorName}}/{{item.subjectName}}/浏览
                    <span
                      style="padding:0 4px;"
                    >{{item.readCount}}</span>次
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pictureList.length>0">
          <el-divider>图片、视频、音频</el-divider>
          <!-- <div class="words">图片、视频、音频</div> -->
          <div
            class="course"
            v-for="(item,index) in pictureList"
            :key="index"
            @click="checkcourse(item)"
          >
            <div class="courseware" slot="reference">
              <div>
                <!-- <div v-if="item.coverUrl">
                  <img :src="item.coverUrl" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.docx' || item.fileSuffix == '.doc'">
                  <img src="../../assets/img/word.png" alt />
                </div> -->
                <div v-if="item.fileSuffix == '.docx' || item.fileSuffix == '.doc'">
                  <img src="../../assets/img/word.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.xls' || item.fileSuffix == '.xlsx'">
                  <img src="../../assets/img/excel.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.ppt' || item.fileSuffix == '.pptx'">
                  <img src="../../assets/img/ppt.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.mp4'">
                  <img src="../../assets/img/movie.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.pdf'">
                  <img src="../../assets/img/pdf.png" alt />
                </div>
                <div
                  v-else-if="item.fileSuffix == '.jpg'||item.fileSuffix == '.png'||item.fileSuffix == '.gif'||item.fileSuffix == '.tif'||item.fileSuffix == '.psd'||item.fileSuffix == '.dng'"
                >
                  <img src="../../assets/img/picture.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.wma'||item.fileSuffix == '.mp3'">
                  <img src="../../assets/img/audio.png" alt />
                </div>
                <div v-else-if="item.fileSuffix == '.txt'">
                  <img src="../../assets/img/txt.png" alt />
                </div>
                <div v-else>
                  <img src="../../assets/img/other.png" alt />
                </div>
              </div>
              <div>
                <div class="msg">
                  <div>课件名称: {{item.name}}</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>作者: {{item.author}}</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>上传时间: {{item.uploadTime}}</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>文件大小: {{item.fileSize}}KB</div>
                </div>
                <div class="desc" style="font-size:12px">
                  <div>
                    {{item.majorName}}/{{item.subjectName}}/浏览
                    <span
                      style="padding:0 4px;"
                    >{{item.readCount}}</span>次
                  </div>
                </div>
              </div>
            </div>
            <!-- </el-popover> -->
          </div>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[9,6,12,15,18]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>
      <div v-else class="else"></div>
    </div>

    <el-dialog
      width="90%"
      top="1vh"
      @close="close"
      @open="open"
      class="dialogVisible"
      :title="courseTitle"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :show-close="false"
      :modal-append-to-body="true"
    >
      <div>
        <div v-if="videoPlayer" class="vueVideoPlayer">
          <vueVideoPlayer :src="videoPlayer" :cover_url="openVideoImg" />
        </div>
        <div v-if="pdfUrl" style="height:70vh">
          <iframe class="filename" :src="pdfUrl" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div v-if="txtUrl" style="height:70vh">
          <iframe class="filename" :src="txtUrl" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div v-if="wordUrl" style="height:70vh">
          <iframe class="filename" :src="wordUrl" width="100%" height="100%" frameborder="0"></iframe>
        </div>
        <div v-if="audioUrl.length>0" style="height:60vh">
          <AudioPlayer
            :audio-list="audioUrl"
            :show-prev-button="false"
            :show-next-button="false"
            :isLoop="false"
            :progressInterval="10"
          />
        </div>
        <div v-if="pictureUrl" style="height:70vh">
          <img class="courseimg" :src="pictureUrl" alt />
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vueVideoPlayer from "../../components/video";
import "video.js/dist/video-js.css";
import { AudioPlayer } from "@liripeng/vue-audio-player";
import "@liripeng/vue-audio-player/lib/vue-audio-player.css";
export default {
  data() {
    return {
      showCourse: false,
      videoPlayer: "",
      currentPage: 1,
      total: 0,
      pdfUrl: "",
      audioUrl: [],
      txtUrl:'',
      wordUrl: "",
      courseTitle: "",
      pictureUrl: "",
      dialogVisible: false,
      // openVideoImg: "../../assets/img/maliao.png",
      subjectname: "",
      coursewareId: "",
      peopleId: "",
      classname: "不限",
      beginTime: "",
      courseName: "",
      endTime: "",
      classList: [],
      typeList: [
        {
          key: null,
          value: "不限",
        },
        {
          key: 1,
          value: "文档",
        },
        {
          key: 2,
          value: "图片",
        },
        {
          key: 3,
          value: "视频",
        },
        {
          key: 4,
          value: "音频",
        },
      ],
      typename: "不限",
      subjectList: [],
      data: {
        object: {
          subjectId: null,
          type: null,
          name: null,
          majorId: null,
          authorDepartment: null,
          author: null,
        },
        limit: 9,
        page: 1,
      },
      allList: [],
      visible: false,
      textList: [],
      pictureList: [],
      loading: true,
    };
  },
  components: { vueVideoPlayer, AudioPlayer },
  methods: {
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
    //开启对话框
    open() {
      // console.log("开始计时");
      this.beginTime = "";
      this.endTime = "";
      this.beginTime = Date.parse(new Date());
      // console.log(this.beginTime);
    },
    //关闭对话框
    close() {
      // console.log("结束计时");
      this.courseTitle = "";
      this.wordUrl = "";
      this.pdfUrl = "";
      this.videoPlayer = "";
      this.pictureUrl = "";
      this.audioUrl = [];
      this.endTime = Date.parse(new Date());
      // console.log(this.endTime);
      let duringTime = Math.round((this.endTime - this.beginTime) / 60000);
      // console.log(duringTime, "差时/分钟");
      if (duringTime >= 1) {
        let data = {
          coursewareId: this.coursewareId,
          minutes: duringTime,
        };
        // console.log(data);
        this.$api.saveMyLog(data).then().catch();
      }
    },
    //选择科目
    chooseClass() {
      // console.log(this.classname);
      this.data.page = 1;
      if (this.classname == "不限") {
        this.data.object.subjectId = "";
      } else {
        this.classList.map((item) => {
          if (item.value == this.classname) {
            this.data.object.subjectId = item.key;
          }
        });
      }
      this.typeList.map((item) => {
        if (item.value == this.typename) {
          this.data.object.type = item.key;
        }
      });
      if (this.courseName !== "") {
        this.data.object.name = this.courseName;
      } else if (this.courseName === "") {
        this.data.object.name = null;
      }
      this.getAllLearn();
    },
    //查看资料
    checkcourse(e) {
      // console.log(e);
      this.courseTitle = e.name;
      this.coursewareId = e.id;
      this.wordUrl = "";
      this.pdfUrl = "";
      this.videoPlayer = "";
      this.pictureUrl = "";
      this.audioUrl = [];
      this.$api
        .geturl(e.id)
        .then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            if(res.data.data[0]){
              if (
                  e.fileSuffix === ".docx" ||
                  e.fileSuffix === ".doc" ||
                  e.fileSuffix === ".xls" ||
                  e.fileSuffix === ".xlsx" ||
                  e.fileSuffix === ".ppt" ||
                  e.fileSuffix === ".pptx"
              ) {
                this.wordUrl =
                    // "http://192.168.0.45:8012/onlinePreview?url=" +
                    // encodeURIComponent(res.data.data[0]);
                    "https://view.officeapps.live.com/op/view.aspx?src=" +
                    encodeURIComponent(res.data.data[0]);
                this.dialogVisible = true;
                //console.log(this.wordUrl);
              } else if (e.fileSuffix === ".mp4") {
                if (e.coverUrl) {
                  this.openVideoImg = e.coverUrl;
                } else {
                  this.openVideoImg = "";
                }
                this.videoPlayer = res.data.data[0];
                this.dialogVisible = true;
              } else if (e.fileSuffix === ".pdf") {
                this.pdfUrl = res.data.data[0];
                this.dialogVisible = true;
              } else if (e.fileSuffix === ".mp3") {
                this.audioUrl.push(res.data.data[0]);
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
              } else if (
                  e.fileSuffix == ".txt" ) {
                this.txtUrl = res.data.data[0];
                this.dialogVisible = true;
              } else {
                // window.open(res.data.data[0]);
              }
            }else{
              this.$message({
                message: "获取课件失败，请联系管理员",
                type: "warning",
              });
            }
            // console.log(res);

          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          //console.log(err);
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
    getdict() {
      this.$grade
        .getdict()
        .then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          //console.log(res);
          if (res.data.code === 0) {
            this.classList = res.data.data[0]["科目名称"];
            this.subjectList = res.data.data[0]["专业名称"];
            //console.log(this.subjectList, "专业");
            //console.log(this.classList, "科目");
            this.getAllLearn();
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          //console.log(err);
        });
    },
    getAllLearn() {
      this.$api
        .getLearn(this.data)
        .then((res) => {
          this.loading = false;
          this.showCourse = true;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.allList = res.data.data;
            this.total = res.data.count;
            this.textList = [];
            this.pictureList = [];
            this.allList.map((item) => {
              item.uploadTime = this.timeFormat(item.uploadTime);
              item.fileSize = this.twoNumber(item.fileSize / 1024);
              this.subjectList.map((itm) => {
                if (item.majorId === Number(itm.key)) {
                  this.$set(item, "majorName", itm.value);
                }
              });
              this.classList.map((itm) => {
                if (item.subjectId === Number(itm.key)) {
                  this.$set(item, "subjectName", itm.value);
                }
              });
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
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          this.showCourse = true;
        });
    },
  },
  mounted() {
    this.getdict();
    let userinfo = JSON.parse(localStorage.getItem("userInfo"));
    this.peopleId = userinfo.userId;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
/deep/.el-divider--horizontal {
  margin: 14px 0 25px 0;
}
.choose {
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 0;
}
.choosesymbol {
  margin-right: 20px;
}
.subject {
  margin-right: 20px;
}
.classname {
  margin-right: 20px;
}
.course {
  display: inline-block;
  width: 32%;
  margin-right: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border: 1px solid #e2e2e2;
  box-shadow: 1px 1px 3px #c2c2c2;
  &:hover {
    box-shadow: 0 0 15px #a2a2a2;
    cursor: pointer;
    // color: #cc4820;
    // background-color: #f2f2f2;
    img {
      transform: scale(1.1);
    }
  }
}
.courseware {
  padding: 10px 0 0 20px;
  display: flex;
  align-items: center;
  // margin-bottom: 20px;
  img {
    width: 90px;
    height: 90px;
    margin-right: 10px;
    margin-top: 5px;
  }
}
.msg {
  display: flex;
  align-items: center;
  color: #303133;
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
  border-bottom: 1px dashed #c2c2c2;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.desc {
  color: #606266;
  span {
    color: #409eff;
  }
}
.courseimg{
  max-width: 100%;
  max-height: 100%;
}
</style>