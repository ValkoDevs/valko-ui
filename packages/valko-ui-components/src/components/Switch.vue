<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import type { SwitchProps } from '#valkoui/types/Switch'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Switch.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkSwitch' })

const props = withDefaults(defineProps<SwitchProps>(), {
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  color: 'primary',
  labelPosition: 'right',
  disabled: false,
  modelValue: false
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<SwitchProps, SlotStyles>(props, styles)

const onClick = (event: boolean) => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', event)
}
</script>

<template>
  <div :class="classes.container">
    <switch-group>
      <div :class="classes.content">
        <switch-label
          passive
          v-if="label"
          :class="classes.label"
        >
          {{ label }}
        </switch-label>
        <Switch
          :model-value="modelValue"
          :data-active="modelValue"
          :class="classes.switch"
          @update:model-value="onClick"
        >
          <span
            aria-hidden="true"
            :data-selected="modelValue"
            :class="classes.thumb"
          />
        </Switch>
      </div>
    </switch-group>
  </div>
</template>
