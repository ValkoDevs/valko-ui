import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-cardfooter',
    'px-4',
    'pb-4',
    'mt-4',
    'min-h-10',
    'border-light-4',
    'text-left',
    'z-30',
    'flex',
    'order-4',
    'group-data-[layout=horizontal]:[grid-column:_2]',
    'dark:border-dark-1'
  ]
}) as unknown as ReturnType<TV>
