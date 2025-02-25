import { APP_NAME } from '@/lib/constants'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t'>
      <div className='flex flex-col items-center justify-center p-5 md:flex-row'>
        <div className='space-x-8 pr-8'>
          <Link
            href='https://1manstartup.com/privacy-policy'
            target='_blank'
            className='btn btn-link'
          >
            Privacy
          </Link>
          <span>|</span>
          <Link
            href='https://1manstartup.com/terms-and-conditions'
            target='_blank'
            className='btn btn-link'
          >
            Terms
          </Link>
          <span>|</span>
        </div>

        <span className='mr-8 flex items-center text-primary'>
          Contact - admin@wpaccpac.org
        </span>

        <span className='lg:ml-8'>
          Copyright © {currentYear}, {APP_NAME}. All Rights Reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
