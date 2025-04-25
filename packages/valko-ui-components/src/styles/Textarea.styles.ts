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
      'opacity-80',
      'px-1',
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
    field: [
      'relative',
      'w-full',
      'm-0',
      'p-0',
      'flex',
      'flex-col',
      'items-start'
    ],
    helper: [
      'vk-textarea__helper',
      'grow'
    ],
    counter: [
      'vk-textarea__counter',
      'w-fit',
      'whitespace-nowrap'
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
      'text-2xl'
    ]
  },
  variants: {
    variant: {
      filled: {
        textarea: [
          'bg-light-200',
          'dark:bg-dark-800',
          'border-b-2'
        ]
      },
      ghost: {
        textarea: [
          'bg-inherit',
          'border-b-2',
          'border-light-400'
        ],
        label: [
          'bg-inherit'
        ]
      },
      outlined: {
        textarea: [
          'px-2',
          'bg-light-200',
          'dark:bg-dark-800',
          'border-2',
          'border-dark-600'
        ],
        label: [
          'left-1.5',
          'bg-transparent'
        ]
      }
    },
    color: {
      primary: {
        label: [
          'text-dark-700',
          'peer-focus:text-primary-500',
          'dark:text-light-100'
        ],
        helper: [
          'text-dark-600',
          'dark:text-light-200'
        ],
        counter: [
          'text-dark-600',
          'dark:text-light-200'
        ],
        icons: [
          'peer-focus:text-primary-500'
        ]
      },
      secondary: {
        label: [
          'text-dark-600',
          'peer-focus:text-dark-800',
          'dark:text-light-200',
          'dark:peer-focus:text-light-50'
        ],
        helper: [
          'text-dark-600',
          'peer-focus:text-dark-800',
          'dark:text-light-200',
          'dark:peer-focus:text-light-50'
        ],
        counter: [
          'text-dark-600',
          'peer-focus:text-dark-800',
          'dark:text-light-200',
          'dark:peer-focus:text-light-50'
        ],
        icons: [
          'peer-focus:text-dark-800',
          'dark:peer-focus:text-light-50'
        ]
      },
      positive: {
        label: [
          'text-positive',
          'focus:text-positive',
          'dark:text-positive'
        ],
        helper: [
          'text-positive',
          'dark:text-positive'
        ],
        counter: [
          'text-positive',
          'dark:text-positive'
        ],
        icons: [
          'text-positive',
          'focus:text-positive',
          'dark:text-positive'
        ]
      },
      accent: {
        label: [
          'text-accent',
          'focus:text-accent',
          'dark:text-accent'
        ],
        helper: [
          'text-accent',
          'dark:text-accent'
        ],
        counter: [
          'text-accent',
          'dark:text-accent'
        ],
        icons: [
          'text-accent',
          'focus:text-accent',
          'dark:text-accent'
        ]
      },
      warning: {
        label: [
          'text-warning',
          'focus:text-warning-950',
          'dark:text-warning'
        ],
        helper: [
          'text-warning',
          'dark:text-warning'
        ],
        counter: [
          'text-warning',
          'dark:text-warning'
        ],
        icons: [
          'text-warning',
          'focus:text-warning-950',
          'dark:text-warning'
        ]
      },
      negative: {
        label: [
          'text-negative',
          'focus:text-negative',
          'dark:text-negative'
        ],
        helper: [
          'text-negative',
          'dark:text-negative'
        ],
        counter: [
          'text-negative',
          'dark:text-negative'
        ],
        icons: [
          'text-negative',
          'focus:text-negative',
          'dark:text-negative'
        ]
      }
    },
    size: {
      xs: {
        textarea: [
          'text-xs',
          'pt-3',
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
          'pt-4',
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
        textarea: [
          'bg-gray-500/[.25]',
          'text-gray-500',
          'border-gray-500/[.25]',
          'cursor-not-allowed',
          'dark:bg-gray-400/[.25]',
          'dark:border-gray-400/[.25]'
        ],
        label: [
          'dark:bg-inherit',
          'peer-data-[filled=true]:bg-inherit',
          'peer-data-[filled=false]:bg-inherit',
          'peer-data-[filled=true]:text-gray-500',
          'peer-data-[filled=false]:text-gray-500',
          'dark:peer-data-[filled=true]:text-gray-500',
          'dark:peer-data-[filled=false]:text-gray-500',
          'dark:peer-data-[filled=true]:bg-inherit',
          'dark:peer-data-[filled=false]:bg-inherit'
        ],
        helper: [
          'text-gray-500'
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
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: {
        textarea: [
          'border-dark-600',
          'hover:border-primary-400',
          'focus:border-primary-500',
          'dark:border-light-400',
          'dark:hover:border-primary-400',
          'dark:focus:border-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        textarea: [
          'border-light-200',
          'hover:border-light-300',
          'focus:border-light-400',
          'dark:border-dark-800',
          'dark:hover:border-dark-700',
          'dark:focus:border-dark-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        textarea: [
          'border-positive',
          'hover:border-positive',
          'focus:border-positive',
          'dark:border-positive',
          'dark:focus:border-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        textarea: [
          'border-accent',
          'hover:border-accent',
          'focus:border-accent',
          'dark:border-accent',
          'dark:focus:border-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'border-warning',
          'hover:border-warning',
          'focus:border-warning',
          'dark:border-warning',
          'dark:focus:border-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        textarea: [
          'border-negative',
          'hover:border-negative',
          'focus:border-negative',
          'dark:border-negative',
          'dark:focus:border-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        textarea: [
          'focus:border-primary-500',
          'dark:border-light-400',
          'dark:hover:border-light-300',
          'dark:focus:border-primary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        textarea: [
          'hover:border-secondary',
          'focus:border-secondary',
          'dark:border-light-50',
          'dark:hover:border-light-200',
          'dark:focus:border-light-400'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        textarea: [
          'border-positive',
          'focus:border-positive',
          'dark:border-positive',
          'dark:focus:border-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        textarea: [
          'border-accent',
          'focus:border-accent',
          'dark:border-accent',
          'dark:focus:border-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'border-warning',
          'focus:border-warning',
          'dark:border-warning',
          'dark:focus:border-warning'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        textarea: [
          'border-negative',
          'focus:border-negative',
          'dark:border-negative',
          'dark:focus:border-negative'
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
          'focus:border-primary-500'
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
          'rounded-md'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
