<template>
  <div>
    1. 파일 업로드 validation check
    <input type="file" ref="fileUpload" @change="fileUpload" />

    <br /><br />
    2. 멀티 파일 업로드 test
    <input type="file" ref="fileUpload2" @change="fileUpload2" multiple />
    <br /><br />
    <div v-for="(item, index) in fileList2" :key="index">
      {{ item.name }}
      <v-icon @click="delFileList2(index)">x</v-icon>
    </div>

    <v-snackbar v-model="snackbarFlag" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      fileInfo: {},
      fileList2: [],
      // validation
      maxSize: 10 * 1024 * 1024, //10mb
      extensionLists: ["jpg", "png", "zip"],

      // snackbar
      snackbarFlag: false,
      text: "",
      timeout: 2000,
    };
  },
  computed: {
    // uploadList() {
    //   return _.isNil(this.$refs.fileUpload.files)
    //     ? ""
    //     : this.$refs.fileUpload.files;
    // },
  },
  methods: {
    fileUpload() {
      const fileInfo = this.$refs.fileUpload.files[0];
      if (!this.validation(fileInfo)) {
        this.snackbarFlag = true;
        this.$refs.fileUpload.value = null;
      } else {
        this.fileInfo = { name: fileInfo.name, size: fileInfo.size };
      }
    },
    validation(fileInfo) {
      console.log("fileInfo :", fileInfo);

      // 확장자 체크
      const checkIndex = this.extensionLists.findIndex(
        (item) => item === fileInfo.name.split(".")[1]
      );
      if (checkIndex < 0) {
        this.text = "jpg, png, zip 확장자만 업로드 가능합니다.";
        return false;
      }
      // 10mb 체크
      if (fileInfo.size > this.maxSize) {
        this.text = "10mb 이하만 업로드 가능합니다.";
        return false;
      }
      return true;
    },
    fileUpload2() {
      const files = this.$refs.fileUpload2.files;
      console.log("ref :", this.$refs.fileUpload2.files);
      let duplicationCnt = 0;
      const fileList = Object.entries(files).reduce((arr, [key, value]) => {
        console.log("key :", key);
        const fileObj = { name: value.name, size: value.size };
        // 중복 체크
        const index = this.fileList2.findIndex((obj) =>
          _.isEqual(obj, fileObj)
        );
        if (index < 0) {
          arr.push(fileObj);
        } else {
          duplicationCnt++;
        }
        return arr;
      }, []);

      this.fileList2 = [...this.fileList2, ...fileList];
      if (duplicationCnt > 0) {
        this.snackbarFlag = true;
        this.text = duplicationCnt + "개 파일이 중복되었습니다.";
      }
    },
    delFileList2(index) {
      this.fileList2.splice(index, 1);
    },
  },
};
</script>
