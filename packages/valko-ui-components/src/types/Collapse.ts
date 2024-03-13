import { type DefaultComponent } from '#valkoui/types'

export interface CollapseItemProps {
  title?: string;
}

export interface CollapseProps extends DefaultComponent {
  separator?: 'line' | 'split' | 'none';
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
