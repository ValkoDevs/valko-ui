import type { Sizes, Variants, Shapes } from './common'

export type Layout = 'vertical' | 'horizontal' | 'cover'

export interface CardFooterProps {
  isBlurred?: boolean;
}

export interface CardImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}

export interface CardProps extends Variants, Shapes, Sizes {
  layout?: Layout;
  isPressable?: boolean;
  disabled?: boolean;
  elevated?: boolean;
}
