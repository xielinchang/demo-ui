export const DialogProps = {
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  draggable: {
    type: Boolean,
  },
  beforeClose: {
    type: Function,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  top: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  width: {
    type: [String, Number],
  },
  center: {
    type: Boolean,
  },
};
