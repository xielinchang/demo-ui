<template>
    <div style=" display: flex; justify-content: space-around;">
        <j-side-bar v-model:active-key="activeKey" @change="onChange">
            <j-sidebar-item title="标签名1"> </j-sidebar-item>
            <j-sidebar-item title="标签名2"> </j-sidebar-item>
            <j-sidebar-item title="标签名3"> </j-sidebar-item>
        </j-side-bar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeKey = ref(0)
const  onChange =(index)=>{
    alert('导航切换' +index +'序号(0开始)')
}
</script>