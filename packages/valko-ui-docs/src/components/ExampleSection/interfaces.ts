export interface ExampleSectionProps {
  title: string;
  direction: 'row' | 'col';
  justify: 'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  align: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  gap: boolean;
  wrap: boolean;
}
