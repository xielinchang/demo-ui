<template>
  <div class="select"></div>
</template>
<script setup lang="ts" name="">
  import { selectEvent } from './select';
  const props = defineProps(selectEvent.selectProps);
  const emit = defineEmits(selectEvent.selectEmit);
</script>
<style lang="scss">
  @import './select.scss';
</style>
