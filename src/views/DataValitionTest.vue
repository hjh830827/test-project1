<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-subheader>testobj</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="a" v-model="testObj.a"></v-text-field>
        <v-text-field label="b" v-model="testObj.b"></v-text-field>
        <v-text-field label="c" v-model="testObj.c"></v-text-field>
      </v-col>
    </v-row>
    ---------------------------------------------------
    <v-row>
      <v-col cols="4">
        <v-subheader>test2obj</v-subheader>
      </v-col>
      <v-col cols="8">
        <v-text-field label="a" v-model="test2Obj.a"></v-text-field>
        <v-text-field label="b" v-model="test2Obj.b"></v-text-field>
        <v-text-field label="c" v-model="test2Obj.c"></v-text-field>
      </v-col>
    </v-row>
    ---------------------------------------------------
    <br />
    <v-btn @click="addTableData()">테이블 데이터 추가</v-btn>
    <v-btn @click="delTableData()">테이블 데이터 삭제</v-btn>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      hide-default-footer
    ></v-data-table>
    ---------------------------------------------------
    <br />

    <v-btn :disabled="testObj.a === ''">testObj - a</v-btn> -
    <v-btn :disabled="testObj.b === ''">testObj - b</v-btn> -
    <v-btn :disabled="testObj.c === ''">testObj - c</v-btn> -
    <v-btn :disabled="disabledTestObj">testObj</v-btn>
    <br /><br />
    <v-btn :disabled="test2Obj.a === ''">test2Obj - a</v-btn> -
    <v-btn :disabled="test2Obj.b === ''">test2Obj - b</v-btn> -
    <v-btn :disabled="test2Obj.c === ''">test2Obj - c</v-btn> -
    <v-btn :disabled="disabledTest2Obj">test2Obj</v-btn>
    <br /><br />
    <v-btn :disabled="disabledAll">all</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testObj: { a: "", b: "", c: "" },
      test2Obj: { a: "", b: "", c: "" },
      headers: [
        {
          text: "Dessert (100g serving)",
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
      ],
      desserts: [],
      addData: {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
      },
    };
  },
  computed: {
    disabledTestObj() {
      return (
        Object.values(this.testObj).filter((item) => item === "").length > 0
      );
    },
    disabledTest2Obj() {
      return (
        Object.values(this.test2Obj).filter((item) => item === "").length > 0
      );
    },
    disabledAll() {
      return (
        this.disabledTestObj ||
        this.disabledTest2Obj ||
        this.desserts.length === 0
      );
    },
  },
  methods: {
    addTableData() {
      this.desserts.push(this.addData);
    },
    delTableData() {
      this.desserts.pop();
    },
  },
};
</script>
