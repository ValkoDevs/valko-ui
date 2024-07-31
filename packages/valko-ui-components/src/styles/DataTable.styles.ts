import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'flex',
      'flex-col',
      'relative'
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
      'cursor-pointer',
      'text-dark-1',
      'hover:text-dark-5',
      'dark:text-light-1',
      'dark:hover:text-light-5'
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
