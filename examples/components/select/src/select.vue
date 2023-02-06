<template>
  <div class="select-container">
    <div :class="openFlag.valueOf() ? 'selecting' : 'select'" @click="openOptions()">
      <div class="select-content">
        <input type="text" disabled placeholder="请选择" />
      </div>
      <div class="select-arrow">
        <j-icon
          :class="openFlag.valueOf() ? 'up' : 'down'"
          name="down"
          color="#cccccc"
          size="14px"
        ></j-icon>
      </div>
    </div>
    <div class="select-options" :class="openFlag.valueOf() ? '' : 'select-options-close'">
      <div class="select-options-icon"> </div>
      <div class="options-item" v-for="(item, index) in options" :key="index">{{ item }} </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="">
  import { selectEvent } from './select';
  import { ref } from 'vue';
  import jIcon from '../../icon';
  const props = defineProps(selectEvent.selectProps);
  const emit = defineEmits(selectEvent.selectEmit);
  const options = ['测试用例1', '测试用例2', '测试用例3'];
  const openFlag = ref(false);
  const openOptions = () => {
    openFlag.value = !openFlag.value;
    console.log(openFlag.value);
  };
</script>
<style lang="scss">
  @import './select.scss';
</style>
