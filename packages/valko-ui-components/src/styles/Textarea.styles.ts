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
      neutral: {
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
      success: {
        label: [
          'text-success-500',
          'focus:text-success-950',
          'dark:text-success-500'
        ],
        helper: [
          'text-success-500',
          'dark:text-success-500'
        ],
        counter: [
          'text-success-500',
          'dark:text-success-500'
        ],
        icons: [
          'text-success-500',
          'focus:text-success-950',
          'dark:text-success-500'
        ]
      },
      info: {
        label: [
          'text-info-500',
          'focus:text-info-950',
          'dark:text-info-500'
        ],
        helper: [
          'text-info-500',
          'dark:text-info-500'
        ],
        counter: [
          'text-info-500',
          'dark:text-info-500'
        ],
        icons: [
          'text-info-500',
          'focus:text-info-950',
          'dark:text-info-500'
        ]
      },
      warning: {
        label: [
          'text-warning-500',
          'focus:text-warning-950',
          'dark:text-warning-500'
        ],
        helper: [
          'text-warning-500',
          'dark:text-warning-500'
        ],
        counter: [
          'text-warning-500',
          'dark:text-warning-500'
        ],
        icons: [
          'text-warning-500',
          'focus:text-warning-950',
          'dark:text-warning-500'
        ]
      },
      error: {
        label: [
          'text-error-500',
          'focus:text-error-950',
          'dark:text-error-500'
        ],
        helper: [
          'text-error-500',
          'dark:text-error-500'
        ],
        counter: [
          'text-error-500',
          'dark:text-error-500'
        ],
        icons: [
          'text-error-500',
          'focus:text-error-950',
          'dark:text-error-500'
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
      color: 'neutral',
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
      color: 'success',
      disabled: false,
      class: {
        textarea: [
          'border-success-300',
          'hover:border-success-400',
          'focus:border-success-500',
          'dark:border-success-500',
          'dark:focus:border-success-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        textarea: [
          'border-info-300',
          'hover:border-info-400',
          'focus:border-info-500',
          'dark:border-info-500',
          'dark:focus:border-info-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'border-warning-300',
          'hover:border-warning-400',
          'focus:border-warning-500',
          'dark:border-warning-500',
          'dark:focus:border-warning-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        textarea: [
          'border-error-300',
          'hover:border-error-400',
          'focus:border-error-500',
          'dark:border-error-500',
          'dark:focus:border-error-700'
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
      color: 'neutral',
      disabled: false,
      class: {
        textarea: [
          'hover:border-neutral-300',
          'focus:border-neutral-400',
          'dark:border-light-50',
          'dark:hover:border-light-200',
          'dark:focus:border-light-400'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        textarea: [
          'border-success-400',
          'focus:border-success-500',
          'dark:border-success-400',
          'dark:focus:border-success-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: {
        textarea: [
          'border-info-400',
          'focus:border-info-500',
          'dark:border-info-400',
          'dark:focus:border-info-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'border-warning-400',
          'focus:border-warning-500',
          'dark:border-warning-400',
          'dark:focus:border-warning-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: {
        textarea: [
          'border-error-400',
          'focus:border-error-500',
          'dark:border-error-400',
          'dark:focus:border-error-500'
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
      color: 'neutral',
      disabled: false,
      class: {
        textarea: [
          'focus:border-neutral-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        textarea: [
          'border-success-500',
          'focus:border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        textarea: [
          'border-info-600',
          'focus:border-info-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        textarea: [
          'border-warning-600',
          'focus:border-warning-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        textarea: [
          'border-error-600',
          'focus:border-error-600'
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
