import { tv } from 'tailwind-variants'
import { CheckboxProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: CheckboxProps) => {
  const baseCheckbox = tv({
    slots: {
      label: [
        'flex',
        'flex-row',
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
          checkbox: ['w-4 h-4'],
          label: ['text-xs']
        },
        sm: {
          checkbox: ['w-5 h-5'],
          label: ['text-sm']
        },
        md: {
          checkbox: ['w-6 h-6'],
          label: ['text-md']
        },
        lg: {
          checkbox: ['w-7 h-7'],
          label: ['text-lg']
        },        
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
    }
  })

  const filledCheckbox = tv({
    extend: baseCheckbox,
    variants: {
      color: {
        primary: {
          checkbox: [
            'focus:ring-primary-500',
            'data-[checked=true]:bg-primary-500',
            'data-[checked=true]:border-primary-500',
            'data-[indeterminate=true]:border-primary-500',
            'data-[indeterminate=true]:bg-primary-500',
          ]
        },
        secondary: {
          checkbox: [
            'focus:ring-secondary-500',
            'data-[checked=true]:bg-secondary-500',
            'data-[checked=true]:border-secondary-500',
            'data-[indeterminate=true]:border-secondary-500',
            'data-[indeterminate=true]:bg-secondary-500',
          ]
        },
        success: {
          checkbox: [
            'focus:ring-success-500',
            'data-[checked=true]:bg-success-500',
            'data-[checked=true]:border-success-500',
            'data-[indeterminate=true]:border-success-500',
            'data-[indeterminate=true]:bg-success-500',
          ]
        },
        info: {
          checkbox: [
            'focus:ring-info-500',
            'data-[checked=true]:bg-info-500',
            'data-[checked=true]:border-info-500',
            'data-[indeterminate=true]:border-info-500',
            'data-[indeterminate=true]:bg-info-500',
          ]
        },
        warning: {
          checkbox: [
            'focus:ring-warning-500',
            'data-[checked=true]:bg-warning-500',
            'data-[checked=true]:border-warning-500',
            'data-[indeterminate=true]:border-warning-500',
            'data-[indeterminate=true]:bg-warning-500',
          ]
        },
        error: {
          checkbox: [
            'focus:ring-error-500',
            'data-[checked=true]:bg-error-500',
            'data-[checked=true]:border-error-500',
            'data-[indeterminate=true]:border-error-500',
            'data-[indeterminate=true]:bg-error-500',
          ]
        },
        disabled: {
          checkbox: [
            'bg-gray-600',
            'opacity-50',
            'cursor-not-allowed'
          ]
        }
      }
    }
  })

  const outlineCheckbox = tv({
    extend: baseCheckbox,
    slots: {
      checkbox: ['text-white'],
    },
    variants: {
      color: {
        primary: {
          checkbox: [
            'text-primary-600',
            'data-[checked=true]:border-primary-500',
            'data-[indeterminate=true]:border-primary-500',
            'border-gray-600'
          ],
          svg: ['dark:text-primary-500']
        },
        secondary: {
          checkbox: [
            'text-secondary-600',
            'data-[checked=true]:border-secondary-500',
            'data-[indeterminate=true]:border-secondary-500',
            'border-gray-600'
          ],
          svg: ['dark:text-secondary-500']
        },
        success: {
          checkbox: [
            'text-success-600',
            'data-[checked=true]:border-success-500',
            'data-[indeterminate=true]:border-success-500',
            'border-gray-600'
          ],
          svg: ['dark:text-success-500']
        },
        info: {
          checkbox: [
            'text-info-600',
            'data-[checked=true]:border-info-500',
            'data-[indeterminate=true]:border-info-500',
            'border-gray-600'
          ],
          svg: ['dark:text-info-500']
        },
        warning: {
          checkbox: [
            'text-warning-600',
            'data-[checked=true]:border-warning-500',
            'data-[indeterminate=true]:border-warning-500',
            'border-gray-600'
          ],
          svg: ['dark:text-warning-500']
        },
        error: {
          checkbox: [
            'text-error-600',
            'data-[checked=true]:border-error-500',
            'data-[indeterminate=true]:border-error-500',
            'border-gray-600'
          ],
          svg: ['dark:text-error-500']
        },
        disabled: {
          checkbox: [
            'text-gray-600',
            'opacity-50',
            'cursor-not-allowed',
            'border-gray-600'
          ]
        }
      }
    }
  })

  const checkboxType = {
    filled: filledCheckbox,
    outlined: outlineCheckbox
  }

  return computed(() => {
    const selectedCheckbox = checkboxType[props.type]
    const slots = selectedCheckbox({
      color: props.disabled ? 'disabled' : props.variant,
      size: props.size,
      rounded: props.rounded,
      flat: props.flat,
      labelPosition: props.labelPosition
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