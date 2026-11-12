<script setup lang="ts">
import { useId, computed } from 'vue'
import { RadioGroupRoot, RadioGroupItem } from 'reka-ui'
import type { AcceptableValue } from 'reka-ui'
import type { RadioProps } from '#valkoui/types/Radio'
import styles from '#valkoui/styles/Radio.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkRadio' })

// Reka treats an undefined group model as equal to an undefined item value
// (checked); the sentinel keeps a radio without `value` unchecked by default.
const NO_VALUE: Record<string, never> = {}

const props = withDefaults(defineProps<RadioProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'rounded',
  size: 'md',
  labelPosition: 'right',
  readonly: false
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

const inputId = useId()
const helpertextId = useId()

const describedBy = computed(() => {
  const ids = []
  if (props.helpertext) ids.push(helpertextId)
  if (props.ariaDescribedBy) ids.push(props.ariaDescribedBy)
  return ids.length > 0 ? ids.join(' ') : undefined
})

const onUpdate = (value: AcceptableValue) => {
  if (props.readonly) return
  emit('update:modelValue', value as RadioProps['value'])
}
</script>

<template>
  <RadioGroupRoot
    :model-value="modelValue ?? NO_VALUE"
    :name="name"
    :disabled="disabled"
    :class="s.container({ class: styleSlots?.container })"
    @update:model-value="onUpdate"
  >
    <div :class="s.radioContainer({ class: styleSlots?.radioContainer })">
      <RadioGroupItem
        v-slot="{ checked }"
        :id="inputId"
        :value="value"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
        :aria-describedby="describedBy"
        :class="s.stateLayer({ class: styleSlots?.stateLayer })"
      >
        <div :class="s.radio({ class: styleSlots?.radio })">
          <vk-icon
            v-if="checked"
            name="point-filled"
            :class="s.icon({ class: styleSlots?.icon })"
          />
        </div>
      </RadioGroupItem>
      <label
        :for="inputId"
        :class="s.label({ class: styleSlots?.label })"
      >
        {{ label }}
      </label>
    </div>
    <span
      v-if="helpertext"
      :class="s.helpertext({ class: styleSlots?.helpertext })"
      :id="helpertextId"
    >
      {{ helpertext }}
    </span>
  </RadioGroupRoot>
</template>
