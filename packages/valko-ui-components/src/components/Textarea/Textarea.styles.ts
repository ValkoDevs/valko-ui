import { tv } from 'tailwind-variants'
import { TextareaProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: TextareaProps) => {
  const textarea = tv({
    slots: {
      container: [
        'w-full',
        'flex',
        'flex-col',
        'justify-items-start'
      ],
      textarea: [
        'w-full',
        'px-2',
        'align-middle',
        'outline-none',
        'peer',
        'transition-colors',
        'duration-200',
        'ease-in-out',
        'focus:ring-0',
        'min-h-[128px]',
        'h-[128px]'
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
        'top-1',
        'left-1',
        'transition-all',
        'duration-200',
        'origin-[center_left]',
        'peer-focus:scale-[.8]',
        'peer-data-[filled=true]:scale-[.8]',
        'peer-focus:top-0',
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
        'grow'
      ],
      counter: [
        'w-fit',
        'whitespace-nowrap'
      ],
      footer: [
        'w-full',
        'flex',
        'justify-between'
      ]
    },
    variants: {
      type: {
        filled: {
          textarea: [
            'rounded-t-md',
            'bg-light-3',
            'dark:bg-dark-3',
            'border-b-2'
          ]
        },
        ghost: {
          textarea: [
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
          textarea: [
            'rounded-md',
            'px-2',
            'bg-light-3',
            'dark:bg-dark-3',
            'border-2',
            'border-dark-1'
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
          textarea: [
            'text-xs',
            'pt-3'
          ],
          label: [
            'text-xs'
          ],
          helper: [
            'text-xs'
          ],
          counter: [
            'text-xs'
          ]
        },
        sm: {
          textarea: [
            'text-sm',
            'pt-4'
          ],
          label: [
            'text-sm'
          ],
          helper: [
            'text-sm'
          ],
          counter: [
            'text-sm'
          ]
        },
        md: {
          textarea: [
            'text-base',
            'pt-5'
          ],
          label: [
            'text-base'
          ],
          helper: [
            'text-base'
          ],
          counter: [
            'text-base'
          ]
        },
        lg: {
          textarea: [
            'text-lg',
            'pt-6'
          ],
          label: [
            'text-lg'
          ],
          helper: [
            'text-lg'
          ],
          counter: [
            'text-lg'
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
          ],
          counter: [
            'text-dark-1',
            'dark:text-light-3'
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
          label: [
            'text-secondary-500',
            'peer-focus:text-secondary-600',
            'dark:text-secondary-500'
          ],         
          helper: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ],
          counter: [
            'text-secondary-500',
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
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ],
          helper: [
            'text-info-500',
            'dark:text-info-500'
          ],
          counter: [
            'text-info-500',
            'dark:text-info-500'
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
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500',
          ],
          helper: [
            'text-error-500',
            'dark:text-error-500'
          ],
          counter: [
            'text-error-500',
            'dark:text-error-500'
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
          ],
          counter: [
            'text-dark-1',
            'dark:text-light-3'
          ]
        }
      },
      {
        type: 'ghost',
        color: 'secondary',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ]
        }
      },
      {
        type: 'ghost',
        color: 'success',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-success-500',
            'dark:text-success-500'
          ]
        }
      },
      {
        type: 'ghost',
        color: 'info',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-info-500',
            'dark:text-info-500'
          ]
        }
      },
      {
        type: 'ghost',
        color: 'warning',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-warning-500',
            'dark:text-warning-500'
          ]
        }
      },
      {
        type: 'ghost',
        color: 'error',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-error-500',
            'dark:text-error-500'
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
          ],
          counter: [
            'text-dark-1',
            'dark:text-light-3'
          ]
        }
      },
      {
        type: 'outlined',
        color: 'secondary',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-secondary-500',
            'dark:text-secondary-500'
          ]
        }
      },
      {
        type: 'outlined',
        color: 'success',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-success-500',
            'dark:text-success-500'
          ]
        }
      },
      {
        type: 'outlined',
        color: 'info',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-info-500',
            'dark:text-info-500'
          ]
        }
      },
      {
        type: 'outlined',
        color: 'warning',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-warning-500',
            'dark:text-warning-500'
          ]
        }
      },
      {
        type: 'outlined',
        color: 'error',
        disabled: false,
        class: {
          textarea: [
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
          ],
          counter: [
            'text-error-500',
            'dark:text-error-500'
          ]
        }
      }
    ]
  })

  return computed(() => {
    const slots = textarea({
      color: props.variant,
      size: props.size,
      type: props.type,
      disabled: props.disabled
    })

    return {
      container: slots.container(),
      field: slots.field(),
      textarea: slots.textarea(),
      label: slots.label(),
      helper: slots.helper(),
      footer: slots.footer(),
      counter: slots.counter()
    }
  })
}

export default useStyle
