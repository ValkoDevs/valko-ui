import type { DefaultComponent } from './common'

export interface AlertProps extends DefaultComponent {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
