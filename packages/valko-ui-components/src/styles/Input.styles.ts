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
      'text-on-surface',
      'data-[right-icon=false]:pr-2',
      'data-[right-icon=true]:pr-8'
    ],
    label: [
      'vk-input__label',
      'text-on-surface-variant',
      'text-left',
      'font-bold',
      'truncate',
      'p-1',
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
      'items-start'
    ],
    helper: [
      'vk-input__helper',
      'break-normal',
      'text-on-surface-variant'
    ],
    icons: [
      'cursor-pointer',
      'text-on-surface-variant',
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
      'text-on-surface-variant',
      'cursor-pointer',
      'absolute',
      'transition-all',
      'top-1/2',
      '-translate-y-1/2',
      'scale-90',
      'right-1'
    ],
    numberArrows: [
      'vk-input__number-arrows',
      'text-on-surface-variant',
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
          'bg-surface-container-highest',
          'border-b-2',
          'border-on-surface-variant'
        ]
      },
      ghost: {
        input: [
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
        input: [
          'bg-inherit',
          'border-2',
          'border-outlined'
        ],
        label: [
          'px-3.5',
          'left-3',
          'bg-inherit'
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
          'hover:border-primary',
          'focus:border-primary'
        ],
        label: [
          'peer-focus:text-primary'
        ],
        icons: [
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
          'hover:border-secondary',
          'focus:border-secondary'
        ],
        label: [
          'peer-focus:text-secondary'
        ],
        icons: [
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
          'hover:border-positive',
          'focus:border-positive'
        ],
        label: [
          'peer-focus:text-positive'
        ],
        icons: [
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
          'hover:border-accent',
          'focus:border-accent'
        ],
        label: [
          'peer-focus:text-accent'
        ],
        icons: [
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
          'hover:border-warning',
          'focus:border-warning'
        ],
        label: [
          'peer-focus:text-warning'
        ],
        icons: [
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
          'hover:border-negative',
          'focus:border-negative'
        ],
        label: [
          'peer-focus:text-negative'
        ],
        icons: [
          'peer-focus:text-negative'
        ],
        clearIcon: [
          'hover:text-negative'
        ],
        chevrons: [
          'hover:text-negative'
        ]
      },
      surface: {
        input: [
          'hover:border-on-surface-variant',
          'focus:border-on-surface-variant'
        ],
        label: [
          'peer-focus:text-on-surface-variant'
        ],
        icons: [
          'peer-focus:text-on-surface-variant'
        ],
        clearIcon: [
          'hover:text-on-surface-variant'
        ],
        chevrons: [
          'hover:text-on-surface-variant'
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
          'peer-data-[left-icon=true]:left-8'
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
        container: [
          'opacity-50'
        ],
        input: [
          'text-disabled',
          'border-disabled',
          'hover:border-disabled',
          'focus:border-disabled'
        ],
        label: [
          'peer-data-[filled=true]:bg-inherit',
          'peer-data-[filled=false]:bg-inherit',
          'peer-data-[filled=true]:text-disabled',
          'peer-data-[filled=false]:text-disabled'
        ],
        helper: [
          'text-disabled'
        ]
      }
    },
    cursor: {
      pointer: {},
      text: {}
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
    // outlined & size
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        input: [
          'py-1'
        ],
        label: [
          'peer-focus:-top-3',
          'peer-data-[filled=true]:-top-3',
          'peer-data-[left-icon=true]:left-3.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        input: [
          'py-2'
        ],
        label: [
          'peer-focus:-top-3.5',
          'peer-data-[filled=true]:-top-3.5',
          'peer-data-[left-icon=true]:left-4.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        input: [
          'py-3'
        ],
        label: [
          'peer-focus:-top-4',
          'peer-data-[filled=true]:-top-4',
          'peer-data-[left-icon=true]:left-5.5'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        input: [
          'py-3.5'
        ],
        label: [
          'peer-focus:-top-4.5',
          'peer-data-[filled=true]:-top-4.5',
          'peer-data-[left-icon=true]:left-6.5'
        ]
      }
    },
    // outlined & rounded
    {
      variant: 'outlined',
      shape: 'rounded',
      size: 'xs',
      class: {
        label: [
          'left-3.5'
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
        label: [
          'left-4.5'
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
        label: [
          'left-5.5'
        ],
        helper: [
          'ml-6'
        ]
      }
    },
    {
      variant: 'outlined',
      shape: 'rounded',
      class: {
        label: [
          'left-6.5'
        ],
        helper: [
          'ml-7'
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
    },
    {
      type: 'date',
      class: {
        label: [
          'cursor-default'
        ]
      }
    },
    // cursor & disabled
    {
      cursor: ['pointer', 'text'],
      disabled: true,
      class: {
        input: [
          'cursor-not-allowed'
        ],
        label: [
          'cursor-not-allowed'
        ]
      }
    },
    {
      cursor: 'pointer',
      disabled: false,
      class: {
        input: [
          'cursor-pointer'
        ],
        label: [
          'cursor-pointer'
        ]
      }
    },
    {
      cursor: 'text',
      disabled: false,
      class: {
        input: [
          'cursor-text'
        ],
        label: [
          'cursor-text'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
