import type { Colors, Shapes, VariantWithGradient, Sizes } from './common'
import { Options } from 'toastify-js'

export interface NotificationProps extends Colors, Shapes, Sizes, Options {
  flat?: boolean;
  variant?: VariantWithGradient | 'line';
}
