<template>
  <div>
    <el-card style="height: 610px;">
      <quill-editor
        v-model="content"
        ref="http://bucket20200417.oss-cn-huhehaote.aliyuncs.co…name%3D%E6%93%8D%E4%BD%9C%E8%A7%84%E8%8C%831.docx"
        style="height: 500px;"
        :options="editorOption"
      ></quill-editor>
    </el-card>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  name: "FuncFormsEdit",
  components: {
    quillEditor
  },
  data() {
    return {
      content: null,
      editorOption: {}
    };
  }
};
</script>
