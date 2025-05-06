import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    nav: [
      'vk-pagination__nav',
      'p-2',
      'inline-flex',
      '-space-x-px',
      'w-fit',
      'flex'
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
          'bg-surface-container'
        ]
      },
      outlined: {
        nav: [
          'p-1.5',
          'border-2',
          'border-outlined'
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
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    elevated: {
      true: {
        nav: [
          'shadow-el1'
        ]
      }
    }
  },
  compoundVariants: [
    {
      variant: ['filled', 'ghost'],
      size: 'xs',
      class: {
        button: [
          'size-6'
        ],
        arrows: [
          'size-6'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      size: 'sm',
      class: {
        button: [
          'size-7'
        ],
        arrows: [
          'size-7',
          'p-0.5'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      size: 'md',
      class: {
        button: [
          'size-9'
        ],
        arrows: [
          'size-9',
          'p-1'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      size: 'lg',
      class: {
        button: [
          'size-11'
        ],
        arrows: [
          'size-11',
          'p-1.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        button: [
          'size-5'
        ],
        arrows: [
          'size-5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        button: [
          'size-6'
        ],
        arrows: [
          'size-6'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        button: [
          'size-8'
        ],
        arrows: [
          'size-8',
          'p-1'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        button: [
          'size-10'
        ],
        arrows: [
          'size-10'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
