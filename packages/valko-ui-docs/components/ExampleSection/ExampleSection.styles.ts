import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'w-full',
    'px-4',
    'py-8',
    'bg-light-100',
    'rounded-b-lg',
    'gap-4',
    'grid',
    'grid-cols-1',
    'dark:bg-dark-950/[.5]'
  ]
}) as unknown as ReturnType<TV>
