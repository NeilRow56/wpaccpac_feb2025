'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { CLIENT_TYPES, clientDefaultValues } from '@/lib/constants'
import { Client } from '@/lib/types'
import { clientSchema } from '@/lib/validators/client'
import { zodResolver } from '@hookform/resolvers/zod'
import slugify from 'slugify'
import { useRouter } from 'next/navigation'
import { ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { SubmitButton } from '@/components/shared/submit-button'
import { createClient, updateClient } from '@/lib/actions/client.actions'

const ClientForm = ({
  type,
  client,
  clientId
}: {
  type: 'Create' | 'Update'
  client?: Client
  clientId?: string
}) => {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),

    defaultValues: client && type === 'Update' ? client : clientDefaultValues
  })
  const onSubmit: SubmitHandler<
    z.infer<typeof clientSchema>
  > = async values => {
    // On Create
    if (type === 'Create') {
      const res = await createClient(values)

      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message
        })
      } else {
        toast({
          description: res.message
        })
        router.push('/clients')
      }
    }

    // On Update
    if (type === 'Update') {
      if (!clientId) {
        router.push('/clients')
        return
      }

      const res = await updateClient({ ...values, id: clientId })

      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message
        })
      } else {
        toast({
          description: res.message
        })
        router.push('/admin/products')
      }
    }
  }

  const isActive = form.watch('isActive')
  return (
    <Form {...form}>
      <form
        method='POST'
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto mt-12 max-w-6xl space-y-8 rounded-lg border'
      >
        <div className='flex flex-col gap-5 md:flex-row md:px-8 lg:px-12 xl:px-16'>
          {/* Name */}
          <FormField
            control={form.control}
            name='name'
            render={({
              field
            }: {
              field: ControllerRenderProps<z.infer<typeof clientSchema>, 'name'>
            }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-primary'>
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder='Enter client name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Slug */}
          <FormField
            control={form.control}
            name='slug'
            render={({
              field
            }: {
              field: ControllerRenderProps<z.infer<typeof clientSchema>, 'slug'>
            }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-primary'>
                  Slug
                </FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input placeholder='Generate slug' {...field} />
                    <Button
                      type='button'
                      className='mt-4 bg-primary px-4 py-1 text-white hover:bg-primary/70'
                      onClick={() => {
                        form.setValue(
                          'slug',
                          slugify(form.getValues('name'), { lower: true })
                        )
                      }}
                    >
                      Generate
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-5 md:flex-row md:px-8 lg:px-12 xl:px-16'>
          {/* Category */}
          <div className='flex w-full'>
            <FormField
              control={form.control}
              name='category'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className='flex flex-col space-y-2'
                    >
                      {CLIENT_TYPES.map(clientType => (
                        <FormItem
                          key={clientType}
                          className='flex items-center space-x-3 space-y-0'
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={clientType}
                              checked={field.value === clientType}
                            />
                          </FormControl>
                          <FormLabel className='font-normal'>
                            {clientType}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <FormField
            control={form.control}
            name='category'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof clientSchema>,
                'category'
              >
            }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-primary'>
                  Category
                </FormLabel>
                <FormControl>
                  <Input placeholder='Enter category' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* Period End */}
          <FormField
            control={form.control}
            name='periodEnding'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof clientSchema>,
                'periodEnding'
              >
            }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-primary'>
                  Period end
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter accounting period end date'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-5 md:flex-row md:px-8 lg:px-12 xl:px-16'>
          {/* isActive */}
          <div className='flex w-full items-center py-4'>
            <FormField
              control={form.control}
              name='isActive'
              render={({ field }) => (
                <FormItem className='items-center space-x-2'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Is Active?</FormLabel>
                </FormItem>
              )}
            />
          </div>
          {/* Contact Info */}

          <FormField
            control={form.control}
            name='contactInfo'
            render={({
              field
            }: {
              field: ControllerRenderProps<
                z.infer<typeof clientSchema>,
                'contactInfo'
              >
            }) => (
              <FormItem className='w-full'>
                <FormLabel className='font-semibold text-primary'>
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Enter contact information'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-[150px] px-2 py-4 md:w-[200px] md:px-8 lg:w-[250px] lg:px-12 xl:px-16'>
          {/* Submit */}

          <SubmitButton text='Create' variant='create' />
        </div>
      </form>
    </Form>
  )
}

export default ClientForm
