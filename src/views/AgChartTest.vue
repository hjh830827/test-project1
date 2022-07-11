<template>
  <div id="app">
    <ag-charts-vue :options="options"></ag-charts-vue>
  </div>
</template>
<script>
import { AgChartsVue } from "ag-charts-vue";

export default {
  name: "App",
  components: {
    AgChartsVue,
  },
  data() {
    return {
      options: null,
      data: [
        {
          year: "2012",
          "16-24": 7088,
          "25-34": 8162,
          "35-44": 7986,
          "45-54": 7694,
          "55-64": 5624,
          "65-74": 3153,
          "75+": 1057,
        },
        {
          year: "2013",
          "16-24": 7075,
          "25-34": 8457,
          "35-44": 7952,
          "45-54": 8005,
          "55-64": 5821,
          "65-74": 3562,
          "75+": 1371,
        },
        {
          year: "2014",
          "16-24": 7074,
          "25-34": 8660,
          "35-44": 7900,
          "45-54": 8290,
          "55-64": 6060,
          "65-74": 3939,
          "75+": 1534,
        },
        {
          year: "2015",
          "16-24": 7155,
          "25-34": 8582,
          "35-44": 8053,
          "45-54": 8498,
          "55-64": 6361,
          "65-74": 4390,
          "75+": 1632,
        },
        {
          year: "2016",
          "16-24": 7129,
          "25-34": 8720,
          "35-44": 8129,
          "45-54": 8686,
          "55-64": 6607,
          "65-74": 4721,
          "75+": 1925,
        },
        {
          year: "2017",
          "16-24": 7036,
          "25-34": 8815,
          "35-44": 8118,
          "45-54": 8803,
          "55-64": 6888,
          "65-74": 5031,
          "75+": 2050,
        },
        {
          year: "2018",
          "16-24": 6992,
          "25-34": 8894,
          "35-44": 8145,
          "45-54": 8814,
          "55-64": 7189,
          "65-74": 5264,
          "75+": 2262,
        },
        {
          year: "2019",
          "16-24": 6877,
          "25-34": 8895,
          "35-44": 8243,
          "45-54": 8810,
          "55-64": 7495,
          "65-74": 5339,
          "75+": 2471,
        },
      ],
    };
  },
  beforeMount() {
    this.options = {
      data: this.data,
      // series: [
      //   { type: "column", xKey: "beverage", yKey: "Q1", stacked: true },
      //   { type: "column", xKey: "beverage", yKey: "Q2", stacked: true },
      //   { type: "column", xKey: "beverage", yKey: "Q3", stacked: true },
      //   { type: "column", xKey: "beverage", yKey: "Q4", stacked: true },
      // ],
      theme: {
        // 색상 갯수별 배열 - 차트 개수와 다르면 색상 반복
        palette: {
          fills: [
            "rgba(0, 117, 163, 0.9)",
            "rgba(226, 188, 34, 0.9)",
            "red",
            "blue",
            "black",
          ],
          strokes: [
            "rgba(0, 117, 163, 0.9)",
            "rgba(226, 188, 34, 0.9)",
            "red",
            "blue",
            "black",
          ],
        },
        overrides: {},
      },
      title: {
        text: "Regular Internet Users",
        fontSize: 18,
      },
      subtitle: {
        text: "Source: Office for National Statistics",
      },
      series: [
        { type: "column", xKey: "year", yKey: "16-24" },
        { type: "column", xKey: "year", yKey: "25-34" },
        { type: "column", xKey: "year", yKey: "35-44" },
        { type: "column", xKey: "year", yKey: "45-54" },
        { type: "column", xKey: "year", yKey: "55-64" },
        { type: "column", xKey: "year", yKey: "65-74" },
        { type: "column", xKey: "year", yKey: "75+" },
      ],
    };
  },
};
</script>
