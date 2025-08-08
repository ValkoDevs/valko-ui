import type { Shapes, Alignments, PlacementsWithAuto, AriaAttributes } from './common'

export interface PopoverProps extends Shapes, Alignments, PlacementsWithAuto, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby'> {
  text?: string;
  isOpen?: boolean;
  elevated?: boolean;
  condensed?: boolean;
  classes?: string | string[];
}
