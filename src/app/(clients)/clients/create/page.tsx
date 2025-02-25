import { Metadata } from 'next'
import ClientForm from './client-form'

export const metadata: Metadata = {
  title: 'Create Client'
}

const CreateClientPage = () => {
  return (
    <>
      <h2 className='mt-8 text-2xl font-bold lg:text-3xl'>Create Client</h2>
      <div className='my-8'>
        <ClientForm type='Create' />
      </div>
    </>
  )
}

export default CreateClientPage
