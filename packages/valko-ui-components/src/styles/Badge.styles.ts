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
      'shadow-light-200',
      'overflow-hidden',
      'flex',
      'justify-center',
      'items-center',
      'align-middle',
      'absolute',
      'dark:shadow-dark-800'
    ]
  },
  variants: {
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
    },
    variant: {
      filled: {},
      ghost: {},
      outlined: {
        badge: [
          'border-2',
          'border-light-50',
          'dark:border-dark-800'
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
          'bg-primary-500'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'neutral',
      class: {
        badge: [
          'bg-light-200',
          'text-dark-600',
          'dark:bg-dark-700',
          'dark:text-light-200'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'success',
      class: {
        badge: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'info',
      class: {
        badge: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'warning',
      class: {
        badge: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: ['filled', 'outlined'],
      color: 'error',
      class: {
        badge: [
          'bg-error-500'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        badge: [
          'bg-primary-500/[.7]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        badge: [
          'bg-neutral-500/[.7]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        badge: [
          'bg-success-500/[.7]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        badge: [
          'bg-info-500/[.7]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        badge: [
          'bg-warning-500/[.7]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        badge: [
          'bg-error-500/[.3]'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        badge: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: {
        badge: [
          'from-light-50',
          'to-light-400',
          'text-dark-600',
          'dark:to-dark-950'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        badge: [
          'from-success-500',
          'to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        badge: [
          'from-info-500',
          'to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        badge: [
          'from-warning-500',
          'to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        badge: [
          'from-error-500',
          'to-error-900'
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
