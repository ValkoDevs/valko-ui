import type { Size, Variants, Shapes } from '#valkoui/types'

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
  size?: Size | 'full';
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  isPressable?: boolean;
  disabled?: boolean;
  flat?: boolean;
}
