import type { Colors, Shapes, Sizes, VariantWithGradientAndLine } from './common'
import type { Options } from 'toastify-js'

export type VerticalAlign = 'top' | 'bottom'
export type HorizontalAlign = 'left' | 'right'

export interface NotificationProps extends Colors, Shapes, Sizes, Options {
  flat?: boolean;
  variant?: VariantWithGradientAndLine;
}
