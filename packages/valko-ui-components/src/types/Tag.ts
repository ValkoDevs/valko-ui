import { type DefaultComponent } from '#valkoui/types'

export interface TagProps extends DefaultComponent {
  content?: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  loading?: boolean;
  closable?: boolean;
  flat?: boolean;
}
