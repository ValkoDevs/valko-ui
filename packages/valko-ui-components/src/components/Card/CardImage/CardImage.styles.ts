import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const styles = tv({
  slots: {
    container: [
      'vk-cardimage',
      'h-full',
      'w-full',
      'overflow-hidden',
      'relative'
    ],
    img: [
      'bg-cover',
      'bg-no-repeat',
      'bg-center',
      'absolute',
      'inset-0',
      'z-10'
    ],
    gradient: [
      'bg-gradient-to-b from-transparent to-black opacity-40',
      'absolute',
      'inset-0',
      'z-20'
    ],
    slot: [
      'px-4',
      'py-3',
      'flex',
      'items-end',
      'absolute',
      'inset-0',
      'z-30'
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
