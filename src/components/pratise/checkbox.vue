<template>
  <div>
    <div v-for="(item,index) in list.options" :key="index" @change="changeCheckbox">
      <el-checkbox-group v-model="checkBoxList">
        <span v-if="index===0">
          <el-checkbox label="0">A、{{item.content}}</el-checkbox>
        </span>
        <span v-if="index===1">
          <el-checkbox label="1">B、{{item.content}}</el-checkbox>
        </span>
        <span v-if="index===2">
          <el-checkbox label="2">C、{{item.content}}</el-checkbox>
        </span>
        <span v-if="index===3">
          <el-checkbox label="3">D、{{item.content}}</el-checkbox>
        </span>
        <span v-if="index===4">
          <el-checkbox label="4">E、{{item.content}}</el-checkbox>
        </span>
        <span v-if="index===5">
          <el-checkbox label="5">F、{{item.content}}</el-checkbox>
        </span>
      </el-checkbox-group>
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
      checkBoxList: [],
      list: {},
      radio: "",
      answerInfo: []
    };
  },
  components: {},
  methods: {
    uniq(array) {
      var temp = []; //一个新的临时数组
      for (var i = 0; i < array.length; i++) {
        if (temp.indexOf(array[i]) == -1) {
          temp.push(array[i]);
        }
      }
      return temp;
    },
    changeCheckbox() {
      this.answerInfo = [];
      this.checkBoxList.map(item => {
        if (item == "0") {
          this.answerInfo.push("A");
        }
        if (item == "1") {
          this.answerInfo.push("B");
        }
        if (item == "2") {
          this.answerInfo.push("C");
        }
        if (item == "3") {
          this.answerInfo.push("D");
        }
        if (item == "4") {
          this.answerInfo.push("E");
        }
        if (item == "5") {
          this.answerInfo.push("F");
        }
      });
      this.answerInfo = this.uniq(this.answerInfo).sort();
      if (this.answerInfo.length > 0) {
        let str = "";
        this.answerInfo.map((item, index) => {
          if (index === 0) {
            str = item;
          } else {
            str = str + "|" + item;
          }
        });
        this.$store.state.practiseList[this.list.assignmentQuestionId] = str;
      } else {
        delete this.$store.state.practiseList[this.list.assignmentQuestionId];
      }
    }
  },
  mounted() {
    this.list = this.options[this.index];
    let answerDetail = this.answer[this.index];
    if (answerDetail) {
      if (answerDetail.content !== "") {
        this.$store.state.practiseList[this.list.assignmentQuestionId] =
          answerDetail.content;
        let arr = answerDetail.content.split("");
        arr.map((item, index) => {
          if (item === "|") {
            arr.splice(index, 1);
          }
        });
        arr.map(item => {
          if (item === "A") {
            this.checkBoxList.push("0");
          }
          if (item === "B") {
            this.checkBoxList.push("1");
          }
          if (item === "C") {
            this.checkBoxList.push("2");
          }
          if (item === "D") {
            this.checkBoxList.push("3");
          }
          if (item === "E") {
            this.checkBoxList.push("4");
          }
          if (item === "F") {
            this.checkBoxList.push("5");
          }
        });
      }
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>