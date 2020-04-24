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
          <el-option v-for="item in classList" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button type="primary">开始筛选</el-button>
      </div>
    </div>
    <div>
      <div class="course" v-for="(item,index) in allList" :key="index">
        <el-popover
          placement="top-end"
          :title="item.name"
          width="200"
          trigger="hover"
          :content="item.description"
        >
          <!-- <el-button slot="reference">hover 激活</el-button> -->
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjectname: "",
      classname: "",
      classList: [],
      subjectList: [],
      data: {},
      allList: [],
      visible: false
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
      // if (hh < 10) clock += "0";
      // clock += hh + ":";
      // if (mm < 10) clock += "0";
      // clock += mm + ":";
      // if (ss < 10) clock += "0";
      // clock += ss;
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
          //   console.log(res);
          if (res.data.code === 0) {
            this.classList = res.data.data[0]["科目名称"];
            this.subjectList = res.data.data[0]["专业名称"];
            console.log(this.subjectList, "专业");
            console.log(this.classList, "科目");
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
          this.allList = res.data.data;
          this.allList.map(item => {
            item.uploadTime = this.timeFormat(item.uploadTime);
            item.fileSize = this.twoNumber(item.fileSize / 1024);
          });
          console.log(this.allList);
        })
        .catch();
    }
  },
  mounted() {
    this.getdict();
    this.getAllLearn();
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
.desc {
  // padding-left: 90px;
}
</style>