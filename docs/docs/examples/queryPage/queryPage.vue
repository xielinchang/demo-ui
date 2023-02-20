<script setup lang="ts" name="">
  import { ref } from 'vue';
  const currentPage = ref(1);
  const changePage = (val: number) => {
    currentPage.value = val;
  };
  const changePageSize = (val: number) => {
    pageSize.value = val;
  };
  const sizeOptions = [
    { label: '100条/页', value: 100 },
    { label: '200条/页', value: 200 },
    { label: '300条/页', value: 300 },
  ];
  const pageSize = ref(5);
</script>
<template>
  <div>
    <j-query-page
      style="width=100%"
      :current-page="currentPage"
      :total="100"
      :page-size="pageSize"
      :page-count="5"
      :jumper-show="true"
      :total-show="true"
      :size-options="sizeOptions"
      @change-page="changePage"
      @change-page-size="changePageSize"
    ></j-query-page>
  </div>
</template>
