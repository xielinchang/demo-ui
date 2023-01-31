<template>
  <div>
    <button :class="types">
      <span>
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    types: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style>
    button{
        width: 100px;
        height: 30px;
        background: rgba(212, 210, 210,0.6);
        text-align: center;
        line-height: 30px;
        border-radius: 4px;
    }
    .primary{
        color: rgb(65, 157, 255);
    }
</style>