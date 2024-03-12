<script setup lang="ts">
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import { SwitchProps } from '#valkoui/components/Switch/interfaces'
import useStyle from './Switch.styles'

defineOptions({ name: 'VkSwitch' })

const props = withDefaults(defineProps<SwitchProps>(), {
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  color: 'primary',
  label: 'Switch',
  position: false,
  disabled: false,
  modelValue: false
})

const classes = useStyle(props)
const emit = defineEmits(['update:modelValue'])

const onClick = (event: boolean) => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', event)
}
</script>

<template>
  <div :class="classes.container">
    <switch-group>
      <div
        :class="classes.content"
      >
        <switch-label
          passive
          v-if="props.label"
          :class="classes.label"
        >
          {{ props.label }}
        </switch-label>
        <Switch
          :model-value="props.modelValue"
          :data-active="props.modelValue"
          :class="classes.switch"
          @update:model-value="onClick"
        >
          <span
            aria-hidden="true"
            :data-selected="props.modelValue"
            :class="`${classes.thumb}`"
          />
        </Switch>
      </div>
    </switch-group>
  </div>
</template>
