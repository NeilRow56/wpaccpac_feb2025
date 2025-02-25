import { z } from 'zod'

// Schema for inserting clients
export const clientSchema = z.object({
  id: z.string(),
  userId: z.string().min(1, 'User is required'),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  supervisor: z.string().min(2, 'Supervisor must be at least 3 characters'),
  category: z.string().min(3, 'Category must be at least 3 characters'),
  periodEnding: z.string().optional(),
  status: z.string().min(3, 'Status must be at least 3 characters'),
  contactInfo: z.string().optional(),
  isActive: z.boolean()
})

// export const updateClientSchema = insertClientSchema.extend({
//   id: z.string().min(1, 'Id is required')
// })
