import type { DefaultComponent } from './common'
import { Options } from 'toastify-js'

export interface NotificationProps extends DefaultComponent, Options {
  flat?: boolean;
}
