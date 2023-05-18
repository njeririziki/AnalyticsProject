import Head from 'next/head'
import LogIn from '@/components/auth/LogIn'
import MainLayout from '@/components/layouts/default'
import Splashpage from './splashpage'



export default function Home() {
  return (
    <>
      <Head>
        <title>Lisa</title>
         <meta name="description" content="lisa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout >
     <Splashpage/>
      </MainLayout>
      
     
    </>
  )
}
