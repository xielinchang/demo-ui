<script setup lang="ts">
  import { jMessage } from '@joy';

  const open = (type: string) => {
    jMessage[type]('This is a message');
  };
</script>

<template>
  <j-button @click="open('info')">信息</j-button>
  <j-button type="success" @click="open('success')">成功</j-button>
  <j-button type="warning" @click="open('warning')">警告</j-button>
  <j-button type="error" @click="open('error')">错误</j-button>
  <j-button type="primary" @click="open('loading')">加载中</j-button>
</template>
