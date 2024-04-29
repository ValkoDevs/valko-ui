import { type DefaultComponent } from '#valkoui'

export interface AvatarProps extends DefaultComponent {
  src: string;
  name?: string;
  flat?: boolean;
}
