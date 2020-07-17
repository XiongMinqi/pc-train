<template>
  <div>
    <div v-for="(item,index) in fillList" :key="index">
      <div>
        <el-input
          type="textarea"
          :rows="1"
          placeholder="请输入内容"
          v-model="textarea[index]"
          @input="inputInfo(index)"
        ></el-input>
      </div>
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
      textarea: [""],
      answerInfo: [],
      list: {},
      fillList: [],
      number: -1,
      arr: []
    };
  },
  components: {},
  methods: {
    inputInfo(e) {
      let str = "";
      this.fillList[e] = this.textarea[e];
      this.fillList.map((item, index) => {
        if (index === 0) {
          str = item;
        } else {
          str = str + "|" + item;
        }
        if (item !== "") {
          this.arr.push(item);
        }
      });
      if (this.arr.length > 0) {
        this.$store.state.practiseList[this.list.assignmentQuestionId] = str;
      } else {
        delete this.$store.state.practiseList[this.list.assignmentQuestionId];
      }
    }
  },
  mounted() {
    this.list = this.options[this.index];
    //给填空题创建填空个数
    if (this.list.fillCount > 0) {
      for (let i = 0; i < this.list.fillCount; i++) {
        this.fillList.push("");
      }
    } else if (this.list.fillCount === 0) {
      this.fillList.push("");
    }
    let answerDetail = this.answer[this.index];
    if (answerDetail) {
      this.$store.state.practiseList[this.list.assignmentQuestionId] =
        answerDetail.content;
      if (answerDetail.content !== null) {
        let arr = String(answerDetail.content).split("\\|");
        this.textarea = arr;
      }
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-textarea {
  //   padding-bottom: 10px;
  //   display: block;
  //   resize: vertical;
  //   padding: 5px 15px;
  //   line-height: 1.5;
  //   box-sizing: border-box;
  width: 100%;
  //   font-size: inherit;
  //   color: #606266;
  //   background-color: #fff;
  //   background-image: none;
  border: 1px solid #dcdfe6;
  //   border-radius: 4px;
  //   transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
input {
  width: 100%;
  height: 100%;
  border: 0;
  // margin-bottom: 10px;
}
</style>