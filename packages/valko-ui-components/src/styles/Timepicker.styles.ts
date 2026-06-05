import { tv } from 'tailwind-variants'

const timepicker = tv({
  slots: {
    input: [
      'vk-timepicker__input'
    ]
  },
  variants: {
    variant: {
      filled: {},
      ghost: {},
      outlined: {}
    },
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {}
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    shape: {
      rounded: {},
      soft: {},
      square: {}
    }
  }
})

export default timepicker
export type TimepickerSlots = typeof timepicker.slots
