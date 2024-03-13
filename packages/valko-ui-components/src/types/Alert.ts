import { type DefaultComponent } from '#valkoui/types'

export interface AlertProps extends DefaultComponent {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
