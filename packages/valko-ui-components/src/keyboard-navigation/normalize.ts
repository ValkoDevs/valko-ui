import type { NavigationAction, Orientation } from './types'

const normalizeKey = (key: string, orientation: Orientation = 'vertical'): NavigationAction | null => {
  const verticalAxis = orientation === 'vertical'
    ? { ArrowUp: 'previous' as NavigationAction, ArrowDown: 'next' as NavigationAction }
    : { ArrowUp: 'next' as NavigationAction, ArrowDown: 'previous' as NavigationAction }

  const keyToAction: Record<string, NavigationAction> = {
    ArrowLeft: 'previous',
    ArrowRight: 'next',
    ...verticalAxis,
    Home: 'first',
    End: 'last',
    Enter: 'select',
    ' ': 'select',
    SpaceBar: 'select'
  }

  return keyToAction[key] ?? null
}

export default normalizeKey
