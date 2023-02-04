import type { PropType } from 'vue';
export const queryPageEvent = {
  queryPageProps: {
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
          fontSize: [16, 500],
          // 元素的默认边框颜色
          borderDefaultColor: '#fff',
          // 元素的激活边框颜色
          borderActiveColor: '#FF6000',
          // 元素的默认背景颜色
          backgroundColor: '#F6F6F6',
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
    // 是否打开鼠标移至...的标题提示，true:打开，false，关闭
    hoverShow: {
      type: Boolean,
      default: true,
    },
    // 是否打开跳转第几页，true:打开，false，关闭
    jumperShow: {
      type: Boolean,
      default: true,
    },
    // 是否打开总页数，true:打开，false，关闭
    totalShow: {
      type: Boolean,
      default: true,
    },
  },
  queryPageEmit: ['change-page'],
};
