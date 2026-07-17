<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import type { MenuProps, MenuItem } from '#valkoui/types/Menu'
import styles from '#valkoui/styles/Menu.styles.ts'
import useListKeyboardNav from '#valkoui/composables/useListKeyboardNav'

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

const focusedIndex = ref(-1)

const navigableItems = computed(() => props.items.filter(item => !item.disabled))

const groupedItems = computed(() =>
  props.items.reduce<Record<string, MenuItem[]>>((groups, item) => {
    const group = item.group ?? 'default'

    ;(groups[group] ??= []).push(item)

    return groups
  }, {})
)

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
  const item = navigableItems.value[index]
  if (!item) return

  focusedIndex.value = index

  nextTick(() => {
    const allButtons = document.querySelectorAll<HTMLElement>('[role="menuitem"]')
    allButtons[index]?.focus()
  })
}

const focusedKey = computed(() => navigableItems.value[focusedIndex.value]?.key)

const handleKeyDown = useListKeyboardNav({
  currentIndex: focusedIndex,
  itemCount: () => navigableItems.value.length,
  loop: true,
  onMove: focusItem,
  onSelect: (index: number) => {
    const item = navigableItems.value[index]
    if (item) onItemClick(item)
  }
})
</script>

<template>
  <div
    v-for="(items, group) in groupedItems"
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
        v-for="item in items"
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
            @keydown="!item.disabled && handleKeyDown($event)"
          >
            {{ item.text }}
          </button>
        </slot>
      </li>
    </ul>
  </div>
</template>
