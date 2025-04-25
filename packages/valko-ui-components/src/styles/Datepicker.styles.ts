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
      'bg-light-200',
      'absolute',
      'z-10',
      'mt-1',
      'left-0',
      'dark:bg-dark-800'
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
    flat: {},
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
