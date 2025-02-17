import { navbarLinks } from '@/lib/constants'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type MobileNavbarProps = {
  showNavbar: boolean
  closeNavbar: () => void
}

const MobileNavbar = ({ showNavbar, closeNavbar }: MobileNavbarProps) => {
  const navbarOpen = showNavbar ? 'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navbarOpen} inset-0 z-[999] h-screen w-full transform bg-black opacity-70 transition-all duration-500`}
      ></div>
      {/* Navbar Links */}
      <div
        className={`fixed ${navbarOpen} z-[10006] flex h-full w-[80%] transform flex-col justify-center space-y-6 bg-indigo-900 text-white transition-all delay-300 duration-500 sm:w-[60%]`}
      >
        {navbarLinks.map(item => (
          <Link key={item.id} href={item.url}>
            <p className='nav_link ml-12 border-b-[1.5px] border-white pb-1 text-[15px] text-white sm:text-[20px]'>
              {item.label}
            </p>
          </Link>
        ))}
        {/* Close Icon */}
        <CgClose
          onClick={closeNavbar}
          className='absolute right-[1.4rem] top-[0.7rem] h-6 w-6 cursor-pointer sm:h-8 sm:w-8'
        />
      </div>
    </div>
  )
}

export default MobileNavbar
