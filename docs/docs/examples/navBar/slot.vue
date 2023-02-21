<template>
    <j-nav-bar @click-left="handleLeft" @click-right="handleRight" title="标题" left-text="返回" right-text="按钮">
        <template #left>
            <j-icon name="arrow-left" style="margin-top:4px;"></j-icon>
        </template>
        <template #right>
            <j-icon name="search" size="16px"></j-icon>
        </template>
    </j-nav-bar>
</template>

<script setup lang="ts">
const handleLeft = () => {
    alert('点击左边啦')
}
const handleRight = () => {
    alert('点击右边啦')
}
</script>