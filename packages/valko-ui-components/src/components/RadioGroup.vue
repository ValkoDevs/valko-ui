<script setup lang="ts">
import { provide } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import type { RadioGroupProps } from '#valkoui/types/Radio'
import styles from '#valkoui/styles/Radio.styles.ts'

defineOptions({ name: 'VkRadioGroup' })

defineProps<RadioGroupProps>()

const emit = defineEmits(['update:modelValue'])

provide('vkRadioGroup', true)

const s = styles({})
</script>

<template>
  <RadioGroupRoot
    :model-value="modelValue"
    :name="name"
    :disabled="disabled"
    :class="s.groupContainer()"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadioGroupRoot>
</template>
