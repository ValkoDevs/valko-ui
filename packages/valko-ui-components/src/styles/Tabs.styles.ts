import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-tabs__container',
      'flex',
      'overflow-x-auto'
    ],
    group: [
      'w-fit',
      'flex',
      'flex-col'
    ],
    list: [
      'tab-list',
      'p-2',
      'w-fit',
      'max-w-full',
      'h-fit',
      'flex',
      'justify-start',
      'relative',
      'transition-colors',
      'duration-200',
      'ease-out'
    ],
    tab: [
      'vk-tabs__tab',
      'w-fit',
      'h-fit',
      'tracking-wider',
      'font-semibold',
      'text-nowrap',
      'whitespace-nowrap',
      'ring-0',
      'outline-none',
      'z-20',
      'flex',
      'items-center',
      'transition',
      'duration-200',
      'disabled:text-gray-400',
      'disabled:cursor-not-allowed',
      'dark:disabled:text-gray-500'
    ],
    content: [
      'grow'
    ],
    cursor: [
      'shadow-lg',
      'shadow-light-4',
      'absolute',
      'inset-0',
      'z-10',
      'transition-all',
      'duration-200',
      'dark:shadow-dark-5'
    ],
    cursorGradient: [
      'absolute',
      'inset-0',
      'z-20',
      'transition-all',
      'duration-200'
    ],
    leftIcon: [
      'vk-tabs__left',
      'mr-1'
    ],
    rightIcon: [
      'vk-tabs__right',
      'ml-1'
    ]
  },
  variants: {
    variant: {
      filled: {
        list: [
          'bg-light-3',
          'dark:bg-dark-3'
        ]
      },
      outlined: {
        list: [
          'border-2',
          'border-light-5',
          'dark:border-dark-1'
        ]
      },
      ghost: {
        list: [
          'bg-transparent'
        ],
        tab: [
          'bg-transparent'
        ],
        cursor: [
          'shadow-none'
        ]
      },
      gradient: {
        list: [
          'bg-light-3',
          'dark:bg-dark-3'
        ],
        cursor: [
          'bg-gradient-to-br'
        ]
      }
    },
    shape: {
      line: {
        list: [
          'p-0'
        ],
        cursor: [
          'border-b-2',
          'shadow-none'
        ]
      },
      rounded: {
        list: [
          'rounded-full'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-white',
          'rounded-full'
        ],
        cursor: [
          'rounded-full'
        ]
      },
      square: {
        list: [
          'rounded-none'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-white'
        ]
      },
      soft: {
        list: [
          'rounded-lg'
        ],
        tab: [
          'rounded-lg',
          'data-[headlessui-state=selected]:text-white'
        ],
        cursor: [
          'rounded-lg'
        ]
      }
    },
    size: {
      xs: {
        tab: [
          'p-1.5',
          'text-xs'
        ]
      },
      sm: {
        tab: [
          'p-2',
          'text-sm'
        ]
      },
      md: {
        tab: [
          'p-3',
          'text-base'
        ]
      },
      lg: {
        tab: [
          'p-4',
          'text-lg'
        ]
      }
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
    },
    grow: {
      true: {
        group: [
          'w-auto',
          'h-auto',
          'grow'
        ],
        list: [
          'w-auto',
          'h-auto',
          'grow'
        ],
        container: [
          'h-auto',
          'w-auto',
          'grow'
        ]
      },
      false: {
        container: [
          'h-fit',
          'w-fit'
        ]
      }
    },
    vertical: {
      true: {
        list: [
          'flex-col'
        ],
        tab: [
          'w-full',
          'justify-center'
        ]
      }
    }
  },
  compoundVariants: [
    // color & gradient
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'primary',
      class: {
        cursor: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'neutral',
      class: {
        cursor: [
          'from-light-1',
          'to-light-5',
          'dark:from-dark-1',
          'dark:to-dark-5'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-dark-1',
          'dark:data-[headlessui-state=selected]:text-light-3'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'success',
      class: {
        cursor: [
          'from-success-500',
          'to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'info',
      class: {
        cursor: [
          'from-info-500',
          'to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'warning',
      class: {
        cursor: [
          'from-warning-500',
          'to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'error',
      class: {
        cursor: [
          'from-error-500',
          'to-error-900'
        ]
      }
    },
    //color & line
    {
      color: 'primary',
      shape: 'line',
      class: {
        cursor: [
          'border-primary-500'
        ]
      }
    },
    {
      color: 'neutral',
      shape: 'line',
      class: {
        cursor: [
          'border-light-4',
          'dark:border-dark-2'
        ]
      }
    },
    {
      color: 'success',
      shape: 'line',
      class: {
        cursor: [
          'border-success-500'
        ]
      }
    },
    {
      color: 'info',
      shape: 'line',
      class: {
        cursor: [
          'border-info-500'
        ]
      }
    },
    {
      color: 'warning',
      shape: 'line',
      class: {
        cursor: [
          'border-warning-500'
        ]
      }
    },
    {
      color: 'error',
      shape: 'line',
      class: {
        cursor: [
          'border-error-500'
        ]
      }
    },
    //color rounded square & soft
    {
      color: 'primary',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-primary-500'
        ]
      }
    },
    {
      color: 'neutral',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-light-4',
          'dark:bg-dark-2'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-dark-1',
          'dark:data-[headlessui-state=selected]:text-light-3'
        ]
      }
    },
    {
      color: 'success',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-success-500'
        ]
      }
    },
    {
      color: 'info',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-info-500'
        ]
      }
    },
    {
      color: 'warning',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-warning-500'
        ]
      }
    },
    {
      color: 'error',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-error-500'
        ]
      }
    },
    // vertical & line
    {
      shape: 'line',
      vertical: true,
      class: {
        cursor: [
          'border-b-0',
          'border-l-2'
        ]
      }
    },
    // vertical & rounded
    {
      shape: 'rounded',
      vertical: true,
      class: {
        list: [
          'rounded-3xl'
        ]
      }
    },
    // vertical content
    {
      vertical: true,
      class: {
        group: [
          'flex-row'
        ]
      }
    },
    // gradient & line
    {
      variant: 'gradient',
      shape: 'line',
      vertical: true,
      class: {
        cursor: [
          'border-b-0',
          'border-l-0'
        ],
        cursorGradient: [
          'mr-auto',
          'w-0.5',
          'bg-gradient-to-tr'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: 'line',
      vertical: false,
      class: {
        cursor: [
          'border-b-0',
          'border-l-0'
        ],
        cursorGradient: [
          'mt-auto',
          'h-0.5',
          'bg-gradient-to-br'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'primary',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-success-500',
          'to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-info-500',
          'to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-warning-500',
          'to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-error-500',
          'to-error-900'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
