import { tv } from 'tailwind-variants'

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
          'text-primary'
        ]
      },
      secondary: {
        iconColor: [
          'text-secondary'
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
      },
      surface: {
        iconColor: [
          'text-on-surface'
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
})
