import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'flex',
      'flex-col',
      'justify-between'
    ],
    headerContainer: [
      'flex',
      'gap-1',
      'items-center'
    ],
    headerLabel: [
      'mr-2',
      'self-center'
    ],
    headerUtilities: [
      ''
    ],
    footer: [
      'flex',
      'justify-between',
      'mt-2',
      'first:w-1/2',
      'last:w-1/5',
      'last:self-end'
    ]
  }
}) as unknown as ReturnType<TV>
