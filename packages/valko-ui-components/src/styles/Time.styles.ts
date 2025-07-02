import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-time',
      'flex',
      'flex-col'
    ],
    grid: [
      'h-64',
      'grid',
      'grid-cols-3',
      'grid-rows-[1fr_auto]',
      'gap-2'
    ],
    footer: [
      'p-2',
      'border-t',
      'border-outlined',
      'col-span-3',
      'flex',
      'flex-row-reverse',
      'justify-between'
    ],
    unitContainer: [
      'border-r',
      'border-outlined',
      'last:border-r-0',
      'p-2',
      'h-64',
      'overflow-y-auto'
    ],
    unitButton: [
      'vk-time__unit-button',
      'truncate'
    ],
    periodContainer: [
      'flex'
    ],
    periodButton: [
      'vk-time__period-button',
      'truncate',
      'font-normal'
    ],
    okButton: [
      'vk-time__ok-button'
    ]
  },
  variants: {
    size: {
      xs: {
        unitButton: [
          'size-5'
        ]
      },
      sm: {
        unitButton: [
          'size-6'
        ]
      },
      md: {
        unitButton: [
          'size-7'
        ]
      },
      lg: {
        unitButton: [
          'size-8'
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
