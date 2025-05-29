import type { DataType } from '@/types/DataType'
import { formatDateToDDMMYYYY } from './formatDate'

export function dynamicTableValueFormat(value: DataType, type?: unknown): DataType | null {
  if (!type) return value

  let formattedValue: DataType = value

  switch (type) {
    case 'string':
      formattedValue = String(value)
      break
    case 'number':
      formattedValue = typeof value === 'number' ? value : Number(value)
      break
    case 'date':
      if (value instanceof Date) {
        formattedValue = formatDateToDDMMYYYY(value)
      } else {
        const date = new Date(String(value))
        formattedValue = isNaN(date.getTime()) ? null : formatDateToDDMMYYYY(date)
      }
      break
    case 'array':
      if (value instanceof Array) {
        formattedValue = value.join(', ')
      }
      break
    default:
      formattedValue = value
      break
  }

  return formattedValue
}
