<script setup lang="ts" name="">
  import jButton from './components/button';
  import jIcon from './components/icon';
  import jQueryPage from './components/queryPage';
  import jSelect from './components/select';
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
        :total="1000"
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
    <djv class="section">
      <j-icon name="zoom-in" color="var(--van-color-primary)" size="var(--van-font-size-large)" />
      <j-icon name="zoom-in" color="#ff9f00" :size="22" />
      <j-icon name="zoom-in" color="#f44336" size="28px" />
      <j-icon name="zoom-in" color="#00c48f" size="2.5rem" />
    </djv>
    <div class="section"> 
      <j-select>
        
      </j-select>
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
      display: flex;
      align-items: center;
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
