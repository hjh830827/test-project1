<template>
  <div class="container">
    <div>
      <h1 class="title">
        전화번호 테스트
      </h1>
    </div>
    1. input number type<br />
    <v-text-field
      v-model="mobileNo"
      type="number"
      maxlength="11"
      placeholder="-를 제외하고 입력해주세요."
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
    />
    <br />
    2. input text type<br />
    <v-text-field
      v-model="number"
      type="text"
      maxlength="11"
      placeholder="-를 제외하고 입력해주세요."
      oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNo: "",
      number: "",
    };
  },
};
</script>
