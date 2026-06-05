import { tv } from 'tailwind-variants'

const dateTimePicker = tv({
  slots: {
    dateSection: [
      'vk-datetimepicker__date-section'
    ],
    timeSection: [
      'vk-datetimepicker__time-section'
    ],
    backAction: [
      'vk-datetimepicker__back-action',
      'flex',
      'items-center',
      'mb-2'
    ],
    backButton: [
      'vk-datetimepicker__back-button',
      'flex',
      'items-center',
      'gap-1'
    ],
    actions: [
      'vk-datetimepicker__actions',
      'flex',
      'justify-end',
      'mt-2'
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
      negative: {},
      surface: {}
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

export default dateTimePicker
export type DateTimePickerSlots = typeof dateTimePicker.slots
