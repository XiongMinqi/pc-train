<template>
  <div>
    <div v-for="(item,index) in fillList" :key="index">
      <div>
        <el-input
          type="textarea"
          :rows="1"
          maxlength="30"
          show-word-limit
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
      textarea: [""],
      answerInfo: [],
      list: {},
      fillList: []
    };
  },
  components: {},
  methods: {
    inputInfo(e) {
      if (this.textarea[e] !== "") {
        this.fillList[e] = this.textarea[e];
        this.$store.state.answerList[this.list.id] = this.fillList;
        this.checkList[this.index].check = true;
        this.$emit("checkList", this.checkList);
        // console.log(this.$store.state.answerList);
      }
      if (this.textarea[e] === "") {
        this.fillList[e] = this.textarea[e];
        // console.log(13243212);
        this.fillList.map(item => {
          if (item !== "") {
            this.$store.state.answerList[this.list.id] = this.fillList;
            this.checkList[this.index].check = true;
            this.$emit("checkList", this.checkList);
          } else {
            delete this.$store.state.answerList[this.list.id];
            this.checkList[this.index].check = false;
            this.$emit("checkList", this.checkList);
          }
        });
        // console.log(this.$store.state.answerList);
      }
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    //给填空题创建填空个数
    if (this.list.fillCount > 0) {
      for (let i = 0; i < this.list.fillCount; i++) {
        this.fillList.push("");
      }
    } else if (this.list.fillCount === 0) {
      this.fillList.push("");
    }
    // console.log(this.list);
    // console.log(this.answer[this.options[this.index].id]);
    if (this.answer[this.options[this.index].id]) {
      this.textarea = this.answer[this.options[this.index].id];
    }

    // console.log(this.fillList);
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