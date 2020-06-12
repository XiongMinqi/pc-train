<template>
  <div v-loading="loading">
    <div class="choose">
      <div class="subject">
        <el-select v-model="question" placeholder="请选择问题类型">
          <el-option value="不限"></el-option>
          <el-option v-for="item in questionType" :key="item.key" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="btn">
        <el-button type="primary" @click="chooseClass">开始筛选</el-button>
      </div>
    </div>
    <div v-if="errorList.length>0">
      <div v-for="(item,index) in errorList" :key="index">
        <div class="mistake">
          <div style="display: flex; align-items: center">
            <div class="userImg">
              <img src="../../assets/icon/mistake.png" alt />
            </div>
            <div style="margin-left:20px">
              <div class="name">
                <div class="questiontype" v-for="(itm,idx) in questionType" :key="idx">
                  <div v-if="item.type == itm.key" style="padding-bottom:5px;">
                    <span style="font-weight:bold;color:blue;">【{{itm.value}}】</span>
                    <span style="color:red">做错次数 ：{{item.wrongCount}}次</span>
                  </div>
                </div>
              </div>
              <div class="questioncontent">{{item.content}}</div>
              <div style="font-size:12px;color:#a5a5a5;padding-left:6px">
                <span style="color:rgb(204, 51, 82)">
                  困难程度:
                  <span>
                    <span v-if="item.level===0">简单</span>
                    <span v-if="item.level===1">普通</span>
                    <span v-if="item.level===2">困难</span>
                  </span>
                </span>
                |
                <span style="color:purple">所属专业 : {{item.majorname}}</span> |
                <span style="color:#EE6911">所属部门 : {{item.departname}}</span> |
                <span style="color:green">分数 ：{{item.defaultScore}}分</span>
                |
              </div>
            </div>
          </div>
          <div>
            <el-button type="primary" round @click="checkDetail(item)">错题重做</el-button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="else">暂无数据</div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <el-dialog title="错题详情" :visible.sync="dialogFormVisible" @close="close">
      <!-- <div> -->
        <div v-loading="dialogloading">
          <div class="detail">
            <div class="questiontype" v-for="(itm,idx) in questionType" :key="idx">
              <span v-if="questionDetail.type == itm.key">【{{itm.value}}】</span>
            </div>
            <div class="content">{{questionDetail.content}}</div>
          </div>
          <!-- 选项 -->
          <div>
            <!-- 单选 -->
            <div v-if="questionDetail.type==0">
              <div v-for="(item,index) in questionDetail.options" :key="index">
                <el-radio-group v-model="radio">
                  <el-radio :label="item.order">
                    <span v-if="item.order === 0">A、</span>
                    <span v-if="item.order === 1">B、</span>
                    <span v-if="item.order === 2">C、</span>
                    <span v-if="item.order === 3">D、</span>
                    {{item.content}}
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
            <!-- 判断 -->
            <div v-if="questionDetail.type==3">
              <el-radio-group v-model="radio">
                <div style="padding:0 0 10px 0">
                  <el-radio label="judge1">正确</el-radio>
                </div>
                <div>
                  <el-radio label="judge2">错误</el-radio>
                </div>
              </el-radio-group>
            </div>
            <!-- 多选 -->
            <div v-if="questionDetail.type==1">
              <div v-for="(item,index) in questionDetail.options" :key="index">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox :label="item.content">
                    <span v-if="item.order === 0">A、</span>
                    <span v-if="item.order === 1">B、</span>
                    <span v-if="item.order === 2">C、</span>
                    <span v-if="item.order === 3">D、</span>
                    <span v-if="item.order === 4">E、</span>
                    <span v-if="item.order === 5">F、</span>
                    {{item.content}}
                  </el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div v-if="questionDetail.type==2||questionDetail.type==4||questionDetail.type==5">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
            </div>
          </div>
          <div v-if="disappear" style="display:flex;align-items: center;padding-top:20px">
            <div>正确答案 :</div>
            <div v-if="questionDetail.type==1" style="padding-left:10px;color:green">
              <span v-for="(item,index) in questionDetail.answers" :key="index">
                <span>{{item.content}}</span>
              </span>
            </div>
            <div v-else style="padding-left:10px;color:green">{{questionDetail.answers[0].content}}</div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      <!-- </div> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionType: [],
      errorList: [], //错题
      question: "不限", //问题类型
      status: null,
      page: 1,
      limit: 5,
      disappear: false,
      total: 0,
      currentPage: 1,
      questionDetail: {}, //题目详情
      dialogFormVisible: false,
      closeDialog: false,
      formLabelWidth: "120px",
      radio: "",
      checkList: [],
      textarea: "",
      judge1: "",
      judge2: "",
      department: [],
      major: [],
      loading: true,
      dialogloading: false
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      this.loading = true;
      this.page = 1;
      this.limit = val;
      this.getErrorList();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.loading = true;
      // console.log(`当前页: ${val}`);
      this.page = val;
      // console.log(this.offset, this.limit);
      this.getErrorList();
    },
    close() {
      this.disappear = false;
      this.textarea = "";
      this.radio = "";
      this.judge1 = "";
      this.judge2 = "";
      this.checkList = [];
      this.closeDialog = false;
    },
    //确定按钮
    submit() {
      if (
        this.textarea != "" ||
        this.radio != "" ||
        this.checkList.length > 0 ||
        this.judge1 != "" ||
        this.judge2 != ""
      ) {
        if (this.closeDialog === false) {
          this.disappear = true;
          this.closeDialog = true;
        } else {
          this.dialogFormVisible = false;
        }
      } else {
        this.dialogFormVisible = false;
      }
    },
    //查看错题具体详情
    checkDetail(e) {
      // console.log(e);
      this.dialogFormVisible = true;
      this.dialogloading = true;
      this.$grade
        .getErrorDetail(e.id)
        .then(res => {
          this.dialogloading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.questionDetail = res.data.data[0];
            // console.log(this.questionDetail);
          } else {
            this.$message({
              message: res.data.msg,
              typr: "warning"
            });
          }
        })
        .catch(err => {
          this.dialogloading = false;
        });
    },
    //获取全部题目类型
    getQuestionType() {
      this.$grade
        .getdict()
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.questionType = res.data.data[0]["题目类型"];
            this.major = res.data.data[0]["专业名称"];
            this.department = res.data.data[0]["部门名称"];
            this.getErrorList();
            // console.log(this.department);
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
    //选择题目类型
    chooseClass() {
      this.loading = true;
      this.currentPage = 1;
      this.page = 1;
      // console.log(this.question);
      if (this.question === "不限") {
        this.status = null;
      }
      this.questionType.map(item => {
        if (item.value === this.question) {
          this.status = item.key;
        }
      });
      // console.log(this.status);
      this.getErrorList();
    },
    //获取错题
    getErrorList() {
      this.$grade
        .getMistake(this.page, this.limit, this.status)
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.errorList = res.data.data;
            this.total = res.data.count;
            this.errorList.map(item => {
              this.major.map(itm => {
                if (item.majorId == itm.key) {
                  this.$set(item, "majorname", itm.value);
                }
              });
              this.department.map(itm => {
                if (item.departmentId == itm.key) {
                  this.$set(item, "departname", itm.value);
                }
              });
            });
            // console.log(this.errorList);
          } else {
            this.$message({
              message: res.data.msg,
              typr: "warning"
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
    this.getQuestionType();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.choose {
  display: flex;
  align-items: center;
  padding: 0 0 10px 20px;
}
.subject {
  margin-right: 20px;
}
.block {
  margin: 0 auto;
  text-align: center;
}
.detail {
  // width: 100%;
  // display: flex;
  // align-items: center;
  padding-bottom: 20px;
  padding-left: 20px;
  span {
    color: blue;
  }
}
.allList {
  // width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 20px;
  span {
    color: blue;
  }
}
.allList:hover {
  span {
    color: green;
  }
  cursor: pointer;
  color: green;
}
.questioncontent {
  width: 800px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
  padding-left: 6px;
}
.el-radio-group {
  padding: 0 0 15px 25px;
}
.userImg {
  width: 70px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mistake {
  display: flex;
  align-items: center;
  // text-align: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px 10px;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
}
.else {
  text-align: center;
  padding: 20px 0;
  font-size: 17px;
  color: red;
}
</style>