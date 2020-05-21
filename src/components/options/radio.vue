<template>
  <div>
    <!-- <div v-if="index">{{index}}</div> -->
    <div v-for="(item,index) in list.options" :key="index" @change="changeRadio">
      <el-radio-group v-model="radio">
        <span v-if="index===0"><el-radio :label="0">A、{{item.content}}</el-radio></span>
        <span v-if="index===1"><el-radio :label="1">B、{{item.content}}</el-radio></span>
        <span v-if="index===2"><el-radio :label="2">C、{{item.content}}</el-radio></span>
        <span v-if="index===3"><el-radio :label="3">D、{{item.content}}</el-radio></span>
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
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      radio: 10,
      list: {},
      answerInfo: [],
      answerList: [],
      data: {}
    };
  },
  components: {},
  methods: {
    //单选
    changeRadio() {
      this.data = {};
      if (this.radio == "0") {
        this.answerInfo = [];
        this.answerInfo.push("A");
      }
      if (this.radio == "1") {
        this.answerInfo = [];
        this.answerInfo.push("B");
      }
      if (this.radio == "2") {
        this.answerInfo = [];
        this.answerInfo.push("C");
      }
      if (this.radio == "3") {
        this.answerInfo = [];
        this.answerInfo.push("D");
      }
      // console.log(this.answerInfo, "答案");
      this.$store.state.answerList[this.list.id] = this.answerInfo;
      // console.log(this.$store.state.answerList);
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    this.answerList = this.$store.state.answerList;
    // console.log(this.answerList);
    //将从服务器获取的数据渲染到页面
    // console.log(this.answer);
    // console.log(this.options[index].id);
    // console.log(this.answer[this.options[this.index].id][0]);
    if(this.answer[this.options[this.index].id]){
      let answerDetail = this.answer[this.options[this.index].id][0];
      if(answerDetail === "A"){
        this.radio = 0
      }
      if(answerDetail === "B"){
        this.radio = 1
      }
      if(answerDetail === "C"){
        this.radio = 2
      }
      if(answerDetail === "D"){
        this.radio = 3
      }
    }
    // console.log(this.options);
    if (this.answerList[this.options.id]) {
      this.radio = this.answerList[this.options.id];
      // console.log(this.radio);
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