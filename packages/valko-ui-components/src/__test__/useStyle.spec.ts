import useStyle from '#valkoui/composables/useStyle.ts'
import type { SlotStyles, BaseStyles } from '#valkoui/types/common'
import stylesWithSlots from '#valkoui/__test__/__mocks__/stylesWithSlots'
import stylesWithoutSlots from '#valkoui/__test__/__mocks__/stylesWithoutSlots'
import { type MockProps, mockProps } from '#valkoui/__test__/__mocks__/props'

describe('useStyle composable', () => {
  it('should return correct styles with slots', () => {
    const result = useStyle<MockProps, SlotStyles>(mockProps, stylesWithSlots)

    expect(result.value).toEqual({
      base: undefined,
      container: 'mock-container-class',
      content: 'mock-content-class',
      title: 'mock-title-class mock-filled-title-class',
      button: 'mock-button-class',
      span: 'mock-span-class mock-filled-span-class',
      rightIcon: 'mock-rightIcon-class mock-filled-rightIcon-class',
      leftIcon: 'mock-leftIcon-class mock-filled-leftIcon-class'
    })
  })

  it('should return correct styles without slots', () => {
    const result = useStyle<MockProps, BaseStyles>(mockProps, stylesWithoutSlots)

    expect(result.value).toEqual('mock-base-class mock-filled-class mock-md-size-class')
  })
})
