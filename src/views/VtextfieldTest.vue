<template>
  <div class="container">
    <div>
      <h1 class="title">
        한글막기 테스트
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
  </div>
</template>

<script>
export default {
  watch:{
    password2(val){
      console.log('======================')
      console.log(val)
    },
    text(){
      console.log('test')
    }
  },
  mounted(){
    // this.$refs.test111.click()
    // this.$refs.test111.setAttribute('autofocus', 'autofocus');
    this.$refs.test111.focus();
  },
  data () {
    return {
      show1: false,
      password2: '',
      mobileNo: '',
      number: '',
      name: ''
    }
  },
  methods: {
    // typing(e) {
    //   console.log(e.target)
    //   this.password = e.target.value
    // }
    typing($event) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if(reg.exec($event.target.value) !== null){
        console.log($event.target.value)
        console.log($event.target.value.slice(0,-1))
        this.name=$event.target.value.slice(0,-1)
        console.log(this.name)
        // return this.password = $event.target.value.slice(0,-1)
      }
      // this.name=$event.target.value
    }
  }
}
</script>