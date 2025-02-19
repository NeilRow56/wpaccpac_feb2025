'use client'

import * as React from 'react'

import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'

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

// This is sample data.
const data = {
  user: {
    name: 'library',
    email: 'admin@library.com',
    avatar: '/avatar.png'
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ]
}

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
      <SidebarFooter>USER</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
