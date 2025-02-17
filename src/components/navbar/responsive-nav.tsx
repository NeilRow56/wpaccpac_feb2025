'use client'

import { useState } from 'react'
import MobileNavbar from './mobile-nav'
import NavbarFull from './nav-full'

const ResponsiveNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(true)
  }
  const handleHideNavbar = () => {
    setShowNavbar(false)
  }
  return (
    <div>
      <NavbarFull openNavbar={handleShowNavbar} />
      <MobileNavbar showNavbar={showNavbar} closeNavbar={handleHideNavbar} />
    </div>
  )
}

export default ResponsiveNavbar
