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
      secondary: {
        iconColor: [
          'text-dark-800',
          'dark:text-light-100'
        ]
      },
      positive: {
        iconColor: [
          'text-positive'
        ]
      },
      accent: {
        iconColor: [
          'text-accent'
        ]
      },
      warning: {
        iconColor: [
          'text-warning'
        ]
      },
      negative: {
        iconColor: [
          'text-negative'
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
