import type { DefaultComponent } from './common'

export type Separator = 'line' | 'split' | 'none'

export type CollapseItemStates = {
  items: Record<string, boolean>
  toggleItem: (id: string | undefined) => void
}

export interface CollapseItemProps {
  title?: string;
}

export interface CollapseProps extends DefaultComponent {
  separator?: Separator;
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
