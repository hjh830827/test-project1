<template>
  <div class="text-center">
    <div v-for="(item, index) in radioList" :key="index">
      <input type="radio" :id="item.key" v-model="picked" :value="item" />
      <label :for="item.key" class="text">{{ item.value }}</label>
    </div>
    <br />
    선택한 key : {{ picked.key }}
    <br />
    선택한 value : {{ picked.value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioList: [
        {
          key: "00",
          value: "10세미만",
        },
        {
          key: "01",
          value: "10~19세",
        },
        {
          key: "02",
          value: "20~29세",
        },
        {
          key: "03",
          value: "30~39세",
        },
        {
          key: "04",
          value: "40~49세",
        },
        {
          key: "05",
          value: "50~59세",
        },
        {
          key: "06",
          value: "60세이상",
        },
      ],
      picked: "",
    };
  },
  mounted() {
    // radio data 초기 set - commit test
    this.picked = this.radioList[0];
  },
};
</script>
