<script setup lang="ts">
import { ref, computed, useId } from 'vue'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger
} from 'reka-ui'
import type { DropdownProps, Item } from '#valkoui/types/Dropdown'
import styles from '#valkoui/styles/Dropdown.styles.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkDropdown' })

const props = withDefaults(defineProps<DropdownProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  icon: 'chevron-down',
  elevated: false,
  disabled: false,
  placement: 'auto',
  alignment: undefined,
  isOpen: undefined,
  items: () => []
})

const emit = defineEmits(['itemClick', 'click'])

const s = computed(() => styles(props))

const dropdownId = useId()
const internalOpen = ref(false)

const open = computed({
  get: () => props.isOpen ?? internalOpen.value,
  set: (val: boolean) => {
    if (props.isOpen === undefined) internalOpen.value = val
  }
})

// `placement: 'auto'` is delegated to Reka's default side + collision
// avoidance, which flips the menu when it does not fit.
const side = computed(() => (props.placement === 'auto' ? undefined : props.placement))
const align = computed(() => props.alignment ?? 'start')

const onToggle = (event?: MouseEvent) => {
  open.value = !open.value
  if (event) emit('click', event)
}

const onItemClick = (item: Item) => {
  emit('itemClick', item)
  item.onClick?.()
  open.value = false
}
</script>

<template>
  <DropdownMenuRoot
    v-model:open="open"
    :modal="false"
  >
    <div :class="s.container({ class: styleSlots?.container })">
      <template v-if="$slots['dropdown-trigger']">
        <slot
          name="dropdown-trigger"
          :v-bind="props"
          :open="open"
          :toggle="onToggle"
        />
      </template>
      <DropdownMenuTrigger
        v-else
        as-child
        @click="emit('click', $event)"
      >
        <vk-button
          :variant="variant"
          :shape="shape"
          :color="color"
          :size="size"
          :id="dropdownId"
          :disabled="disabled"
          :elevated="elevated"
          :class="s.triggerButton({ class: styleSlots?.triggerButton })"
        >
          {{ label }}
          <vk-icon
            :class="s.icon({ class: styleSlots?.icon })"
            :name="icon"
            :data-open="open"
          />
        </vk-button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          :side="side"
          :align="align"
          :side-offset="4"
          :aria-labelledby="dropdownId"
          :class="[s.panel({ class: styleSlots?.panel }), s.itemsMenu({ class: styleSlots?.itemsMenu })]"
        >
          <DropdownMenuItem
            v-for="item in items"
            :key="item.key"
            as-child
            :disabled="item.disabled"
            @select="onItemClick(item)"
          >
            <button
              type="button"
              :class="s.itemsButton({ class: styleSlots?.itemsButton })"
              :data-shape="shape"
              :data-disabled="item.disabled || undefined"
              :aria-disabled="item.disabled || undefined"
            >
              <vk-icon
                v-if="item.icon"
                :class="s.itemsIcon({ class: styleSlots?.itemsIcon })"
                :name="item.icon"
              />
              {{ item.title }}
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </div>
  </DropdownMenuRoot>
</template>
