<template>
  <div class="content">
    <el-container>
      <el-header>
        <!-- <indexTop /> -->
        <div class="indexTopContent">
          <div class="index-top-left">
            <div class="clickIcon" @click="change">
              <i class="el-icon-s-unfold"></i>
            </div>
            <div class="title" @click="goTo('/index')">
              <span>新科在线培训系统</span>
            </div>
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
                      <img src="../assets/icon/call.png" alt />
                    </div>
                  </el-badge>
                </div>
                <div v-else>
                  <div class="callImg">
                    <img src="../assets/icon/call.png" alt />
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
                    <img class="userImg" src="../assets/icon/userImg.jpg" alt />
                  </div>
                </div>
                <div style="color:white">{{userInfo.nickName}}</div>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="goTo('/userDetail')">个人信息</div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div @click="goTo('/help')">帮助中心</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>

            <div class="submitBtn">
              <el-button type="danger" round size="mini" @click="logout">退出登录</el-button>
            </div>
          </div>
        </div>
      </el-header>
      <el-container class="Contentasdfasdf">
        <el-aside :width="width">
          <!-- <indexLeft /> -->
          <div class="indexLeft">
            <el-row class="tac">
              <el-menu
                default-active="1"
                @open="handleOpen"
                @close="handleClose"
                background-color="#3B4141"
                text-color="#fff"
                :unique-opened="true"
                :collapse-transition="true"
                :collapse="isCollapse"
              >
                <el-menu-item index="1" @click="goTo('/index')">
                  <i class="el-icon-s-home"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="10" @click="goTo('/news')">
                  <i class="el-icon-menu"></i>
                  <span slot="title">系统公告</span>
                </el-menu-item>
                <el-menu-item index="5" @click="goTo('/classList')">
                  <i class="el-icon-s-promotion"></i>
                  <span slot="title">我的课程</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-s-help"></i>
                    <span slot="title">学习任务</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">任务</template>
                    <el-menu-item index="2-1" @click="goTo('/undoMission')">
                      <i class="el-icon-notebook-1"></i>
                      <span slot="title">待完成任务</span>
                    </el-menu-item>
                    <el-menu-item index="2-2" @click="goTo('/historyMission')">
                      <i class="el-icon-tickets"></i>
                      <span slot="title">历史记录</span>
                    </el-menu-item>
                    <el-menu-item index="2-3" @click="goTo('/statistMission')">
                      <i class="el-icon-s-data"></i>
                      <span slot="title">任务统计</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-cherry"></i>
                    <span slot="title">我的积分</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">积分</template>
                    <el-menu-item index="3-1" @click="goTo('/myScore')">
                      <i class="el-icon-notebook-1"></i>
                      <span slot="title">个人积分</span>
                    </el-menu-item>
                    <el-menu-item index="3-2" @click="goTo('/scoreList')">
                      <i class="el-icon-s-data"></i>
                      <span slot="title">积分排行</span>
                    </el-menu-item>
                    <el-menu-item index="3-3" @click="goTo('/exsercise')">
                      <i class="el-icon-tickets"></i>
                      <span slot="title">培训经历</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span slot="title">在线考试</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">考试</template>
                    <el-menu-item index="4-1" @click="goTo('/onlineTest')">
                      <i class="el-icon-edit"></i>
                      <span slot="title">我的考试</span>
                    </el-menu-item>
                    <el-menu-item index="4-2" @click="goTo('/testRecords')">
                      <i class="el-icon-s-data"></i>
                      <span slot="title">考试记录</span>
                    </el-menu-item>
                    <el-menu-item index="4-3" @click="goTo('/grade')">
                      <i class="el-icon-medal"></i>
                      <span slot="title">成绩统计</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <!-- <el-menu-item index="4" @click="goTo('/onlineTest')">
                  <i class="el-icon-edit-outline"></i>
                  <span slot="title">我的考试</span>
                </el-menu-item>-->

                <!-- <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-s-promotion"></i>
                    <span slot="title">我的课程</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">课程</template>
                    <el-menu-item index="5-1" @click="goTo('/classList')">
                      <i class="el-icon-notebook-1"></i>
                      <span slot="title">课程表</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>-->
                <el-submenu index="6">
                  <template slot="title">
                    <i class="el-icon-video-camera"></i>
                    <span slot="title">在线学习</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">学习</template>
                    <el-menu-item index="6-1" @click="goTo('/courseware')">
                      <i class="el-icon-notebook-1"></i>
                      <span slot="title">电子课件</span>
                    </el-menu-item>
                    <el-menu-item index="6-3" @click="goTo('/online')">
                      <i class="el-icon-edit"></i>
                      <span slot="title">在线练习</span>
                    </el-menu-item>
                    <el-menu-item index="6-4" @click="goTo('/studyRecord')">
                      <i class="el-icon-tickets"></i>
                      <span slot="title">学习记录</span>
                    </el-menu-item>
                    <el-menu-item index="6-5" @click="goTo('/practiseRecord')">
                      <i class="el-icon-document"></i>
                      <span slot="title">练习记录</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="7" @click="goTo('/mistake')">
                  <i class="el-icon-document"></i>
                  <span slot="title">错题集选</span>
                </el-menu-item>
                <!-- <el-menu-item index="8" @click="goTo('/grade')">
                  <i class="el-icon-medal"></i>
                  <span slot="title">成绩统计</span>
                </el-menu-item>-->
                <!-- <el-menu-item index="9" @click="goTo('/testRecords')">
                  <i class="el-icon-document-copy"></i>
                  <span slot="title">考试记录</span>
                </el-menu-item>-->
              </el-menu>
            </el-row>
          </div>
        </el-aside>
        <el-main>
          <div class="mainContent">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      userInfo: {},
      unReadList: [],
      popup: false,
      user: {},
      width: "200px",
    };
  },
  components: {},
  methods: {
    change() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse === false) {
        this.width = "200px";
      } else {
        this.width = "64px";
      }
    },
    webscoket() {
      var socket = new WebSocket("ws://39.104.70.60:8080/imserver");
      //打开事件
      socket.onopen = function () {
        console.log("websocket已打开");
        socket.send("这是来自客户端的消息" + location.href + new Date());
      };
      //获得消息事件
      socket.onmessage = function (msg) {
        //console.log(msg.data);
        if (msg.data) {
          let data = JSON.parse(msg.data);
          this.unReadList.unshift(data);
        }
        //发现消息进入    开始处理前端触发逻辑
      };
      //关闭事件
      socket.onclose = function () {
        console.log("websocket已关闭");
      };
      //发生了错误事件
      socket.onerror = function () {
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
        query: { id: e.id, flag: true },
      });
    },
    //一键全读
    readAll() {
      this.$api
        .allRead()
        .then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.unReadList = [];
            // console.log(res);
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: "获取失败",
            type: "warning",
          });
          //console.log(err);
        });
    },
    //获取未读消息
    getAmount() {
      this.$api
        .getNumber()
        .then((res) => {
          if (res.data.code === 1000) {
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            // console.log(res);
            this.unReadList = res.data.data;
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
          }
        })
        .catch((err) => {
          //console.log(err);
        });
    },
    goTo(path) {
      this.$router.push(path);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
  mounted() {
    this.getAmount();
    this.webscoket();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.content {
  position: absolute;
  width: 100%;
  height: 100%;
}
.mainContent {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.Contentasdfasdf {
  // height: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
}
.el-header {
  position: absolute;
  height: 60px;
  width: 100%;
  background-color: #3b3b47;
  color: #ffffff;
  text-align: center;
}

.el-aside {
  background-color: #3b4141;
  // height: 100%;
  color: #333;
}

.el-main {
  // background-color: #e9eef3;
  // color: #333;
  // height: 100%;
}
.el-menu {
  border: 0;
  background-color: #3b4141;
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.index-top-left {
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
}
.indexTopContent {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  padding-left: 20px;
  font-size: 25px;
  // font-weight: bold;
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
.clickIcon {
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
}
</style>