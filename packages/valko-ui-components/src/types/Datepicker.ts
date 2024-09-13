import type { DefaultComponent } from './common'

export type viewType = 'days' | 'months' | 'years'

export interface DatepickerProps extends DefaultComponent {
  flat?: boolean;
}
