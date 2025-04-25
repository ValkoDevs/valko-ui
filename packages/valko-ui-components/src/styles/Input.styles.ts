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
      'focus:ring-0',
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
      'h-full',
      'm-0',
      'p-0',
      'flex',
      'flex-col',
      'items-start',
      'hover:bg-state-hover',
      'active:bg-state-active',
      'focus:bg-state-focus'
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
      'text-on-surface-container',
      'cursor-pointer',
      'opacity-80',
      'absolute',
      'transition-all',
      'top-1/2',
      '-translate-y-1/2',
      'scale-90',
      'right-1'
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
          'bg-surface-container-high',
          'border-b-2',
          'border-surface-container-highest'
        ]
      },
      ghost: {
        input: [
          'bg-inherit',
          'border-b-2',
          'border-surface-container-highest'
        ],
        label: [
          'bg-inherit'
        ]
      },
      outlined: {
        input: [
          'px-2',
          'bg-surface-container-low',
          'border-2',
          'border-surface-container'
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
        input: [
          'hover:border-primary-container',
          'focus:border-on-primary-container'
        ],
        label: [
          'text-on-surface-container',
          'peer-focus:text-primary'
        ],
        icons: [
          'text-on-surface-container',
          'peer-focus:text-primary'
        ],
        clearIcon: [
          'hover:text-primary'
        ],
        chevrons: [
          'hover:text-primary'
        ]
      },
      secondary: {
        input: [
          'hover:border-secondary-container',
          'focus:border-on-secondary-container'
        ],
        label: [
          'text-on-surface-container',
          'peer-focus:text-secondary'
        ],
        icons: [
          'text-on-surface-container',
          'peer-focus:text-secondary'
        ],
        clearIcon: [
          'hover:text-secondary'
        ],
        chevrons: [
          'hover:text-secondary'
        ]
      },
      positive: {
        input: [
          'hover:border-positive-container',
          'focus:border-on-positive-container'
        ],
        label: [
          'text-on-surface-container',
          'peer-focus:text-positive'
        ],
        icons: [
          'text-on-surface-container',
          'peer-focus:text-positive'
        ],
        clearIcon: [
          'hover:text-positive'
        ],
        chevrons: [
          'hover:text-positive'
        ]
      },
      accent: {
        input: [
          'hover:border-accent-container',
          'focus:border-on-accent-container'
        ],
        label: [
          'text-on-surface-container',
          'peer-focus:text-accent'
        ],
        icons: [
          'text-on-surface-container',
          'peer-focus:text-accent'
        ],
        clearIcon: [
          'hover:text-accent'
        ],
        chevrons: [
          'hover:text-accent'
        ]
      },
      warning: {
        input: [
          'hover:border-warning-container',
          'focus:border-on-warning-container'
        ],
        label: [
          'text-on-surface-container',
          'peer-focus:text-warning'
        ],
        icons: [
          'text-on-surface-container',
          'peer-focus:text-warning'
        ],
        clearIcon: [
          'hover:text-warning'
        ],
        chevrons: [
          'hover:text-warning'
        ]
      },
      negative: {
        input: [
          'hover:border-positive-container',
          'focus:border-on-positive-container'
        ],
        label: [
          'text-on-surface-container',
          'peer-focus:text-positive'
        ],
        icons: [
          'text-on-surface-container',
          'peer-focus:text-positive'
        ],
        clearIcon: [
          'hover:text-positive'
        ],
        chevrons: [
          'hover:text-positive'
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
        ],
        field: [
          'rounded-full'
        ]
      },
      soft: {},
      square: {
        input: [
          'rounded-none'
        ],
        field: [
          'rounded-none'
        ]
      }
    },
    disabled: {
      true: {
        input: [
          'bg-disabled',
          'text-on-disabled',
          'border-disabled-container',
          'cursor-not-allowed'
        ],
        label: [
          'peer-data-[filled=true]:bg-inherit',
          'peer-data-[filled=false]:bg-inherit',
          'peer-data-[filled=true]:text-on-disabled',
          'peer-data-[filled=false]:text-on-disabled'
        ],
        helper: [
          'text-on-disabled'
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
        ],
        field: [
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
        ],
        field: [
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
