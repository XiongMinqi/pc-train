<template>
  <div>
    <div class="userlist">
      <div class="word">用户名</div>
      <div class="input">
        <el-input size="mini" disabled v-model="username" placeholder="用户名"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">工号</div>
      <div class="input">
        <el-input size="mini" disabled v-model="jobNumber" placeholder="工号"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">真实姓名</div>
      <div class="input">
        <el-input size="mini" disabled v-model="realName" placeholder="真实姓名"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">身份证号码</div>
      <div class="input">
        <el-input size="mini" disabled v-model="idNumber" placeholder="身份证号码"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">性别</div>
      <div class="input">
        <el-radio v-model="radio" disabled label="1">男</el-radio>
        <el-radio v-model="radio" disabled label="2">女</el-radio>
      </div>
    </div>
    <div class="userlist">
      <div class="word">联系方式</div>
      <div class="input">
        <el-input size="mini" v-model="telPhone" placeholder="联系方式"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">部门</div>
      <div class="input">
        <el-input size="mini" disabled v-model="professional" placeholder="部门"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">专业</div>
      <div class="input">
        <el-input size="mini" disabled v-model="department" placeholder="专业"></el-input>
      </div>
    </div>
    <div class="userlist">
      <div class="word">密码</div>
      <div class="input">
        <el-button type="primary" size="mini">修改密码</el-button>
      </div>
    </div>
    <div class="userlist">
      <div class="word">照片</div>
      <div class="input">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "student1",
      jobNumber: "工号",
      realName: "学员1",
      idNumber: "13413531354321653556",
      radio: "1",
      telPhone: "13435133535",
      professional: "部门",
      department: "专业",
      imageUrl: ""
    };
  },
  components: {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
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
.avatar-uploader-icon{
  border: 1px solid #8c939d;
}
</style>