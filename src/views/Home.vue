<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item, index) in test" :key="index">
      {{ item.a }}
    </swiper-slide>
    <!-- <swiper-slide>a0</swiper-slide>
    <swiper-slide>a1</swiper-slide>
    <swiper-slide>a2</swiper-slide>
    <swiper-slide>a3</swiper-slide>
    <swiper-slide>a4</swiper-slide>
    <swiper-slide>a5</swiper-slide>
    <swiper-slide>a6</swiper-slide>
    <swiper-slide>a7</swiper-slide>
    <swiper-slide>a8</swiper-slide>
    <swiper-slide>a9</swiper-slide> -->
    
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import 'swiper/swiper-bundle.css' // import style (>= Swiper 6.x)
import "swiper/css/swiper.css"; // import style (<= Swiper 5.x)

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    // swiper2() {
    //   return this.$refs.mySwiper.$swiper
    // }
  },
  created() {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.test.push({ a: "a" + i });
      }
    }, 3000);
    // this.swiper2.slideTo(2, 1000, false);
    this.$refs.mySwiper.swiper.slideTo(2, 0);
  },
  data() {
    return {
      test: [],
      swiperOption: {
        slidesPerView: 1.8, //화면에 slide 노출 개수
        slidesPerGroup: 1, //swiper 시 개수
        spaceBetween: 10, //간격
        centeredSlides: true, //현재 slide 중앙정렬
        loop: true, // loop 여부
        loopedSlides: 2, //loop 시 duplicate 개수
        // autoplay: {
        //   delay: 1000,
        // },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";
</style>
