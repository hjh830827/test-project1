<template>
  <div class="container">
    <div>
      <h1 class="title">
        터치 막기 테스트
      </h1>
    </div>
    <v-text-field
      ref="test111"
      class="text-content" 
      :type="show1 ? 'text' : 'password'"
      v-model="password2"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="show1 = !show1"
       >
    </v-text-field>
    <button> 버튼 영역</button>
  </div>
</template>
 
<script>
</script>

<style lang="scss" scoped>
@import "../assets/css/slick.scss";
</style>