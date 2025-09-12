import type { ExampleSectionSlots } from './ExampleSection.styles'

export interface ExampleSectionProps {
  title?: string;
  classes?: string;
  styleSlots?: Partial<ExampleSectionSlots>;
}
