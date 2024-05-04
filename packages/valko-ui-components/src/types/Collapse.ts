import type { DefaultComponent } from './common'

export interface CollapseItemProps {
  title?: string;
}

export interface CollapseProps extends DefaultComponent {
  separator?: 'line' | 'split' | 'none';
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
