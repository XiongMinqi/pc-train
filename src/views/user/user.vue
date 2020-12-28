<template>
  <div v-loading="loading">
    <div class="backLastPage" @click="backLastPage">
      <i class="el-icon-arrow-left"></i>返回
    </div>
    <div class="userlist">
      <div class="word">用户名</div>
      <div class="input">
        <el-input size="mini" disabled v-model="userInfo.nickName" placeholder="用户名"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">工号</div>
      <div class="input">
        <el-input size="mini" disabled v-model="userInfo.jobNumber" placeholder="工号"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">真实姓名</div>
      <div class="input">
        <el-input size="mini" disabled v-model="userInfo.username" placeholder="真实姓名"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">身份证号码</div>
      <div class="input">
        <el-input
          size="mini"
          type="number"
          disabled
          v-model="userInfo.idCardNumber"
          placeholder="身份证号码"
        ></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">性别</div>
      <div class="input">
        <el-radio v-model="radio" disabled label="0">男</el-radio>
        <el-radio v-model="radio" disabled label="1">女</el-radio>
      </div>
    </div>
    <div class="userlist">
      <div class="word">联系方式</div>
      <div class="input">
        <el-input size="mini" maxlength="11" v-model="telNumber" placeholder="联系方式"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">部门</div>
      <div class="input">
        <el-input size="mini" disabled v-model="departmentName" placeholder="部门"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">专业</div>
      <div class="input">
        <el-input size="mini" disabled v-model="majorName" placeholder="专业"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">密码</div>
      <div class="input">
        <el-button type="primary" size="mini" @click="changePassword">修改密码</el-button>
      </div>
    </div>
    <div class="userlist">
      <div class="word">照片</div>
      <div class="input">
        <el-upload
          class="avatar-uploader"
          action="../people/setMyAvatar"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-progress="onProgress"
          :on-error="handleAvatarFail"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="submitBtn">
      <el-button type="primary" size="medium" @click="submit">提交</el-button>
    </div>
    <div class="submitBtn">
      <el-button type="danger" size="medium" @click="logout">退出登录</el-button>
    </div>
    <el-dialog title="修改密码" :visible.sync="popup">
      <div class="changepass">
<!--        <div class="userlist">-->
<!--          <div class="word">姓名</div>-->
<!--          <div class="input">-->
<!--            <el-input size="mini" v-model="userInfo.username" placeholder="请输入姓名"></el-input>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="userlist">-->
<!--          <div class="word">身份证号码</div>-->
<!--          <div class="input">-->
<!--            <el-input size="mini" v-model="userInfo.idCardNumber" placeholder="请输入身份证号码"></el-input>-->
<!--          </div>-->
<!--        </div>-->
        <div class="userlist">
          <div class="word">原密码</div>
          <div class="input">
            <el-input
              size="mini"
              type="password"
              maxlength="16"
              v-model="originalPassword"
              placeholder="请输入原密码"
            ></el-input>
          </div>
        </div>
        <div class="userlist">
          <div class="word">新密码</div>
          <div class="input">
            <el-input
              size="mini"
              type="password"
              maxlength="16"
              v-model="newPassword"
              placeholder="请输入新密码"
            ></el-input>
          </div>
        </div>
        <div class="userlist">
          <div class="word">确认密码</div>
          <div class="input">
            <el-input
              size="mini"
              type="password"
              maxlength="16"
              v-model="confirmPassword"
              placeholder="请再输入一次密码"
            ></el-input>
          </div>
        </div>
        <div class="submitBtn">
          <el-button type="primary" size="medium" @click="submitPass">提交</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
      userInfo: {},
      major: [],
      radio: "0",
      department: [],
      userMsg: {},
      imageUrl: "",
      telNumber: "",
      phoneNumber: "",
      majorName: "",
      departmentName: "",
      originalPassword: "",
      newPassword: "",
      confirmPassword: "",
      loading: true,
    };
  },
  components: {},
  methods: {
    setMyAvatar(e){
      console.log(e)
    },
    backLastPage() {
      this.$router.go(-1);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.loading = false;
    },
    handleAvatarFail(err, file, fileList) {
      this.loading = false;
      // console.log(err);
      // console.log(file);
      // console.log(fileList);
    },
    onProgress(event, file, fileList) {
      // this.$message({
      //   message:"头像上传中"
      // })
      this.loading = true;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式或者 png 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //修改密码  打开弹出层
    changePassword() {
      this.popup = true;
    },
    submit() {
      if (this.phoneNumber === this.telNumber) {
        this.$message({
          message: "请输入新的手机号码",
          type: "warning",
        });
      } else {
        this.$api
          .getNumberResult(this.telNumber)
          .then((res) => {
            if (res.data.code === 1000) {
              this.$router.push({ name: "login", path: "/login" });
            }
            if (res.data.code === 0) {
              if (res.data.data[0] === true) {
                this.$message({
                  message: "手机号重复，请重新输入",
                  type: "warning",
                });
              } else {
                this.updateMsg();
              }
            } else {
              this.$message({
                message: res.data.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {});
      }
    },
    //更新个人信息
    updateMsg() {
      let data = {
        id: this.userInfo.id,
        phoneNumber: this.telNumber,
        username:this.userInfo.username
      };
      // console.log(data);
      this.$api
        .resetPersonalMsg(data)
        .then((res) => {
          // console.log(res);
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.$message({
              message: "个人信息修改成功,请重新登录",
              type: "success",
            });
            this.$router.push({ name: "login", path: "/login" });
          } else {
            this.$message({
              message: res.data.msg,
              type: "error",
            });
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    },
    //重置密码
    submitPass() {
      // console.log(this.originalPassword);
      // console.log(this.newPassword);
      // console.log(this.confirmPassword);
      if(this.originalPassword===""){
        this.$message({
          message: "请输入旧密码",
          type: "warning",
        });
      }else if(this.newPassword===""){
        this.$message({
          message: "请输入新密码",
          type: "warning",
        });
      }else if(this.confirmPassword===""){
        this.$message({
          message: "请再次输入密码",
          type: "warning",
        });
      }else if(this.newPassword!==this.confirmPassword){
        this.$message({
          message: "两次密码输入不一致",
          type: "warning",
        });
      } else {
        let data = {
          newPassword: this.newPassword,
          oldPassword: this.originalPassword,
        };
        this.$api
            .changePassword(data)
            .then((res) => {
              // console.log(res);
              if (res.data.code === 1000) {
                this.$router.push({ name: "login", path: "/login" });
              }
              if (res.data.code == 0) {
                this.$message({
                  message: "密码修改成功",
                  type: "success",
                });
                this.$router.push({ name: "login", path: "/login" });
              }
            })
            .catch((err) => {
              // console.log(err);
            });
      }

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
            // console.log(res);
            this.userInfo = res.data.data[0];
            this.radio = this.userInfo.sex.toString();
            this.telNumber = this.userInfo.phoneNumber;
            this.phoneNumber = this.userInfo.phoneNumber;
            // console.log(this.userInfo);
            // console.log(this.radio);
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
    //退出登录
    logout() {
      this.$api
        .logout()
        .then((res) => {
          // console.log(res);
          if (res.data.code === 0) {
            this.$message({
              message: "退出登录成功",
              type: "success",
            });
            localStorage.removeItem("userInfo");
            this.$router.push({ name: "login", path: "/login" });
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    },
  },
  mounted() {
    this.userMsg = JSON.parse(localStorage.getItem("userInfo"));
    this.imageUrl = this.userMsg.avatarUrl;
    // console.log(this.imageUrl);
    this.getUserList();
    this.getSubjectDetail();
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.userlist {
  // width: 500px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  .word {
    text-align: end;
    margin-right: 10px;
    width: 100px;
  }
  .input {
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon {
  border: 1px solid #8c939d;
}
.submitBtn {
  width: 100px;
  margin: 10px 0 0 110px;
  .el-button--medium {
    width: 100%;
  }
}
.changepass {
  padding: 40px;
}
</style>