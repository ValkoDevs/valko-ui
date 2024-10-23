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
      'bg-light-3',
      'absolute',
      'z-10',
      'mt-1',
      'left-0',
      'dark:bg-dark-3'
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
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
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
