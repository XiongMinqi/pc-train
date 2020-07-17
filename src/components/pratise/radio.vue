<template>
  <div>
    <!-- <div v-if="index">{{index}}</div> -->
    <div v-for="(item,index) in list.options" :key="index" @change="changeRadio">
      <el-radio-group v-model="radio">
        <span v-if="index===0">
          <el-radio :label="0">A、{{item.content}}</el-radio>
        </span>
        <span v-if="index===1">
          <el-radio :label="1">B、{{item.content}}</el-radio>
        </span>
        <span v-if="index===2">
          <el-radio :label="2">C、{{item.content}}</el-radio>
        </span>
        <span v-if="index===3">
          <el-radio :label="3">D、{{item.content}}</el-radio>
        </span>
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
      radio: 10,
      list: {},
      answerInfo: "",
      answerList: []
    };
  },
  components: {},
  methods: {
    //单选
    changeRadio() {
      if (this.radio == "0") {
        this.answerInfo = "";
        this.answerInfo = "A";
      }
      if (this.radio == "1") {
        this.answerInfo = "";
        this.answerInfo = "B";
      }
      if (this.radio == "2") {
        this.answerInfo = "";
        this.answerInfo = "C";
      }
      if (this.radio == "3") {
        this.answerInfo = "";
        this.answerInfo = "D";
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
      this.$store.state.practiseList[
        this.list.assignmentQuestionId
      ] = answerDetail.content;
      if (answerDetail.content === "A") {
        this.radio = 0;
      }
      if (answerDetail.content === "B") {
        this.radio = 1;
      }
      if (answerDetail.content === "C") {
        this.radio = 2;
      }
      if (answerDetail.content === "D") {
        this.radio = 3;
      }
      if (answerDetail.content === "E") {
        this.radio = 4;
      }
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-radio-group {
  padding-bottom: 10px;
}
</style>