<script setup lang="ts">
import { Ref, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { VkIcon, type CollapseItemProps, type SlotStyles, useStyle } from '#valkoui'
import styles from './CollapseItem.styles.ts'

defineOptions({ name: 'VkCollapseItem' })

const props = defineProps<CollapseItemProps>()

const classes = useStyle<CollapseItemProps, SlotStyles>(props, styles)
const buttonRef: Ref<Record<string, HTMLElement> | null> = ref(null)
const onClick = () => {
  if (buttonRef.value) {
    const current = buttonRef.value.$el
    const parent = current.closest('.vk-collapse')
    const collapseId = parent?.getAttribute('data-collapse-id')
    if (parent?.getAttribute('data-multiple') === 'true') return

    if (collapseId) {
      const collapseList = document.querySelectorAll(`[data-collapse-id="${collapseId}"] button[data-headlessui-state="open"]`) as unknown as HTMLElement[]
      for (const collapse of collapseList) {
        if (collapse !== current) collapse.click()
      }
    }
  }
}
</script>

<template>
  <disclosure
    v-slot="{ open }"
    as="div"
    :class="classes.collapse"
  >
    <disclosure-button
      ref="buttonRef"
      :class="classes.button"
      @mousedown.stop="onClick"
    >
      <slot name="title">
        <div>
          {{ props.title }}
        </div>
        <vk-icon
          name="chevron-left"
          :class="`${classes.icon} ${open ? classes.iconOpen : ''}`"
        />
      </slot>
    </disclosure-button>
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="transition-all max-h-0 opacity-0"
      enter-to-class="transition-all max-h-96 opacity-100"
      leave-active-class="transition-all duration-200 ease-out"
      leave-from-class="transition-all max-h-96 opacity-100"
      leave-to-class="transition-all max-h-0 opacity-0"
    >
      <disclosure-panel
        :class="classes.panel"
      >
        <slot />
      </disclosure-panel>
    </transition>
  </disclosure>
</template>
