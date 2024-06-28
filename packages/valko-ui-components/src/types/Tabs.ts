import type { Sizes, Color, Variants, Shape } from './common'

export interface Tab {
  key: string | number;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
}

export interface TabKeymap {
  [key: string]: string
}

export interface TabsProps extends Sizes, Variants {
  tabs: Tab[];
  shape?: Shape | 'line' | 'gradient';
  color?: Color | 'neutral';
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
