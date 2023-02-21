<template>
    <div>
        <j-nav-bar title="标题" left-text="返回" right-text="按钮" @click-left="handleLeft" @click-right="handleRight"></j-nav-bar>
        <j-nav-bar title="标题1" left-text="返回1" right-text="按钮" right-color="skyblue" left-color="red"></j-nav-bar>

    </div>
</template>

<script setup lang="ts">

const handleLeft = () => {
    alert('左边被点击啦')
}

const handleRight = () => {
    alert('右边被点击啦')
}
</script>
