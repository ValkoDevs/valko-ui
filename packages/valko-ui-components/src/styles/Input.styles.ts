import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-input__container',
      'w-full',
      'flex',
      'flex-col',
      'gap-1'
    ],
    input: [
      'vk-input__input',
      'w-full',
      'pl-2',
      'outline-none',
      'peer',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'overflow-hidden',
      'placeholder:invisible',
      'focus:ring-0',
      'focus:placeholder:visible',
      'data-[right-icon=false]:pr-2',
      'data-[right-icon=true]:pr-8'
    ],
    label: [
      'vk-input__label',
      'opacity-80',
      'text-left',
      'font-bold',
      'truncate',
      'px-1',
      'ml-[1px]',
      'absolute',
      'top-1/2',
      'left-1',
      'transition-all',
      'duration-200',
      'origin-[center_left]',
      '-translate-y-1/2',
      'peer-focus:top-0',
      'peer-focus:scale-[.8]',
      'peer-focus:translate-y-0',
      'peer-data-[filled=true]:top-0',
      'peer-data-[filled=true]:scale-[.8]',
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
      'vk-input__helper',
      'break-normal',
      'text-gray-500'
    ],
    icons: [
      'cursor-pointer',
      'opacity-80',
      'absolute',
      'transition-all',
      'top-1/2',
      '-translate-y-1/2'
    ],
    rightIcon: [
      'right-1'
    ],
    leftIcon: [
      'left-1'
    ],
    iconOpen: [
      'rotate-180'
    ],
    clearIcon: [
      'vk-input__clear-icon',
      'text-dark-1',
      'cursor-pointer',
      'opacity-80',
      'absolute',
      'transition-all',
      'top-1/2',
      '-translate-y-1/2',
      'scale-90',
      'right-1',
      'dark:text-light-5'
    ],
    numberArrows: [
      'vk-input__number-arrows',
      'flex',
      'flex-col',
      'gap-1',
      'absolute',
      'right-2',
      'top-1/2',
      '-translate-y-1/2',
      'cursor-pointer'
    ],
    chevrons: []
  },
  variants: {
    variant: {
      filled: {
        input: [
          'bg-light-3',
          'dark:bg-dark-3',
          'border-b-2'
        ]
      },
      ghost: {
        input: [
          'bg-inherit',
          'border-b-2',
          'border-light-5'
        ],
        label: [
          'bg-inherit'
        ]
      },
      outlined: {
        input: [
          'px-2',
          'bg-light-3',
          'dark:bg-dark-3',
          'border-2',
          'border-dark-1'
        ],
        label: [
          'left-1.5',
          'bg-transparent',
          'peer-data-[left-icon=true]:ml-0.5'
        ],
        leftIcon: [
          'left-1.5'
        ],
        rightIcon: [
          'right-1.5'
        ]
      }
    },
    color: {
      primary: {
        label: [
          'text-dark-2',
          'peer-focus:text-primary-500',
          'dark:text-light-2'
        ],
        icons: [
          'text-dark-2',
          'peer-focus:text-primary-500',
          'dark:text-light-2'
        ],
        clearIcon: [
          'hover:text-primary-500',
          'dark:hover:text-primary-500'
        ],
        chevrons: [
          'hover:text-primary-500'
        ]
      },
      neutral: {
        label: [
          'text-dark-1',
          'peer-focus:text-dark-3',
          'dark:text-light-3',
          'dark:peer-focus:text-light-1'
        ],
        icons: [
          'text-dark-1',
          'peer-focus:text-dark-3',
          'dark:text-light-3',
          'dark:peer-focus:text-light-1'
        ],
        clearIcon: [
          'hover:text-dark-5',
          'dark:hover:text-light-1'
        ],
        chevrons: [
          'hover:text-dark-5',
          'dark:hover:text-light-1'
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
        icons: [
          'text-success-500',
          'focus:text-success-950',
          'dark:text-success-500'
        ],
        clearIcon: [
          'hover:text-success-500',
          'dark:hover:text-success-500'
        ],
        chevrons: [
          'hover:text-success-500'
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
        icons: [
          'text-info-500',
          'focus:text-info-950',
          'dark:text-info-500'
        ],
        clearIcon: [
          'hover:text-info-500',
          'dark:hover:text-info-500'
        ],
        chevrons: [
          'hover:text-info-500'
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
        icons: [
          'text-warning-500',
          'focus:text-warning-950',
          'dark:text-warning-500'
        ],
        clearIcon: [
          'hover:text-warning-500',
          'dark:hover:text-warning-500'
        ],
        chevrons: [
          'hover:text-warning-500'
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
        icons: [
          'text-error-500',
          'focus:text-error-950',
          'dark:text-error-500'
        ],
        clearIcon: [
          'hover:text-error-500',
          'dark:hover:text-error-500'
        ],
        chevrons: [
          'hover:text-error-500'
        ]
      }
    },
    size: {
      xs: {
        input: [
          'h-10',
          'pt-2',
          'text-xs',
          'data-[left-icon=true]:pl-6'
        ],
        label: [
          'text-xs',
          'peer-data-[left-icon=true]:left-5'
        ],
        helper: [
          'text-xs'
        ],
        icons: [
          'text-[16px]'
        ],
        chevrons: [
          'text-xs',
          'leading-none'
        ]
      },
      sm: {
        input: [
          'h-12',
          'pt-2.5',
          'text-sm',
          'data-[left-icon=true]:pl-7'
        ],
        label: [
          'text-sm',
          'peer-data-[left-icon=true]:left-6'
        ],
        helper: [
          'text-xs'
        ],
        icons: [
          'text-[20px]'
        ],
        chevrons: [
          'text-sm',
          'leading-none'
        ]
      },
      md: {
        input: [
          'h-14',
          'pt-3',
          'text-base',
          'data-[left-icon=true]:pl-8'
        ],
        label: [
          'text-base',
          'peer-data-[left-icon=true]:left-7'
        ],
        helper: [
          'text-sm'
        ],
        icons: [
          'text-[24px]'
        ],
        chevrons: [
          'text-base',
          'leading-none'
        ]
      },
      lg: {
        input: [
          'h-16',
          'pt-4',
          'text-lg',
          'data-[left-icon=true]:pl-9'
        ],
        label: [
          'text-lg',
          'peer-data-[leftIcon=true]:left-8'
        ],
        helper: [
          'text-base'
        ],
        icons: [
          'text-[28px]'
        ],
        chevrons: [
          'text-lg',
          'leading-none'
        ]
      }
    },
    shape: {
      rounded: {
        input: [
          'rounded-full'
        ]
      },
      soft: {},
      square: {
        input: [
          'rounded-none'
        ]
      }
    },
    disabled: {
      true: {
        input: [
          'bg-gray-500/[.25]',
          'text-gray-500',
          'border-gray-500/[.25]',
          'cursor-not-allowed',
          'dark:bg-gray-400/[.25]',
          'dark:border-gray-400/[.25]'
        ],
        label: [
          'peer-data-[filled=true]:bg-inherit',
          'peer-data-[filled=false]:bg-inherit',
          'peer-data-[filled=true]:text-gray-500',
          'peer-data-[filled=false]:text-gray-500',
          'dark:bg-inherit',
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
    cursor: {
      pointer: {
        input: [
          'cursor-pointer'
        ],
        label: [
          'cursor-pointer'
        ]
      },
      text: {
        input: [
          'cursor-text'
        ],
        label: [
          'cursor-text'
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
        input: [
          'border-dark-1',
          'hover:border-primary-400',
          'focus:border-primary-500',
          'dark:border-light-5',
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
        input: [
          'border-light-4/[.5]',
          'hover:border-light-4',
          'focus:border-light-5',
          'dark:border-dark-2/[.5]',
          'dark:hover:border-dark-2',
          'dark:focus:border-dark-1'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      disabled: false,
      class: {
        input: [
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
        input: [
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
        input: [
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
        input: [
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
        input: [
          'focus:border-primary-500',
          'dark:border-light-5',
          'dark:hover:border-light-4',
          'dark:focus:border-primary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      disabled: false,
      class: {
        input: [
          'border-light-3',
          'hover:border-light-4',
          'focus:border-light-5',
          'dark:border-dark-3',
          'dark:hover:border-dark-2',
          'dark:focus:border-dark-1'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        input: [
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
        input: [
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
        input: [
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
        input: [
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
        input: [
          'focus:border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      disabled: false,
      class: {
        input: [
          'border-light-4',
          'focus:border-light-5',
          'dark:border-dark-2',
          'dark:focus:border-dark-1'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        input: [
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
        input: [
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
        input: [
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
        input: [
          'border-error-600',
          'focus:border-error-600'
        ]
      }
    },
    // filled & ghost & rounded
    {
      variant: ['filled', 'ghost'],
      shape: 'rounded',
      size: 'xs',
      class: {
        input: [
          'pl-[calc(1rem_-_1px)]',
          'data-[left-icon=true]:pl-6'
        ],
        label: [
          'ml-2',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-4'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      shape: 'rounded',
      size: 'sm',
      class: {
        input: [
          'pl-[calc(1.25rem_-_1px)]',
          'data-[left-icon=true]:[calc(1.75rem_+_1px)]'
        ],
        label: [
          'ml-3',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-6'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      shape: 'rounded',
      size: 'md',
      class: {
        input: [
          'pl-[calc(1.5rem_-_1px)]',
          'data-[left-icon=true]:pl-8'
        ],
        label: [
          'ml-4',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-6'
        ]
      }
    },
    {
      variant: ['filled', 'ghost'],
      shape: 'rounded',
      size: 'lg',
      class: {
        input: [
          'pl-[calc(1.75rem_-_1px)]',
          'data-[left-icon=true]:[calc(2.25rem_+_1px)]'
        ],
        label: [
          'ml-5',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-8'
        ]
      }
    },
    // outlined & rounded
    {
      variant: 'outlined',
      shape: 'rounded',
      size: 'xs',
      class: {
        input: [
          'pl-[calc(1rem_-_3px)]',
          'data-[left-icon=true]:pl-[calc(1.5rem_-_2px)]'
        ],
        label: [
          'ml-[calc(0.5rem_-_2px)]',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-4'
        ]
      }
    },
    {
      variant: 'outlined',
      shape: 'rounded',
      size: 'sm',
      class: {
        input: [
          'pl-[calc(1.17rem_-_1px)]',
          'data-[left-icon=true]:pl-[1.67rem]'
        ],
        label: [
          'ml-[calc(0.75rem_-_1px)]',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-5'
        ]
      }
    },
    {
      variant: 'outlined',
      shape: 'rounded',
      size: 'md',
      class: {
        input: [
          'pl-[calc(1.5rem_-_3px)]',
          'data-[left-icon=true]:pl-[calc(2rem_-_2px)]'
        ],
        label: [
          'ml-[calc(1rem_-_2px)]',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-6'
        ]
      }
    },
    {
      variant: 'outlined',
      shape: 'rounded',
      size: 'lg',
      class: {
        input: [
          'pl-[calc(1.75rem_-_3px)]',
          'data-[left-icon=true]:pl-[calc(2.25rem_-_2px)]'
        ],
        label: [
          'ml-[calc(1.25rem_-_2px)]',
          'peer-data-[left-icon=true]:ml-[1px]'
        ],
        helper: [
          'ml-7'
        ]
      }
    },
    {
      type: 'date',
      class: {
        label: [
          'cursor-default'
        ]
      }
    },
    // outlined & soft
    {
      variant: 'outlined',
      shape: 'soft',
      class: {
        input: [
          'rounded-md'
        ]
      }
    },
    // filled & soft
    {
      variant: 'filled',
      shape: 'soft',
      class: {
        input: [
          'rounded-t-lg'
        ]
      }
    },
    // clear icon & size
    {
      clearable: true,
      size: 'xs',
      class: {
        clearIcon: [
          'data-[right-icon=true]:-translate-x-5'
        ]
      }
    },
    {
      clearable: true,
      size: 'sm',
      class: {
        clearIcon: [
          'data-[right-icon=true]:-translate-x-6'
        ]
      }
    },
    {
      clearable: true,
      size: 'md',
      class: {
        clearIcon: [
          'data-[right-icon=true]:-translate-x-7'
        ]
      }
    },
    {
      clearable: true,
      size: 'lg',
      class: {
        clearIcon: [
          'data-[right-icon=true]:-translate-x-8'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
