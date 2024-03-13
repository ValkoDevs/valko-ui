import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { InputProps } from '#valkoui/types'

const styles = tv({
  slots: {
    container: [
      'vk-input__container',
      'w-full',
      'flex',
      'flex-col',
      'justify-items-start'
    ],
    input: [
      'vk-input__input',
      'w-full',
      'px-2',
      'outline-none',
      'peer',
      'transition-colors',
      'duration-200',
      'ease-in-out',
      'focus:ring-0'
    ],
    label: [
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
      'delay-[125ms]',
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
      'w-full',
      'mt-1',
      'origin-top-left',
      'transition-all',
      'duration-200',
      'break-words',
      'break-before-all',
      'inline-block',
      'scale-[.8]'
    ],
    icon: [
      'opacity-80',
      'absolute',
      'transition-all',
      'top-1/2',
      '-translate-y-1/2'
    ],
    iconRight: [
      'right-1'
    ],
    iconLeft: [
      'left-1'
    ],
    iconOpen: [
      'rotate-180'
    ]
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
          'peer-data-[hasIcon=true]:ml-0.5'
        ],
        iconLeft: [
          'left-1.5'
        ],
        iconRight: [
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
        helper: [
          'text-dark-1',
          'dark:text-light-3'
        ],
        icon: [
          'text-dark-2',
          'peer-focus:text-primary-500',
          'dark:text-light-2'
        ]
      },
      secondary: {
        label: [
          'text-secondary-500',
          'peer-focus:text-secondary-600',
          'dark:text-secondary-500'
        ],
        helper: [
          'text-secondary-500',
          'dark:text-secondary-500'
        ],
        icon: [
          'text-secondary-500',
          'peer-focus:text-secondary-600',
          'dark:text-secondary-500'
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
        icon: [
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
        icon: [
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
        icon: [
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
        icon: [
          'text-error-500',
          'focus:text-error-950',
          'dark:text-error-500'
        ]
      },
      light: {
        label: [
          'text-white',
          'dark:text-white'
        ],
        helper: [
          'text-white',
          'dark:text-white'
        ],
        icon: [
          'text-white',
          'dark:text-white'
        ]
      },
      dark: {
        label: [
          'text-black',
          'dark:text-black'
        ],
        helper: [
          'text-black',
          'dark:text-black'
        ],
        icon: [
          'text-black',
          'dark:text-black'
        ]
      }
    },
    size: {
      xs: {
        input: [
          'h-10',
          'pt-2',
          'text-xs',
          'data-[hasIcon=true]:pl-6'
        ],
        label: [
          'text-xs',
          'peer-data-[hasIcon=true]:left-5'
        ],
        helper: [
          'text-xs'
        ],
        icon: [
          'text-[16px]'
        ]
      },
      sm: {
        input: [
          'h-12',
          'pt-2.5',
          'text-sm',
          'data-[hasIcon=true]:pl-7'
        ],
        label: [
          'text-sm',
          'peer-data-[hasIcon=true]:left-6'
        ],
        helper: [
          'text-sm'
        ],
        icon: [
          'text-[20px]'
        ]
      },
      md: {
        input: [
          'h-14',
          'pt-3',
          'text-base',
          'data-[hasIcon=true]:pl-8'
        ],
        label: [
          'text-base',
          'peer-data-[hasIcon=true]:left-7'
        ],
        helper: [
          'text-base'
        ],
        icon: [
          'text-[24px]'
        ]
      },
      lg: {
        input: [
          'h-16',
          'pt-4',
          'text-lg',
          'data-[hasIcon=true]:pl-9'
        ],
        label: [
          'text-lg',
          'peer-data-[hasIcon=true]:left-8'
        ],
        helper: [
          'text-lg'
        ],
        icon: [
          'text-[28px]'
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
      color: 'secondary',
      disabled: false,
      class: {
        input: [
          'border-secondary-300',
          'hover:border-secondary-400',
          'focus:border-secondary-500'
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
          'dark:focus:border-error-700',
          'text-white',
          'dark:text-white'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'light',
      disabled: false,
      class: {
        input: [
          'border-light-3',
          'hover:border-light-2',
          'focus:border-light-1',
          'dark:border-light-3',
          'dark:hover:border-light-2',
          'dark:focus:border-light-1'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'dark',
      disabled: false,
      class: {
        input: [
          'border-dark-3',
          'hover:border-dark-4',
          'focus:border-dark-5',
          'dark:border-dark-3',
          'dark:hover:border-dark-4',
          'dark:focus:border-dark-5',
          'text-black',
          'dark:text-black'
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
      color: 'secondary',
      disabled: false,
      class: {
        input: [
          'hover:border-secondary-300',
          'focus:border-secondary-400',
          'dark:border-light-1',
          'dark:hover:border-light-3',
          'dark:focus:border-light-5'
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
    {
      variant: 'ghost',
      color: 'light',
      disabled: false,
      class: {
        input: [
          'border-light-2',
          'focus:border-light-1',
          'dark:border-light-2',
          'dark:focus:border-light-1'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'dark',
      disabled: false,
      class: {
        input: [
          'border-dark-4',
          'focus:border-dark-5',
          'dark:border-dark-4',
          'dark:focus:border-dark-5'
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
      color: 'secondary',
      disabled: false,
      class: {
        input: [
          'focus:border-secondary-500'
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
    {
      variant: 'outlined',
      color: 'light',
      disabled: false,
      class: {
        input: [
          'border-light-2',
          'focus:border-light-1'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'dark',
      disabled: false,
      class: {
        input: [
          'border-dark-4',
          'focus:border-dark-5'
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
          'data-[hasIcon=true]:pl-6'
        ],
        label: [
          'ml-2',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:[calc(1.75rem_+_1px)]'
        ],
        label: [
          'ml-3',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:pl-8'
        ],
        label: [
          'ml-4',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:[calc(2.25rem_+_1px)]'
        ],
        label: [
          'ml-5',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:pl-[calc(1.5rem_-_2px)]'
        ],
        label: [
          'ml-[calc(0.5rem_-_2px)]',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:pl-[1.67rem]'
        ],
        label: [
          'ml-[calc(0.75rem_-_1px)]',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:pl-[calc(2rem_-_2px)]'
        ],
        label: [
          'ml-[calc(1rem_-_2px)]',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
          'data-[hasIcon=true]:pl-[calc(2.25rem_-_2px)]'
        ],
        label: [
          'ml-[calc(1.25rem_-_2px)]',
          'peer-data-[hasIcon=true]:ml-[1px]'
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
    }
  ]
})

export const useStyle = (props: InputProps) => computed(() => {
  const slots = styles(props)
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
})
