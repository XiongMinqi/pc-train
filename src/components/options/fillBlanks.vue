<template>
  <div>
    <div v-for="(item,index) in fillList" :key="index">
      <div class="el-textarea">
        <!-- <el-input
          type="textarea"
          :rows="1"
          placeholder="请输入内容"
          :value="item"
          @input="inputInfo"
        ></el-input>-->
        <input type="text" :value="item" @input="inputInfo" />
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
    }
  },
  data() {
    return {
      textarea: "",
      answerInfo: [],
      list: {},
      fillList: []
    };
  },
  components: {},
  methods: {
    inputInfo(e) {
      console.log(e);
      console.log(this.fillList);
      //   if (this.textarea !== "") {
      //     this.answerInfo = [];
      //     this.answerInfo.push(this.textarea);
      //     this.$store.state.answerList[this.list.id] = this.answerInfo;
      //     console.log(this.$store.state.answerList);
      //   }
      //   if (this.textarea === "") {
      //     delete this.$store.state.answerList[this.list.id];
      //     console.log(this.$store.state.answerList);
      //   }
    }
  },
  mounted() {
    this.options[this.index].checked = true;
    this.list = this.options[this.index];
    // console.log(this.list);
    for (let i = 0; i < this.list.fillCount; i++) {
      this.fillList.push("");
    }
    console.log(this.fillList);
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
    width: 100%;;
    height: 100%;
    border: 0;
    // margin-bottom: 10px;
}
</style>