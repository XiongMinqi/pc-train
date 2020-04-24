<template>
  <div>
    <div>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple-courseware" @click="goto('courseware')">电子课件</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-material" @click="goto('material')">电子教材</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-online" @click="goto('online')">在线练习</div>
        </el-col>
      </el-row>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    goto(e) {
      console.log(e);
      this.$router.push({ name: e, path: `/${e}` });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.grid-content {
  text-align: center;
  border-radius: 10px;
  min-height: 36px;
  line-height: 36px;
}
.bg-purple-courseware {
  background: #0faf97;
  :hover {
    cursor: pointer;
  }
}
.bg-purple-material {
  background: #0ee7b1;
}
.bg-purple-online {
  background: #a8d30b;
}
.el-col {
  :hover {
    cursor: pointer;
  }
}
</style>