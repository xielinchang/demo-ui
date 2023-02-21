<template>
    <div>
        <j-nav-bar title="标题2" left-text="返回2" right-text="按钮2" @click-left="handleLeft"  @click-right="handleRight" left-arrow ></j-nav-bar>
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
