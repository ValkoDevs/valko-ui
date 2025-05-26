import { tv, type TV } from 'tailwind-variants'

export default tv({
  base: [
    'w-full',
    'px-4',
    'py-8',
    'bg-surface-container-lowest',
    'rounded-b-lg',
    'gap-4',
    'grid',
    'grid-cols-1'
  ]
}) as unknown as ReturnType<TV>
