<script setup lang="ts" name="">
  import jButton from './components/button';
  import jQueryPage from './components/queryPage'
  import {ref} from 'vue'
  //分页
    const currentPage= ref(1)
  const changePage=(val:number)=>{
      currentPage.value=val
  }
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
    :current-page="currentPage"
    :total="100"
    :page-size="5"
    :page-count="5"
    @change-page="changePage"
  ></j-query-page>
  </div>
  <div class="section">
    ...
  </div>
  </div>
 
</template>

<style scoped lang="scss">
.joy-design{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: 50px;
  box-sizing: border-box;
  .section{
    width: 400px;
    height: 200px;
    box-shadow:  0 2px 12px 0 rgb(0 0 0 / 10%);
    box-sizing: border-box;
    margin: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
}
  }
</style>
