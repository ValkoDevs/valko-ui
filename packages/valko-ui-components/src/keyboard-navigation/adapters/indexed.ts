import { toValue } from 'vue'
import type { NavigationAction, NavigationHandler, IndexedAdapterConfig } from '../types'

const createIndexedAdapter = (config: IndexedAdapterConfig): NavigationHandler => {
  return (action: NavigationAction) => {
    const current = toValue(config.currentIndex)
    const count = toValue(config.itemCount)

    if (count === 0) return

    if (action === 'select') {
      if (config.onSelect && current >= 0) config.onSelect(current)
      return
    }

    const loop = config.loop ?? true

    const indexMap: Partial<Record<NavigationAction, number>> = {
      previous: loop ? (current - 1 + count) % count : Math.max(0, current - 1),
      next: loop ? (current + 1) % count : Math.min(count - 1, current + 1),
      first: 0,
      last: count - 1
    }

    const newIndex = indexMap[action]
    if (newIndex !== undefined) config.onMove(newIndex)
  }
}

export default createIndexedAdapter
