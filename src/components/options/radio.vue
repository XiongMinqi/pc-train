<template>
  <div>
    <!-- <div v-if="index">{{index}}</div> -->
    <div v-for="(item,index) in list.options" :key="index" @change="changeRadio">
      <el-radio-group v-model="radio">
        <el-radio :label="item.order">
          <span v-if="index===0">A、</span>
          <span v-if="index===1">B、</span>
          <span v-if="index===2">C、</span>
          <span v-if="index===3">D、</span>
          {{item.content}}
        </el-radio>
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
      //   console.log(this.answerInfo, "答案");
      this.$store.state.answerList[this.list.id] = this.answerInfo;
      console.log(this.$store.state.answerList);
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    this.answerList = this.$store.state.answerList;
    // console.log(this.answerList);
    // console.log(this.$store.state);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-radio-group{
    padding-bottom: 10px;
}
</style>