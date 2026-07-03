import { toValue } from 'vue'
import type { KeyboardNavigationConfig, NavigationKey } from './types'
import createIndexedAdapter from './adapters/indexed'
import createValueAdapter from './adapters/value'
import createGridAdapter from './adapters/grid'

const handleKeyboardNavigation = (config: KeyboardNavigationConfig): ((event: KeyboardEvent) => void) => {
  const keyMap = (() => {
    switch (config.strategy) {
      case 'indexed': return createIndexedAdapter(config)
      case 'value': return createValueAdapter(config)
      case 'grid': return createGridAdapter(config)
    }
  })()

  return (event: KeyboardEvent) => {
    if (config.enabled !== undefined && !toValue(config.enabled)) return

    const action = keyMap[event.key as NavigationKey]
    if (!action) return

    event.preventDefault()
    action()
  }
}

export default handleKeyboardNavigation
