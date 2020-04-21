<template>
  <div>
    <div v-for="(item,index) in list.options" :key="index" @change="changeCheckbox">
      <el-checkbox-group v-model="checkList">
        <el-checkbox :label="item.order">
          <span v-if="index===0">A、</span>
          <span v-if="index===1">B、</span>
          <span v-if="index===2">C、</span>
          <span v-if="index===3">D、</span>
          <span v-if="index===4">E、</span>
          <span v-if="index===5">F、</span>
          {{item.content}}
        </el-checkbox>
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
    }
  },
  data() {
    return {
      checkList: [],
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
      console.log(this.checkList);
      this.checkList.map(item => {
        if (item == "0") {
          console.log(0);
          this.answerInfo.push("A");
        }
        if (item == "1") {
          console.log(1);
          this.answerInfo.push("B");
        }
        if (item == "2") {
          console.log(2);
          this.answerInfo.push("C");
        }
        if (item == "3") {
          console.log(3);
          this.answerInfo.push("D");
        }
        if (item == "4") {
          console.log(3);
          this.answerInfo.push("E");
        }
        if (item == "5") {
          console.log(3);
          this.answerInfo.push("F");
        }
      });
      this.answerInfo = this.uniq(this.answerInfo);
      // console.log(this.answerInfo, "答案");
      this.$store.state.answerList[this.list.id] = this.answerInfo;
      console.log(this.$store.state.answerList);
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>