import { ClientSidebar } from '@/components/client/client-sidebar'
import ClerkUser from '@/components/dashboard/clerk-user-sign-in'

import { DashboardItems } from '@/components/dashboard/dashboard-items'
import { ThemeToggle } from '@/components/dashboard/theme-toggle'
import Footer from '@/components/shared/footer'
import { Button } from '@/components/ui/button'

import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

import React from 'react'

type NavbarProps = {
  children: React.ReactNode
}

function ClientLayout({ children }: NavbarProps) {
  return (
    <SidebarProvider>
      <ClientSidebar />
      <SidebarInset>
        <header className='fixed left-0 right-0 top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4 md:left-[250px]'>
          <div className='container mx-auto flex grow items-center justify-between gap-2 px-4'>
            <div className='flex items-center gap-2'>
              <SidebarTrigger className='-ml-1' />
              <Separator orientation='vertical' className='mr-2 h-4' />
            </div>

            {/* NavbarLinks */}

            <DashboardItems />
            <div className='flex items-center gap-3'>
              <ThemeToggle />

              <ClerkUser />
            </div>
          </div>
        </header>

        <main className='container mx-auto mt-16 h-screen p-2'>{children}</main>

        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default ClientLayout
