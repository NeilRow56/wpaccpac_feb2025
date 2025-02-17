'use client'

import { navbarLinks } from '@/lib/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Button } from '../ui/button'

type NavbarProps = {
  openNavbar: () => void
}

const NavbarFull = ({ openNavbar }: NavbarProps) => {
  const [navbarBg, setNavbarBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavbarBg(true)
      if (window.scrollY <= 90) setNavbarBg(false)
    }
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])
  return (
    <div
      className={`fixed ${navbarBg ? 'bg-white shadow-md' : 'fixed'} z-[999] h-[9vh] w-full transition-all duration-200`}
    >
      <div className='mx-auto flex h-full w-[90%] items-center justify-between xl:w-[80%]'>
        {/* Logo */}
        <h1 className='text-xl font-extrabold md:text-3xl'>
          <span className='text-3xl text-yellow-600 md:text-4xl'>Wp</span>AccPac
        </h1>
        {/* NavbarLinks */}
        <div className='hidden items-center space-x-10 lg:flex'>
          {navbarLinks.map(item => (
            <Link key={item.id} href={item.url}>
              <p className='nav_link'>{item.label}</p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className='flex items-center space-x-4'>
          <Button
            asChild
            className='rounded-full bg-blue-700 px-6 py-2 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-900 md:px-8 md:py-2.5'
          >
            <Link href='/sign-in'>Join Now</Link>
          </Button>
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNavbar}
            className='h-8 w-8 cursor-pointer text-black lg:hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default NavbarFull
