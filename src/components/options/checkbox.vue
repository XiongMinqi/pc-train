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
      type: Object,
      default: function() {
        return {};
      }
    },
    checkList: {
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
      // console.log(this.checkList, "前");
      this.answerInfo = [];
      this.checkBoxList.map(item => {
        if (item == "0") {
          // console.log(0);
          this.answerInfo.push("A");
        }
        if (item == "1") {
          // console.log(1);
          this.answerInfo.push("B");
        }
        if (item == "2") {
          // console.log(2);
          this.answerInfo.push("C");
        }
        if (item == "3") {
          // console.log(3);
          this.answerInfo.push("D");
        }
        if (item == "4") {
          // console.log(3);
          this.answerInfo.push("E");
        }
        if (item == "5") {
          // console.log(3);
          this.answerInfo.push("F");
        }
      });
      // console.log(this.checkList, "后");
      // console.log(this.answerInfo, "答案");
      this.answerInfo = this.uniq(this.answerInfo).sort();
      // console.log(this.answerInfo, "答案");
      this.$store.state.answerList[this.list.id] = this.answerInfo;
      if (this.answerInfo.length > 0) {
        this.checkList[this.index].check = true;
        this.$emit("checkList", this.checkList);
      } else {
        this.checkList[this.index].check = false;
        this.$emit("checkList", this.checkList);
      }
      // console.log(this.$store.state.answerList);
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    // console.log(this.answer[this.options[this.index].id]);
    if (this.answer[this.options[this.index].id]) {
      let answerDetail = this.answer[this.options[this.index].id];
      answerDetail.map(item => {
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
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>