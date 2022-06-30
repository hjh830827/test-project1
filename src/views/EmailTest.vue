<template>
  <div class="text-center">
    <input type="textArea" />
    <v-col cols="12" md="6">
      <v-textarea
        solo
        name="input-7-4"
        v-model="inputEmail"
        label="이메일을 입력해주세요."
      ></v-textarea>
    </v-col>
    <v-btn :disabled="inputEmail === ''" @click="addEamil">추가 ↓</v-btn>

    <v-col cols="12" md="6">
      <div v-for="(item, index) in addEamilList" :key="index">
        {{ index }} {{ item }}
      </div>
    </v-col>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      inputEmail: "",
      addEamilList: [],
    };
  },
  methods: {
    // 엔터 치환
    replaceEnter(val, replaceVal) {
      return val.replace(
        /(\r\n|\n|\r)/gm,
        _.isNil(replaceVal) ? "/" : replaceVal
      );
    },
    // 이메일 체크
    emailCheckFlag(val) {
      // eslint-disable-next-line no-useless-escape
      const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return reg.test(val);
    },
    addEamil() {
      const emailList = this.replaceEnter(this.inputEmail).split("/");

      for (let data of emailList) {
        if (
          this.emailCheckFlag(data) &&
          !this.addEamilList.some((item) => item === data)
        ) {
          this.addEamilList.push(data);
        }
      }

      this.inputEmail = "";
    },
  },
};
</script>
