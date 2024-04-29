import { type DefaultComponent } from '#valkoui'
import { Options } from 'toastify-js'

export interface NotificationProps extends DefaultComponent, Options {
  flat?: boolean;
}
