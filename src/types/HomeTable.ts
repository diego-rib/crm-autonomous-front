import type { DataType } from './DataType'

export interface ColumnConfig {
  key: string
  label: string
  type?: DataType
}
