import { tv } from 'tailwind-variants'

const spinner = tv({
  slots: {
    container: [
      'vk-spinner',
      'flex'
    ],
    icon: [
      'vk-spinner__icon',
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
          'text-primary'
        ]
      },
      secondary: {
        icon: [
          'text-secondary'
        ]
      },
      positive: {
        icon: [
          'text-positive'
        ]
      },
      accent: {
        icon: [
          'text-accent'
        ]
      },
      warning: {
        icon: [
          'text-warning'
        ]
      },
      negative: {
        icon: [
          'text-negative'
        ]
      },
      surface: {
        icon: [
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

export default spinner
export type SpinnerSlots = typeof spinner.slots
