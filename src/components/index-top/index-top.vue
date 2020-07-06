<template>
  <div class="indexTopContent">
    <div class="title" @click="goTo('/index')">
      <span>新科在线培训系统</span>
    </div>
    <div class="indexTop">
      <el-popover placement="bottom-end" width="800" trigger="hover">
        <el-button type="primary" @click="readAll">一键全读</el-button>
        <el-button type="primary" @click="checkHistory">查看历史</el-button>
        <el-table :data="unReadList" max-height="300">
          <el-table-column width="150" property="title" label="标题"></el-table-column>
          <el-table-column width="300" property="content" label="内容"></el-table-column>
          <el-table-column width="200" property="createTime" label="时间"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="checkUnRead(scope.row,scope.$index)"
              >查看消息</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div slot="reference">
          <div v-if="unReadList.length>0">
            <el-badge :value="unReadList.length" class="item">
              <div class="callImg">
                <img src="../../assets/icon/call.png" alt />
              </div>
            </el-badge>
          </div>
          <div v-else>
            <div class="callImg">
              <img src="../../assets/icon/call.png" alt />
            </div>
          </div>
        </div>
      </el-popover>
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
        <el-button type="danger" round size="mini" @click="logout">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      unReadList: 0,
      popup: false,
      user: {}
    };
  },
  components: {},
  methods: {
    webscoket() {
      // const isProduction = process.env.NODE_ENV === "production";
      // var socket = isProduction ? new WebSocket("ws://39.104.70.60:8080/imserver") : new WebSocket("ws://192.168.0.45:8080/imserver");
      var socket = new WebSocket("ws://39.104.70.60:8080/imserver");
      // var socket = new WebSocket("ws://192.168.0.45:8080/imserver");
      //打开事件
      socket.onopen = function() {
        console.log("websocket已打开");
        socket.send("这是来自客户端的消息" + location.href + new Date());
      };
      //获得消息事件
      socket.onmessage = function(msg) {
        console.log(msg.data);
        if (msg.data) {
          let data = JSON.parse(msg.data);
          this.unReadList.unshift(data);
        }
        //发现消息进入    开始处理前端触发逻辑
      };
      //关闭事件
      socket.onclose = function() {
        console.log("websocket已关闭");
      };
      //发生了错误事件
      socket.onerror = function() {
        console.log("websocket发生了错误");
      };
    },
    goTo(path) {
      this.$router.push(path);
    },
    //查看历史消息
    checkHistory() {
      this.$router.push({ name: "allHistory", path: "/allHistory" });
    },
    //查看未读消息
    checkUnRead(e, index) {
      this.unReadList.splice(index, 1);
      this.$router.push({
        name: "unReadNews",
        path: "/unReadNews",
        query: { id: e.id, flag: true }
      });
    },
    //一键全读
    readAll() {
      this.$api
        .allRead()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.unReadList = [];
            // console.log(res);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
          //console.log(err);
        });
    },
    //获取未读消息
    getAmount() {
      this.$api
        .getNumber()
        .then(res => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.unReadList = res.data.data;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          //console.log(err);
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
          //console.log(err);
        });
    }
  },
  mounted() {
    this.getAmount();
    this.webscoket();
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
.title:hover {
  cursor: pointer;
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
.callImg {
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
.doIt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.emptyHistory {
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  :hover {
    cursor: pointer;
    color: darkcyan;
  }
}
.checkHistory {
  font-size: 12px;
  text-align: start;
  margin-top: 10px;
  :hover {
    cursor: pointer;
    color: darkcyan;
  }
}
.readAll {
  font-size: 12px;
  text-align: end;
  margin-top: 10px;
  :hover {
    cursor: pointer;
    color: darkcyan;
  }
}
.newsItem {
  width: 300px;
  padding-bottom: 10px;
}
.newsTitle {
  font-size: 15px;
  width: 150px;
  height: 15px !important;
  line-height: 15px !important;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.newsTime {
  text-align: end;
  height: 8px !important;
  line-height: 8px !important;
  font-size: 12px;
  color: #a2a2a2;
}
</style>