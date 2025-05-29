import type { Product } from './Product'

export type Tag = string

export interface Alumn {
  id: number
  name: string
  phone: string
  email: string
  obs?: string
  tags: Tag[]

  first_contact_date: string | Date
  last_contact_date: string | Date

  expiring_product: string
  expiration_date: string | Date

  products: Product[]
}
