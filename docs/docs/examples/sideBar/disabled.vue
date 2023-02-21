<template>
    <div  style=" display: flex; justify-content: space-around;">
        <j-side-bar v-model:active-key="activeKey" @disabled="sideBarDisabled" abortColor="pink" >
            <j-sidebar-item title="序列1"> </j-sidebar-item>
            <j-sidebar-item title="序列2" disabled > </j-sidebar-item>
            <j-sidebar-item title="序列3"> </j-sidebar-item>
        </j-side-bar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeKey = ref(0)
const sideBarDisabled = (e) => {
    alert(e + ' 被禁用啦')
}
</script>