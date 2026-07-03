import { toValue } from 'vue'
import type { GridStrategyConfig, KeyMap } from '../types'

const createGridAdapter = (config: GridStrategyConfig): KeyMap => {
  const isDisabled = (index: number) => config.isDisabled?.(index) ?? false

  const findEnabled = (start: number, step: number) => {
    const count = toValue(config.itemCount)
    let index = start
    while (index >= 0 && index < count) {
      if (!isDisabled(index)) return index
      index += step
    }

    return -1
  }

  const getCurrentIndex = () => {
    const current = toValue(config.currentIndex)
    const count = toValue(config.itemCount)
    return current >= 0 && current < count ? current : findEnabled(0, 1)
  }

  const moveBy = (getDelta: (columns: number) => number) => {
    const currentIndex = getCurrentIndex()
    if (currentIndex < 0) return

    const columns = Math.max(1, toValue(config.columnCount))
    const delta = getDelta(columns)
    const target = findEnabled(currentIndex + delta, delta > 0 ? 1 : -1)
    if (target >= 0) config.onMove(target)
  }

  const moveToRowEdge = (edge: 'start' | 'end') => {
    const currentIndex = getCurrentIndex()
    if (currentIndex < 0) return

    const columns = Math.max(1, toValue(config.columnCount))
    const count = toValue(config.itemCount)
    const rowStart = Math.floor(currentIndex / columns) * columns
    const rowEnd = Math.min(rowStart + columns - 1, count - 1)

    const target = edge === 'start'
      ? findEnabled(rowStart, 1)
      : findEnabled(rowEnd, -1)

    if (target >= 0) config.onMove(target)
  }

  const select = () => {
    const currentIndex = getCurrentIndex()
    if (currentIndex >= 0 && !isDisabled(currentIndex)) config.onSelect?.(currentIndex)
  }

  return {
    ArrowLeft: () => moveBy(() => -1),
    ArrowRight: () => moveBy(() => 1),
    ArrowUp: () => moveBy((cols) => -cols),
    ArrowDown: () => moveBy((cols) => cols),
    Home: () => moveToRowEdge('start'),
    End: () => moveToRowEdge('end'),
    Enter: select,
    ' ': select,
    SpaceBar: select
  }
}

export default createGridAdapter
