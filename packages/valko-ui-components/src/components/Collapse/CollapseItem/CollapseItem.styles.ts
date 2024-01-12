import { tv } from 'tailwind-variants'
import { computed } from 'vue'

const useStyle = () => {
  const collapse = tv({
    slots: {
      collapse: [
        'w-full',
        'group-data-[variant=filled]:bg-light-3',
        'group-data-[variant=outlined]:group-data-[separator=split]:border-2',
        'group-data-[variant=outlined]:group-data-[separator=split]:border-light-5',
        'group-data-[separator=split]:rounded-lg',
        'group-data-[separator=split]:p-3',
        'dark:group-data-[variant=filled]:bg-dark-3',
        'dark:group-data-[variant=outlined]:group-data-[separator=split]:border-dark-1'
      ],
      button: [
        'w-full',
        'py-2',
        'rounded-lg',
        'font-bold',
        'text-left',
        'bg-transparent',
        'opacity-80',
        'flex',
        'justify-between',
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
  })
  return computed(() => {
    const slots = collapse()
    return {
      collapse: slots.collapse(),
      button: slots.button(),
      panel: slots.panel(),
      icon: slots.icon(),
      iconOpen: slots.iconOpen()
    }
  })
}

export default useStyle
