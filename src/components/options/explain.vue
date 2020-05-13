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
        // console.log(this.$store.state.answerList);
      }
      if (this.textarea === "") {
        delete this.$store.state.answerList[this.list.id];
        // console.log(this.$store.state.answerList);
      }
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
.el-textarea {
  padding-bottom: 10px;
}
</style>