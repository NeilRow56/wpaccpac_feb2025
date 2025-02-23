import { z } from 'zod'
import { insertClientSchema } from '../validators/client'

export type Client = z.infer<typeof insertClientSchema> & {
  id: string
  createdAt: Date
  updatedAt: Date
}
