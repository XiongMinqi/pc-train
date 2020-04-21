<template>
  <div>
    <div @change="changeRadio">
      <el-radio-group v-model="radio">
        <div>
          <el-radio :label="0">正确</el-radio>
        </div>
        <div>
          <el-radio :label="1">错误</el-radio>
        </div>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    options: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      radio: "",
      answerInfo: [],
      list: {}
    };
  },
  components: {},
  methods: {
    changeRadio() {
    //   console.log(this.radio);
      if (this.radio == "0") {
        this.answerInfo = [];
        this.answerInfo.push("正确");
      }
      if (this.radio == "1") {
        this.answerInfo = [];
        this.answerInfo.push("错误");
      }
      this.$store.state.answerList[this.list.id] = this.answerInfo;
      console.log(this.$store.state.answerList);
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    // console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-radio{
    padding-bottom: 10px;
}
</style>