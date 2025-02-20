import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found'
}

export default function NotFound() {
  return (
    <div className='w-full px-2'>
      <div className='mx-auto flex flex-col items-center justify-center gap-4 py-4 sm:h-screen'>
        <h2 className='text-2xl'>Page Not Found</h2>
        <Image
          className='m-0 rounded-xl'
          src='/not-found-1024x1024.png'
          width={350}
          height={350}
          sizes='350px'
          alt='Page Not Found'
          priority={true}
          title='Page Not Found'
        />

        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <Link
            href={'/clients'}
            className='mt-6 flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/50'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Client List
          </Link>
        </div>

        <footer className='mt-12 text-center text-sm text-muted-foreground'>
          If you believe this is an error, please contact our support team.
        </footer>
      </div>
    </div>
  )
}
