import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'w-full',
    'px-4',
    'py-8',
    'bg-light-2',
    'rounded-b-lg',
    'gap-4',
    'grid',
    'grid-cols-1',
    'dark:bg-dark-5/[.5]'
  ]
}) as unknown as ReturnType<TV>
