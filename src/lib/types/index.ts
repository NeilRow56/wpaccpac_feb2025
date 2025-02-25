import { z } from 'zod'
import { clientSchema } from '../validators/client'

export type Client = z.infer<typeof clientSchema> & {
  id: string
  createdAt: Date
  updatedAt: Date
}
