<script setup lang="ts">
import type { ApiTableProps, HeaderKey } from './interfaces'
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

const colorMap: Record<string, string> = {
  string: 'text-secondary',
  boolean: 'text-accent',
  number: 'text-warning',
  null: 'text-negative',
  undefined: 'text-negative',
  customArray: 'text-primary',
  customString: 'text-positive',
  primitiveArray: 'text-primary',
  customType: 'text-primary'
}

const primitiveList = ['string', 'number', 'boolean', 'null', 'undefined']

const getMainKey = (header: HeaderKey) => headerMap[header]?.[0]?.key || ''
const getSlotName = (header: HeaderKey) => `cell-${getMainKey(header)}`

const isNumber = (str: string) => {
  const num = str.replace(/^'|'$/g, '')
  return !isNaN(Number(num)) && num.trim() !== ''
}

const isComplexType = (str: string) => /[<{(].*[>})]/.test(str)

const classifyToken = (token: string): string => {
  const isArray = token.endsWith('[]')
  const base = isArray ? token.slice(0, -2) : token

  if (isNumber(base)) return 'number'
  if (primitiveList.includes(base)) return isArray ? 'primitiveArray' : base
  if (/^[A-Z][A-Za-z0-9_]*$/.test(base)) return isArray ? 'customArray' : 'customType'
  return 'customString'
}

const formatValues = (raw: string) => {
  if (isComplexType(raw)) {
    return [{
      token: raw,
      color: colorMap.customType
    }]
  }

  const tokens = raw.split(/[,|]/).map(t => t.trim()).filter(Boolean)
  const multiple = tokens.length > 1
  const primitiveMode = multiple && hasAdjacentPrimitives(tokens)

  return tokens.map(token => {
    if (multiple && !primitiveMode) {
      if (isNumber(token)) {
        return { token, color: colorMap.number }
      }
      return { token: `"${token}"`, color: colorMap.customString }
    }
    const kind = classifyToken(token)
    const display = kind === 'customString' && !isNumber(token) ? `"${token}"` : token
    const color = colorMap[kind] ?? colorMap.customString
    return { token: display, color }
  })
}

const hasAdjacentPrimitives = (tokens: string[]) => {
  return tokens.some((t, i) =>
    i < tokens.length - 1 &&
    primitiveList.includes(t) &&
    primitiveList.includes(tokens[i + 1] as string)
  )
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
          v-if="isComplexType(`${item.values}`)"
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
              v-for="(t, i) in formatValues(`${item.values}`)"
              :key="i"
            >
              <span :class="t.color">{{ t.token }}</span>

              <span
                v-if="i < formatValues(`${item.values}`).length - 1"
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
            (formatValues(`${item.values}`)[0]?.color || 'text-primary')
          ]"
        >
          <template v-if="formatValues(`${item.values}`)[0]?.token === 'string' && typeof item.default === 'string'">
            "{{ item.default.replace(/^'|'$/g, '') }}"
          </template>

          <template v-else-if="formatValues(`${item.values}`)[0]?.color === colorMap.customString && typeof item.default === 'string'">
            "{{ item.default.replace(/^'|'$/g, '') }}"
          </template>

          <template v-else>
            {{ item.default }}
          </template>
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
