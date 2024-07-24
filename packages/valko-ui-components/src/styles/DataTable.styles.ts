import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'flex',
      'flex-col'
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
      'items-center',
      'mt-2'
    ],
    footerNav: [
      'mr-auto'
    ],
    footerSelect: [
      'ml-auto'
    ]
  }
}) as unknown as ReturnType<TV>
