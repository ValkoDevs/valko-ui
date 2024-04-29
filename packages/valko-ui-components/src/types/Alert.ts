import { type DefaultComponent } from '#valkoui'

export interface AlertProps extends DefaultComponent {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
