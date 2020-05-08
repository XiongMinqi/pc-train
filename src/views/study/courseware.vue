<template>
  <div>
    <div class="choose">
      <div class="subject">
        <el-select disabled v-model="subjectname" placeholder="请选择专业">
          <el-option v-for="item in subjectList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="classname">
        <el-select v-model="classname" placeholder="请选择科目">
          <el-option key value="全部"></el-option>
          <el-option v-for="item in classList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button type="primary" @click="chooseClass">开始筛选</el-button>
      </div>
    </div>
    <div v-if="allList.length>0">
      <div class="course" v-for="(item,index) in allList" :key="index" @click="checkcourse(item)">
        <el-popover
          placement="top-end"
          :title="item.name"
          width="200"
          trigger="hover"
          :content="item.description"
        >
          <div class="courseware" slot="reference">
            <div>
              <div v-if="item.fileSuffix == '.docx' || item.fileSuffix == '.doc'">
                <img src="../../assets/icon/word.png" alt />
              </div>
              <div v-if="item.fileSuffix == '.xls' || item.fileSuffix == '.xlsx'">
                <img src="../../assets/icon/excel.png" alt />
              </div>
              <div v-if="item.fileSuffix == '.mp4'">
                <img src="../../assets/icon/movie.png" alt />
              </div>
              <div v-if="item.fileSuffix == '.pdf'">
                <img src="../../assets/icon/pdf.png" alt />
              </div>
              <div
                v-if="item.fileSuffix == '.jpg'||item.fileSuffix == '.png'||item.fileSuffix == '.gif'||item.fileSuffix == '.tif'||item.fileSuffix == '.psd'||item.fileSuffix == '.dng'"
              >
                <img src="../../assets/icon/picture.png" alt />
              </div>
              <div v-if="item.fileSuffix == null">
                <img src="../../assets/icon/other.png" alt />
              </div>
            </div>
            <div>
              <div class="msg">
                <div>课件名称: {{item.name}}</div>
              </div>
              <div>
                <div>作者: {{item.author}}</div>
              </div>
              <div class="desc">
                <div>上传时间: {{item.uploadTime}}</div>
              </div>
              <div class="desc">
                <div>文件大小: {{item.fileSize}}KB</div>
              </div>
            </div>
          </div>
        </el-popover>
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
    <div v-else>暂无数据</div>
    <el-dialog
      @close="close"
      @open="open"
      class="dialogVisible"
      title="课件在线预览"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :show-close="false"
      :modal-append-to-body="true"
    >
      <div v-if="videoPlayer">
        <vueVideoPlayer :src="videoPlayer" :cover_url="openVideoImg" />
      </div>
      <div v-if="pdfUrl">
        <iframe class="filename" :src="pdfUrl" width="100%" height="400px" frameborder="0"></iframe>
      </div>
      <div v-if="wordUrl">
        <iframe class="filename" :src="wordUrl" width="100%" height="400px" frameborder="0"></iframe>
      </div>
      <div v-if="pictureUrl">
        <img :src="pictureUrl" alt />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import vueVideoPlayer from "../../components/video";
export default {
  data() {
    return {
      videoPlayer: "",
      currentPage: 1,
      total: 0,
      pdfUrl: "",
      wordUrl: "",
      pictureUrl: "",
      dialogVisible: false,
      openVideoImg: "",
      subjectname: "",
      coursewareId: "",
      peopleId: "",
      classname: "",
      beginTime: "",
      endTime: "",
      classList: [],
      subjectList: [],
      data: {
        object: {
          subjectId: ""
        },
        limit: 9,
        page: 1
      },
      allList: [],
      visible: false
    };
  },
  components: { vueVideoPlayer },
  methods: {
    handleSizeChange(val) {
      this.data.page = 1;
      this.data.limit = val;
      this.getAllLearn();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
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
      this.endTime = Date.parse(new Date());
      // console.log(this.endTime);
      let duringTime = Math.round((this.endTime - this.beginTime) / 60000);
      // console.log(duringTime, "差时/分钟");
      if (duringTime >= 1) {
        let data = {
          coursewareId: this.coursewareId,
          peopleId: this.peopleId,
          minutes: duringTime
        };
        // console.log(data);
        this.$api
          .saveMyLog(data)
          .then()
          .catch();
      }
    },
    //选择科目
    chooseClass() {
      // console.log(this.classname);
      if (this.classname == "全部") {
        this.data.object.subjectId = "";
      } else {
        this.classList.map(item => {
          if (item.value == this.classname) {
            this.data.object.subjectId = item.key;
          }
        });
      }

      this.getAllLearn();
    },
    //查看资料
    checkcourse(e) {
      // console.log(e);
      this.coursewareId = e.id;
      this.wordUrl = "";
      this.pdfUrl = "";
      this.videoPlayer = "";
      this.pictureUrl = "";
      // console.log(e);
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
              e.fileSuffix === ".xlsx"
            ) {
              this.wordUrl =
                "https://view.officeapps.live.com/op/view.aspx?src=" +
                encodeURIComponent(res.data.data[0]);
              this.dialogVisible = true;
              // console.log(this.wordUrl);
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
            console.log(res);
            this.$message({
              message: res.data.msg,
              type: "error"
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
    getdict() {
      this.$grade
        .getdict()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          //   console.log(res);
          if (res.data.code === 0) {
            this.classList = res.data.data[0]["科目名称"];
            this.subjectList = res.data.data[0]["专业名称"];
            // console.log(this.subjectList, "专业");
            // console.log(this.classList, "科目");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getAllLearn() {
      this.$api
        .getLearn(this.data)
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.allList = res.data.data;
            this.total = res.data.count;
            this.allList.map(item => {
              item.uploadTime = this.timeFormat(item.uploadTime);
              item.fileSize = this.twoNumber(item.fileSize / 1024);
            });
            // console.log(this.allList);
          }
        })
        .catch();
    }
  },
  mounted() {
    this.getdict();
    this.getAllLearn();
    let userinfo = JSON.parse(localStorage.getItem("userInfo"));
    this.peopleId = userinfo.userId;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.choose {
  display: flex;
  align-items: center;
  padding: 20px 20px;
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
.btn {
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
  margin: 0 auto;
  text-align: center;
}
</style>