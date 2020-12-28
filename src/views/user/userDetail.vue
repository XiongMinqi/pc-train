<template>
  <div v-loading="loading">
    <div class="backLastPage" @click="backLastPage">
      <i class="el-icon-arrow-left"></i>返回
    </div>
    <div class="userWords">个人信息</div>
    <div class="border">
      <div class="form">
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">姓名</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">{{userInfo.nickName}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">用户名</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">{{userInfo.username}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">性别</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <span v-if="userInfo.sex===0">男</span>
              <span v-if="userInfo.sex===1">女</span>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">工号</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">{{userInfo.jobNumber}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">联系方式</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">{{userInfo.phoneNumber}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">身份证号</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">{{userInfo.idCardNumber}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple">专业</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <span v-if="majorName">{{majorName}}</span>
              <span v-else>无</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">部门</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <span v-if="departmentName">{{departmentName}}</span>
              <span v-else>无</span>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">邮箱</div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">{{userInfo.email}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <div class="grid-content bg-purple avctarImg">头像</div>
          </el-col>
          <el-col :span="21">
            <div class="grid-content bg-purple-light avctarImg">
              <img class="userImg" v-if="imgUrl" :src="imgUrl" alt />
              <img class="userImg" v-else src="../../assets/icon/userImg.jpg" alt />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary" round @click="change">修改资料</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      majorName: "",
      departmentName: "",
      imgUrl: "",
      loading: true,
    };
  },
  components: {},
  methods: {
    backLastPage() {
      this.$router.go(-1);
    },
    //获取个人信息
    getUserList() {
      this.$api
        .getUser()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.userInfo = res.data.data[0];
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          // console.log(err);
        });
    },
    //获取专业和部门名称
    getSubjectDetail() {
      this.getUserList();
      this.$api
        .getSubject()
        .then((res) => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.major = res.data.data[0]["专业名称"];
            // console.log(this.userInfo.majorId,"majorId");
            this.major.map((item) => {
              if (this.userInfo.majorId == item.key) {
                this.majorName = item.value;
              }
            });
            this.department = res.data.data[0]["部门名称"];
            this.department.map((item) => {
              if (item.key == this.userInfo.departmentId) {
                this.departmentName = item.value;
              }
            });
            // console.log(this.major);
            // console.log(this.department);
            // console.log(this.majorName);
            // console.log(this.departmentName);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.loading = false;
          // console.log(err);
        });
    },
    change() {
      this.$router.push({ name: "user", path: "/user" });
    },
  },
  mounted() {
    this.getSubjectDetail();
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.imgUrl = userInfo.avatarUrl;
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.userWords {
  font-size: 20px;
  margin-bottom: 10px;
}
.border {
  border: 1px solid rgb(240, 240, 240);
}
.border-right {
  border-right: 1px solid rgb(240, 240, 240);
}
.border-bottom {
  border-bottom: 1px solid rgb(240, 240, 240);
}
.form {
  border-bottom: 1px solid rgb(240, 240, 240);
  border-right: 1px solid rgb(240, 240, 240);
  font-size: 13px;
  // text-align: center;
}
.el-row {
  // margin-bottom: 20px;
  border-top: 1px solid rgb(240, 240, 240);
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  //   border-radius: 4px;
  border-left: 1px solid rgb(240, 240, 240);
}
.bg-purple {
  background: rgb(250, 250, 250);
  color: rgb(37, 37, 37);
  padding-left: 30px;
  line-height: 50px;
  height: 50px;
}
.bg-purple-light {
  color: rgb(89, 89, 89);
  padding-left: 30px;
  line-height: 50px;
  height: 50px;
}
.grid-content {
  //   border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  //   background-color: #f9fafc;
}
.avctarImg {
  height: 250px;
  line-height: 250px;
}
.userImg {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 25px;
}
.btn {
  text-align: center;
  margin-top: 50px;
}
</style>