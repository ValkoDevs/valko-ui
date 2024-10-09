<script setup lang="ts">
import type { CalendarHeaderProps } from '#valkoui/types/Calendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkCalendarHeader' })

const props = defineProps<CalendarHeaderProps>()

const emit = defineEmits(['previousClick', 'nextClick', 'viewChange'])

const classes = useStyle<CalendarHeaderProps, SlotStyles>(props, styles)
</script>

<template>
  <div :class="classes.headerContainer">
    <VkButton
      :size="size"
      :color="color"
      variant="link"
      condensed
      :shape="shape"
      :class="classes.arrows"
      :disabled="disabledLeft"
      flat
      @click="() => emit('previousClick')"
    >
      <VkIcon name="chevron-left" />
    </VkButton>

    <VkButton
      :size="size"
      color="neutral"
      variant="link"
      :shape="shape"
      :class="classes.periodButton"
      flat
      @click="() => emit('viewChange')"
    >
      {{ loadedPeriod }}
    </VkButton>

    <VkButton
      :color="color"
      :size="size"
      variant="link"
      condensed
      :shape="shape"
      :class="classes.arrows"
      :disabled="disabledRight"
      flat
      @click="() => emit('nextClick')"
    >
      <VkIcon name="chevron-right" />
    </VkButton>
  </div>
</template>
