import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-time',
      'h-64',
      'grid',
      'grid-cols-4',
      'gap-2'
    ],
    viewContainer: [
      'p-2',
      'h-64',
      'overflow-y-auto'
    ],
    gridButton: [
      'vk-time__grid-button',
      'truncate',
      'font-normal'
    ],
    periodButton: [
      'vk-time__period-button',
      'truncate',
      'font-normal'
    ]
  },
  variants: {
    size: {
      xs: {
        gridButton: [
          'size-5'
        ],
        periodButton: [
          'size-6'
        ]
      },
      sm: {
        gridButton: [
          'size-6'
        ],
        periodButton: [
          'size-7'
        ]
      },
      md: {
        gridButton: [
          'size-7'
        ],
        periodButton: [
          'size-8'
        ]
      },
      lg: {
        gridButton: [
          'size-8'
        ],
        periodButton: [
          'size-9'
        ]
      }
    },
    shape: {
      rounded: {},
      soft: {},
      square: {}
    }
  }
}) as unknown as ReturnType<TV>
