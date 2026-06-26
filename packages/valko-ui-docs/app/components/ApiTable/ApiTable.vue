<script setup lang="ts">
import type { ApiTableProps, HeaderKey, ApiType } from './interfaces'
import type { TableItem } from '#valkoui'
import styles from './ApiTable.styles'

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

const colorMap: Partial<Record<ApiType, string>> = {
  string: 'text-secondary',
  number: 'text-warning',
  EpochTimeStamp: 'text-warning',
  boolean: 'text-accent',
  null: 'text-negative',
  undefined: 'text-negative',
  any: 'text-negative',
  unknown: 'text-negative',
  Date: 'text-primary',
  primitive: 'text-secondary',
  object: 'text-on-surface',
  function: 'text-on-surface',
  event: 'text-on-surface',
  slot: 'text-on-surface',
  'custom-string': 'text-positive',
  'custom-type': 'text-primary',
  'custom-number': 'text-warning'
}

const isNumberList = (input: string | undefined | null) => {
  if (typeof input !== 'string') return false
  const tokens = input.split(/[,|]/).map(t => t.trim())

  return tokens.length > 0 && tokens.every(token => token !== '' && !isNaN(Number(token)))
}

const getColor = (input: string | ApiType | undefined | null): string => {
  if (typeof input !== 'string') return 'text-on-surface'
  if (isNumberList(input)) return colorMap.number || 'text-on-surface'

  if (colorMap[input as ApiType]) return colorMap[input as ApiType]!

  const match = input.match(/^\s*([a-zA-Z0-9_-]+)(?:\[\])?(?:\s*[|,].*)?$/)
  const baseType = match ? match[1] : input.trim()

  return colorMap[baseType as ApiType] || 'text-on-surface'
}

const getMainKey = (header: HeaderKey) => headerMap[header]?.[0]?.key || ''
const getSlotName = (header: HeaderKey) => `cell-${getMainKey(header)}`

const formatTokens = ({ input, apiType }: { input: string, apiType: ApiType }) => {
  const tokens = input.split(/[,|]/).map(t => t.trim())
  const isNumber = isNumberList(input)

  return tokens.map(token => {
    let baseType = token
    if (token.endsWith('[]')) baseType = token.replace(/\[\]$/, '')
    else baseType = token.replace(/^[[]|[\]]$/g, '').trim()

    if (apiType === 'primitive' || isNumber) {
      return {
        display: token,
        color: getColor(isNumber ? 'number' : baseType)
      }
    }

    if (apiType === 'custom-string') {
      return {
        display: `"${token}"`,
        color: getColor('custom-string')
      }
    }

    return {
      display: token,
      color: getColor(apiType)
    }
  })
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
      :data="section.data as unknown as TableItem[]"
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
          v-if="item.values !== undefined && item.values !==null && item.values !== '' && (item.apiType === 'object' || item.apiType === 'function' || item.apiType === 'event')"
          :has-copy-button="false"
          language="ts"
          :code="`${item.values}`"
        />

        <div
          v-else-if="item.values !== undefined && item.values !== null && item.values !== ''"
          :class="s.values()"
        >
          <template
            v-for="(token, index) in formatTokens({
              input: item.values as string,
              apiType: item.apiType as ApiType
            })"
            :key="index"
          >
            <span
              v-if="index > 0"
              class="text-outlined"
            >|</span>

            <span :class="token.color">
              {{ token.display }}
            </span>
          </template>
        </div>

        <span
          v-else
          class="text-on-surface-variant italic w-full flex p-2 rounded-lg bg-surface-container justify-center items-center"
        >—</span>
      </template>

      <template
        v-if="['props', 'interface'].includes(section.headers)"
        #cell-default="{ item }"
      >
        <span
          v-if="item.default !== undefined && item.default !== null && item.default !== ''"
          :class="[
            'font-mono bg-surface-container rounded p-2 w-full flex justify-center items-center',
            getColor(
              item.apiType === 'primitive'
                ? item.values as string
                : item.apiType as string
            )
          ]"
        >
          {{ item.apiType === 'custom-string' ? `"${item.default}"` : item.default }}
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
