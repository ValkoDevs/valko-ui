import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    nav: [
      'vk-pagination__nav',
      'p-2',
      'inline-flex',
      '-space-x-px',
      'shadow-sm',
      'shadow-light-4',
      'dark:shadow-dark-5'
    ],
    button: [
      'vk-pagination__button',
      'flex',
      'justify-center',
      'items-center'
    ],
    arrows: [
      'vk-pagination__arrows',
      'flex',
      'justify-center',
      'items-center'
    ]
  },
  variants: {
    variant: {
      filled: {
        nav: [
          'bg-light-3',
          'dark:bg-dark-3'
        ]
      },
      outlined: {
        nav: [
          'p-1.5',
          'border-2',
          'border-light-3',
          'dark:border-dark-3'
        ]
      },
      ghost: {
        nav: [
          'bg-transparent',
          'shadow-none'
        ]
      }
    },
    shape: {
      rounded: {
        nav: [
          'rounded-full'
        ]
      },
      soft: {
        nav: [
          'rounded-lg'
        ]
      },
      square: {}
    },
    size: {
      xs: {
        button: [
          'w-6',
          'h-6'
        ],
        arrows: [
          'w-6',
          'h-6'
        ]
      },
      sm: {
        button: [
          'w-7',
          'h-7'
        ],
        arrows: [
          'w-7',
          'h-7',
          'p-0.5'
        ]
      },
      md: {
        button: [
          'w-9',
          'h-9'
        ],
        arrows: [
          'w-9',
          'h-9',
          'p-1'
        ]
      },
      lg: {
        button: [
          'w-11',
          'h-11'
        ],
        arrows: [
          'w-11',
          'h-11',
          'p-1.5'
        ]
      }
    },
    flat: {
      true: {
        nav: [
          'shadow-none'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
