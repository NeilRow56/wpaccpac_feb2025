'use client'

import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'

import { Logo } from '../shared/logo'
import Link from 'next/link'
import { navClient } from '@/lib/constants'
import { NavMain } from '../dashboard/nav-main'
import ClerkUser from '../dashboard/clerk-user-sign-in'

export function ClientSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <Link href='/'>
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navClient} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <ClerkUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
