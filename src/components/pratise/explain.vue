<template>
  <div>
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea" @input="inputInfo"></el-input>
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
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      textarea: "",
      answerInfo: "",
      list: {}
    };
  },
  components: {},
  methods: {
    inputInfo() {
      // console.log(this.textarea);
      if (this.textarea !== "") {
        // console.log("abvshf ");
        this.answerInfo = "";
        this.answerInfo = this.textarea;
        // console.log(this.answerInfo);
        this.$store.state.practiseList[
          this.list.assignmentQuestionId
        ] = this.answerInfo;
      }
      if (this.textarea === "") {
        delete this.$store.state.practiseList[this.list.assignmentQuestionId];
      }
    }
  },
  mounted() {
    this.list = this.options[this.index];
    let answerDetail = this.answer[this.index];
    if (answerDetail) {
      this.$store.state.practiseList[this.list.assignmentQuestionId] =
        answerDetail.content;
      this.textarea = answerDetail.content;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-textarea {
  padding-bottom: 10px;
}
</style>