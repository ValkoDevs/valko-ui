import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-range',
      'w-full',
      'relative',
      'select-none'
    ],
    progressContainer: [
      'vk-range__progress',
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
      'vk-range__thumb',
      'bg-light-50',
      'shadow-lg',
      'absolute',
      'transform',
      '-translate-x-1/4',
      '-translate-y-1/2',
      'top-1/2',
      'z-30',
      'cursor-pointer',
      'pointer-events-auto',
      'dark:bg-light-200'
    ],
    stepMark: [
      'vk-range__mark',
      'w-1.5',
      'h-1.5',
      'bg-light-400',
      'rounded-full',
      'absolute',
      'top-1/2',
      '-translate-y-1/2',
      'z-10',
      'dark:bg-dark-900'
    ],
    labelContainer: [
      'absolute',
      'inset-0',
      'pointer-events-none'
    ],
    label: [
      'vk-range__label',
      'mt-2',
      'text-dark-600',
      'hover:text-dark-950',
      'cursor-pointer',
      'pointer-events-auto',
      'absolute',
      'top-1/2',
      '-translate-x-1/4',
      'z-10',
      'dark:text-light-300',
      'dark:hover:text-light-50'
    ]
  },
  variants: {
    variant: {
      filled: {
        progressContainer: [
          'bg-light-200',
          'dark:bg-dark-600'
        ]
      },
      ghost: {
        progressContainer: [
          'bg-light-200/[.5]',
          'dark:bg-dark-600/[.5]'
        ]
      },
      outlined: {
        progressContainer: [
          'border-2',
          'border-light-400',
          'dark:border-dark-600'
        ]
      },
      gradient: {
        progressContainer: [
          'bg-light-200',
          'dark:bg-dark-600'
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
        progressContainer: [
          'h-2'
        ],
        thumb: [
          'w-3',
          'h-3'
        ],
        label: [
          'text-xs'
        ]
      },
      sm: {
        progressContainer: [
          'h-2.5'
        ],
        thumb: [
          'w-3.5',
          'h-3.5'
        ],
        label: [
          'text-sm'
        ]
      },
      md: {
        progressContainer: [
          'h-3'
        ],
        thumb: [
          'w-4',
          'h-4'
        ],
        label: [
          'text-base'
        ]
      },
      lg: {
        progressContainer: [
          'h-3.5'
        ],
        thumb: [
          'w-[1.125rem]',
          'h-[1.125rem]'
        ],
        stepMark: [
          'w-2',
          'h-2'
        ],
        label: [
          'text-lg'
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
      color: 'secondary',
      class: {
        progress: [
          'bg-light-400/[.5]',
          'dark:bg-dark-700/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        progress: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        progress: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        progress: [
          'bg-negative'
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
    }
  ]
}) as unknown as ReturnType<TV>
