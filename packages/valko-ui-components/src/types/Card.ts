import type { Sizes, Variants, Shapes } from './common'
import type { CardSlots } from '../styles/Card.styles'
import type { CardImageSlots } from '../styles/CardImage.styles'
import type { CardBodySlots } from '../styles/CardBody.styles'
import type { CardHeaderSlots } from '../styles/CardHeader.styles'
import type { CardFooterSlots } from '../styles/CardFooter.styles'

export type Layout = 'vertical' | 'horizontal' | 'cover'

export interface CardFooterProps {
  isBlurred?: boolean;
  styleSlots?: Partial<CardFooterSlots>;
}

export interface CardImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  styleSlots?: Partial<CardImageSlots>;
}

export interface CardBodyProps {
  styleSlots?: Partial<CardBodySlots>;
}

export interface CardHeaderProps {
  styleSlots?: Partial<CardHeaderSlots>;
}

export interface CardProps extends Variants, Shapes, Sizes {
  layout?: Layout;
  isPressable?: boolean;
  disabled?: boolean;
  elevated?: boolean;
  styleSlots?: Partial<CardSlots>;
}
