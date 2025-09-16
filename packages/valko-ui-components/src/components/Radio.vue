<script setup lang="ts">
import { useId, computed } from 'vue'
import type { RadioProps } from '#valkoui/types/Radio'
import styles from '#valkoui/styles/Radio.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkRadio' })

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
  if (props['aria-describedby']) ids.push(props['aria-describedby'])
  return ids.length > 0 ? ids.join(' ') : undefined
})

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', props.value)
}
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <div
      :class="s.radioContainer({ class: styleSlots?.radioContainer })"
      role="radio"
      :tabindex="disabled ? -1 : 0"
      :aria-checked="modelValue === value"
      :aria-disabled="disabled"
      :aria-label="props['aria-label']"
      :aria-labelledby="props['aria-labelledby']"
      :aria-describedby="describedBy"
      @click="onClick"
      @keydown.enter.prevent="onClick"
      @keydown.space.prevent="onClick"
    >
      <div :class="s.stateLayer({ class: styleSlots?.stateLayer })">
        <div
          :class="s.radio({ class: styleSlots?.radio })"
          :data-checked="value && modelValue === value"
        >
          <vk-icon
            v-if="value && modelValue === value"
            name="point-filled"
            :class="s.icon({ class: styleSlots?.icon })"
          />
        </div>
      </div>

      <input
        :id="inputId"
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        :class="s.input({ class: styleSlots?.input })"
      >
      <label
        :for="inputId"
        :class="s.label({ class: styleSlots?.label })"
      >
        {{ props.label }}
      </label>
    </div>
    <span
      v-if="props.helpertext"
      :class="s.helpertext({ class: styleSlots?.helpertext })"
      :id="helpertextId"
    >
      {{ props.helpertext }}
    </span>
  </div>
</template>
