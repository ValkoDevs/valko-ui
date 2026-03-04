export const apiTypeSchema = {
  primitives: {
    default: 'primitive',
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    null: 'null',
    undefined: 'undefined',
    date: 'Date',
    any: 'any',
    unknown: 'unknown'
  },
  custom: {
    array: 'custom-array',
    string: 'custom-string',
    type: 'custom-type'
  },
  arrays: {
    default: 'array',
    primitive: 'primitive-array',
    object: 'object-array'
  },
  object: 'object',
  function: 'function',
  event: 'event'
}

export type ApiSchema = typeof apiTypeSchema
