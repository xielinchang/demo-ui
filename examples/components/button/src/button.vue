<script lang="ts" setup>
  import { computed } from 'vue';
  import { createNamespace } from '../../../assets/utils/components';
  import { ButtonProps } from './button';
  import JIcon from '../../icon';

  const props = defineProps(ButtonProps);
  const style = computed(() =>
    // 若传了颜色color属性则以其为准
    props.color
      ? {
          '--j-button-bg-color': props.color,
          '--j-button-text-color': 'var(--j-color-white)',
          '--j-button-border-color': props.color,
        }
      : {},
  );
  const { createBEM } = createNamespace('button');

  defineOptions({
    name: 'JButton',
  });
</script>

<template>
  <button
    :class="[
      createBEM(),
      type && createBEM(`--${type}`),
      size && createBEM(`--${size}`),
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      text && 'is-text',
      bg && 'is-bg',
      iconPosition && `icon-${iconPosition}`,
    ]"
    :style="{ color: textColor, ...style }"
    :disabled="disabled"
  >
  <JIcon v-if="!!icon" :name="icon" class="icon" />
    <div v-if="!circle" :class="[createBEM('content')]">
      <slot />
    </div>
  </button>
</template>

<style lang="scss">
  @import './button.scss';
</style>
