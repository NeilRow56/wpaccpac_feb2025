'use server'
import { revalidatePath } from 'next/cache'
import { prisma } from '../db/prisma'
import { insertClientSchema } from '../validators/client'
import { z } from 'zod'
import { formatError } from '../utils'

// Create a client
export async function createClient(data: z.infer<typeof insertClientSchema>) {
  try {
    const client = insertClientSchema.parse(data)
    await prisma.client.create({ data: client })

    revalidatePath('/clients')

    return {
      success: true,
      message: 'Client created successfully'
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
