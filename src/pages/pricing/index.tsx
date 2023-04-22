import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
     <div className={'description'}>
        
           <p>
           Pricing
            <Link href="/about/" >Ir About<code className={'code'}>src/pages/about/index.js</code></Link>
          </p>
      </div>
    </MainLayout>
  )
}
