import { tv } from 'tailwind-variants'
import { InputProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: InputProps) => {
  const input = tv({
    slots: {
      container: [
        'w-full',
        'flex',
        'flex-col',
        'justify-items-start'
      ],
      input: [
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
        'cursor-text',
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
        'w-full',
        'mt-1',
        'origin-top-left',
        'transition-all',
        'duration-200',
        'break-words',
        'break-before-all',
        'inline-block',
        'scale-[.8]'
      ]
    },
    variants: {
      kind: {
        filled: {
          input: [
            'rounded-t-md',
            'bg-light-3',
            'dark:bg-dark-3',
            'border-b-2'
          ]
        },
        ghost: {
          input: [
            'shadow-none',
            'bg-inherit',
            'border-b-2',
            'border-light-5'
          ],
          label: [
            'shadow-none',
            'bg-inherit'
          ]
        },
        outlined: {
          input: [
            'rounded-md',
            'px-2',
            'bg-light-3',
            'border-2',
            'border-light-5/[.2]'
          ],
          label: [
            'left-1.5',
            'bg-transparent'
          ]
        }
      },
      color: {
        primary: {},
        secondary: {},
        success: {},
        info: {},
        warning: {},
        error: {}
      },
      size: {
        xs: {
          input: [
            'text-xs',
            'h-10',
            'pt-2'
          ],
          label: [
            'text-xs'
          ],
          helper: [
            'text-xs'
          ]
        },
        sm: {
          input: [
            'text-sm',
            'h-12',
            'pt-2.5'
          ],
          label: [
            'text-sm'
          ],
          helper: [
            'text-sm'
          ]
        },
        md: {
          input: [
            'text-base',
            'h-14',
            'pt-3'
          ],
          label: [
            'text-base'
          ],
          helper: [
            'text-base'
          ]
        },
        lg: {
          input: [
            'text-lg',
            'h-16',
            'pt-4'
          ],
          label: [
            'text-lg'
          ],
          helper: [
            'text-lg'
          ]
        }
      },
      rounded: {
        true: {
          input: [
            'rounded-full'
          ]
        }
      },
      flat: {
        true: {
          input: [
            'shadow-none'
          ]
        }
      },
      disabled: {
        true: {
          input: [
            'bg-gray-500',
            'opacity-25',
            'text-gray-500',
            'border-gray-950',
            'cursor-not-allowed',
            'dark:border-gray-600',
            'peer-data-[filled=true]:border-gray-500',
            'peer-data-[filled=false]:border-gray-500',
            'dark:peer-data-[filled=true]:border-gray-500',
            'dark:peer-data-[filled=false]:border-gray-500'
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
        },
      },
      type: {
        text: 'text',
        password: 'password',
        email: 'email',
        date: 'date'
      }
    },
    compoundVariants: [
      // filled & color
      {
        kind: 'filled',
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
          ],
          label: [
            'text-dark-2',
            'peer-focus:text-primary-500',
            'dark:text-light-2'
          ],
          helper: [
            'text-dark-1',
            'dark:text-light-3'
          ]
        }
      },
      {
        kind: 'filled',
        color: 'secondary',
        disabled: false,
        class: {
          input: [
            'border-secondary-300',
            'hover:border-secondary-400',
            'focus:border-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'peer-focus:text-secondary-600',
            'dark:text-secondary-500'
          ],         
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ]
        }
      },
      {
        kind: 'filled',
        color: 'success',
        disabled: false,
        class: {
          input: [
            'border-success-300',
            'hover:border-success-400',
            'focus:border-success-500',
            'dark:border-success-500',
            'dark:focus:border-success-700'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500'
          ],
          helper: [
            'text-success-500',
            'dark:text-success-500'
          ]
        }
      },
      {
        kind: 'filled',
        color: 'info',
        disabled: false,
        class: {
          input: [
            'border-info-300',
            'hover:border-info-400',
            'focus:border-info-500',
            'dark:border-info-500',
            'dark:focus:border-info-700'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ]
        }
      },
      {
        kind: 'filled',
        color: 'warning',
        disabled: false,
        class: {
          input: [
            'border-warning-300',
            'hover:border-warning-400',
            'focus:border-warning-500',
            'dark:border-warning-500',
            'dark:focus:border-warning-700'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500'
          ],
          helper: [
            'text-warning-500',
            'dark:text-warning-500'
          ]
        }
      },
      {
        kind: 'filled',
        color: 'error',
        disabled: false,
        class: {
          input: [
            'border-error-300',
            'hover:border-error-400',
            'focus:border-error-500',
            'dark:border-error-500',
            'dark:focus:border-error-700'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500',
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ]
        }
      },
      // ghost & color
      {
        kind: 'ghost',
        color: 'primary',
        disabled: false,
        class: {
          input: [
            'focus:border-primary-500',
            'dark:border-light-5',
            'dark:hover:border-light-4',
            'dark:focus:border-primary-500'
          ],
          label: [
            'text-dark-2',
            'focus:text-dark-4',
            'dark:text-light-2',
            'peer-focus:text-primary-500'
          ],
          helper: [
            'text-dark-1',
            'dark:text-light-3'
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'secondary',
        disabled: false,
        class: {
          input: [
            'hover:border-secondary-300',
            'focus:border-secondary-400',
            'dark:border-light-1',
            'dark:hover:border-light-3',
            'dark:focus:border-light-5'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500',
          ],
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'success',
        disabled: false,
        class: {
          input: [
            'border-success-400',
            'focus:border-success-500',
            'dark:border-success-400',
            'dark:focus:border-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500'
          ],
          helper: [
            'text-success-500',
            'dark:text-success-500'
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'info',
        disabled: false,
        class: {
          input: [
            'border-info-400',
            'focus:border-info-500',
            'dark:border-info-400',
            'dark:focus:border-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500'
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'warning',
        disabled: false,
        class: {
          input: [
            'border-warning-400',
            'focus:border-warning-500',
            'dark:border-warning-400',
            'dark:focus:border-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500'
          ],
          helper: [
            'text-warning-500',
            'dark:text-warning-500'
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'error',
        disabled: false,
        class: {
          input: [
            'border-error-400',
            'focus:border-error-500',
            'dark:border-error-400',
            'dark:focus:border-error-500'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500'
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ]
        }
      },
      // outlined & color
      {
        kind: 'outlined',
        color: 'primary',
        disabled: false,
        class: {
          input: [
            'focus:border-primary-500'
          ],
          label: [
            'text-dark-2',
            'focus:text-dark-4',
            'dark:text-light-2',
            'peer-focus:text-primary-500'
          ],
          helper: [
            'text-dark-1',
            'dark:text-light-3'
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'secondary',
        disabled: false,
        class: {
          input: [
            'focus:border-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500'
          ],
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'success',
        disabled: false,
        class: {
          input: [
            'border-success-500',
            'focus:border-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500'
          ],
          helper: [
            'text-success-500',
            'dark:text-success-500'
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'info',
        disabled: false,
        class: {
          input: [
            'border-info-600',
            'focus:border-info-600'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500'
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'warning',
        disabled: false,
        class: {
          input: [
            'border-warning-600',
            'focus:border-warning-600'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500'
          ],
          helper: [
            'text-warning-500',
            'dark:text-warning-500'
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'error',
        disabled: false,
        class: {
          input: [
            'border-error-600',
            'focus:border-error-600'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500'
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ]
        }
      },
      // filled & ghost & rounded
      {
        kind: ['filled', 'ghost'],
        rounded: true,
        size: 'xs',
        class: {
          input: [
            'pl-3'
          ],
          label: [
            'ml-2'
          ],
          helper: [
            'ml-4'
          ]
        }
      },
      {
        kind: ['filled', 'ghost'],
        rounded: true,
        size: 'sm',
        class: {
          input: [
            'pl-5'
          ],
          label: [
            'ml-3'
          ],
          helper: [
            'ml-6'
          ] 
        }
      },
      {
        kind: ['filled', 'ghost'],
        rounded: true,
        size: 'md',
        class: {
          input: [
            'pl-6'
          ],
          label: [
            'ml-4'
          ],
          helper: [
            'ml-6'
          ]
        }
      },
      {
        kind: ['filled', 'ghost'],
        rounded: true,
        size: 'lg',
        class: {
          input: [
            'pl-7'
          ],
          label: [
            'ml-5'
          ],
          helper: [
            'ml-8'
          ]
        }
      },
      // outlined & rounded
      {
        kind: 'outlined',
        rounded: true,
        size: 'xs',
        class: {
          input: [
            'pl-[calc(1rem_-_3px)]'
          ],
          label: [
            'ml-[calc(0.5rem_-_2px)]'
          ],
          helper: [
            'ml-4'
          ]
        }
      },
      {
        kind: 'outlined',
        rounded: true,
        size: 'sm',
        class: {
          input: [
            'pl-[calc(1.17rem_-_1px)]'
          ],
          label: [
            'ml-[calc(0.75rem_-_1px)]'
          ],
          helper: [
            'ml-5'
          ]
        }
      },
      {
        kind: 'outlined',
        rounded: true,
        size: 'md',
        class: {
          input: [
            'pl-[calc(1.5rem_-_3px)]'
          ],
          label: [
            'ml-[calc(1rem_-_2px)]'
          ],
          helper: [
            'ml-6'
          ]
        }
      },
      {
        kind: 'outlined',
        rounded: true,
        size: 'lg',
        class: {
          input: [
            'pl-[calc(1.75rem_-_3px)]'
          ],
          label: [
            'ml-[calc(1.25rem_-_2px)]'
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
      }
    ]
  })

  return computed(() => {
    const slots = input({
      color: props.variant,
      size: props.size,
      rounded: props.rounded,
      flat: props.flat,
      type: props.type,
      kind: props.kind,
      disabled: props.disabled,
    })

    return {
      container: slots.container(),
      field: slots.field(),
      input: slots.input(),
      label: slots.label(),
      helper: slots.helper()
    }
  })
}

export default useStyle
