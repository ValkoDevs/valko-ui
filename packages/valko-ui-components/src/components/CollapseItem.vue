<script setup lang="ts">
import { useId, inject } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import type { CollapseItemProps, CollapseItemStates } from '#valkoui/types/Collapse'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/CollapseItem.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCollapseItem' })

const props = defineProps<CollapseItemProps>()

const classes = useStyle<CollapseItemProps, SlotStyles>(props, styles)

const {
  items = {},
  toggleItem = () => {}
} = inject<CollapseItemStates>('itemStates') || {}

const itemId = useId()
</script>

<template>
  <disclosure
    as="div"
    :key="itemId"
    :class="classes.collapse"
  >
    <disclosure-button
      :class="classes.button"
      @click="toggleItem(itemId)"
    >
      <slot name="title">
        <div>
          {{ title }}
        </div>
        <vk-icon
          name="chevron-left"
          :class="`${classes.icon} ${itemId && items[itemId] ? classes.iconOpen : ''}`"
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
        v-if="itemId && items[itemId]"
        static
        :class="classes.panel"
      >
        <slot />
      </disclosure-panel>
    </transition>
  </disclosure>
</template>
