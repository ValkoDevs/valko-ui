import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-spinner',
      'flex'
    ],
    icon: [
      'vk-spinner__icon',
      'animate-spin',
      'leading-none'
    ],
    iconColor : []
  },
  variants: {
    size: {
      xs: {
        icon: [
          'text-lg'
        ]
      },
      sm: {
        icon: [
          'text-xl'
        ]
      },
      md: {
        icon: [
          'text-2xl'
        ]
      },
      lg: {
        icon: [
          'text-3xl'
        ]
      }
    },
    color: {
      primary: {
        iconColor: [
          'text-primary-500'
        ]
      },
      neutral: {
        iconColor: [
          'text-dark-800',
          'dark:text-light-100'
        ]
      },
      success: {
        iconColor: [
          'text-success-500'
        ]
      },
      info: {
        iconColor: [
          'text-info-500'
        ]
      },
      warning: {
        iconColor: [
          'text-warning-500'
        ]
      },
      error: {
        iconColor: [
          'text-error-500'
        ]
      }
    },
    condensed: {
      true: {
        icon: [
          'leading-none'
        ]
      }
    }
  },
  compoundVariants: [
    {
      condensed: true,
      size: 'xs',
      class: {
        icon: [
          'text-xs'
        ]
      }
    },
    {
      condensed: true,
      size: 'sm',
      class: {
        icon: [
          'text-sm'
        ]
      }
    },
    {
      condensed: true,
      size: 'md',
      class: {
        icon: [
          'text-base'
        ]
      }
    },
    {
      condensed: true,
      size: 'lg',
      class: {
        icon: [
          'text-lg'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
