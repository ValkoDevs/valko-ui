import { tv } from 'tailwind-variants'
import { InputProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: InputProps) => {
  const input = tv({
    slots: {
      input: [
        'peer',
        'transition-colors',
        'duration-500',
        'ease-in-out',
        'w-full',
        'focus:ring-0',
        'outline-none',
        'text-zinc-900',
        'dark:text-white',
        'text-sm',
        'pb-1'
      ],
      label: [
        'absolute',
        'top-0',
        'left-2',
        'transition-all',
        'duration-300',
        'text-slate-500',
        'peer-placeholder-shown:text-md',
        'peer-placeholder-shown:top-3',
        'peer-placeholder-shown:left-2',
        'peer-hover:bg-inherit',
        'peer-focus:bg-gray-400',
        'peer-focus:top-0',
        'peer-focus:left-2',
        'dark:text-white'
      ],
      container: [
        'relative',
        'm-0',
        'p-0',
        'flex',
        'flex-col'
      ],
      helper: [
        'flex-start',
        'max-w-xs'
      ]
    },
    variants: {
      kind: {
        filled: {
          input: [
            'rounded-t-md',
            'border-b-2',
            'bg-transparent',
            'focus:border-transparent',
            'hover:bg-neutral-200',
            'focus:bg-neutral-300',
            'bg-neutral-100',
            'dark:bg-dark-3',
            'dark:focus:bg-dark-2'
          ],
          label: [
            'bg-inherit',
            'peer-hover:bg-inherit',
            'peer-focus:bg-inherit',
            'peer-data-[filled=true]:text-xs',
            'peer-focus:text-xs'
          ],
        },
        ghost: {
          input: [
            'shadow-none',
            'border-b-2',
            'bg-inherit',
            'hover:bg-inherit',
            'focus:bg-inherit'
            
          ],
          label: [
            'shadow-none',
            'bg-inherit',
            'peer-hover:bg-inherit',
            'peer-focus:bg-inherit',
            'peer-data-[filled=true]:text-xs',
            'peer-focus:text-xs'
          ]
        },
        outlined: {
          input: [
            'focus:bg-inherit',
            'hover:bg-inherit',
            'rounded-md',
            'bg-inherit',
            'border-2'
          ],
          label: [
            '-top-1',
            'left-3',
            'peer-hover:bg-inherit',
            'peer-focus:bg-light-2',
            'peer-data-[filled=true]:-top-3',
            'peer-focus:-top-3',
            'peer-focus:left-3',
            'bg-inherit',
            'dark:bg-dark-4',
            'dark:peer-focus:bg-dark-4'
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
            'pr-1',
            'pl-2', 
            'pt-3',
          ],
          label: [
            'peer-placeholder-shown:top-2'
          ]
        },
        sm: {
          input: [
            'pr-2.5',
            'pl-2',
            'pt-4'
          ],
          label: [
            'peer-placeholder-shown:top-2'
          ]
        },
        md: {
          input: [
            'pr-10',
            'pl-2',
            'pt-5'
          ]
        },
        lg: {
          input: [
            'pr-20',
            'pl-2',
            'pt-6'
          ]
        }
      },
      rounded: {
        true: {
          input: [
            'rounded-full',
            'pl-4'
          ],
          label: [
            'peer-placeholder-shown:left-3',
            'peer-focus:left-4',
            'peer-data-[filled=true]:left-4'
          ],
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
            'bg-gray-600',
            'opacity-50',
            'cursor-not-allowed',
            'text-gray-950',
            'border-gray-950',
            'hover:bg-gray-600'
          ],
          label: [
            'text-slate-950'
          ]
        },
      },
      readonly: {
        true: {
          input: [
            'bg-gray-500',
            'opacity-50',
            'cursor-not-allowed',
            'text-gray-950',
            'border-gray-500',
            'hover:bg-gray-500',
            'focus:bg-gray-500'
          ],
          label: [
            'text-slate-950'
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
        class: {
          input: [
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
            'text-slate-500',
            'focus:text-dark-5',
            'dark:text-white'
          ]
        }
      },
      {
        kind: 'filled',
        color: 'secondary',
        class: {
          input: [
            'border-secondary-300',
            'hover:border-secondary-400',
            'focus:border-secondary-500'
          ],
          helper: [
            'text-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500'
          ]         
        }
      },
      {
        kind: 'filled',
        color: 'success',
        class: {
          input: [
            'border-success-300',
            'hover:border-success-400',
            'focus:border-success-500',
            'dark:border-success-500',
            'dark:focus:border-success-700'
          ],
          helper: [
            'text-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500',
          ]
        }
      },
      {
        kind: 'filled',
        color: 'info',
        class: {
          input: [
            'border-info-300',
            'hover:border-info-400',
            'focus:border-info-500',
            'dark:border-info-500',
            'dark:focus:border-info-700'
          ],
          helper: [
            'text-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ]
        }
      },
      {
        kind: 'filled',
        color: 'warning',
        class: {
          input: [
            'border-warning-300',
            'hover:border-warning-400',
            'focus:border-warning-500',
            'dark:border-warning-500',
            'dark:focus:border-warning-700'
          ],
          helper: [
            'text-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500',
          ]
        }
      },
      {
        kind: 'filled',
        color: 'error',
        class: {
          input: [
            'border-error-300',
            'hover:border-error-400',
            'focus:border-error-500',
            'dark:border-error-500',
            'dark:focus:border-error-700'
          ],
          helper: [
            'text-error-500'
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
        kind: 'ghost',
        color: 'primary',
        class: {
          input: [
            'border-gray-300',
            'hover:border-gray-600',
            'focus:border-gray-950',
            'dark:border-light-5',
            'dark:hover:border-light-4',
            'dark:focus:border-light-3'
          ],
          helper: [
            'text-gray-500'
          ],
          label: [
            'text-dark-1',
            'focus:text-light-5'
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'secondary',
        class: {
          input: [
            'border-secondary-300',
            'hover:border-secondary-300',
            'focus:border-secondary-400',
            'dark:border-light-1',
            'dark:hover:border-light-3',
            'dark:focus:border-light-5'
          ],
          helper: [
            'text-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500',
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'success',
        class: {
          input: [
            'border-success-300',
            'hover:border-success-300',
            'focus:border-success-400',
            'dark:border-success-400',
            'dark:focus:border-success-500'
          ],
          helper: [
            'text-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500',
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'info',
        class: {
          input: [
            'border-info-300',
            'hover:border-info-300',
            'focus:border-info-400',
            'dark:border-info-400',
            'dark:focus:border-info-500'
          ],
          helper: [
            'text-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'warning',
        class: {
          input: [
            'border-warning-300',
            'hover:border-warning-300',
            'focus:border-warning-400',
            'dark:border-warning-400',
            'dark:focus:border-warning-500'
          ],
          helper: [
            'text-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500',
          ]
        }
      },
      {
        kind: 'ghost',
        color: 'error',
        class: {
          input: [
            'border-error-300',
            'hover:border-error-300',
            'focus:border-error-400',
            'dark:border-error-400',
            'dark:focus:border-error-500'
          ],
          helper: [
            'text-error-500'
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
        kind: 'outlined',
        color: 'primary',
        class: {
          input: [
            'border-gray-200',
            'hover:border-gray-300',
            'focus:border-gray-400',
          ],
          helper: [
            'text-gray-500'
          ],
          label: [
            'text-light-5',
            'focus:text-dark-5',
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'secondary',
        class: {
          input: [
            'border-secondary-300',
            'hover:border-secondary-400',
            'focus:border-secondary-500'
          ],
          helper: [
            'text-secondary-500'
          ],
          label: [
            'text-secondary-500',
            'focus:text-secondary-950',
            'dark:text-secondary-500',
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'success',
        class: {
          input: [
            'border-success-400',
            'hover:border-success-500',
            'focus:border-success-600'
          ],
          helper: [
            'text-success-500'
          ],
          label: [
            'text-success-500',
            'focus:text-success-950',
            'dark:text-success-500',
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'info',
        class: {
          input: [
            'border-info-400',
            'hover:border-info-500',
            'focus:border-info-600'
          ],
          helper: [
            'text-info-500'
          ],
          label: [
            'text-info-500',
            'focus:text-info-950',
            'dark:text-info-500',
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'warning',
        class: {
          input: [
            'border-warning-400',
            'hover:border-warning-500',
            'focus:border-warning-600'
          ],
          helper: [
            'text-warning-500'
          ],
          label: [
            'text-warning-500',
            'focus:text-warning-950',
            'dark:text-warning-500',
          ]
        }
      },
      {
        kind: 'outlined',
        color: 'error',
        class: {
          input: [
            'border-error-400',
            'hover:border-error-500',
            'focus:border-error-600'
          ],
          helper: [
            'text-error-500'
          ],
          label: [
            'text-error-500',
            'focus:text-error-950',
            'dark:text-error-500',
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
      readonly: props.readonly
    })

    return {
      input: slots.input(),
      label: slots.label(),
      container: slots.container(),
      helper: slots.helper(),
    }
  })
}

export default useStyle