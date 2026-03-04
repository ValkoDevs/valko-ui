<script setup lang="ts">
import type { ApiTableProps, HeaderKey } from './interfaces'
import styles from './ApiTable.styles'
import { apiTypeSchema } from '~/utils/apiTypeSchema'

defineOptions({ name: 'ApiTable' })

defineProps<ApiTableProps>()

const s = computed(() => styles())

const headerMap = {
  props: propHeaders,
  emits: emitHeaders,
  slots: slotHeaders,
  interface: propHeaders,
  format: formatHeaders
}

const colorMap: Partial<Record<string, string>> = {
  [apiTypeSchema.primitives.string]: 'text-secondary',
  [apiTypeSchema.primitives.number]: 'text-warning',
  [apiTypeSchema.primitives.boolean]: 'text-accent',
  [apiTypeSchema.primitives.null]: 'text-negative',
  [apiTypeSchema.primitives.undefined]: 'text-negative',
  [apiTypeSchema.custom.string]: 'text-positive'
}

const getColor = (type: string) => colorMap[type] || 'text-primary'
const getMainKey = (header: HeaderKey) => headerMap[header]?.[0]?.key || ''
const getSlotName = (header: HeaderKey) => `cell-${getMainKey(header)}`

const formatValues = (values: string, apiType: string) => {
  const tokens = values.split(/[,|]/).map(t => t.trim())

  if (apiType === apiTypeSchema.primitives.default) {
    return tokens.map(token => {
      const primitiveType = Object.values(apiTypeSchema.primitives).find(v => v === token)

      return {
        display: token,
        color: getColor(primitiveType || token)
      }
    })
  }

  return tokens.map(token => ({
    display: apiType === apiTypeSchema.custom.string ? `"${token}"` : token,
    color: getColor(apiType)
  }))
}

const formatDefaultValue = (value: string, type: string) => {
  if (type === apiTypeSchema.custom.string) return `"${value.replace(/^'|'$/g, '')}"`
  return value
}
</script>

<template>
  <template
    v-for="section in tables"
    :key="section.title"
  >
    <h3 :class="s.title()">
      {{ section.headers === 'interface' ? '' : name }} {{ section.title }} {{ section.headers === 'interface' ? 'Interface' : '' }}
    </h3>

    <vk-table
      :headers="headerMap[section.headers]"
      :data="section.data"
    >
      <template
        v-if="getMainKey(section.headers)"
        #[getSlotName(section.headers)]="{ item }"
      >
        <span :class="s.itemCell()">{{ item[getMainKey(section.headers)] }}</span>
      </template>

      <template #cell-required="{item}">
        <div :class="s.required()">
          <vk-icon
            v-if="item.required"
            name="check"
            class="text-positive"
          />
          <vk-icon
            v-else
            name="x"
            class="text-negative"
          />
        </div>
      </template>

      <template #cell-description="{ item }">
        <span :class="s.description()">{{ item.description }}</span>
      </template>

      <template
        v-if="['props', 'interface', 'emits'].includes(section.headers)"
        #cell-values="{ item }"
      >
        <code-block
          v-if="item.apiType === apiTypeSchema.object || item.apiType === apiTypeSchema.function || item.apiType === apiTypeSchema.event"
          :has-copy-button="false"
          language="ts"
          :code="`${item.values}`"
        />

        <div
          v-else
          :class="s.values()"
        >
          <template v-if="item.values">
            <template
              v-for="(token, index) in formatValues(item.values as string, item.apiType as string)"
              :key="index"
            >
              <span :class="token.color">
                {{ token.display }}
              </span>

              <span
                v-if="index < formatValues(item.values as string, item.apiType as string).length - 1"
                class="text-outlined"
              >|</span>
            </template>
          </template>

          <template v-else>
            <span class="text-on-surface-variant italic w-full flex justify-center items-center">-</span>
          </template>
        </div>
      </template>

      <template
        v-if="['props', 'interface'].includes(section.headers)"
        #cell-default="{ item }"
      >
        <span
          v-if="item.default !== undefined && item.default !== null && item.default !== ''"
          :class="[
            'font-mono bg-surface-container rounded p-2 w-full flex justify-center items-center',
            getColor(item.apiType as string)
          ]"
        >
          {{ formatDefaultValue(item.default as string, item.apiType as string) }}
        </span>
        <span
          v-else
          class="text-on-surface-variant italic w-full flex p-2 rounded-lg bg-surface-container justify-center items-center"
        >—</span>
      </template>

      <template #cell-example="{ item }">
        <code-block
          v-if="section.headers === 'slots'"
          :has-copy-button="false"
          language="vue"
          :code="`${item.example}`"
        />

        <span
          v-else
          :class="s.example()"
        >
          {{ item.example }}
        </span>
      </template>

      <template
        v-if="section.headers === 'emits'"
        #cell-type="{ item }"
      >
        <code-block
          :has-copy-button="false"
          language="ts"
          :code="`${item.type}`"
        />
      </template>
    </vk-table>
  </template>
</template>
