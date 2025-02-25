import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const ClientsPage = async () => {
  return (
    <div className='flex flex-col'>
      <div className='space-y-4'>
        <span className=''>
          <h1 className='text-2xl font-bold lg:text-3xl'>Clients</h1>
        </span>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <div>
              <span className='mr-2'>Filtered by:</span>
              <Link href='/clients'>
                <Button variant='outline' size='sm'>
                  Remove Filter:
                </Button>
              </Link>
            </div>
          </div>
          <Button asChild variant='default'>
            <Link href='clients/create'>Create Client</Link>
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead className=''>CATEGORY</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead>PERIOD END</TableHead>
              <TableHead>SUPERVISOR</TableHead>
              <TableHead className='w-[100px] text-center'>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell className=''>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Period end</TableCell>
              <TableCell>Supervisor</TableCell>
              <TableCell className='flex gap-1'>
                <Button asChild variant='outline' size='sm'>
                  <Link href={`/#`}>Edit</Link>
                </Button>
                <Button asChild variant='outline' size='sm'>
                  <Link href={`/#`} className='text-red-500'>
                    Delete
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ClientsPage
