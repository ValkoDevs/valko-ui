import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-badge',
      'w-fit',
      'flex',
      'relative'
    ],
    badge: [
      'vk-badge__badge',
      'text-white',
      'shadow-sm',
      'overflow-hidden',
      'flex',
      'justify-center',
      'items-center',
      'align-middle',
      'absolute'
    ]
  },
  variants: {
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {}
    },
    variant: {
      filled: {},
      ghost: {},
      outlined: {
        badge: [
          'border-2',
          'border-outlined'
        ]
      },
      gradient: {
        badge: [
          'bg-gradient-to-br'
        ]
      }
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    shape: {
      rounded: {
        badge: [
          'rounded-full'
        ]
      },
      soft: {
        badge: [
          'rounded-lg'
        ]
      },
      square: {
        badge: [
          'rounded-none'
        ]
      }
    },
    placement: {
      'top-right': {
        badge: [
          'top-0',
          'right-0',
          'origin-top-right',
          '-translate-y-1/2',
          'translate-x-1/2'
        ]
      },
      'top-left': {
        badge: [
          'top-0',
          'left-0',
          'origin-top-left',
          '-translate-y-1/2',
          '-translate-x-1/2'
        ]
      },
      'bottom-right': {
        badge: [
          'bottom-0',
          'right-0',
          'origin-bottom-right',
          'translate-y-1/2',
          'translate-x-1/2'
        ]
      },
      'bottom-left': {
        badge: [
          'bottom-0',
          'left-0',
          'origin-bottom-left',
          'translate-y-1/2',
          '-translate-x-1/2'
        ]
      }
    },
    flat: {
      true: {
        badge: [
          'shadow-none'
        ]
      }
    },
    hidden: {
      true: {
        badge: [
          'hidden'
        ]
      }
    },
    dot: {
      true: {}
    }
  },
  compoundVariants: [
    // filled & outlined & color
    {
      variant: ['filled', 'outlined'],
      color: 'primary',
      class: {
        badge: [
          'bg-primary'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'secondary',
      class: {
        badge: [
          'bg-secondary'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'positive',
      class: {
        badge: [
          'bg-positive'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'accent',
      class: {
        badge: [
          'bg-accent'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'warning',
      class: {
        badge: [
          'bg-warning'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'negative',
      class: {
        badge: [
          'bg-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        badge: [
          'bg-primary'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        badge: [
          'bg-secondary'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        badge: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        badge: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        badge: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        badge: [
          'bg-negative'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        badge: [
          'from-primary-gradient-start',
          'to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        badge: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        badge: [
          'from-positive-gradient-start',
          'to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        badge: [
          'from-accent-gradient-start',
          'to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        badge: [
          'from-warning-gradient-start',
          'to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        badge: [
          'from-negative-gradient-start',
          'to-negative-gradient-end'
        ]
      }
    },
    // dot & size
    {
      size: 'xs',
      dot: false,
      class: {
        badge: [
          'text-[0.6321875rem]',
          'leading-[0.6321875rem]',
          'p-[0.180625rem]'
        ]
      }
    },
    {
      size: 'sm',
      dot: false,
      class: {
        badge: [
          'text-[0.74375rem]',
          'leading-[0.74375rem]',
          'p-[0.2125rem]'
        ]
      }
    },
    {
      size: 'md',
      dot: false,
      class: {
        badge: [
          'text-sm',
          'leading-[0.875rem]',
          'p-1'
        ]
      }
    },
    {
      size: 'lg',
      dot: false,
      class: {
        badge: [
          'text-[1.00625rem]',
          'leading-[1.00625rem]',
          'p-[0.2875rem]'
        ]
      }
    },
    {
      size: 'xs',
      dot: true,
      class: {
        badge: [
          'size-3'
        ]
      }
    },
    {
      size: 'sm',
      dot: true,
      class: {
        badge: [
          'size-3.5'
        ]
      }
    },
    {
      size: 'md',
      dot: true,
      class: {
        badge: [
          'size-4'
        ]
      }
    },
    {
      size: 'lg',
      dot: true,
      class: {
        badge: [
          'size-5'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
