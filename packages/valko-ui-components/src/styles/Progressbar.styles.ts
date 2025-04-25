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
      'bg-light-300',
      'dark:bg-dark-700'
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
          'bg-light-400/[.15]',
          'dark:bg-dark-600/[.15]'
        ]
      },
      outlined: {
        container: [
          'border-2',
          'border-light-400',
          'dark:border-dark-600'
        ]
      },
      gradient: {
        container: [
          'bg-light-200',
          'dark:bg-dark-600'
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
      secondary: {
        progress: [
          'bg-light-400',
          'dark:bg-dark-800'
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
      color: 'secondary',
      class: {
        progress: [
          'bg-light-400/[.15]',
          'dark:bg-dark-700/[.15]'
        ],
        buffer: [
          'border-light-200/[.15]',
          'dark:border-dark-600/[.15]'
        ],
        content: [
          'text-dark-600',
          'dark:text-light-200'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        progress: [
          'bg-positive'
        ],
        buffer: [
          'border-positive'
        ],
        content: [
          'text-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        progress: [
          'bg-accent'
        ],
        buffer: [
          'border-accent'
        ],
        content: [
          'text-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning/[.15]'
        ],
        buffer: [
          'border-warning/[.15]'
        ],
        content: [
          'text-warning'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        progress: [
          'bg-negative'
        ],
        buffer: [
          'border-negative'
        ],
        content: [
          'text-negative'
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
      color: 'secondary',
      class: {
        progress: [
          'from-light-50',
          'to-light-400',
          'text-dark-600',
          'dark:to-dark-950'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        progress: [
          'from-positive',
          'to-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        progress: [
          'from-accent',
          'to-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        progress: [
          'from-warning',
          'to-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        progress: [
          'from-negative',
          'to-negative'
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
