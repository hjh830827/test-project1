<template>
  <div id="example-3">
    수신동의 :
    <input type="checkbox" value="all" v-model="allSelected" />
    <label for="all">전체</label>
    <template v-for="(item, index) in checkList">
      <input
        type="checkbox"
        :id="item"
        :value="item"
        v-model="selectList"
        :key="index"
      />
      <label :for="item" :key="index"> {{ item }}</label>
    </template>
    <br />
    <span>check: {{ selectList }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: ["e-mail", "SMS", "test1"],
      selectList: [],
    };
  },
  computed: {
    allSelected: {
      //getter
      get: function() {
        return this.checkList.length === this.selectList.length;
      },
      //setter
      set: function(e) {
        this.selectList = e ? this.checkList : [];
      },
    },
  },
};
</script>
