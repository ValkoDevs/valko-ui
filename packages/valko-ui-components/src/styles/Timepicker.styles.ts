import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-timepicker',
      'relative'
    ],
    input: [
      'vk-timepicker__input'
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
