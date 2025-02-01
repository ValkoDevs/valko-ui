import type { DefaultComponent } from './common'

export type Separator = 'line' | 'split' | 'none'

export type ItemsManagement = {
  itemStates: Record<string, boolean>
  toggleItem: (id: string) => void
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
