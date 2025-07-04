import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-datepicker',
      'relative'
    ],
    content: [
      'vk-datepicker__content',
      'p-2',
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
}) as unknown as ReturnType<TV>
