import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-cardimage',
      'w-full',
      'overflow-hidden',
      'relative',
      'grow'
    ],
    img: [
      'w-full',
      'h-full',
      'object-cover',
      'object-center'
    ],
    gradient: [
      'w-full',
      'py-3',
      'px-4',
      'bg-gradient-to-b',
      'from-transparent',
      'to-black',
      'flex',
      'items-end',
      'absolute',
      'inset-0',
      'z-20'
    ]
  }
}) as unknown as ReturnType<TV>
