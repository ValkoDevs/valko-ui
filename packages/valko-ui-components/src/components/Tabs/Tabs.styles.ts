import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-tabs__container',
      'w-full',
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
      'w-full'
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
      secondary: {},
      success: {},
      info: {},
      warning: {},
      error: {},
      light: {
        tab: [
          'data-[headlessui-state=selected]:text-black'
        ]
      },
      dark: {}
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
      color: 'secondary',
      shape: 'line',
      class: {
        cursor: [
          'border-secondary-500'
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
    {
      color: 'light',
      shape: 'line',
      class: {
        cursor: [
          'border-light-1'
        ]
      }
    },
    {
      color: 'dark',
      shape: 'line',
      class: {
        cursor: [
          'border-dark-5'
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
      color: 'secondary',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-secondary-500'
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
    {
      color: 'light',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-light-1'
        ]
      }
    },
    {
      color: 'dark',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-dark-5'
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
    }
  ]
}) as unknown as ReturnType<TV>
