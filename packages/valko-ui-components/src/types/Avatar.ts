import type { DefaultComponent } from './common'

export interface AvatarProps extends DefaultComponent {
  src: string;
  name?: string;
  flat?: boolean;
}
