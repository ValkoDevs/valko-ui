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

export interface ListNavigationConfig {
  enabled?: MaybeRefOrGetter<boolean>
  currentIndex: MaybeRefOrGetter<number>
  itemCount: MaybeRefOrGetter<number>
  loop?: boolean
  onMove: (index: number) => void
  onSelect?: (index: number) => void
}

export interface GridNavigationConfig extends ListNavigationConfig{
  columnCount: MaybeRefOrGetter<number>
  isItemDisabled?: (index: number) => boolean
}

export interface RangeNavigationConfig {
  enabled?: MaybeRefOrGetter<boolean>
  currentValue: MaybeRefOrGetter<number>
  min: MaybeRefOrGetter<number>
  max: MaybeRefOrGetter<number>
  step: MaybeRefOrGetter<number>
  onUpdate: (value: number) => void
}
