export const selectEvent = {
  selectProps: {
    selected: {
      type: [Number, String],
      default: null,
      required: true,
    },
    options: {
      // 解决报item类型错误
      type: Array as any,
      default: [
        {
          label: {
            type: String,
            default: '',
          },
          value: {
            type: [String, Number],
            default: null,
          },
        },
      ],
    },
    width: {
      type: Number,
      default: 240,
    },
    // 搜索框类型，默认下拉选择框，search为搜索选择框
    type: {
      type: String,
      default: 'search',
    },
  },
  selectEmit: ['change-select'],
};
