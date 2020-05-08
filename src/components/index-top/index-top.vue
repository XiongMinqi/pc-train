<template>
  <div class="indexTopContent">
    <div class="title">
      新科电子培训系统
    </div>
    <div class="indexTop">
      <el-dropdown>
        <div class="topLeft">
          <div>
            <div v-if="userInfo.avatarUrl">
              <img class="userImg" :src="userInfo.avatarUrl" alt />
            </div>
            <div v-else>
              <img class="userImg" src="../../assets/icon/userImg.jpg" alt />
            </div>
          </div>
          <div>{{userInfo.nickName}}</div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div @click="goTo('/user')">个人信息</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="submitBtn">
        <el-button type="danger" size="mini" @click="logout">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      number: 0,
      popup: false,
      user: {}
    };
  },
  components: {},
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
    //获取消息数目
    getAmount() {
      this.$api
        .getNumber()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.number = res.data[0];
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //退出登录
    logout() {
      this.$api
        .logout()
        .then(res => {
          // console.log(res);
          if (res.data.code === 0) {
            this.$message({
              message: "退出登录成功",
              type: "success"
            });
            localStorage.removeItem("userInfo");
            this.$router.push({ name: "login", path: "/login" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAmount();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(this.userInfo.avatarUrl, "userInfo");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.indexTopContent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
}
.indexTop {
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    color: darkcyan;
  }
  .userImg {
    margin: 0 10px 0 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .topLeft {
    display: flex;
    align-items: center;
  }
}
.userlist {
  display: flex;
  align-items: center;
  padding: 10px 10px 0 10px;
}
.submitBtn {
  margin-left: 10px;
}
</style>