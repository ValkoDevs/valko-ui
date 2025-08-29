import type { ColorsWithSurface, Shapes, Sizes, VariantWithGradientAndLine } from './common'
import type { Options } from 'toastify-js'
import type { NotificationSlots } from '../styles/Notification.styles'

export type VerticalAlign = 'top' | 'bottom'
export type HorizontalAlign = 'left' | 'right'

export interface NotificationProps extends ColorsWithSurface, Shapes, Sizes, Options {
  text: string;
  variant?: VariantWithGradientAndLine;
  styleSlots?: Partial<NotificationSlots>;
}
