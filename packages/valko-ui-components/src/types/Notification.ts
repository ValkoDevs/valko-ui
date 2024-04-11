import { type DefaultComponent } from '#valkoui/types'
import { Options } from 'toastify-js'

export interface NotificationProps extends DefaultComponent, Options {
  flat?: boolean;
}
