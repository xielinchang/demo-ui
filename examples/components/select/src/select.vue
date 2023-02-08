<template>
  <div class="select-container">
    <div
      ref="box"
      :class="openFlag.valueOf() ? 'selecting' : 'select'"
      @click="openOptions()"
      :style="{ width: props.width + 'px' }"
    >
      <!-- 输入框 -->
      <div class="select-content">
        <input type="text" v-model="props.selected" disabled placeholder="请选择" />
      </div>
      <div class="select-arrow">
        <j-icon
          :class="openFlag.valueOf() ? 'up' : 'down'"
          name="arrow-down"
          color="#cccccc"
          size="13px"
        ></j-icon>
      </div>
    </div>
    <div
      class="select-options"
      :style="{ width: props.width + 'px' }"
      :class="openFlag.valueOf() ? '' : 'select-options-close'"
      @click.stop
    >
      <div class="select-options-icon"> </div>
      <div
        :style="{ color: props.selected === item.label ? '#21A0FF' : '' }"
        class="options-item"
        v-for="(item, index) in props.options"
        :key="index"
        @click="selectValue(item)"
        >{{ item.label }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="">
  import { selectEvent } from './select';
  import { ref, nextTick  } from 'vue';
  import { createNamespace } from '../../../assets/utils/components';

  import jIcon from '../../icon';
  const props = defineProps(selectEvent.selectProps);
  const emit = defineEmits(selectEvent.selectEmit);
  // 判断选项是否打开
  const openFlag = ref(false);
  // 打开或关闭选项框
  const openOptions = () => {
    openFlag.value = !openFlag.value;
  };
  // 选择选项
  const selectValue = (item: any) => {
    console.log(item);
    emit('change-select', item.label, item.value);
    openOptions();
  };
  const box = ref();
  // 点击其他地方时关闭选项框
  // 因为还没挂载,所以需要延迟使用,不然获取不到元素
  nextTick(() => {
    document.addEventListener('click', (e) => {
      if (!box.value.contains(e.target) && openFlag.value == true) {
        openOptions();
      }
    });
  });
  const ns = createNamespace('select');

defineOptions({
  name: 'JSelect',
});
</script>
<style lang="scss">
  @import './select.scss';
</style>
