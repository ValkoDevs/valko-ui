import { TV } from 'tailwind-variants'
import { computed, ComputedRef } from 'vue'
import { BaseStyles } from '#valkoui/types/common'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyle = <T extends Record<string, any>, R = BaseStyles>(props: T, styles: ReturnType<TV>) => computed(() => {
  const result = styles(props)

  if (typeof result === 'string') return styles(props) as unknown as string

  const slots = result as unknown as Record<string, () => string>
  type Slot = keyof typeof slots

  const keys = Object.keys(slots) as Slot[]

  return keys.reduce((acc, key) => ({
    ...acc,
    [key]: slots[key]()
  }), {}) as Record<Slot, string>
}) as ComputedRef<R>

export default useStyle
