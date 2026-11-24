<script setup lang="ts">
import { useId, computed, ref, inject } from 'vue'
import { RadioGroupRoot, RadioGroupItem } from 'reka-ui'
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

// When rendered inside a `VkRadioGroup`, the group owns the single
// `RadioGroupRoot` so a named group submits its value once per form.
const inGroup = inject<boolean>('vkRadioGroup', false)

// A radio without a `value` prop gets a stable per-instance internal value so
// Reka can track its checked state after a click, while the public
// `update:modelValue` emit still reports `props.value` (undefined), matching
// the pre-migration contract.
const internalValue = useId()
const internalSelected = ref(false)

const itemValue = computed(() => props.value ?? internalValue)
const rootModelValue = computed(() => {
  if (props.modelValue !== undefined) return props.modelValue
  return internalSelected.value ? itemValue.value : NO_VALUE
})

const s = computed(() => styles(props))

const inputId = useId()
const helpertextId = useId()

const describedBy = computed(() => {
  const ids = []
  if (props.helpertext) ids.push(helpertextId)
  if (props.ariaDescribedBy) ids.push(props.ariaDescribedBy)
  return ids.length > 0 ? ids.join(' ') : undefined
})

const onUpdate = () => {
  if (props.readonly) return
  if (props.value === undefined) internalSelected.value = true
  emit('update:modelValue', props.value as RadioProps['value'])
}
</script>

<template>
  <RadioGroupRoot
    v-if="!inGroup"
    :model-value="rootModelValue"
    :name="name"
    :disabled="disabled"
    :class="s.container({ class: styleSlots?.container })"
    @update:model-value="onUpdate"
  >
    <div :class="s.radioContainer({ class: styleSlots?.radioContainer })">
      <RadioGroupItem
        v-slot="{ checked }"
        :id="inputId"
        :value="itemValue"
        :aria-label="ariaLabel || undefined"
        :aria-labelledby="ariaLabelledBy || undefined"
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
  <template v-else>
    <div :class="s.radioContainer({ class: styleSlots?.radioContainer })">
      <RadioGroupItem
        v-slot="{ checked }"
        :id="inputId"
        :value="itemValue"
        :aria-label="ariaLabel || undefined"
        :aria-labelledby="ariaLabelledBy || undefined"
        :aria-describedby="describedBy"
        :class="s.stateLayer({ class: styleSlots?.stateLayer })"
        @click="onUpdate"
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
  </template>
</template>
