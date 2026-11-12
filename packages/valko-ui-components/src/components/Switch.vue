<script setup lang="ts">
import { useId, computed } from 'vue'
import { SwitchRoot, SwitchThumb, Label } from 'reka-ui'
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
    <div :class="s.content({ class: styleSlots?.content })">
      <Label
        v-if="label"
        :for="inputId"
        :class="s.labelSlot({ class: styleSlots?.labelSlot })"
      >
        {{ label }}
      </Label>
      <SwitchRoot
        :id="inputId"
        :model-value="modelValue"
        :disabled="disabled"
        :class="s.switchSlot({ class: styleSlots?.switchSlot })"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
        :aria-describedby="ariaDescribedBy"
        @update:model-value="onClick"
      >
        <SwitchThumb :class="s.thumb({ class: styleSlots?.thumb })" />
      </SwitchRoot>
    </div>
  </div>
</template>
