<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import type { MenuProps, MenuItem } from '#valkoui/types/Menu'
import styles from '#valkoui/styles/Menu.styles.ts'
import useKeyboardNavigation from '#valkoui/composables/useKeyboardNavigation.ts'
import { createIndexedAdapter } from '#valkoui/keyboard-navigation/index.ts'

defineOptions({ name: 'VkMenu' })

const props = withDefaults(defineProps<MenuProps>(), {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  active: null
})

const emit = defineEmits(['itemClick'])

const s = computed(() => styles(props))

const groups = props.items.reduce((acc: Set<string>, item: MenuItem) => {
  if (item.group) acc.add(item.group)
  else acc.add('default')
  return acc
}, new Set(['default']) as Set<string>)

const focusedIndex = ref(-1)

const navigableItems = computed(() => props.items.filter(item => !item.disabled))

watch(
  () => [props.active, props.items],
  () => {
    const idx = navigableItems.value.findIndex(i => i.key === props.active)
    focusedIndex.value = idx >= 0 ? idx : (navigableItems.value.length ? 0 : -1)
  },
  { immediate: true }
)

const onItemClick = (item: MenuItem) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}

const focusItem = (index: number) => {
  focusedIndex.value = index
  nextTick(() => {
    const allButtons = document.querySelectorAll('[role="menuitem"]')
    if (allButtons[index]) (allButtons[index] as HTMLElement).focus()
  })
}

const focusedKey = computed(() => navigableItems.value[focusedIndex.value]?.key)

const handleKeyDown = useKeyboardNavigation(
  createIndexedAdapter({
    currentIndex: focusedIndex,
    itemCount: () => navigableItems.value.length,
    loop: true,
    onMove: (index) => focusItem(index),
    onSelect: (index) => {
      const item = navigableItems.value[index]
      if (item && !item.disabled) onItemClick(item)
    }
  })
)
</script>

<template>
  <div>
    <div
      v-for="group in groups"
      :key="group"
    >
      <span
        v-if="group !== 'default'"
        :class="s.group({ class: styleSlots?.group })"
        role="presentation"
      >
        {{ group }}
      </span>
      <ul
        :class="s.menu({ class: styleSlots?.menu })"
        role="menu"
        :aria-label="group !== 'default' ? group : 'Menu'"
      >
        <li
          v-for="item in items.filter(i => i.group === group)"
          :key="item.key"
          :class="s.item({ class: styleSlots?.item })"
          role="none"
        >
          <slot
            name="item"
            :item="item"
          >
            <button
              :class="s.content({ class: styleSlots?.content })"
              :data-active="item.key === active"
              :data-disabled="item.disabled"
              :aria-disabled="item.disabled || undefined"
              role="menuitem"
              :tabindex="focusedKey === item.key ? 0 : -1"
              @click.prevent="onItemClick(item)"
              @keydown="(e) => !item.disabled && handleKeyDown(e)"
            >
              {{ item.text }}
            </button>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
