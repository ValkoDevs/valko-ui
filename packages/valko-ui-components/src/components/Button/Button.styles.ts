import { tv } from 'tailwind-variants'
import { ButtonProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: ButtonProps) => {
  const baseButton = tv({
    base: [
      'rounded',
      'font-semibold',
      'tracking-wider',
      'focus:outline-none',
      'focus:ring-2',
      'ring-inset',
      'shadow-lg',
      'shadow-light-4',
      'dark:shadow-dark-5',
      'transition',
      'duration-150',
      'focus:outline-none',
      'active:shadow-none'
    ],
    variants: {
      variant: {
        filled: [
          'text-white'
        ],
        ghost: [
          'shadow-none',
          'bg-transparent'
        ],
        outlined: [
          'border-2'
        ]
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
        xs: [
          'px-2',
          'py-2',
          'text-xs'
        ],
        sm: [
          'px-3',
          'py-2.5',
          'text-sm'
        ],
        md: [
          'px-4',
          'py-2.5',
          'text-base'
        ],
        lg: [
          'px-5',
          'py-3',
          'text-lg'
        ]
      },
      block: {
        true: [
          'w-full'
        ]
      },
      rounded: {
        true: [
          'rounded-full'
        ]
      },
      flat: {
        true: [
          'shadow-none'
        ]
      },
      disabled: {
        true: {}
      },
      condensed: {
        true: {}
      }
    },
    compoundVariants: [
      //filled & color
      {
        variant: 'filled',
        color: 'primary',
        disabled: false,
        class: [
          'bg-primary-600',
          'focus:ring-primary-700',
          'hover:bg-primary-500',
          'active:bg-primary-700'
        ]
      },
      {
        variant: 'filled',
        color: 'secondary',
        disabled: false,
        class: [
          'bg-secondary-600',
          'focus:ring-secondary-700',
          'hover:bg-secondary-500',
          'active:bg-secondary-700'
        ]
      },
      {
        variant: 'filled',
        color: 'success',
        disabled: false,
        class: [
          'bg-success-600',
          'focus:ring-success-700',
          'hover:bg-success-500',
          'active:bg-success-700'
        ]
      },
      {
        variant: 'filled',
        color: 'info',
        disabled: false,
        class: [
          'bg-info-600',
          'focus:ring-info-700',
          'hover:bg-info-500',
          'active:bg-info-700'
        ]
      },
      {
        variant: 'filled',
        color: 'warning',
        disabled: false,
        class: [
          'bg-warning-600',
          'focus:ring-warning-700',
          'hover:bg-warning-500',
          'active:bg-warning-700'
        ]
      },
      {
        variant: 'filled',
        color: 'error',
        disabled: false,
        class: [
          'bg-error-600',
          'focus:ring-error-700',
          'hover:bg-error-500',
          'active:bg-error-700'
        ]
      },
      // ghost & color
      {
        variant: 'ghost',
        color: 'primary',
        disabled: false,
        class: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20'
        ]
      },
      {
        variant: 'ghost',
        color: 'secondary',
        disabled: false,
        class: [
          'text-secondary-600',
          'focus:ring-secondary-400/20',
          'hover:bg-secondary-300/20',
          'active:bg-secondary-400/20'
        ]
      },
      {
        variant: 'ghost',
        color: 'success',
        disabled: false,
        class: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20'
        ]
      },
      {
        variant: 'ghost',
        color: 'info',
        disabled: false,
        class: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20'
        ]
      },
      {
        variant: 'ghost',
        color: 'warning',
        disabled: false,
        class: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20'
        ]
      },
      {
        variant: 'ghost',
        color: 'error',
        disabled: false,
        class: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20'
        ]
      },
      // outlined & color
      {
        variant: 'outlined',
        color: 'primary',
        disabled: false,
        class: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20',
          'border-primary-600'
        ]
      },
      {
        variant: 'outlined',
        color: 'secondary',
        disabled: false,
        class: [
          'text-secondary-600',
          'focus:ring-secondary-400/20',
          'hover:bg-secondary-300/20',
          'active:bg-secondary-400/20',
          'border-secondary-600'
        ]
      },
      {
        variant: 'outlined',
        color: 'success',
        disabled: false,
        class: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20',
          'border-success-600'
        ]
      },
      {
        variant: 'outlined',
        color: 'info',
        disabled: false,
        class: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20',
          'border-info-600'
        ]
      },
      {
        variant: 'outlined',
        color: 'warning',
        disabled: false,
        class: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20',
          'border-warning-600'
        ]
      },
      {
        variant: 'outlined',
        color: 'error',
        disabled: false,
        class: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20',
          'border-error-600'
        ]
      },
      // disabled & variant
      {
        variant: 'filled',
        disabled: true,
        class: [
          'bg-gray-600',
          'opacity-50',
          'cursor-not-allowed'
        ]
      },
      {
        variant: 'ghost',
        disabled: true,
        class: [
          'text-gray-600',
          'focus:ring-none',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed'
        ]
      },
      {
        variant: 'outlined',
        disabled: true,
        class: [
          'text-gray-600',
          'focus:ring-none',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed',
          'border-gray-600'
        ]
      },
      // condensed
      {
        condensed: true,
        class: [
          'px-0',
          'py-0'
        ]
      }
    ]
  })

  return computed(() => {
    return baseButton({
      size: props.size,
      color: props.color,
      variant: props.variant,
      disabled: props.disabled,
      flat: props.flat,
      block: props.block,
      rounded: props.rounded,
      condensed: props.condensed
    })
  })
}

export default useStyle
