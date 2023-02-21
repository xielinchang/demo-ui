<template>
    <div>
        <j-nav-bar title="标题1" left-text="返回1" right-text="按钮1"  left-arrow width="400px" right-color="skyblue" left-color="red"></j-nav-bar>
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
