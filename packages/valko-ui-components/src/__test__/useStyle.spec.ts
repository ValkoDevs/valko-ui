import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Alert.styles.ts'
import type { SlotStyles } from '#valkoui/types/common'
import type { AlertProps } from '#valkoui/types/Alert'

const props = {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  icon: '',
  closable: false,
  flat: false
} as AlertProps

describe('useStyle composable', () => {
  it('should return correct styles based on props', () => {
    const result = useStyle<AlertProps, SlotStyles>(props, styles)

    const computedStyles = result.value.container

    expect(computedStyles).toEqual('vk-alert__container w-full p-4 gap-4 shadow-lg shadow-light-4 flex justify-between items-stretch dark:shadow-dark-5 rounded-lg bg-primary-500')
  })
})
