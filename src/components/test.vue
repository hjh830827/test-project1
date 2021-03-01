<template>
  <animated-number :value="value"  :duration="300"  :formatValue="formatToPrice" v-if="this.period==1" style="font-size: 1.8em"/>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      value: 17,
      period: 0
    };
  },
  methods: {
    formatToPrice(value) {
      var num=Number(value).toFixed(0)
      return `${Number(num).toLocaleString()}`;
    }
  }
}
</script>

