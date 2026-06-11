import { tv } from 'tailwind-variants'

const dateTimePicker = tv({
  slots: {
    dateSection: [
      'vk-datetimepicker__date-section'
    ],
    timeSection: [
      'vk-datetimepicker__time-section'
    ],
    backButton: [
      'vk-datetimepicker__back-button',
      'flex',
      'items-center',
      'gap-1'
    ]
  }
})

export default dateTimePicker
export type DateTimePickerSlots = typeof dateTimePicker.slots
