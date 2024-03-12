import { type DefaultComponent } from '#valkoui/types'

export interface BadgeProps extends DefaultComponent {
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  content?: number | string;
  outlined?: boolean;
  flat?: boolean;
  hidden?: boolean;
  dot?: boolean;
}
