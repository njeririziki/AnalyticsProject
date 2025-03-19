import Head from 'next/head'
import LogIn from '@/components/auth/LogIn'
import MainLayout from '@/components/layouts/default'
import { User } from '@/types/types';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomePage from './dashboard';


export default function Home() {
  const {push}=useRouter()

  useEffect(() => {

    const tk=sessionStorage.getItem('token')
      
      if(tk){
       console.log('header', tk)  
       const userJSON= sessionStorage.getItem('user')
       const user:User | null = userJSON? JSON.parse(userJSON):null;
       const url=user?.image? user?.image:'/images/Ellipse 99.png'
      
       } else{
      console.log('is unauthenticated')
      push('/authentication/login')
    }
    
  }, []);
  return (
    <>
      <Head>
        <title>Cyvil</title>
         <meta name="description" content="Cyvil" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <HomePage/>
    </>
  )
}
