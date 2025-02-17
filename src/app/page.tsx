import Home from '@/components/home/home'
import { Pricing } from '@/components/home/pricing'

export default function HomePage() {
  return (
    <div className=''>
      <Home />
      <div className='container mx-auto'>
        <Pricing />
      </div>
    </div>
  )
}
