<template>
  <div class="brandbox">
    <ul class="brand">
      <li v-for="(brands, index) in brandsInfo" :key="index" @click="changeCrumb(brands)"
        ><a>{{ brands.name }}</a></li
      >
    </ul>
    <ul class="crumb">
      <li
        v-for="(brands, index) in brandsInfo"
        :key="index"
        @click="closeCrumb(brands)"
        class="singlecrumb"
        v-show="brands.showinfo"
        >{{ brands.name }}<j-icon size="12px" name="close"></j-icon
      ></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import JIcon from '../../icon';
  defineProps<{
    brandsInfo: {};
  }>();

  const changeCrumb = (brands: any) => {
    brands.showinfo = true;
  };
  const closeCrumb = (brands: any) => {
    brands.showinfo = false;
  };
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
