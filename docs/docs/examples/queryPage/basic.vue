<script setup lang="ts" name="">
  import { ref } from 'vue';
  const currentPage = ref(1);
  const changePage = (val: number) => {
    currentPage.value = val;
  };
  const pageSize = ref(100);
</script>
<template>
  <div>
    <j-query-page
      style="width=100%"
      :page-count="6"
      :current-page="currentPage"
      :total="2000"
      :page-size="pageSize"
      @change-page="changePage"
    ></j-query-page>
  </div>
</template>
