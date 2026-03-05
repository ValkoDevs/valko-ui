export const enum ApiTypeCategory {
  PRIMITIVE = 'primitive',
  CUSTOM_TYPE = 'custom-type',
  CUSTOM_STRING = 'custom-string',
  CUSTOM_NUMBER = 'custom-number',
  OBJECT = 'object',
  FUNCTION = 'function',
  EVENT = 'event',
  SLOT = 'slot'
}

export const enum PrimitiveType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  NULL = 'null',
  UNDEFINED = 'undefined',
  DATE = 'Date',
  ANY = 'any',
  UNKNOWN = 'unknown',
  EPOCH_TIMESTAMP = 'EpochTimeStamp'
}

export type ApiType = `${ApiTypeCategory}`
export type Primitive = `${PrimitiveType}`
