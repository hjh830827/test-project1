<template>
  <div class="example">
    <quill-editor
      class="editor"
      ref="myTextEditor"
      :disabled="false"
      :value="content"
      :options="editorOption"
      @change="onEditorChange"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />

    <div class="output ql-snow">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
import debounce from "lodash/debounce";
import { quillEditor } from "vue-quill-editor";

// highlight.js style
import "highlight.js/styles/tomorrow.css";

// import theme style
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

export default {
  name: "quill-example-snow",
  title: "Theme: snow",
  components: {
    quillEditor,
  },
  data() {
    return {
      editorOption: {
        placeholder: "place holder test",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // <strong>, <em>, <u>, <s>
            ["blockquote", "code-block"], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
            [{ header: 1 }, { header: 2 }], // <h1>, <h2>
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // <sub>, <sup>
            [{ indent: "-1" }, { indent: "+1" }], // class제어
            [{ direction: "rtl" }], //class 제어
            [{ size: ["small", false, "large", "huge"] }], //class 제어 - html로 되도록 확인
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
            [{ font: [] }], // 글꼴 class로 제어
            [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
            [{ align: [] }], // class
            // ["clean"],
            ["link", "image", "video"],
          ],
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
        },
      },
      content: "",
    };
  },
  methods: {
    onEditorChange: debounce(function(value) {
      this.content = value.html;
    }, 466),
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    },
    contentCode() {
      return hljs.highlightAuto(this.content).value;
    },
  },
  mounted() {
    console.log("this is Quill instance:", this.editor);
    const case1Asis = [
      { contentsIdx: 2, groupsList: [{ groupsIdx: "c" }] },
      { contentsIdx: 3, groupsList: [{ groupsIdx: "d" }] },
    ];
    console.log("case1Asis :", case1Asis);

    const case1LastTobe = [
      {
        maliSend: 1,
        list: [
          { contentsIdx: 2, groupsIdx: "c" },
          { contentsIdx: 3, groupsIdx: "d" },
        ],
      },
      {
        maliSend: 2,
        list: [
          { contentsIdx: 2, groupsIdx: "d" },
          { contentsIdx: 3, groupsIdx: "c" },
        ],
      },
    ];

    console.log("case1LastTobe :", case1LastTobe);

    const asis = [
      { contentsIdx: 1, groupsList: [{ groupsIdx: "a" }, { groupsIdx: "b" }] },
      { contentsIdx: 2, groupsList: [{ groupsIdx: "c" }] },
      { contentsIdx: 3, groupsList: [{ groupsIdx: "d" }] },
    ];
    console.log("asis :", asis);

    const lastTobe = [
      {
        maliSend: 1,
        list: [
          { contentsIdx: 1, groupsIdx: "a" },
          { contentsIdx: 1, groupsIdx: "b" },
          { contentsIdx: 2, groupsIdx: "c" },
          { contentsIdx: 3, groupsIdx: "d" },
        ],
      },
      {
        maliSend: 2,
        list: [
          { contentsIdx: 2, groupsIdx: "a" },
          { contentsIdx: 2, groupsIdx: "b" },
          { contentsIdx: 3, groupsIdx: "c" },
          { contentsIdx: 1, groupsIdx: "d" },
        ],
      },
      {
        maliSend: 3,
        list: [
          { contentsIdx: 3, groupsIdx: "a" },
          { contentsIdx: 3, groupsIdx: "b" },
          { contentsIdx: 1, groupsIdx: "c" },
          { contentsIdx: 2, groupsIdx: "d" },
        ],
      },
    ];

    console.log("lastTobe :", lastTobe);
  },
};
</script>

<style lang="scss" scoped>
.example {
  display: flex;
  flex-direction: column;

  .editor {
    height: 40rem;
    overflow: hidden;
  }

  .output {
    width: 100%;
    height: 20rem;
    margin: 0;
    border: 1px solid #ccc;
    overflow-y: auto;
    resize: vertical;

    &.code {
      padding: 1rem;
      height: 16rem;
    }

    &.ql-snow {
      border-top: none;
      height: 24rem;
    }
  }
}
</style>
