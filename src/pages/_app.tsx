import '@/styles/globals.css';
import localFont from 'next/font/local'
import { AuthProvider } from '@/context/AuthContext'
import type { AppProps } from 'next/app'

const poppins = localFont({ 
              src:[
                {
                 path:'../../public/fonts/Poppins-Regular.ttf',
                   weight:'400'
                },
                {
                  path:'../../public/fonts/Poppins-Bold.ttf',
                    weight:'700'
                 },
                 {
                  path:'../../public/fonts/Poppins-ExtraBold.ttf',
                    weight:'800'
                 },
                 {
                  path:'../../public/fonts/Poppins-Light.ttf',
                    weight:'300'
                 },
              ],
               variable:'--font-poppins' })


export default function App({ Component, pageProps }: AppProps) {

  return <AuthProvider>
         <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
        </main>
        </AuthProvider>
}


// {
//   path:'../../public/fonts/Merriweather-Bold.ttf',
//   weight:'700'
// },
// {
//   path:'../../public/fonts/Merriweather-Light.ttf',
//   weight:'300'
// },