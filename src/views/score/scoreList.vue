<template>
  <div v-loading="loading">
    <div v-if="scoreList.length>0">
      <div v-for="(item,index) in scoreList" :key="index">
        <div class="flex aligh-center scoreDetail justify-between">
          <div class="flex aligh-center">
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
              <div class="userImg">
                <div v-if="item.avatarUrl">
                  <img :src="item.avatarUrl" alt />
                </div>
                <div v-else>
                  <img src="../../assets/icon/userImg.jpg" alt />
                </div>
              </div>
              <div>{{item.peopleName}}</div>
            </div>
          </div>
          <div>
            <div v-if="item.point">{{item.point}}</div>
            <div v-else>0</div>
          </div>
        </div>
      </div>
    </div>
    <div class="else" v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scoreList: [],
      loading:true
    };
  },
  components: {},
  methods: {
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
  width: 80%;
  padding: 5px 30px 5px 0;
  border-radius: 10px;
  margin-bottom: 5px;
}
.userImg{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}
</style>