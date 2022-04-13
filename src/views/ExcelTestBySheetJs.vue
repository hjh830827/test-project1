<template>
  <div class="text-center">
    <button type="button" @click="excelDown">엑셀다운</button>
  </div>
</template>

<script>
export default {
  watch: {
    picked() {
      console.log("watch : ", this.picked);
    },
  },
  data() {
    return {
      picked: "",
    };
  },
  methods: {
    async excelDown() {
      const xlsx = require("xlsx");
      // 엑셀 파일 생성
      const book = xlsx.utils.book_new();

      // data get > 실 개발시 api 호출
      const fruitDataByAoa = await this.getFruitDataByAoa();
      const fruitDataByJson = await this.getFruitDataByJson();

      // sheet 생성 - aoa_to_sheet 방식
      const worksheetByAoa = xlsx.utils.aoa_to_sheet(fruitDataByAoa);

      // sheet 생성 - json_to_sheet 방식
      const worksheetByJson = xlsx.utils.json_to_sheet(fruitDataByJson);

      // 엑셀 파일에 sheet set(엑셀파일, 시트데이터, 시트명)
      xlsx.utils.book_append_sheet(book, worksheetByAoa, "aoa");
      xlsx.utils.book_append_sheet(book, worksheetByJson, "json");

      // 엑셀 다운로드
      xlsx.writeFile(book, "fruit.xlsx");
    },
    // aoa는 행열 데이터를 엑셀과 동일하게 get
    getFruitDataByAoa() {
      let arr = [];
      arr.push(["이름", "칼로리", "지방", "탄수화물", "단백질", "철분"]);
      arr.push(["바나나", "159", "6.0", "24", "4.0", "1"]);
      arr.push(["사과", "237", "9.0", "37", "2.3", "4"]);
      arr.push(["오렌지", "78", "1.2", "45", "1.1", "3.3"]);
      return arr;
    },
    getFruitDataByJson() {
      let arr = [];
      arr.push({
        이름: "바나나",
        칼로리: 159,
        지방: 6.0,
        탄수화물: 24,
        단백질: 4.0,
        철분: "1",
      });
      arr.push({
        이름: "사과",
        칼로리: 237,
        지방: 9.0,
        탄수화물: 37,
        단백질: 2.3,
        철분: "4",
      });
      arr.push({
        이름: "오렌지",
        칼로리: 78,
        지방: 1.2,
        탄수화물: 45,
        단백질: 1.1,
        철분: "3.3",
      });
      return arr;
    },
  },
};
</script>
