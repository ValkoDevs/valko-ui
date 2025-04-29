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
      'absolute',
      'inset-0',
      'z-10',
      'transition-all',
      'duration-200'
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
          'bg-'
        ]
      },
      outlined: {
        list: [
          'border-2',
          'border-outlined'
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
          'bg-surface-container'
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
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {}
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
      color: 'secondary',
      class: {
        cursor: [
          'from-light-50',
          'to-light-400',
          'dark:from-dark-600',
          'dark:to-dark-950'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-dark-600',
          'dark:data-[headlessui-state=selected]:text-light-200'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'positive',
      class: {
        cursor: [
          'from-positive',
          'to-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'accent',
      class: {
        cursor: [
          'from-accent',
          'to-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'warning',
      class: {
        cursor: [
          'from-warning',
          'to-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'negative',
      class: {
        cursor: [
          'from-negative',
          'to-negative'
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
      color: 'secondary',
      shape: 'line',
      class: {
        cursor: [
          'border-light-300',
          'dark:border-dark-700'
        ]
      }
    },
    {
      color: 'positive',
      shape: 'line',
      class: {
        cursor: [
          'border-positive'
        ]
      }
    },
    {
      color: 'accent',
      shape: 'line',
      class: {
        cursor: [
          'border-accent'
        ]
      }
    },
    {
      color: 'warning',
      shape: 'line',
      class: {
        cursor: [
          'border-warning'
        ]
      }
    },
    {
      color: 'negative',
      shape: 'line',
      class: {
        cursor: [
          'border-negative'
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
          'bg-light-300',
          'dark:bg-dark-700'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-dark-600',
          'dark:data-[headlessui-state=selected]:text-light-200'
        ]
      }
    },
    {
      color: 'positive',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-positive'
        ]
      }
    },
    {
      color: 'accent',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-accent'
        ]
      }
    },
    {
      color: 'warning',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-warning'
        ]
      }
    },
    {
      color: 'negative',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-negative'
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
      color: 'secondary',
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
      color: 'positive',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-positive',
          'to-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-accent',
          'to-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-warning',
          'to-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-negative',
          'to-negative'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
