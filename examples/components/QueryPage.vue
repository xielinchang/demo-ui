<template>
  <div class="query-page">
    <div
      class="query-btn"
      :style="{
        width: props.itemStlye.width == null ? '27px' : props.itemStlye.width + 'px',
        height: props.itemStlye.height == null ? '27px' : props.itemStlye.height + 'px',
      }"
      @click="prevEvent"
      >＜</div
    >
    <div
      v-for="(item, index) in pageList"
      :key="index"
      class="page-mian-item"
      :style="justStlye(item, index)"
      @click="itemEvent(item, index)"
    >
      {{ item }}
    </div>
    <div
      class="query-btn"
      :style="{
        width: props.itemStlye.width == null ? '27px' : props.itemStlye.width + 'px',
        height: props.itemStlye.height == null ? '27px' : props.itemStlye.height + 'px',
      }"
      @click="nextEvent"
      >＞</div
    >
  </div>
</template>
  
  <script setup lang="ts" name="">
import { computed } from '@vue/runtime-core';
const props = defineProps({
  // 当前页数
  currentPage: {
    type: Number,
    default: 1,
  },
  // 总条目数
  total: {
    type: Number,
    default: 10,
    required: true,
  },
  // 每页显示的条目个数
  pageSize: {
    type: Number,
    default: 5,
    required: true,
  },
  // 页码按钮数量
  pageCount: {
    type: Number,
    default: 5,
    required: true,
  },
  // 分页元素的尺寸
  itemStlye: {
    type: Object,
    default: () => {
      return {
        // 元素的宽度
        width: 27,
        // 元素的高度
        height: 27,
        // 元素的圆角
        borderRadius: 4,
        // 元素的边框宽度
        borderWith: 1,
        // 元素的字体大小,粗细
        fontSize: [14, 500],
        // 元素的默认边框颜色
        borderDefaultColor: '#666677',
        // 元素的激活边框颜色
        borderActiveColor: '#FF6000',
        // 元素的默认背景颜色
        backgroundColor: '#ffffff',
        // 元素的激活背景颜色
        backgroundActiveColor: '#FF6000',
        // 元素的默认字体颜色
        defaultColor: '#666666',
        // 元素的激活字体颜色
        activeColor: '#ffffff',
        // 元素的间距
        marginRight: 12,
        // 元素边框样式
        borderStyle: 'solid',
      };
    },
  },
  // 省略号是否需要边框  true：关闭省略号边框，false：打开省略号边框
  borderWidthShow: {
    type: Boolean,
    default: false,
  },
  // 是否打开当处于第一页时自动隐藏上一页，处于最后一页时，自动隐藏下一页 true打开，false关闭
  chooseShow: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['change-page']);
// 生成一个分页数组
const pageList = computed(() => {
  // 总的页数
  const pageTotal = Math.ceil(props.total / props.pageSize);
  // 总的页数数组
  const list = [];
  for (let i = 1; i <= pageTotal; i++) {
    list.push(i);
  }
  // 展示的页数数组
  if (props.pageCount < list.length) {
    // 计算分页按钮总数的中间位置
    const center = Math.ceil(props.pageCount / 2);
    // 当前页处于靠近首页的位置
    if (props.currentPage >= 1 && props.currentPage <= center) {
      const firstList = [];
      if (props.pageCount === 1) {
        firstList.push(1);
      } else {
        for (let i = 0; i <= props.pageCount; i++) {
          if (i < props.pageCount - 1) {
            firstList.push(1 + i);
          } else if (i === props.pageCount - 1) {
            firstList.push('...');
          } else {
            firstList.push(pageTotal);
          }
        }
      }
      return firstList;
    } else if (props.currentPage <= pageTotal && props.currentPage >= pageTotal - center + 1) {
      // 当前页处于靠近尾页的位置
      const firstList = [];
      if (props.pageCount === 1) {
        firstList.push(pageTotal);
      } else {
        for (let i = props.pageCount; props.pageCount >= i && i >= 0; i--) {
          if (i > props.pageCount - 1) {
            firstList.push(1);
          } else if (i === props.pageCount - 1) {
            firstList.push('...');
          } else {
            firstList.push(pageTotal - i);
          }
        }
      }
      return firstList;
    } else {
      // 当前页处于中间页的位置
      const firstList = [];
      firstList.push(1);
      firstList.push('...');
      const justCenter = Math.ceil((props.pageCount - 2) / 2);
      for (let i = 1; i <= props.pageCount - 2; i++) {
        if (i < justCenter) {
          firstList.push(props.currentPage - (justCenter - i));
        } else if (i === justCenter) {
          firstList.push(props.currentPage);
        } else {
          firstList.push(props.currentPage + (i - justCenter));
        }
      }
      firstList.push('...');
      firstList.push(pageTotal);
      return firstList;
    }
  } else {
    return list;
  }
});
// 分页元素的按钮状态
const justStlye = computed(() => {
  return (item: any, index: number) => {
    return {
      // 元素的宽度
      width: props.itemStlye.width == null ? '27px' : props.itemStlye.width + 'px',
      // 元素的高度
      height: props.itemStlye.height == null ? '27px' : props.itemStlye.height + 'px',
      // 元素的圆角
      borderRadius:
        props.itemStlye.borderRadius == null ? '4px' : props.itemStlye.borderRadius + 'px',
      // 元素的边框宽度
      borderWidth:
        item === '...'
          ? props.borderWidthShow
            ? '0px'
            : props.itemStlye.borderWith == null
            ? '1px'
            : props.itemStlye.borderWith + 'px'
          : props.itemStlye.borderWidth == null
          ? '1px'
          : props.itemStlye.borderWith + 'px',
      // 元素的边框线条样式
      borderStyle: props.itemStlye.borderStyle == null ? 'solid' : props.itemStlye.borderStyle,
      // 元素的边框颜色
      borderColor:
        item === props.currentPage
          ? props.itemStlye.borderActiveColor == null
            ? '#FF6000'
            : props.itemStlye.borderActiveColor
          : props.itemStlye.borderDefaultColor
          ? '#ffffff'
          : props.itemStlye.borderDefaultColor,
      // 元素的背景颜色
      backgroundColor:
        item === props.currentPage
          ? props.itemStlye.backgroundActiveColor == null
            ? 'FF6000'
            : props.itemStlye.backgroundActiveColor
          : props.itemStlye.backgroundColor == null
          ? '#ffffff'
          : props.itemStlye.backgroundColor,
      // 元素的字体颜色
      color:
        item === props.currentPage
          ? props.itemStlye.activeColor == null
            ? '#ffffff'
            : props.itemStlye.activeColor
          : props.itemStlye.defaultColor == null
          ? '#666666'
          : props.itemStlye.defaultColor,
      // 元素的行高
      lineHeight:
        props.itemStlye.height == null
          ? '25px'
          : props.itemStlye.height - props.itemStlye.borderWith * 2 + 'px',
      // 元素的字体大小
      fontSize: props.itemStlye.fontSize == null ? '14px' : props.itemStlye.fontSize[0] + 'px',
      // 元素的粗细
      fontWeight: props.itemStlye.fontSize == null ? 500 : props.itemStlye.fontSize[1],
      // 元素的间距
      marginRight:
        props.itemStlye.marginRight == null ? '12px' : props.itemStlye.marginRight + 'px',
    };
  };
});
const prevEvent = () => {
  /* 函数名要对应，要完全相同，'-'和驼峰不能相等 */
  if (props.currentPage > 1) {
    emit('change-page', props.currentPage - 1);
  }
};
const nextEvent = () => {
  // 总的页数
  const pageTotal = Math.ceil(props.total / props.pageSize);
  if (props.currentPage < pageTotal) {
    emit('change-page', props.currentPage + 1);
  }
};
const itemEvent = (item: any, index: number) => {
  // 按钮的中间数
  let center = Math.ceil((props.pageCount + 1) / 2);
  // 总的页数
  const pageTotal = Math.ceil(props.total / props.pageSize);
  if (item !== '...' && item !== props.currentPage) {
    emit('change-page', item);
  } else if (item === '...') {
    if (index + 1 < center) {
      if (props.currentPage <= 5) {
        emit('change-page', 1);
      } else {
        emit('change-page', props.currentPage - 5);
      }
    } else {
      if (pageTotal - props.currentPage <= 5) {
        emit('change-page', pageTotal);
      } else {
        emit('change-page', props.currentPage + 5);
      }
    }
  }
};
</script>
  
  <style lang="scss">
.query-page {
  width: 380px;
  height: 30px;
  display: flex;
  justify-content: center;
  .page-mian-item {
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
  }
  .query-btn {
    border-radius: 4px;
    border: 1px solid rgb(255, 162, 75);
    background: rgb(253, 140, 1);
    margin: 0px 10px;
    color: white;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>
  