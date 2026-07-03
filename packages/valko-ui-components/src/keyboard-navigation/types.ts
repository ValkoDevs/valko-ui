import type { MaybeRefOrGetter } from 'vue'

export type NavigationKey =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Home'
  | 'End'
  | 'Enter'
  | ' '
  | 'SpaceBar'

export type KeyMap = Partial<Record<NavigationKey, () => void>>
export interface IndexedStrategyConfig {
  strategy: 'indexed'
  enabled?: MaybeRefOrGetter<boolean>
  currentIndex: MaybeRefOrGetter<number>
  itemCount: MaybeRefOrGetter<number>
  loop?: boolean
  onMove: (index: number) => void
  onSelect?: (index: number) => void
}

export interface ValueStrategyConfig {
  strategy: 'value'
  enabled?: MaybeRefOrGetter<boolean>
  currentValue: MaybeRefOrGetter<number>
  min: MaybeRefOrGetter<number>
  max: MaybeRefOrGetter<number>
  step: MaybeRefOrGetter<number>
  onUpdate: (value: number) => void
}

export interface GridStrategyConfig {
  strategy: 'grid'
  enabled?: MaybeRefOrGetter<boolean>
  currentIndex: MaybeRefOrGetter<number>
  itemCount: MaybeRefOrGetter<number>
  columnCount: MaybeRefOrGetter<number>
  onMove: (index: number) => void
  onSelect?: (index: number) => void
  isDisabled?: (index: number) => boolean
}

export type KeyboardNavigationConfig =
  | IndexedStrategyConfig
  | ValueStrategyConfig
  | GridStrategyConfig
