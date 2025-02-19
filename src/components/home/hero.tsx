import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function HeroPage() {
  return (
    <div className='h-screen w-full bg-[#f7f6fb] pt-[3vh]'>
      <div className='mx-auto flex w-[90%] flex-col justify-center sm:w-[80%]'>
        <div className='flex w-full justify-between'>
          <div></div>
          <Button
            asChild
            size='lg'
            className='mt-8 rounded-full bg-green-500 px-6 py-6 text-xl font-semibold text-white transition-all duration-200 hover:bg-green-500/70 md:px-8 md:py-2.5'
          >
            <Link href='/sign-in'>Join Now</Link>
          </Button>
        </div>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          {/* Text Content */}
          <div>
            {/* Top Box */}
            <div className='flex w-fit items-center space-x-3 rounded-full bg-white px-2 py-1.5 shadow-md md:px-5'>
              <div className='rounded-full bg-blue-700 px-3 py-1 text-white sm:text-xs md:px-5 md:text-base'>
                News
              </div>
              <p className='text-xs sm:text-sm'>
                We have updated our terms and conditions policy
              </p>
            </div>
            {/* Heading */}
            <h1 className='mb-6 mt-6 text-2xl font-bold text-yellow-600 sm:text-4xl md:text-5xl md:leading-[3rem] lg:leading-[3.5rem]'>
              Create, and store, schedules for working papers with ease.
            </h1>
            {/* Description */}

            <ul className='mb-[160px] mt-8 max-w-xl list-disc space-y-4 pl-4 font-bold text-muted-foreground'>
              <li className=''>Online accounts preparation file.</li>
              <li>Automatic comparative schedules.</li>
              <li>Secure cloud storage.</li>
              <li>
                Images and pdf files available direct from working papers.
              </li>
            </ul>
            <div className='items-center justify-center'>
              <Button className='w-[150px] rounded-full bg-blue-700 hover:bg-blue-700/70'>
                <Link href='#pricing'>Pricing</Link>
              </Button>
              <p className='mt-12 text-xl text-yellow-600 sm:text-4xl'>
                Try for Free - full pricing schedule below
              </p>
            </div>
            <div className='mt-4 hidden lg:block'>
              <Image
                className='rounded-lg'
                src='/images/a.jpg'
                alt='Hero image'
                width={300}
                height={300}
              />
            </div>
          </div>

          {/* Image Content */}

          <div className='hidden lg:block'>
            <Image
              src='/images/hero.png'
              alt='Hero image'
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
