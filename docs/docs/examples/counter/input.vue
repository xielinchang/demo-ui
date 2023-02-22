<template>
  <div>
    <j-counter
      type="input"
      :value="currentNum"
      :min-num="10"
      :max-num="999"
      @change-count="changeCount"
    >
    </j-counter>
  </div>
</template>
<script setup lang="ts" name="">
  import { ref } from 'vue';
  const currentNum = ref(20);
  const changeCount = (e: number) => {
    console.log(e);
  };
</script>
