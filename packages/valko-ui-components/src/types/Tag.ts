import { type DefaultComponent } from '#valkoui/types'

export interface TagProps extends DefaultComponent {
  text: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
}
