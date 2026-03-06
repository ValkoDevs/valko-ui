<script setup lang="ts">
import { computed } from 'vue'
import type { DayViewProps } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'

defineOptions({ name: 'VkEventDayView' })

const props = withDefaults(defineProps<DayViewProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
})

const emit = defineEmits(['eventClick'])

const s = computed(() => styles(props))
</script>

<template>
  <div
    :class="s.dayViewContainer({ class: styleSlots?.dayViewContainer })"
    :style="{
      gridTemplateColumns: `${adapter.timezones.extras.length + 1}fr ${10 - (adapter.timezones.extras.length + 1)}fr`
    }"
  >
    <div
      :class="s.timezoneContainer({ class: styleSlots?.timezoneContainer })"
      :style="{ gridColumn: `span ${adapter.timezones.extras.length + 1} / span ${adapter.timezones.extras.length + 1}` }"
    >
      <div :class="s.timezone({ class: styleSlots?.timezone })">
        <span>{{ adapter.timezones.locale.name }}</span>

        <span
          v-for="hour in adapter.timezones.locale.display"
          :key="hour"
        >
          {{ hour }}
        </span>
      </div>

      <div
        v-for="tz in adapter.timezones.extras"
        :key="tz.id"
        :class="s.timezone({ class: styleSlots?.timezone })"
      >
        <span>{{ tz.name }}</span>

        <span
          v-for="hour in tz.display"
          :key="hour"
        >
          {{ hour }}
        </span>
      </div>
    </div>

    <div
      :class="s.eventContainer({ class: styleSlots?.eventContainer })"
      :style="{ gridColumn: `span ${10 - (adapter.timezones.extras.length + 1)} / span ${10 - (adapter.timezones.extras.length + 1)}` }"
    >
      <slot
        name="event"
        v-bind="{ event: {} }"
      >
        <div
          v-for="event in events"
          :key="event.id"
          :class="s.event({ class: styleSlots?.event })"
          :data-color="event.color"
          @click="emit('eventClick', event)"
        >
          {{ event.title }}
        </div>
      </slot>
    </div>
  </div>
</template>
