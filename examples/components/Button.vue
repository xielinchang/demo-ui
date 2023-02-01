<script setup lang="ts" name="">
  defineProps<{ types: string }>();
</script>

<template>
  <div>
    <button :class="types">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/scss/global.scss';

  button {
    width: 100px;
    height: 30px;
    font-size: $font-size-normal;
    background-color: rgb(58, 166, 255);
    border: 0.1px solid rgb(28, 149, 249);
    text-align: center;
    line-height: 30px;
    padding: 0;
    border-radius: 4px;
    color: white;
    outline: none;
    &:hover {
      cursor: pointer;
      background-color: rgb(58, 166, 255);
      border: 0.1px solid rgb(28, 149, 249);
      background-color: $bg-color;
      @include box-shadow;
    }
  }
</style>
