<template>
  <div class="brandbox">
    <ul class="brand">
      <li v-for="(brands, index) in brandsInfo" :key="index" @click="changeCrumb(brands)"><a>{{ brands.name }}</a></li>
    </ul>
    <ul class="crumb">
      <li v-for="(brands, index) in brandsInfo" :key="index" @click="closeCrumb(brands)" class="singlecrumb "
        v-show="brands.showinfo">{{
  brands.name
        }}<button class="button">X</button></li>
    </ul>
  </div>
</template>


<script lang="ts" setup>
defineProps<{
  brandsInfo: {}
}>()

const changeCrumb = (brands) => {
  brands.showinfo = true;
}
const closeCrumb = (brands) => {
  brands.showinfo = false;
}
// const emitfn = defineEmits(['handercrumbtrue'])
// const closeCrumb = (index) => {
//   emitfn('handercrumbtrue', index)
// }
defineOptions({
  name: 'crumb',
});
</script>

<style scoped lang="scss">
@import url(./crumb.scss);
</style>
