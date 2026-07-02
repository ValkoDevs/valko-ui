import { toValue } from 'vue'
import { normalizeKey } from '#valkoui/keyboard-navigation/index.ts'
import type { NavigationHandler, KeyboardNavigationOptions } from '#valkoui/keyboard-navigation/index.ts'

const useKeyboardNavigation = (
  handler: NavigationHandler,
  options: KeyboardNavigationOptions = {}
): (event: KeyboardEvent) => void => {
  return (event: KeyboardEvent) => {
    if (options.enabled !== undefined && !toValue(options.enabled)) return

    const action = normalizeKey(event.key, options.orientation)
    if (!action) return

    event.preventDefault()
    handler(action)
  }
}

export default useKeyboardNavigation
