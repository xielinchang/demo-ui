<template>
    <div>
        <j-crumb :brandsInfo="brandsInfo" @downLoadCrumb="downLoadCrumb" @loadcrumb="loadcrumb"></j-crumb>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const brandsInfo = reactive([
    { name: '面包1', showinfo: true },
    { name: '面包2', showinfo: true },
    { name: '面包3', showinfo: true },
    { name: '面包4', showinfo: true },
    { name: '面包5', showinfo: true },
]);
const downLoadCrumb = (brand) => {

}
const loadcrumb = (brand) => {

}

</script>