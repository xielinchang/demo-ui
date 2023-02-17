
<template>
    <div>
        <div class="tabs-nav-wrap" name="header" ref="navWrap">
            <div class="tabs-inv-bar" :style="barStyle"> </div>
            <div class="tabs-tab" v-for="(item, index) in data.tabList" :key="index"
                :style="{ '--active-color': fontColor }"
                :class="[{ 'active': data.current === item.name }, { 'disabledStyle':findDisabled(index) }]"
                @click="handleCurrent(index, item)" @disabled="onDisabled" ref="tabItem">
                {{ item.label }}
            </div>

        </div>

        <div class="item-content">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import { BlockList } from 'net';
import {
    reactive, computed, nextTick,
    ref,
    onMounted,
    provide,
    getCurrentInstance,
    watch
} from 'vue'
import { useSlots } from 'vue'
const slots = useSlots()
const props = defineProps({
    curActive: {
        type: String,
        default: 0
    },
    //用来表示高亮的时候的文字颜色
    fontColor: {
        type: String,
        default: 'skyblue'
    },
    //下滑bar的颜色
    barColor: {
        type: String,
        default: 'red'
    },
    barWidth: String,
    barHeight: {
        type: String,
        default: '3px'
    }
})

//将初始的数据获取
onMounted(() => {
    console.log(slots.default())
    bar.barHeight = props.barHeight
    bar.barColor = props.barColor
    navData.name = props.curActive
    let length = slots.default().length
    let itemData = slots.default()
    for (let i = 0; i < length; i++) {
        //获取数据
        data.tabList.push({
            label: itemData[i].props.label,
            name: itemData[i].props.name
        })
        // console.log(instance.refs.navWrap.children)
        if (itemData[i].props.disabled !== undefined) { data.disabledId.push(i) }
    }
    data.current = props.curActive
})
const emit = defineEmits(['disabled'])

const navData = reactive({
    name: '',
    label: '',
    curActive: 0,
})

const data = reactive({
    tabList: [] as object[],
    current: '',
    disabledId: []
})
//将每次高亮数据传递更新
provide('temps', data.tabList)
provide('navData', navData)
const handleCurrent = (index: number, item: any) => {
    if(!findDisabled(index)){
        data.current = item.name,
        navData.curActive = index,
        navData.name = item.name
    navData.label = item.label
    }
    //查看是否有disabled
    for (let i = 0; i < data.disabledId.length; i++) {
        if (data.tabList[i].name == item.name) {
            emit('disabled', item)
        }
    }
}

const findDisabled = (e:number)=>{
    if(data.disabledId.findIndex(item=>item===e)!==-1){return true}
    else return false
}
//下滑bar的样式
const bar = reactive({
    barWidth: 0,
    barOffset: 0,
    barColor: '',
    barHeight: '',
})
//返回tabbar的样式 ,不是个函数！！！
const barStyle = computed(() => {
    return {
        width: `${bar.barWidth}px`,
        transform: `translate3d(${bar.barOffset}px,0px,0px)`,
        background: `${bar.barColor}`,
        height: `${bar.barHeight}`,
    }
})
const instance = getCurrentInstance()
const updateBar = () => {
    nextTick(() => {
        const elemTabs = instance.refs.navWrap.querySelectorAll('.tabs-tab')
        //获取当前元素索引值
        const index = data.tabList.findIndex(nav => nav.name === data.current)
        // //获取当前选中的元素
        const elemTab = elemTabs[index]
        bar.barWidth = elemTab ? elemTab.offsetWidth : 0
        //计算需要移动的距离,当index > 0时进行累加
        if (index > 0) {
            if (!findDisabled(index)) //如果不是禁用的
            {
                let offset = 0
                for (let i = 0; i < index; i++) {
                    offset += elemTabs[i].offsetWidth + 16
                }
                bar.barOffset = offset
            }

        } else {
            if (!findDisabled(index)){bar.barOffset = 0}
        }

    })

}
//每次检测到当前的高亮发生变化后，都更新一下
watch(() => data.current, () => {
    updateBar()
})

</script>
<style scoped lang='scss'>
.tabs-nav-wrap {
    position: relative;
    // border-bottom: 1px solid #dcdee2;
    margin-bottom: 16px;
}

.tabs-tab {
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px 16px;
    cursor: pointer;
}

.tabs-inv-bar {
    position: absolute;
    left: 0px;
    bottom: 0;
    transition: transform .2s ease-in-out;;
    border-radius: 3px;
}

.active {
    // transition: all 0.1s linear;
    --active-color: black;
    color: var(--active-color);
}

.disabledStyle {
    color: grey;
}

.item-content {
    padding-top: 10px;
}
</style>
