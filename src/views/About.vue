<template>
  <div>
    <div v-for="n in 30" :key="n">1</div>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  // components: { VueSlickCarousel },
  created() {
    console.log("--------------------");
    console.log(this.$test);
  },
  data() {
    return {
      test: [],
      slickOption: {
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        // slidesToShow: 3
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";
</style>
