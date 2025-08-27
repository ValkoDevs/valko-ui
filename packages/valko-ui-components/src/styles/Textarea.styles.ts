import { tv } from 'tailwind-variants'

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
      'pl-4',
      'pr-4',
      'pt-4',
      'align-middle',
      'outline-none',
      'peer',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'focus:ring-0'
    ],
    label: [
      'vk-textarea__label',
      'text-on-surface-variant',
      'text-left',
      'font-bold',
      'truncate',
      'cursor-text',
      'absolute',
      'top-3',
      'left-4',
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
      'text-on-surface-variant',
      'ml-auto'
    ],
    footer: [
      'w-full',
      'flex',
      'justify-between',
      'gap-4',
      'px-4'
    ],
    leftIcon: [
      'left-3'
    ],
    rightIcon: [
      'right-3'
    ],
    icons: [
      'cursor-pointer',
      'absolute',
      'transition-all',
      'top-2.5',
      'text-2xl',
      'text-on-surface-variant',
      'peer-data-[filled=true]:top-3',
      'peer-data-[filled=false]:peer-focus:top-3'
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
          'px-1',
          'left-3',
          'bg-inherit'
        ],
        icons: [
          'peer-data-[filled=true]:top-3.5',
          'peer-data-[filled=false]:peer-focus:top-3.5'
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
          'data-[left-icon=true]:pl-11',
          'data-[left-icon=false]:pl-4',
          'data-[right-icon=true]:pr-11',
          'data-[right-icon=false]:pr-4'
        ],
        label: [
          'text-xs',
          'peer-data-[left-icon=true]:left-11'
        ],
        helper: [
          'text-xs'
        ],
        counter: [
          'text-xs'
        ],
        icons: [
          'text-base'
        ]
      },
      sm: {
        textarea: [
          'text-sm',
          'data-[left-icon=true]:pl-12',
          'data-[left-icon=false]:pl-4',
          'data-[right-icon=true]:pr-12',
          'data-[right-icon=false]:pr-4'
        ],
        label: [
          'text-sm',
          'peer-data-[left-icon=true]:left-12'
        ],
        helper: [
          'text-xs'
        ],
        counter: [
          'text-sm'
        ],
        icons: [
          'text-xl'
        ]
      },
      md: {
        textarea: [
          'text-base',
          'data-[left-icon=true]:pl-13',
          'data-[left-icon=false]:pl-4',
          'data-[right-icon=true]:pr-13',
          'data-[right-icon=false]:pr-4'
        ],
        label: [
          'text-base',
          'peer-data-[left-icon=true]:left-13'
        ],
        helper: [
          'text-sm'
        ],
        counter: [
          'text-base'
        ],
        icons: [
          'text-2xl'
        ]
      },
      lg: {
        textarea: [
          'text-lg',
          'data-[left-icon=true]:pl-14',
          'data-[left-icon=false]:pl-4',
          'data-[right-icon=true]:pr-14',
          'data-[right-icon=false]:pr-4'
        ],
        label: [
          'text-lg',
          'peer-data-[left-icon=true]:left-14'
        ],
        helper: [
          'text-base'
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
          'border-positive',
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
          'border-warning',
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
          'border-negative',
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
        label: [
          'peer-focus:-top-2',
          'peer-data-[filled=true]:-top-2'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        label: [
          'peer-focus:-top-2.5',
          'peer-data-[filled=true]:-top-2.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        label: [
          'peer-focus:-top-3',
          'peer-data-[filled=true]:-top-3'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        label: [
          'peer-focus:-top-3.5',
          'peer-data-[filled=true]:-top-3.5'
        ]
      }
    },
    {
      variant: 'outlined',
      shape: ['soft', 'square'],
      class: {
        label: [
          'peer-data-[left-icon=true]:peer-data-[filled=true]:left-4',
          'peer-data-[left-icon=true]:peer-focus:left-4'
        ]
      }
    },
    {
      variant: 'outlined',
      shape: 'rounded',
      class: {
        label: [
          'peer-data-[left-icon=true]:peer-data-[filled=true]:left-6',
          'peer-data-[left-icon=true]:peer-focus:left-6'
        ]
      }
    }
  ]
})
