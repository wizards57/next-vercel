import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../../../components/layouts/MainLayout'
import { DarkLayout } from '../../../components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      
        <div className={'description'}>
        
           <p>
            About
            <Link href="/contact" >Ir a Contact<code className={'code'}>src/pages/about.js</code></Link>
          </p>
        </div>
        
     </>
  )
}

AboutPage.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
      </MainLayout>
  )
}
