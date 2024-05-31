import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table'
    ],
    th: [
      'px-4',
      'py-2',
      'text-left'
    ],
    td: [
      'px-4',
      'py-2',
      'text-left'
    ],
    selected: [
      'bg-success-500'
    ],
    rowSelection: [
      'cursor-pointer'
    ]
  },
  variants: {
    sortDir: {
      asc: {},
      desc: {}
    }
  }
}) as unknown as ReturnType<TV>
