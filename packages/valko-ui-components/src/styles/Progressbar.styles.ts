import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-progressbar__container',
      'w-full',
      'overflow-hidden',
      'relative',
      'transition-width',
      'ease-in-out'
    ],
    progress: [
      'vk-progressbar__progress',
      'w-full',
      'h-full',
      'overflow-hidden',
      'absolute',
      'transition-all',
      'z-20'
    ],
    content: [
      'vk-progressbar__content',
      'w-full',
      'font-medium',
      'align-middle',
      'flex',
      'justify-center',
      'absolute',
      'z-30'
    ],
    buffer: [
      'vk-progressbar__buffer',
      'w-full',
      'h-full',
      'absolute',
      'z-10',
      'transition-all',
      'bg-light-4',
      'dark:bg-dark-2'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'bg-light-3',
          'dark:bg-dark-1'
        ]
      },
      ghost: {
        container: [
          'bg-transparent'
        ],
        buffer: [
          'bg-light-5/[.15]',
          'dark:bg-dark-1/[.15]'
        ]
      },
      outlined: {
        container: [
          'border-2',
          'border-light-5',
          'dark:border-dark-1'
        ]
      },
      gradient: {
        container: [
          'bg-light-3',
          'dark:bg-dark-1'
        ],
        progress: [
          'bg-gradient-to-br'
        ]
      }
    },
    shape: {
      line: {
        content: [
          'hidden'
        ]
      },
      rounded: {
        container: [
          'rounded-full'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      }
    },
    color: {
      primary: {
        progress: [
          'bg-primary-500'
        ]
      },
      neutral: {
        progress: [
          'bg-light-5',
          'dark:bg-dark-3'
        ]
      },
      success: {
        progress: [
          'bg-success-500'
        ]
      },
      info: {
        progress: [
          'bg-info-500'
        ]
      },
      warning: {
        progress: [
          'bg-warning-500'
        ]
      },
      error: {
        progress: [
          'bg-error-500'
        ]
      }
    },
    size: {
      xs: {
        container: [
          'h-4'
        ],
        content: [
          'h-4',
          'text-xs'
        ]
      },
      sm: {
        container: [
          'h-5'
        ],
        content: [
          'h-5',
          'text-sm'
        ]
      },
      md: {
        container: [
          'h-6'
        ],
        content: [
          'h-6',
          'text-base'
        ]
      },
      lg: {
        container: [
          'h-7'
        ],
        content: [
          'h-7',
          'text-lg'
        ]
      }
    },
    striped:{
      true: {
        progress: [
          'bg-contain',
          'bg-repeat',
          'bg-blend-multiply',
          'animate-cicle'
        ]
      }
    },
    indeterminate: {
      true: {
        progress: [
          'animate-progress',
          'origin-left-right'
        ]
      },
      false: {
        progress: [
          'origin-right'
        ]
      }
    }
  },
  compoundVariants: [
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        progress: [
          'bg-primary-500/[.15]'
        ],
        buffer: [
          'border-primary-500/[.15]'
        ],
        content: [
          'text-primary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        progress: [
          'bg-light-5/[.15]',
          'dark:bg-dark-2/[.15]'
        ],
        buffer: [
          'border-light-3/[.15]',
          'dark:border-dark-1/[.15]'
        ],
        content: [
          'text-dark-1',
          'dark:text-light-3'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        progress: [
          'bg-success-500/[.15]'
        ],
        buffer: [
          'border-success-500/[.15]'
        ],
        content: [
          'text-success-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        progress: [
          'bg-info-500/[.15]'
        ],
        buffer: [
          'border-info-500/[.15]'
        ],
        content: [
          'text-info-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning-500/[.15]'
        ],
        buffer: [
          'border-warning-500/[.15]'
        ],
        content: [
          'text-warning-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        progress: [
          'bg-error-500/[.15]'
        ],
        buffer: [
          'border-error-500/[.15]'
        ],
        content: [
          'text-error-500'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        progress: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: {
        progress: [
          'from-light-1',
          'to-light-5',
          'text-dark-1',
          'dark:to-dark-5'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        progress: [
          'from-success-500',
          'to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        progress: [
          'from-info-500',
          'to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        progress: [
          'from-warning-500',
          'to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        progress: [
          'from-error-500',
          'to-error-900'
        ]
      }
    },
    // striped size
    {
      size: 'xs',
      striped: true,
      class: {
        progress: [
          'h-8'
        ]
      }
    },
    {
      size: 'sm',
      striped: true,
      class: {
        progress: [
          'h-10'
        ]
      }
    },
    {
      size: 'md',
      striped: true,
      class: {
        progress: [
          'h-12'
        ]
      }
    },
    {
      size: 'lg',
      striped: true,
      class: {
        progress: [
          'h-14'
        ]
      }
    },
    // line & size
    {
      shape: 'line',
      size: 'xs',
      class: {
        container: [
          'h-1'
        ]
      }
    },
    {
      shape: 'line',
      size: 'sm',
      class: {
        container: [
          'h-1.5'
        ]
      }
    },
    {
      shape: 'line',
      size: 'md',
      class: {
        container: [
          'h-2'
        ]
      }
    },
    {
      shape: 'line',
      size: 'lg',
      class: {
        container: [
          'h-2.5'
        ]
      }
    },
    // outlined & size
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        content: [
          'leading-[calc(1rem_-_4px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        content: [
          'leading-[calc(1.25rem_-_4px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        content: [
          'leading-[calc(1.50rem_-_4px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        content: [
          'leading-[calc(2rem_-_4px)]'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
