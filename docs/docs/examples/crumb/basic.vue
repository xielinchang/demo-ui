<template>
  <div>
    <j-crumb :brandsInfo="brandsInfo" @downLoadCrumb="downLoadCrumb" @loadcrumb="loadcrumb"></j-crumb>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const brandsInfo = reactive([
  { name: '面包1', showinfo: false },
  { name: '面包2', showinfo: false },
  { name: '面包3', showinfo: false },
  { name: '面包4', showinfo: false },
  { name: '面包5', showinfo: false },
]);
const downLoadCrumb = (brand) => {

}
const loadcrumb = (brand) => {

}
</script>