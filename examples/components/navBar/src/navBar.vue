<template>
    <div class="nav-box">
        <div @click="clickLeft" class="left" :style="{color:leftColor,'--left-color':leftColor}" tabIndex="1">
            <slot name="left"/>
        <div> <a>{{ props.leftText }}</a></div>
        </div>
        <div>{{ props.title }}</div>
        <div @click="clickRight" :style="{color:rightColor}" class="right">
            {{ props.rightText }}
            <span style="padding-top:3px;"><slot  name="right"/></span>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import jIcon from '../../icon';
import { createNamespace } from '../../../assets/utils/components';
const emit = defineEmits(['clickLeft','clickRight'])
const props = defineProps({
    title: { default: ' ', type: String },
    width: { default: '40px', type: String },
    leftText:{default:' ',type:String},
    leftColor:{default:'skyblue',type:String},
    rightColor:{default:'red',type:String},
    rightText:{default:'',type:String},
})

const clickLeft = ()=>{
    emit('clickLeft')
}
const clickRight = ()=>{
    emit('clickRight')
}
// const ns = createNamespace('nav-bar');

defineOptions({
  name: 'JNavBar',
});
</script>

<style lang="scss">
@import './navBar.scss';

</style>
