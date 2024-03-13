import { type DefaultComponent } from '#valkoui/types'

export interface AvatarProps extends DefaultComponent {
  src: string;
  name?: string;
  flat?: boolean;
}
