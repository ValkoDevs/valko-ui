import type { ColorsWithSurface, ColorWithSurface, Shapes, Shape, Sizes, Size, VariantWithGradientAndLine } from './common'
import type { NotificationSlots } from '../styles/Notification.styles'

export type VerticalAlign = 'top' | 'bottom'
export type HorizontalAlign = 'left' | 'right'

export interface NotificationOffset {
  x?: number;
  y?: number;
}

// Per-toast payload attached to the Reka toast object and consumed by
// VkNotificationGroup to render the Valko-styled markup.
export interface NotificationToastData {
  color?: ColorWithSurface;
  variant?: VariantWithGradientAndLine;
  shape?: Shape;
  size?: Size;
  text: string;
  close: boolean;
  offset?: NotificationProps['offset'];
  styleSlots?: Partial<NotificationSlots>;
  click?: (event?: MouseEvent) => void;
}

export interface NotificationProps extends ColorsWithSurface, Shapes, Sizes {
  text: string;
  variant?: VariantWithGradientAndLine;
  close?: boolean;
  duration?: number;
  gravity?: VerticalAlign;
  position?: HorizontalAlign;
  offset?: string | NotificationOffset;
  onClick?: (event?: MouseEvent) => void;
  destination?: string;
  newWindow?: boolean;
  styleSlots?: Partial<NotificationSlots>;
}
