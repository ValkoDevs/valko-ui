import { toValue } from 'vue'
import type { KeyMap, RangeNavigationConfig, NavigationKey } from '../types/keyboardNavigation'

const useRangeKeyboardNav = (config: RangeNavigationConfig) => {
  const increment = () => {
    const value = Math.min(toValue(config.max), toValue(config.currentValue) + toValue(config.step))
    config.onUpdate(value)
  }

  const decrement = () => {
    const value = Math.max(toValue(config.min), toValue(config.currentValue) - toValue(config.step))
    config.onUpdate(value)
  }

  const toMin = () => config.onUpdate(toValue(config.min))
  const toMax = () => config.onUpdate(toValue(config.max))

  const keyMap: KeyMap = {
    ArrowRight: increment,
    ArrowUp: increment,
    ArrowLeft: decrement,
    ArrowDown: decrement,
    Home: toMin,
    End: toMax
  }

  return (event: KeyboardEvent) => {
    if (config.enabled !== undefined && !toValue(config.enabled)) return

    const action = keyMap[event.key as NavigationKey]
    if (!action) return

    event.preventDefault()
    action()
  }
}

export default useRangeKeyboardNav
