<script setup lang="ts" name="">
  import Button from './components/Button.vue';
  import QueryPage from './components/QueryPage.vue'
  import {ref} from 'vue'
  const currentPage= ref(1)
  const changePage=(val:Number)=>{
    console.log(currentPage.value)
      currentPage.value=val
  }
</script>

<template>
  <Button types="primary">按钮</Button>
  <QueryPage
    :current-page="currentPage"
    :total="100"
    :page-size="5"
    :page-count="5"
    @change-page="changePage"
  ></QueryPage>
</template>

<style scoped></style>
