export interface OverlayStackEntry {
  rootRef: { readonly value: HTMLElement | null }
  panelRef: { readonly value: HTMLElement | null }
  close: () => void
}
