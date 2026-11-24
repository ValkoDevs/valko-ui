import { tv } from 'tailwind-variants'

const timepicker = tv({
  slots: {
    container: [
      'vk-timepicker',
      'relative'
    ],
    input: [
      'vk-timepicker__input',
      'group-data-[invalid]:border-negative',
      'group-data-[invalid]:text-negative'
    ],
    content: [
      'vk-timepicker__content',
      'p-4',
      'bg-surface-container-high',
      'shadow-el2',
      'absolute',
      'z-10',
      'mt-1',
      'left-0'
    ]
  },
  variants: {
    variant: {
      filled: {},
      ghost: {},
      outlined: {}
    },
    color: {
      primary: {
        input: ['focus-within:border-primary']
      },
      secondary: {
        input: ['focus-within:border-secondary']
      },
      positive: {
        input: ['focus-within:border-positive']
      },
      accent: {
        input: ['focus-within:border-accent']
      },
      warning: {
        input: ['focus-within:border-warning']
      },
      negative: {
        input: ['focus-within:border-negative']
      }
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    shape: {
      rounded: {
        content: [
          'rounded-2xl'
        ]
      },
      soft: {
        content: [
          'rounded-lg'
        ]
      },
      square: {
        content: [
          'rounded-none'
        ]
      }
    }
  }
})

export default timepicker
export type TimepickerSlots = typeof timepicker.slots
