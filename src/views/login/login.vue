<template>
  <div id="login">
    <div id="bgd">
      <canvas id="myCanvas" :width="width" :height="height"></canvas>
    </div>
    <div id="loginBox">
<!--      <h4>基础知识学习系统</h4>-->
      <h4>新科培训管理系统 <span v-if="environment">(开发版)</span></h4>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
        <el-form-item label prop="userName" style="margin-top:20px;">
          <el-row>
            <el-col :span="2">
              <span class="iconfont">
                <i class="el-icon-user-solid"></i>
              </span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                placeholder="请输入用户名/手机号/身份证号"
                v-model="username"
                @input="inputUsername"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label prop="passWord">
          <el-row>
            <el-col :span="2">
              <span class="iconfont">
                <i class="el-icon-s-goods"></i>
              </span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                type="password"
                placeholder="请输入密码"
                v-model="passwords"
                @keydown.enter.native="submitForm"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label prop="check">
          <el-checkbox v-model="checked">记住登录</el-checkbox>
        </el-form-item>

        <el-form-item style="margin-top:20px;">
          <el-button type="primary" round class="submitBtn" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="joinTeacher">
      <el-popover placement="top" width="160" trigger="hover" v-model="visible">
        <div style="margin-bottom:10px">
          <a href="https://bucket20200417.oss-cn-huhehaote.aliyuncs.com/other/xinke.apk">点击直接下载</a>
        </div>
        <div style="margin-bottom:10px">或扫描二维码下载</div>
        <div class="downloadImg">
          <img src="../../assets/icon/download.png" alt />
        </div>
        <div style="margin-right:20px;" slot="reference">安卓App下载</div>
        <!-- <el-button  style="margin-left:20px;" round slot="reference" icon="el-icon-download">app下载</el-button> -->
      </el-popover>

      <div>
        <el-divider direction="vertical"></el-divider>
      </div>

      <div style="margin-left:20px" class="teacher" @click="teacher">管理员入口</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      answerList: {},
      imgLink: "../../assets/icon/bgimg.png",
      username: "",
      passwords: "",
      checked: false,
      canvas: null,
      context: null,
      environment:"",
      stars: [], //星星数组
      shadowColorList: [
        "#39f",
        "#ec5707",
        "#b031d4",
        "#22e6c7",
        "#92d819",
        "#14d7f1",
        "#e23c66",
      ], //阴影颜色列表
      directionList: ["leftTop", "leftBottom", "rightTop", "rightBottom"], //星星运行方向
      speed: 5, //星星运行速度
      last_star_created_time: new Date(), //上次重绘星星时间
      Ball: class Ball {
        constructor(radius) {
          this.x = 0;
          this.y = 0;
          this.radius = radius;
          this.color = "";
          this.shadowColor = "";
          this.direction = "";
        }

        draw(context) {
          context.save();
          context.translate(this.x, this.y);
          context.lineWidth = this.lineWidth;
          var my_gradient = context.createLinearGradient(0, 0, 0, 8);
          my_gradient.addColorStop(0, this.color);
          my_gradient.addColorStop(1, this.shadowColor);
          context.fillStyle = my_gradient;
          context.beginPath();
          context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
          context.closePath();

          context.shadowColor = this.shadowColor;
          context.shadowOffsetX = 0;
          context.shadowOffsetY = 0;
          context.shadowBlur = 10;

          context.fill();
          context.restore();
        }
      }, //工厂模式定义Ball类
      width: window.innerWidth,
      height: window.innerHeight,
      loginForm: {
        userName: "",
        passWord: "",
      },
      loginRules: {
        username: "",
        passWord: "",
      },
    };
  },
  components: {},
  methods: {
    //管理员入口
    teacher() {
      // window.open("../admin/index.html")；
      window.location.href = "../admin/index.html";
    },
    inputUsername(e) {
      if (e !== this.loginRules.username) {
        this.passwords = "";
        localStorage.removeItem("userList-afsdfsdafd");
      }
    },
    //提交登录
    submitForm() {
      let data = {
        username: this.username.replace(/\s/gi, ''),
        password: this.passwords,
        "remember-me": this.checked,
      };
      this.$api
        .login(data)
        .then((res) => {
          // console.log(res);
          if (res.data.code === 0) {
            // console.log(res.data[0]);
            // console.log(res);
            localStorage.setItem("token", res.headers["x-auth-token"]);
            // this.$store.state.header['x-auth-token'] = res.header['x-auth-token']
            this.$message({
              message: "欢迎, " + res.data.data[0].nickName,
              type: "success",
              duration: 5000,
            });
            // this.$notify({
            //   type: "success",
            //   title: "登录成功",
            //   message: "欢迎你, " + res.data.data[0].nickName,
            //   duration: 0,
            // });
            this.$grade
              .getExamRunningData()
              .then((reslut) => {
                // console.log(res);
                this.$api.sendInfo();
                if (
                  reslut.data.data === null ||
                  reslut.data.data[0].data === ""
                ) {
                  localStorage.setItem(
                    "userInfo",
                    JSON.stringify(res.data.data[0])
                  );
                  if (this.checked === true) {
                    localStorage.setItem(
                      "userList-afsdfsdafd",
                      JSON.stringify(data)
                    );
                  } else {
                    localStorage.setItem("userList-afsdfsdafd", {});
                  }
                  // console.log(1234231)
                  this.$router.push({ name: "index", path: "/index" });
                } else {
                  localStorage.setItem(
                    "userInfo",
                    JSON.stringify(res.data.data[0])
                  );
                  if (this.checked === true) {
                    localStorage.setItem(
                      "userList-afsdfsdafd",
                      JSON.stringify(data)
                    );
                  } else {
                    localStorage.setItem("userList-afsdfsdafd", {});
                  }
                  this.$router.push({ name: "testIng", path: "/testIng" });
                }
              })
              .catch((error) => {
                //console.log(error);
              });
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
    //重复动画
    drawFrame() {
      let animation = requestAnimationFrame(this.drawFrame);
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.createStar(false);
      this.stars.forEach(this.moveStar);
    },
    //展示所有的星星
    createStar(params) {
      let now = new Date();
      if (params) {
        //初始化星星
        for (var i = 0; i < 50; i++) {
          const radius = Math.random() * 3 + 2;
          let star = new this.Ball(radius);
          star.x = Math.random() * this.canvas.width + 1;
          star.y = Math.random() * this.canvas.height + 1;
          star.color = "#ffffff";
          star.shadowColor = this.shadowColorList[
            Math.floor(Math.random() * this.shadowColorList.length)
          ];
          star.direction = this.directionList[
            Math.floor(Math.random() * this.directionList.length)
          ];
          this.stars.push(star);
        }
      } else if (!params && now - this.last_star_created_time > 3000) {
        //每隔3秒重绘修改颜色其中30个球阴影颜色
        for (var i = 0; i < 30; i++) {
          this.stars[i].shadowColor = this.shadowColorList[
            Math.floor(Math.random() * this.shadowColorList.length)
          ];
        }
        this.last_star_created_time = now;
      }
    },
    //移动
    moveStar(star, index) {
      if (star.y - this.canvas.height > 0) {
        //触底
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = "leftTop";
        } else {
          star.direction = "rightTop";
        }
      } else if (star.y < 2) {
        //触顶
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = "rightBottom";
        } else {
          star.direction = "leftBottom";
        }
      } else if (star.x < 2) {
        //左边
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = "rightTop";
        } else {
          star.direction = "rightBottom";
        }
      } else if (star.x - this.canvas.width > 0) {
        //右边
        if (Math.floor(Math.random() * 2) === 1) {
          star.direction = "leftBottom";
        } else {
          star.direction = "leftTop";
        }
      }
      if (star.direction === "leftTop") {
        star.y -= star.radius / this.speed;
        star.x -= star.radius / this.speed;
      } else if (star.direction === "rightBottom") {
        star.y += star.radius / this.speed;
        star.x += star.radius / this.speed;
      } else if (star.direction === "leftBottom") {
        star.y += star.radius / this.speed;
        star.x -= star.radius / this.speed;
      } else if (star.direction === "rightTop") {
        star.y -= star.radius / this.speed;
        star.x += star.radius / this.speed;
      }
      star.draw(this.context);
    },
  },
  mounted() {
    if (!location.port || location.port == "80") {
      // console.log("正式版")
    } else {
      // console.log("开发版")
      this.environment="开发版";
    }
    // this.environment=process.env.NODE_ENV;
    // console.log(this.environment)
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d");
    this.createStar(true);
    this.drawFrame();
    let userMsg = JSON.parse(localStorage.getItem("userList-afsdfsdafd"));
    if (userMsg) {
      this.username = userMsg.username;
      this.passwords = userMsg.password;
      this.checked = true;
      this.loginRules.username = userMsg.username;
    }
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
#login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  background-size: 100%;
  background-image: url("../../assets/icon/bgimg.png");
  position: relative;
  #bgd {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #loginBox {
    width: 240px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
    /deep/ .inps input {
      border: none;
      color: #fff;
      background-color: transparent;
      font-size: 12px;
    }
    .submitBtn {
      background-color: transparent;
      color: #39f;
      width: 200px;
    }
    .iconfont {
      color: #fff;
    }
  }
}
.joinTeacher {
  position: absolute;
  top: 10px;
  right: 30px;
  display: flex;
  align-items: center;
  color: #c0c4cc;
  :hover {
    cursor: pointer;
  }
}
.teacher {
  &:hover {
    color: #ffffff;
  }
}
.downloadImg {
  width: 160px;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>