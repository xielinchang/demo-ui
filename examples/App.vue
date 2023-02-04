<script setup lang="ts" name="">
  import jButton from './components/button';
  import jQueryPage from './components/queryPage';
  import { ref } from 'vue';
  //分页
  const currentPage = ref(1);
  const changePage = (val: number) => {
    currentPage.value = val;
  };
</script>

<template>
  <div class="joy-design">
    <div class="section">
      <j-button type="primary">Primary</j-button>
      <j-button type="primary" disabled>Primary</j-button>
      <j-button type="primary" text>Primary</j-button>
      <j-button size="large">Large</j-button>
    </div>
    <div class="section">
      <j-query-page
        style="width=100%"
        :current-page="currentPage"
        :total="1200"
        :page-size="6"
        :page-count="5"
        :border-width-show="true"
        :item-stlye="{
          width: 30,
          height: 30,
          borderDefaultColor: '#ddd',
          borderStyle: 'dotted',
        }"
        @change-page="changePage"
      ></j-query-page>
    </div>
    <div class="section"> ... </div>
  </div>
</template>

<style scoped lang="scss">
  .joy-design {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    position: relative;
    top: 50px;
    box-sizing: border-box;
    .section {
      width: 650px;
      height: 200px;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      box-sizing: border-box;
      margin: 10px 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 50px 0;
    }
  }
</style>
