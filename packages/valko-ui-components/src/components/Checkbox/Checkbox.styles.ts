import { tv } from 'tailwind-variants'
import { CheckboxProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: CheckboxProps) => {
  const checkbox = tv({
    slots: {
      label: [
        'flex',
        'flex-row',
        'justify-start',
        'items-center'
      ],
      checkbox: [
        'text-white',
        'rounded',
        'font-bold',
        'text-lg',
        'relative',
        'inline-flex',
        'items-center',
        'justify-center',
        'h-6',
        'w-6',
        'mr-2',
        'border-2',
        'border-gray-500',
        'shadow-lg',
        'cursor-pointer',
      ],
      input: [
        'hidden',
        'peer/input'
      ],
      message: [
        'text-red-500',
        'text-xs',
      ],
      svg: [
        'dark:text-dark-4',
      ]
    },
    variants: {
      size: {
        xs: {
          checkbox: ['w-3.5', 'h-3.5'],
          label: ['text-xs']
        },
        sm: {
          checkbox: ['w-4', 'h-4'],
          label: ['text-sm']
        },
        md: {
          checkbox: ['w-5', 'h-5'],
          label: ['text-base']
        },
        lg: {
          checkbox: ['w-6', 'h-6'],
          label: ['text-lg']
        },        
      },
      type: {
        filled: {},
        outlined: {
          checkbox: [
            'border-gray-600'
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
      disabled: {
        true: {
          checkbox: [
            'bg-gray-600',
            'text-gray-600',
            'opacity-50',
            'cursor-not-allowed',
            'data-[checked=true]:border-gray-600',
            'data-[checked=true]:bg-gray-600'
          ]
        }
      },
      labelPosition: {
        true: {
          label: ['flex-row-reverse', 'mr-2'],
          message: ['flex-row-reverse', 'mr-2'],
          checkbox: ['flex-row-reverse', ]
        }
      },
      rounded: {
        true: {
          checkbox: ['rounded-full']
        }
      },
      flat: {
        true: {
          checkbox: ['shadow-none']
        }
      }
    },
    compoundVariants: [
      // filled & colors
      {
        type: 'filled',
        color: 'primary',
        disabled: false,
        class: {
          checkbox: [
            'data-[checked=true]:bg-primary-500',
            'data-[checked=true]:border-primary-500',
            'data-[indeterminate=true]:border-primary-500',
            'data-[indeterminate=true]:bg-primary-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'secondary',
        disabled: false,
        class: {
          checkbox: [
            'focus:ring-secondary-500',
            'data-[checked=true]:bg-secondary-500',
            'data-[checked=true]:border-secondary-500',
            'data-[indeterminate=true]:border-secondary-500',
            'data-[indeterminate=true]:bg-secondary-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'success',
        disabled: false,
        class: {
          checkbox: [
            'focus:ring-success-500',
            'data-[checked=true]:bg-success-500',
            'data-[checked=true]:border-success-500',
            'data-[indeterminate=true]:border-success-500',
            'data-[indeterminate=true]:bg-success-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'info',
        disabled: false,
        class: {
          checkbox: [
            'focus:ring-info-500',
            'data-[checked=true]:bg-info-500',
            'data-[checked=true]:border-info-500',
            'data-[indeterminate=true]:border-info-500',
            'data-[indeterminate=true]:bg-info-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'warning',
        disabled: false,
        class: {
          checkbox: [
            'focus:ring-warning-500',
            'data-[checked=true]:bg-warning-500',
            'data-[checked=true]:border-warning-500',
            'data-[indeterminate=true]:border-warning-500',
            'data-[indeterminate=true]:bg-warning-500',
          ]
        }
      },
      {
        type: 'filled',
        color: 'error',
        disabled: false,
        class: {
          checkbox: [
            'focus:ring-error-500',
            'data-[checked=true]:bg-error-500',
            'data-[checked=true]:border-error-500',
            'data-[indeterminate=true]:border-error-500',
            'data-[indeterminate=true]:bg-error-500',
          ]
        }
      },
      // outlined & colors
      {
        type: 'outlined',
        color: 'primary',
        disabled: false,
        class: {
          checkbox: [
            'text-primary-600',
            'data-[checked=true]:border-primary-500',
            'data-[indeterminate=true]:border-primary-500',
          ],
          svg: ['dark:text-primary-500']
        }
      },
      {
        type: 'outlined',
        color: 'secondary',
        disabled: false,
        class: {
          checkbox: [
            'text-secondary-600',
            'data-[checked=true]:border-secondary-500',
            'data-[indeterminate=true]:border-secondary-500',
          ],
          svg: ['dark:text-secondary-500']
        }
      },
      {
        type: 'outlined',
        color: 'success',
        disabled: false,
        class: {
          checkbox: [
            'text-success-600',
            'data-[checked=true]:border-success-500',
            'data-[indeterminate=true]:border-success-500',
          ],
          svg: ['dark:text-success-500']
        }
      },
      {
        type: 'outlined',
        color: 'info',
        disabled: false,
        class: {
          checkbox: [
            'text-info-600',
            'data-[checked=true]:border-info-500',
            'data-[indeterminate=true]:border-info-500',
          ],
          svg: ['dark:text-info-500']
        }
      },
      {
        type: 'outlined',
        color: 'warning',
        disabled: false,
        class: {
          checkbox: [
            'text-warning-600',
            'data-[checked=true]:border-warning-500',
            'data-[indeterminate=true]:border-warning-500',
          ],
          svg: ['dark:text-warning-500']
        }
      },
      {
        type: 'outlined',
        color: 'error',
        disabled: false,
        class: {
          checkbox: [
            'text-error-600',
            'data-[checked=true]:border-error-500',
            'data-[indeterminate=true]:border-error-500',
          ],
          svg: ['dark:text-error-500']
        }
      },
    ]
  })

  return computed(() => {
    const slots = checkbox({
      color: props.variant,
      size: props.size,
      rounded: props.rounded,
      flat: props.flat,
      labelPosition: props.labelPosition,
      disabled: props.disabled,
      type: props.type
    })
    return {
      label: slots.label(),
      checkbox: slots.checkbox(),
      input: slots.input(),
      message: slots.message(),
      svg: slots.svg()
    }
  })
}

export default useStyle
