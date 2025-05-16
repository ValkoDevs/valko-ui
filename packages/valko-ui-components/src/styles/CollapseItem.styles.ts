import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    collapse: [
      'vk-collapse-item',
      'w-full',
      'group-data-[variant=ghost]:bg-transparent',
      'group-data-[variant=filled]:bg-surface-container',
      'group-data-[variant=outlined]:group-data-[separator=split]:border-2',
      'group-data-[variant=outlined]:group-data-[separator=split]:border-outlined',
      'group-data-[shape=rounded]:group-data-[separator=split]:rounded-3xl',
      'group-data-[shape=soft]:group-data-[separator=split]:rounded-lg',
      'group-data-[shape=square]:rounded-none',
      'group-data-[separator=split]:p-3'
    ],
    button: [
      'vk-collapse-item__button',
      'w-full',
      'py-2',
      'font-bold',
      'text-left',
      'bg-transparent',
      'opacity-80',
      'flex',
      'justify-between',
      'group-data-[shape=rounded]:group-data-[separator=split]:rounded-3xl',
      'group-data-[shape=soft]:group-data-[separator=split]:rounded-lg',
      'group-data-[size=xs]:text-xs',
      'group-data-[size=sm]:text-sm',
      'group-data-[size=md]:text-base',
      'group-data-[size=lg]:text-lg',
      'group-data-[compact=true]:p-0'
    ],
    panel: [
      'pb-2',
      'bg-transparent',
      'group-data-[size=xs]:text-xs',
      'group-data-[size=sm]:text-sm',
      'group-data-[size=md]:text-base',
      'group-data-[size=lg]:text-lg'
    ],
    icon: [
      'vk-collapse-item__icon',
      'transition-all',
      'duration-300',
      'ease-out',
      'group-data-[size=xs]:text-xs',
      'group-data-[size=sm]:text-sm',
      'group-data-[size=md]:text-base',
      'group-data-[size=lg]:text-lg'
    ],
    iconOpen: [
      'transform',
      '-rotate-90'
    ]
  }
}) as unknown as ReturnType<TV>
