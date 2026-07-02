import type { MaybeRefOrGetter } from 'vue'

export type NavigationAction =
  | 'previous'
  | 'next'
  | 'first'
  | 'last'
  | 'select'

export type NavigationHandler = (action: NavigationAction) => void

export type Orientation = 'vertical' | 'horizontal'

export interface IndexedAdapterConfig {
  currentIndex: MaybeRefOrGetter<number>
  itemCount: MaybeRefOrGetter<number>
  loop?: boolean
  onMove: (index: number) => void
  onSelect?: (index: number) => void
}

export interface SelectionAdapterConfig {
  currentIndex: MaybeRefOrGetter<number>
  itemCount: MaybeRefOrGetter<number>
  loop?: boolean
  onSelect: (index: number) => void
}

export interface ValueAdapterConfig {
  currentValue: MaybeRefOrGetter<number>
  min: MaybeRefOrGetter<number>
  max: MaybeRefOrGetter<number>
  step: MaybeRefOrGetter<number>
  onUpdate: (value: number) => void
}

export interface KeyboardNavigationOptions {
  enabled?: MaybeRefOrGetter<boolean>
  orientation?: Orientation
}
