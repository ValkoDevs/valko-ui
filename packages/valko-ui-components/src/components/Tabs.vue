<script setup lang="ts">
import { type Ref, ref, watch, nextTick, computed, onUpdated } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import type { TabsProps } from '#valkoui/types/Tabs'
import styles from '#valkoui/styles/Tabs.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkTabs' })

const props = withDefaults(defineProps<TabsProps>(), {
  variant: 'filled',
  color: 'primary',
  shape: 'soft',
  size: 'md',
  defaultIndex: 0,
  vertical: false,
  modelValue: undefined,
  tabs: () => []
})

const emit = defineEmits(['tabClick', 'update:modelValue'])

const { container, group, list, tabSlot, content, cursor, cursorGradient, leftIcon, rightIcon } = styles(props)

const internalIndex = ref(0)
const cursorRef: Ref<HTMLElement | null> = ref(null)

const selectedIndex = computed({
  get: () => (props.modelValue ?? internalIndex.value),
  set: (value: number) => {
    if (props.modelValue !== undefined) emit('update:modelValue', value)
    else internalIndex.value = value
  }
})

const moveCursor = async () => {
  await nextTick()
  await nextTick()
  if (cursorRef.value) {
    const extraHeight = props.shape === 'line' && props.variant === 'outlined' && !props.vertical ? 2 : 0
    const extraLeft = props.shape === 'line' && props.variant === 'outlined' && props.vertical ? 2 : 0
    const selectedElement = cursorRef.value.closest('.tab-list')?.querySelector('button[data-headlessui-state=selected]') as HTMLElement
    if (selectedElement) {
      cursorRef.value.style.width = `${selectedElement.clientWidth}px`
      cursorRef.value.style.height = `${+selectedElement.clientHeight + extraHeight}px`
      cursorRef.value.style.left = `${selectedElement.offsetLeft - extraLeft}px`
      cursorRef.value.style.top = `${selectedElement.offsetTop}px`
    }
  }
}

const onChange = (index: number) => {
  emit('tabClick', index)
  selectedIndex.value = index
  moveCursor()
}

onUpdated(() => moveCursor())
watch(
  [() => props.modelValue, () => internalIndex.value],
  moveCursor,
  { immediate: true }
)
</script>

<template>
  <div :class="container({ class: styleSlots?.container })">
    <tab-group
      as="div"
      :vertical="vertical"
      :default-index="defaultIndex"
      :class="group({ class: styleSlots?.group })"
      :selected-index="selectedIndex"
      @change="onChange"
    >
      <tab-list
        :class="list({ class: styleSlots?.list })"
        as="nav"
        :aria-label="props['aria-label'] ?? 'Tab navigation'"
      >
        <div
          :class="cursor({ class: styleSlots?.cursor })"
          ref="cursor"
        >
          <div
            v-if="variant === 'gradient'"
            :class="cursorGradient({ class: styleSlots?.cursorGradient })"
          />
        </div>
        <tab
          v-for="item in tabs"
          :class="tabSlot({ class: styleSlots?.tabSlot })"
          :key="item.key"
          :disabled="item.disabled"
        >
          <slot :name="`${item.key}-tab`">
            <vk-icon
              v-if="item.leftIcon"
              :name="item.leftIcon"
              :class="leftIcon({ class: styleSlots?.leftIcon })"
            />
            <span> {{ item.title }} </span>
            <vk-icon
              v-if="item.rightIcon"
              :name="item.rightIcon"
              :class="rightIcon({ class: styleSlots?.rightIcon })"
            />
          </slot>
        </tab>
      </tab-list>

      <tab-panels :class="content({ class: styleSlots?.content })">
        <tab-panel
          v-for="item in tabs"
          :key="item.key"
          :data-key="item.key"
          :class="content({ class: styleSlots?.content })"
        >
          <slot :name="`${item.key}-content`" />
        </tab-panel>
      </tab-panels>
    </tab-group>
  </div>
</template>
