import { AriaAttributes } from './common'

export interface IconProps extends Pick<AriaAttributes, 'aria-label'> {
  name: string;
}
