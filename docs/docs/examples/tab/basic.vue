<template>
    <div style=" display: flex; justify-content: space-around;">
        <j-tab curActive="second"  fontColor="red">
            <j-tab-item label="标签一" name="first">标签一内容</j-tab-item>
            <j-tab-item label="标签二" name="second">标签二内容</j-tab-item>
            <j-tab-item label="标签三" name="third">标签三内容</j-tab-item>
        </j-tab>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>