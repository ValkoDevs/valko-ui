import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-badge',
      'flex',
      'relative'
    ],
    content: [
      'vk-badge__content',
      'text-white',
      'shadow-md',
      'shadow-light-4',
      'overflow-hidden',
      'flex',
      'justify-center',
      'items-center',
      'align-middle',
      'absolute',
      'dark:shadow-dark-5'
    ]
  },
  variants: {
    color: {
      primary: {
        content: [
          'bg-primary-500'
        ]
      },
      secondary: {
        content: [
          'bg-secondary-500'
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
      },
      light: {
        content: [
          'bg-light-1',
          'text-black'
        ]
      },
      dark: {
        content: [
          'bg-dark-5',
          'border-white'
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
          'border',
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
    }
  },
  compoundVariants: [
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
