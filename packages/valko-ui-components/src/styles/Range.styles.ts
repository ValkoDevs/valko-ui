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
      'absolute',
      'transform',
      '-translate-x-1/4',
      '-translate-y-1/2',
      'top-1/2',
      'z-30',
      'cursor-pointer',
      'pointer-events-auto',
      'shadow-el1'
    ],
    stepMark: [
      'vk-range__mark',
      'w-1.5',
      'h-1.5',
      'rounded-full',
      'absolute',
      'top-1/2',
      '-translate-y-1/2',
      'z-10'
    ],
    labelContainer: [
      'absolute',
      'inset-0',
      'pointer-events-none'
    ],
    label: [
      'vk-range__label',
      'mt-2',
      'text-on-surface',
      'cursor-pointer',
      'pointer-events-auto',
      'absolute',
      'top-1/2',
      '-translate-x-1/4',
      'z-10'
    ]
  },
  variants: {
    variant: {
      filled: {
        progressContainer: [
          'bg-surface-container-high'
        ]
      },
      ghost: {
        progressContainer: [
          'bg-surface-container-high/[.5]'
        ]
      },
      outlined: {
        progressContainer: [
          'border-2',
          'border-outlined'
        ]
      },
      gradient: {
        progressContainer: [
          'bg-surface-container-high'
        ],
        progress: [
          'bg-gradient-to-br'
        ]
      }
    },
    color: {
      primary: {
        progress: [
          'bg-primary'
        ],
        thumb: [
          'bg-on-primary'
        ],
        stepMark: [
          'bg-on-primary'
        ]
      },
      secondary: {
        progress: [
          'bg-secondary'
        ],
        thumb: [
          'bg-on-secondary'
        ],
        stepMark: [
          'bg-on-secondary'
        ]
      },
      positive: {
        progress: [
          'bg-positive'
        ],
        thumb: [
          'bg-on-positive'
        ],
        stepMark: [
          'bg-on-positive'
        ]
      },
      accent: {
        progress: [
          'bg-accent'
        ],
        thumb: [
          'bg-on-accent'
        ],
        stepMark: [
          'bg-on-accent'
        ]
      },
      warning: {
        progress: [
          'bg-warning'
        ],
        thumb: [
          'bg-on-warning'
        ],
        stepMark: [
          'bg-on-warning'
        ]
      },
      negative: {
        progress: [
          'bg-negative'
        ],
        thumb: [
          'bg-on-negative'
        ],
        stepMark: [
          'bg-on-negative'
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
          'bg-primary-container'
        ],
        thumb: [
          'bg-on-primary-container'
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
        thumb: [
          'bg-on-secondary-container'
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
        thumb: [
          'bg-on-positive-container'
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
        thumb: [
          'bg-on-accent-container'
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
        thumb: [
          'bg-on-warning-container'
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
        thumb: [
          'bg-on-negative-container'
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
    }
  ]
}) as unknown as ReturnType<TV>
