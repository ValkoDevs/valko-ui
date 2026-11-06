import type { Ref } from 'vue'

export interface OverlayStackEntry {
  id: number
  rootRef: Ref<HTMLElement | null>
  panelRef: Ref<HTMLElement | null>
  close: () => void
}
