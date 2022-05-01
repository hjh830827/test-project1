<template>
  <!-- <router-view/> -->
  <v-main>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ExcelTestBySheetJs">엑셀다운</router-link> |
      <router-link to="/vtextfieldTest">한글막기</router-link> |
      <router-link to="/checkBoxAllSelect">전체선택</router-link>
    </div>
    <br /><br />
    <router-view />
  </v-main>
</template>
