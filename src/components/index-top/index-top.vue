<template>
  <div class="indexTopContent">
    <div class="title">
      <img src="../../assets/icon/logo.jpg" alt />
    </div>
    <div class="indexTop">
      <div class="topLeft" @click="checkUserList">
        <div>
          <img class="userImg" v-if="userInfo" :src="userInfo.avatarUrl" alt />
          <img
            v-else
            class="userImg"
            src="../../assets/icon/u=2669898717,1590930959&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div>{{userInfo.nickName}}</div>
      </div>
    </div>
    <el-drawer title="个人信息" :visible.sync="popup" :withHeader="false">
      <div>
        <div class="userlist">
          <div>用户名</div>
          <div>
            <el-input size="mini" v-model="user.nickName"></el-input>
          </div>
        </div>
      </div>
    </el-drawer>
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
    //获取消息数目
    getAmount() {
      this.$api
        .getNumber()
        .then(res => {
          console.log(res);
          this.number = res.data[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    //查看个人资料
    checkUserList() {
      this.popup = true;
      this.$api
        .checkUser(this.userInfo.userId)
        .then(res => {
          //   console.log(res);
          this.user = res.data[0];
          console.log(this.user);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getAmount();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(this.userInfo, "userInfo");
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.indexTopContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  //   text-align: center;
  // color: #ff0000;
  //   font-weight: bold;
  //   font-size: 30px;
  //   padding: 20px;
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
</style>