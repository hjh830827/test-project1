<template>
  <div id="example-5" class="demo">
    change & value select -
    <select :value="selected1" @change="setSelect($event)">
      <option
        v-for="(item, index) in selectList"
        :key="index"
        :value="item.value"
        >{{ item.name }}</option
      >
    </select>
    <br />
    -----------------------------
    <br />
    <span>선택 value: {{ selected1 }}</span>
    <br /><br />
    =============================
    <br /><br />
    2. v-model select -
    <select v-model="selected2">
      <option
        v-for="(item, index) in selectList"
        :key="index"
        :value="item.value"
        >{{ item.name }}</option
      >
    </select>
    <br />
    ------------------------------
    <br />
    <span>선택 value: {{ selected2 }}</span>
    <v-snackbar v-model="snackbarFlag" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected1: "",
      selected2: "",
      selectList: [
        { name: "선택해주세요.", value: "" },
        { name: "name1", value: "a" },
        { name: "name2", value: "b" },
        { name: "name3", value: "c" },
      ],
      snackbarFlag: false,
      text: "",
      timeout: 2000,
    };
  },
  methods: {
    setSelect(event) {
      const asisSelect = this.selected1;
      // 변경 적용
      this.selected1 = event.target.value;
      if (this.selected1 === this.selectList[1].value) {
        this.text = this.selectList[1].value + "선택 불가!";
        this.snackbarFlag = true;
        // 원복
        this.selected1 = asisSelect;
      }
    },
  },
};
</script>
