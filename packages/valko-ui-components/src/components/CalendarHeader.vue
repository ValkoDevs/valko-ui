<script setup lang="ts">
import type { CalendarHeaderProps } from '#valkoui/types/Calendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkButton from './Button.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCalendarHeader' })

const props = defineProps<CalendarHeaderProps>()

const emit = defineEmits(['previousClick', 'nextClick', 'viewChange'])

const classes = useStyle<CalendarHeaderProps, SlotStyles>(props, styles)
</script>

<template>
  <div :class="classes.headerContainer">
    <vk-button
      :size="size"
      :color="color"
      variant="link"
      condensed
      :shape="shape"
      :class="classes.arrows"
      :disabled="disabledLeft"
      @click="() => emit('previousClick')"
    >
      <vk-icon name="chevron-left" />
    </vk-button>

    <vk-button
      :size="size"
      color="surface"
      variant="link"
      condensed
      :shape="shape"
      :class="classes.periodButton"
      @click="() => emit('viewChange')"
    >
      {{ loadedPeriod }}
    </vk-button>

    <vk-button
      :color="color"
      :size="size"
      variant="link"
      condensed
      :shape="shape"
      :class="classes.arrows"
      :disabled="disabledRight"
      @click="() => emit('nextClick')"
    >
      <vk-icon name="chevron-right" />
    </vk-button>
  </div>
</template>
