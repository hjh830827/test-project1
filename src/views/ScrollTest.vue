<template>
  <div>
    <header>
      <div>header area</div>
    </header>
    <header class="header_fixed" v-if="isFixed">
      <div>header fixed area</div>
    </header>
    <div ref="scrollTest">----------------------------------</div>
    <div v-for="n in 50" :key="n">1</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.scroll);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      if (window.scrollY > this.$refs.scrollTest.offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";

.header_fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2000;
}
</style>
