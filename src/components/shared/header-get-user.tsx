import { checkUser } from '@/lib/check-user'

export default async function HeaderGetUser() {
  const user = await checkUser()

  return null
}
