import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-badge',
      'w-fit',
      'flex',
      'relative'
    ],
    content: [
      'vk-badge__content',
      'text-white',
      'shadow-sm',
      'shadow-light-3',
      'overflow-hidden',
      'flex',
      'justify-center',
      'items-center',
      'align-middle',
      'absolute',
      'dark:shadow-dark-3'
    ]
  },
  variants: {
    color: {
      primary: {
        content: [
          'bg-primary-500'
        ]
      },
      neutral: {
        content: [
          'bg-light-3',
          'text-dark-1',
          'dark:bg-dark-2',
          'dark:text-light-3'
        ]
      },
      success: {
        content: [
          'bg-success-500'
        ]
      },
      info: {
        content: [
          'bg-info-500'
        ]
      },
      warning: {
        content: [
          'bg-warning-500'
        ]
      },
      error: {
        content: [
          'bg-error-500'
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
        content: [
          'rounded-full'
        ]
      },
      soft: {
        content: [
          'rounded-lg'
        ]
      },
      square: {
        content: [
          'rounded-none'
        ]
      }
    },
    placement: {
      'top-right': {
        content: [
          'top-0',
          'right-0',
          'origin-top-right',
          '-translate-y-1/2',
          'translate-x-1/2'
        ]
      },
      'top-left': {
        content: [
          'top-0',
          'left-0',
          'origin-top-left',
          '-translate-y-1/2',
          '-translate-x-1/2'
        ]
      },
      'bottom-right': {
        content: [
          'bottom-0',
          'right-0',
          'origin-bottom-right',
          'translate-y-1/2',
          'translate-x-1/2'
        ]
      },
      'bottom-left': {
        content: [
          'bottom-0',
          'left-0',
          'origin-bottom-left',
          'translate-y-1/2',
          '-translate-x-1/2'
        ]
      }
    },
    outlined: {
      true: {
        content: [
          'border-2',
          'border-light-1',
          'dark:border-dark-3'
        ]
      }
    },
    flat: {
      true: {
        content: [
          'shadow-none'
        ]
      }
    },
    hidden: {
      true: {
        content: [
          'hidden'
        ]
      }
    },
    dot: {
      true: {}
    },
    gradient: {
      true: {
        content: [
          'bg-gradient-to-br'
        ]
      }
    }
  },
  compoundVariants: [
    // gradient & color
    {
      gradient: true,
      color: 'primary',
      class: {
        content: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      gradient: true,
      color: 'neutral',
      class: {
        content: [
          'from-light-1',
          'to-light-5',
          'text-dark-1',
          'dark:to-dark-5'
        ]
      }
    },
    {
      gradient: true,
      color: 'success',
      class: {
        content: [
          'from-success-500',
          'to-success-900'
        ]
      }
    },
    {
      gradient: true,
      color: 'info',
      class: {
        content: [
          'from-info-500',
          'to-info-900'
        ]
      }
    },
    {
      gradient: true,
      color: 'warning',
      class: {
        content: [
          'from-warning-500',
          'to-warning-900'
        ]
      }
    },
    {
      gradient: true,
      color: 'error',
      class: {
        content: [
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
        content: [
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
        content: [
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
        content: [
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
        content: [
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
        content: [
          'size-3'
        ]
      }
    },
    {
      size: 'sm',
      dot: true,
      class: {
        content: [
          'size-3.5'
        ]
      }
    },
    {
      size: 'md',
      dot: true,
      class: {
        content: [
          'size-4'
        ]
      }
    },
    {
      size: 'lg',
      dot: true,
      class: {
        content: [
          'size-5'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
