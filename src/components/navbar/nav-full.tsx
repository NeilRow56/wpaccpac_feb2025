'use client'

import { useEffect, useState } from 'react'

type NavbarProps = {
  openNavbar: () => void
}

const NavbarFull = () => {
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
    <>
      <div
        className={`fixed ${navbarBg ? 'bg-white shadow-md' : 'fixed'} z-[999] h-[9vh] w-full bg-blue-100 transition-all duration-200`}
      >
        <div className='ml-[150px] mr-[150px] flex h-full w-[75%] items-center justify-center bg-red-100'>
          <div className='container flex h-8 bg-purple-50'>Join</div>
        </div>
      </div>
    </>
  )
}

export default NavbarFull
