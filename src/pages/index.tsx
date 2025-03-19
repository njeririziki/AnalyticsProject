import Head from 'next/head'
import LogIn from '@/components/auth/LogIn'
import MainLayout from '@/components/layouts/default'
import { AuthProvider } from '@/context/AuthContext'



export default function Home() {
  return (
    <>
      <Head>
        <title>Cyvil</title>
         <meta name="description" content="Cyvil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
      <MainLayout >
      <LogIn/>
      </MainLayout>
      </AuthProvider>
     
    </>
  )
}
