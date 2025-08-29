import type { DefaultComponent } from './common'
import type { CollapseSlots } from '../styles/Collapse.styles'
import type { CollapseItemSlots } from '../styles/CollapseItem.styles'

export type Separator = 'line' | 'split' | 'none'

export type CollapseItemStates = {
  items: Record<string, boolean>
  toggleItem: (id: string | undefined) => void
}

export interface CollapseItemProps {
  title?: string;
  styleSlots?: Partial<CollapseItemSlots>;
}

export interface CollapseProps extends DefaultComponent {
  separator?: Separator;
  title?: string;
  compact?: boolean;
  multiple?: boolean;
  styleSlots?: Partial<CollapseSlots>;
}
