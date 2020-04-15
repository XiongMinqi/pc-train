<template>
  <div class="bgImg">
    <div class="title">新科培训管理系统</div>
    <div class="inputs">
      <div style="margin:0 auto;">
        <div class="demo-input-suffix">
          <div class="tishiyu">用户名</div>
          <div>
            <el-input
              placeholder="请输入用户名"
              @change="inputUsername"
              size="small"
              type="text"
              v-model="username"
            ></el-input>
          </div>
        </div>
        <div class="demo-input-suffix">
          <div class="tishiyu">密码</div>
          <div>
            <el-input
              placeholder="请输入密码"
              @change="inputPassword"
              maxlength="16"
              minlength="6"
              size="small"
              type="password"
              v-model="passwords"
            ></el-input>
          </div>
        </div>
        <div style="margin-left: 22%;">
          <el-checkbox v-model="checked">记住登录</el-checkbox>
        </div>
        <div class="btn">
          <el-row>
            <el-button type="primary" @click="loginIng">登录</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "student1",
      passwords: "1234",
      checked: true
    };
  },
  components: {},
  methods: {
    inputUsername(e) {
      // console.log(e);
      this.username = e;
    },
    inputPassword(e) {
      // console.log(e);
      this.passwords = e;
    },
    loginIng() {
      let data = {
        username: this.username,
        password: this.passwords,
        "remeber-me": this.checked
      };
      // console.log(data);
      this.$api
        .login(data)
        .then(res => {
          console.log(res);
          if (res.data.code === 0) {
            // console.log(res.data[0]);
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            localStorage.setItem("userInfo", JSON.stringify(res.data.data[0]));
            this.$router.push({ name: "index", path: "/index" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bgImg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/icon/1543822105765191.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .title {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    color: white;
  }
}
.inputs {
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 40%;
  background: rgba(0, 119, 255, 0.1);
  padding: 50px;
}
.inputDetail {
  padding: 20px 0;
}
.btn {
  width: 100%;
  padding-top: 20px;
  margin-left: 22%;
  .el-button {
    width: 60%;
  }
}
.demo-input-suffix {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  .tishiyu {
    width: 12%;
    text-align: end;
    margin-right: 10px;
  }
}
</style>