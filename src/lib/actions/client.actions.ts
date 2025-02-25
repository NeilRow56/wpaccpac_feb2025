'use server'
import { revalidatePath } from 'next/cache'
import { prisma } from '../db/prisma'
import { clientSchema } from '../validators/client'
import { z } from 'zod'
import { formatError } from '../utils'
import { auth } from '@clerk/nextjs/server'

// Create a client
export async function createClient(data: z.infer<typeof clientSchema>) {
  const { userId } = await auth()

  if (!userId) {
    return { error: 'Unauthorized' }
  }
  try {
    const client = clientSchema.parse(data)
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

// Update a client
export async function updateClient(data: z.infer<typeof clientSchema>) {
  try {
    const client = clientSchema.parse(data)
    const clientExists = await prisma.client.findFirst({
      where: { id: client.id }
    })

    if (!clientExists) throw new Error('Client not found')

    await prisma.client.update({
      where: { id: client.id },
      data: client
    })

    revalidatePath('/clients')

    return {
      success: true,
      message: 'Client updated successfully'
    }
  } catch (error) {
    return { success: false, message: formatError(error) }
  }
}
