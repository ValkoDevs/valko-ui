<script setup lang="ts">
import { type Ref, ref, watch, nextTick, computed, onUpdated } from 'vue'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'reka-ui'
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

const s = computed(() => styles(props))

const internalIndex = ref(props.defaultIndex ?? 0)
const cursorRef: Ref<HTMLElement | null> = ref(null)

const selectedIndex = computed({
  get: () => (props.modelValue ?? internalIndex.value),
  set: (value: number) => {
    if (props.modelValue !== undefined) emit('update:modelValue', value)
    else internalIndex.value = value
  }
})

// Reka Tabs values are strings, and String() collapses distinct keys like 1 and '1';
// the public API is index-based, so Reka values are the index as a string.
const selectedValue = computed(() => String(selectedIndex.value))

const onValueChange = (key: string | number) => {
  const index = Number(key)
  if (Number.isNaN(index) || index < 0 || index >= props.tabs.length) return
  onChange(index)
}

const moveCursor = async () => {
  await nextTick()
  await nextTick()
  if (cursorRef.value) {
    const extraHeight = props.shape === 'line' && props.variant === 'outlined' && !props.vertical ? 2 : 0
    const extraLeft = props.shape === 'line' && props.variant === 'outlined' && props.vertical ? 2 : 0
    const selectedElement = cursorRef.value.closest('.tab-list')?.querySelector('button[data-state=active]') as HTMLElement
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
  <div :class="s.container({ class: styleSlots?.container })">
    <TabsRoot
      as="div"
      :orientation="vertical ? 'vertical' : 'horizontal'"
      :model-value="selectedValue"
      :class="s.group({ class: styleSlots?.group })"
      @update:model-value="onValueChange"
    >
      <TabsList
        :class="s.list({ class: styleSlots?.list })"
        as="nav"
        :aria-label="ariaLabel ?? 'Tab navigation'"
      >
        <div
          :class="s.cursor({ class: styleSlots?.cursor })"
          ref="cursorRef"
        >
          <div
            v-if="variant === 'gradient'"
            :class="s.cursorGradient({ class: styleSlots?.cursorGradient })"
          />
        </div>
        <TabsTrigger
          v-for="(item, index) in tabs"
          :class="s.tabSlot({ class: styleSlots?.tabSlot })"
          :key="item.key"
          :value="String(index)"
          :disabled="item.disabled"
        >
          <slot :name="`${item.key}-tab`">
            <VkIcon
              v-if="item.leftIcon"
              :name="item.leftIcon"
              :class="s.leftIcon({ class: styleSlots?.leftIcon })"
            />
            <span> {{ item.title }} </span>
            <VkIcon
              v-if="item.rightIcon"
              :name="item.rightIcon"
              :class="s.rightIcon({ class: styleSlots?.rightIcon })"
            />
          </slot>
        </TabsTrigger>
      </TabsList>

      <div :class="s.content({ class: styleSlots?.content })">
        <TabsContent
          v-for="(item, index) in tabs"
          :key="item.key"
          :value="String(index)"
          :data-key="item.key"
          :class="s.content({ class: styleSlots?.content })"
        >
          <slot :name="`${item.key}-content`" />
        </TabsContent>
      </div>
    </TabsRoot>
  </div>
</template>
