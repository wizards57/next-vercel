import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
        <div className={'description'}>
        
           <p>
           Contact
            <Link href="/" >Ir Home<code className={'code'}>src/pages/index.js</code></Link>
          </p>
      </div>
      </MainLayout>
      
  )
}
