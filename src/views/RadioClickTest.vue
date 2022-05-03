<template>
  <div class="text-center">
    <input type="radio" id="one" name="number" value="One" v-model="picked" @click="radioClick" @change="radioChange">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" name="number" value="Two" v-model="picked" @click="radioClick" @change="radioChange">
    <label for="two">Two</label>
    <br>
    <span>선택: {{ picked }}</span>
    <br>
    <button type="button" @click="reset"> radio data 초기화</button>
  </div>
</template>

<script>
  export default {
    watch:{
      picked(){
        console.log('watch : ', this.picked)
      }
    },
    data(){
      return{
        picked: ''
      }
    },
    methods:{
      reset(){
        console.log('button : ', this.picked)
        this.picked= ''
      }
      ,radioClick(){
        console.log('radioClick before: ', this.picked)
        // event.target.checked = false
        console.log('radioClick after : ', this.picked)
      }
      ,radioChange(event){
        console.log(event)
        console.log('radioChange before :', this.picked)
        // if(this.picked == 'Two'){
        //   this.picked= ''
        // }
        console.log('radioChange after :', this.picked)
      }
    }
  }
</script>