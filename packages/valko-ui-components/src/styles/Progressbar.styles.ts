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
      'bg-surface-container'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'bg-light-200',
          'dark:bg-dark-600'
        ]
      },
      ghost: {
        container: [
          'bg-transparent'
        ],
        buffer: [
          'bg-surface-container/[.15]'
        ]
      },
      outlined: {
        container: [
          'border-2',
          'border-outlined'
        ]
      },
      gradient: {
        container: [
          'bg-surface-container'
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
          'bg-primary'
        ]
      },
      secondary: {
        progress: [
          'bg-secondary'
        ]
      },
      positive: {
        progress: [
          'bg-positive'
        ]
      },
      accent: {
        progress: [
          'bg-accent'
        ]
      },
      warning: {
        progress: [
          'bg-warning'
        ]
      },
      negative: {
        progress: [
          'bg-negative'
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
          'origin-[0%_50%]'
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
          'bg-primary-container'
        ],
        buffer: [
          'border-primary-container'
        ],
        content: [
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        progress: [
          'bg-secondary-container'
        ],
        buffer: [
          'border-secondary-container'
        ],
        content: [
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        progress: [
          'bg-positive-container'
        ],
        buffer: [
          'border-positive-container'
        ],
        content: [
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        progress: [
          'bg-accent-container'
        ],
        buffer: [
          'border-accent-container'
        ],
        content: [
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning-container'
        ],
        buffer: [
          'border-warning-container'
        ],
        content: [
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        progress: [
          'bg-negative-container'
        ],
        buffer: [
          'border-negative-container'
        ],
        content: [
          'text-on-negative-container'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        progress: [
          'from-primary-gradient-start',
          'to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        progress: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        progress: [
          'from-positive-gradient-start',
          'to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        progress: [
          'from-accent-gradient-start',
          'to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        progress: [
          'from-warning-gradient-start',
          'to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        progress: [
          'from-negative-gradient-start',
          'to-negative-gradient-end'
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
