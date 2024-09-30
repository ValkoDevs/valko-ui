import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-spinner',
      'flex'
    ],
    icon: [
      'animate-spin',
      'leading-none'
    ]
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
        icon: [
          'text-primary-500'
        ]
      },
      neutral: {
        icon: [
          'text-dark-3',
          'dark:text-light-2'
        ]
      },
      success: {
        icon: [
          'text-success-500'
        ]
      },
      info: {
        icon: [
          'text-info-500'
        ]
      },
      warning: {
        icon: [
          'text-warning-500'
        ]
      },
      error: {
        icon: [
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
