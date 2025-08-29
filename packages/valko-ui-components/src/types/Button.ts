import type { Shapes, ColorsWithSurface, Sizes, VariantWithGradientAndLink, AriaAttributes } from './common'
import type { ButtonSlots } from '../styles/Button.styles'

export interface ButtonProps extends Shapes, Sizes, ColorsWithSurface, Pick<AriaAttributes, 'aria-label'> {
  variant?: VariantWithGradientAndLink;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  elevated?: boolean;
  condensed?: boolean;
  type?: 'button' | 'submit' | 'reset';
  styleSlots?: Partial<ButtonSlots>;
}
