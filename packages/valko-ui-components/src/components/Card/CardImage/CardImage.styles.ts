import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const styles = tv({
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
})

export const useStyle = () => computed(() => {
  const slots = styles()
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
})
