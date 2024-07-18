import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-range',
      'w-full',
      'relative'
    ],
    progressContainer: [
      'overflow-hidden',
      'relative'
    ],
    progress: [
      'h-full',
      'absolute',
      'z-20'
    ],
    thumbContainer: [
      'absolute',
      'inset-0',
      'pointer-events-none'
    ],
    thumb: [
      'bg-light-4',
      'shadow-lg',
      'absolute',
      'transform',
      '-translate-x-1/4',
      '-translate-y-1/2',
      'top-1/2',
      'z-30',
      'cursor-pointer',
      'pointer-events-auto',
      'dark:bg-light-3'
    ],
    stepMark: [
      'w-2',
      'h-2',
      'bg-dark-3',
      'rounded-full',
      'absolute',
      'top-1/2',
      '-translate-y-1/2',
      'z-10'
    ]
  },
  variants: {
    variant: {
      filled: {
        progressContainer: [
          'bg-light-3',
          'dark:bg-dark-1'
        ]
      },
      ghost: {
        progressContainer: [
          'bg-light-3/[.5]',
          'dark:bg-dark-1/[.5]'
        ]
      },
      outlined: {
        progressContainer: [
          'border-2',
          'border-light-5',
          'dark:border-dark-1'
        ]
      },
      gradient: {
        progressContainer: [
          'bg-light-3',
          'dark:bg-dark-1'
        ],
        progress: [
          'bg-gradient-to-br'
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
        progressContainer: [
          'h-2'
        ],
        thumb: [
          'w-3',
          'h-3'
        ]
      },
      sm: {
        progressContainer: [
          'h-2.5'
        ],
        thumb: [
          'w-3.5',
          'h-3.5'
        ]
      },
      md: {
        progressContainer: [
          'h-3'
        ],
        thumb: [
          'w-4',
          'h-4'
        ]
      },
      lg: {
        progressContainer: [
          'h-3.5'
        ],
        thumb: [
          'w-[1.125rem]',
          'h-[1.125rem]'
        ]
      }
    },
    shape: {
      rounded: {
        progressContainer: [
          'rounded-full'
        ],
        thumb: [
          'rounded-full'
        ]
      },
      square: {
        progressContainer: [
          'rounded-none'
        ],
        thumb: [
          'rounded-none'
        ]
      },
      soft: {
        progressContainer: [
          'rounded-md'
        ],
        thumb: [
          'rounded-md'
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
    }
  },
  compoundVariants: [
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        progress: [
          'bg-primary-500/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        progress: [
          'bg-light-5/[.5]',
          'dark:bg-dark-2/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        progress: [
          'bg-success-500/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        progress: [
          'bg-info-500/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning-500/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        progress: [
          'bg-error-500/[.5]'
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
    }
  ]
}) as unknown as ReturnType<TV>
