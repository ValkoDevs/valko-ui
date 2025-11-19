import { tv } from 'tailwind-variants'

const badge = tv({
  slots: {
    container: [
      'vk-badge',
      'w-fit',
      'flex',
      'relative'
    ],
    badge: [
      'vk-badge__badge',
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
      negative: {},
      surface: {}
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
      right: {},
      left: {},
      top: {},
      bottom: {}
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
          'bg-primary',
          'text-on-primary'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'secondary',
      class: {
        badge: [
          'bg-secondary',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'positive',
      class: {
        badge: [
          'bg-positive',
          'text-on-positive'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'accent',
      class: {
        badge: [
          'bg-accent',
          'text-on-accent'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'warning',
      class: {
        badge: [
          'bg-warning',
          'text-on-warning'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'negative',
      class: {
        badge: [
          'bg-negative',
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'surface',
      class: {
        badge: [
          'bg-surface-container-highest',
          'text-on-surface'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'surface',
      class: {
        badge: [
          'bg-surface-container-highest',
          'text-on-surface-variant'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        badge: [
          'bg-primary-container',
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        badge: [
          'bg-secondary-container',
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        badge: [
          'bg-positive-container',
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        badge: [
          'bg-accent-container',
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        badge: [
          'bg-warning-container',
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        badge: [
          'bg-negative-container',
          'text-on-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'surface',
      class: {
        badge: [
          'bg-surface-container-highest/[.8]',
          'text-on-surface-variant'
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
          'to-primary-gradient-end',
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        badge: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        badge: [
          'from-positive-gradient-start',
          'to-positive-gradient-end',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        badge: [
          'from-accent-gradient-start',
          'to-accent-gradient-end',
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        badge: [
          'from-warning-gradient-start',
          'to-warning-gradient-end',
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        badge: [
          'from-negative-gradient-start',
          'to-negative-gradient-end',
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'surface',
      class: {
        badge: [
          'from-surface-container',
          'to-surface-container-highest',
          'text-on-surface'
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
    },
    /// Placement & Alignment
    {
      placement: 'top',
      alignment: 'start',
      class: {
        badge: [
          'top-0',
          'left-0',
          '-translate-x-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    {
      placement: 'top',
      alignment: 'center',
      class: {
        badge: [
          'top-0',
          'left-1/2',
          '-translate-x-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    {
      placement: 'top',
      alignment: 'end',
      class: {
        badge: [
          'top-0',
          'right-0',
          '-translate-y-1/2',
          'translate-x-1/2'
        ]
      }
    },
    {
      placement: 'bottom',
      alignment: 'start',
      class: {
        badge: [
          'bottom-0',
          'left-0',
          '-translate-x-1/2',
          'translate-y-1/2'
        ]
      }
    },
    {
      placement: 'bottom',
      alignment: 'center',
      class: {
        badge: [
          'bottom-0',
          'left-1/2',
          '-translate-x-1/2',
          'translate-y-1/2'
        ]
      }
    },
    {
      placement: 'bottom',
      alignment: 'end',
      class: {
        badge: [
          'bottom-0',
          'right-0',
          'translate-y-1/2',
          'translate-x-1/2'
        ]
      }
    },
    {
      placement: 'left',
      alignment: 'start',
      class: {
        badge: [
          'left-0',
          'top-0',
          '-translate-x-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    {
      placement: 'left',
      alignment: 'center',
      class: {
        badge: [
          'left-0',
          'top-1/2',
          '-translate-x-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    {
      placement: 'left',
      alignment: 'end',
      class: {
        badge: [
          'left-0',
          'bottom-0',
          '-translate-x-1/2',
          'translate-y-1/2'
        ]
      }
    },
    {
      placement: 'right',
      alignment: 'start',
      class: {
        badge: [
          'right-0',
          'top-0',
          'translate-x-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    {
      placement: 'right',
      alignment: 'center',
      class: {
        badge: [
          'right-0',
          'top-1/2',
          'translate-x-1/2',
          '-translate-y-1/2'
        ]
      }
    },
    {
      placement: 'right',
      alignment: 'end',
      class: {
        badge: [
          'right-0',
          'bottom-0',
          'translate-x-1/2',
          'translate-y-1/2'
        ]
      }
    }
  ]
})

export default badge
export type BadgeSlots = typeof badge.slots
