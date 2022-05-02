<template>
  <div class="text-center">
    원 데이터 : {{ date1 }}
    <br />
    YYYY.MM.DD : {{ date1 | dateFormat("YYYY.MM.DD") }}
    <br />
    YY-MM-DD : {{ date1 | dateFormat("YY-MM-DD") }}
    <br />
    ---------------------------------------------------
    <br />
    원 데이터 : {{ date2 }}
    <br />
    소수점 2자리 : {{ date2 | toFixed(2) }}
    <br />
    소수점 4자리 : {{ date2 | toFixed(4) }}
    <br />
    ---------------------------------------------------
    <br />
    원 데이터 : {{ date3 }}
    <br />
    3자리 콤마 : {{ date3 | comma() }}
  </div>
</template>

<script>
import moment from "moment";

export default {
  filters: {
    dateFormat: function(val, format) {
      return moment(val).format(format);
    },
    toFixed: function(val, num) {
      return parseFloat(val).toFixed(num);
    },
    comma: function(val) {
      return String(Math.round(val)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {
      date1: "20220503",
      date2: 123.456789,
      date3: 123456789,
    };
  },
};
</script>
