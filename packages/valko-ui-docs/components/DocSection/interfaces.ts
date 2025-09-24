import type { DocSectionSlots } from './DocSection.styles'

export interface DocSectionProps {
  title?: string;
  description?: string;
  styleSlots?: Partial<DocSectionSlots>;
}
