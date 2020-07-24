<template>
  <div v-loading="loading">
    <div>积分排行</div>
    <div v-if="scoreList.length>0">
      <div v-for="(item,index) in scoreList" :key="index">
        <div class="flex aligh-center scoreDetail justify-between">
          <div class="flex aligh-center scoreListIndex">
            <div class="index">
              <div v-if="index===0">
                <img src="../../assets/icon/gold.png" alt />
              </div>
              <div v-if="index===1">
                <img src="../../assets/icon/sliver.png" alt />
              </div>
              <div v-if="index===2">
                <img src="../../assets/icon/copper.png" alt />
              </div>
              <div v-if="index>2">{{index+1}}</div>
            </div>
            <div class="flex aligh-center">
              <div class="userImg" @click="watchPeople(item)">
                <div v-if="item.avatarUrl">
                  <img :src="item.avatarUrl" alt />
                </div>
                <div v-else>
                  <img src="../../assets/icon/userImg.jpg" alt />
                </div>
              </div>
              <div>{{item.peopleName}}</div>
            </div>
            <div class="object">{{item.departmentName}} / {{item.majorName}}</div>
          </div>
          
          <div class="scoreCount">
            <div v-if="item.rewardPoint">{{item.rewardPoint}} 积分</div>
            <div v-else>0 积分</div>
          </div>
        </div>
      </div>
    </div>
    <div class="else" v-else></div>
    <el-dialog
      :title="peopleDetail.nickName"
      :visible.sync="dialogVisible"
      width="50%"
      @close="close"
    >
      <div v-loading="dialogLoading" class="flex aligh-center justify-between">
        <div>
          <div v-if="peopleDetail.type===0">身份 : 学员</div>
          <div v-if="peopleDetail.type===1">身份 : 教员</div>
          <div v-if="peopleDetail.sex===0">性别 : 男</div>
          <div v-if="peopleDetail.sex===1">性别 : 女</div>
          <!-- <div>部门 : {{peopleDetail.departName}}</div> -->
          <div>邮箱 : {{peopleDetail.email}}</div>
          <div>工号 : {{peopleDetail.jobNumber}}</div>
          <div>联系电话 : {{peopleDetail.phoneNumber}}</div>
        </div>
        <div class="peopleImg">
          <div v-if="peopleUrl">
            <img :src="peopleUrl" alt />
          </div>
          <div v-else>
            <img src="../../assets/icon/userImg.jpg" alt />
          </div>
        </div>
      </div>
      <div slot="footer" style="text-align: center;">
        <span>
          <el-button type="primary" @click="dialogVisible=false">确定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scoreList: [],
      loading: true,
      dialogVisible: false,
      dialogLoading: false,
      peopleDetail: {},
      classList: [],
      peopleUrl: ""
    };
  },
  components: {},
  methods: {
    close() {
      this.peopleUrl = "";
      this.peopleDetail = {};
    },
    watchPeople(e) {
      this.peopleUrl = "";
      this.peopleUrl = e.avatarUrl;
      this.dialogLoading = true;
      this.$api
        .checkPeople(e.peopleId)
        .then(res => {
          this.dialogLoading = false;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.peopleDetail = res.data.data[0];
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.dialogLoading = false;
          //console.log(err);
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
      this.dialogVisible = true;
    },
    getdict() {
      this.$grade
        .getdict()
        .then(res => {
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.subjectList = res.data.data[0]["专业名称"];
            this.classList = res.data.data[0]["部门名称"];
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
    getScoreList() {
      this.$grade
        .getScoreRank()
        .then(res => {
          this.loading = false;
          if (res.data.code === 1000) {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
            this.$router.push({ name: "login", path: "/login" });
          }
          if (res.data.code === 0) {
            this.scoreList = res.data.data;
          } else {
            this.$message({
              message: res.data.msg,
              type: "warning"
            });
          }
        })
        .catch(err => {
          this.loading = false;
          //console.log(err);
          this.$message({
            message: err.data.msg,
            type: "warning"
          });
        });
    }
  },
  mounted() {
    // this.getdict();
    this.getScoreList();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.else {
  text-align: center;
}
.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}
.aligh-center {
  align-items: center;
}
.index {
  margin-right: 20px;
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  img {
    width: 30px;
    height: 30px;
  }
}
.scoreDetail {
  background: #f2f2f2;
  // width: 80%;
  padding: 5px 30px 5px 0;
  border-radius: 10px;
  margin-bottom: 5px;
}
.userImg {
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  :hover {
    cursor: pointer;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
.peopleImg {
  margin-right: 100px;
  img {
    width: 100px;
    height: 100px;
    border: 1px solid #a1a1a1;
    border-radius: 50%;
  }
}
.scoreListIndex{
  // width: 350px;
}
.object{
  color: #aaaaaa;
  font-size: 12px;
  margin-left: 10px;
}
.scoreCount{
  width: 20%;
  text-align: end;
  color: #409eff;
}
</style>