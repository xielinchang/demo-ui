export const selectEvent = {
  selectProps: {
    selected: {
      type: [Number, String],
      default: null,
      required: true,
    },
    options: {
      type: [Array],
      default: () => [
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
