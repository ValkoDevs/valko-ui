import { toValue } from 'vue'
import type { NavigationAction, NavigationHandler, ValueAdapterConfig } from '../types'

const createValueAdapter = (config: ValueAdapterConfig): NavigationHandler => {
  return (action: NavigationAction) => {
    const current = toValue(config.currentValue)
    const min = toValue(config.min)
    const max = toValue(config.max)
    const step = toValue(config.step)

    const valueMap: Partial<Record<NavigationAction, number>> = {
      previous: Math.max(min, current - step),
      next: Math.min(max, current + step),
      first: min,
      last: max
    }

    const newValue = valueMap[action]
    if (newValue !== undefined) config.onUpdate(newValue)
  }
}

export default createValueAdapter
