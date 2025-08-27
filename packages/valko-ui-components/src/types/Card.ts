import type { Sizes, Variants, Shapes } from './common'

export type Layout = 'vertical' | 'horizontal' | 'cover'

export interface CardFooterProps {
  isBlurred?: boolean;
  styleSlots?: {
    container?: string;
  };
}

export interface CardImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  styleSlots?: {
    container?: string;
    img?: string;
    gradient?: string;
  };
}

export interface CardBodyProps {
  styleSlots?: {
    container?: string;
  };
}

export interface CardHeaderProps {
  styleSlots?: {
    container?: string;
  };
}

export interface CardProps extends Variants, Shapes, Sizes {
  layout?: Layout;
  isPressable?: boolean;
  disabled?: boolean;
  elevated?: boolean;
  slotStyles?: {
    container?: string;
  }
}
