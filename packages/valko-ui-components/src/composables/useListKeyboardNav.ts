import { toValue } from 'vue'
import type { KeyMap, ListNavigationConfig, NavigationKey } from '../types/keyboardNavigation.ts'

const useListKeyboardNav = (config: ListNavigationConfig) => {
  const move = (delta: number) => {
    const current = toValue(config.currentIndex)
    const count = toValue(config.itemCount)
    if (count === 0) return

    const loop = config.loop ?? true
    const next = loop
      ? (current + delta + count) % count
      : Math.max(0, Math.min(count - 1, current + delta))

    config.onMove(next)
  }

  const select = () => {
    const current = toValue(config.currentIndex)
    if (config.onSelect && current >= 0) config.onSelect(current)
  }

  const keyMap: KeyMap = {
    ArrowUp: () => move(-1),
    ArrowDown: () => move(1),
    ArrowLeft: () => move(-1),
    ArrowRight: () => move(1),
    Home: () => config.onMove(0),
    End: () => config.onMove(toValue(config.itemCount) - 1),
    Enter: select,
    ' ': select,
    SpaceBar: select
  }

  return (event: KeyboardEvent) => {
    if (config.enabled !== undefined && !toValue(config.enabled)) return

    const action = keyMap[event.key as NavigationKey]
    if (!action) return

    event.preventDefault()
    action()
  }
}

export default useListKeyboardNav
