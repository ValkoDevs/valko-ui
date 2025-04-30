import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-textarea__container',
      'w-full',
      'flex',
      'flex-col',
      'justify-items-start'
    ],
    field: [
      'relative',
      'w-full',
      'flex',
      'flex-col',
      'items-start',
      'm-0',
      'p-0',
      'flex',
      'flex-col',
      'items-start'
    ],
    textarea: [
      'vk-textarea__textarea',
      'w-full',
      'min-h-[128px]',
      'h-[128px]',
      'align-middle',
      'outline-none',
      'peer',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'focus:ring-0',
      'data-[left-icon=false]:px-2',
      'data-[left-icon=true]:pr-2'
    ],
    label: [
      'text-on-surface-variant',
      'p-1',
      'text-left',
      'font-bold',
      'truncate',
      'cursor-text',
      'ml-[1px]',
      'absolute',
      'top-1',
      'left-1',
      'origin-[center_left]',
      'transition-all',
      'duration-200',
      'peer-focus:top-0',
      'peer-focus:scale-[.8]',
      'peer-data-[filled=true]:scale-[.8]',
      'peer-data-[filled=true]:top-0',
      'peer-data-[filled=true]:translate-y-0'
    ],
    helper: [
      'vk-textarea__helper',
      'grow',
      'text-on-surface-variant'
    ],
    counter: [
      'vk-textarea__counter',
      'w-fit',
      'whitespace-nowrap',
      'text-on-surface-variant'
    ],
    footer: [
      'w-full',
      'flex',
      'justify-between'
    ],
    leftIcon: [
      'left-1'
    ],
    rightIcon: [
      'right-1'
    ],
    icons: [
      'cursor-pointer',
      'absolute',
      'transition-all',
      'top-1',
      'text-2xl',
      'text-on-surface-variant'
    ]
  },
  variants: {
    variant: {
      filled: {
        textarea: [
          'bg-surface-container-highest',
          'border-b-2',
          'border-on-surface-variant'
        ]
      },
      ghost: {
        textarea: [
          'bg-transparent',
          'border-b-2',
          'border-on-surface-variant'
        ],
        label: [
          'bg-transparent'
        ]
      },
      outlined: {
        container: [
          'bg-inherit'
        ],
        field: [
          'bg-inherit'
        ],
        textarea: [
          'bg-inherit',
          'border-2',
          'border-outlined'
        ],
        label: [
          'left-3',
          'bg-inherit'
        ]
      }
    },
    color: {
      primary: {
        label: [
          'peer-focus:text-primary'
        ],
        icons: [
          'peer-focus:text-primary'
        ]
      },
      secondary: {
        label: [
          'peer-focus:text-secondary'
        ],
        helper: [
          'text-secondary'
        ],
        counter: [
          'text-secondary'
        ],
        icons: [
          'peer-focus:text-secondary'
        ]
      },
      positive: {
        label: [
          'text-positive'
        ],
        helper: [
          'text-positive'
        ],
        counter: [
          'text-positive'
        ],
        icons: [
          'text-positive'
        ]
      },
      accent: {
        label: [
          'text-accent'
        ],
        helper: [
          'text-accent'
        ],
        counter: [
          'text-accent'
        ],
        icons: [
          'text-accent'
        ]
      },
      warning: {
        label: [
          'text-warning'
        ],
        helper: [
          'text-warning'
        ],
        counter: [
          'text-warning'
        ],
        icons: [
          'text-warning'
        ]
      },
      negative: {
        label: [
          'text-negative'
        ],
        helper: [
          'text-negative'
        ],
        counter: [
          'text-negative'
        ],
        icons: [
          'text-negative'
        ]
      }
    },
    size: {
      xs: {
        textarea: [
          'text-xs',
          'pt-3.5',
          'data-[left-icon=true]:pl-6'
        ],
        label: [
          'text-xs',
          'peer-data-[left-icon=true]:ml-4'
        ],
        helper: [
          'text-xs'
        ],
        counter: [
          'text-xs'
        ],
        icons: [
          'text-[16px]'
        ]
      },
      sm: {
        textarea: [
          'text-sm',
          'pt-4.5',
          'data-[left-icon=true]:pl-7'
        ],
        label: [
          'text-sm',
          'peer-data-[left-icon=true]:ml-5'
        ],
        helper: [
          'text-sm'
        ],
        counter: [
          'text-sm'
        ],
        icons: [
          'text-[20px]'
        ]
      },
      md: {
        textarea: [
          'text-base',
          'pt-5',
          'data-[left-icon=true]:pl-8'
        ],
        label: [
          'text-base',
          'peer-data-[left-icon=true]:ml-6'
        ],
        helper: [
          'text-base'
        ],
        counter: [
          'text-base'
        ],
        icons: [
          'text-[24px]'
        ]
      },
      lg: {
        textarea: [
          'text-lg',
          'pt-6',
          'data-[left-icon=true]:pl-9'
        ],
        label: [
          'text-lg',
          'peer-data-[left-icon=true]:ml-7'
        ],
        helper: [
          'text-lg'
        ],
        counter: [
          'text-lg'
        ],
        icons: [
          'text-[28px]'
        ]
      }
    },
    disabled: {
      true: {
        container: [
          'opacity-50'
        ],
        textarea: [
          'text-on-disabled',
          'border-disabled'
        ],
        label: [
          'peer-data-[filled=true]:bg-inherit',
          'peer-data-[filled=false]:bg-inherit',
          'peer-data-[filled=true]:text-on-disabled',
          'peer-data-[filled=false]:text-on-disabled'
        ],
        helper: [
          'text-on-disabled'
        ],
        counter: [
          'text-on-disabled'
        ],
        icons: [
          'text-on-disabled'
        ]
      }
    },
    shape: {
      soft: {},
      rounded: {
        textarea: [
          'rounded-xl'
        ]
      },
      square: {
        textarea: [
          'rounded-none'
        ]
      }
    }
  },
  compoundVariants: [
    // filled & ghost & color
    {
      variant: ['filled', 'ghost'],
      color: 'primary',
      disabled: false,
      class: {
        textarea: [
          'hover:border-primary',
          'focus:border-primary'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      color: 'secondary',
      disabled: false,
      class: {
        textarea: [
          'hover:border-secondary',
          'focus:border-secondary'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      color: 'positive',
      disabled: false,
      class: {
        textarea: [
          'hover:border-positive',
          'focus:border-positive'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      color: 'accent',
      disabled: false,
      class: {
        textarea: [
          'hover:border-accent',
          'focus:border-accent'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'hover:border-warning',
          'focus:border-warning'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      color: 'negative',
      disabled: false,
      class: {
        textarea: [
          'hover:border-negative',
          'focus:border-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        textarea: [
          'focus:border-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        textarea: [
          'focus:border-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        textarea: [
          'border-positive',
          'focus:border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        textarea: [
          'border-accent',
          'focus:border-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'border-warning',
          'focus:border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        textarea: [
          'border-negative',
          'focus:border-negative'
        ]
      }
    },
    // filled & soft
    {
      variant: 'filled',
      shape: 'soft',
      class: {
        textarea: [
          'rounded-t-lg'
        ]
      }
    },
    // outlined & soft
    {
      variant: 'outlined',
      shape: 'soft',
      class: {
        textarea: [
          'rounded-sm'
        ]
      }
    },
    // outlined & size
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        textarea: [
          'pt-2'
        ],
        label: [
          'peer-focus:-top-2.5',
          'peer-data-[filled=true]:-top-2.5',
          'peer-data-[left-icon=true]:ml-2.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        textarea: [
          'pt-2.5'
        ],
        label: [
          'peer-focus:-top-3',
          'peer-data-[filled=true]:-top-3',
          'peer-data-[left-icon=true]:ml-3.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        textarea: [
          'pt-2.5'
        ],
        label: [
          'peer-focus:-top-3.5',
          'peer-data-[filled=true]:-top-3.5',
          'peer-data-[left-icon=true]:ml-4.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        textarea: [
          'pt-3'
        ],
        label: [
          'peer-focus:-top-4',
          'peer-data-[filled=true]:-top-4',
          'peer-data-[left-icon=true]:ml-5.5'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
