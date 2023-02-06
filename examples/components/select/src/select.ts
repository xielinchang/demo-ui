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
  },
  selectEmit: ['change-select'],
};
