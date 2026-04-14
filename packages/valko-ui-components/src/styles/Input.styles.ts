import { tv } from 'tailwind-variants'

const input = tv({
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
      'pl-4',
      'pr-4',
      'outline-none',
      'peer',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'overflow-hidden',
      'focus:ring-0',
      'text-on-surface'
    ],
    label: [
      'vk-input__label',
      'text-on-surface-variant',
      'text-left',
      'truncate',
      'absolute',
      'top-1/2',
      'left-4',
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
      'text-on-surface-variant',
      'px-4'
    ],
    icons: [
      'cursor-pointer',
      'text-on-surface-variant',
      'transition-all'
    ],
    rightIconsContainer: [
      'vk-input__right-icons',
      'absolute',
      'right-3',
      'top-1/2',
      '-translate-y-1/2',
      'flex',
      'items-center'
    ],
    rightIcon: [],
    leftIcon: [
      'absolute',
      'top-1/2',
      '-translate-y-1/2',
      'left-3'
    ],
    clearIcon: [
      'vk-input__clear-icon',
      'text-on-surface-variant',
      'cursor-pointer',
      'transition-all'
    ],
    numberArrows: [
      'vk-input__number-arrows',
      'text-on-surface-variant',
      'flex',
      'flex-col',
      'gap-1',
      'cursor-pointer'
    ],
    chevrons: [],
    suffixIcon: []
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
          'px-1',
          'left-3',
          'bg-inherit'
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
          'hover:text-primary',
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
          'hover:text-secondary',
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
          'border-positive',
          'hover:border-positive',
          'focus:border-positive'
        ],
        label: [
          'text-positive',
          'peer-focus:text-positive'
        ],
        icons: [
          'text-positive',
          'hover:text-positive',
          'peer-focus:text-positive'
        ],
        clearIcon: [
          'text-positive',
          'hover:text-positive'
        ],
        chevrons: [
          'text-positive',
          'hover:text-positive'
        ],
        helper: [
          'text-positive'
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
          'hover:text-accent',
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
          'border-warning',
          'hover:border-warning',
          'focus:border-warning'
        ],
        label: [
          'text-warning',
          'peer-focus:text-warning'
        ],
        icons: [
          'text-warning',
          'hover:text-warning',
          'peer-focus:text-warning'
        ],
        clearIcon: [
          'text-warning',
          'hover:text-warning'
        ],
        chevrons: [
          'text-warning',
          'hover:text-warning'
        ],
        helper: [
          'text-warning'
        ]
      },
      negative: {
        input: [
          'border-negative',
          'hover:border-negative',
          'focus:border-negative'
        ],
        label: [
          'text-negative',
          'peer-focus:text-negative'
        ],
        icons: [
          'text-negative',
          'hover:text-negative',
          'peer-focus:text-negative'
        ],
        clearIcon: [
          'text-negative',
          'hover:text-negative'
        ],
        chevrons: [
          'text-negative',
          'hover:text-negative'
        ],
        helper: [
          'text-negative'
        ]
      },
      surface: {
        input: [
          'hover:border-on-surface',
          'focus:border-on-surface'
        ],
        label: [
          'peer-focus:text-on-surface'
        ],
        icons: [
          'hover:text-text-on-surface',
          'peer-focus:text-on-surface'
        ],
        clearIcon: [
          'hover:text-on-surface'
        ],
        chevrons: [
          'hover:text-on-surface'
        ]
      }
    },
    size: {
      xs: {
        input: [
          'h-10',
          'pt-2',
          'text-xs',
          'data-[left-icon=true]:pl-11',
          'data-[right-icon-count="1"]:pr-11',
          'data-[right-icon-count="2"]:pr-17',
          'data-[right-icon-count="3"]:pr-23',
          'data-[right-icon-count="4"]:pr-29'
        ],
        label: [
          'text-xs',
          'peer-data-[left-icon=true]:left-11'
        ],
        helper: [
          'text-xs'
        ],
        icons: [
          'text-base'
        ],
        rightIconsContainer: [
          'gap-1'
        ],
        clearIcon: [
          'text-xs'
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
          'data-[left-icon=true]:pl-12',
          'data-[right-icon-count="1"]:pr-12',
          'data-[right-icon-count="2"]:pr-19',
          'data-[right-icon-count="3"]:pr-26',
          'data-[right-icon-count="4"]:pr-33'
        ],
        label: [
          'text-sm',
          'peer-data-[left-icon=true]:left-12'
        ],
        helper: [
          'text-xs'
        ],
        icons: [
          'text-xl'
        ],
        rightIconsContainer: [
          'gap-1.5'
        ],
        clearIcon: [
          'text-sm'
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
          'data-[left-icon=true]:pl-13',
          'data-[right-icon-count="1"]:pr-13',
          'data-[right-icon-count="2"]:pr-21',
          'data-[right-icon-count="3"]:pr-29',
          'data-[right-icon-count="4"]:pr-37'
        ],
        label: [
          'text-base',
          'peer-data-[left-icon=true]:left-13'
        ],
        helper: [
          'text-sm'
        ],
        icons: [
          'text-2xl'
        ],
        rightIconsContainer: [
          'gap-2'
        ],
        clearIcon: [
          'text-base'
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
          'data-[left-icon=true]:pl-14',
          'data-[right-icon-count="1"]:pr-14',
          'data-[right-icon-count="2"]:pr-23',
          'data-[right-icon-count="3"]:pr-32',
          'data-[right-icon-count="4"]:pr-41'
        ],
        label: [
          'text-lg',
          'peer-data-[left-icon=true]:left-14'
        ],
        helper: [
          'text-base'
        ],
        icons: [
          'text-[28px]'
        ],
        rightIconsContainer: [
          'gap-2.5'
        ],
        clearIcon: [
          'text-lg'
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
          'rounded-full',
          'pl-6',
          'pr-6'
        ],
        field: [
          'rounded-full'
        ],
        label: [
          'left-6'
        ],
        leftIcon: [
          'left-4'
        ],
        rightIconsContainer: [
          'right-4'
        ],
        helper: [
          'px-6'
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
    // shapes - sizes - types
    {
      shape: 'rounded',
      type: ['text', 'email', 'password'],
      size: 'xs',
      class: {
        input: [
          'data-[left-icon=true]:pl-13',
          'data-[right-icon-count="1"]:pr-13',
          'data-[right-icon-count="2"]:pr-19',
          'data-[right-icon-count="3"]:pr-25',
          'data-[right-icon-count="4"]:pr-31'
        ],
        label: [
          'peer-data-[left-icon=true]:left-13'
        ]
      }
    },
    {
      shape: 'rounded',
      type: ['text', 'email', 'password'],
      size: 'sm',
      class: {
        input: [
          'data-[left-icon=true]:pl-14',
          'data-[right-icon-count="1"]:pr-14',
          'data-[right-icon-count="2"]:pr-21',
          'data-[right-icon-count="3"]:pr-28',
          'data-[right-icon-count="4"]:pr-35'
        ],
        label: [
          'peer-data-[left-icon=true]:left-14'
        ]
      }
    },
    {
      shape: 'rounded',
      type: ['text', 'email', 'password'],
      size: 'md',
      class: {
        input: [
          'data-[left-icon=true]:pl-15',
          'data-[right-icon-count="1"]:pr-15',
          'data-[right-icon-count="2"]:pr-23',
          'data-[right-icon-count="3"]:pr-31',
          'data-[right-icon-count="4"]:pr-39'
        ],
        label: [
          'peer-data-[left-icon=true]:left-15'
        ]
      }
    },
    {
      shape: 'rounded',
      type: ['text', 'email', 'password'],
      size: 'lg',
      class: {
        input: [
          'data-[left-icon=true]:pl-16',
          'data-[right-icon-count="1"]:pr-16',
          'data-[right-icon-count="2"]:pr-25',
          'data-[right-icon-count="3"]:pr-34',
          'data-[right-icon-count="4"]:pr-43'
        ],
        label: [
          'peer-data-[left-icon=true]:left-16'
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
          'left-5',
          'peer-data-[left-icon=true]:peer-data-[filled=true]:left-6',
          'peer-data-[left-icon=true]:peer-focus:left-6'
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
          'peer-focus:-top-2',
          'peer-data-[filled=true]:-top-2'
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
          'peer-focus:-top-2.5',
          'peer-data-[filled=true]:-top-2.5'
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
          'peer-focus:-top-3',
          'peer-data-[filled=true]:-top-3'
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
          'peer-focus:-top-3.5',
          'peer-data-[filled=true]:-top-3.5'
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
})

export default input
export type InputSlots = typeof input.slots
