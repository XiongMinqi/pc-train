<template>
  <div>
    <el-input type="textarea" :rows="2" placeholder="请输入内容" maxlength="300" show-word-limit v-model="textarea" @input="inputInfo"></el-input>
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
    },
    checkList:{
      type:Array,
      default: function(){
        return []
      }
    }
  },
  data() {
    return {
      textarea: "",
      answerInfo: [],
      list: {}
    };
  },
  components: {},
  methods: {
    inputInfo() {
      // console.log(this.textarea);
      if (this.textarea !== "") {
        // console.log("abvshf ");
        this.answerInfo = [];
        this.answerInfo.push(this.textarea);
        // console.log(this.answerInfo);
        this.$store.state.answerList[this.list.id] = this.answerInfo;
        this.checkList[this.index].check = true;
        this.$emit("checkList", this.checkList);
        // console.log(this.$store.state.answerList);
      }
      if (this.textarea === "") {
        delete this.$store.state.answerList[this.list.id];
        this.checkList[this.index].check = false;
        this.$emit("checkList", this.checkList);
        // console.log(this.$store.state.answerList);
      }
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    // console.log(this.answer[this.options[this.index].id]);
    if (this.answer[this.options[this.index].id]) {
      this.textarea = this.answer[this.options[this.index].id];
    }
    // console.log(this.list);
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