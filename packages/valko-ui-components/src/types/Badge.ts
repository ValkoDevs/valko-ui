import type { DefaultComponent, Corner } from './common'

export interface BadgeProps extends DefaultComponent {
  placement?: Corner;
  content?: number | string;
  outlined?: boolean;
  flat?: boolean;
  hidden?: boolean;
  dot?: boolean;
  gradient?: boolean;
}
