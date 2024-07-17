import type { Size, Variants, Shapes } from './common'

export interface CardFooterProps {
  isBlurred?: boolean;
}

export interface CardImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

export interface CardProps extends Variants, Shapes {
  layout?: 'vertical' | 'horizontal' | 'cover';
  size?: Size | 'full';
  isPressable?: boolean;
  disabled?: boolean;
  flat?: boolean;
}
