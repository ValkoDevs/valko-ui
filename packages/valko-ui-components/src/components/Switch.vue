<script setup lang="ts">
import { useId, computed } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import type { SwitchProps } from '#valkoui/types/Switch'
import styles from '#valkoui/styles/Switch.styles.ts'

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

const s = computed(() => styles(props))

const inputId = useId()

const onClick = (event: boolean) => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', event)
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <switch-group>
      <div :class="s.content({ class: styleSlots?.content })">
        <switch-label
          v-if="label"
          :for="inputId"
          :class="s.labelSlot({ class: styleSlots?.labelSlot })"
          passive
        >
          {{ label }}
        </switch-label>
        <Switch
          :id="inputId"
          :model-value="modelValue"
          :disabled="disabled"
          :data-active="modelValue"
          :class="s.switchSlot({ class: styleSlots?.switchSlot })"
          :aria-label="props['aria-label']"
          :aria-labelledby="props['aria-labelledby']"
          :aria-describedby="props['aria-describedby']"
          :aria-checked="modelValue"
          :aria-disabled="disabled"
          role="switch"
          @update:model-value="onClick"
        >
          <span
            aria-hidden="true"
            :data-selected="modelValue"
            :class="s.thumb({ class: styleSlots?.thumb })"
          />
        </Switch>
      </div>
    </switch-group>
  </div>
</template>
