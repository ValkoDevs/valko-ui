import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'dark:border-dark-3',
      'rounded'
    ],
    thead: [
      'border-b',
      'border-light-3',
      'dark:border-dark-3'
    ],
    th: [
      'px-4',
      'py-2',
      'text-dark-1',
      'dark:text-light-1'
    ],
    tr: [
      'border-b',
      'border-light-3',
      'dark:border-dark-3'
    ],
    td: [
      'px-4',
      'py-2',
      'text-left',
      'text-dark-1',
      'dark:text-light-1'
    ]
  }
}) as unknown as ReturnType<TV>
