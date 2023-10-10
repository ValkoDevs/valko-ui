import { tv } from 'tailwind-variants'
import { SpinnerProps } from './interfaces'
import { computed } from 'vue'

const useStyle = (props: SpinnerProps) => {
  const spinner = tv({
    slots: {
      spinner: [
        'animate-spin'
      ],
      circle: [
        'animate-spin-reverse'
      ]
    },
    variants: {
      size: {
        xs: {
          spinner: ['w-4', 'h-4']
        },
        sm: {
          spinner: ['w-5', 'h-5']
        },
        md: {
          spinner: ['w-6', 'h-6']
        },
        lg: {
          spinner: ['w-7', 'h-7']
        }    
      },
      color: {
        primary: {},
        secondary: {},
        success: {},
        info: {},
        warning: {},
        error: {}
      }
    },
    compoundVariants: [
      {
        color: 'primary',
        class: {
          circle: [
            'stroke-primary-500'
          ]
        }
      },
      {
        color: 'secondary',
        class: {
          circle: [
            'stroke-secondary-500',
            'dark:stroke-white'
          ]
        }
      },
      {
        color: 'success',
        class: {
          circle: [
            'stroke-success-500'
          ]
        }
      },
      {
        color: 'info',
        class: {
          circle: [
            'stroke-info-500'
          ]
        }
      },
      {
        color: 'warning',
        class: {
          circle: [
            'stroke-warning-500'
          ]
        }
      },
      {
        color: 'error',
        class: {
          circle: [
            'stroke-error-500'
          ]
        }
      }
    ]
  })
  return computed(() => {
    const slots = spinner({
      color: props.variant,
      size: props.size,
    })
    return {
      spinner: slots.spinner(),
      circle: slots.circle()
    }
  })
}

export default useStyle
