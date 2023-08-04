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
      size: {
        xs: 'px-2 py-2 text-xs',
        sm: 'px-3 py-2.5 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-5 py-3 text-lg'
      },
      block: {
        true: 'w-full'
      },
      rounded: {
        true: 'rounded-full'
      },
      flat: {
        true: 'shadow-none'
      }
    }
  })

  const filledButton = tv({
    extend: baseButton,
    base: 'text-white',
    variants: {
      color: {
        primary: [
          'bg-primary-600',
          'focus:ring-primary-700',
          'hover:bg-primary-500',
          'active:bg-primary-700',
        ],
        secondary: [
          'bg-secondary-600',
          'focus:ring-secondary-700',
          'hover:bg-secondary-500',
          'active:bg-secondary-700',
        ],
        success: [
          'bg-success-600',
          'focus:ring-success-700',
          'hover:bg-success-500',
          'active:bg-success-700',
        ],
        info: [
          'bg-info-600',
          'focus:ring-info-700',
          'hover:bg-info-500',
          'active:bg-info-700',
        ],
        warning: [
          'bg-warning-600',
          'focus:ring-warning-700',
          'hover:bg-warning-500',
          'active:bg-warning-700',
        ],
        error: [
          'bg-error-600',
          'focus:ring-error-700',
          'hover:bg-error-500',
          'active:bg-error-700',
        ],
        disabled: [
          'bg-gray-600',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    }
  })

  const ghostButton = tv({
    extend: baseButton,
    base: [
      'shadow-none',
      'bg-transparent',
    ],
    variants: {
      color: {
        primary: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20'
        ],
        secondary: [
          'text-secondary-600',
          'focus:ring-secondary-400/20',
          'hover:bg-secondary-300/20',
          'active:bg-secondary-400/20'
        ],
        success: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20'
        ],
        info: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20',
        ],
        warning: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20'
        ],
        error: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20'
        ],
        disabled: [
          'text-gray-600',
          'focus:ring-none',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    }
  })

  const outlinedButton = tv({
    extend: baseButton,
    base: [
      'border-2'
    ],
    variants: {
      color: {
        primary: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20',
          'border-primary-600'
        ],
        secondary: [
          'text-secondary-600',
          'focus:ring-secondary-400/20',
          'hover:bg-secondary-300/20',
          'active:bg-secondary-400/20',
          'border-secondary-600'
        ],
        success: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20',
          'border-success-600'
        ],
        info: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20',
          'border-info-600'
        ],
        warning: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20',
          'border-warning-600'
        ],
        error: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20',
          'border-error-600'
        ],
        disabled: [
          'text-gray-600',
          'focus:ring-none',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed',
          'border-gray-600'
        ]
      }
    }
  })



  const buttonType = {
    filled: filledButton,
    outlined: outlinedButton,
    ghost: ghostButton
  }


  return computed(() => {
    const selectedButton = buttonType[props.type]
    return selectedButton({
      color: props.disabled ? 'disabled' : props.variant,
      size: props.size,
      block: props.block,
      rounded: props.rounded,
      flat: props.flat
    })
  })
}

export default useStyle