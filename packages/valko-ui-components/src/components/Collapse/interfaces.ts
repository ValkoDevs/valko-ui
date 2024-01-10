import Sizes from '@/types/sizes'

export interface CollapseProps extends Sizes  {
  type?: 'filled' | 'ghost' | 'outlined';
  separator?: 'line' | 'split' | 'none';
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
