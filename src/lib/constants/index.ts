import {
  LayoutDashboard,
  ShieldAlertIcon,
  User2Icon,
  UsersRoundIcon
} from 'lucide-react'

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Prostore'
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  'A modern ecommerce store built with Next.js'
//export const SERVER_URL =
//  process.env.NEXT_PUBLIC_SERVER_URL || 'https://next-learn-dashboard.vercel.sh' FOR PRODUCTION ONLY

export const navbarLinks = [
  { id: 1, url: '/dashboard', label: 'Dashboard' },
  { id: 2, url: '/clients', label: 'Clients' },
  { id: 3, url: '/admin', label: 'Admin' },
  { id: 4, url: '/admin/team', label: 'Team' }
]

export const navMain = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
    isActive: false,
    items: [
      {
        title: 'Dashboard - home',
        url: '/dashboard'
      }
    ]
  },
  {
    title: 'Clients',
    url: '/clients',
    icon: UsersRoundIcon,
    items: [
      {
        title: 'clients schedule',
        url: '/clients'
      }
    ]
  },
  {
    title: 'Admin',
    url: '/admin',
    icon: ShieldAlertIcon,
    items: [
      {
        title: 'Admin tasks',
        url: '/admin'
      },
      {
        title: 'Create team member',
        url: '/admin/team/create'
      }
    ]
  },

  {
    title: 'Team',
    url: '/admin/team',
    icon: User2Icon,
    items: [
      {
        title: 'Team members',
        url: '/admin/team'
      }
    ]
  }
]

export const navClient = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
    isActive: false,
    items: [
      {
        title: 'Dashboard - home',
        url: '/dashboard'
      }
    ]
  },

  {
    title: 'Accounts',
    url: '/accounts',
    icon: ShieldAlertIcon,
    items: [
      {
        title: 'Accounts- summary',
        url: '/accounts'
      },
      {
        title: 'Notes and queries',
        url: '/accounts/notes-and-queries'
      }
    ]
  },

  {
    title: 'Planning',
    url: '/accounts/planning',
    icon: User2Icon,
    items: [
      {
        title: 'Planning schedules',
        url: '/accounts/planning'
      }
    ]
  }
]
