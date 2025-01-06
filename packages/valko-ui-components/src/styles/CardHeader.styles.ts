import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'vk-card__header',
    'h-fit',
    'px-4',
    'py-2',
    'min-h-10',
    'flex',
    'items-center',
    'font-bold',
    'text-lg',
    'text-left',
    'z-30',
    'group-data-[layout=vertical]:order-1',
    'group-data-[layout=horizontal]:order-2',
    'group-data-[layout=horizontal]:[grid-column:_2]',
    'group-data-[layout=cover]:order-1'
  ]
}) as unknown as ReturnType<TV>
