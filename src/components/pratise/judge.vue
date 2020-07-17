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
    },
    answer: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      radio: "",
      answerInfo: "",
      list: {}
    };
  },
  components: {},
  methods: {
    changeRadio() {
      // console.log(this.radio);
      if (this.radio == "0") {
        this.answerInfo = "";
        this.answerInfo = "正确";
      }
      if (this.radio == "1") {
        this.answerInfo = "";
        this.answerInfo = "错误";
      }
      this.$store.state.practiseList[
        this.list.assignmentQuestionId
      ] = this.answerInfo;
    }
  },
  mounted() {
    this.list = this.options[this.index];
    let answerDetail = this.answer[this.index];
    if (answerDetail) {
      this.$store.state.practiseList[this.list.assignmentQuestionId] =
        answerDetail.content;
      if (answerDetail.content === "正确") {
        this.radio = 0;
      }
      if (answerDetail.content === "错误") {
        this.radio = 1;
      }
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-radio {
  padding-bottom: 10px;
}
</style>