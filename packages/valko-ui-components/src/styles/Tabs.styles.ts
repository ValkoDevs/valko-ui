import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-tabs__container',
      'flex',
      'overflow-visible',
      'relative'
    ],
    group: [
      'w-fit',
      'flex',
      'flex-col',
      'relative',
      'overflow-visible'
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
      'disabled:text-on-disabled',
      'disabled:cursor-not-allowed'
    ],
    content: [
      'grow',
      'relative',
      'overflow-visible'
    ],
    cursor: [
      'shadow-el1',
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
          'bg-surface-container'
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
          'shadow-el0'
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
          'shadow-el0'
        ]
      },
      rounded: {
        list: [
          'rounded-full'
        ],
        tab: [
          'rounded-full',
          'text-on-surface'
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
          'text-on-surface'
        ]
      },
      soft: {
        list: [
          'rounded-lg'
        ],
        tab: [
          'rounded-lg',
          'text-on-surface'
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
          'from-primary-gradient-start',
          'to-primary-gradient-end'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'secondary',
      class: {
        cursor: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'positive',
      class: {
        cursor: [
          'from-positive-gradient-start',
          'to-positive-gradient-end'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'accent',
      class: {
        cursor: [
          'from-accent-gradient-start',
          'to-accent-gradient-end'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'warning',
      class: {
        cursor: [
          'from-warning-gradient-start',
          'to-warning-gradient-end'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      shape: ['soft', 'rounded', 'square'],
      color: 'negative',
      class: {
        cursor: [
          'from-negative-gradient-start',
          'to-negative-gradient-end'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-negative'
        ]
      }
    },
    //color & line
    {
      color: 'primary',
      shape: 'line',
      class: {
        cursor: [
          'border-primary'
        ]
      }
    },
    {
      color: 'secondary',
      shape: 'line',
      class: {
        cursor: [
          'border-secondary'
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
          'bg-primary'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-primary'
        ]
      }
    },
    {
      color: 'secondary',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-secondary'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-secondary'
        ]
      }
    },
    {
      color: 'positive',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-positive'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-positive'
        ]
      }
    },
    {
      color: 'accent',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-accent'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-accent'
        ]
      }
    },
    {
      color: 'warning',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-warning'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-warning'
        ]
      }
    },
    {
      color: 'negative',
      shape: ['rounded', 'square', 'soft'],
      class: {
        cursor: [
          'bg-negative'
        ],
        tab: [
          'data-[headlessui-state=selected]:text-on-negative'
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
          'from-primary-gradient-start',
          'to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-positive-gradient-start',
          'to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-accent-gradient-start',
          'to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-warning-gradient-start',
          'to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      shape: 'line',
      class: {
        cursorGradient: [
          'from-negative-gradient-start',
          'to-negative-gradient-end'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
