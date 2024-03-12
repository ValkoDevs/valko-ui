import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { SpinnerProps } from '#valkoui/types'

const styles = tv({
  base: [
    'animate-spin'
  ],
  variants: {
    size: {
      xs: [
        'text-lg'
      ],
      sm: [
        'text-xl'
      ],
      md: [
        'text-2xl'
      ],
      lg: [
        'text-3xl'
      ]
    },
    color: {
      primary: [
        'text-primary-500'
      ],
      secondary: [
        'text-secondary-500'
      ],
      success: [
        'text-success-500'
      ],
      info: [
        'text-info-500'
      ],
      warning: [
        'text-warning-500'
      ],
      error: [
        'text-error-500'
      ],
      light: [
        'text-light-1'
      ],
      dark: [
        'text-dark-5'
      ]
    }
  }
})

export const useStyle = (props: SpinnerProps) => computed(() => styles(props))
