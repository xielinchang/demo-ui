<script setup lang="ts" name="">
  import Button from './components/Button.vue';
  import QueryPage from './components/QueryPage.vue'
  import {ref} from 'vue'
  //分页
  const currentPage= ref(1)
  const changePage=(val:Number)=>{
      currentPage.value=val
  }
</script>

<template>
  <div class="joy-design">
    <div class="section">
      <Button types="primary">按钮</Button>
    </div>
  <div class="section">
    <QueryPage
    :current-page="currentPage"
    :total="100"
    :page-size="5"
    :page-count="5"
    @change-page="changePage"
  ></QueryPage>
  </div>
  <div class="section">

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
  .section{
    width: 400px;
    height: 200px;
    box-shadow:  0 2px 12px 0 rgb(0 0 0 / 10%);
    padding-top: 100px; 
    transform: translateY(-100px);
    box-sizing: border-box;
    margin: 0 10px;
}
  }
</style>
