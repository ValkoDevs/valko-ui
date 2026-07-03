import { toValue } from 'vue'
import type { KeyMap, ValueStrategyConfig } from '../types'

const createValueAdapter = (config: ValueStrategyConfig): KeyMap => {
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

  return {
    ArrowRight: increment,
    ArrowUp: increment,
    ArrowLeft: decrement,
    ArrowDown: decrement,
    Home: toMin,
    End: toMax
  }
}

export default createValueAdapter
