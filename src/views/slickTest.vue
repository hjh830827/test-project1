<template>
  <div>
    <VueSlickCarousel v-bind="option">
      <div><h1>1</h1></div>
      <div><h1>2</h1></div>
      <div><h1>3</h1></div>
      <div><h1>4</h1></div>
      <div><h1>5</h1></div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
//  import "slick/slick.css"
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data(){
      return{
        option: {
          // "arrows": false,
          "dots": true, //하단 dots show/hide
          "infinite": true, //무한 slide
          "slidesToShow": 1, //한 화면 안
          "slidesToScroll": 1, //slide 한번에 이동 개수
          "autoplay": true, // 오토 플레이
          "autoplaySpeed": 4000, // 오토 플레이 속도 
          "speed": 2000, //slide 속도
          centerMode: true,
          //centerPadding: '10px',
          // "cssEase": "linear"
  //         "dots": true,
  // "dotsClass": "slick-dots custom-dot-class",
  // "edgeFriction": 0.35,
  // "infinite": false,
  // "speed": 500,
  // "slidesToShow": 1,
  // "slidesToScroll": 1
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/css/slick.scss";
</style>