import { tv } from 'tailwind-variants'
import { TextareaProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: TextareaProps) => {
  const textarea = tv({
    slots: {
      textarea: [
        'peer',
        'transition-colors',
        'duration-200',
        'ease-in-out',
        'w-full',
        'focus:ring-0',
        'outline-none',
        'pb-1',
        'placeholder-shown:truncate',
        'px-2'
      ],
      label: [
        'flex',
        'px-1',
        'absolute',
        'top-1.5',
        'left-1',
        'transition-all',
        'duration-200',
        'peer-placeholder-shown:left-1',
        'peer-placeholder-shown:top-2',
        'peer-focus:top-1.5',
        'cursor-text',
        'truncate'
      ],
      container: [
        'relative',
        'w-full',
        'm-0',
        'p-0',
        'flex',
        'flex-col',
        'items-start'
      ],
      helper: [
        'transition-all',
        'duration-200',
        'mt-2',
        'break-words',
        'break-before-all',
        'inline-block',
        'w-full'
      ]
    },
    variants: {
      type: {
        filled: {
          textarea: [
            'rounded-t-md',
            'border-b-2',
            'bg-light-3',
            'focus:bg-light-4',
            'dark:bg-dark-3',
            'dark:focus:bg-dark-2'
          ]
        },
        ghost: {
          textarea: [
            'shadow-none',
            'border-b-2',
            'bg-inherit'
            
          ],
          label: [
            'shadow-none',
            'bg-inherit'

          ]
        },
        outlined: {
          textarea: [
            'rounded-md',
            'border-2',
            'bg-transparent'
          ],
          label: [
            '-top-1',
            'left-2',
            'peer-placeholder-shown:left-2',
            'bg-transparent',
            'peer-focus:bg-light-2',
            'dark:peer-focus:bg-dark-4',
            'peer-data-[filled=true]:-top-3.5',
            'peer-data-[filled=true]:bg-light-2',
            'dark:peer-data-[filled=true]:bg-dark-4',
            'peer-focus:-top-3.5',
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
          textarea: [
            'pt-6',
            'text-xs'
          ],
          label: [
            'text-xs'
          ],
          helper: [
            'text-xs'
          ]
        },
        sm: {
          textarea: [
            'pt-8',
            'text-sm'

          ],
          label: [
            'text-sm',
            'peer-data-[filled=true]:text-xs',
            'peer-focus:text-xs'
          ],
          helper: [
            'text-sm'
          ]
        },
        md: {
          textarea: [
            'pt-10',
            'text-base'
          ],
          label: [
            'text-base',
            'peer-data-[filled=true]:text-sm',
            'peer-focus:text-sm'
          ],
          helper: [
            'text-base'
          ]
        },
        lg: {
          textarea: [
            'pt-12',
            'text-lg'

          ],
          label: [
            'text-lg',
            'peer-data-[filled=true]:text-base',
            'peer-focus:text-base'
          ],
          helper: [
            'text-lg'
          ]
        }
      },
      flat: {
        true: {
          textarea: [
            'shadow-none'
          ]
        }
      },
      disabled: {
        true: {
          textarea: [
            'bg-gray-600',
            'opacity-50',
            'cursor-not-allowed',
            'text-gray-500',
            'border-gray-950',
            'hover:bg-gray-600',
            'dark:border-gray-600',
            'dark:hover:bg-gray-600',
            'peer-data-[filled=true]:border-gray-500',
            'peer-data-[filled=false]:border-gray-500',
            'dark:peer-data-[filled=true]:border-gray-500',
            'dark:peer-data-[filled=false]:border-gray-500',
          ],
          label: [
            'peer-data-[filled=true]:text-gray-500',
            'peer-data-[filled=false]:text-gray-500',
            'dark:peer-data-[filled=true]:text-gray-500',
            'dark:peer-data-[filled=false]:text-gray-500',
            'dark:bg-inherit',
            'peer-data-[filled=true]:bg-inherit',
            'peer-data-[filled=false]:bg-inherit',
            'dark:peer-data-[filled=true]:bg-inherit',
            'dark:peer-data-[filled=false]:bg-inherit',
          ],
          helper: [
            'text-gray-500'
          ]
        },
      },
      readonly: {
        true: {
          textarea: [
            'bg-gray-500',
            'opacity-50',
            'cursor-not-allowed',
            'text-gray-950',
            'border-gray-500',
            'hover:bg-gray-500',
            'focus:bg-gray-500'
          ],
          label: [
            'text-gray-500',
            'bg-inherit',
            'focus:bg-inherit',
            'peer-data-[filled=true]:bg-inherit',
            'peer-data-[filled=false]:bg-inherit',
            'dark:peer-data-[filled=true]:bg-inherit',
            'dark:peer-data-[filled=false]:bg-inherit'
          ]
        },
      }
    },
    compoundVariants: [
      // filled & color
      {
        type: 'filled',
        color: 'primary',
        disabled: false,
        class: {
          textarea: [
            'border-gray-300',
            'hover:border-gray-600',
            'focus:border-gray-950',
            'dark:border-light-5',
            'dark:hover:border-light-3',
            'dark:focus:border-light-1'
          ],
          helper: [
            'text-dark-1',
            'dark:text-light-3'
          ],
          label: [
            'text-dark-2',
            'focus:text-dark-4',
            'dark:text-light-2'
          ]
        }
      },
      {
        type: 'filled',
        color: 'secondary',
        disabled: false,
        class: {
          textarea: [
            'border-secondary-300',
            'hover:border-secondary-400',
            'focus:border-secondary-500'
          ],
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500'
          ]         
        }
      },
      {
        type: 'filled',
        color: 'success',
        disabled: false,
        class: {
          textarea: [
            'border-success-300',
            'hover:border-success-400',
            'focus:border-success-500',
            'dark:border-success-500',
            'dark:focus:border-success-700'
          ],
          helper: [
            'text-success-500',
            'dark:text-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'info',
        disabled: false,
        class: {
          textarea: [
            'border-info-300',
            'hover:border-info-400',
            'focus:border-info-500',
            'dark:border-info-500',
            'dark:focus:border-info-700'
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'warning',
        disabled: false,
        class: {
          textarea: [
            'border-warning-300',
            'hover:border-warning-400',
            'focus:border-warning-500',
            'dark:border-warning-500',
            'dark:focus:border-warning-700'
          ],
          helper: [
            'text-warning-500',
            'dark:text-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'error',
        disabled: false,
        class: {
          textarea: [
            'border-error-300',
            'hover:border-error-400',
            'focus:border-error-500',
            'dark:border-error-500',
            'dark:focus:border-error-700'
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500',
          ]
        }
      },
      // ghost & color
      {
        type: 'ghost',
        color: 'primary',
        disabled: false,
        class: {
          textarea: [
            'border-gray-300',
            'hover:border-gray-600',
            'focus:border-gray-950',
            'dark:border-light-5',
            'dark:hover:border-light-4',
            'dark:focus:border-light-3'
          ],
          helper: [
            'text-dark-1',
            'dark:text-light-3'
          ],
          label: [
            'text-dark-2',
            'focus:text-dark-4',
            'dark:text-light-2'
          ]
        }
      },
      {
        type: 'ghost',
        color: 'secondary',
        disabled: false,
        class: {
          textarea: [
            'border-secondary-300',
            'hover:border-secondary-300',
            'focus:border-secondary-400',
            'dark:border-light-1',
            'dark:hover:border-light-3',
            'dark:focus:border-light-5'
          ],
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500',
          ]
        }
      },
      {
        type: 'ghost',
        color: 'success',
        disabled: false,
        class: {
          textarea: [
            'border-success-300',
            'hover:border-success-300',
            'focus:border-success-400',
            'dark:border-success-400',
            'dark:focus:border-success-500'
          ],
          helper: [
            'text-success-500',
            'dark:text-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500',
          ]
        }
      },
      {
        type: 'ghost',
        color: 'info',
        disabled: false,
        class: {
          textarea: [
            'border-info-300',
            'hover:border-info-300',
            'focus:border-info-400',
            'dark:border-info-400',
            'dark:focus:border-info-500'
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ]
        }
      },
      {
        type: 'ghost',
        color: 'warning',
        disabled: false,
        class: {
          textarea: [
            'border-warning-300',
            'hover:border-warning-300',
            'focus:border-warning-400',
            'dark:border-warning-400',
            'dark:focus:border-warning-500'
          ],
          helper: [
            'text-warning-500',
            'dark:text-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500',
          ]
        }
      },
      {
        type: 'ghost',
        color: 'error',
        disabled: false,
        class: {
          textarea: [
            'border-error-300',
            'hover:border-error-300',
            'focus:border-error-400',
            'dark:border-error-400',
            'dark:focus:border-error-500'
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500',
          ]
        }
      },
      // outlined & color
      {
        type: 'outlined',
        color: 'primary',
        disabled: false,
        class: {
          textarea: [
            'border-gray-200',
            'hover:border-gray-300',
            'focus:border-gray-400',
          ],
          helper: [
            'text-dark-1',
            'dark:text-light-3'
          ],
          label: [
            'text-dark-2',
            'focus:text-dark-4',
            'dark:text-light-2'
          ]
        }
      },
      {
        type: 'outlined',
        color: 'secondary',
        disabled: false,
        class: {
          textarea: [
            'border-secondary-300',
            'hover:border-secondary-400',
            'focus:border-secondary-500'
          ],
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500',
          ]
        }
      },
      {
        type: 'outlined',
        color: 'success',
        disabled: false,
        class: {
          textarea: [
            'border-success-400',
            'hover:border-success-500',
            'focus:border-success-600'
          ],
          helper: [
            'text-success-500',
            'dark:text-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500',
          ]
        }
      },
      {
        type: 'outlined',
        color: 'info',
        disabled: false,
        class: {
          textarea: [
            'border-info-400',
            'hover:border-info-500',
            'focus:border-info-600'
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ]
        }
      },
      {
        type: 'outlined',
        color: 'warning',
        disabled: false,
        class: {
          textarea: [
            'border-warning-400',
            'hover:border-warning-500',
            'focus:border-warning-600'
          ],
          helper: [
            'text-warning-500',
            'dark:text-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500',
          ]
        }
      },
      {
        type: 'outlined',
        color: 'error',
        disabled: false,
        class: {
          textarea: [
            'border-error-400',
            'hover:border-error-500',
            'focus:border-error-600'
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500',
          ]
        }
      },
      // outlined & size
      {
        type: 'outlined',
        size: 'xs',
        disabled: false,
        class: {
          label: [
            'peer-data-[filled=true]:-top-2',
            'peer-focus:-top-2',
            'peer-data-[filled=true]:text-xs',
            'peer-focus:text-xs'
          ],
          textarea: [
            'py-3'
          ]
        }
      },
      {
        type: 'outlined',
        size: 'sm',
        disabled: false,
        class: {
          label: [
            'peer-data-[filled=true]:-top-2.5',
            'peer-focus:-top-2.5',
            'peer-data-[filled=true]:text-sm',
            'peer-focus:text-sm'
          ],
          textarea: [
            'py-4'
          ]
        }
      },
      {
        type: 'outlined',
        size: 'md',
        disabled: false,
        class: {
          label: [
            'peer-data-[filled=true]:-top-3',
            'peer-focus:-top-3',
            'peer-data-[filled=true]:text-md',
            'peer-focus:text-md'
          ],
          textarea: [
            'py-5'
          ]
        }
      },
      {
        type: 'outlined',
        size: 'lg',
        disabled: false,
        class: {
          label: [
            'peer-data-[filled=true]:text-lg',
            'peer-focus:text-lg'
          ],
          textarea: [
            'py-6'
          ]
        }
      },
      // filled & ghost & rounded
      {
        type: ['filled','ghost'],
        rounded: true,
        size: 'xs',
        class: {
          textarea: [
            'py-3'
          ],
          label: [
            'peer-placeholder-shown:top-3'
          ]
        }
      },
      {
        type: ['filled','ghost'],
        rounded: true,
        size: 'sm',
        class: {
          textarea: [
            'py-4'
          ],
          label: [
            'peer-placeholder-shown:top-4'
          ]
        }
      },
      {
        type: ['filled','ghost'],
        rounded: true,
        size: 'md',
        class: {
          textarea: [
            'py-5'
          ],
          label: [
            'peer-placeholder-shown:top-5'
          ]
        }
      },
      {
        type: ['filled','ghost'],
        rounded: true,
        size: 'lg',
        class: {
          textarea: [
            'py-6'
          ],
          label: [
            'peer-placeholder-shown:top-6'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = textarea({
      color: props.variant,
      size: props.size,
      flat: props.flat,
      type: props.type,
      disabled: props.disabled,
      readonly: props.readonly
    })

    return {
      textarea: slots.textarea(),
      label: slots.label(),
      container: slots.container(),
      helper: slots.helper(),
    }
  })
}

export default useStyle
