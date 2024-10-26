<script setup lang="ts">
import { type Ref, ref, inject } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import type { CollapseItemProps } from '#valkoui/types/Collapse'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/CollapseItem.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCollapseItem' })

const props = defineProps<CollapseItemProps>()

const classes = useStyle<CollapseItemProps, SlotStyles>(props, styles)

const buttonRef: Ref<Record<string, HTMLElement> | null> = ref(null)
const collapseId = inject<string>('collapseId', '')

const onClick = () => {
  if (buttonRef.value) {
    const current = buttonRef.value.$el
    const parent = current.closest('.vk-collapse')

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
          {{ title }}
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
