import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-progressbar__container',
      'w-full',
      'relative',
      'flex',
      'overflow-hidden'
    ],
    background: [
      'w-full',
      'h-full'
    ],
    buffer: [
      'vk-progressbar__buffer',
      'w-full',
      'h-full',
      'absolute',
      'transition-all',
      'bg-surface-container-highest'
    ],
    content: [
      'vk-progressbar__content',
      'absolute',
      'inset-0',
      'flex',
      'justify-center',
      'items-center',
      'text-center'
    ],
    progress: [
      'vk-progressbar__progress',
      'absolute',
      'flex',
      'justify-center',
      'items-center',
      'inset-0',
      'transition-all',
      'ease-linear'
    ],
    stripes: [
      'vk-progressbar__stripes',
      'absolute',
      'inset-0'
    ]
  },
  variants: {
    variant: {
      filled: {
        background: [
          'bg-surface-container-high'
        ],
        content: [
          'text-on-surface'
        ]
      },
      ghost: {
        background: [
          'bg-transparent'
        ]
      },
      outlined: {
        container: [
          'ring-2',
          'ring-outlined'
        ]
      },
      gradient: {
        background: [
          'bg-surface-container-high'
        ],
        progress: [
          'bg-gradient-to-br'
        ],
        content: [
          'text-on-surface'
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
          'bg-primary',
          'text-on-primary'
        ]
      },
      secondary: {
        progress: [
          'bg-secondary',
          'text-on-secondary'
        ]
      },
      positive: {
        progress: [
          'bg-positive',
          'text-on-positive'
        ]
      },
      accent: {
        progress: [
          'bg-accent',
          'text-on-accent'
        ]
      },
      warning: {
        progress: [
          'bg-warning',
          'text-on-warning'
        ]
      },
      negative: {
        progress: [
          'bg-negative',
          'text-on-negative'
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
        ],
        progress: [
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
        ],
        progress: [
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
        ],
        progress: [
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
        ],
        progress: [
          'text-lg'
        ]
      }
    },
    striped:{
      true: {
        stripes: [
          'bg-contain',
          'bg-repeat',
          'bg-blend-multiply',
          'animate-cicle'
        ],
        progress: [
          'max-h-full',
          'overflow-hidden'
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
          'bg-primary-container',
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        progress: [
          'bg-secondary-container',
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        progress: [
          'bg-positive-container',
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        progress: [
          'bg-accent-container',
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        progress: [
          'bg-warning-container',
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        progress: [
          'bg-negative-container',
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
        stripes: [
          'h-8'
        ]
      }
    },
    {
      size: 'sm',
      striped: true,
      class: {
        stripes: [
          'h-10'
        ]
      }
    },
    {
      size: 'md',
      striped: true,
      class: {
        stripes: [
          'h-12'
        ]
      }
    },
    {
      size: 'lg',
      striped: true,
      class: {
        stripes: [
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
    }
  ]
}) as unknown as ReturnType<TV>
