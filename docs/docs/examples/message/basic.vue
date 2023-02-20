<script setup lang="ts">
  import { jMessage } from '@joy';

  const open = () => {
    jMessage({ duration: 1000, content: 'This is a message' });
  };
</script>

<template>
  <j-button @click="open()">信息</j-button>
</template>
