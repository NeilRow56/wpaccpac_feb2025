'use client'

import { navbarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function DashboardItems() {
  const pathname = usePathname()
  return (
    <>
      {navbarLinks.map(item => (
        <Link
          href={item.url}
          key={item.id}
          className={cn(
            pathname == item.url
              ? 'bg-muted text-lg font-bold text-primary'
              : 'bg-none text-muted-foreground',
            'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70'
          )}
        >
          <span className='nav_link hidden md:block'>{item.label}</span>
        </Link>
      ))}
    </>
  )
}
