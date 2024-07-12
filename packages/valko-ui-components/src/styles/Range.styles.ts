import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-range',
      'relative',
      'w-full'
    ],
    progressContainer: [
      'relative',
      'overflow-hidden',
      'bg-light-3',
      'dark:bg-dark-1'
    ],
    progress: [
      'h-full',
      'absolute',
      'transition-all',
      'duration-100',
      'ease-out',
      'z-10',
      'bg-primary-500'
    ],
    thumbContainer: [
      'absolute',
      'inset-0',
      'origin-top',
      'pointer-events-none'
    ],
    thumb: [
      'absolute',
      'top-1/2',
      'transform -translate-y-1/2',
      'z-20',
      'shadow-md',
      'cursor-pointer',
      'transition-all',
      'duration-100',
      'ease-out',
      'pointer-events-auto'
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
          'bg-transparent'
        ],
        buffer: [
          'bg-light-5/[.15]',
          'dark:bg-dark-1/[.15]'
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
        ],
        thumb: [
          'bg-primary-600'
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
          'h-4'
        ],
        thumb: [
          'w-5',
          'h-5'
        ]
      },
      sm: {
        progressContainer: [
          'h-5'
        ],
        thumb: [
          'w-6',
          'h-6'
        ]
      },
      md: {
        progressContainer: [
          'h-6'
        ],
        thumb: [
          'w-7',
          'h-7'
        ]
      },
      lg: {
        progressContainer: [
          'h-7'
        ],
        thumb: [
          'w-8',
          'h-8'
        ]
      }
    },
    shape: {
      line: {},
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
          'rounded-lg'
        ],
        thumb: [
          'rounded-lg'
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
          'bg-primary-500/[.15]'
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
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        progress: [
          'bg-success-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        progress: [
          'bg-info-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        progress: [
          'bg-error-500/[.15]'
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
      condensed: true,
      size: 'xs',
      class: {
        progressContainer: [
          'h-1'
        ],
        thumb: [
          'h-1.5',
          'w-1.5'
        ]
      }
    },
    {
      condensed: true,
      size: 'sm',
      class: {
        progressContainer: [
          'h-1.5'
        ],
        thumb: [
          'h-2',
          'w-2'
        ]
      }
    },
    {
      condensed: true,
      size: 'md',
      class: {
        progressContainer: [
          'h-2'
        ],
        thumb: [
          'h-2.5',
          'w-2.5'
        ]
      }
    },
    {
      condensed: true,
      size: 'lg',
      class: {
        progressContainer: [
          'h-2.5'
        ],
        thumb: [
          'h-3',
          'w-3'
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
