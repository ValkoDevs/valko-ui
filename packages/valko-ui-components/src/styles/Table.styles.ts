import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'table-fixed'
    ],
    thead: [],
    th: [
      'px-4',
      'py-2',
      'text-left'
    ],
    tr: [],
    td: [
      'px-4',
      'py-2',
      'text-left'
    ],
    body: [],
    shape: []
  },
  variants: {
    variant: {
      filled: {
        thead: [
          'border-b',
          'dark:border-dark-3',
          'bg-light-4',
          'dark:bg-dark-2'
        ],
        td: [
          'border-t',
          'border-light-4',
          'dark:border-dark-4'
        ],
        body: [
          'bg-light-3',
          'dark:bg-dark-3'
        ]
      },
      outlined: {
        table: [
          'border-2',
          'border-light-3',
          'border-dark-3'
        ],
        thead: [
          'border-b',
          'border-light-3',
          'border-dark-3'
        ],
        tr: [
          'border-b',
          'border-light-3',
          'border-dark-3'
        ]
      },
      ghost: {
        thead: [
          'bg-light-4/[.30]',
          'dark:bg-dark-2/[.30]'
        ],
        body: [
          'bg-light-3/[.30]',
          'dark:bg-dark-3/[.30]'
        ]
      }
    },
    shape: {
      rounded: {
        shape: [
          'first:rounded-bl-xl',
          'last:rounded-br-xl'
        ],
        th: [
          'first:rounded-tl-xl',
          'last:rounded-tr-xl'
        ]
      },
      soft: {
        shape: [
          'first:rounded-bl-lg',
          'last:rounded-br-lg'
        ],
        th: [
          'first:rounded-tl-lg',
          'last:rounded-tr-lg'
        ]
      },
      square: {
        table: [
          'rounded-none'
        ]
      }
    },
    size: {
      xs: {
        table: [
          'text-xs'
        ]
      },
      sm: {
        table: [
          'text-sm'
        ]
      },
      md: {
        table: [
          'text-base'
        ]
      },
      lg: {
        table: [
          'text-lg'
        ]
      }
    }
  }
}) as unknown as ReturnType<TV>
