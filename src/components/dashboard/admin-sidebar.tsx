'use client'

import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import { NavMain } from './nav-main'

import { Logo } from '../shared/logo'
import Link from 'next/link'
import { navMain } from '@/lib/constants'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ClerkUser from './clerk-user-sign-in'

export function AdminSidebar({
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
        <NavMain items={navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <ClerkUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
