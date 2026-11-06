export interface OverlayStackEntry {
  rootRef: { readonly value: HTMLElement | null }
  panelRef: { readonly value: HTMLElement | null }
  close: () => void
}

export interface StackableOverlayOptions {
  isOpen: () => boolean
  rootRef: OverlayStackEntry['rootRef']
  panelRef: OverlayStackEntry['panelRef']
  close: () => void
  stackable?: () => boolean
}
