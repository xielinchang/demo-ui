<script lang="ts" setup>
import { ref } from 'vue';
import jButton from '../../button';
const submit = (a) => {
  console.log(a);
  inputcontent = ''
}
const props = defineProps({
  inputmessage: {
    type: String,
    default: ''
  },

})
let inputcontent: any = ref()
defineOptions({
  name: ' JInput',
});
</script>

<template>
  <input type="text" placeholder="请输入内容" class="inputbox" v-model="inputcontent">
  <j-button type="primary" @click="submit(inputcontent)">确认</j-button>
</template>


<style scoped lang="scss">
.inputbox {
  width: 240px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-right: 10px;

  &::focus {
    border-color: skyblue;
    box-shadow: 0 0 3px skyblue;
  }

}
</style>