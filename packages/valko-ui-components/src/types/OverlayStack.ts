import type { Ref } from 'vue'

export interface OverlayStackEntry {
  rootRef: Ref<HTMLElement | null>
  panelRef: Ref<HTMLElement | null>
  close: () => void
}
