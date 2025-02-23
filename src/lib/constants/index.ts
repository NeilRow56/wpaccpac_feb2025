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

export const role = 'admin'

export const navbarLinks = [
  {
    id: 1,
    url: '/dashboard',
    label: 'Dashboard',
    visible: ['admin', 'manager']
  },
  { id: 2, url: '/clients', label: 'Clients', visible: ['admin', 'manager'] }
  // { id: 3, url: '/admin', label: 'Admin', visible: ['admin', 'manager'] },
  // { id: 4, url: '/admin/team', label: 'Team', visible: ['admin', 'manager'] }
]

export const navMain = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard,
    isActive: false,
    visible: ['admin', 'manager', 'staff'],
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
    visible: ['admin', 'manager', 'staff'],
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
    visible: ['admin'],
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
    visible: ['admin', 'manager', 'staff'],
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
    visible: ['admin', 'manager'],
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
    visible: ['admin', 'manager'],
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
    visible: ['admin', 'manager'],
    items: [
      {
        title: 'Planning schedules',
        url: '/accounts/planning'
      }
    ]
  }
]

export const clientDefaultValues = {
  name: '',
  slug: '',
  spupervisor: '',
  category: '',
  periodEnd: '',
  status: '',
  contactInfo: '',
  userId: '',
  isActive: true
}
